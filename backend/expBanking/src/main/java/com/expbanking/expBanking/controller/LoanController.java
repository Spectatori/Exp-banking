package com.expbanking.expBanking.controller;
import com.expbanking.expBanking.model.UserFinancialSummary;
import com.expbanking.expBanking.service.Impl.FinancialSummaryService;
import com.expbanking.expBanking.service.Impl.RiskAssessmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/loan")
public class LoanController {

    @Autowired
    private FinancialSummaryService financialSummaryService;


    @Autowired
    private RiskAssessmentService riskAssessmentService;

    @GetMapping("/{userId}")
    public ResponseEntity<Optional<UserFinancialSummary>> getFinancialSummary(@PathVariable Long userId) {
        Optional<UserFinancialSummary> summary = financialSummaryService.getFinancialSummary(userId);
        return ResponseEntity.ok(summary);
    }

    @PostMapping("/apply/{userId}")
    public ResponseEntity<String> applyForLoan(@PathVariable Long userId, @RequestBody Map<String, Double> requestBody) {
        Double loanAmount = requestBody.get("loanAmount");
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
            return ResponseEntity.ok("Loan Approved");
        } else if (riskScore >= 20) {
            return ResponseEntity.ok("Loan Approved with higher interest rate.");
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Loan Denied due to high risk.");
        }
    }


}
