package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.Provinces;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProvinceRepository extends JpaRepository<Provinces, Long> {
}
