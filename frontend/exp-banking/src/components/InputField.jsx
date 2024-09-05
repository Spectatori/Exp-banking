import React from 'react';

const InputField = ({ label, type, value, onChange }) => {
    return (
        <div className="input-field pt-8 ">
            <input className="rounded-lg pl-4 h-10 w-80 border-lime-600 border "
                placeholder={label}
                type={type}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
};

export default InputField;