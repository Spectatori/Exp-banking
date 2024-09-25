import React, { useMemo } from 'react'
import useGetAllLoans from '../hooks/useGetAllLoans';
import LoanTable from '../components/Table';

const AdminPanel = () => {
    const { loans, error, isLoading } = useGetAllLoans();

    const columns = useMemo(() => [
        {
            accessorKey: 'dateOfApplying',
            header: 'Дата на кандидатстване',
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
        },
        {
            accessorKey: 'totalAmount',
            header: 'Общ размер на кредита',
        }
    ], []);

    return (
        <div className='mx-6 mb-5'>
            {loans.length > 0
                ? (
                    <div className='flex flex-col md:flex-row'>
                        <LoanTable columns={columns} data={loans} />
                    </div>
                )
                : (
                    <div className='flex w-full items-center justify-center gap-7 text-center'>
                            <p className='md:text-3xl text-2xl font-semibold text-blue-whale'>
                                Няма информация за показване.
                            </p>
                        </div>
                )}
        </div>
    )
}

export default AdminPanel
