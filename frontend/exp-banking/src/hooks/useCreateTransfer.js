import React, { useState } from 'react'
import { getUser } from '../api/userService';
import { useUserStore } from '../stores/AuthStore';
import apiClient from '../api/apiClient';

const useCreateTransfer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const { setUser } = useUserStore();

    const createTransfer = async (values, senderIban) => {
        try {
            setIsLoading(true)
            const res = await apiClient.post(`api/accounts/transfer/${senderIban}`, values);
            const updatedUser = await getUser();
            setUser(updatedUser);
        } catch {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, createTransfer, error }
}

export default useCreateTransfer
