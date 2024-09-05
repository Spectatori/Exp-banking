package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.dto.TransactionsDTO;
import com.expbanking.expBanking.model.Transactions;


import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface TransactionService {
    Transactions createTransaction(Transactions transaction);
    Optional<Transactions> getTransactionById(Long transactionId);

    List<Transactions> getTransactionByUserId (Long userId);

    List<Transactions> getAllTransactions();

    Transactions updateTransaction(Long transactionId,Transactions transaction);
    void deleteTransaction(Long transactionId);


}
