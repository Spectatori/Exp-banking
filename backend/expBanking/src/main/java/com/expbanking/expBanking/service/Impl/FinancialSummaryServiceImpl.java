package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.model.UserFinancialSummary;
import com.expbanking.expBanking.repository.UserFinancialSummaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FinancialSummaryServiceImpl implements FinancialSummaryService{
    @Autowired
    private UserFinancialSummaryRepository financialSummaryRepository;


    @Override
    public Optional<UserFinancialSummary> getFinancialSummary(Long userId) {
        return financialSummaryRepository.findUserFinancialSummary(userId);
        //return financialSummaryRepository.findById(userId);
    }

    @Override
    public List<Double> getMonthlyIncomes(Long userId, int i) {
        return financialSummaryRepository.findMonthlyIncomes(userId);
    }


}
