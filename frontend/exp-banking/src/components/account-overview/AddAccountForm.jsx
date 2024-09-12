import React from 'react'
import ShadowBox from '../ShadowBox'
import PrimaryButton from '../PrimaryButton'

const AddAccountForm = () => {
    return (
        <ShadowBox className='flex flex-col max-w-64'>
            <h3 className='text-xl font-semibold text-blue-whale'>Нова сметка</h3>
            <form
                action=""
                className='flex flex-col mt-5 gap-2'
            >
                <label htmlFor="accountType">Вид сметка</label>
                <select
                    id="accountType"
                    type="select"
                    className='bg-gray-200'
                >
                    <option value="">Разплащателна сметка</option>
                    <option value="">Спестовна сметка</option>
                </select>
                <PrimaryButton label='Добави' className='bg-kelly-green mt-5'/>
            </form>
        </ShadowBox>
    )
}

export default AddAccountForm
