package com.expbanking.expBanking.security;

import com.expbanking.expBanking.model.Address;
import com.expbanking.expBanking.model.EmploymentEnum;
import com.expbanking.expBanking.model.EmploymentType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String phoneNumber;
    private LocalDate dateOfBirth;
    private BigDecimal balance;
    private String currency;
    private EmploymentEnum employment;
    private Address address;
    private String iban;
}
