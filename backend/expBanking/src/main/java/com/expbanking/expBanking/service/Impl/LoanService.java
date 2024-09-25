package com.expbanking.expBanking.service.Impl;
import com.expbanking.expBanking.dto.TransactionsDTO;
import com.expbanking.expBanking.model.Accounts;
import com.expbanking.expBanking.model.Loan;
import com.expbanking.expBanking.model.TransactionType;
import com.expbanking.expBanking.repository.AccountsRepository;
import com.expbanking.expBanking.repository.LoanRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;
@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;
    @Autowired
    private AccountsRepository accountsRepository;
    @Autowired
    private TransactionServiceImpl transactionService;
    @Autowired
    private RiskAssessmentService riskAssessmentService;

    public void saveLoan(double totalAmount, String typeOfLoan, int loanTermMonths,Long accountId){
        Loan approvedLoan = new Loan();
        Optional<Accounts> account = accountsRepository.findById(accountId);
        approvedLoan.setAccount(account.get());
        approvedLoan.setTotalAmount(totalAmount);
        approvedLoan.setDateOfApplying(LocalDate.now());
        double monthlyPayment = riskAssessmentService
                .calculateMonthlyPayment(totalAmount, typeOfLoan, loanTermMonths);
        approvedLoan.setMonthlyPayment(monthlyPayment);
        approvedLoan.setFinalDate(approvedLoan.getDateOfApplying().plusMonths(loanTermMonths));
        approvedLoan.setNextDateOfPayment(approvedLoan.getDateOfApplying().plusMonths(1));
        int monthsPayed = 0;
        double remainingBalance = riskAssessmentService.calculateRemainingBalance(totalAmount,typeOfLoan,loanTermMonths,monthsPayed);
        approvedLoan.setRemainingBalance(remainingBalance);
        loanRepository.save(approvedLoan);

    }

    public void processLoanPayments() {
        List<Loan> loans = loanRepository.findLoansWithDuePayments(LocalDate.now());

        for (Loan loan : loans) {
            Accounts account = loan.getAccount();
            double monthlyPayment = loan.getMonthlyPayment();

            // Check if the account has enough balance
            if (account.getBalance().compareTo(BigDecimal.valueOf(monthlyPayment)) >= 0) {

                Timestamp dateOfPayment = Timestamp.valueOf(LocalDateTime.now());
                String details = "Payment for credit.";
                TransactionType transactionType = new TransactionType();
                double expenseMonthlyPayment = -monthlyPayment;
                TransactionsDTO transactionsDTO = new TransactionsDTO(dateOfPayment, expenseMonthlyPayment,details,transactionType);
                transactionService.createTransaction(transactionsDTO,account.getAccountId());

                // Deduct the monthly payment from the account balance
                account.setBalance(account.getBalance().subtract(BigDecimal.valueOf(monthlyPayment)));

                // Reduce the loan's remaining balance
                loan.setRemainingBalance(loan.getRemainingBalance() - monthlyPayment);

                // Update the loan's next payment date
                loan.setNextDateOfPayment(loan.getNextDateOfPayment().plusMonths(1));

                // Save the updated account and loan
                accountsRepository.save(account);
                loanRepository.save(loan);
            } else {
                // Handle insufficient funds (e.g., log, notify, or trigger penalties)
                System.out.println("Insufficient funds for account ID: " + account.getAccountId());
            }
        }
    }
    @Component
    @EnableScheduling
    public class LoanPaymentScheduler {

        @Autowired
        private LoanService loanService;

        // Scheduler to trigger the loan payment process every 3 seconds, after an initial delay of 5 seconds
        @Scheduled(fixedDelay =  30 * 24 * 60 * 60 * 1000L)
        public void scheduleLoanPayments() {
            loanService.processLoanPayments();

            // Optional: Log the time the task runs
            SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss.SSS");
            String strDate = dateFormat.format(new Date());
            System.out.println("Scheduled Loan Payment Processing at - " + strDate);
        }
    }
}

