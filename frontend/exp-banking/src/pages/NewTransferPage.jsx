import React, { useState } from 'react'
import ShadowBox from '../components/ShadowBox'
import { useFormik } from 'formik';
import { transferSchema } from '../schemas/transferSchema';
import { Navigate } from 'react-router-dom';
import { useUserStore } from '../stores/AuthStore';
import useCreateTransfer from '../hooks/useCreateTransfer';
import { useToastNotification } from '../hooks/useToastNotification';
import { useNavigate, Link } from 'react-router-dom';

const NewTransferPage = () => {
    const { user } = useUserStore();
    const { isLoading, createTransfer, error } = useCreateTransfer();
    const { showErrorToast, showSuccessToast } = useToastNotification();

    const [isAccountsDropdownClicked, setIsAccountsDropdownClicked] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState(user.accounts[0]);

    const navigate = useNavigate();

    const handleAccountChange = (account) => {
        setSelectedAccount(account);
        setIsAccountsDropdownClicked(!isAccountsDropdownClicked);
    };

    const handleAccountClick = () => {
        setIsAccountsDropdownClicked(!isAccountsDropdownClicked);
    }

    const onSubmit = (values) => {
        try {
            if (selectedAccount.balance < values.amount) {
                showErrorToast(
                    <p className='text-sm'>Заявката ви не може да бъде обработена, тъй като нямате достатъчна наличност в сметката. Моля, проверете баланса си и опитайте отново.</p>
                );
            } else if (selectedAccount.iban === values.receiverIban) {
                showErrorToast(
                    <div className='text-sm'>
                        <p className='font-semibold'>Неуспешен превод</p>
                        <p>Източникът и получателят не могат да бъдат една и съща сметка.</p>
                    </div>
                )
            } else {
                createTransfer(values, selectedAccount.iban);
                navigate('/account-overview')
                showSuccessToast(
                    <div className='text-sm'>
                        <p className='font-semibold'>Преводът беше успешен!</p>
                    </div>
                )
            }
        } catch (error) {
            showErrorToast(
                <div className='text-sm'>
                    <p className='font-semibold'>Неуспешен превод</p>
                    <p>Моля, проверете данните и опитайте отново.</p>
                </div>
            );
        }
    }

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            receiverIban: '',
            amount: ''
        },
        validationSchema: transferSchema,
        onSubmit
    })

    if (!user || !user.accounts || user.accounts.length === 0) {
        return <Navigate to="/account-overview"/>;  
      }
    return (
        <div>
            <div className='mx-6 mb-5 mt-12 flex flex-col'>
                {user.accounts == 0
                    ? (
                        <div className='flex flex-col self-center w-fit items-center justify-center gap-7 text-center'>
                            <p className='lg:text-3xl md:text-2xl text-xl font-semibold text-blue-whale'>
                                Не можете да създавате нов превод, ако нямате налични сметки.
                            </p>
                            <p className='flex flex-row gap-2 text-center w-fit text-lg font-medium '>
                                Към
                                <Link
                                    to='/account-overview'
                                    className='text-kelly-green font-semibold'
                                >
                                    Наличност по сметки
                                </Link>
                            </p>
                        </div>
                    )
                    : (
                        <>
                            <h2 className='text-2xl font-semibold text-blue-whale'>Левов превод</h2>
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
                                            <ShadowBox className='h-fit w-fit flex-col' selected={true}>
                                                <div className='flex flex-col gap-5 md:flex-row md:gap-10'>

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
                                            htmlFor=""
                                        > Име на наредител
                                        </label>
                                        <p className='font-semibold'>{`${user.firstname} ${user.secondname} ${user.lastname}`}</p>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label
                                            htmlFor=""
                                        > Към
                                        </label>
                                        <input
                                            id='receiverIban'
                                            name='receiverIban'
                                            type="text"
                                            placeholder='IBAN на получателя'
                                            className={`pl-2 h-9 border rounded-md focus:ring-2 outline-none border-blue-whale`}
                                            value={values.oldPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                        {errors.receiverIban && touched.receiverIban && (
                                            <div className='text-sm font-medium text-wrap text-red-500'>
                                                {errors.receiverIban}
                                            </div>
                                        )}
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label
                                            htmlFor=""
                                        > Сума
                                        </label>
                                        <input
                                            id='amount'
                                            name='amount'
                                            type="number"
                                            placeholder='00.00'
                                            step="0.01"
                                            className={`pl-2 h-9 border rounded-md focus:ring-2 outline-none border-blue-whale`}
                                            value={values.oldPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                        {errors.amount && touched.amount && (
                                            <div className='text-sm font-medium text-wrap text-red-500'>
                                                {errors.amount}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type='subimt'
                                    className='self-center mt-4 bg-kelly-green transition-shadow duration-300 hover:shadow-md hover:shadow-gray-400 rounded-md h-10 w-48 text-white font-bold'
                                >
                                    Превод
                                </button>
                            </form>
                        </>
                    )}
            </div>
        </div>
    )
}

export default NewTransferPage
