package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.UserDTO;
import com.expbanking.expBanking.model.EmploymentType;
import com.expbanking.expBanking.model.User;
import java.math.BigDecimal;
import java.time.LocalDate;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-10T14:55:10+0300",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
public class UserMapperImpl implements UserMapper {

    @Override
    public User convertDtoToEntity(UserDTO dto, Long id) {
        if ( dto == null && id == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        if ( dto != null ) {
            user.firstname( dto.firstname() );
            user.lastname( dto.lastname() );
            user.email( dto.email() );
            user.phoneNumber( dto.phoneNumber() );
            user.dateOfBirth( dto.dateOfBirth() );
            user.balance( dto.balance() );
            user.currency( dto.currency() );
            user.employmentType( dto.employmentType() );
            user.password( dto.password() );
        }

        return user.build();
    }

    @Override
    public UserDTO convertEntityToDto(User user) {
        if ( user == null ) {
            return null;
        }

        String firstname = null;
        String lastname = null;
        String email = null;
        String password = null;
        String phoneNumber = null;
        LocalDate dateOfBirth = null;
        BigDecimal balance = null;
        String currency = null;
        EmploymentType employmentType = null;

        firstname = user.getFirstname();
        lastname = user.getLastname();
        email = user.getEmail();
        password = user.getPassword();
        phoneNumber = user.getPhoneNumber();
        dateOfBirth = user.getDateOfBirth();
        balance = user.getBalance();
        currency = user.getCurrency();
        employmentType = user.getEmploymentType();

        UserDTO userDTO = new UserDTO( firstname, lastname, email, password, phoneNumber, dateOfBirth, balance, currency, employmentType );

        return userDTO;
    }
}
