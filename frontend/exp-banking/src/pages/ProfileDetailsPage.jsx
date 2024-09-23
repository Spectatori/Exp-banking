import React, { useState, useMemo, useEffect } from 'react';
import ProfilePieChart from '../components/ProfilePieChart.jsx';
import LoanTable from '../components/Table.jsx';
import { useUserStore } from '../stores/AuthStore.js';
import {filterTransactions, calculateTotal} from '../utils/FilterTransactionsByDate.jsx'
import { getUser } from '../api/userService.jsx';
import { useLocation } from 'react-router-dom';
import { useFetchUser } from '../hooks/useFetchUser.js';
import { Navigate } from 'react-router-dom';

const categoryColors = {
  Food: {
    Name: "Храна",
    Color: "#FF6347",
  },
  Entertainment: {
    Name:"Забавление",
    Color: "#833EA5",
  },
  Travel: {
    Name: "Пътуване",
    Color: "red",
  },
  Groceries: {
    Name: "Хранителни стоки",
    Color: "#32CD32",
  }
};
const ProfileDetailsPage  = () => {
  useFetchUser();
  ///Handles the time change for the pie chart
  const [selectedTimeSpan, setSelectedTimeSpan] = useState('daily');

  const handleTimeSpanChange = (e) => {
    setSelectedTimeSpan(e.target.value);
  };

  ///Addding the column names for the transaction table
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
  /// Sets new user data in the local storage after pressing the button
  async function handleRefresh() {
    const setUser = useUserStore.getState().setUser;
    try {
      const user = await getUser();
      setUser(user);
    } catch (error) {
      console.log(error); 
    }
  }
  /// Sets the user initially after logging in or registering
  const user = useUserStore((state) => state.user);

  const location = useLocation();
  const { accountId } = (location.state || { accountId: 0 });

  const [selectedAccountIndex, setSelectedAccountIndex] = useState(accountId);

  const handleAccountChange = (event) => {
    const index = event.target.value;
    setSelectedAccountIndex(index);
  };

  // Make sure there's a user
  if (!user || !user.accounts || user.accounts.length === 0) {
    return <Navigate to="/account-overview"/>;  
  }
  // Get the currently selected account
  const selectedAccount = user.accounts[selectedAccountIndex];

  ///controls which transactions go to the pie chart
  const filteredTransactions = useMemo(() => {
    if (user && user.accounts && user.accounts.length && selectedAccount.transactions.length > 0) {
      return filterTransactions(selectedAccount.transactions, selectedTimeSpan);
    }
    return [];
  }, [user, selectedTimeSpan, selectedAccount]);
  const totalForSelectedTimeSpan = useMemo(() => {
    return calculateTotal(filteredTransactions);
  }, [filteredTransactions]);

  ///this function show the daily, weekly and monthly overall payments above the pie chart
  const dailyTotal = calculateTotal(filterTransactions(selectedAccount?.transactions, 'daily'));
  const weeklyTotal = calculateTotal(filterTransactions(selectedAccount?.transactions, 'weekly'));
  const monthlyTotal = calculateTotal(filterTransactions(selectedAccount?.transactions, 'monthly'));

  return (
    <div className="flex flex-col">
      <div className="flex flex-col pt-10 pb-10 px-20 gap-10 max-xl:px-4 max-2xl:pb-10">
        <div className='flex flex-row gap-28 justify-between max-2xl:flex-col max-xl:gap-10'>
          <div className='flex flex-col gap-10 '>
              <div className='bg-white flex flex-row justify-between px-10 items-center rounded-xl h-28 w-full 
              max-xl:flex-col max-xl:h-44 max-xl:items-center max-xl:justify-center gap-3' style={{
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
              }}>
                <select
                  value={selectedAccountIndex}
                  onChange={handleAccountChange}
                  className="font-bold text-md p-2 rounded bg-teal-700 text-white"
                >
                  {user.accounts.map((account, index) => (
                    <option key={index} value={index}>
                      {account.iban}
                    </option>
                  ))}
                </select>
                <div className="flex flex-col">
                  <p className="font-mono text-center text-gray-400 text-md self-start max-xl:self-center">{user.firstname} {user.lastname}</p>
                  <p className='font-mono text-center self-start max-xl:self-center max-xl:pt-1'>{selectedAccount.accountType.accountType}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-mono text-gray-400 text-sm text-center self-end max-xl:self-center">Налична сума</p>
                  <p className=' text-xl text-center self-end max-xl:self-center'>{selectedAccount.balance} BGN</p>
                </div>
              </div>

            <div className='bg-white flex flex-col justify-between rounded-xl p-3' style={{
              boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
            }}>
              <p className='text-xl pb-2 pl-6'>Скорошни транзакции</p>
              <div className='overflow-y-auto h-96 max-h-96 w-full'>
                <LoanTable columns={columns} data={selectedAccount.transactions} />
              </div>
              
            </div>
          </div>
          <div className='bg-white flex flex-col rounded-xl h-90 justify-center max-2xl:pb-10' style={{
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
          }}>
            <div className='flex flex-row px-6 justify-between pb-10 max-2xl:pt-5'>
              <p className='text-2xl font-bold'>Всички разходи</p>
              <button onClick={handleRefresh} 
              className='bg-teal-700 w-10 h-10 items-center justify-center flex rounded-lg hover:scale-110 ease-in duration-300'>
                
              <svg fill="white" height="50px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 489.698 489.698"><g id="SVGRepo_bgCarrier">
                </g><g id="SVGRepo_tracerCarrier" ></g>
               <g id="SVGRepo_iconCarrier"> <g> <g> <path 
               d="M468.999,227.774c-11.4,0-20.8,8.3-20.8,19.8c-1,74.9-44.2,142.6-110.3,178.9c-99.6,54.7-216,5.6-260.6-61l62.9,13.1 
               c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-123.7-26c-7.2-1.7-26.1,3.5-23.9,22.9l15.6,124.8 
               c1,10.4,9.4,17.7,19.8,17.7c15.5,0,21.8-11.4,20.8-22.9l-7.3-60.9c101.1,121.3,229.4,104.4,306.8,69.3 
               c80.1-42.7,131.1-124.8,132.1-215.4C488.799,237.174,480.399,227.774,468.999,227.774z"></path> 
               <path d="M20.599,261.874c11.4,0,20.8-8.3,20.8-19.8c1-74.9,44.2-142.6,110.3-178.9c99.6-54.7,216-5.6,260.6,61l-62.9-13.1 
               c-10.4-2.1-21.8,4.2-23.9,15.6c-2.1,10.4,4.2,21.8,15.6,23.9l123.8,26c7.2,1.7,26.1-3.5,23.9-22.9l-15.6-124.8 
               c-1-10.4-9.4-17.7-19.8-17.7c-15.5,0-21.8,11.4-20.8,22.9l7.2,60.9c-101.1-121.2-229.4-104.4-306.8-69.2 
               c-80.1,42.6-131.1,124.8-132.2,215.3C0.799,252.574,9.199,261.874,20.599,261.874z"></path> </g> </g> </g>
               </svg>

              </button>
            </div>
            <div className='flex flex-row justify-around pb-4 max-xl:flex-col max-xl:items-center max-xl:gap-3'>
              <div className='flex flex-col items-start max-2xl:gap-1'>
                <p className='font-mono text-gray-400' >Дневно</p>
                <p className=' text-xl font-bold font-mono'></p>
                <p className=' text-xl font-bold font-mono'>{dailyTotal.toFixed(2)} ЛВ</p>
              </div>
              <div className='flex flex-col items-start max-2xl:gap-1'>
                <p className='font-mono text-gray-400'>Седмично</p>
                <p className=' text-xl font-bold font-mono'></p>
                <p className=' text-xl font-bold font-mono'>{weeklyTotal.toFixed(2)} ЛВ</p>
              </div>
              <div className='flex flex-col items-start max-2xl:gap-1'>
                <p className='font-mono text-gray-400'>Месечно</p>
                <p className=' text-xl font-bold font-mono'></p>
                <p className=' text-xl font-bold font-mono'>{monthlyTotal.toFixed(2)} ЛВ</p>
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
                      {categoryColors[category].Name}
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

export default ProfileDetailsPage;
