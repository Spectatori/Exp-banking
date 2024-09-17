import React from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
// import { registerSchema } from '../../schemas/registerSchema.js';
import InputField from './AuthInputField.jsx'
import Button from './AuthButton.jsx'
import { bulgarianCities } from '../../data/bulgarianCities.jsx';
import { registerUser } from '../../api/authService.jsx';

const RegisterForm = () => {
    const onSubmit = async (values) => {
        try {
            await registerUser(values);
            console.log('Registration successful!');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };
    

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            firstname: '',
            // middleName: '',
            lastname: '',
            password: '',
            dateOfBirth: '',
            phoneNumber: '',
            email: '',
            egn:'',
            expDate:'',
            idCardNumber:'',
            address:{
                postcode:'',
                cityName:'',
                street:'',
            },
            employmentType:'',
        },
        // validationSchema: registerSchema,
        onSubmit
    })

    return (
        <form
            className="relative flex flex-col justify-center items-center w-96 bg-opacity-40 rounded-2xl my-8 py-5 px-10 h-fit max-h-full max-xl:px-3 max-xl:w-80"
            onSubmit={handleSubmit}>
            <h2 className="text-4xl text-white">Регистрация</h2>
            <p className='text-white'>Моля въвеждайте данните на кирилица </p>
            <div className='flex gap-20 max-xl:flex-col max-xl:gap-0'>
                <div className=" relative flex flex-col justify-center items-center w-96 bg-white bg-opacity-40 rounded-2xl my-8 py-10 px-10 h-fit max-h-full max-xl:px-3 max-xl:w-80">
                    <InputField
                        label="Име"
                        type="text"
                        name="firstname"
                        value={values.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                    />

                    <InputField
                        label="Фамилия"
                        type="text"
                        name="lastname"
                        value={values.lastname}
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
                        label="Вид заетост"
                        type="text"
                        name="employmentType"
                        value={values.employmentType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                    />
                </div>
                <div className=" relative flex flex-col justify-center items-center w-96 bg-white bg-opacity-40 rounded-2xl my-8 py-10 px-10 h-fit max-h-full max-xl:px-3 max-xl:w-80">
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
                        type="date"
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
                        name="idCardNumber"
                        value={values.idCardNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                    />
                    <InputField
                        label="Пощенски код"
                        type="text"
                        name="address.postcode"
                        value={values.address.postcode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                    />
                    <InputField
                        label="Град"
                        type="select"
                        name="address.cityName"
                        value={values.address.cityName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        options={bulgarianCities}
                    />
                    <InputField
                        label="Улица"
                        type="text"
                        name="address.street"
                        value={values.address.street}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                    />
                </div>
            </div>
            
            <Button label="Регистрация"  type="submit" />
            <p className='mt-3 text-sm text-white'>
                Вече имате акаунт? Влезте
                <Link to='/auth/login' className='m-1 text-green-400'>тук!</Link>
            </p>
        </form>
    )
}

export default RegisterForm
