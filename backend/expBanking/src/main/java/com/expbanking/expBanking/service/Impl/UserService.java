package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.dto.UserDTO;
import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.model.User;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;


public interface UserService {
    User findByEmail(String email);
    void transfer(UserDTO userDto, BigDecimal amount);
    User saveUser(UserDTO userDto);

    String createIban();

    List<Transactions> getTransactions(Long userId);
    void deleteUser(Long userId);


}
