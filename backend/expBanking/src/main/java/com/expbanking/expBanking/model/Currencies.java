package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "currencies")
@Getter
@Setter
@NoArgsConstructor
public class Currencies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long currencyId;

    @Column(name = "currency_name")
    private String currencyName;

    @ManyToOne
    @JoinColumn(name = "currency")
    private User user;
}