package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.TransactionsDTO;
import com.expbanking.expBanking.model.Transactions;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-09T16:10:31+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class TransactionsMapperImpl implements TransactionsMapper {

    @Override
    public Transactions convertDtoToEntity(TransactionsDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Transactions transactions = new Transactions();

        transactions.setDateOfTransaction( dto.dateOfTransaction() );
        transactions.setAmount( dto.amount() );
        transactions.setDetails( dto.details() );
        transactions.setTransactionId( dto.transactionId() );

        return transactions;
    }
}
