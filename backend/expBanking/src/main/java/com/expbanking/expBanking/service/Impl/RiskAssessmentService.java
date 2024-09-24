package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.model.UserFinancialSummary;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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

        // Step 1: Check if expenses exceed income, if yes, deny loan immediately
        if (financialSummary.getTotalExpenses() >= financialSummary.getTotalIncome()) {
            // Automatically reject loan if expenses are greater than or equal to income
            return -1; // Use -1 or any other flag to denote automatic rejection
        }

        // Step 2: Calculate the risk score if expenses are less than income
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
        double loanToIncomeRatio = calculateLoanToIncomeRatio(financialSummary, requestedLoanAmount);
        if (loanToIncomeRatio < 0.5) {
            riskScore += 10;
        }

        // Check high expenses relative to income
        if (financialSummary.getTotalExpenses() / financialSummary.getTotalIncome() > 0.5) {
            riskScore -= 20;  // Deduct points for high expenses
        }

        return riskScore;  // The higher the score, the lower the risk.
    }

    private double checkIncomeStability(Long userId) {
        // Implement logic to check if income has been stable over time
        List<Double> monthlyIncomes = financialSummaryService.getMonthlyIncomes(userId, 6);

        if (monthlyIncomes.isEmpty()) {
            return 0.0;  // No income data available, assume no stability
        }

        // Calculate average monthly income
        double averageIncome = monthlyIncomes.stream().mapToDouble(Double::doubleValue).average().orElse(0.0);

        // Check income stability
        double deviationThreshold = 0.1;  // 10% allowed deviation
        for (double income : monthlyIncomes) {
            double deviation = (income - averageIncome) / averageIncome;
            if (deviation > deviationThreshold) {
                return 0.0;  // Income unstable if deviation exceeds the threshold
            }
        }

        return 1.0;   // Example: fully stable
    }

    private double calculateDebtToIncomeRatio(UserFinancialSummary summary) {
        // Assume expenses are debts for simplicity
        return summary.getTotalExpenses() / summary.getTotalIncome();
    }

    private double calculateLoanToIncomeRatio(UserFinancialSummary summary, double requestedLoanAmount) {
        // Placeholder for real loan value
        return requestedLoanAmount / summary.getTotalIncome();
    }

    private double calculateMortgageToIncomeRatio(UserFinancialSummary summary, double requestedMortgageAmount) {
        return  requestedMortgageAmount / summary.getTotalIncome();
    }

    // Method to calculate the monthly loan payment
    public double calculateMonthlyPayment(double loanAmount,String typeOfLoan, int loanTermMonths) {
        double annualInterestRate = 3;
        if(typeOfLoan.equals("Mortgage")){
            annualInterestRate = 6;
        }
        double monthlyInterestRate = annualInterestRate / 12 / 100;  // Convert annual rate to monthly and percentage
        //return (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths)) /
                //(Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);
        return loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths))
                / (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);
    }

    // Method to calculate the remaining loan balance after a certain number of payments
    public double calculateRemainingBalance(double loanAmount, String typeOfLoan, int loanTermMonths, int monthsPaid) {
        double annualInterestRate = 3;
        if(typeOfLoan.equals("Mortgage")){
            annualInterestRate = 6;
        }
        double monthlyPayment = calculateMonthlyPayment(loanAmount, typeOfLoan, loanTermMonths);
        double monthlyInterestRate = annualInterestRate / 12 / 100;

        // Formula to calculate remaining balance after 'monthsPaid' payments
        //return loanAmount * Math.pow(1 + monthlyInterestRate, monthsPaid) -
                //monthlyPayment * (Math.pow(1 + monthlyInterestRate, monthsPaid) - 1) / monthlyInterestRate;
        return loanAmount * Math.pow(1 + monthlyInterestRate, monthsPaid) -
                (monthlyPayment * (Math.pow(1 + monthlyInterestRate, monthsPaid) - 1) / monthlyInterestRate);

    }
}