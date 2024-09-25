package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ReportingDetailsRepository extends JpaRepository<User, Long> {

 @Query("SELECT u.firstname, u.lastname, a.iban, l.dateOfApplying, l.remainingBalance, l.totalAmount " +
         "FROM User u JOIN u.accounts a JOIN Loan l ON a.accountId = l.account.accountId " +
         "WHERE l.remainingBalance > 0")
 List<Object[]> findAllUsersWithLoans();
}


