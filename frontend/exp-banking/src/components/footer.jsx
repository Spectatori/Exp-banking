import React from 'react';
import logo from '../assets/logo-black.svg';

const Footer = () => {
    return (
        <footer className="flex flex-row footer bg-registerBackgroundColor w-screen absolute bottom-0 h-36">
            <img src={logo} alt="logo"/>
            <div className="flex flex-col pl-40">
                <div className="font-mono text-gray-400 w-56 text-start pt-1 text-sm">
                    <p className="pt-3 text-xl text-gray-500">Полезни Връзки</p>
                    <p className="pt-1.5">Валутна информация</p>
                    <p>Документи и архив</p>
                    <p>Обратна връзка</p>
                    <p>Често задавани въпроси</p>
                </div>
            </div>
            <div className="flex flex-col pl-10">
                <div className="font-mono text-gray-400 w-56 text-start pt-1 text-sm">
                    <p className="pt-3 text-xl text-gray-500">За нас</p>
                    <p className="pt-1.5">За Банка Exp</p>
                    <p>Кариери</p>
                    <p>Медиен Център</p>
                    <p>Правила и условия за ползване</p>
                </div>
            </div>
            <div className="flex flex-col pl-10">
                <div className="font-mono text-gray-400 w-56 text-start pt-1 text-sm">
                    <p className="pt-3 text-xl text-gray-500">Контакти</p>
                    <p className="pt-1.5">Понеделник – Петък</p>
                    <p>08-19</p>
                    <p>+359 123451234</p>
                    <p>test@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
