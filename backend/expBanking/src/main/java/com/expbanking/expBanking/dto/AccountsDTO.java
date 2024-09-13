package com.expbanking.expBanking.dto;


import com.expbanking.expBanking.model.AccountType;

import java.math.BigDecimal;

public record AccountsDTO(
        String currency,
        BigDecimal balance,
        AccountType accountType
) {
}
