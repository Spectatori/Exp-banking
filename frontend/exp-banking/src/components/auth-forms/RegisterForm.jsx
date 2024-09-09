import React, { useState } from 'react'
import AuthButton from './AuthButton.jsx';
import AuthInputField from './AuthInputField.jsx';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerSchema } from '../../schemas/registerSchema.js';

const RegisterForm = () => {
    const onSubmit = () => {
        //   
    }

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            dateOfBirth: '',
            phoneNumber: '',
            email: '',
        },
        validationSchema: registerSchema,
        onSubmit
    })

    return (
        <form
            className="relative flex flex-col justify-center items-center w-96 bg-white bg-opacity-70 rounded-2xl my-8 py-5 px-10 h-fit"
            onSubmit={handleSubmit}>
            <h2 className="text-4xl text-blue-whale">Регистрация</h2>

            <AuthInputField
                label="Име"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <AuthInputField
                label="Презиме"
                type="text"
                name="middleName"
                value={values.middleName}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <AuthInputField
                label="Фамилия"
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <AuthInputField
                label="Парола"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <AuthInputField
                label="Повтори Парола"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <AuthInputField
                label="Дата на раждане"
                type="date"
                name="dateOfBirth"
                value={values.dateOfBirth}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <AuthInputField
                label="Мобилен Номер"
                type="text"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <AuthInputField
                label="Имейл"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />

            <AuthButton label="Регистрация" type="submit" />

            <p className='mt-3 text-sm'>
                Вече имате акаунт? Влезте
                <Link to='/auth/login' className='m-1 text-dark-blue'>тук</Link>
                .
            </p>
        </form>
    )
}

export default RegisterForm
