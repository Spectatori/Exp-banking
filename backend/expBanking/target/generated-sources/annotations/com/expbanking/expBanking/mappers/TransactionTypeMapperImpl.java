package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.TransactionTypeDTO;
import com.expbanking.expBanking.model.TransactionType;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-10T11:47:10+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.2 (Amazon.com Inc.)"
)
public class TransactionTypeMapperImpl implements TransactionTypeMapper {

    @Override
    public TransactionType convertDtoToEntity(TransactionTypeDTO dto, Long id) {
        if ( dto == null && id == null ) {
            return null;
        }

        TransactionType transactionType = new TransactionType();

        if ( dto != null ) {
            transactionType.setTransactionTypeName( dto.transactionTypeName() );
            transactionType.setTransactionTypeId( dto.transactionTypeId() );
        }

        return transactionType;
    }
}
