import React from 'react'
import InnerHeader from '../components/nav-bar/authenticated/InnerHeader'
import AuthNavbar from '../components/nav-bar/authenticated/AuthNavbar'
import userPfp from '../../src/assets/profile-page-images/user.png'
import PrimaryButton from '../components/PrimaryButton'
import ShadowBox from '../components/ShadowBox'

const ProfileDetailsPage = () => {
    return (
        <div>
            <header>
                <InnerHeader />
                <AuthNavbar />
            </header>

            <div className='mx-6 mt-12'>
                <section>
                    <h1 className='text-2xl font-semibold text-blue-whale'>Профил</h1>
                    <ShadowBox className='pr-38 items-center'>
                        <img src={userPfp} alt="" className='size-14' />
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-blue-whale font-semibold text-xl'>ИМЕ ПРЕЗИМЕ ФАМИЛИЯ</h2>
                            <h2 className='text-blue-whale'>Клиентски номер: 12345</h2>
                        </div>
                    </ShadowBox>
                    < PrimaryButton label='Смяна на парола' />
                </section>

                <section>
                    <h2 className='text-xl font-semibold text-blue-whale mt-10'>Моите данни</h2>

                    <div className='grid grid-cols-1 lg:grid-cols-2 mb-10 gap-8'>
                        <ShadowBox className='flex flex-row justify-between gap-10'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold'>Имейл</p>
                                <p>
                                    john.doe@example.com
                                </p>
                            </div>
                            <button className='self-start underline text-azure'>
                                Edit
                            </button>
                        </ShadowBox>

                        <ShadowBox className='flex flex-row justify-between gap-10'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold'>Телефонен номер</p>
                                <p>
                                    +359 88 123 4567
                                </p>
                            </div>
                            <button className='self-start underline text-azure'>
                                Edit
                            </button>
                        </ShadowBox>

                        <ShadowBox className='flex flex-row justify-between gap-10'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold'>Настоящ адрес</p>
                                <p>
                                    ул. „Цар Иван Асен II“ №24
                                    ет. 3, ап. 12
                                    1000 София
                                    България
                                </p>
                            </div>
                            <button className='self-start underline text-azure'>
                                Edit
                            </button>
                        </ShadowBox>

                        <ShadowBox className='flex flex-row justify-between gap-10'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold'>Трудова заетост</p>
                                <p>
                                    Пълно работно време
                                </p>
                            </div>
                            <button className='self-start underline text-azure'>
                                Edit
                            </button>
                        </ShadowBox>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default ProfileDetailsPage

