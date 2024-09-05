package com.expbanking.expBanking.controller;

import com.expbanking.expBanking.dto.UserDTO;
import com.expbanking.expBanking.model.User;
import com.expbanking.expBanking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;


}