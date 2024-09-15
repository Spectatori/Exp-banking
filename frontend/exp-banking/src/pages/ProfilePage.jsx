import React, { useState, useMemo } from 'react';
import ProfilePieChart from '../components/ProfilePieChart.jsx';
import LoanTable from '../components/Table.jsx';
import Navbar from '../components/nav-bar/Navbar.jsx';

const mainAccount = [
  {
    balance: "1050.00",
    IBAN: "BG67STSA93000000000012345"
  }
];

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

const transactions = [
  {
    name: "Starbucks",
    date: "2024-09-06",
    type: "Плащане с карта",
    category: "Entertainment",
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
];

const ProfilePage = () => {
  const [selectedTimeSpan, setSelectedTimeSpan] = useState('daily');

  const handleTimeSpanChange = (e) => {
    setSelectedTimeSpan(e.target.value);
  };

  const columns = useMemo(() => [
    {
      accessorKey: 'name',
      header: 'Име',
      size: 100,
    },
    {
      accessorKey: 'date',
      header: 'Дата',
      size: 100,
    },
    {
      accessorKey: 'type',
      header: 'Тип',
      size: 150,
    },
    {
      accessorKey: 'category',
      header: 'Категория',
      size: 100,
    },
    {
      accessorKey: 'amount',
      header: 'Сума',
      size: 80,
    }
  ], []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-col p-12 gap-8 max-xl:gap-0">
        <p className="text-2xl font-bold max-xl:text-center max-xl:pb-4">Добре дошли в exp banking</p>
        <div className='flex flex-row gap-20 max-2xl:flex-col max-2xl:max-h-fit max-xl:gap-0' style={{ maxHeight: '38rem' }}>
          <div className='flex flex-col gap-12 max-xl:gap-0'>
            {mainAccount.map((account) => (
              <div key={account.IBAN} className='flex flex-row justify-between rounded-xl p-3 h-28 w-full max-xl:flex-col max-xl:h-44 max-xl:items-center' style={{
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
              }}>
                <div className="flex flex-col">
                  <p className="font-mono text-gray-400 text-sm self-start max-xl:self-center">Tester Testov</p>
                  <p className='font-mono pt-2 self-start max-xl:self-center'>Online pay account</p>
                  <p className='font-mono font-bold text-m self-start'>{account.IBAN}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-mono text-gray-400 text-sm self-end">Налична сума</p>
                  <p className='pt-4 text-2xl self-end'>{account.balance}</p>
                </div>
              </div>
            ))}

            <div className='flex flex-col justify-between rounded-xl p-3 h-fit' style={{
              boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
            }}>
              <p>Скорошни транзакции</p>
              <div className='overflow-y-auto max-h-96 w-full'>
                <LoanTable columns={columns} data={transactions} />
              </div>
              
            </div>
          </div>
          <div className='flex flex-col rounded-xl h-90' style={{
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            maxHeight: '38rem'
          }}>
            <div className='flex flex-row pt-8 px-6 justify-between max-xl:pt-0'>
              <p className='text-2xl font-bold'>Всички разходи</p>
              <button className='bg-teal-700 w-10 h-10 items-center justify-center flex rounded-lg hover:scale-110 ease-in duration-300'>
                <svg className="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 
                    45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5 12.5 32.8 0 
                    45.3s32.8 12.5 45.3 0l160-160z" fill="white"/>
                </svg>
              </button>
            </div>
            <div className='flex flex-row justify-around p-8'>
              <div className='flex flex-col items-start'>
                <p className='font-mono text-gray-400'>Дневно</p>
                <p className='pt-3 text-xl font-bold font-mono'>275<sub>,40</sub> ЛВ</p>
              </div>
              <div className='flex flex-col items-start'>
                <p className='font-mono text-gray-400'>Седмично</p>
                <p className='pt-3 text-xl font-bold font-mono'>1.420<sub>,65</sub> ЛВ</p>
              </div>
              <div className='flex flex-col items-start'>
                <p className='font-mono text-gray-400'>Месечно</p>
                <p className='pt-3 text-xl font-bold font-mono'>8.200<sub>,00</sub> ЛВ</p>
              </div>
            </div>
            <hr className='border-t border-gray-300 pl-10 w-5/6 self-center' />
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <div className='flex pt-6 pl-8'>
                  <select
                    value={selectedTimeSpan}
                    onChange={handleTimeSpanChange}
                    className="border-gray-300 p-2 text-lg font-bold border-none outline-none"
                  >
                    <option value="daily">Дневно</option>
                    <option value="weekly">Седмично</option>
                    <option value="monthly">Месечно</option>
                  </select>
                </div>
                <div className='pl-20 max-xl:pl-0'>
                <ProfilePieChart transactions={transactions} />
                </div>
              </div>
              <div className='flex flex-col pr-44 justify-center gap-8 pl-20'>
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
