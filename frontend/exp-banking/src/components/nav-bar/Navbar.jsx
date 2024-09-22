import React from "react";
import { Link } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
    
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };

    return (
        <nav className="pl-6 flex bg-ghost-white pt-4 max-xl:pl-0 max-xl:gap-6 max-xl:flex-col">
            <div className="flex max-xl:w-full max-xl:justify-center">
                <img src="/logo.png" className="w-20" alt="" />
            </div>
            <nav className='flex w-full flex-col gap-5 items-center'>
                <button 
                    className='md:hidden'
                    onClick={toggleMenu}
                >
                    <GiHamburgerMenu  size={24} />
                </button>

                <ul
                    className={`max-xl:justify-center z-50 rounded-md w-72 text-blue-whale space-y-3 p-5 font-semibold
                        bg-white border border-gray-300 shadow-md md:w-full md:shadow-none md:static md:space-y-0 md:flex 
                        md:items-center md:gap-8 md:text-dark-blue md:text-sm  md:bg-transparent md:border-none 
                        ${isMenuOpen ? 'block' : 'hidden'}`}
                >
                    <CustomNavLink url='/za-teb' title='За теб'/>
                    <CustomNavLink url='/za-tvoya-biznes' title='За твоя бизнес'/>
                    <CustomNavLink url='/za-exp-bank' title='За Exp Bank'/>
                </ul>
            </nav>
        </nav>
    );
};

export default Navbar;
