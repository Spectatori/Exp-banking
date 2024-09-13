import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ShadowBox from '../ShadowBox'
import PrimaryButton from '../PrimaryButton'

const AddAccountForm = ({closeForm}) => {
    const [accountType, setAccountType] = useState('checking');
    const formRef = useRef(null);

    const handleSelectChange = (e) => {
        setAccountType(e.target.value);
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        console.log(accountType);

        closeForm();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                closeForm();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [closeForm]);

    return (
        <ShadowBox className='flex flex-col max-w-64 absolute -right-5 z-20 top-8'>
            <form
                action=""
                className='flex flex-col gap-2'
                ref={formRef}
            >
                <label htmlFor="accountType">Вид сметка</label>
                <select
                    id="accountType"
                    name='accountType'
                    type="select"
                    className='bg-gray-200 rounded-md p-1'
                    value={accountType}
                    onChange={handleSelectChange}
                >
                    <option value="checking">Разплащателна сметка</option>
                    <option value="savings">Спестовна сметка</option>
                </select>
                <PrimaryButton label='Добави' className='bg-kelly-green mt-5' onClick={handleButtonClick} />
            </form>
        </ShadowBox>
    )
}

export default AddAccountForm
