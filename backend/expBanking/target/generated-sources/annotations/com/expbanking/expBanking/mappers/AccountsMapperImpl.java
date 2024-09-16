package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.AccountsDTO;
import com.expbanking.expBanking.model.AccountType;
import com.expbanking.expBanking.model.Accounts;
import java.math.BigDecimal;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-16T15:36:33+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
public class AccountsMapperImpl implements AccountsMapper {

    @Override
    public Accounts convertDtoToEntity(AccountsDTO dto, Long id) {
        if ( dto == null && id == null ) {
            return null;
        }

        Accounts accounts = new Accounts();

        if ( dto != null ) {
            accounts.setBalance( dto.balance() );
            accounts.setCurrency( dto.currency() );
            accounts.setAccountType( dto.accountType() );
        }

        return accounts;
    }

    @Override
    public AccountsDTO convertEntityToDto(Accounts accounts) {
        if ( accounts == null ) {
            return null;
        }

        String currency = null;
        BigDecimal balance = null;
        AccountType accountType = null;

        currency = accounts.getCurrency();
        balance = accounts.getBalance();
        accountType = accounts.getAccountType();

        AccountsDTO accountsDTO = new AccountsDTO( currency, balance, accountType );

        return accountsDTO;
    }
}
