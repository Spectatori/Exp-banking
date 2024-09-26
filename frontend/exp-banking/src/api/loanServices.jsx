import { decodeJWT } from "../utils/DecodeJWT";
import apiClient from "./apiClient";

export const loanRequest = async (loanInfo) => {
    try {
        const decoded = decodeJWT();

        // Construct the full payload based on user and updatedData
        const payload = {
            loanAmount: loanInfo.amount,
            iban: loanInfo.iban,
            typeOfLoan: 'User',
            loanTermMonths:loanInfo.period
        };
        await apiClient.post(`api/loan/apply/${decoded.userId}`, payload);
    } catch (error) {
        console.error('Error updating user:', error);
    }
};
export const mortgageRequest = async (loanInfo) => {
    try {
        const decoded = decodeJWT();

        // Construct the full payload based on user and updatedData
        const payload = {
            loanAmount: loanInfo.amount,
            iban: loanInfo.iban,
            typeOfLoan: 'Mortgage',
            loanTermMonths:loanInfo.period
        };
        await apiClient.post(`api/loan/apply/${decoded.userId}`, payload);
    } catch (error) {
        console.error('Error updating user:', error);
    }
};