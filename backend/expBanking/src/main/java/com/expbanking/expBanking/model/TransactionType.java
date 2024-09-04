package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "transaction_type")
@Data
@Getter
@Setter
@NoArgsConstructor
public class TransactionType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long transactionTypeId;

    @Column(name = "transaction_type_name")
    @Enumerated()
    private TransactionTypeEnum transactionTypeName;

    @OneToMany(mappedBy = "transactionType")
    private List<Transactions> transactions;

    public TransactionType(Long transactionTypeId, TransactionTypeEnum transactionTypeName){
        this.transactionTypeId = transactionTypeId;
        this.transactionTypeName = transactionTypeName;
    }

}
