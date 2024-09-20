import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import InnerHeader from '../components/nav-bar/authenticated/InnerHeader'
import AuthNavbar from '../components/nav-bar/authenticated/AuthNavbar'
import PrimaryButton from '../components/PrimaryButton'
import ShadowBox from '../components/ShadowBox'
import AddAccountForm from '../components/account-overview/AddAccountForm'

import detailsIcon from '../assets/account-overview/details.png'
import transactionIcon from '../assets/account-overview/money.png'
import loanIcon from '../assets/account-overview/loan.png'
import mortgageIcon from '../assets/account-overview/mortgage.png'
import transactionHistoryIcon from '../assets/account-overview/transaction.png'
import TransactionIcon from "../assets/TransactionIcon.png";
import TransactionDetailBlue from '../assets/TransactionDetailBlue.png';
import TransactionDetailPurple from '../assets/TransactionDetailPurple.png';

const AccountOverviewPage = () => {
    const [isAddAccountButtonClicked, setIsAddAccountButtonClicked] = useState(false);
    const [showTransactionHistory, setShowTransactionHistory] = useState(false);
    const [selectedAccountTransactions, setSelectedAccountTransactions] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState([]);

    const mockAccounts = [
        { id: 1, IBAN: 'BG54EXP565660603788', balance: 1050.00, type: 'Разплащателна сметка - BGN' },
        { id: 2, IBAN: 'BG54EXP565660603788', balance: 850.00, type: 'Разплащателна сметка - BGN' },
        { id: 3, IBAN: 'BG54EXP565660603788', balance: 1250.00, type: 'Спестовна сметка - BGN' }
    ];

    const mockTransactionHistory = {
        1: [
            {
                id: 1,
                date: '2024-09-01',
                description: 'Плащане с карта',
                amount: -50.00,
                category: 'Food',
                merchant: 'Billa'
            },
            {
                id: 2,
                date: '2024-09-02',
                description: 'Заплата',
                amount: 1050.00,
                category: 'Salary',
                merchant: 'Работодател'
            },
            {
                id: 3,
                date: '2024-09-03',
                description: 'Плащане с карта',
                amount: -20.00,
                category: 'Entertainment',
                merchant: 'eMAG'
            },
            {
                id: 4,
                date: '2024-09-04',
                description: 'Трансфер',
                amount: -200.00,
                category: 'Transfer',
                merchant: 'Личен Акаунт'
            },
        ],
        2: [
            {
                id: 1,
                date: '2024-09-05',
                description: 'Плащане с карта',
                amount: -30.00,
                category: 'Travel',
                merchant: 'Shell'
            },
            {
                id: 2,
                date: '2024-09-06',
                description: 'Трансфер',
                amount: -10.00,
                category: 'Other',
                merchant: 'Обменно Бюро'
            },
        ],
        3: [
            {
                id: 1,
                date: '2024-09-07',
                description: 'Депозит',
                amount: 15.00,
                category: 'Savings',
                merchant: 'Банка'
            },
        ]
    };

    const categoryColors = {
        Food: {
            Color: "#FF6347",
            Circle: TransactionDetailBlue
        },
        Entertainment: {
            Color: "#833EA5",
            Circle: TransactionDetailPurple
        },
        Travel: {
            Color: "red",
            Circle: TransactionDetailPurple
        },
        Groceries: {
            Color: "#32CD32",
            Circle: TransactionDetailPurple
        }
    };

    const handleAddAccountButtonClick = (e) => {
        setIsAddAccountButtonClicked(true);
    }

    const closeForm = () => {
        setIsAddAccountButtonClicked(false);
    }

    const handleTransactionHistoryClick = (accountId) => {
        setSelectedAccountTransactions(mockTransactionHistory[accountId] || []);
        setSelectedAccount(mockAccounts.find((account) => account.id === accountId));

        selectedAccount.id === accountId ? setShowTransactionHistory(!showTransactionHistory) : setShowTransactionHistory(true);
    };

    return (
        <div>
            <header>
                <InnerHeader />
                <AuthNavbar />
            </header>

            <div className='mx-6 mb-5'>
                <h1 className='font-semibold text-2xl text-blue-whale mt-12'>Добре дошли, Име Фамилия</h1>

                <section className='md:w-fit'>
                    <div className='flex flex-row justify-between items-center mt-10 relative'>
                        <h2 className='text-xl font-semibold text-blue-whale'>Наличност по сметки</h2>
                        <PrimaryButton label='Добави сметка' className='bg-kelly-green' onClick={handleAddAccountButtonClick} />

                        {isAddAccountButtonClicked && (
                            <AddAccountForm closeForm={closeForm} />
                        )}
                    </div>

                    <div className=''>
                        <div className='mt-5 space-y-7'>
                            {mockAccounts.map((account) => (
                                <ShadowBox key={account.id} className='h-fit flex-col  '>
                                    <div className='flex flex-col gap-5 md:flex-row md:gap-24'>

                                        <div className='flex flex-col flex-1'>
                                            <p className='font-semibold text-lg'>{account.type}</p>
                                            <p>{account.IBAN}</p>
                                        </div>

                                        <div className='flex flex-col'>
                                            <p className='text-kelly-green font-semibold text-xl md:self-end'>{account.balance}</p>
                                            <p className='text-gray-500'>наличност <span className='text-kelly-green'>BGN</span></p>
                                        </div>

                                        <div className='flex flex-row gap-5'>
                                            <div className='flex flex-col'>
                                                <button className='overflow-visible h-16 relative flex flex-col items-center justify-center gap-2 transition-all duration-300 group overflow-hidden'>
                                                    <img src={detailsIcon} className='size-7 transition-transform duration-300 group-hover:translate-y-[-8px]' alt="" />
                                                    <p className='mt-12 absolute text-xs transform translate-y-5 transition-transform duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>Детайли</p>
                                                </button>
                                            </div>

                                            <div className='flex flex-col w-fit'>
                                                <button
                                                    className='overflow-visible h-16 relative flex flex-col items-center justify-center gap-2 transition-all duration-300 group overflow-hidden'
                                                    onClick={() => handleTransactionHistoryClick(account.id)}
                                                >
                                                    <img src={transactionHistoryIcon} className='size-8 transition-transform duration-300 group-hover:translate-y-[-8px]' alt="" />
                                                    <p className='mt-12 absolute text-xs transform translate-y-5 transition-transform duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>Движения</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    {selectedAccount.id === account.id && showTransactionHistory && (
                                        <div className='mt-5 flex flex-col w-[35rem] border-t border-t-gray-300 w-full px-5 justify-items-center text-sm md:text-base'>
                                            {selectedAccountTransactions.map((transaction) => {
                                                const categoryCircle = categoryColors[transaction.category]?.Circle || null;

                                                return (
                                                    <div className='flex gap-10 mt-5 items-center'>
                                                        <div className='flex flex-row gap-2'>
                                                            <div className='flex flex-col '>
                                                                <h3>{transaction.merchant}</h3>
                                                                <p>{transaction.date}</p>
                                                            </div>
                                                        </div>
                                                        <p className='flex-1 text-start'>{transaction.description}</p>
                                                        <div className='flex-1 flex items-center justify-end'>
                                                            {categoryCircle && <img src={categoryCircle} className="w-4 h-4" alt="Category Circle" />}
                                                            <p >{transaction.category}</p>
                                                        </div>
                                                        <p className='flex-none'>{transaction.amount} BGN</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                </ShadowBox>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <section className='flex gap-10 flex-row bg-space-wolves-grey mt-10 p-10 items-center justify-evenly'>
                <button className='max-w-28'>
                    <Link to='/new-transfer'>
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
                    </Link>
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
