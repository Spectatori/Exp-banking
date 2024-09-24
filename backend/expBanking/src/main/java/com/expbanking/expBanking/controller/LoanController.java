package com.expbanking.expBanking.controller;
import com.expbanking.expBanking.model.Accounts;
import com.expbanking.expBanking.model.Loan;
import com.expbanking.expBanking.model.UserFinancialSummary;
import com.expbanking.expBanking.repository.AccountsRepository;
import com.expbanking.expBanking.repository.LoanRepository;
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
    private RiskAssessmentService riskAssessmentService;

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
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No financial summary available for user");
        }

        double netIncome = summary.get().getTotalIncome() - summary.get().getTotalExpenses();
        if (netIncome <= 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Loan Denied due to insufficient income.");
        }

        // Calculate risk score
        int riskScore = riskAssessmentService.calculateRiskScore(userId, loanAmount);

        // Evaluate loan approval based on risk score and net income
        if (riskScore >= 30 && netIncome > loanAmount * 0.5) {
            //double loanAmount = Double.parseDouble(String.valueOf(requestBody.get("loanAmount")));


            double monthlyPayment = riskAssessmentService.calculateMonthlyPayment(loanAmount,typeOfLoan, loanTermMonths);
            Optional<Accounts> account = accountsRepository.findAccountByIban(iban);
            account.get().setBalance(account.get().getBalance().add(BigDecimal.valueOf(loanAmount)));
            loanService.saveLoan(loanAmount, typeOfLoan, loanTermMonths,account.get().getAccountId());
            accountsRepository.save(account.get());
            return ResponseEntity.ok("Loan Approved");
        } else if (riskScore >= 20) {

            double monthlyPayment = riskAssessmentService.calculateMonthlyPayment(loanAmount,typeOfLoan, loanTermMonths);
            Optional<Accounts> account = accountsRepository.findAccountByIban(iban);
            account.get().setBalance(account.get().getBalance().add(BigDecimal.valueOf(loanAmount)));
            loanService.saveLoan(loanAmount, typeOfLoan, loanTermMonths,account.get().getAccountId());
            accountsRepository.save(account.get());
            return ResponseEntity.ok("Loan Approved with higher interest rate.");
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Loan Denied due to high risk.");
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
