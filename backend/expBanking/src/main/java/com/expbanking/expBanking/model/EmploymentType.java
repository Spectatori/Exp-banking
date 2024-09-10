package com.expbanking.expBanking.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="employment_type")
@Getter
@Setter
public class EmploymentType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "type")// EnumType.STRING ensures the enum is persisted as a string
    private String employmentType;

    @OneToOne(mappedBy = "employmentType", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private User user;


}
