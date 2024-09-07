import React from 'react'
import { useState } from 'react';
import InputField from '../InputField';
import Button from '../Button';
import { Link, useFormAction } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas/loginSchema';

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
            className="relative flex flex-col justify-center items-center bg-white bg-opacity-40 rounded-2xl py-5 px-10 h-fit"
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
                error={errors.email}
                touched={touched.email}
            />
            <InputField
                label="Парола"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
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
