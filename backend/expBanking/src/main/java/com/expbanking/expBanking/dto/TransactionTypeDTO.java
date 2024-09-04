package com.expbanking.expBanking.dto;

import com.expbanking.expBanking.model.TransactionTypeEnum;

public record TransactionTypeDTO (
        Long transactionTypeId,
        TransactionTypeEnum transactionTypeName
){
}
