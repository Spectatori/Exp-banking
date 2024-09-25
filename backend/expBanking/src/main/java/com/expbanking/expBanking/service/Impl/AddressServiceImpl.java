package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.dto.AddressDTO;
import com.expbanking.expBanking.model.Address;
import com.expbanking.expBanking.repository.AddressRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AddressServiceImpl implements AddressService{

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public Address createAddress(Address address) {
        return addressRepository.save(address);
    }

    @Override
    public List<Address> getAllAddress() {
        return addressRepository.findAll();
    }

    @Override
    public void deleteAddress(Long id) {
     addressRepository.deleteById(id);
    }

    @Transactional
    @Override
    public Address updateAddress(Long id, AddressDTO addressDTO) {
        Optional<Address> existingAddress = addressRepository.findById(id);
        if(existingAddress.isPresent()){
            Address currentAddress = existingAddress.get();
            currentAddress.setPostcode(addressDTO.postcode());
            currentAddress.setCityName(addressDTO.cityName());
            currentAddress.setStreet(addressDTO.street());
            return addressRepository.save(currentAddress);
        } else {
            throw new RuntimeException("Address not found with id: " + id);
        }
    }

    @Override
    public Address getAddressById(Long id) {
       return addressRepository.getById(id);
    }
}
