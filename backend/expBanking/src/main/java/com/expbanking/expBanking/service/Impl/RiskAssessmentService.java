package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.model.UserFinancialSummary;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RiskAssessmentService {

    @Autowired
    private FinancialSummaryService financialSummaryService;

    @Transactional
    public int calculateRiskScore(Long userId, double requestedLoanAmount) {
        Optional<UserFinancialSummary> financialSummaryOpt = financialSummaryService.getFinancialSummary(userId);

        if (financialSummaryOpt.isEmpty()) {
            throw new RuntimeException("Financial summary not available");
        }

        UserFinancialSummary financialSummary = financialSummaryOpt.get();
        int riskScore = 0;

        // Income Stability (Example: 90% stability gets 10 points)
        double incomeStabilityScore = checkIncomeStability(userId);
        if (incomeStabilityScore > 0.9) {
            riskScore += 10;
        }

        // Debt-to-Income Ratio (Example: below 30% is good)
        double debtToIncomeRatio = calculateDebtToIncomeRatio(financialSummary);
        if (debtToIncomeRatio < 0.3) {
            riskScore += 15;
        }

        // Loan-to-Income Ratio (Smaller loan size compared to income)
        double loanToIncomeRatio = calculateLoanToIncomeRatio(financialSummary,requestedLoanAmount);
        if (loanToIncomeRatio < 0.5) {
            riskScore += 10;
        }

        // Check high expenses relative to income
        if (financialSummary.getTotalExpenses() / financialSummary.getTotalIncome() > 0.5) {
            riskScore -= 20;  // Deduct points for high expenses
        }

        // Add more risk factors (e.g. credit score, employment type, etc.)

        return riskScore;  // The higher the score, the lower the risk.
    }

    private double checkIncomeStability(Long userId) {
        // Implement logic to check if income has been stable over time
        return 1.0;  // Example: fully stable
    }

    private double calculateDebtToIncomeRatio(UserFinancialSummary summary) {
        // Assume expenses are debts for simplicity
        return summary.getTotalExpenses() / summary.getTotalIncome();
    }

    private double calculateLoanToIncomeRatio(UserFinancialSummary summary,double requestedLoanAmount) {
        // Placeholder for real loan value
        return requestedLoanAmount / summary.getTotalIncome();
    }
}
