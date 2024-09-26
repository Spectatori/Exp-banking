import { useEffect, useState } from 'react'
import apiClient from '../api/apiClient';

const useGetAllLoans = () => {
    const [loans, setLoans] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getAllLoans = async () => {
            try {
                const res = await apiClient.get(`api/admin/loans`);
                setLoans(res.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false)
            }
        }

        getAllLoans();
    }, [])

    return { loans, isLoading, error }
}

export default useGetAllLoans
