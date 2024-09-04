package com.expbanking.expBanking.dto;

import java.sql.Timestamp;

public record IncomeDTO(
        Long incomeId,
        Double amount,
        Timestamp dateOfPayment,
        String description
) {
}
