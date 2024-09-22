import React from 'react'
import InnerHeader from '../components/nav-bar/authenticated/InnerHeader'
import AuthNavbar from '../components/nav-bar/authenticated/AuthNavbar'
import Navbar from '../components/nav-bar/Navbar'
import ShadowBox from '../components/ShadowBox'
import PrimaryButton from '../components/PrimaryButton'
import { useFetchUser } from '../hooks/useFetchUser'

import Banner from '../assets/consumer-loan-info/family-cropped.jpg'
import RelocationPic from '../assets/consumer-loan-info/relocation.jpg'
import FormIcon from '../assets/consumer-loan-info/online-education.png'
import ApprovedIcon from '../assets/consumer-loan-info/quality.png'
import PiggyIcon from '../assets/consumer-loan-info/piggy-bank.png'
import { IoCheckmarkSharp } from "react-icons/io5";

const ConsumerLoanInfoPage = () => {
    useFetchUser();
    return (
        <>
            <Navbar />

            <section className='mt-5 flex flex-col md:relative'>
                <img src={Banner} alt="" className='max-h-["180px"] w-full object-cover  object-center ' />
                <h1 className='text-dark-blue font-bold text-5xl md:text-4xl lg:text-5xl md:absolute top-20 mt-10 ml-16 max-w-32'>Потребителски кредит</h1>
            </section>

            <section className='flex flex-col w-full self-center p-10 items-center'>
                <h2 className='text-dark-blue font-bold md: text-3xl lg:text-4xl text-center'>Кандидатствайте лесно онлайн</h2>

                <section className='w-full flex flex-row flex-wrap gap-10 mt-10 p-10 justify-evenly'>
                    <div className='flex flex-col items-center gap-2 group h-full max-w-64 text-center'>
                        <div className='relative'>
                            <img src={FormIcon} alt="" className='h-36' />
                            <div className='absolute bottom-0 right-0 flex bg-azure border rounded-full size-12 items-center justify-center'>
                                <span className='font-bold text-4xl text-white'>1</span>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <h3 className='text-xl font-semibold text-blue-whale leading-5 mt-2 text-wrap'>Попълвате форма за заявка</h3>
                            <h3 >Попълвате личните си данни и информация за онлайн кредита в няколко бързи и лесни стъпки.</h3>
                        </div>
                    </div>

                    <div className='flex flex-col items-center gap-2 group h-full max-w-64 text-center'>
                        <div className='relative'>
                            <img src={ApprovedIcon} alt="" className='h-36' />
                            <div className='absolute bottom-0 right-0 flex bg-azure border rounded-full size-12 items-center justify-center'>
                                <span className='font-bold text-4xl text-white'>2</span>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <h3 className='text-xl font-semibold text-blue-whale leading-5 mt-2 text-wrap'>Получавате становище на момента</h3>
                            <h3 >Получавате отговор за това дали сте одобрени за кредита на момента.</h3>
                        </div>
                    </div>

                    <div className='flex flex-col items-center gap-2 group h-full max-w-64 text-center'>
                        <div className='relative'>
                            <img src={PiggyIcon} alt="" className='h-36' />
                            <div className='absolute bottom-0 right-0 flex bg-azure border rounded-full size-12 items-center justify-center'>
                                <span className='font-bold text-4xl text-white'>3</span>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <h3 className='text-xl font-semibold text-blue-whale leading-5 mt-2 text-wrap'>Взимате парите по най-удобния за Вас начин</h3>
                            <h3 >Получавате желаното финансиране по вашата банкова сметка в рамките на деня.</h3>
                        </div>
                    </div>
                </section>
            </section>

            <section className='w-full mt-5 mb-10'>
                <div className='flex flex-col lg:flex-row lg:justify-around items-center wrap'>
                    <img src={RelocationPic} alt="" className='w-1/2 rounded-lg object-cover hidden md:block' />

                    <div className='flex flex-col gap-5'>
                        <div className='lg:w-full w-fit rounded-xl p-10 mt-3 h-fit bg-dark-blue text-white space-y-5'>
                            <h3 className='font-bold text-3xl max-w-96'>Кой може да кандидатсва за кредит?</h3>
                            <p className='font-semibold'>Изисквания за отпускане на кредит:</p>

                            <div className='flex flex-row gap-5 max-w-96 text-wrap'>
                                <IoCheckmarkSharp className='font-bold size-5' />
                                <p>Трябва да имаш навършени 18 години и да имаш добра кредитна история.</p>
                            </div>
                            <div className='flex flex-row gap-5 max-w-96 text-wrap'>
                                <IoCheckmarkSharp className='font-bold size-7' />
                                <p>Не е необходимо да работиш на трудов договор, но трябва да имаш доходи, с които да обслужваш кредита си.</p>
                            </div>
                            <div className='flex flex-row gap-5 max-w-96 text-wrap'>
                                <IoCheckmarkSharp className='font-bold size-7' />
                                <p>Трябва да разполагаш с валиден документ за самоличност, валиден имейл и телефонен номер.</p>
                            </div>
                        </div>

                        <PrimaryButton label='Кандидатстване' className='bg-kelly-green self-end '/>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ConsumerLoanInfoPage
