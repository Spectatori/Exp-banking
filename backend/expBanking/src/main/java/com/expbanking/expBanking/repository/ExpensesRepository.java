package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.Expenses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpensesRepository extends JpaRepository<Expenses,Long> {
}
