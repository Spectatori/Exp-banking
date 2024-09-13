package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.dto.AccountsDTO;
import com.expbanking.expBanking.model.Accounts;
import com.expbanking.expBanking.model.Transactions;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public interface AccountsService {
    String createIban();
    Accounts create(AccountsDTO dto,Long userId);
    List<Accounts> getAllAccounts();

    Optional<Accounts> getAccountById(Long accountId);
    Optional<Accounts> getAccountByIban(String iban);
    Accounts updateBalance(Long accountId, BigDecimal newBalance);

    void deleteAccount(Long accountId);

    Transactions transfer(String senderIban,String receiverIban,BigDecimal amount);
}
