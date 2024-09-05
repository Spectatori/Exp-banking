package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.IncomeDTO;
import com.expbanking.expBanking.model.Income;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper
public interface IncomeMapper {
    @Mapping(target = "amount", source = "dto.amount")
    @Mapping(target = "dateOfPayment", source = "dto.dateOfPayment")
    @Mapping(target = "description", source = "dto.description")
    Income convertDtoToEntity(IncomeDTO dto, long id);
}
