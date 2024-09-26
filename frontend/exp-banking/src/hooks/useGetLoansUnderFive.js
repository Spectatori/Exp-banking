import { useEffect, useState } from 'react'
import apiClient from '../api/apiClient';

const useGetLoansUnderFive = () => {
    const [loansUnderFive, setLoansUnderFive] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getLoansUnderFive = async () => {
            try {
                const res = await apiClient.get(`api/admin/loans/underfive`);
                setLoansUnderFive(res.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false)
            }
        }
        getLoansUnderFive();
    }, [])

    return { loansUnderFive, isLoading, error }
}

export default useGetLoansUnderFive