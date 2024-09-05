package com.expbanking.expBanking.dto;

import java.sql.Timestamp;

public record ExpensesDTO(

        Double amount,
        Timestamp dateOfPayment,
        String description
) {
}
