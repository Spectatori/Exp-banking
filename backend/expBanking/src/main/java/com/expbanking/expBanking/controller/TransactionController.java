package com.expbanking.expBanking.controller;


import com.expbanking.expBanking.dto.TransactionsDTO;
import com.expbanking.expBanking.model.Accounts;
import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.repository.AccountsRepository;
import com.expbanking.expBanking.security.AuthenticationResponse;
import com.expbanking.expBanking.security.AuthenticationService;
import com.expbanking.expBanking.service.Impl.TransactionServiceImpl;
import com.expbanking.expBanking.service.Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/user/transactions")
public class TransactionController {
    private final TransactionServiceImpl transactionServiceImpl;
    private final UserServiceImpl userServiceImpl;
    private final AuthenticationService authenticationService;
    private final AccountsRepository accountsRepository;


    @Autowired
    public TransactionController(TransactionServiceImpl transactionServiceImpl, UserServiceImpl userServiceImpl, AuthenticationService authenticationService, AccountsRepository accountsRepository){
        this.transactionServiceImpl = transactionServiceImpl;
        this.userServiceImpl=userServiceImpl;
        this.authenticationService = authenticationService;
        this.accountsRepository = accountsRepository;
    }

    @GetMapping("/{transactionId}")
    public ResponseEntity<Transactions> getTransactionById(@PathVariable Long transactionId){
        Optional<Transactions> transactions = transactionServiceImpl.getTransactionById(transactionId);
        return transactions.map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());
    }
    @GetMapping("/transactions")
    public List<Transactions> getAllTransactions(){ return transactionServiceImpl.getAllTransactions();}

    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @PostMapping("/createTransaction/{accountId}")
    public ResponseEntity<Transactions> createTransaction(@RequestBody TransactionsDTO transactionsDto,
                                                          @PathVariable Long accountId) {
        Transactions transaction = transactionServiceImpl.createTransaction(transactionsDto,accountId);
        Accounts accounts = accountsRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found."));
        AuthenticationResponse newTokenResponse = authenticationService.updateTokenWithTransactionId(accounts.getUser(), transaction.getTransactionId());
        return new ResponseEntity<> (transaction, HttpStatus.CREATED);
    }


    @GetMapping("/accounts/{accountsId}")
    public ResponseEntity<List<Transactions>> getTransactionsByAccountId(@PathVariable Long accountsId) {
        List<Transactions> transactions = transactionServiceImpl.getTransactionByUserId(accountsId);
        return  new ResponseEntity<>(transactions,HttpStatus.OK);

    }

    @PutMapping("/updateTransaction/{transactionId}")
    public ResponseEntity<Transactions> updateTransaction(@PathVariable Long transactionId,
                                                          @RequestBody Transactions transaction){
        Transactions updatedTransaction = transactionServiceImpl.updateTransaction(transactionId,transaction);
        if(updatedTransaction != null){
            return ResponseEntity.ok(updatedTransaction);
        }else{
            return ResponseEntity.notFound().build();
        }

    }

    @DeleteMapping("/delete/{transactionId}")
    public void deleteTransactions(@PathVariable Long transactionId){
       transactionServiceImpl.deleteTransaction(transactionId);
    }

}