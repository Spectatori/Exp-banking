package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.ExpensesDTO;
import com.expbanking.expBanking.model.Expenses;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface ExpensesMapper {
    @Mapping(target = "amount", source = "dto.amount")
    @Mapping(target = "dateOfPayment", source = "dto.dateOfPayment")
    @Mapping(target = "description", source = "dto.description")
    Expenses convertDtoToEntity(ExpensesDTO dto, long id);
}
