package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.CityDTO;
import com.expbanking.expBanking.model.City;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-10T11:47:10+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.2 (Amazon.com Inc.)"
)
public class CityMapperImpl implements CityMapper {

    @Override
    public City convertDtoToEntity(CityDTO dto, long id) {
        if ( dto == null ) {
            return null;
        }

        City city = new City();

        if ( dto != null ) {
            city.setCityName( dto.cityName() );
            city.setCityId( dto.cityId() );
        }

        return city;
    }
}
