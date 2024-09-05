package com.expbanking.expBanking.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public record UserDTO(
        Long userId,
        String firstName,
        String lastName,
        String email,
        String phoneNumber,
        LocalDate dateOfBirth,
        BigDecimal balance,
        String currenciesName

) {
}
