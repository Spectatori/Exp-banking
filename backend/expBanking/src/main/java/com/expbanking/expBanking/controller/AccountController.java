package com.expbanking.expBanking.controller;

import com.expbanking.expBanking.dto.AccountsDTO;
import com.expbanking.expBanking.model.Accounts;
import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.model.User;
import com.expbanking.expBanking.repository.UserRepository;
import com.expbanking.expBanking.security.AuthenticationResponse;
import com.expbanking.expBanking.security.AuthenticationService;
import com.expbanking.expBanking.service.Impl.AccountsServiceImpl;
import com.expbanking.expBanking.service.Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/accounts")
public class AccountController {
    private final AccountsServiceImpl accountsServiceImpl;
    private final UserRepository userRepository;
    private final AuthenticationService authenticationService;

    @Autowired AccountController(AccountsServiceImpl accountsServiceImpl, UserRepository userRepository, AuthenticationService authenticationService) {
        this.accountsServiceImpl = accountsServiceImpl;
        this.userRepository = userRepository;
        this.authenticationService = authenticationService;
    }
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/create/{userId}")
    public ResponseEntity<AuthenticationResponse> createAccount(
            @RequestBody AccountsDTO accountsDTO,
            @PathVariable Long userId,
            @AuthenticationPrincipal UserDetails userDetails) {

        // Create the account
        Accounts account = accountsServiceImpl.create(accountsDTO, userId);

        // Fetch the user by userId
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Generate a new token with the account ID
        AuthenticationResponse newTokenResponse = authenticationService.updateTokenWithAccountId(user, account.getAccountId());

        // Return the new token in the response
        return new ResponseEntity<>(newTokenResponse, HttpStatus.CREATED);
    }


    @GetMapping("/getAccountById/{accountId}")
    public ResponseEntity<Accounts> getAccountById(@PathVariable Long accountId) {
        Optional<Accounts> accounts = accountsServiceImpl.getAccountById(accountId);
        return accounts.map(ResponseEntity::ok).orElseGet(()-> ResponseEntity.notFound().build());
    }
    @GetMapping("/{iban}")
    public ResponseEntity<Accounts> getAccountByIban(@PathVariable String iban) {
        Optional<Accounts> accounts = accountsServiceImpl.getAccountByIban(iban);
        return accounts.map(ResponseEntity::ok).orElseGet(()-> ResponseEntity.notFound().build());
    }

    @PostMapping("/updateBalance/{accountId}")
    public ResponseEntity<Accounts> updateBalance(@PathVariable Long accountId,
                                                  @RequestBody BigDecimal amount){
        Accounts updatedAccount = accountsServiceImpl.updateBalance(accountId, amount);
        if(updatedAccount != null){
            return ResponseEntity.ok(updatedAccount);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/delete/{accountId}")
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
