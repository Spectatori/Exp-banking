import React from 'react'
import InnerHeader from '../components/nav-bar/authenticated/InnerHeader'
import AuthNavbar from '../components/nav-bar/authenticated/AuthNavbar'
import ShadowBox from '../components/ShadowBox'
import { useFormik } from 'formik';
import { transferSchema } from '../schemas/transferSchema';
import { useFetchUser } from '../hooks/useFetchUser';

const NewTransferPage = () => {
    useFetchUser();
    const onSubmit = () => {
        console.log(values);
    }

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            receiverIban: '',
            amount: ''
        },
        validationSchema: transferSchema,
        onSubmit
    })

    return (
        <div>
            <header>
                <InnerHeader />
                <AuthNavbar />
            </header>

            <div className='mx-6 mb-5 mt-12 flex flex-col'>
                <h2 className='text-2xl font-semibold text-blue-whale'>Левов превод</h2>
                <form
                    action=""
                    className='flex flex-col mt-5 gap-5 w-fit self-center'
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label
                            htmlFor=""
                            className=''
                        > От сметка
                        </label>
                        <ShadowBox className='h-fit w-fit flex-col  '>
                            <div className='flex flex-col gap-5 md:flex-row md:gap-10'>

                                <div className='flex flex-col flex-1'>
                                    <p className='font-semibold'>Разплащателна сметка - BGN</p>
                                    <p className='text-sm'>BG54EXP565660603788</p>
                                </div>

                                <div className='flex flex-col text-sm'>
                                    <p className='text-kelly-green font-semibold text-xl md:self-end'>1050</p>
                                    <p className='text-gray-500'>наличност <span className='text-kelly-green'>BGN</span></p>
                                </div>
                            </div>
                        </ShadowBox>
                    </div>

                    <div className='flex flex-col max-w-full gap-5'>
                        <div className='flex flex-col gap-2'>
                            <label
                                htmlFor=""
                            > Име на наредител
                            </label>
                            <p className='font-semibold'>ИМЕ ПРЕЗИМЕ ФАМИЛИЯ</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label
                                htmlFor=""
                            > Към
                            </label>
                            <input
                                id='receiverIban'
                                name='receiverIban'
                                type="text"
                                placeholder='IBAN на получателя'

                                className={`pl-2 h-9 border rounded-md focus:ring-2 outline-none ${errors.receiverIban
                                    ? 'border-red-500 focus:ring-red-200'
                                    : 'border-blue-whale focus:border-blue-whale'}
                                `}
                                value={values.oldPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            {errors.receiverIban && touched.receiverIban && (
                                <div className='text-sm font-medium text-wrap text-red-500'>
                                    {errors.receiverIban}
                                </div>
                            )}
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label
                                htmlFor=""
                            > Сума
                            </label>
                            <input
                                id='amount'
                                name='amount'
                                type="number"
                                placeholder='00.00'
                                className={`pl-2 h-9 border rounded-md focus:ring-2 outline-none border-blue-whale`}
                                value={values.oldPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>

                    </div>

                    <button
                        type='subimt'
                        className='self-center mt-4 bg-kelly-green transition-shadow duration-300 hover:shadow-md hover:shadow-gray-400 rounded-md h-10 w-48 text-white font-bold'
                    >
                        Превод
                    </button>
                </form>

            </div>
        </div>
    )
}

export default NewTransferPage
