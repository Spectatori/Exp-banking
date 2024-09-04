package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionsRepository extends JpaRepository<Transactions,Long> {
}
