package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.EmploymentTypeDTO;
import com.expbanking.expBanking.model.EmploymentType;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
@Mapper
public interface EmploymentTypeMapper {
    @Mapping(target = "employmentType", source = "dto.employmentType")
    EmploymentType convertDtoToEntity(EmploymentTypeDTO dto, Long id);
}
