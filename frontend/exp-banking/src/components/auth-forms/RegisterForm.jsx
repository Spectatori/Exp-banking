import React, { useState } from 'react'
import InputField from "../InputField.jsx";
import Button from "../Button.jsx";
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        phoneNumber: '',
        email: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registering user:', formData);
    };

    return (
        <form
            className="relative flex flex-col justify-center items-center bg-white bg-opacity-40 rounded-2xl my-8 py-5 px-10 h-fit"
            onSubmit={handleSubmit}>
            <h2 className="text-4xl">Регистрация</h2>

            <InputField
                label="Име"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
            />
            <InputField
                label="Презиме"
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
            />
            <InputField
                label="Парола"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
            />
            <InputField
                label="Повтори Парола"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
            />
            <InputField
                label="Дата на раждане"
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
            />
            <InputField
                label="Мобилен Номер"
                type="number"
                name="phoneNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
            />
            <InputField
                label="Имейл"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />

            <Button label="Регистрация" type="submit" />

            <p className='mt-3 text-sm'>
                Вече имате акаунт? Влезте 
                <Link to='/auth/login' className='m-1 text-lime-600'>тук</Link>
                .
            </p>
        </form>
    )
}

export default RegisterForm
