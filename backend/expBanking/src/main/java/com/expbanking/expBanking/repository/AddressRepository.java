package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address,Long> {
}
