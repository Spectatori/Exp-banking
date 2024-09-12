import React from 'react';
import Navbar from '../components/nav-bar/Navbar.jsx';
import BankIcon from '../assets/logo_header.svg';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

import HappyClient from '../assets/MainPageImages/happy_debit.jpg';
import OnlineBanking from '../assets/MainPageImages/online_banking.png';
import OnlineLoans from '../assets/MainPageImages/online_loans.png';
import TransferServices from '../assets/MainPageImages/transfer_services.png';
import DepositServices from '../assets/MainPageImages/deposit_services.png';
import Mortgages from '../assets/MainPageImages/mortgages.png';
import AccountManagement from '../assets/MainPageImages/account_management.png';

const MainPage = () => {
    const navigate = useNavigate();

    const handleNavigation = (event) => {
        const selectedPath = event.target.value;
        if (selectedPath) {
            navigate(selectedPath);
        }
    };

    return (
        <div className=''>
            <div className='flex flex-col h-full bg-sky-950 rounded-3xl'>
                <Navbar />
                <div className="flex flex-col pl-10 bg-white rounded-b-3xl">
                    <div className="flex flex-row pt-8 items-start">
                        <img src={BankIcon} className='h-40' alt="Bank Logo"/>
                        <div className='pl-16 flex gap-10 h-full'>
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
                    </div>
                    <div className="flex flex-row pt-32 pl-60 justify-between">
                        <div className="flex flex-col w-1/4 items-start gap-14">
                            <h2 className='text-5xl font-bold'>Живей без такси, безплатно откриване и поддръжка на сметки, неограничени безплатни преводи</h2>
                            <button className='bg-sky-950 rounded-lg h-14 w-80 text-white text-3xl'>Започнете сега!</button>
                        </div>
                        <img src={HappyClient} className='pr-80 pb-24' alt="Happy Client"/>
                    </div>
                </div>

                <div className='flex flex-col pl-60 pb-32'>
                    <h1 className='text-gray-100 text-5xl pt-14 pl-20'>Нашите услуги:</h1>
                    <div className='flex pt-20 pl-20 gap-96'>
                        <div className='flex items-start w-1/3'>
                            <img src={OnlineBanking} alt="Online Banking"/>
                            <div className='flex flex-col text-gray-100 pl-6'>
                                <h2 className='text-3xl font-bold'>Онлайн Банкиране</h2>
                                <h3 className='text-2xl pt-6'>Позволява ви да управлявате финансите си отвсякъде и по всяко време</h3>
                            </div>
                        </div>
                        <div className='flex items-start w-1/3'>
                            <img src={TransferServices} alt="Transfer Services"/>
                            <div className='flex flex-col text-gray-100 pl-6 w-full'>
                                <h2 className='text-3xl font-bold'>Трансферни услуги</h2>
                                <h3 className='text-2xl pt-6'>Лесно прехвърляне на средства между различни акаунти или към други лица.</h3>
                            </div>
                        </div>
                    </div>

                    <div className='flex pt-20 pl-20 gap-96'>
                        <div className='flex items-start w-1/3'>
                            <img src={OnlineLoans} alt="Online Loans"/>
                            <div className='flex flex-col text-gray-100 pl-6'>
                                <h2 className='text-3xl font-bold'>Онлайн Банкиране</h2>
                                <h3 className='text-2xl pt-6'>Позволява ви да управлявате финансите си отвсякъде и по всяко време</h3>
                            </div>
                        </div>
                        <div className='flex items-start w-1/3'>
                            <img src={DepositServices} alt="Deposit Services"/>
                            <div className='flex flex-col text-gray-100 pl-6 w-full'>
                                <h2 className='text-3xl font-bold'>Услуги за депозити</h2>
                                <h3 className='text-2xl pt-6'>Депозирайте чекове чрез мобилното си устройство или в банкомат.</h3>
                            </div>
                        </div>
                    </div>

                    <div className='flex pt-20 pl-20 gap-96'>
                        <div className='flex items-start w-1/3'>
                            <img src={Mortgages} alt="Mortgages"/>
                            <div className='flex flex-col text-gray-100 pl-6'>
                                <h2 className='text-3xl font-bold'>Онлайн Банкиране</h2>
                                <h3 className='text-2xl pt-6'>Позволява ви да управлявате финансите си отвсякъде и по всяко време</h3>
                            </div>
                        </div>
                        <div className='flex items-start w-1/3'>
                            <img src={AccountManagement} alt="Account Management"/>
                            <div className='flex flex-col text-gray-100 pl-6 w-full'>
                                <h2 className='text-3xl font-bold'>Услуги за депозити</h2>
                                <h3 className='text-2xl pt-6'>Депозирайте чекове чрез мобилното си устройство или в банкомат.</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default MainPage;
