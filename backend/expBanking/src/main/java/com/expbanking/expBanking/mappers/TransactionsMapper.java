package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.TransactionsDTO;
import com.expbanking.expBanking.model.Transactions;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface TransactionsMapper {
    @Mapping(target = "dateOfTransaction", source = "dto.dateOfTransaction")
    @Mapping(target = "amount", source = "dto.amount")
    @Mapping(target = "details", source = "dto.details")
    Transactions convertDtoToEntity(TransactionsDTO dto, long id);
}
