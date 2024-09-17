package com.expbanking.expBanking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.List;

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

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "accountId", nullable = false)
    private Accounts account;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "transaction_type_id", referencedColumnName = "transactionTypeId")
    private TransactionType transactionType;

    public Transactions() {
    }

    public Transactions(Timestamp dateOfTransaction, Double amount, String details) {
        this.dateOfTransaction = dateOfTransaction;
        this.amount = amount;
        this.details = details;
    }
}