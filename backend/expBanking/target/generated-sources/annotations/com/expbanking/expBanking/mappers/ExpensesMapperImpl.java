package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.ExpensesDTO;
import com.expbanking.expBanking.model.Expenses;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-05T12:33:26+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.2 (Amazon.com Inc.)"
)
public class ExpensesMapperImpl implements ExpensesMapper {

    @Override
    public Expenses convertDtoToEntity(ExpensesDTO dto, long id) {
        if ( dto == null ) {
            return null;
        }

        Expenses expenses = new Expenses();

        if ( dto != null ) {
            expenses.setAmount( dto.amount() );
            expenses.setDateOfPayment( dto.dateOfPayment() );
            expenses.setDescription( dto.description() );
        }

        return expenses;
    }
}
