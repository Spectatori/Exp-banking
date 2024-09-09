import React from 'react'
import CustomNavLink from '../CustomNavLink'

const AuthNavbar = () => {
    return (
        <nav>
            <ul className="flex gap-8 text-dark-blue font-semibold text-sm [&>*]:px-3 mt-5 ml-3">
                <CustomNavLink url='/' title='НАЧАЛО' />
                <CustomNavLink url='/' title='СМЕТКИ И ДЕПОЗИТИ' />
                <CustomNavLink url='/' title='КАРТИ' />
                <CustomNavLink url='/' title='ПЛАЩАНИЯ' />
                <CustomNavLink url='/' title='КРЕДИТИ' />
            </ul>
        </nav>
    )
}

export default AuthNavbar
