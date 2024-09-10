package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.AddressDTO;
import com.expbanking.expBanking.model.Address;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-10T12:54:45+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.2 (Amazon.com Inc.)"
)
@Component
public class AddressMapperImpl implements AddressMapper {

    @Override
    public Address convertDtoToEntity(AddressDTO dto, Long id) {
        if ( dto == null && id == null ) {
            return null;
        }

        Address address = new Address();

        if ( dto != null ) {
            address.setPostcode( dto.postcode() );
            address.setCityName( dto.cityName() );
            address.setStreet( dto.street() );
            address.setAddressId( dto.addressId() );
        }

        return address;
    }
}
