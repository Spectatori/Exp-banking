package com.expbanking.expBanking.dto;

import com.expbanking.expBanking.model.TransactionType;
import com.expbanking.expBanking.model.User;
import lombok.Value;

import java.beans.ConstructorProperties;
import java.sql.Timestamp;

public record TransactionsDTO(
        Timestamp dateOfTransaction,
        Double amount,
        String details,

        TransactionType tType
) {

}
