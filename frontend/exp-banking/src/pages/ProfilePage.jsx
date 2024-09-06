import React from 'react'
import ProfilePieChart from '../components/ProfilePieChart'
import Navbar from "../components/nav-bar/Navbar.jsx";
import Footer from "../components/Footer.jsx"
import TransactionIcon from "../assets/TransactionIcon.png"
import TransactionDetailBlue from '../assets/TransactionDetailBlue.png'

const mainAccount =[
  {
    balance: "1050.00",
    IBAN: "BG67STSA93000000000012345"
  }
]

const transactions = [
  {
    name: "Starbucks",
    date: "2024-09-06",
    type: "Плащане с карта",
    category: "Food",
    amount: "+5 BGN"
  },
  {
    name: "Grocery Store",
    date: "2024-09-05",
    type: "Плащане с карта",
    category: "Groceries",
    amount: "-30 BGN"
  },
  {
    name: "Restaurant",
    date: "2024-09-04",
    type: "Плащане с карта",
    category: "Food",
    amount: "-50 BGN"
  },
  {
    name: "Restaurant",
    date: "2024-09-04",
    type: "Плащане с карта",
    category: "Food",
    amount: "-50 BGN"
  },
  {
    name: "Restaurant",
    date: "2024-09-04",
    type: "Плащане с карта",
    category: "Food",
    amount: "-50 BGN"
  },
  {
    name: "Restaurant",
    date: "2024-09-04",
    type: "Плащане с карта",
    category: "Food",
    amount: "-50 BGN"
  },
]
const ProfilePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <p className="w-screen text-2xl pl-12 pt-10 font-bold">Добре дошли в exp banking</p>

      {mainAccount.map((account) => (
        <div className='flex flex-row justify-between w-2/5 rounded-xl ml-12 mt-10 p-3 h-28' style={{
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
        }}>
          <div className="flex flex-col">
            <p className="font-mono text-gray-400 text-sm self-start">Главен акаунт</p>
            <p className='font-mono pt-2 self-start'>Exp banking акаунт</p>
            <p className='font-mono text-gray-400 text-m self-start'>{account.IBAN}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-mono text-gray-400 text-sm self-end">Налична сума</p>
            <p className='pt-4 text-2xl self-end'>{account.balance}</p>
          </div>
        </div>
      ))}

      <div className='flex flex-col justify-between w-2/5 rounded-xl ml-12 mt-10 p-3 h-fit' style={{
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
      }}>
        <p>Скорошни транзакции</p>

        {transactions.map((transaction, index) => (
          <div key={index} className='flex flex-row justify-between pt-5'>
            <div className='flex flex-row'>
              <img src={TransactionIcon} alt="Transaction Icon" />
              <div className='flex flex-col pl-6 justify-center'>
                <p>{transaction.name}</p>
                <p>{transaction.date}</p>
              </div>
            </div>
            <div className='flex items-center'>
              <p>{transaction.type}</p>
            </div>
            <div className='flex flex-row items-center'>
              <div className='flex-row flex pr-28 items-center'>
                <img src={TransactionDetailBlue} className="w-4 h-4" alt="Transaction Detail" />
                <p>{transaction.category}</p>
              </div>
              <p>{transaction.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;