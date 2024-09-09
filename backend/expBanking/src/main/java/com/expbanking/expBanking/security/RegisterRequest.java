package com.expbanking.expBanking.security;

import com.expbanking.expBanking.model.Address;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private Address address;
}
