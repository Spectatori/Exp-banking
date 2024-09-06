package com.expbanking.expBanking.dto;

import java.util.List;

public record ProvincesDTO(
        Long provinceId,
        String name,
        List<CityDTO> cities
) {
}
