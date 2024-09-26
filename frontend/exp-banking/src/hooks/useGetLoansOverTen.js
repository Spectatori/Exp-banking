import { useEffect, useState } from 'react'
import apiClient from '../api/apiClient';

const useGetLoansOverTen = () => {
    const [loansOverTen, setLoansOverTen] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getAllLoansOverTen = async () => {
            try {
                const res = await apiClient.get(`api/admin/loans/overten`);
                setLoansOverTen(res.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false)
            }
        }

        getAllLoansOverTen();
    }, [])

    return { loansOverTen, isLoading, error }
}

export default useGetLoansOverTen
