import React from 'react'
import Navbar from '../components/nav-bar/Navbar'
import BankIcon from '../assets/logo_header.svg'
import HappyClient from '../assets/MainPageImages/happy_debit.jpg'

const MainPage = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Navbar/>
        <div className="flex flex-col pl-10">
            <div className="flex flex-row pt-8 items-start">
                <img src={BankIcon} className='h-40'/>
                <select className='pl-16 text-5xl font-bold justify-cente text-gray-600'>
                    <option>drop</option>
                </select>
                <select className='pl-8 text-5xl font-bold justify-cente text-gray-600'>
                    <option>drop</option>
                </select>
            </div>
            <div className="flex flex-row pt-32 pl-40">
                <div className="flex flex-col w-1/4 items-start gap-14">
                    <h2 className='text-5xl font-bold'>Живей без такси, безплатно откриване и поддръжка на сметки, неограничени безплатни преводи</h2>
                    <button className='bg-sky-950 rounded-lg h-14 w-80 text-white text-3xl'>Започнете сега!</button>
                </div>
                <img src={HappyClient} className=''/>
            </div>
            
        </div>
    </div>
  )
}

export default MainPage
