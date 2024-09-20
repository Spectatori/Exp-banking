package com.expbanking.expBanking.repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.expbanking.expBanking.model.UserFinancialSummary;
import java.util.Optional;

@Repository
public interface UserFinancialSummaryRepository extends JpaRepository<UserFinancialSummary, Long> {
    @Query(value = "SELECT u.user_id, " +
            "COALESCE(SUM(i.amount), 0) AS total_income, " +
            "COALESCE(SUM(e.amount), 0) AS total_expenses " +
            "FROM users u " +
            "LEFT JOIN accounts a ON u.user_id = a.user_id " +
            "LEFT JOIN transactions t ON a.account_id = t.account_id " +
            "LEFT JOIN income i ON t.transaction_id = i.transactions_id " +
            "LEFT JOIN expenses e ON t.transaction_id = e.transactions_id " +
            "WHERE (i.date_of_payment >= NOW() - INTERVAL '6 months' OR e.date_of_payment >= NOW() - INTERVAL '6 months') " +
            "AND u.user_id = :userId " +
            "GROUP BY u.user_id", nativeQuery = true)
    Optional<UserFinancialSummary> findUserFinancialSummary(@Param("userId") Long userId);

}
