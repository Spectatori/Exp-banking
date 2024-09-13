import React from 'react';

const InputField = ({ label, type, name, value, onChange, onBlur, errors, touched }) => {
    const error = errors[name];

    return (
        <div className="relative input-field pt-8 max-h-16  ">
            <input className={`max-xl:w-72 rounded-lg pl-4 h-10 w-80 border text-sm outline-none ${error && touched[name]
                ? 'border-2 border-red-700 ring-red-700'
                : 'border-lime-600 focus:ring-1 focus:ring-lime-600'
                }`}
                placeholder={label}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && touched[name] && (
                <div className='text-sm font-medium text-wrap text-red-700'>
                    {error}
                </div>
            )}
        </div>
    );
};

export default InputField;