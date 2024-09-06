package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.UserDTO;
import com.expbanking.expBanking.model.EmploymentEnum;
import com.expbanking.expBanking.model.User;
import java.math.BigDecimal;
import java.time.LocalDate;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-06T17:42:06+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
public class UserMapperImpl implements UserMapper {

    @Override
    public User convertDtoToEntity(UserDTO dto, long id) {
        if ( dto == null ) {
            return null;
        }

        User user = new User();

        if ( dto != null ) {
            user.setFirstName( dto.firstName() );
            user.setLastName( dto.lastName() );
            user.setEmail( dto.email() );
            user.setPhoneNumber( dto.phoneNumber() );
            user.setDateOfBirth( dto.dateOfBirth() );
            user.setBalance( dto.balance() );
            user.setCurrency( dto.currency() );
            user.setTypeOfEmployment( dto.typeOfEmployment() );
        }

        return user;
    }

    @Override
    public UserDTO convertEntityToDto(User user) {
        if ( user == null ) {
            return null;
        }

        String firstName = null;
        String lastName = null;
        String email = null;
        String phoneNumber = null;
        LocalDate dateOfBirth = null;
        BigDecimal balance = null;
        String currency = null;
        EmploymentEnum typeOfEmployment = null;

        firstName = user.getFirstName();
        lastName = user.getLastName();
        email = user.getEmail();
        phoneNumber = user.getPhoneNumber();
        dateOfBirth = user.getDateOfBirth();
        balance = user.getBalance();
        currency = user.getCurrency();
        typeOfEmployment = user.getTypeOfEmployment();

        UserDTO userDTO = new UserDTO( firstName, lastName, email, phoneNumber, dateOfBirth, balance, currency, typeOfEmployment );

        return userDTO;
    }
}
