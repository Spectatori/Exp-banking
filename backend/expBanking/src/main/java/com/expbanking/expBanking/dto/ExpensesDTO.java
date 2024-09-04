package com.expbanking.expBanking.dto;

import java.sql.Timestamp;

public record ExpensesDTO(
        Long expensesId,
        Double amount,
        Timestamp dateOfPayment,
        String description
) {
}
