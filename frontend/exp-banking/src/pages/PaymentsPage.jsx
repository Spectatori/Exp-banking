import React from 'react'
import TransactionIcon from '../assets/payments/transaction.png'
import TransferIcon from '../assets/payments/payment.png'
import IconLinkCard from '../components/IconLinkCard'

const PaymentsPage = () => {
    return (
        <div className='h-full mx-6 mb-5 my-12 flex flex-col items-center space-y-24 md:space-y-0 md:flex-row justify-evenly'>
            < IconLinkCard
                title='Нова транзакция'
                icon={TransactionIcon}
                bubble='create'
                url='/payments/new-transaction'
            />
            < IconLinkCard
                title='Нов превод'
                icon={TransferIcon}
                bubble='create'
                url='/payments/new-transfer'
            />
        </div>
    )
}

export default PaymentsPage
