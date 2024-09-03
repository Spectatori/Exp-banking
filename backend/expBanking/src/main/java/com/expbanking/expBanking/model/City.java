package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "city")
@Getter
@Setter
@NoArgsConstructor
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cityId;

    @Column(name = "city_name")
    private String cityName;


    public City(Long cityId, String cityName){
        this.cityId = cityId;
        this.cityName = cityName;
    }


    @ManyToOne
    @JoinColumn(name = "province_id")
    private Provinces province;

    @OneToMany(mappedBy = "city")
    private Set<Address> addresses;


}
