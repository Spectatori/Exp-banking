import React from 'react';

const InputField = ({ label, type, name, value, onChange, onBlur, error, touched }) => {
    return (
        <div className="input-field pt-8 ">
            <input className={`rounded-lg pl-4 h-10 w-80 border text-sm outline-none ${error
                    ? 'border-2 border-red-500 ring-red-500'
                    : 'border-lime-600 focus:ring-1 focus:ring-lime-600'
                }`}
                placeholder={label}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
             { error && touched && (
                <div className='text-xs text-red-500 font-medium'>
                    {error}
                </div>
            )}
        </div>
    );
};

export default InputField;