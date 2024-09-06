import React from 'react';

const InputField = ({ label, type, name, value, onChange }) => {
    return (
        <div className="input-field pt-8 ">
            <input className="rounded-lg pl-4 h-10 w-80 border-lime-600 border text-sm"
                placeholder={label}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
};

export default InputField;