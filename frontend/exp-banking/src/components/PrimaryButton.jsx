import React from 'react'

const PrimaryButton = ({ label }) => {
    return (
        <button className="mt-6 bg-dark-blue transition-shadow duration-300 hover:shadow-md hover:shadow-gray-400 rounded-md h-10 w-48 text-white font-bold">
            {label}
        </button>
    );
}

export default PrimaryButton

