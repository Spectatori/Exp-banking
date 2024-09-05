package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.TransactionTypeDTO;
import com.expbanking.expBanking.model.TransactionType;
import com.expbanking.expBanking.model.TransactionTypeEnum;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-05T01:15:44+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
public class TransactionTypeMapperImpl implements TransactionTypeMapper {

    @Override
    public TransactionType convertDtoToEntity(TransactionTypeDTO dto, long id) {
        if ( dto == null ) {
            return null;
        }

        TransactionTypeEnum transactionTypeName = null;
        Long transactionTypeId = null;
        if ( dto != null ) {
            transactionTypeName = dto.transactionTypeName();
            transactionTypeId = dto.transactionTypeId();
        }

        TransactionType transactionType = new TransactionType( transactionTypeId, transactionTypeName );

        return transactionType;
    }
}
