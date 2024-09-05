package com.expbanking.expBanking.dto;

import com.expbanking.expBanking.model.User;
import lombok.Value;

import java.beans.ConstructorProperties;
import java.sql.Timestamp;
@Value
public record TransactionsDTO(
        Long transactionId,
        Timestamp dateOfTransaction,
        Double amount,
        String details
) {

}
