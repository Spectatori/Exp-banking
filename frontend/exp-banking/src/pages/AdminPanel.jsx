import React, { useMemo } from 'react'
import useGetAllLoans from '../hooks/useGetAllLoans';
import useGetLoansOverTen from '../hooks/useGetLoansOverTen';
import useGetLoansUnderFive from '../hooks/useGetLoansUnderFive';
import useGetLoansBetweenFiveAndTen from '../hooks/useGetLoansBetweenFiveAndTen';
import LoanTable from '../components/Table';
import LoansPieChart from '../components/LoansPieChart';
import { useUserStore } from '../stores/AuthStore';
import { Navigate } from 'react-router-dom';

const AdminPanel = () => {
    const user = useUserStore((state) => state.user);
    const { loans, error, isLoading } = useGetAllLoans();
    const { loansOverTen } = useGetLoansOverTen();
    const { loansUnderFive } = useGetLoansUnderFive();
    const { loansBetweenFiveAndTen } = useGetLoansBetweenFiveAndTen();

    const columns = useMemo(() => [
        {
            accessorKey: 'dateOfApplying',
            header: 'Дата на кандидатстване',
            size: 30
        },
        {
            accessorKey: 'firstName',
            header: 'Име',
        },
        {
            accessorKey: 'lastName',
            header: 'Фамилия',
        },
        {
            accessorKey: 'iban',
            header: 'IBAN',
        },
        {
            accessorKey: 'remainingBalance',
            header: 'Оставаща сума за погасяване',
            Cell: ({ cell }) => Number(cell.getValue()).toFixed(2)
        },
        {
            accessorKey: 'totalAmount',
            header: 'Общ размер на кредита',
        }
    ], []);
    const admin = import.meta.env.VITE_ADMIN_EMAIL;
    if (admin != user.email) {
        return <Navigate to="/account-overview"/>;  
      }

    return (
        <div className='mx-6 mb-5'>
            <div className='flex flex-row justify-evenly'>
                {loans.length > 0
                    ? (
                        <>
                            <div className='flex flex-col items-center gap-24'>

                            <LoansPieChart loansOverTen={loansOverTen} loansUnderFive={loansUnderFive} loansBetweenFiveAndTen={loansBetweenFiveAndTen} />

                                <div className='overflow-y-auto h-96 max-h-96 w-full'>
                                    <LoanTable columns={columns} data={loans} />
                                </div>
                            </div>
                        </>
                    )
                    : (
                        <div className='flex w-full items-center justify-center gap-7 text-center'>
                            <p className='md:text-3xl text-2xl font-semibold text-blue-whale'>
                                Няма информация за показване.
                            </p>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default AdminPanel
