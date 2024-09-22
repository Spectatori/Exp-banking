import React, { useState } from 'react'
import { getUser } from '../api/userService';
import { useUserStore } from '../stores/AuthStore';
import apiClient from '../api/apiClient';

const useCreateTransaction = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { setUser } = useUserStore();

    const createTransaction = async (values, accountId) => {
        try {
            setIsLoading(true);

            const transactionValues = {
                dateOfTransaction: new Date().toISOString(),
                //...values
                ...Object.fromEntries(
                    Object.entries(values).map(([key, value]) =>
                        key === 'amount' ? [key, parseFloat(value).toFixed(2)] : [key, value]
                    )
                ),
                //
                transactionType:
                {
                    "transactionTypeName": "DEBIT"
                }
            }

            await apiClient.post(`/api/user/transactions/createTransaction/${accountId}`, transactionValues);
            const updatedUser = await getUser();
            setUser(updatedUser);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, createTransaction, error }
}

export default useCreateTransaction
