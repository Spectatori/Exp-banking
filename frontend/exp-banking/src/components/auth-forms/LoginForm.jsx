import React from 'react'
import { useState } from 'react';
import { Link, useFormAction } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas/loginSchema';
import InputField from './AuthInputField.jsx'
import Button from './AuthButton.jsx'

const LoginForm = () => {
    const onSubmit = () => {
        //   
    }

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit
    })

    return (
        <form 
            className=" relative flex flex-col justify-center items-center bg-white bg-opacity-40 rounded-2xl py-5 px-10 max-xl:px-4"
            onSubmit={handleSubmit}
        >
            <h1 className="text-4xl">Вход</h1>
            <InputField
                label="Имейл"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <InputField
                label="Парола"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <Button label="Вход" type="submit"/>
            <p className='mt-3 text-sm'>
                Нямате акаунт? Регистрирайте се 
                <Link to='/auth/register' className='m-1 text-lime-600'>тук</Link>
                !
            </p>
        </form>
    )
}

export default LoginForm
