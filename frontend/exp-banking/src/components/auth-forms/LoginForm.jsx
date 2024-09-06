import React from 'react'
import { useState } from 'react';
import InputField from '../InputField';
import Button from '../Button';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();        
        //
    };

    return (
        <form 
            className="relative flex flex-col justify-center items-center bg-white bg-opacity-40 rounded-2xl py-5 px-10 h-fit"
            onSubmit={handleSubmit}
        >
            <h1 className="text-4xl">Вход</h1>
            <InputField
                label="Имейл"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />
            <InputField
                label="Парола"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
            />
            <Button label="Вход" type="submit" />
            <p className='mt-3 text-sm'>
                Нямате акаунт? Регистрирай се 
                <Link to='/auth/register' className='m-1 text-lime-600'>тук</Link>
                !
            </p>
        </form>
    )
}

export default LoginForm
