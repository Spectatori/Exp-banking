import React from 'react'
import { useFormik } from 'formik';
import { newPasswordSchema } from '../../schemas/newPasswordSchema';
import { useUserStore } from '../../stores/AuthStore';
import { onSave } from '../../api/userService';
import bcrypt from 'bcryptjs'

const PasswordChangeSection = () => {

    const user = useUserStore((state) => state.user);
    const onSubmit = () => {
        console.log(user)
        const hashedPassword = bcrypt.hashSync(values.oldPassword, 10);
        const isMatch = bcrypt.compareSync(values.oldPassword, user.password);
        if (isMatch) {
            const password = values.newPassword;
            console.log(password);
            onSave(user, password);
            } else {
                console.log('Password does not match');
            }
        console.log(values);
    }

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        },
        validationSchema: newPasswordSchema,
        onSubmit
    }) 

    return (
        <section>
            <div className='flex flex-col h-full gap-5'>
                <h1 className='text-xl font-semibold text-blue-whale mt-10'>Смяна на паролата</h1>
                <form
                    action=""
                    className='flex flex-col mt-3 items-center'
                    onSubmit={handleSubmit}
                >
                    <div className='flex flex-col gap-3 md:flex-row md:gap-20'>
                        <div className='flex flex-col'>
                            <label
                                htmlFor="oldPassword"
                            > Стара парола
                            </label>
                            <input
                                id='oldPassword'
                                name='oldPassword'
                                type="password"
                                className={`pl-2 h-7 border rounded-md focus:ring-2 outline-none ${errors.oldPassword
                                    ? 'border-red-500 focus:ring-red-200'
                                    : 'border-blue-whale focus:border-blue-whale'}
                                `}
                                value={values.oldPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            {errors.oldPassword && touched.oldPassword && (
                                <div className='text-sm font-medium text-wrap text-red-500'>
                                    {errors.oldPassword}
                                </div>
                            )}
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="newPassword">Нова парола</label>
                            <input
                                id='newPassword'
                                name='newPassword'
                                type="password"
                                className={`pl-2 h-7 border rounded-md focus:ring-2 outline-none ${errors.newPassword
                                    ? 'border-red-500 focus:ring-red-200'
                                    : 'border-blue-whale focus:border-blue-whale'}
                                `}
                                value={values.newPassword}
                                onChange={handleChange}
                            />

                            {errors.newPassword && touched.newPassword && (
                                <div className='text-sm font-medium text-wrap text-red-500'>
                                    {errors.newPassword}
                                </div>
                            )}
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="confirmNewPassword">Повторете новата парола</label>
                            <input
                                id='confirmNewPassword'
                                name='confirmNewPassword'
                                type="password"
                                className={`pl-2 h-7 border rounded-md focus:ring-2 outline-none ${errors.newPassword
                                    ? 'border-red-500 focus:ring-red-200'
                                    : 'border-blue-whale focus:border-blue-whale'}
                                `}
                                value={values.confirmNewPassword}
                                onChange={handleChange}
                            />

                            {errors.confirmNewPassword && touched.confirmNewPassword && (
                                <div className='text-sm font-medium text-wrap text-red-500'>
                                    {errors.confirmNewPassword}
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        type='subimt'
                        className='mt-4 bg-dark-blue transition-shadow duration-300 hover:shadow-md hover:shadow-gray-400 rounded-md h-10 w-48 text-white font-bold'
                    >
                        Промени парола
                    </button>
                </form>

                <p className='text-sm text-gray-500 text-wrap text-center mx-3'>Паролата трябва да съдържа поне 8 символа, от които поне една малка буква,
                    една главна буква, една цифра и един специален символ.
                </p>
            </div>
        </section>
    )
}

export default PasswordChangeSection
