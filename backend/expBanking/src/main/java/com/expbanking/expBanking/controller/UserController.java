package com.expbanking.expBanking.controller;

import com.expbanking.expBanking.dto.UserDTO;
import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.model.User;
import com.expbanking.expBanking.service.Impl.UserService;
import com.expbanking.expBanking.service.Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserServiceImpl userServiceImpl;

    @Autowired
    public UserController(UserServiceImpl userServiceImpl) {this.userServiceImpl = userServiceImpl;}

    @PostMapping("/saveUser")
    public ResponseEntity<?> saveUser(@RequestBody UserDTO userDto) {
        User savedInDb = userServiceImpl.saveUser(userDto);
        return new ResponseEntity<>(savedInDb, HttpStatus.CREATED);
    }

    @GetMapping("/transactions")
    public List<Transactions> findAllTransactions(Long userid) {
        return userServiceImpl.getTransactions(userid);
    }


}
