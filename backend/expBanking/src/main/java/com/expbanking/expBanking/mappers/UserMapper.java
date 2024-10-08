package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.UserDTO;
import com.expbanking.expBanking.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface UserMapper {

    @Mapping(target = "firstname", source = "dto.firstname")
    @Mapping(target = "secondname", source = "dto.secondname")
    @Mapping(target = "lastname", source = "dto.lastname")
    @Mapping(target = "email", source = "dto.email")
    @Mapping(target = "phoneNumber", source = "dto.phoneNumber")
    @Mapping(target = "dateOfBirth", source = "dto.dateOfBirth")
    @Mapping(target = "employmentType", source = "dto.employmentType")
    @Mapping(target = "egn", source = "dto.egn")
    @Mapping(target = "idCardNumber", source = "dto.idCardNumber")
    @Mapping(target = "expDate", source = "dto.expDate")


    User convertDtoToEntity(UserDTO dto, Long id);
    UserDTO convertEntityToDto(User user);
}
