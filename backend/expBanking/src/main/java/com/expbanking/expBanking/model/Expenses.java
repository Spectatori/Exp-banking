package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "expenses")
@Getter
@Setter
public class Expenses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "expenses_id", nullable = false, updatable = false)
    private Long expensesId;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;
}
