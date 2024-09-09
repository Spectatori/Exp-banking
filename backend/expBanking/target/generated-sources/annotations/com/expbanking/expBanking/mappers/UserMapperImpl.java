package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.UserDTO;
import com.expbanking.expBanking.model.EmploymentEnum;
import com.expbanking.expBanking.model.User;
import java.math.BigDecimal;
import java.time.LocalDate;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-09T16:10:31+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
public class UserMapperImpl implements UserMapper {

    @Override
    public User convertDtoToEntity(UserDTO dto, long id) {
        if ( dto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        if ( dto != null ) {
            user.firstName( dto.firstName() );
            user.lastName( dto.lastName() );
            user.email( dto.email() );
            user.phoneNumber( dto.phoneNumber() );
            user.dateOfBirth( dto.dateOfBirth() );
            user.balance( dto.balance() );
            user.currency( dto.currency() );
            user.typeOfEmployment( dto.typeOfEmployment() );
            user.password( dto.password() );
        }

        return user.build();
    }

    @Override
    public UserDTO convertEntityToDto(User user) {
        if ( user == null ) {
            return null;
        }

        String firstName = null;
        String lastName = null;
        String email = null;
        String password = null;
        String phoneNumber = null;
        LocalDate dateOfBirth = null;
        BigDecimal balance = null;
        String currency = null;
        EmploymentEnum typeOfEmployment = null;

        firstName = user.getFirstName();
        lastName = user.getLastName();
        email = user.getEmail();
        password = user.getPassword();
        phoneNumber = user.getPhoneNumber();
        dateOfBirth = user.getDateOfBirth();
        balance = user.getBalance();
        currency = user.getCurrency();
        typeOfEmployment = user.getTypeOfEmployment();

        UserDTO userDTO = new UserDTO( firstName, lastName, email, password, phoneNumber, dateOfBirth, balance, currency, typeOfEmployment );

        return userDTO;
    }
}
