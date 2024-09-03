package com.expbanking.expBanking.model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Table(name = "transactions")
@Data
@Getter
@Setter

public class Transactions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long transactionId;

    @Column(name = "date_of_transaction")
    private Timestamp dateOfTransaction;

    @Column(name = "amount")
    private Double amount;

    @Column(name = "details")
    private String details;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User user;

    @ManyToOne
    @JoinColumn(name = "transaction_type_id", referencedColumnName = "transactionTypeId")
    private TransactionType transactionType;

    public Transactions(){

    }
    public Transactions(Long transactionId, Timestamp dateOfTransaction,Double amount,String details, User user){
        this.transactionId = transactionId;
        this.dateOfTransaction = dateOfTransaction;
        this.amount = amount;
        this.details = details;
        this.user = user;
        //this.transactionTypeId = transactionTypeId;
    }
}
