
import Navbar from '../components/nav-bar/Navbar.jsx'
import LoanTable from '../components/Table.jsx'
import calculateLoan from '../utils/LoanMortgageCalc.jsx'
import Stack from '@mui/material/Stack'

import Switch from 'react-switch';


import { useState, useRef} from 'react';  

const LoanCalcPage = () => {
    const [resultsArray, setResultsArray] = useState([]);
    const calcValue = useRef(null);

    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (checked) => {
        setIsChecked(checked);
    };

    const handleLoanCalculation = (event) => {
        event.preventDefault();
        const principal = parseFloat(calcValue.current.value);
        const years = 10;
        const interestRate = 6;

        const results = calculateLoan(principal, years, interestRate);
        setResultsArray(results);
    };
    const handleMortgageCalculation = (event) => {
        event.preventDefault();
        const principal = parseFloat(calcValue.current.value);
        const years = 30;
        const interestRate = 3;

        const results = calculateLoan(principal, years, interestRate);
        setResultsArray(results);
    };

  return (
        <div className='flex flex-col'>
            <Navbar/>
            <div className="flex flex-row justify-between">
                <div className='flex flex-col w-2/6 pl-28'>
                    <h1 className='text-5xl font-bold font-mono pt-16'
                    >Калкулатор за заеми</h1>
                    <h2 className='text-2xl pt-10 font-mono pb-36'
                    >Изчислете лесно месечните си вноски с нашия удобен калкулатор, като просто въведете сумата на заема.
                    Независимо дали обмисляте ипотека, автомобилен заем или потребителски заем, този инструмент ви 
                    помага да разберете финансовия ангажимент, преди да вземете назаем. Използвайте калкулатора за заеми,
                    за да планирате бюджета си и да вземате информирани финансови решения.
                    </h2>
                    
                    <Stack direction="row" spacing={4}>

                    </Stack>


                    <label htmlFor="small-radius-switch">
                        <Switch
                            checked={isChecked}
                            onChange={handleChange}
                            handleDiameter={28}
                            offColor="#08f"
                            onColor="#0ff"
                            offHandleColor="#08f"
                            onHandleColor="#0ff"
                            height={40}
                            width={70}
                            activeBoxShadow="0px 0px 0px 0px"
                            uncheckedIcon={
                            <div className='flex justify-center items-center h-full text-xl pr-2 rounded-xl'>
                                🏚
                            </div>
                            }
                            checkedIcon={
                            <div className='flex h-full w-full justify-center items-center'>
                                $
                            </div>
                            }
                            uncheckedHandleIcon={
                            <div className='flex justify-center items-center h-full text-xl'>
                                •
                            </div>
                            }
                            checkedHandleIcon={
                            <div className='flex justify-center items-center text-xl rounded-xl'>
                                •
                            </div>
                            }
                            className="react-switch rounded-xl justify-start"
                            id="small-radius-switch"
                        />
                    </label>
                    <div className='flex flex-col bg-sky-950 w-96 max-w-96 h-96 max-h-96 px-7 rounded-3xl text-gray-100 justify-center gap-6'>
                        {isChecked ? (
                        <>
                        <div className='flex flex-row w-full justify-between '>
                            <h2 className='text-3xl pb-5'>Заем</h2>
                            <h3>Лихва: 6%</h3>
                        </div>
                        <h2>Стойност на заема</h2>
                        <form onSubmit={handleLoanCalculation} className='flex flex-col gap-4'>
                            <input
                            className='w-48 h-12 rounded-xl text-black'
                            type='number'
                            name='value'
                            ref={calcValue}
                            />
                            <button
                            className='bg-gray-100 text-black w-32 rounded-lg h-9'
                            type='submit'>
                            Калкулирай
                            </button>
                        </form>
                        </>) : (<>
                            <div className='flex flex-row w-full justify-between '>
                            <h2 className='text-3xl pb-5'>Ипотека</h2>
                            <h3>Лихва: 6%</h3>
                        </div>
                        <h2>Стойност на ипотеката</h2>
                        <form onSubmit={handleMortgageCalculation} className='flex flex-col gap-4'>
                            <input
                            className='w-48 h-12 rounded-xl text-black'
                            type='number'
                            name='value'
                            ref={calcValue}
                            />
                            <button
                            className='bg-gray-100 text-black w-32 rounded-lg h-9'
                            type='submit'>
                            Калкулирай
                            </button>
                        </form>
                        </>)}
                        
                    </div>
                </div>
                <div className='pt-40 pr-60'>
                    <div className='overflow-scroll max-h-96'>
                        <LoanTable resultsArray={resultsArray} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoanCalcPage
