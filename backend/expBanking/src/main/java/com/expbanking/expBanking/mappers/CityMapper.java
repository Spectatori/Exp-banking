package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.CityDTO;
import com.expbanking.expBanking.model.City;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface CityMapper {
    @Mapping(target = "city", source = "dto.city")
    City convertDtoToEntity(CityDTO dto, long id);
}
