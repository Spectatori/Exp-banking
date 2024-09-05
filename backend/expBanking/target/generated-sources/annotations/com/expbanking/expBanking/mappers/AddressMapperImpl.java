package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.AddressDTO;
import com.expbanking.expBanking.model.Address;
import com.expbanking.expBanking.model.City;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-05T12:08:31+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class AddressMapperImpl implements AddressMapper {

    @Override
    public Address convertDtoToEntity(AddressDTO dto, long id) {
        if ( dto == null ) {
            return null;
        }

        String postcode = null;
        String cityName = null;
        String street = null;
        if ( dto != null ) {
            postcode = dto.postcode();
            cityName = dto.cityName();
            street = dto.street();
        }

        City city = null;

        Address address = new Address( postcode, cityName, street, city );

        return address;
    }
}
