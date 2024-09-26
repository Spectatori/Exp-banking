import { useEffect, useState } from 'react'
import apiClient from '../api/apiClient';

const useGetLoansBetweenFiveAndTen = () => {
    const [loansBetweenFiveAndTen, setLoansBetweenFiveAndTen] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getLoansBetweenFiveAndTen = async () => {
            try {
                const res = await apiClient.get(`api/admin/loans/betweenfiveandtenk`);
                setLoansBetweenFiveAndTen(res.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false)
            }
        }
        getLoansBetweenFiveAndTen();
    }, [])

    return { loansBetweenFiveAndTen, isLoading, error }
}

export default useGetLoansBetweenFiveAndTen