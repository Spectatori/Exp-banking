import React from "react";
import CustomNavLink from "./CustomNavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useUserStore } from "../../stores/AuthStore";
import AuthNavbar from "./authenticated/AuthNavbar";
import InnerHeader from "./authenticated/InnerHeader";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user } = useUserStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        user
            ? (
                <nav>
                    <InnerHeader />
                    <AuthNavbar />
                </nav>
            )
            : (
                <nav className="gap-10 pl-6 flex bg-ghost-white py-4 max-xl:pl-0 max-xl:gap-6 max-xl:flex-col">
                    <Link
                        to='/'
                    >
                        <div className="flex max-xl:w-full max-xl:justify-center">
                            <img src="/logo.png" className="w-20" alt="" />
                        </div>
                    </Link>
                    <nav className='flex w-full flex-col gap-5 items-center relative'>
                        <button
                            className='md:hidden'
                            onClick={toggleMenu}
                        >
                            <GiHamburgerMenu size={24} />
                        </button>

                        <ul
                            className={`flex flex-col md:flex-row justify-between max-xl:justify-center z-50 rounded-md w-72 text-blue-whale space-y-3 p-5 font-semibold
                    bg-white border border-gray-300 shadow-md md:w-full md:shadow-none md:static md:space-y-0 md:flex 
                    md:items-center md:gap-8 md:text-dark-blue md:text-lg md:bg-transparent md:border-none 
                    ${isMenuOpen ? 'block absolute -bottom-60' : 'hidden'}`}
                        >
                            <div className="flex flex-col md:flex-row md:gap-10 gap-3">
                                <CustomNavLink url='/za-teb' title='За теб' onClick={() => setIsMenuOpen(false)}/>
                                <CustomNavLink url='/za-tvoya-biznes' title='За твоя бизнес' onClick={() => setIsMenuOpen(false)}/>
                                <CustomNavLink url='/za-exp-bank' title='За Exp Bank' onClick={() => setIsMenuOpen(false)}/>
                                <CustomNavLink url='/loans/consumer-loan' title='Кредити' onClick={() => setIsMenuOpen(false)}/>
                            </div>

                            <Link
                                to='/auth/login'
                                className="bg-dark-blue rounded-xl px-5 py-3 text-white w-fit self-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Вход
                            </Link>
                        </ul>
                    </nav>
                </nav>
            )
    );
};

export default Navbar;
