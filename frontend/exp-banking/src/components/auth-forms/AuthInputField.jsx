import React from 'react';

const AuthInputField = ({ label, type, name, value, onChange, onBlur, errors, touched }) => {
    const error = errors[name];
    
    return (
        <div className="relative input-field pt-8 ">
            <input className={`rounded-lg pl-4 h-10 w-80 border text-sm outline-none ${error && touched[name]
                ? 'border border-red-500 ring-1 ring-red-500'
                : 'border-blue-whale focus:ring-1 focus:ring-blue-whale'
                }`}
                placeholder={label}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && touched[name] && (
                <div className='text-sm font-medium text-wrap text-red-600'>
                    {error}
                </div>
            )}
        </div>
    );
};

export default AuthInputField;