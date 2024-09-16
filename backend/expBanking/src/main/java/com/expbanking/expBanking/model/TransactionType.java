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
@NoArgsConstructor
public class TransactionType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long transactionTypeId;

    @Column(name = "transaction_type_name")
    private String transactionTypeName;

    @OneToMany(mappedBy = "transactionType",cascade = CascadeType.PERSIST)
    private List<Transactions> transactions;

    public TransactionType(Long transactionTypeId, String transactionTypeName){
        this.transactionTypeId = transactionTypeId;
        this.transactionTypeName = transactionTypeName;
    }

}
