package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TransactionsRepository extends JpaRepository<Transactions,Long> {
    //List<Transactions> findByUserId(Long userId);
}
