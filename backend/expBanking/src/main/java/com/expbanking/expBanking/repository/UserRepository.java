package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
