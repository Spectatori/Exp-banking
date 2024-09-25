package com.expbanking.expBanking.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "UserFinancialSummary")
@Data
@NoArgsConstructor
public class UserFinancialSummary {

    @Id
    private Long userId;

    @Column(name = "total_income")
    private Double totalIncome;

    @Column(name = "total_expenses")
    private Double totalExpenses;

}