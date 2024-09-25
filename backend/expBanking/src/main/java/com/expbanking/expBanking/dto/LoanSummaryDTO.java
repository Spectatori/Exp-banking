package com.expbanking.expBanking.dto;

import lombok.Getter;

import java.time.LocalDate;
import java.util.Objects;

@Getter
public class LoanSummaryDTO {
    // Getters and Setters
    private String firstName;
    private String lastName;
    private String iban;
    private LocalDate dateOfApplying;
    private double remainingBalance;
    private double totalAmount;

    // Default constructor
    public LoanSummaryDTO() {
    }

    // Parameterized constructor
    public LoanSummaryDTO(String firstName, String lastName, String iban, LocalDate dateOfApplying, double remainingBalance, double totalAmount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.iban = iban;
        this.dateOfApplying = dateOfApplying;
        this.remainingBalance = remainingBalance;
        this.totalAmount = totalAmount;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setIban(String iban) {
        this.iban = iban;
    }

    public void setDateOfApplying(LocalDate dateOfApplying) {
        this.dateOfApplying = dateOfApplying;
    }

    public void setRemainingBalance(double remainingBalance) {
        this.remainingBalance = remainingBalance;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }
    /*
    // Override toString() method
    @Override
    public String toString() {
        return "LoanSummaryDTO{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", iban='" + iban + '\'' +
                ", dateOfApplying=" + dateOfApplying +
                ", remainingBalance=" + remainingBalance +
                ", totalAmount=" + totalAmount +
                '}';
    }

    // Override equals() method
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LoanSummaryDTO that = (LoanSummaryDTO) o;
        return Double.compare(that.remainingBalance, remainingBalance) == 0 &&
                Double.compare(that.totalAmount, totalAmount) == 0 &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(lastName, that.lastName) &&
                Objects.equals(iban, that.iban) &&
                Objects.equals(dateOfApplying, that.dateOfApplying);
    }

    // Override hashCode() method
    @Override
    public int hashCode() {
        return Objects.hash(firstName, lastName, iban, dateOfApplying, remainingBalance, totalAmount);
    }

     */
}
