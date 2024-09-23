import React from 'react';
import BankIcon from '../assets/logo_header.svg';
import { useNavigate, Link } from 'react-router-dom';

import HappyClient from '../assets/MainPageImages/happy_debit.jpg';
import OnlineBanking from '../assets/MainPageImages/online_banking.png';
import OnlineLoans from '../assets/MainPageImages/online_loans.png';
import TransferServices from '../assets/MainPageImages/transfer_services.png';
import DepositServices from '../assets/MainPageImages/deposit_services.png';
import Mortgages from '../assets/MainPageImages/mortgages.png';
import AccountManagement from '../assets/MainPageImages/account_management.png';
import { useFetchUser } from '../hooks/useFetchUser.js';

const MainPage = () => {
    useFetchUser();
    const navigate = useNavigate();

    const handleNavigation = (event) => {
        const selectedPath = event.target.value;
        if (selectedPath) {
            navigate(selectedPath);
        }
    };

    return (
        <div className='flex flex-col max-xl:'>
            <div className='flex flex-col h-full bg-sky-950 rounded-3xl w-full'>
                <div className="flex flex-col pl-10 bg-white rounded-b-3xl max-xl:pl-0">
                    {/*<div className="flex flex-row pt-8 items-start max-xl:flex-col max-xl:items-center">
                        <img src={BankIcon} className='h-40' alt="Bank Logo"/>
                        <div className='pl-16 flex gap-10 max-xl:flex-col max-xl:pl-0 '>
                            <select 
                                className='text-3xl font-bold justify-center text-gray-600'
                                onChange={handleNavigation}
                                defaultValue="">
                                <option value="" disabled>Ипотеки и Заеми</option>
                                <option value="/calculator">Калкулатор</option>
                            </select>
                            <select className='text-3xl font-bold justify-center text-gray-600'>
                                <option>drop</option>
                            </select>
                        </div>
                    </div>*/}
                    <div className="flex flex-row pb-32 pt-32 pl-32 justify-between max-xl:pl-0 max-xl:flex-col max-xl:pt-10 max-xl:items-center max-xl:pb-0">
                        <div className="flex flex-col w-1/4 items-start gap-14 max-2xl:w-1/3 max-xl:items-center max-xl:w-full">
                            <h2 className='text-5xl font-bold text-start max-2xl:text-4xl max-xl:text-3xl max-xl:text-center'>Живей без такси, безплатно откриване и поддръжка на сметки, неограничени безплатни преводи</h2>
                            <Link to='/auth/register'className='bg-sky-950 rounded-lg h-14 w-80 text-white text-3xl flex items-center justify-center max-xl:w-60 max-xl:text-2xl'>Започнете сега!</Link>
                        </div>
                        <img src={HappyClient} className='pr-80 pb-24 max-2xl:pr-20 max-2xl:w-3/6 max-2xl:pt-10 max-2xl:h-fit max-xl:w-4/6 max-md:w-full  max-xl:px-10' alt="Happy Client"/>
                    </div>
                </div>

                <div className='flex flex-col pl-60 pb-32 max-2xl:pl-0'>
                    <h1 className='text-gray-100 text-5xl pt-14 pl-20 max-xl:pl-6 max-xl:text-3xl'>Нашите услуги:</h1>
                    <div className='flex pt-20 pl-20 gap-96 max-xl:flex-col max-xl:pt-20 max-xl:gap-20 max-xl:pl-6'>
                        <div className='flex items-start w-1/3 max-xl:w-full'>
                            <img src={OnlineBanking} alt="Online Banking"/>
                            <div className='flex flex-col text-gray-100 pl-6 max-xl:flex-col'>
                                <h2 className='text-3xl font-bold'>Онлайн Банкиране</h2>
                                <h3 className='text-2xl pt-6'>Позволява ви да управлявате финансите си отвсякъде и по всяко време</h3>
                            </div>
                        </div>
                        <div className='flex items-start w-1/3 max-xl:w-full'>
                            <img src={TransferServices} alt="Transfer Services"/>
                            <div className='flex flex-col text-gray-100 pl-6 w-full max-xl:w-fit'>
                                <h2 className='text-3xl font-bold'>Трансферни услуги</h2>
                                <h3 className='text-2xl pt-6'>Лесно прехвърляне на средства между различни акаунти или към други лица.</h3>
                            </div>
                        </div>
                    </div>

                    <div className='flex pt-20 pl-20 gap-96 max-xl:flex-col max-xl:gap-20 max-xl:pl-6'>
                        <div className='flex items-start w-1/3 max-xl:w-full'>
                            <img src={OnlineLoans} alt="Online Loans"/>
                            <div className='flex flex-col text-gray-100 pl-6'>
                                <h2 className='text-3xl font-bold'>Онлайн Банкиране</h2>
                                <h3 className='text-2xl pt-6'>Позволява ви да управлявате финансите си отвсякъде и по всяко време</h3>
                            </div>
                        </div>
                        <div className='flex items-start w-1/3 max-xl:w-full'>
                            <img src={DepositServices} alt="Deposit Services"/>
                            <div className='flex flex-col text-gray-100 pl-6 w-full'>
                                <h2 className='text-3xl font-bold'>Услуги за депозити</h2>
                                <h3 className='text-2xl pt-6'>Депозирайте чекове чрез мобилното си устройство или в банкомат.</h3>
                            </div>
                        </div>
                    </div>

                    <div className='flex pt-20 pl-20 gap-96 max-xl:flex-col max-xl:gap-20 max-xl:pl-6'>
                        <div className='flex items-start w-1/3 max-xl:w-full'>
                            <img src={Mortgages} alt="Mortgages"/>
                            <div className='flex flex-col text-gray-100 pl-6'>
                                <h2 className='text-3xl font-bold'>Онлайн Банкиране</h2>
                                <h3 className='text-2xl pt-6'>Позволява ви да управлявате финансите си отвсякъде и по всяко време</h3>
                            </div>
                        </div>
                        <div className='flex items-start w-1/3 max-xl:w-full'>
                            <img src={AccountManagement} alt="Account Management"/>
                            <div className='flex flex-col text-gray-100 pl-6 w-full'>
                                <h2 className='text-3xl font-bold'>Услуги за депозити</h2>
                                <h3 className='text-2xl pt-6'>Депозирайте чекове чрез мобилното си устройство или в банкомат.</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MainPage;
