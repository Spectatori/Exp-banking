package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.dto.UserDTO;
import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.model.User;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    Optional<User> findByEmail(String email);
    void transfer(UserDTO userDto, BigDecimal amount);
    UserDTO saveUser(UserDTO userDTO);

    String createIban();

    List<Transactions> getTransactions(Long userId);
    void deleteUser(Long userId);

    UserDTO updateUser(Long userId, UserDTO userDto);

    List<User> findAllUsers() ;


}
