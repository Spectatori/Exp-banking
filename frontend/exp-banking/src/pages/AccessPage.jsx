import React from 'react';
import Footer from '../components/Footer.jsx';
import background from '../assets/piggy-background.jpg';
import RegisterForm from "../components/RegisterForm.jsx";

const AccessPage = () => {

    return (
        <div className="flex flex-col h-screen">
            <header className="bg-black h-20 flex-shrink-0">
                <div className="text-white text-center py-6">
                    heyo
                </div>
            </header>

            <div
                className="relative flex-grow bg-cover bg-bottom flex justify-center items-center"
                style={{
                    backgroundImage: `url(${background})`,
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
                }}
            >

                <div className="absolute inset-0 backdrop-blur-sm"></div>

                <RegisterForm/>
            </div>
            <Footer/>
        </div>
    );
};

export default AccessPage;
