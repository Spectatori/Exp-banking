package com.expbanking.expBanking.model;

public enum TransactionTypeEnum {
    //INCOME,TRANSFERS_AND_PAYMENTS
    INCOME(1),
    TRANSFER_AND_PAYMENTS(2);


    private final int value;

    TransactionTypeEnum(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
