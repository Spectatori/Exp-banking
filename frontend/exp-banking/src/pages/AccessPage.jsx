import React from 'react';
import Footer from '../components/Footer.jsx';
import background from '../assets/piggy_background_blue.png';
import RegisterForm from "../components/auth-forms/RegisterForm.jsx";
import LoginForm from '../components/auth-forms/LoginForm.jsx';
import Navbar from '../components/nav-bar/Navbar.jsx';
import { useLocation } from 'react-router-dom';

const AccessPage = () => {
    const location = useLocation();
    const isRegister = location.pathname === '/auth/register';

    return (
        <>
            <Navbar />
            <div className="flex flex-col h-screen">
                <div
                    className="relative flex-grow bg-cover bg-bottom flex justify-center items-center"
                    style={{
                        backgroundImage: `url(${background})`,           
                    }}
                >
                    {!isRegister ? <LoginForm /> : <RegisterForm />}
                </div> 
                <Footer />
            </div>
        </>
    );
};

export default AccessPage;
