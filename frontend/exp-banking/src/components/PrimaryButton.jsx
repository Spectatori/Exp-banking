import React from 'react'

const PrimaryButton = ({ label, className='' }) => {
    return (
        <button className={`bg-dark-blue transition-shadow duration-300 hover:shadow-md hover:shadow-gray-400 rounded-md h-10 w-48 text-white font-bold ${className}`}>
            {label}
        </button>
    );
}

export default PrimaryButton

