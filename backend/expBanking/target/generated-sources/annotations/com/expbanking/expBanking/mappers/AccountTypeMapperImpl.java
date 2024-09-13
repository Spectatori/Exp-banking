package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.AccountTypeDTO;
import com.expbanking.expBanking.model.AccountType;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-13T16:50:42+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
public class AccountTypeMapperImpl implements AccountTypeMapper {

    @Override
    public AccountType convertDtoToEntity(AccountTypeDTO dto, Long id) {
        if ( dto == null && id == null ) {
            return null;
        }

        AccountType accountType = new AccountType();

        if ( dto != null ) {
            accountType.setAccountType( dto.accountType() );
        }

        return accountType;
    }
}
