package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.AccountTypeDTO;
import com.expbanking.expBanking.model.AccountType;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface AccountTypeMapper {
    @Mapping(target = "accountType", source = "dto.accountType")
    AccountType convertDtoToEntity(AccountTypeDTO dto, Long id);
}
