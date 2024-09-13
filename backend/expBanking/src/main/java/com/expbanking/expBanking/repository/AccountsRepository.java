package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountsRepository extends JpaRepository<Accounts, Long> {


    Optional<Accounts> findAccountByIban(String iban);
}
