
package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.dto.UserDTO;
import com.expbanking.expBanking.mappers.UserMapper;
import com.expbanking.expBanking.model.*;
import com.expbanking.expBanking.repository.AddressRepository;
import com.expbanking.expBanking.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepo;
    @Autowired
    private AddressRepository addressRepository;
    private UserMapper userMapper;

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepo.getUserByEmail(email);
    }



    @Transactional
    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        User user = new User();
        user.setFirstname(userDTO.firstname());
        user.setLastname(userDTO.lastname());
        user.setEmail(userDTO.email());
        user.setPassword(userDTO.password());
        user.setPhoneNumber(userDTO.phoneNumber());
        user.setDateOfBirth(userDTO.dateOfBirth());
        user.setEmploymentType(userDTO.employmentType());
        user.setEgn(userDTO.egn());
        user.setIdCardNumber(userDTO.idCardNumber());
        user.setExpDate(userDTO.expDate());

        Address address = user.getAddress();
        if (address != null) {
            addressRepository.save(address); // Persist Address first
        }
        User savedUser = userRepo.save(user);

        // Return converted DTO
        return userMapper.convertEntityToDto(savedUser);
    }



    @Transactional
    @Override
    public UserDTO updateUser(Long userId, UserDTO userDto) {

        Optional<User> existingUser = userRepo.findById(userId);

        if(existingUser.isPresent()) {

            User updatedUser = existingUser.get();


            updatedUser.setFirstname(userDto.firstname());
            updatedUser.setLastname(userDto.lastname());
            updatedUser.setEmail(userDto.email());
            updatedUser.setPhoneNumber(userDto.phoneNumber());
            updatedUser.setDateOfBirth(userDto.dateOfBirth());
            updatedUser.setEmploymentType(userDto.employmentType());
            updatedUser.setEgn(userDto.egn());
            updatedUser.setIdCardNumber(userDto.idCardNumber());
            updatedUser.setExpDate(userDto.expDate());




            userRepo.save(updatedUser);
        } else {
            throw new RuntimeException("User not found with ID: " + userId);
        }
        return userDto;
    }


    @Override
    public String createIban() {
        String title ="BG24YORI";

        StringBuilder iban = new StringBuilder(title);
        Random random = new Random();

        for (int i = 0; i < 22 - title.length(); i++) {
            iban.append(random.nextInt(10));
        }

        return iban.toString();
    }

//    @Override
//    public List<Transactions> getTransactions(Long userId) {
//        return userRepo.getAllTransactionsByUserId(userId);
//    }

    @Override
    public void deleteUser(Long theId) {
        userRepo.deleteById(theId);
    }

    @Override
    public List<User> findAllUsers() {

        return userRepo.findAll();
    }
}
