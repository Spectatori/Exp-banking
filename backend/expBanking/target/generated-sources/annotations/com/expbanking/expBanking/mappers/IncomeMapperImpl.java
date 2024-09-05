package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.IncomeDTO;
import com.expbanking.expBanking.model.Income;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-05T12:33:26+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.2 (Amazon.com Inc.)"
)
public class IncomeMapperImpl implements IncomeMapper {

    @Override
    public Income convertDtoToEntity(IncomeDTO dto, long id) {
        if ( dto == null ) {
            return null;
        }

        Income income = new Income();

        if ( dto != null ) {
            income.setAmount( dto.amount() );
            income.setDateOfPayment( dto.dateOfPayment() );
            income.setDescription( dto.description() );
        }

        return income;
    }
}
