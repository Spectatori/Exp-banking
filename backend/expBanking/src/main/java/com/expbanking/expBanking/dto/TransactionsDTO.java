package com.expbanking.expBanking.dto;

import com.expbanking.expBanking.model.User;

import java.sql.Timestamp;

public record TransactionsDTO(
        Long transactionId,
        Timestamp dateOfTransaction,
        Double amount,
        String details,
        User user
) {
}
