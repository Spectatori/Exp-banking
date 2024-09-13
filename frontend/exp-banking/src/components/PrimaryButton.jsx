import React from 'react'

const PrimaryButton = ({ label, onClick, type = 'button', className='' }) => {
    return (
        <button
            className={`bg-dark-blue transition-shadow duration-300 hover:shadow-md hover:shadow-gray-400 rounded-md h-10 w-48 text-white font-bold ${className}`}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default PrimaryButton

