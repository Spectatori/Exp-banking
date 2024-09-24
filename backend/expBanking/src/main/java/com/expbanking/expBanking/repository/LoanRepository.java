package com.expbanking.expBanking.repository;

import com.expbanking.expBanking.model.Accounts;
import com.expbanking.expBanking.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Long> {

    @Query("SELECT l FROM Loan l WHERE l.dateOfApplying <= :date AND l.remainingBalance > 0")
    List<Loan> findLoansWithDuePayments(@Param("date") LocalDate date);

    Loan findByAccount(Accounts account);
}
