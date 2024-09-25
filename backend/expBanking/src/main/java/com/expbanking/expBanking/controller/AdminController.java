package com.expbanking.expBanking.controller;

import com.expbanking.expBanking.dto.LoanSummaryDTO;
import com.expbanking.expBanking.model.User;
import com.expbanking.expBanking.repository.ReportingDetailsRepository;
import com.expbanking.expBanking.service.Impl.TransactionServiceImpl;
import com.expbanking.expBanking.service.Impl.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final UserServiceImpl userServiceImpl;
    private final TransactionServiceImpl transactionServiceImpl;

    private  final ReportingDetailsRepository reportingDetailsRepository;

    public AdminController(UserServiceImpl userServiceImpl, TransactionServiceImpl transactionServiceImpl, ReportingDetailsRepository reportingDetailsRepository) {
        this.userServiceImpl = userServiceImpl;
        this.transactionServiceImpl = transactionServiceImpl;

        this.reportingDetailsRepository = reportingDetailsRepository;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{userid}")
    public void deleteUser(@PathVariable Long userid){
        userServiceImpl.deleteUser(userid);
    }

    @GetMapping("/getUser/{email}")
    public Optional<User> getUserById(@PathVariable String email){
       return userServiceImpl.findByEmail(email);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userServiceImpl.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/transactions/{transactionid}")
    public void deleteTransaction(Long transactionId){
        transactionServiceImpl.deleteTransaction(transactionId);
    }//тук трябва промяна

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/loans")
    public ResponseEntity<List<LoanSummaryDTO>> getAllUsersWithLoans() {
        // Fetching results from the repository
        List<Object[]> results = reportingDetailsRepository.findAllUsersWithLoans();

        // Create a list to hold LoanSummaryDTO objects
        List<LoanSummaryDTO> loanSummaries = new ArrayList<>();

        // Iterate over the results and map them into LoanSummaryDTO
        for (Object[] row : results) {
            String firstName = (String) row[0];
            String lastName = (String) row[1]; // Include last name
            String iban = (String) row[2];
            LocalDate dateOfApplying = (LocalDate) row[3];
            double remainingBalance = (Double) row[4];
            double totalAmount = (Double) row[5];

            // Create a LoanSummaryDTO for each row and add it to the list
            LoanSummaryDTO loanSummary = new LoanSummaryDTO(firstName, lastName, iban, dateOfApplying, remainingBalance, totalAmount);
            loanSummaries.add(loanSummary);
        }

        // Return the list of LoanSummaryDTOs as a response
        return new ResponseEntity<>(loanSummaries, HttpStatus.OK);
    }



}
