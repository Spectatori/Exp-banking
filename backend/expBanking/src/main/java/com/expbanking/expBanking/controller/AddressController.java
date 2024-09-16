package com.expbanking.expBanking.controller;

import com.expbanking.expBanking.dto.AddressDTO;
import com.expbanking.expBanking.dto.UserDTO;
import com.expbanking.expBanking.model.Address;
import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.model.User;
import com.expbanking.expBanking.service.Impl.AddressService;
import com.expbanking.expBanking.service.Impl.AddressServiceImpl;
import com.expbanking.expBanking.service.Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/address")
public class AddressController {

    private final AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }


    @PostMapping("/createAddress")
    public ResponseEntity<Address> createAddress(@RequestBody Address address) {
    Address createdAddress = addressService.createAddress(address);
    return new ResponseEntity<>(createdAddress, HttpStatus.CREATED);
    }

    @DeleteMapping("/{addressId}")
    public void deleteAddress (@PathVariable Long id) {
        addressService.deleteAddress(id);
    }



    @GetMapping("/addresses")
    public List<Address> getAllAddress(){
        return addressService.getAllAddress();
    }

    @GetMapping("/{addressId}")
    public ResponseEntity<Address> getAddressById(@PathVariable Long id) {
        Address address = addressService.getAddressById(id);
        return new ResponseEntity<>(address, HttpStatus.OK);
    }

    @PutMapping("/{addressId}")
    public ResponseEntity<Address> updateAddress(@PathVariable Long addressId,
                                                 @RequestBody AddressDTO address){
        Address updatedAddress = addressService.updateAddress(addressId, address);
        if(updatedAddress != null){
            return ResponseEntity.ok(updatedAddress);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
