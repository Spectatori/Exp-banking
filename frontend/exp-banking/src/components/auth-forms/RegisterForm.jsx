import React from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerSchema } from '../../schemas/registerSchema.js';
import InputField from './AuthInputField.jsx'
import Button from './AuthButton.jsx'
import { bulgarianCities } from '../../data/bulgarianCities.jsx';
import { registerUser } from '../../api/authService.jsx';
import { employmentType } from '../../data/employmentType.jsx';
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import { useToastNotification } from '../../hooks/useToastNotification.js';

const RegisterForm = () => {
    const { showErrorToast } = useToastNotification();

    const [cookies, setCookie] = useCookies(['token']);  // Initialize cookies
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        try {
            const { cityName, postcode, street, ...rest } = values;
            const restructuredValues = {
                ...rest,
                address: {
                    cityName,
                    postcode,
                    street
                }
            };

            const token = await registerUser(restructuredValues);
            setCookie('UserToken', token, { path: '/' });
            console.log('Registration successful!');
            navigate('/profile');
        } catch (error) {
            console.error('Registration failed:', error);
            showErrorToast(
                <div className='text-sm'>
                    <p className='font-semibold'>Неуспешна регистрация</p>
                </div>
            );
        }

    };


    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            firstname: '',
            secondname: '',
            lastname: '',
            password: '',
            dateOfBirth: '',
            phoneNumber: '',
            email: '',
            egn: '',
            expDate: '',
            idCardNumber: '',
            postcode: '',
            cityName: '',
            street: '',
            employmentType: '',
        },
        validationSchema: registerSchema,
        onSubmit
    })

    return (
        <form
            className="relative flex flex-col  justify-center items-center w-96 bg-opacity-40 rounded-2xl my-8 py-5 px-10 h-fit max-h-full max-xl:px-3 max-xl:w-80"
            onSubmit={handleSubmit}>
            <h2 className="text-5xl font-bold text-white mb-5">Регистрация</h2>
            {/*<p className='text-white text-center mt-2'>Моля въвеждайте данните на кирилица </p>*/}
            <div className='flex gap-20 max-xl:flex-col max-xl:gap-0'>
                <div className=" text-start relative gap-3 flex flex-col gap-1 justify-center items-center w-96 bg-white bg-opacity-70 rounded-2xl my-8 py-10 px-10 h-fit max-h-full max-xl:px-3 max-xl:w-80">
                    <div className='flex flex-col space-y-2'>
                        <p>Име</p>
                        <InputField
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
                    <div className='flex flex-col space-y-2'>
                        <p>Презиме</p>
                        <InputField
                            type="text"
                            name="secondname"
                            value={values.secondname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p>Фамилия</p>
                        <InputField
                            type="text"
                            name="lastname"
                            value={values.lastname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p>Парола</p>
                        <InputField
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p>Дата на раждане</p>
                        <InputField
                            type="date"
                            name="dateOfBirth"
                            value={values.dateOfBirth}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p>Телефонен номер</p>
                        <InputField
                            type="text"
                            name="phoneNumber"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <div className='flex flex-col gap-3 w-full px-1'>
                        <div className='flex flex-col gap-2'>
                        <label>Трудова заетост</label>
                        <select
                            name="employmentType"
                            value={values.employmentType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='border p-2 rounded-md'
                        >
                            <option value="">Изберете трудова заетост</option>
                            {employmentType.map((type) => (
                            <option key={type.value} value={type.value}>
                                {type.label}
                            </option>
                            ))}
                        </select>
                        </div>
                    </div>
                </div>
                <div className=" relative flex flex-col gap-3 justify-center items-center w-96 bg-white bg-opacity-70 rounded-2xl my-8 py-10 px-10 h-fit max-h-full max-xl:px-3 max-xl:w-80">
                    <div className='flex flex-col space-y-2'>
                        <p>Имейл</p>
                        <InputField
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p>ЕГН</p>
                        <InputField
                            type="text"
                            name="egn"
                            value={values.egn}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p>Валидност на лична карта</p>
                        <InputField
                            type="date"
                            name="expDate"
                            value={values.expDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p>Номер на лична карта</p>
                        <InputField
                            type="number"
                            name="idCardNumber"
                            value={values.idCardNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p>Пощенски код</p>
                        <InputField
                            type="text"
                            name="postcode"
                            value={values.postcode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p>Град</p>
                        <InputField
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
                    <div className='flex flex-col space-y-2'>
                        <p>Улица</p>
                        <InputField
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

            <div className=" w-full relative flex flex-col justify-center items-center h-fit bg-white bg-opacity-70 rounded-2xl py-1 px-1 max-xl:px-4">
                <Button label="Регистрация" type="submit" />
                <p className='my-3'>
                    Вече имате акаунт? Влезте
                    <Link to='/auth/login' className='m-1 text-dark-blue font-bold'>тук!</Link>
                </p>
            </div>
        </form>
    )
}

export default RegisterForm
