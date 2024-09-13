import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerSchema } from '../../schemas/registerSchema.js';
import InputField from './AuthInputField.jsx'
import Button from './AuthButton.jsx'

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
            egn:'',
            expDate:'',
            iDNum:'',
        },
        validationSchema: registerSchema,
        onSubmit
    })

    return (
        <form
            className="relative flex flex-col justify-center items-center w-96 bg-white bg-opacity-70 rounded-2xl my-8 py-5 px-10 h-fit max-h-full max-xl:px-3 max-xl:w-80"
            onSubmit={handleSubmit}>
            <h2 className="text-4xl">Регистрация</h2>
            <p>Моля въвеждайте данните на кирилица </p>

            <InputField
                label="Име"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <InputField
                label="Презиме"
                type="text"
                name="middleName"
                value={values.middleName}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <InputField
                label="Фамилия"
                type="text"
                name="lastName"
                value={values.lastName}
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
            <InputField
                label="Повтори Парола"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <InputField
                label="Дата на раждане"
                type="date"
                name="dateOfBirth"
                value={values.dateOfBirth}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <InputField
                label="Мобилен Номер"
                type="text"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
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
                label="ЕГН"
                type="text"
                name="egn"
                value={values.egn}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <InputField
                label="Валидност на лична карта"
                type="month"
                name="expDate"
                value={values.expDate}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />
            <InputField
                label="Номер на лична карта"
                type="number"
                name="iDNum"
                value={values.iDNum}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
            />

            <Button label="Регистрация" type="submit" />

            <p className='mt-3 text-sm'>
                Вече имате акаунт? Влезте
                <Link to='/auth/login' className='m-1 text-dark-blue font-semibold'>тук</Link>
                .
            </p>
        </form>
    )
}

export default RegisterForm
