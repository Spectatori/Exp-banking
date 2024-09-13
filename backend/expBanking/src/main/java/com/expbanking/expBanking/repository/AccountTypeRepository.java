package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.AccountType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountTypeRepository extends JpaRepository<AccountType, Long> {
    AccountType findByAccountType(AccountType accountType);
}
