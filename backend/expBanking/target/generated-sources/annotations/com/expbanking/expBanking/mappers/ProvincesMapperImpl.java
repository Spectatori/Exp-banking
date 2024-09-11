package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.ProvincesDTO;
import com.expbanking.expBanking.model.Provinces;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-11T13:19:37+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.2 (Amazon.com Inc.)"
)
public class ProvincesMapperImpl implements ProvincesMapper {

    @Override
    public Provinces convertDtoToEntity(ProvincesDTO dto, long id) {
        if ( dto == null ) {
            return null;
        }

        Provinces provinces = new Provinces();

        if ( dto != null ) {
            provinces.setProvinceId( dto.provinceId() );
            provinces.setName( dto.name() );
        }

        return provinces;
    }
}
