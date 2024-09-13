package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Table(name = "expenses")
@Getter
@Setter
public class Expenses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "expenses_id", nullable = false, updatable = false)
    private Long expensesId;

    @Column(name = "amount", nullable = false)
    private Double amount;

    @Column(name = "date_of_payment")
    private Timestamp dateOfPayment;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "transactions_id")
    private Transactions transactions;
    public Expenses(){}
    public Expenses( Double amount,
                     Timestamp dateOfPayment,
                     String description){
        this.amount=amount;
        this.dateOfPayment=dateOfPayment;
        this.description=description;
    }
}
