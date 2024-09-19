import React, { useState } from 'react'
import InnerHeader from '../components/nav-bar/authenticated/InnerHeader'
import AuthNavbar from '../components/nav-bar/authenticated/AuthNavbar'
import userPfp from '../../src/assets/profile-page-images/user.png'
import PrimaryButton from '../components/PrimaryButton'
import ShadowBox from '../components/ShadowBox'
import AuthInputField from '../components/auth-forms/AuthInputField'
import { Link } from 'react-router-dom'
import ProfileDetailsNavLink from '../components/profile-details/ProfileDetailsNavLink'
import editInfoIcon from '../assets/profile-page-images/edit-info.png'
import changePasswordIcon from '../assets/profile-page-images/padlock.png'
import PasswordChangeSection from '../components/profile-details/PasswordChangeSection'

const ProfileDetailsPage = () => {
    const [selectedButton, setSelectedButton] = useState('personalInfoSection');

    const [isEditing, setIsEditing] = useState({
        email: false,
        phoneNumber: false,
        address: false,
        employment: false,
    });

    const handleButtonClick = (section) => {
        setSelectedButton(section);
    };

    const handleEditClick = (field) => {
        event.preventDefault();
        setIsEditing((prevState) => ({
        ...prevState,
    [field]: !prevState[field], // Toggle edit state for the clicked field
        }));
    };
    return (
        <div>
            <header>
                <InnerHeader />
                <AuthNavbar />
            </header>

            <div className='mx-10 mt-12'>
                <section>
                    <h1 className='text-2xl font-semibold text-blue-whale'>Профил</h1>
                    <ShadowBox className='pr-38 items-center'>
                        <img src={userPfp} alt="" className='size-14' />
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-blue-whale font-semibold text-xl'>ИМЕ ПРЕЗИМЕ ФАМИЛИЯ</h2>
                            <h2 className='text-blue-whale'>Клиентски номер: 12345</h2>
                        </div>
                    </ShadowBox>
                    {/*<PrimaryButton label='Смяна на парола' className='mt-6' onClick={() => navigate('/profile/details/password-change')}/>*/}
                </section>

                <section className='flex flex-row gap-10 mt-7'>
                    <ProfileDetailsNavLink onClick={() => handleButtonClick('personalInfoSection')} isActive={selectedButton === 'personalInfoSection'} icon={editInfoIcon} text='Моите данни' />
                    <ProfileDetailsNavLink onClick={() => handleButtonClick('changePasswordSection')} isActive={selectedButton === 'changePasswordSection'} icon={changePasswordIcon} text='Смяна на парола' />
                </section>

                {selectedButton === 'personalInfoSection' && (
                    <section>
                        <h2 className='text-xl font-semibold text-blue-whale mt-10'>Моите данни</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 mb-10 gap-8'>

                            <form>
                            <ShadowBox className='flex flex-row justify-between gap-10'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold'>Имейл</p>
                                {isEditing.email ? (
                                <input type="email" defaultValue="john.doe@example.com" />
                                ) : (
                                <p>john.doe@example.com</p>
                                )}
                            </div>
                            <button
                                onClick={() => handleEditClick('email')}
                                className='self-start underline text-azure'
                            >
                                {isEditing.email ? 'Save' : 'Edit'}
                            </button>
                            </ShadowBox>
                            </form>

                            <form>
                            <ShadowBox className='flex flex-row justify-between gap-10'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold'>Телефонен номер</p>
                                {isEditing.phoneNumber ? (
                                <input type="phoneNumber" defaultValue="+359 88 123 4567" />
                                ) : (
                                <p>+359 88 123 4567</p>
                                )}
                            </div>
                            <button
                                onClick={() => handleEditClick('phoneNumber')}
                                className='self-start underline text-azure'
                            >
                                {isEditing.phoneNumber ? 'Save' : 'Edit'}
                            </button>
                            </ShadowBox>
                            </form>
                            
                            <form>
                            <ShadowBox className='flex flex-row justify-between gap-10'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold'>Настоящ адрес</p>
                                {isEditing.address ? (
                                <input type="address" defaultValue="ул. „Цар Иван Асен II“ №24 ет. 3, ап. 12 1000 София България" />
                                ) : (
                                <p>ул. „Цар Иван Асен II“ №24 ет. 3, ап. 12 1000 София България</p>
                                )}
                            </div>
                            <button
                                onClick={() => handleEditClick('address')}
                                className='self-start underline text-azure'
                            >
                                {isEditing.address ? 'Save' : 'Edit'}
                            </button>
                            </ShadowBox>
                            </form>

                            <form>
                            <ShadowBox className='flex flex-row justify-between gap-10'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-semibold'>Трудова заетост</p>
                                {isEditing.employment ? (
                                <input type="employment" defaultValue="Пълно работно време" />
                                ) : (
                                <p>Пълно работно време</p>
                                )}
                            </div>
                            <button
                                onClick={() => handleEditClick('employment')}
                                className='self-start underline text-azure'
                            >
                                {isEditing.employment ? 'Save' : 'Edit'}
                            </button>
                            </ShadowBox>
                            </form>

                        </div>
                    </section>
                )}

                {selectedButton === 'changePasswordSection' && (
                   <PasswordChangeSection /> 
                )}
            </div>
        </div>
    )
}

export default ProfileDetailsPage


