import React from 'react'
import { Link, } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas/loginSchema';
import InputField from './AuthInputField.jsx'
import Button from './AuthButton.jsx'
import { useCookies } from 'react-cookie'
import { loginUser } from '../../api/authService.jsx';
import { useNavigate } from 'react-router-dom';
import { useToastNotification } from '../../hooks/useToastNotification.js';

const LoginForm = () => {
    const { showErrorToast } = useToastNotification();

    const [cookies, setCookie] = useCookies(['token']);
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        try {
            const token = await loginUser(values);
            setCookie('UserToken', token, { path: '/' });
            console.log('Login successful!');
            navigate('/account-overview');
        } catch (error) {
            console.error('Login failed:', error);
            showErrorToast(
                <div className='text-sm'>
                    <p className='font-semibold'>Неуспешно влизане</p>
                    <p>Моля, проверете данните и опитайте отново.</p>
                </div>
            );
        }
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
        <div className='flex flex-col items-center gap-10'>
            <h1 className="text-5xl font-bold text-white">Вход</h1>
            <form
                className=" relative flex flex-col justify-center items-center h-fit bg-white bg-opacity-70 rounded-2xl py-7 px-5 max-xl:px-4"
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col gap-5'>
                    <div className='space-y-2'>
                        <label>Имейл</label>
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

                    <div className='space-y-2'>
                        <label>Парола</label>
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
                </div>

                <Button label="Вход" type="submit" />


                <p className='mt-5'>
                    Нямате акаунт? Регистрирайте се
                    <Link to='/auth/register' className='m-1 font-bold text-dark-blue'>тук</Link>
                    !
                </p>
            </form>
        </div>
    )
}

export default LoginForm
