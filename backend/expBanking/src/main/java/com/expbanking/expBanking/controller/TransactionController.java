package com.expbanking.expBanking.controller;


import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.service.Impl.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
    private final TransactionService transactionService;

    @Autowired
    public TransactionController(TransactionService transactionService){this.transactionService = transactionService;}

    @GetMapping("/{transactionId}")
    public ResponseEntity<Transactions> getTransactionById(@PathVariable Long transactionId){
        Optional<Transactions> transactions = transactionService.getTransactionById(transactionId);
        return transactions.map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());
    }
    @GetMapping("/transactions")
    public List<Transactions> getAllTransactions(){ return transactionService.getAllTransactions();}

    @PostMapping("/createTransaction")
    public ResponseEntity<Transactions> createTransaction(@RequestBody Transactions transactions) {
        Transactions transaction = transactionService.createTransaction(transactions);
        return new ResponseEntity<> (transaction, HttpStatus.CREATED);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Transactions>> getTransactionsByUserId(@PathVariable Long userId) {
        List<Transactions> transactions = transactionService.getTransactionByUserId(userId);
        return  new ResponseEntity<>(transactions,HttpStatus.OK);
        //ResponseEntity.ok(transactions)
    }




    @PutMapping("/{transactionId}")
    public ResponseEntity<Transactions> updateTransaction(@PathVariable Long transactionId,
                                                          @RequestBody Transactions transaction){
        Transactions updatedTransaction = transactionService.updateTransaction(transactionId,transaction);
        if(updatedTransaction != null){
            return ResponseEntity.ok(updatedTransaction);
        }else{
            return ResponseEntity.notFound().build();
        }

    }

    @DeleteMapping("/{transactionId}")
    public void deleteTransactions(@PathVariable Long transactionId){
       transactionService.deleteTransaction(transactionId);
    }

}
