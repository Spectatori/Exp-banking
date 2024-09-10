package com.expbanking.expBanking.controller;

import com.expbanking.expBanking.model.User;
import com.expbanking.expBanking.service.Impl.TransactionServiceImpl;
import com.expbanking.expBanking.service.Impl.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final UserServiceImpl userServiceImpl;
    private final TransactionServiceImpl transactionServiceImpl;

    public AdminController(UserServiceImpl userServiceImpl, TransactionServiceImpl transactionServiceImpl) {
        this.userServiceImpl = userServiceImpl;
        this.transactionServiceImpl = transactionServiceImpl;
    }

    @DeleteMapping("/delete/{userid}")
    public void deleteUser(@PathVariable Long userid){
        userServiceImpl.deleteUser(userid);
    }


    @GetMapping("/getUser/{email}")
    public Optional<User> getUserById(@PathVariable String email){
       return userServiceImpl.findByEmail(email);
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userServiceImpl.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @DeleteMapping("/transactions/{transactionid}")
    public void deleteTransaction(Long transactionId){
        transactionServiceImpl.deleteTransaction(transactionId);
    }

}
