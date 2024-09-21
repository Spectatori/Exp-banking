import React, { useState } from 'react'
import InnerHeader from '../components/nav-bar/authenticated/InnerHeader'
import AuthNavbar from '../components/nav-bar/authenticated/AuthNavbar'
import userPfp from '../../src/assets/profile-page-images/user.png'
import ShadowBox from '../components/ShadowBox'
import ProfileDetailsNavLink from '../components/profile-details/ProfileDetailsNavLink'
import editInfoIcon from '../assets/profile-page-images/edit-info.png'
import changePasswordIcon from '../assets/profile-page-images/padlock.png'
import PasswordChangeSection from '../components/profile-details/PasswordChangeSection'
import { useUserStore } from '../stores/AuthStore.js'
import {onSave} from '../api/userService.jsx'
import { useEffect } from 'react'
import { getUser } from '../api/userService.jsx'

const ProfileDetailsPage = () => {
    const user = useUserStore((state) => state.user);
    const [selectedButton, setSelectedButton] = useState('personalInfoSection');
    const [isEditing, setIsEditing] = useState({
        email: false,
        phoneNumber: false,
        address: false,
        employment: false,
    });
    const [formData, setFormData] = useState({
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address.street,
        employment: user.employmentType.employmentType,
    });

    const fetchUserData = async () => {
        try {
            const fetchedUser = await getUser(); // Fetch user from the server
            setFormData({
                email: fetchedUser.email,
                phoneNumber: fetchedUser.phoneNumber,
                address: fetchedUser.address.street,
                employment: fetchedUser.employmentType.employmentType,
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setFormData(JSON.parse(storedUser));
        } else {
            fetchUserData(); // Fetch from the server if no data in localStorage
        }
    }, []);

    const handleEditClick = async (field) => {
        if (isEditing[field]) {
            try {
                // Save updated form data to the server
                await onSave(user, formData);
    
                // Update the user data in the local state to reflect the changes
                setFormData((prevData) => ({
                    ...prevData,
                    [field]: formData[field],
                }));
    
                // Refetch updated data after save
                await fetchUserData();
    
                // Optionally, you can store the data in localStorage for persistence
                localStorage.setItem('user', JSON.stringify(formData));
            } catch (error) {
                console.error('Error saving user data:', error);
            }
        }
    
        setIsEditing((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    const handleChange = (e, field) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: e.target.value, // Update the specific field dynamically
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
                </section>

                <section className='flex flex-row gap-10 mt-7'>
                    <ProfileDetailsNavLink onClick={() => handleButtonClick('personalInfoSection')} isActive={selectedButton === 'personalInfoSection'} icon={editInfoIcon} text='Моите данни' />
                    <ProfileDetailsNavLink onClick={() => handleButtonClick('changePasswordSection')} isActive={selectedButton === 'changePasswordSection'} icon={changePasswordIcon} text='Смяна на парола' />
                </section>

                <form>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mb-10 gap-8'>
                        <ShadowBox className='flex flex-row justify-between gap-10'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Имейл</label>
                                {isEditing.email ? (
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleChange(e, 'email')}
                                        className='border p-2'
                                    />
                                ) : (
                                    <p>{formData.email}</p>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => handleEditClick('email')}
                                className='self-start underline text-azure'
                            >
                                {isEditing.email ? 'Save' : 'Edit'}
                            </button>
                        </ShadowBox>

                        <ShadowBox className='flex flex-row justify-between gap-10'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Телефонен номер</label>
                                {isEditing.phoneNumber ? (
                                    <input
                                        type="tel"
                                        value={formData.phoneNumber}
                                        onChange={(e) => handleChange(e, 'phoneNumber')}
                                        className='border p-2'
                                    />
                                ) : (
                                    <p>{formData.phoneNumber}</p>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => handleEditClick('phoneNumber')}
                                className='self-start underline text-azure'
                            >
                                {isEditing.phoneNumber ? 'Save' : 'Edit'}
                            </button>
                        </ShadowBox>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mb-10 gap-8'>
                        <ShadowBox className='flex flex-row justify-between gap-10'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Настоящ адрес</label>
                                {isEditing.address ? (
                                    <input
                                        type="text"
                                        value={formData.address}
                                        onChange={(e) => handleChange(e, 'address')}
                                        className='border p-2'
                                    />
                                ) : (
                                    <p>{formData.address}</p>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => handleEditClick('address')}
                                className='self-start underline text-azure'
                            >
                                {isEditing.address ? 'Save' : 'Edit'}
                            </button>
                        </ShadowBox>

                        <ShadowBox className='flex flex-row justify-between gap-10'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Трудова заетост</label>
                                {isEditing.employment ? (
                                    <input
                                        type="text"
                                        value={formData.employment}
                                        onChange={(e) => handleChange(e, 'employment')}
                                        className='border p-2'
                                    />
                                ) : (
                                    <p>{formData.employment}</p>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => handleEditClick('employment')}
                                className='self-start underline text-azure'
                            >
                                {isEditing.employment ? 'Save' : 'Edit'}
                            </button>
                        </ShadowBox>
                    </div>
                    
                </form>

                {selectedButton === 'changePasswordSection' && <PasswordChangeSection />}
            </div>
        </div>
    )
}

export default ProfileDetailsPage


