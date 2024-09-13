import React, { useState } from 'react';
import CustomNavLink from '../CustomNavLink';
import { GiHamburgerMenu } from "react-icons/gi";

const AuthNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='relative'>
            <button 
                className='md:hidden absolute top-0 right-4 mt-3 mr-3'
                onClick={toggleMenu}
            >
                <GiHamburgerMenu size={24} />
            </button>

            <ul
                className={`z-50 absolute top-12 right-5 w-96 rounded-md text-blue-whale space-y-3 p-5 font-semibold bg-white border border-gray-300 shadow-md md:w-full md:shadow-none md:static md:space-y-0 md:flex md:items-center md:gap-8 md:text-dark-blue md:text-sm md:mt-5 md:ml-3 md:bg-transparent md:border-none ${isMenuOpen ? 'block' : 'hidden'}`}
            >
                <CustomNavLink url='/' title='НАЧАЛО' />
                <CustomNavLink url='/' title='СМЕТКИ И ДЕПОЗИТИ' />
                <CustomNavLink url='/' title='КАРТИ' />
                <CustomNavLink url='/' title='ПЛАЩАНИЯ' />
                <CustomNavLink url='/' title='КРЕДИТИ' />
            </ul>
        </nav>
    );
};

export default AuthNavbar;


