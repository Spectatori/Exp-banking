package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.repository.TransactionsRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;


@Service
public class TransactionServiceImpl implements TransactionService{
    private final TransactionsRepository transactionsRepo;

    @Autowired
    public TransactionServiceImpl(TransactionsRepository transactionsRepo) {
        this.transactionsRepo = transactionsRepo;
    }


    @Override
    public Transactions createTransaction(Transactions transaction) {
        return transactionsRepo.save(transaction);
    }

    @Override
    public Optional<Transactions> getTransactionById(Long transactionId) {
        return transactionsRepo.findById(transactionId);
    }

    @Override
    public List<Transactions> getTransactionByUserId(Long userId) {
        return transactionsRepo.findByUserId(userId);
    }

    @Override
    public List<Transactions> getAllTransactions() {

        return transactionsRepo.findAll();
    }

    @Override
    public Transactions updateTransaction(Long transactionId, Transactions transaction) {
        Optional<Transactions> existingTransaction = transactionsRepo.findById(transactionId);
        if(existingTransaction.isPresent()){
            Transactions updatedTransaction = existingTransaction.get();
            updatedTransaction.setUser(transaction.getUser());
            updatedTransaction.setDetails(transaction.getDetails());
            updatedTransaction.setAmount(transaction.getAmount());
            updatedTransaction.setTransactionType(transaction.getTransactionType());
            updatedTransaction.setDateOfTransaction(transaction.getDateOfTransaction());
            return  transactionsRepo.save(updatedTransaction);
        }else{
            throw new RuntimeException("No such transaction");
        }
    }

    @Override
    public void deleteTransaction(Long transactionId) {
        transactionsRepo.deleteById(transactionId);
    }
}
