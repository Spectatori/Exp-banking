import { decodeJWT } from "../utils/DecodeJWT";
import apiClient from "./apiClient";
import { useToastNotification } from "../hooks/useToastNotification";
import { useUserStore } from "../stores/AuthStore";
import { getUser } from "./userService";

export const loanRequest = async (loanInfo) => {
    const { showErrorToast, showSuccessToast } = useToastNotification();
    try {
        const decoded = decodeJWT();

        // Construct the full payload based on user and updatedData
        const payload = {
            loanAmount: loanInfo.amount,
            iban: loanInfo.iban,
            typeOfLoan: 'User',
            loanTermMonths:loanInfo.period
        };
        let response = await apiClient.post(`api/loan/apply/${decoded.userId}`, payload);
        console.log(response)
        const setUser = useUserStore.getState().setUser;
        try {
            const user = await getUser();
            setUser(user);
        } catch (error) {
            console.log(error);
        }

        showSuccessToast(
            <div className='text-sm'>
                <p className='font-semibold'>{response.data}</p>
            </div>
        )
    } catch (error) {
        console.error('Error updating user:', error);
        showErrorToast(
            <div className='text-sm'>
                <p className='font-semibold'>Заемът не бе одобрен!</p>
            </div>
        )
    }
};
export const mortgageRequest = async (loanInfo) => {
    const { showErrorToast, showSuccessToast } = useToastNotification();
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
        let response = await apiClient.post(`api/loan/apply/${decoded.userId}`, payload)
        const setUser = useUserStore.getState().setUser;
        try {
            const user = await getUser();
            setUser(user);
        } catch (error) {
            console.log(error);
        }
        showSuccessToast(
            <div className='text-sm'>
                <p className='font-semibold'>{response.data}</p>
            </div>
        )
    } catch (error) {
        console.error('Error updating user:', error);
        showErrorToast(
            <div className='text-sm'>
                <p className='font-semibold'>Ипотеката не бе одобрена!</p>
            </div>
        )
    }
};