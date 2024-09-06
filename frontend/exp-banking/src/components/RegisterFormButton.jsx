import React from 'react';

const RegisterFormButton = ({ label, onClick, type = 'button' }) => {
    return (
        <button className="mt-6 bg-lime-600 rounded-md h-12 w-80 text-white font-bold text-xl " type={type} onClick={onClick}>
            {label}
        </button>
    );
};

export default RegisterFormButton;