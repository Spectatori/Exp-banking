package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.AddressDTO;
import com.expbanking.expBanking.model.Address;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface AddressMapper {
    @Mapping(target = "postcode", source = "dto.postcode")
    @Mapping(target = "cityName", source = "dto.cityName")
    @Mapping(target = "street", source = "dto.street")
    Address convertDtoToEntity(AddressDTO dto, long id);
}
