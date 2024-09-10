package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@Builder
@AllArgsConstructor
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "first_name")
    private String firstname;
    @Column(name = "last_name")
    private String lastname;

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

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "type_of_employment")
    private EmploymentEnum typeOfEmployment;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    @Column(name = "account_non_expired")
    private boolean accountNonExpired = true;

    @Column(name = "account_non_locked")
    private boolean accountNonLocked = true;

    @Column(name = "credentials_non_expired")
    private boolean credentialsNonExpired = true;

    @Column(name = "enabled")
    private boolean enabled = true;


    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "address_id", referencedColumnName = "address_id")
    private Address address;

    @OneToMany(mappedBy = "user")
    private HashSet<Transactions> transactions;

    @OneToOne
    @JoinColumn(name = "employment_type_id")
    private EmploymentType employmentType;
    public User() {
    }

    public User(String firstname, String lastname, String email, String password, String phoneNumber, LocalDate dateOfBirth, BigDecimal balance, String currency, EmploymentType employmentType) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
        this.balance = balance;
        this.currency = currency;
        this.employmentType = employmentType;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.accountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.accountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return this.credentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return this.enabled;
    }

    public Long getId() {
        return userId;
    }
}
