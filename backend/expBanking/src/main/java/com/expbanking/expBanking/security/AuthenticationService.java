package com.expbanking.expBanking.security;

import com.expbanking.expBanking.model.EmploymentType;
import com.expbanking.expBanking.model.Role;
import com.expbanking.expBanking.model.User;
import com.expbanking.expBanking.repository.EmploymentTypeRepository;
import com.expbanking.expBanking.repository.UserRepository;
import com.expbanking.expBanking.service.Impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final UserServiceImpl userService;
    private final EmploymentTypeRepository typeRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {

        EmploymentType employmentType = new EmploymentType();
        employmentType.setEmploymentType(request.getEmploymentType());

        // First save EmploymentType
        employmentType = typeRepository.save(employmentType);

        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .phoneNumber(request.getPhoneNumber())
                .dateOfBirth(request.getDateOfBirth())
                .employmentType(employmentType)
                .egn(request.getEgn())
                .idCardNumber(request.getIdCardNumber())
                .expDate(request.getExpDate())
                .address(request.getAddress())
                .role(Role.USER)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user, user.getUserId(), user.getAddress().getAddressId());
       return AuthenticationResponse.builder()
               .token(jwtToken)
               .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.getUserByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user, user.getUserId(),user.getAddress().getAddressId());
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse updateTokenWithAccountId(User user, Long accountId) {
        var jwtToken = jwtService.generateTokenWithAccountId(user, accountId);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse updateTokenWithTransactionId(User user, Long transactionId) {
        var jwtToken = jwtService.generateTokenWithAccountId(user, transactionId);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
