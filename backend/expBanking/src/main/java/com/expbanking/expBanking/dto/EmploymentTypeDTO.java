package com.expbanking.expBanking.dto;

import com.expbanking.expBanking.model.EmploymentEnum;

public record EmploymentTypeDTO(
        Long id,
        EmploymentEnum type
) {
}
