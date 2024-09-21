import React, { useState, useMemo, useEffect } from 'react';
import ProfilePieChart from '../components/ProfilePieChart.jsx';
import LoanTable from '../components/Table.jsx';
import Navbar from '../components/nav-bar/Navbar.jsx';
import { useUserStore } from '../stores/AuthStore.js';
import {filterTransactions, calculateTotal} from '../utils/FilterTransactionsByDate.jsx'

const categoryColors = {
  Food: {
    Color: "#FF6347",
  },
  Entertainment: {
    Color: "#833EA5",
  },
  Travel: {
    Color: "red",
  },
  Groceries: {
    Color: "#32CD32",
  }
};
const ProfilePage = () => {

  const [selectedTimeSpan, setSelectedTimeSpan] = useState('daily');

  const handleTimeSpanChange = (e) => {
    setSelectedTimeSpan(e.target.value);
  };

  const columns = useMemo(() => [
    {
      accessorKey: 'dateOfTransaction',
      header: 'Дата',
      size: 100,
    },
    {
      accessorKey: 'details',
      header: 'Детайли',
      size: 150,
    },
    {
      accessorKey: 'amount',
      header: 'Сума',
      size: 80,
    }
  ], []);

  const user = useUserStore((state) => state.user);
  console.log(user)

  const filteredTransactions = useMemo(() => {
    if (user && user.accounts && user.accounts.length && user.accounts[0].transactions > 0) {
      return filterTransactions(user.accounts[0].transactions, selectedTimeSpan);
    }
    return [];
  }, [user, selectedTimeSpan]);

  const totalForSelectedTimeSpan = useMemo(() => {
    return calculateTotal(filteredTransactions);
  }, [filteredTransactions]);

  const dailyTotal = calculateTotal(filterTransactions(user?.accounts[0]?.transactions, 'daily'));
  const weeklyTotal = calculateTotal(filterTransactions(user?.accounts[0]?.transactions, 'weekly'));
  const monthlyTotal = calculateTotal(filterTransactions(user?.accounts[0]?.transactions, 'monthly'));

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col pt-10 px-40 gap-10 max-xl:px-4 max-2xl:pb-10">
        <div className='flex flex-row justify-between max-2xl:flex-col max-xl:gap-10'>
          <div className='flex flex-col gap-16 '>
              <div className='flex flex-row justify-between px-10 items-center rounded-xl h-28 w-full 
              max-xl:flex-col max-xl:h-44 max-xl:items-center max-xl:justify-center gap-3' style={{
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
              }}>
                {user && user.accounts && user.accounts.length > 0 ? (
                  <p className='font-bold text-md'>{user.accounts[0].iban}</p> ) : ( <p>No account available</p> )}
                <div className="flex flex-col">
                  <p className="font-mono text-gray-400 text-md self-start max-xl:self-center">{user.firstname} {user.lastname}</p>
                  <p className='font-mono self-start max-xl:self-center max-xl:pt-1'>{user.accounts[0].accountType.accountType}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-mono text-gray-400 text-sm self-end max-xl:self-center">Налична сума</p>
                  <p className=' text-2xl self-end max-xl:self-center'>{user.accounts[0].balance} BGN</p>
                </div>
              </div>

            <div className='flex flex-col justify-between rounded-xl p-3' style={{
              boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
            }}>
              <p className='text-xl pb-2 pl-6'>Скорошни транзакции</p>
              <div className='overflow-y-auto h-96 max-h-96 w-full'>
                <LoanTable columns={columns} data={user.accounts[0].transactions} />
              </div>
              
            </div>
          </div>
          <div className='flex flex-col rounded-xl h-90 justify-center max-2xl:pb-10' style={{
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
          }}>
            <div className='flex flex-row px-6 justify-between pb-10 max-2xl:pt-5'>
              <p className='text-2xl font-bold'>Всички разходи</p>
              <button className='bg-teal-700 w-10 h-10 items-center justify-center flex rounded-lg hover:scale-110 ease-in duration-300'>
                <svg className="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 
                    45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5 12.5 32.8 0 
                    45.3s32.8 12.5 45.3 0l160-160z" fill="white"/>
                </svg>
              </button>
            </div>
            <div className='flex flex-row justify-around pb-4 max-xl:flex-col max-xl:items-center max-xl:gap-3'>
              <div className='flex flex-col items-start max-2xl:gap-1'>
                <p className='font-mono text-gray-400' >Дневно</p>
                <p className=' text-xl font-bold font-mono'>
                <p className=' text-xl font-bold font-mono'>{dailyTotal.toFixed(2)} ЛВ</p>
                </p>
              </div>
              <div className='flex flex-col items-start max-2xl:gap-1'>
                <p className='font-mono text-gray-400'>Седмично</p>
                <p className=' text-xl font-bold font-mono'>
                <p className=' text-xl font-bold font-mono'>{weeklyTotal.toFixed(2)} ЛВ</p>
                </p>
              </div>
              <div className='flex flex-col items-start max-2xl:gap-1'>
                <p className='font-mono text-gray-400'>Месечно</p>
                <p className=' text-xl font-bold font-mono'>
                <p className=' text-xl font-bold font-mono'>{monthlyTotal.toFixed(2)} ЛВ</p>
                </p>
              </div>
            </div>
            <hr className='border-t border-gray-300 pl-10 w-5/6 self-center pb-7' />
            <div className='flex flex-row justify-between max-xl:flex-col'>
              <div className='flex flex-col'>
                <div className='flex pl-8'>
                  <select
                    value={selectedTimeSpan}
                    onChange={handleTimeSpanChange}
                    className="border-gray-300 text-lg p-2 rounded-md font-bold border-none outline-none"
                  >
                    <option value="daily">Дневно</option>
                    <option value="weekly">Седмично</option>
                    <option value="monthly">Месечно</option>
                  </select>
                </div>
                <div className='pl-20 pt-10 max-xl:pl-0 max-xl:self-center'>
                <ProfilePieChart transactions={filteredTransactions} />
                </div>
              </div>
              <div className='flex flex-col pr-44 justify-center pl-20 max-xl:pt-5'>
                {Object.keys(categoryColors).map((category) => (
                  <div key={category} className='text-2xl font-bold'>
                    <p style={{ color: categoryColors[category].Color }}>
                      {category}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
