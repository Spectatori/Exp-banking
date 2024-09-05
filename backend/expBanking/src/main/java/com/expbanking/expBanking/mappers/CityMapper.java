package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.CityDTO;
import com.expbanking.expBanking.model.City;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface CityMapper {
    @Mapping(target = "cityName", source = "dto.cityName")
    City convertDtoToEntity(CityDTO dto, long id);
}
