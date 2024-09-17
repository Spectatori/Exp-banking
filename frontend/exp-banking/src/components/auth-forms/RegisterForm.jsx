import React from 'react'
import  {Link}  from 'react-router-dom';
import  {useFormik}  from 'formik';
import  {registerSchema}  from '../../schemas/registerSchema.js';
import InputField from './AuthInputField.jsx'
import Button from './AuthButton.jsx'
import  {bulgarianCities}  from '../../data/bulgarianCities.jsx';
import  {registerUser}  from '../../api/authService.jsx';
import  {employmentType}  from '../../data/employmentType.jsx';
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom';
const RegisterForm = () => {
    const [cookies, setCookie] = useCookies(['token']);  // Initialize cookies
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        try {
            const token = await registerUser(values);
            setCookie('UserToken', token, { path: '/' });  // Set the token in cookies
            console.log('Registration successful!');
            navigate('/profile');
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
        validationSchema: registerSchema,
        onSubmit
    })

    return (
        <form
            className="relative flex flex-col  justify-center items-center w-96 bg-opacity-40 rounded-2xl my-8 py-5 px-10 h-fit max-h-full max-xl:px-3 max-xl:w-80"
            onSubmit={handleSubmit}>
            <h2 className="text-4xl text-white">Регистрация</h2>
            <p className='text-white'>Моля въвеждайте данните на кирилица </p>
            <div className='flex gap-20 max-xl:flex-col max-xl:gap-0'>
                <div className=" text-start relative flex flex-col gap-1 justify-center items-center w-96 bg-white bg-opacity-40 rounded-2xl my-8 py-10 px-10 h-fit max-h-full max-xl:px-3 max-xl:w-80">
                    <div className='flex flex-col gap-3'>
                        <p>Име</p>
                        <InputField
                            label="Име"
                            type="text"
                            name="firstname"
                            id='firstName'
                            value={values.firstname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Фамилия</p>
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
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Парола</p>
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
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Дата на раждане</p>
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
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Телефонен номер</p>
                        <InputField
                        label="Телефонен Номер"
                        type="text"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                    />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Вид заетост</p>
                        <InputField
                        label="Вид заетост"
                        type="select"
                        name="employmentType"
                        value={values.employmentType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        options={employmentType}
                    />
                    </div>
                    
                </div>
                <div className=" relative flex flex-col gap-1 justify-center items-center w-96 bg-white bg-opacity-40 rounded-2xl my-8 py-10 px-10 h-fit max-h-full max-xl:px-3 max-xl:w-80">
                    <div className='flex flex-col gap-3'>
                        <p>Имейл</p>
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
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>ЕГН</p>
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
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Валидност на лична карта</p>
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
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Номер на лична карта</p>
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
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Пощенски код</p>
                        <InputField
                        label="Пощенски код"
                        type="text"
                        name="postcode"
                        value={values.postcode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                    />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Град</p>
                        <InputField
                        label="Град"
                        type="select"
                        name="cityName"
                        value={values.cityName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        options={bulgarianCities}
                    />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Улица</p>
                        <InputField
                        label="Улица"   
                        type="text"
                        name="street"
                        value={values.street}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                    />
                    </div>
                </div>
            </div>
            
            <Button label="Регистрация"  type="submit" />
            <p className='mt-3 text-sm text-white'>
                Вече имате акаунт? Влезте
                <Link to='/auth/login' className='m-1 text-sky-500'>тук!</Link>
            </p>
        </form>
    )
}

export default RegisterForm
