package com.expbanking.expBanking.model;

import jakarta.persistence.*;

@Entity
@Table(name="employment_type")
public class EmploymentType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "type")
    @Enumerated
    private EmploymentEnum anEnum;

}
