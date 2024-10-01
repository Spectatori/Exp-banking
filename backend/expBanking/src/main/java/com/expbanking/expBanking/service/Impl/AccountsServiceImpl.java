package com.expbanking.expBanking.service.Impl;

import ch.qos.logback.classic.Logger;
import com.expbanking.expBanking.dto.AccountTypeDTO;
import com.expbanking.expBanking.dto.AccountsDTO;
import com.expbanking.expBanking.mappers.AccountTypeMapper;
import com.expbanking.expBanking.mappers.AccountsMapper;
import com.expbanking.expBanking.model.*;
import com.expbanking.expBanking.repository.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.SpringVersion;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class AccountsServiceImpl implements AccountsService{

    //@Autowired
    private final AccountsRepository accountsRepository;
    //@Autowired
    private final AccountTypeRepository accountTypeRepository;
    //@Autowired
    private final TransactionsRepository transactionsRepository;

    private final TransactionTypeRepository transactionTypeRepository;
    private  final TransactionServiceImpl transactionServiceImpl;
    //@Autowired
    private final UserRepository userRepository;



    public AccountsServiceImpl(AccountsRepository accountsRepository, AccountTypeRepository accountTypeRepository,
                               TransactionsRepository transactionsRepository, TransactionTypeRepository transactionTypeRepository,
                               TransactionServiceImpl transactionServiceImpl, UserRepository userRepository) {
        this.accountsRepository = accountsRepository;
        this.accountTypeRepository = accountTypeRepository;
        this.transactionsRepository = transactionsRepository;
        this.transactionTypeRepository = transactionTypeRepository;
        this.transactionServiceImpl = transactionServiceImpl;
        this.userRepository = userRepository;
    }

    @Override
    public String createIban() {
        String title ="BG24YORI";

        StringBuilder iban = new StringBuilder(title);
        Random random = new Random();

        for (int i = 0; i < 22 - title.length(); i++) {
            iban.append(random.nextInt(10));
        }

        return iban.toString();
    }


@Transactional
    @Override
    public Accounts create(AccountsDTO accountDto, Long userId) {
        Optional<User> userOpt = userRepository.findById(userId);
        Accounts accounts = new Accounts();
        accounts.setCurrency(accountDto.currency());
        accounts.setBalance(accountDto.balance());
        accounts.setIban(createIban());
        accounts.setUser(userOpt.get());
        AccountType accountType = accountDto.accountType();
        if(accountType != null){
            accountTypeRepository.save(accountType);
        }
        accounts.setAccountType(accountType);
        Accounts savedAccount = accountsRepository.save(accounts);
        return savedAccount;
    }

    @Override
    public List<Accounts> getAllAccounts() {
        return accountsRepository.findAll();
    }

    @Override
    public Optional<Accounts> getAccountById(Long accountId) {
        return accountsRepository.findById(accountId);
    }

    @Override
    public Optional<Accounts> getAccountByIban(String iban) {
        return accountsRepository.findAccountByIban(iban);
    }

    @Override
    public void deleteAccount(Long accountId) {
        if(accountsRepository.existsById(accountId)) {
            accountsRepository.deleteById(accountId);
        }else{
            throw new RuntimeException("Account with" + accountId + " not found");
        }
    }

    @Transactional
    @Override
    public Transactions transfer(String senderIban, String receiverIban, BigDecimal amount) {
            Optional<Accounts> senderOpt = accountsRepository.findAccountByIban(senderIban);
            Optional<Accounts> receiverOpt = accountsRepository.findAccountByIban(receiverIban);
            if(!senderOpt.isPresent()){
                throw new RuntimeException("No sender found with iban " +senderIban);
            }
            Accounts sender = senderOpt.get();
            if(!receiverOpt.isPresent()){
                throw new RuntimeException("No receiver found with iban " +receiverIban);
            }
            Accounts receiver = receiverOpt.get();
            if(sender.getBalance().compareTo(amount)<0){
                throw new RuntimeException("No sufficient balance ");
            }
            sender.setBalance(sender.getBalance().subtract(amount));
            receiver.setBalance(receiver.getBalance().add(amount));
            accountsRepository.save(sender);
            accountsRepository.save(receiver);

        Transactions transaction = new Transactions();
        transaction.setAmount(-amount.doubleValue());
        transaction.setDateOfTransaction(new Timestamp(System.currentTimeMillis()));
        transaction.setDetails("Transfer from " + senderIban + " to " + receiverIban);
        transaction.setAccount(sender);
        TransactionType transactionType = new TransactionType();
        transactionType.setTransactionTypeName("Internal");
        transactionTypeRepository.save(transactionType);
        transaction.setTransactionType(transactionType);
        transactionsRepository.save(transaction);

        Transactions transactionReceived = new Transactions();
        transactionReceived.setAmount(amount.doubleValue());
        transactionReceived.setDateOfTransaction(new Timestamp(System.currentTimeMillis()));
        transactionReceived.setDetails("Transfer from " + senderIban + " to " + receiverIban);
        transactionReceived.setAccount(receiver);
        TransactionType transactionTypeReceiver = new TransactionType();
        transactionTypeReceiver.setTransactionTypeName("Internal");
        transactionTypeRepository.save(transactionType);
        transactionReceived.setTransactionType(transactionType);
        transactionsRepository.save(transactionReceived);
        return transaction;
    }

    @Transactional
    @Override
    public Accounts updateBalance(Long accountId, BigDecimal newBalance) {
        Optional<Accounts> accounts = accountsRepository.findById(accountId);
        if(accounts.isPresent()){
            Accounts exstAccount = accounts.get();
            exstAccount.setBalance(newBalance);
            return accountsRepository.save(exstAccount);
        }else{
            throw new RuntimeException("Account with" + accountId + " not found");
        }

    }



}
