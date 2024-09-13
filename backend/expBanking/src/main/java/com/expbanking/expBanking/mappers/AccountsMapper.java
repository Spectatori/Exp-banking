package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.AccountsDTO;
import com.expbanking.expBanking.model.Accounts;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface AccountsMapper {
    @Mapping(target = "balance", source = "dto.balance")
    @Mapping(target = "currency", source = "dto.currency")
    @Mapping(target = "accountType", source = "dto.accountType")

    Accounts convertDtoToEntity(AccountsDTO dto, Long id);
    AccountsDTO convertEntityToDto(Accounts accounts);
}