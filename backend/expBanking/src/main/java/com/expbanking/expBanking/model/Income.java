package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Table(name = "income")
@Getter
@Setter
public class Income {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "income_id", nullable = false, updatable = false)
    private Long incomeId;

    @Column(name = "amount", nullable = false)
    private Double amount;

    @Column(name = "date_of_payment")
    private Timestamp dateOfPayment;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "transactions_id")
    private Transactions transactions;

    public Income() {}

    public Income(Double amount, Timestamp dateOfPayment, String description) {
        this.amount = amount;
        this.dateOfPayment = dateOfPayment;
        this.description = description;
    }
}
