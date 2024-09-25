package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.model.UserFinancialSummary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface FinancialSummaryService {

    Optional<UserFinancialSummary> getFinancialSummary(Long userId);


    List<Double> getMonthlyIncomes(Long userId, int i);
}
