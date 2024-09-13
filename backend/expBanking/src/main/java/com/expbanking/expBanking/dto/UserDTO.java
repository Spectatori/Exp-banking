package com.expbanking.expBanking.dto;

import com.expbanking.expBanking.model.EmploymentEnum;
import com.expbanking.expBanking.model.EmploymentType;

import java.math.BigDecimal;
import java.time.LocalDate;

public record UserDTO(
        String firstname,
        String lastname,
        String email,
        String password,
        String phoneNumber,
        LocalDate dateOfBirth,
        EmploymentType employmentType,
        String egn,
        Long idCardNumber,
        LocalDate expDate

) {

}
