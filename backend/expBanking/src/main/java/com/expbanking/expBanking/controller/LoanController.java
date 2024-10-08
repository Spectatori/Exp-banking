package com.expbanking.expBanking.controller;
import com.expbanking.expBanking.model.Accounts;
import com.expbanking.expBanking.model.Loan;
import com.expbanking.expBanking.model.UserFinancialSummary;
import com.expbanking.expBanking.repository.AccountsRepository;
import com.expbanking.expBanking.repository.LoanRepository;
import com.expbanking.expBanking.service.Impl.AccountsServiceImpl;
import com.expbanking.expBanking.service.Impl.FinancialSummaryService;
import com.expbanking.expBanking.service.Impl.LoanService;
import com.expbanking.expBanking.service.Impl.RiskAssessmentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/loan")
public class LoanController {

    @Autowired
    private FinancialSummaryService financialSummaryService;
    @Autowired
    private AccountsRepository accountsRepository;
    @Autowired
    private LoanService loanService;
    @Autowired
    private LoanRepository loanRepository;
    @Autowired
    private AccountsServiceImpl accountsService;
    @Autowired
    private RiskAssessmentService riskAssessmentService;
    private final static String IBAN = "BANK";

    @GetMapping("/{userId}")
    public ResponseEntity<Optional<UserFinancialSummary>> getFinancialSummary(@PathVariable Long userId) {
        Optional<UserFinancialSummary> summary = financialSummaryService.getFinancialSummary(userId);
        return ResponseEntity.ok(summary);
    }

    @PostMapping("/apply/{userId}")
    public ResponseEntity<String> applyForLoan(@PathVariable Long userId, @RequestBody Map<String, Object> requestBody) {
        double loanAmount = Double.parseDouble(String.valueOf(requestBody.get("loanAmount")));
        String iban = String.valueOf(requestBody.get("iban"));
        String typeOfLoan = String.valueOf(requestBody.get("typeOfLoan"));
        int loanTermMonths = Integer.parseInt(String.valueOf(requestBody.get("loanTermMonths")));

        Optional<UserFinancialSummary> summary = financialSummaryService.getFinancialSummary(userId);
        if (!summary.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Заемът е отказан поради липса на кредитна история");
        }

        double netIncome = summary.get().getTotalIncome() - Math.abs(summary.get().getTotalExpenses());
        if (netIncome <= 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Заемът е отказан поради недостатъчен баланс по сметката.");
        }
        double monthlyIncome = (summary.get().getTotalIncome() - Math.abs(summary.get().getTotalExpenses()))/6;
        if(monthlyIncome<(loanAmount/loanTermMonths)){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Заемът е отказан поради недостатъчен баланс по сметката.");

        }
        // Calculate risk score
        int riskScore = riskAssessmentService.calculateRiskScore(userId, loanAmount);

        // Evaluate loan approval based on risk score and net income
        if (riskScore >= 35 && netIncome > loanAmount * 0.5) {
            Optional<Accounts> account = accountsRepository.findAccountByIban(iban);
            BigDecimal loanAmountForTransfer = BigDecimal.valueOf(loanAmount);
            accountsService.transfer(IBAN, iban, loanAmountForTransfer);
            loanService.saveLoan(loanAmount, typeOfLoan, loanTermMonths,account.get().getAccountId());
            return ResponseEntity.ok("Заемът е одобрен.");
        } else if (riskScore >= 25 && riskScore < 35) {
            Optional<Accounts> account = accountsRepository.findAccountByIban(iban);
            BigDecimal loanAmountForTransfer = BigDecimal.valueOf(loanAmount);
            accountsService.transfer(IBAN, iban, loanAmountForTransfer);
            loanService.saveLoan(loanAmount, typeOfLoan, loanTermMonths,account.get().getAccountId());
            return ResponseEntity.ok("Заемът е одобрен,с повишен риск.");
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Заемът е отказан, поради висок риск.");
        }
    }


     //New endpoint to calculate monthly loan payment
    @GetMapping("/monthly-payment/{accountId}")
    public ResponseEntity<Double> calculateMonthlyPayment(@PathVariable Long accountId) {
        Optional<Accounts> account = accountsRepository.findById(accountId);
        Loan loan = loanRepository.findByAccount(account.get());
        return ResponseEntity.ok(loan.getMonthlyPayment());
    }

    // New endpoint to calculate remaining loan balance
    @GetMapping("/remaining-balance/{accountId}")
    public ResponseEntity<Double> calculateRemainingBalance(@PathVariable Long accountId) {
        Optional<Accounts> account = accountsRepository.findById(accountId);
        Loan loan = loanRepository.findByAccount(account.get());
        return ResponseEntity.ok(loan.getRemainingBalance());
    }





}
