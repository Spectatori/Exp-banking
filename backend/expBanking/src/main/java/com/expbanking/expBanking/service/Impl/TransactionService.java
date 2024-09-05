package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.model.Transactions;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public interface TransactionService {
    Transactions createTransaction(Transactions transaction);
    Optional<Transactions> getTransactionById(Long transactionId);

    List<Transactions> getTransactionByUserId (Long userId);

    List<Transactions> getAllTransactions();

    Transactions updateTransaction(Long transactionId,Transactions transaction);
    void deleteTransaction(Long transactionId);


}

