package com.expbanking.expBanking.dto;

public record AddressDTO(
        Long addressId,
        String postcode,
        String cityName,
        String street
) {
}
