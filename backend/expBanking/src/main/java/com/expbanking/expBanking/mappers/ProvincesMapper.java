package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.ProvincesDTO;
import com.expbanking.expBanking.model.Provinces;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper
public interface ProvincesMapper {
    @Mappings({
            @Mapping(target = "city", ignore = true),
            @Mapping(target = "provinceId", source = "dto.provinceId"),
            @Mapping(target = "name", source = "dto.name")
    })
    Provinces convertDtoToEntity(ProvincesDTO dto, long id);
}
