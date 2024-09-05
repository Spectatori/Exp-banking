package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.CityDTO;
import com.expbanking.expBanking.model.City;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-05T12:08:31+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
public class CityMapperImpl implements CityMapper {

    @Override
    public City convertDtoToEntity(CityDTO dto, long id) {
        if ( dto == null ) {
            return null;
        }

        String cityName = null;
        Long cityId = null;
        if ( dto != null ) {
            cityName = dto.cityName();
            cityId = dto.cityId();
        }

        City city = new City( cityId, cityName );

        return city;
    }
}
