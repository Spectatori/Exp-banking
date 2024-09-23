import React, { useState } from 'react';
import CustomNavLink from '../CustomNavLink';
import { GiHamburgerMenu } from "react-icons/gi";

const AuthNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='relative flex pt-5 justify-end pr-4'>
            <button 
                className='md:hidden absolute top-0'
                onClick={toggleMenu}
            >
                <GiHamburgerMenu size={24} />
            </button>

            <ul
                className={`pl-10 z-50 absolute rounded-md w-72 text-blue-whale space-y-3 p-5 font-semibold
                     bg-white border border-gray-300 shadow-md md:w-full md:shadow-none md:static md:space-y-0 md:flex 
                     md:items-center md:gap-8 md:text-dark-blue md:text-sm  md:bg-transparent md:border-none 
                     ${isMenuOpen ? 'block' : 'hidden'}`}
            >
                <CustomNavLink url='/account-overview' title='НАЧАЛО' />
                <CustomNavLink url='/profile' title='ДВИЖЕНИЯ ПО СМЕТКИ' />
                <CustomNavLink url='/payments' title='ПЛАЩАНИЯ' />
                <CustomNavLink url='/loans' title='КРЕДИТИ' />
            </ul>
        </nav>
    );
};

export default AuthNavbar;


