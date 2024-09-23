import React from 'react'
import IconLinkCard from '../components/IconLinkCard'
import CalculatorIcon from '../assets/loans/calculate.png'
import LoanIcon from '../assets/loans/loan.png'
import MortgageIcon from '../assets/loans/real-estate.png'

const LoansPage = () => {
    return (
        <div className='h-full mx-6 mb-5 my-12 flex flex-col items-center space-y-24 md:space-y-0 md:flex-row justify-evenly'>
            < IconLinkCard
                title='Потребителски кредит'
                icon={LoanIcon}
                bubble='info'
                url='/loans/consumer-loan'
            />
            < IconLinkCard
                title='Ипотечен кредит'
                icon={MortgageIcon}
                bubble='info'
                //url=''
            />
            < IconLinkCard
                title='Калкулатор'
                icon={CalculatorIcon}
                bubble='calculate'
                url='/loans/calculator'
            />
        </div>
    )
}

export default LoansPage
