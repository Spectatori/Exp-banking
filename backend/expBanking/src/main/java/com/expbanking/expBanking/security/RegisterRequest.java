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
    private String secondname;
    private String lastname;
    private String email;
    private String password;
    private String phoneNumber;
    private LocalDate dateOfBirth;
    private String employmentType;
    private String egn;
    private Long idCardNumber;
    private LocalDate expDate;
    private Address address;
}
