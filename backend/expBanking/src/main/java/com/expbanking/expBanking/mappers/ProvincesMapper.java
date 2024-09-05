package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.ProvincesDTO;
import com.expbanking.expBanking.model.Provinces;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface ProvincesMapper {
    @Mapping(target = "name", source = "dto.name")
    Provinces convertDtoToEntity(ProvincesDTO dto, long id);
}
