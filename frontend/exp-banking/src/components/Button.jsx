import React from 'react';

const Button = ({ label, onClick, type = 'button' }) => {
    return (
        <button className="mt-6 bg-lime-600 transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400 rounded-md h-10 w-48 text-white font-bold" type={type} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;