package com.expbanking.expBanking.dto;

import com.expbanking.expBanking.model.City;

public record AddressDTO(
        Long addressId,
        String postcode,
        String cityName,
        String street


) {
}
