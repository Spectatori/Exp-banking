// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/logo_header.svg';

const Footer = () => {
    return (
        <footer className="flex flex-row bg-white w-full h-36 flex-shrink-0 gap-10 max-xl:flex-col max-xl:gap-0 max-xl:w-full  ">
            <img src={logo} alt="logo" className="h-32 pt-5 px-10 pr-12" />
            <div className='max-xl:pl-2 flex gap-10'>
                <div className="flex flex-col pt-5 ">
                    <div className="font-mono text-gray-400 text-sm">
                        <p className="text-xl text-gray-500">Полезни Връзки</p>
                        <p className='cursor-pointer hover:text-blue-600'>Валутна информация</p>
                        <p className='cursor-pointer hover:text-blue-600'>Документи и архив</p>
                        <p className='cursor-pointer hover:text-blue-600'>Обратна връзка</p>
                        <p className='cursor-pointer hover:text-blue-600'>Често задавани въпроси</p>
                    </div>
                </div>
                <div className="flex flex-col pt-5 max-xl:pl-0">
                    <div className="font-mono text-gray-400 text-sm">
                        <p className="text-xl text-gray-500">За нас</p>
                        <p className='cursor-pointer hover:text-blue-600'>За Банка Exp</p>
                        <p className='cursor-pointer hover:text-blue-600'>Кариери</p>
                        <p className='cursor-pointer hover:text-blue-600'>Медиен Център</p>
                        <p className='cursor-pointer hover:text-blue-600'>Правила и условия за ползване</p>
                    </div>
                </div>
                <div className="flex flex-col pt-5 pl-10 max-xl:pl-0">
                    <div className="font-mono text-gray-400 text-sm">
                        <p className="text-xl text-gray-500">Контакти</p>
                        <p>Понеделник – Петък</p>
                        <p>08-19</p>
                        <p>+359 123451234</p>
                        <p>test@gmail.com</p>
                    </div>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;
