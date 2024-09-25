package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "Loans")
@Data
public class Loan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long loanId;

    @ManyToOne
    @JoinColumn(name = "account_id", nullable = false)
    private Accounts account;  // Associated account for the loan

    @Column(name = "total_amount")
    private double totalAmount;   // Total loan amount

    @Column(name = "monthly_payment")
    private double monthlyPayment; // Calculated monthly payment amount

    @Column(name = "remaining_balance")
    private double remainingBalance; // Remaining loan balance

    @Column(name = "next_date_of_payment")
    private LocalDate nextDateOfPayment;

    @Column(name = "final_date")
    private LocalDate finalDate;

    @Column(name = "date_of_applying")
    private LocalDate dateOfApplying; // The next due date for the payment

}
