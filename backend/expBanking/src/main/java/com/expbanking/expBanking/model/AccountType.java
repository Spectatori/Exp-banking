package com.expbanking.expBanking.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class AccountType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long accountTypeId;

    @Column(name = "account_type")
    private String accountType;

    //@OneToOne
    //@JoinColumn(name = "account_id", referencedColumnName = "accountId")
    @OneToOne(mappedBy = "accountType")
    private Accounts account;
}
