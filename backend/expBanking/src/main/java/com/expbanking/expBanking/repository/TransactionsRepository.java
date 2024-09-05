package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.Transactions;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionsRepository extends JpaRepository<Transactions,Long> {
    @Query("SELECT t FROM Transactions t WHERE t.user.userId = :userId")
    List<Transactions> findByUserId(Long userId);
}
