package com.expbanking.expBanking.mappers;

import com.expbanking.expBanking.dto.UserDTO;
import com.expbanking.expBanking.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface UserMapper {

    @Mapping(target = "firstname", source = "dto.firstname")
    @Mapping(target = "lastname", source = "dto.lastname")
    @Mapping(target = "email", source = "dto.email")
    @Mapping(target = "phoneNumber", source = "dto.phoneNumber")
    @Mapping(target = "dateOfBirth", source = "dto.dateOfBirth")
    @Mapping(target = "balance", source = "dto.balance")
    @Mapping(target = "currency", source = "dto.currency")
    @Mapping(target = "employmentType", source = "dto.employmentType")
    User convertDtoToEntity(UserDTO dto, Long id);
    UserDTO convertEntityToDto(User user);
}
