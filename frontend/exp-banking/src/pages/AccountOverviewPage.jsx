import React from 'react'
import { useState } from 'react'
import InnerHeader from '../components/nav-bar/authenticated/InnerHeader'
import AuthNavbar from '../components/nav-bar/authenticated/AuthNavbar'
import PrimaryButton from '../components/PrimaryButton'
import ShadowBox from '../components/ShadowBox'
import AddAccountForm from '../components/account-overview/AddAccountForm'

import detailsIcon from '../assets/account-overview/details.png'
import transactionIcon from '../assets/account-overview/money.png'
import loanIcon from '../assets/account-overview/loan.png'
import mortgageIcon from '../assets/account-overview/mortgage.png'

const AccountOverviewPage = () => {
    const [isAddAccountButtonClicked, setIsAddAccountButtonClicked] = useState(false);

    const handleAddAccountButtonClick = (e) => {
        setIsAddAccountButtonClicked(!isAddAccountButtonClicked);
    }

    const closeForm = () => {
        setIsAddAccountButtonClicked(false);
    }

    return (
        <div>
            <header>
                <InnerHeader />
                <AuthNavbar />
            </header>

            <div className='mx-6 mb-5'>
                <h1 className='font-semibold text-2xl text-blue-whale mt-12'>Добре дошли, Име Фамилия</h1>

                <div className='flex flex-col lg:flex-row justify-between'>
                    <section className='w-fit'>
                        <div className='flex flex-row justify-between items-center mt-10 relative'>
                            <h2 className='text-xl font-semibold text-blue-whale'>Наличност по сметки</h2>
                            <PrimaryButton label='Добави сметка' className='bg-kelly-green' onClick={handleAddAccountButtonClick} />

                            {isAddAccountButtonClicked && (
                                <AddAccountForm closeForm={closeForm}/>
                            )}
                        </div>

                        <div className='mt-5 space-y-7'>
                            <ShadowBox className='h-fit flex-1 justify-between gap-24 items-center'>
                                <div className='flex flex-col w-fit'>
                                    <p className='text-kelly-green font-semibold text-xl self-end'>1050.00</p>
                                    <p className='text-gray-500'>наличност <span className='text-kelly-green'>BGN</span></p>
                                </div>

                                <div className='flex flex-col w-fit'>
                                    <p className='font-semibold text-lg self-end'>Разплащателна сметка - BGN</p>
                                    <p>BG54EXP565660603787</p>
                                </div>

                                <div className='flex flex-col w-fit'>
                                    <button className='overflow-visible h-16 relative flex flex-col items-center justify-center gap-2 transition-all duration-300 group overflow-hidden'>
                                        <img src={detailsIcon} className='size-7 transition-transform duration-300 group-hover:translate-y-[-8px]' alt="" />
                                        <p className='mt-12 absolute text-xs transform translate-y-5 transition-transform duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>Детайли</p>
                                    </button>
                                </div>
                            </ShadowBox>

                            <ShadowBox className='h-fit flex-1 justify-between gap-24 items-center'>
                                <div className='flex flex-col w-fit'>
                                    <p className='text-kelly-green font-semibold text-xl self-end'>1050.00</p>
                                    <p className='text-gray-500'>наличност <span className='text-kelly-green'>BGN</span></p>
                                </div>

                                <div className='flex flex-col w-fit'>
                                    <p className='font-semibold text-lg self-end'>Разплащателна сметка - BGN</p>
                                    <p>BG54EXP565660603787</p>
                                </div>

                                <div className='flex flex-col w-fit'>
                                    <button className='overflow-visible h-16 relative flex flex-col items-center justify-center gap-2 transition-all duration-300 group overflow-hidden'>
                                        <img src={detailsIcon} className='size-7 transition-transform duration-300 group-hover:translate-y-[-8px]' alt="" />
                                        <p className='mt-12 absolute text-xs transform translate-y-5 transition-transform duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>Детайли</p>
                                    </button>
                                </div>
                            </ShadowBox>

                            <ShadowBox className='h-fit flex-1 justify-between gap-24 items-center'>
                                <div className='flex flex-col w-fit'>
                                    <p className='text-kelly-green font-semibold text-xl self-end'>1050.00</p>
                                    <p className='text-gray-500'>наличност <span className='text-kelly-green'>BGN</span></p>
                                </div>

                                <div className='flex flex-col w-fit'>
                                    <p className='font-semibold text-lg self-end'>Разплащателна сметка - BGN</p>
                                    <p>BG54EXP565660603787</p>
                                </div>

                                <div className='flex flex-col w-fit'>
                                    <button className='overflow-visible h-16 relative flex flex-col items-center justify-center gap-2 transition-all duration-300 group overflow-hidden'>
                                        <img src={detailsIcon} className='size-7 transition-transform duration-300 group-hover:translate-y-[-8px]' alt="" />
                                        <p className='mt-12 absolute text-xs transform translate-y-5 transition-transform duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>Детайли</p>
                                    </button>
                                </div>
                            </ShadowBox>
                        </div>
                    </section>
                </div>
            </div>

            <section className='flex flex-row bg-space-wolves-grey mt-10 p-10 items-center justify-evenly'>
                <button className='max-w-28'>
                    <div className='flex flex-col items-center gap-2 group'>
                        <div className='flex bg-azure border rounded-full size-28 items-center justify-center transition-transform duration-300 ease-in-out transform group-hover:scale-110'>
                            <img
                                src={transactionIcon}
                                alt=""
                                className='h-16'
                            />
                        </div>
                        <h3 className='text-lg font-semibold text-blue-whale leading-5 mt-2'>Създай нов превод </h3>
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
                        <h3 className='text-lg font-semibold text-blue-whale leading-5 mt-2'>Кандидатствай за заем</h3>
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
                        <h3 className='text-lg font-semibold text-blue-whale leading-5 mt-2'>Кандидатствай за ипотечен кредит</h3>
                    </div>
                </button>
            </section>
        </div>
    )
}

export default AccountOverviewPage
