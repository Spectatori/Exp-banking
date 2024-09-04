package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.TransactionTypeDTO;
import com.expbanking.expBanking.model.TransactionType;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface TransactionTypeMapper {
    @Mapping(target = "transactionTypeName", source = "dto.transactionTypeName")
    TransactionType convertDtoToEntity(TransactionTypeDTO dto, long id);
}
