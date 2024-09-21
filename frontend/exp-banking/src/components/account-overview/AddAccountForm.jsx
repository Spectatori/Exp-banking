import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ShadowBox from '../ShadowBox'
import PrimaryButton from '../PrimaryButton'
import useCreateAccount from '../../hooks/useCreateAccount'

const AddAccountForm = ({ closeForm }) => {
    const [accountType, setAccountType] = useState('Разплащателна сметка');
    const formRef = useRef(null);

    const { createAccount } = useCreateAccount();

    const handleSelectChange = (e) => {
        setAccountType(e.target.value);
    };

    const handleButtonClick = async (e) => {
        e.preventDefault();

        const accountInitialValues = {
            "currency": "BGN",
            "balance": 0,
            "accountType": {
                "accountType": accountType
            }
        }
        await createAccount(accountInitialValues);
        //console.log(accountType);


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
                    <option value="Разплащателна сметка">Разплащателна сметка</option>
                    <option value="Спестовна сметка">Спестовна сметка</option>
                </select>
                <PrimaryButton label='Добави' className='bg-kelly-green mt-5' onClick={handleButtonClick} />
            </form>
        </ShadowBox>
    )
}

export default AddAccountForm

