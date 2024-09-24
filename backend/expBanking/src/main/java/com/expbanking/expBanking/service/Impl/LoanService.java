package com.expbanking.expBanking.service.Impl;
import com.expbanking.expBanking.model.Accounts;
import com.expbanking.expBanking.model.Loan;
import com.expbanking.expBanking.repository.AccountsRepository;
import com.expbanking.expBanking.repository.LoanRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    @Autowired
    private AccountsRepository accountsRepository;

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
        int monthsPayed = 0;
        double remainingBalance = riskAssessmentService.calculateRemainingBalance(totalAmount,typeOfLoan,loanTermMonths,monthsPayed);
        approvedLoan.setRemainingBalance(remainingBalance);
        loanRepository.save(approvedLoan);
    }

    @Transactional
    public void processLoanPayments() {
        List<Loan> loans = loanRepository.findLoansWithDuePayments(LocalDate.now());

        for (Loan loan : loans) {
            Accounts account = loan.getAccount();
            double monthlyPayment = loan.getMonthlyPayment();

            if (account.getBalance().compareTo(BigDecimal.valueOf(monthlyPayment)) >= 0) {
                // Deduct the monthly payment from the account balance
                account.setBalance(account.getBalance().subtract(BigDecimal.valueOf(monthlyPayment)));

                // Reduce the loan remaining balance
                loan.setRemainingBalance(loan.getRemainingBalance()-(monthlyPayment));

                // Update the next payment date
                loan.setDateOfApplying(loan.getDateOfApplying().plusMonths(1));

                // Save both account and loan updates
                accountsRepository.save(account);
                loanRepository.save(loan);
            } else {
                // Handle insufficient funds (e.g., log, notify, or trigger penalties)
                System.out.println("Insufficient funds for account ID: " + account.getAccountId());
            }
        }
    }
}
