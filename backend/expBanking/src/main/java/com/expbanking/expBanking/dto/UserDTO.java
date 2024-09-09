package com.expbanking.expBanking.dto;

import com.expbanking.expBanking.model.EmploymentEnum;

import java.math.BigDecimal;
import java.time.LocalDate;

public record UserDTO(
        String firstName,
        String lastName,
        String email,
        String password,
        String phoneNumber,
        LocalDate dateOfBirth,
        BigDecimal balance,
        String currency,
        EmploymentEnum typeOfEmployment

) {

}
