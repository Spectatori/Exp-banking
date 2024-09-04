package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    List<Transactions> getAllByTransactionsUserId(Long theId);
    User getUserByEmail(String email);


}
