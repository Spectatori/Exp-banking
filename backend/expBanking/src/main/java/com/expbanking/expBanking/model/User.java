package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    @Email
    private String email;
    @Column(name = "password")
    @NotBlank
    private String password;
    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;
    @Column(name = "balance")
    private BigDecimal balance;

    @Column(name = "iban")
    private String iban;

    @Column(name = "currency")
    private String currency;

    @Column(name = "type_of_employment")
    private EmploymentEnum typeOfEmployment;

    @ManyToOne
    @JoinColumn(name = "address_id", referencedColumnName = "address_id")
    private Address address;

    @OneToMany(mappedBy = "user")
    private List<Transactions> transactions;

    public User() {
    }

    public User(String firstName, String lastName, String email, String password, String phoneNumber, LocalDate dateOfBirth, BigDecimal balance, String currency, EmploymentEnum typeOfEmployment) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
        this.balance = balance;
        this.currency = currency;
        this.typeOfEmployment = typeOfEmployment;
    }

}
