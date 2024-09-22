import React from 'react'
import { useState } from 'react'
import InnerHeader from '../components/nav-bar/authenticated/InnerHeader'
import AuthNavbar from '../components/nav-bar/authenticated/AuthNavbar'
import PrimaryButton from '../components/PrimaryButton'
import ShadowBox from '../components/ShadowBox'
import AddAccountForm from '../components/account-overview/AddAccountForm'
import { useUserStore } from '../stores/AuthStore.js';
import { useNavigate } from 'react-router-dom'
import { useFetchUser } from '../hooks/useFetchUser.js'

import transactionIcon from '../assets/account-overview/money.png'
import loanIcon from '../assets/account-overview/loan.png'
import mortgageIcon from '../assets/account-overview/mortgage.png'
import transactionHistoryIcon from '../assets/account-overview/transaction.png'

const AccountOverviewPage = () => {
    useFetchUser();
    const [isAddAccountButtonClicked, setIsAddAccountButtonClicked] = useState(false);
    const { user } = useUserStore();
    const navigate = useNavigate();

    const handleAddAccountButtonClick = (e) => {
        setIsAddAccountButtonClicked(true);
    }

    const closeForm = () => {
        setIsAddAccountButtonClicked(false);
    }
    if (!user) {
        return <div>Loading...</div>; // Or some other loading indicator
    }
    return (
        <div>
            <header>
                <InnerHeader />
                <AuthNavbar />
            </header>

            <div className='mx-6 mb-5'>
                <h1 className='font-semibold text-2xl text-blue-whale mt-12'>Добре дошли, {user.firstname} {user.lastname}</h1>

                <section className='md:w-fit'>
                    <div className='flex flex-row justify-between items-center mt-10 relative'>
                        <h2 className='text-xl font-semibold text-blue-whale'>Наличност по сметки</h2>

                        {user.accounts.length < 5 && (
                            <PrimaryButton
                                label='Добави сметка'
                                className='bg-kelly-green'
                                onClick={handleAddAccountButtonClick}
                            />
                        )}

                        {isAddAccountButtonClicked && (
                            <AddAccountForm closeForm={closeForm} />
                        )}
                    </div>

                    <div>
                        <div className='mt-5 space-y-7'>
                            {user.accounts.length > 0
                                ? user.accounts.map((account) => (
                                    <ShadowBox key={account.id} className='h-fit flex-col '>
                                        <div className='flex flex-col gap-5 md:flex-row md:gap-24'>

                                            <div className='flex flex-col flex-1'>
                                                <p className='font-semibold text-lg'>{account.accountType.accountType}</p>
                                                <p>{account.iban}</p>
                                            </div>

                                            <div className='flex flex-col'>
                                                <p className='text-kelly-green font-semibold text-xl md:self-end'>{account.balance.toFixed(2)}</p>
                                                <p className='text-gray-500'>наличност <span className='text-kelly-green'>BGN</span></p>
                                            </div>

                                            <div className='flex flex-row gap-5'>
                                                <div className='flex flex-col w-fit'>
                                                    <button
                                                        className='overflow-visible h-16 relative flex flex-col items-center justify-center gap-2 transition-all duration-300 group overflow-hidden'
                                                        onClick={() => navigate('/profile', { state: { accountId: user.accounts.indexOf(account) } })}
                                                    >
                                                        <img src={transactionHistoryIcon} className='size-8 transition-transform duration-300 group-hover:translate-y-[-8px]' alt="" />
                                                        <p className='mt-12 absolute text-xs transform translate-y-5 transition-transform duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>Движения</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </ShadowBox>
                                ))
                                : (
                                    <div className='my-16 text-blue-whale'>
                                        <p className='text-lg font-semibold mb-3'>Изглежда, че все още нямате отворени сметки при нас.</p>
                                        Можете да създадете нова сметка, като натиснете бутона <span className='font-semibold text-kelly-green'>"Добави сметка"</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </section>
            </div>

            <section className='flex gap-10 flex-row bg-space-wolves-grey mt-10 p-10 items-center justify-evenly'>
                <button className='max-w-28'>
                    <div className='flex flex-col items-center gap-2 group'>
                        <div className='flex bg-azure border rounded-full size-28 items-center justify-center transition-transform duration-300 ease-in-out transform group-hover:scale-110'>
                            <img
                                src={transactionIcon}
                                alt=""
                                className='h-16'
                            />
                        </div>
                        <h3 className='text-lg font-semibold text-blue-whale leading-5 mt-2'>Нов превод </h3>
                    </div>
                </button>

                <button className='max-w-28'>
                    <div className='flex flex-col items-center gap-2  group'>
                        <div className='flex bg-kelly-green border rounded-full size-28 items-center justify-center transition-transform duration-300 ease-in-out transform group-hover:scale-110'>
                            <img
                                src={loanIcon}
                                alt=""
                                className='h-16'
                            />
                        </div>
                        <h3 className='text-lg font-semibold text-blue-whale leading-5 mt-2'>Потребителски кредит</h3>
                    </div>
                </button>

                <button className='max-w-28'>
                    <div className='flex flex-col items-center gap-2 group'>
                        <div className='flex bg-azure border rounded-full size-28 items-center justify-center transition-transform duration-300 ease-in-out transform group-hover:scale-110'>
                            <img
                                src={mortgageIcon}
                                alt=""
                                className='h-16'
                            />
                        </div>
                        <h3 className='text-lg font-semibold text-blue-whale leading-5 mt-2'>Ипотечен кредит</h3>
                    </div>
                </button>
            </section>
        </div>
    )
}

export default AccountOverviewPage

