import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import ShadowBox from '../components/ShadowBox';
import { useUserStore } from '../stores/AuthStore';
import useCreateTransaction from '../hooks/useCreateTransaction';
import { transactionSchema } from '../schemas/transactionSchema';

const NewTransactionPage = () => {
    const { user } = useUserStore();
    const { createTransaction } = useCreateTransaction();
    const navigate = useNavigate();

    const [isAccountsDropdownClicked, setIsAccountsDropdownClicked] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState(user.accounts[0]);

    const handleAccountChange = (account) => {
        setSelectedAccount(account);
        setIsAccountsDropdownClicked(!isAccountsDropdownClicked);
    };

    const handleAccountClick = () => {
        setIsAccountsDropdownClicked(!isAccountsDropdownClicked);
    }

    const onSubmit = (values) => {
        if (selectedAccount.balance < Math.abs(values.amount)) {
            console.log('Заявката ви не може да бъде обработена, тъй като нямате достатъчна наличност в сметката. Моля, проверете баланса си и опитайте отново.');         
        } else {
            createTransaction(values, selectedAccount.accountId);
            navigate('/account-overview')
        }  
    }

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            details: '',
            amount: ''
        },
        validationSchema: transactionSchema,
        onSubmit
    })

    return (
        <div>
            <div className='mx-6 mb-5 mt-12 flex flex-col'>
                <h2 className='text-2xl font-semibold text-blue-whale'>Транзакция</h2>
                <form
                    action=""
                    className='flex flex-col mt-5 gap-5 w-fit self-center'
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label
                        > От сметка
                        </label>
                        <div className='relative'>
                            <button
                                onClick={handleAccountClick}
                                type='button'

                            >
                                <ShadowBox className='h-fit w-fit flex-col ' selected={true}>
                                    <div className='flex flex-row gap-5 md:gap-10'>

                                        <div className='flex flex-col flex-1 items-start'>
                                            <p className='font-semibold'>{selectedAccount.accountType.accountType}</p>
                                            <p className='text-sm'>{selectedAccount.iban}</p>
                                        </div>

                                        <div className='flex flex-col text-sm items-start'>
                                            <p className='text-kelly-green font-semibold text-xl md:self-end'>{selectedAccount.balance.toFixed(2)}</p>
                                            <p className='text-gray-500'>наличност <span className='text-kelly-green'>BGN</span></p>
                                        </div>
                                    </div>
                                </ShadowBox>
                            </button>

                            {isAccountsDropdownClicked && (
                                <div className='flex flex-col gap-3 px-2 bg-gray-300 absolute scrollbar-thin w-full drop-shadow-xl rounded-lg max-h-56 overflow-y-auto'>
                                    {user.accounts.map((account) => (
                                        <button
                                            onClick={() => handleAccountChange(account)}
                                        >
                                            <ShadowBox
                                                key={account.accountId}
                                                className='h-fit w-full'
                                            >
                                                <div className='flex flex-row gap-5 md:gap-10 text-start'>
                                                    <div className='flex flex-col flex-1'>
                                                        <p className='font-semibold'>{account.accountType.accountType}</p>
                                                        <p className='text-sm'>{account.iban}</p>
                                                    </div>

                                                    <div className='flex flex-col text-sm text-end'>
                                                        <p className='text-kelly-green font-semibold text-xl md:self-end'>{account.balance.toFixed(2)}</p>
                                                        <p className='text-gray-500'>наличност <span className='text-kelly-green'>BGN</span></p>
                                                    </div>
                                                </div>
                                            </ShadowBox>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='flex flex-col max-w-full gap-5'>
                        <div className='flex flex-col gap-2'>
                            <label
                                htmlFor="amount"
                            > Сума
                            </label>
                            <input
                                id='amount'
                                name='amount'
                                type="number"
                                placeholder='00.00'
                                step="0.01"
                                className={`pl-2 h-9 border rounded-md focus:ring-2 outline-none border-blue-whale`}
                                value={values.amount}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.amount && touched.amount && (
                                <div className='text-sm font-medium text-wrap text-red-500'>
                                    {errors.amount}
                                </div>
                            )}
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label
                                htmlFor="details"
                            > Категория
                            </label>
                            <select
                                id="details"
                                name='details'
                                className='pl-2 h-9 border rounded-md focus:ring-2 outline-none border-blue-whale'
                                value={values.details}
                                onChange={(event) => {
                                    handleChange(event);
                                }}
                                onBlur={handleBlur}
                            >
                                <option value="">Изберете...</option>
                                <option value="groceries">Хранителни стоки</option>
                                <option value="food">Храна</option>
                                <option value="entertainment">Забавление</option>
                                <option value="travel">Пътуване</option>
                            </select>
                            {errors.details && touched.details && (
                                <div className='text-sm font-medium text-wrap text-red-500'>
                                    {errors.details}
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='self-center mt-4 bg-kelly-green transition-shadow duration-300 hover:shadow-md hover:shadow-gray-400 rounded-md h-10 w-48 text-white font-bold'
                    >
                        Направи транзакция
                    </button>
                </form>

            </div>
        </div>
    )
}

export default NewTransactionPage
