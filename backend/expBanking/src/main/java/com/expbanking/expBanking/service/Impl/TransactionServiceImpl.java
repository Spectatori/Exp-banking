package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.dto.TransactionsDTO;
import com.expbanking.expBanking.mappers.TransactionsMapper;
import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.model.User;
import com.expbanking.expBanking.repository.AccountsRepository;
import com.expbanking.expBanking.repository.TransactionsRepository;
import com.expbanking.expBanking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;


@Service
public class TransactionServiceImpl implements TransactionService{
    private final TransactionsRepository transactionsRepo;
    private final AccountsRepository accountsRepository;
    private TransactionsMapper transactionsMapper;

    @Autowired
    public TransactionServiceImpl(TransactionsRepository transactionsRepo, AccountsRepository accountsRepository) {
        this.transactionsRepo = transactionsRepo;
        this.accountsRepository = accountsRepository;
    }


    @Override
    public Transactions createTransaction(TransactionsDTO transactionDTO,Long accountId) {
        Transactions transaction = new Transactions();
        transaction.setDateOfTransaction(transactionDTO.dateOfTransaction());
        transaction.setAmount(transactionDTO.amount());
        transaction.setDetails(transactionDTO.details());
        transaction.setTransactionType(transactionDTO.tType());
        Transactions savedTransaction =transactionsRepo.save(transaction);
        return  savedTransaction;
    }

    @Override
    public Optional<Transactions> getTransactionById(Long transactionId) {
        return transactionsRepo.findById(transactionId);
    }

    @Override
    public List<Transactions> getTransactionByUserId(Long accountId) {
        return transactionsRepo.findByAccountId(accountId);
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