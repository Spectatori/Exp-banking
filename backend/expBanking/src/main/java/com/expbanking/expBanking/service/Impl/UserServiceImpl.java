package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.dto.UserDTO;
import com.expbanking.expBanking.mappers.UserMapper;
import com.expbanking.expBanking.model.Address;
import com.expbanking.expBanking.model.Transactions;
import com.expbanking.expBanking.model.User;
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

    @Override
    public void transfer(UserDTO userDTO, BigDecimal amount) {

        if (amount == null) {
            throw new IllegalArgumentException("Amount cannot be null");
        }


        if (amount.compareTo(BigDecimal.ZERO) > 0) {
            userDTO.balance().add(amount);
        } else if (amount.compareTo(BigDecimal.ZERO) < 0) {
            userDTO.balance().subtract(amount);
        }

    }
    /*
    @Override
    public User saveUser(UserDTO userDto) {
        Optional<User> dbObject = Optional.ofNullable(findByEmail(userDto.email()));
        Long id;
        if(dbObject.isPresent()) {
            id = dbObject.get().getUserId();

        } else {
            id = null;
        }
        User theUser = userMapper.convertDtoToEntity(userDto, id);
        theUser.setIban(createIban());
        return userRepo.saveAndFlush(theUser);
    }

     */


    @Transactional
    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        User user = new User();
        user.setFirstName(userDTO.firstName());
        user.setLastName(userDTO.lastName());
        user.setEmail(userDTO.email());
        user.setPassword(userDTO.password());
        user.setPhoneNumber(userDTO.phoneNumber());
        user.setDateOfBirth(userDTO.dateOfBirth());
        user.setBalance(userDTO.balance());
        user.setCurrency(userDTO.currency());
        user.setTypeOfEmployment(userDTO.typeOfEmployment());
        user.setIban(createIban());

        Address address = user.getAddress();
        if (address != null) {
            addressRepository.save(address); // Persist Address first
        }
        User savedUser = userRepo.save(user);

        // Return converted DTO
        return userMapper.convertEntityToDto(savedUser);
    }




    @Override
    public UserDTO updateUser(Long userId, UserDTO userDto) {

        Optional<User> existingUser = userRepo.findById(userId);

        if(existingUser.isPresent()) {

            User updatedUser = existingUser.get();


            updatedUser.setFirstName(userDto.firstName());
            updatedUser.setLastName(userDto.lastName());
            updatedUser.setEmail(userDto.email());
            updatedUser.setPhoneNumber(userDto.phoneNumber());
            updatedUser.setDateOfBirth(userDto.dateOfBirth());
            updatedUser.setBalance(userDto.balance());
            updatedUser.setCurrency(userDto.currency());
            updatedUser.setTypeOfEmployment(userDto.typeOfEmployment());



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

    @Override
    public List<Transactions> getTransactions(Long userId) {
        return userRepo.getAllTransactionsByUserId(userId);
    }

    @Override
    public void deleteUser(Long theId) {
        userRepo.deleteById(theId);
    }
}
