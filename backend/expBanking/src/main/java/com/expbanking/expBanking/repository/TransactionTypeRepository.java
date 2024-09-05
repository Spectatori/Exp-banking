package com.expbanking.expBanking.repository;
import com.expbanking.expBanking.model.TransactionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionTypeRepository extends JpaRepository<TransactionType,Long> {
}
