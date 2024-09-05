package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.ExpensesDTO;
import com.expbanking.expBanking.model.Expenses;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-05T01:15:44+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
public class ExpensesMapperImpl implements ExpensesMapper {

    @Override
    public Expenses convertDtoToEntity(ExpensesDTO dto, long id) {
        if ( dto == null ) {
            return null;
        }

        Expenses expenses = new Expenses();

        return expenses;
    }
}
