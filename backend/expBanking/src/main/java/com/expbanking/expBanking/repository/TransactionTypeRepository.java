package com.expbanking.expBanking.repository;
import com.expbanking.expBanking.model.TransactionType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionTypeRepository extends JpaRepository<TransactionType,Long> {
}
