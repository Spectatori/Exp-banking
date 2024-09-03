package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "income")
@Getter
@Setter
public class Income {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "income_id", nullable = false, updatable = false)
    private Long incomeId;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    public Income() {}





}
