import { useState } from 'react'
import { getUser } from '../api/userService';
import apiClient from '../api/apiClient';
import { useUserStore } from '../stores/AuthStore';

const useCreateAccount = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { setUser } = useUserStore();

    const createAccount = async (values) => {
        try {
            setIsLoading(true);
            const user = await getUser();
            await apiClient.post(`api/accounts/create/${user.userId}`, values)
            const updatedUser = await getUser();
            setUser(updatedUser);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, createAccount, error }
}

export default useCreateAccount
