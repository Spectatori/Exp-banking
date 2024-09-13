package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "address")
@Getter
@Setter
@NoArgsConstructor
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "address_id", nullable = false, updatable = false)
    private Long addressId;
    @Column(name = "post code")
    private String postcode;

    @Column (name = "city_name")
    private String cityName;

    @Column (name = "street")
    private String street;

    @OneToMany(mappedBy = "address")
    private Set<User> users;

    public Address(String postcode, String cityName, String street) {
        this.postcode = postcode;
        this.cityName = cityName;
        this.street = street;

    }
}
