package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.dto.TransactionsDTO;
import com.expbanking.expBanking.mappers.TransactionsMapper;
import com.expbanking.expBanking.model.*;
import com.expbanking.expBanking.repository.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.relational.core.sql.In;
import org.springframework.http.ZeroCopyHttpOutputMessage;
import org.springframework.stereotype.Service;


import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class TransactionServiceImpl implements TransactionService{
    List<Double> incomes = new ArrayList<>();
    List<Double> expenses = new ArrayList<>();
    private final TransactionsRepository transactionsRepo;
    private final AccountsRepository accountsRepository;
    private TransactionsMapper transactionsMapper;
    private final TransactionTypeRepository transactionTypeRepository;
    private final IncomeRepository incomeRepository;

    private final ExpensesRepository expensesRepository;

    @Autowired
    public TransactionServiceImpl(TransactionsRepository transactionsRepo, AccountsRepository accountsRepository, TransactionTypeRepository transactionTypeRepository, IncomeRepository incomeRepository, ExpensesRepository expensesRepository) {
        this.transactionsRepo = transactionsRepo;
        this.accountsRepository = accountsRepository;
        this.transactionTypeRepository = transactionTypeRepository;
        this.incomeRepository = incomeRepository;
        this.expensesRepository = expensesRepository;
    }

    @Transactional
    @Override
    public Transactions createTransaction(TransactionsDTO transactionDTO,Long accountId) {
        Optional<Accounts> accountsOptional = accountsRepository.findById(accountId);
        Transactions transaction = new Transactions();
        TransactionType transactionType = transactionDTO.transactionType();
//        if (transactionType.getTransactionTypeId() == null || !transactionTypeRepository.existsById(transactionType.getTransactionTypeId())) {
//            transactionType.setTransactionTypeName(transactionType.getTransactionTypeName());
//            transactionType = transactionTypeRepository.save(transactionType);
//
//        }
        if (transactionType.getTransactionTypeId() == null || !transactionTypeRepository.existsById(transactionType.getTransactionTypeId())) {
            // Save the new transaction type
            transactionType.setTransactionTypeName(transactionType.getTransactionTypeName());
            transactionType = transactionTypeRepository.save(transactionType);
        } else {
            // If the transaction type exists, fetch it to ensure we have the latest data
            transactionType = transactionTypeRepository.findById(transactionType.getTransactionTypeId()).orElse(transactionType);
        }
        transaction.setDateOfTransaction(transactionDTO.dateOfTransaction());
        transaction.setAmount(transactionDTO.amount());
        transaction.setDetails(transactionDTO.details());
        transaction.setTransactionType(transactionType);
        transaction.setAccount(accountsOptional.get());
        Transactions savedTransaction =transactionsRepo.save(transaction);
        if(transactionDTO.amount() > 0){
            incomes.add(savedTransaction.getAmount());
            Income income = new Income();
            income.setAmount(savedTransaction.getAmount());
            income.setDescription(savedTransaction.getDetails());
            income.setDateOfPayment(savedTransaction.getDateOfTransaction());
            income.setTransactions(savedTransaction);
            incomeRepository.save(income);
            Accounts acc = accountsOptional.get();
            acc.setBalance(acc.getBalance().add(BigDecimal.valueOf(transactionDTO.amount())));
            accountsRepository.save(acc);
        } else {
            expenses.add(savedTransaction.getAmount());
            Expenses expense = new Expenses();
            expense.setAmount(savedTransaction.getAmount());
            expense.setDescription(savedTransaction.getDetails());
            expense.setDateOfPayment(savedTransaction.getDateOfTransaction());
            expense.setTransactions(savedTransaction);
            expensesRepository.save(expense);
            Accounts acc = accountsOptional.get();
            acc.setBalance(acc.getBalance().add(BigDecimal.valueOf(transactionDTO.amount())));
            accountsRepository.save(acc);
        }
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