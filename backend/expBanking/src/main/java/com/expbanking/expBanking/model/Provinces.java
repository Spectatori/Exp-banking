package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "provinces")
@Getter
@Setter
public class Provinces {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "province_id", nullable = false, updatable = false)
    private Long provinceId;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "province")
    private List<City> city;

    public Provinces(){}


    public Provinces(String name) {
        this.name = name;
    }
}