package com.expbanking.expBanking.service.Impl;

import ch.qos.logback.classic.Logger;
import com.expbanking.expBanking.dto.AccountTypeDTO;
import com.expbanking.expBanking.dto.AccountsDTO;
import com.expbanking.expBanking.mappers.AccountTypeMapper;
import com.expbanking.expBanking.mappers.AccountsMapper;
import com.expbanking.expBanking.model.*;
import com.expbanking.expBanking.repository.AccountTypeRepository;
import com.expbanking.expBanking.repository.AccountsRepository;
import com.expbanking.expBanking.repository.TransactionsRepository;
import com.expbanking.expBanking.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
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
    //@Autowired
    private final UserRepository userRepository;
    private Logger log;


    public AccountsServiceImpl(AccountsRepository accountsRepository, AccountTypeRepository accountTypeRepository, TransactionsRepository transactionsRepository, UserRepository userRepository) {
        this.accountsRepository = accountsRepository;
        this.accountTypeRepository = accountTypeRepository;
        this.transactionsRepository = transactionsRepository;
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
        log.info("Attempting to create account for user ID: {} with details: {}", userId, accountDto);
        // Retrieve user by ID and handle case where user might not be found
        Optional<User> userOpt = userRepository.findById(userId);
        if (!userOpt.isPresent()) {
            throw new RuntimeException("User with ID " + userId + " not found");
        }

        User user = userOpt.get();

        // Create a new Accounts entity and set its fields
        Accounts accounts = new Accounts();
        accounts.setCurrency(accountDto.currency());  // Assuming getter method in DTO
        accounts.setBalance(accountDto.balance());    // Assuming getter method in DTO
        accounts.setIban(createIban());
        accounts.setUser(user);

//         Handle AccountType, assuming it's a String and needs to be fetched or created
        AccountType accountTypeName = accountDto.accountType(); // Assuming getter method in DTO
        AccountType accountType = accountTypeRepository.findByAccountType(accountTypeName);

        if (accountType == null) {
            // If the account type is not found, create a new one
            accountType = new AccountType();
            accountType.setAccountType(accountTypeName.toString()); // Assuming there's a setter for the name
            accountTypeRepository.save(accountType);
        }

        accounts.setAccountType(accountType);

        // Save the Accounts entity
        Accounts savedAccount = accountsRepository.save(accounts);

        return savedAccount;
    }


//@Transactional
//    @Override
//    public Accounts create(AccountsDTO accountDto, Long userId) {
//        Optional<User> userOpt = userRepository.findById(userId);
//        Accounts accounts = new Accounts();
//        accounts.setCurrency(accountDto.currency());
//        accounts.setBalance(accountDto.balance());
//        accounts.setIban(createIban());
//        accounts.setUser(userOpt.get());
//        AccountTypeDTO accountType = accountTypeRepository.findByName(accountDto.accountType());
//        Long id = accountType.getAccountTypeId();
//        if(accountType==null) {
//            accountTypeMapper.convertDtoToEntity(accountType, id);
//            accountType = new AccountType();
//           accountTypeRepository.save(accountType);
//            accounts.setAccountType(accountType);
//        }
//
//        accounts.setAccountType(accountDto.accountType());
//        Accounts savedAccount = accountsRepository.save(accounts);
//        return savedAccount;
//    }

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
        transaction.setAmount(amount.doubleValue());
        transaction.setDateOfTransaction(new Timestamp(System.currentTimeMillis()));
        transaction.setDetails("Transfer from " + senderIban + " to " + receiverIban);
        transaction.setAccount(sender);


        transactionsRepository.save(transaction);

        return transaction;
    }

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
