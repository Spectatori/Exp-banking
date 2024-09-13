package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Data
@Table(name = "accounts")
@NoArgsConstructor
@AllArgsConstructor
public class Accounts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long accountId;

    @Column(name = "currency", nullable = false)
    private String currency;

    @Column(name = "balance")
    private BigDecimal balance;

    @Column(name = "iban")
    private String iban;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User user;

    //@OneToOne(mappedBy = "accounts")
    @OneToOne
    @JoinColumn(name = "account_type_id", referencedColumnName = "accountTypeId")
    private AccountType accountType;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    private List<Transactions> transactions;

    public Accounts(String currency, BigDecimal balance) {
        this.currency = currency;
        this.balance = balance;
    }
}