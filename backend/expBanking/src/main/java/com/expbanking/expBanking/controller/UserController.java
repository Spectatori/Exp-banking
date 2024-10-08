package com.expbanking.expBanking.controller;

import com.expbanking.expBanking.dto.UserDTO;
import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.model.User;
import com.expbanking.expBanking.service.Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserServiceImpl userServiceImpl;

    @Autowired
    public UserController(UserServiceImpl userServiceImpl) {this.userServiceImpl = userServiceImpl;}

    @PostMapping("/saveUser")
    public ResponseEntity<UserDTO> saveUser(@RequestBody UserDTO userDTO) {
        UserDTO savedInDb = userServiceImpl.saveUser(userDTO);
        return new ResponseEntity<>(savedInDb, HttpStatus.CREATED);
    }
    @PreAuthorize("hasRole('USER')")
    @PutMapping("/update/{userId}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long userId,
                                              @RequestBody UserDTO userDTO){
        UserDTO updatedUser = userServiceImpl.updateUser(userId, userDTO);
        if(updatedUser != null){
            return ResponseEntity.ok(updatedUser);
        }else{
            return ResponseEntity.notFound().build();
        }

    }


}