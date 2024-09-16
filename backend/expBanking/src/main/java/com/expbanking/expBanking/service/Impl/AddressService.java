package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.dto.AddressDTO;
import com.expbanking.expBanking.model.Address;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AddressService {

    Address createAddress(Address address);

    List<Address> getAllAddress();

    void deleteAddress (Long id);

    Address updateAddress(Long id,AddressDTO addressDTO);

    Address getAddressById(Long id);


}
