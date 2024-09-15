package com.expbanking.expBanking.controller;

import com.expbanking.expBanking.dto.AccountsDTO;
import com.expbanking.expBanking.model.Accounts;
import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.service.Impl.AccountsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/accounts")
public class AccountController {
    private final AccountsServiceImpl accountsServiceImpl;

    @Autowired AccountController(AccountsServiceImpl accountsServiceImpl) {
        this.accountsServiceImpl = accountsServiceImpl;
    }
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/create/{userId}")
    public ResponseEntity<Accounts> createAccount(@RequestBody AccountsDTO accountsDTO,
                                                  @PathVariable Long userId){
        Accounts account = accountsServiceImpl.create(accountsDTO,userId);
        return new ResponseEntity<>(account, HttpStatus.CREATED);
    }

    @GetMapping("/{accountId}")
    public ResponseEntity<Accounts> getAccountById(@PathVariable Long accountId) {
        Optional<Accounts> accounts = accountsServiceImpl.getAccountById(accountId);
        return accounts.map(ResponseEntity::ok).orElseGet(()-> ResponseEntity.notFound().build());
    }
    @GetMapping("/{iban}")
    public ResponseEntity<Accounts> getAccountByIban(@PathVariable String iban) {
        Optional<Accounts> accounts = accountsServiceImpl.getAccountByIban(iban);
        return accounts.map(ResponseEntity::ok).orElseGet(()-> ResponseEntity.notFound().build());
    }

    @PostMapping("/{accountId}")
    public ResponseEntity<Accounts> updateBalance(@PathVariable Long accountId,
                                                  @RequestBody BigDecimal amount){
        Accounts updatedAccount = accountsServiceImpl.updateBalance(accountId, amount);
        if(updatedAccount != null){
            return ResponseEntity.ok(updatedAccount);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PutMapping("/{accountId}")
    public ResponseEntity<Accounts> deleteAccount(@PathVariable Long accountId) {
        accountsServiceImpl.deleteAccount(accountId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/accounts")
    public List<Accounts> getAllAccounts(){ return accountsServiceImpl.getAllAccounts();}

    @PostMapping("/transfer")
    public ResponseEntity<Transactions> transfer (@RequestParam String senderIban,
                                                  @RequestParam String receiverIban,
                                                  @RequestParam BigDecimal amount) {

        Transactions transaction = accountsServiceImpl.transfer(senderIban,receiverIban,amount);
        return new ResponseEntity<>(transaction, HttpStatus.OK);
    }
}
