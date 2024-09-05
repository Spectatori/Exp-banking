package com.expbanking.expBanking.dto;

import java.sql.Timestamp;

public record IncomeDTO(

        Double amount,
        Timestamp dateOfPayment,
        String description
) {
}
