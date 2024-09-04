package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.Expenses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpensesRepository extends JpaRepository<Expenses,Long> {
}
