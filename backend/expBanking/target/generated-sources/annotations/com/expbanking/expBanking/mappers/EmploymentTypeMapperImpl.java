package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.EmploymentTypeDTO;
import com.expbanking.expBanking.model.EmploymentType;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-09T17:16:32+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
public class EmploymentTypeMapperImpl implements EmploymentTypeMapper {

    @Override
    public EmploymentType convertDtoToEntity(EmploymentTypeDTO dto, Long id) {
        if ( dto == null && id == null ) {
            return null;
        }

        EmploymentType employmentType = new EmploymentType();

        if ( dto != null ) {
            employmentType.setType( dto.type() );
            employmentType.setId( dto.id() );
        }

        return employmentType;
    }
}
