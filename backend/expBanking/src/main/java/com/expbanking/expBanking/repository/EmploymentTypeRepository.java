package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.EmploymentType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmploymentTypeRepository extends JpaRepository<EmploymentType,Long> {
}
