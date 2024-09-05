package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    //List<Transactions> getAllByTransactionsUserId(Long theId);
    User getUserByEmail(String email);


}
