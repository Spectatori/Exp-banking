import LoanTable from '../components/Table.jsx';
import calculateLoan from '../utils/LoanMortgageCalc.jsx';
import Switch from 'react-switch';
import { useState, useRef, useMemo } from 'react';  
import { useFetchUser } from '../hooks/useFetchUser.js';

const LoanCalcPage = () => {
    const [resultsArray, setResultsArray] = useState([]);
    const calcValue = useRef(null);
    const calcPeriod = useRef(null);

    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (checked) => {
        setIsChecked(checked);
    };

    const handleLoanCalculation = (event) => {
        event.preventDefault();
        const principal = parseFloat(calcValue.current.value);
        const period = parseFloat(calcPeriod.current.value);
        const interestRate = 6;

        const results = calculateLoan(principal, period, interestRate);
        setResultsArray(results);
    };

    const handleMortgageCalculation = (event) => {
        event.preventDefault();
        const principal = parseFloat(calcValue.current.value);
        const period = parseFloat(calcPeriod.current.value);
        const interestRate = 3;

        const results = calculateLoan(principal, period, interestRate);
        setResultsArray(results);
    };

    const columns = useMemo(() => [
        {
            accessorKey: 'period',
            header: 'Месеци',
            size: 80,
        },
        {
            accessorKey: 'monthlyPayment',
            header: 'Месечна такса',
            size: 100,
        },
        {
            accessorKey: 'overallPayment',
            header: 'Крайна сума',
            size: 100,
        },
    ], []);

    return (
        <div className='flex flex-col pb-16 '>
            <div className="flex flex-col justify-between max-2xl:flex-col max-2xl:items-center">
                <div className='flex flex-col pl-28 max-2xl:w-full max-2xl:pl-0'>
                    <h1 className='text-5xl font-bold font-mono pt-16 max-2xl:text-3xl max-2xl:text-center'>Калкулатор за заеми</h1>
                    <h2 className='text-2xl pt-10 pb-16 max-2xl:text-center max-2xl:text-xl'>
                        Изчислете лесно месечните си вноски с нашия удобен калкулатор, като просто въведете сумата на заема.
                        Независимо дали обмисляте ипотека или потребителски заем, този инструмент ви 
                        помага да разберете финансовия ангажимент, преди да вземете назаем. Използвайте калкулатора за заеми,
                        за да планирате бюджета си и да вземате информирани финансови решения.
                    </h2>
                </div>
                <div className="flex justify-between">
                    <div className='flex flex-col pl-28'>
                        <label htmlFor="small-radius-switch" className='pb-5 max-2xl:text-center max-2xl:pl-0'>
                                <Switch
                                    checked={isChecked}
                                    onChange={handleChange}
                                    handleDiameter={28}
                                    offColor="#0284c7"
                                    onColor="#083344"
                                    offHandleColor="#0284c7"
                                    onHandleColor="#083344"
                                    height={50}
                                    width={100}
                                    activeBoxShadow="0px 0px 0px 0px"
                                    uncheckedIcon={
                                    <div className='flex justify-center items-center h-full text-3xl rounded-xl'>
                                        🏚
                                    </div>
                                    }
                                    checkedIcon={
                                    <div className=' text-white flex h-full w-full justify-center items-center text-3xl'>
                                        $
                                    </div>
                                    }
                                    uncheckedHandleIcon={
                                    <div className='flex justify-center items-center h-full text-xl'>
                                        •
                                    </div>
                                    }
                                    checkedHandleIcon={
                                    <div className='text-white flex justify-center items-center text-xl rounded-xl'>
                                        •
                                    </div>
                                    }
                                    className="react-switch rounded-xl justify-start"
                                    id="small-radius-switch"
                                />
                            </label>

                            <div className='flex flex-col bg-sky-950 w-96 max-w-96 h-80 max-h-96 px-7 rounded-3xl text-gray-100 justify-center gap-6 max-2xl:w-80 max-2xl:self-center max-xl:gap-0'>
                                {isChecked ? (
                                <>
                                <div className='flex flex-row w-full justify-between '>
                                    <h2 className='text-3xl pb-2'>Заем</h2>
                                    <h3>Лихва: 6%</h3>
                                </div>
                                <form onSubmit={handleLoanCalculation} className='flex flex-col gap-4'>
                                    <div className='flex justify-between pb-3 max-xl:flex-col max-xl:gap-10'>
                                        <div>
                                            <p className='pb-2'>Сума в лв</p>
                                            <input
                                            className='w-32 pl-2 h-10 rounded-xl text-black max-2xl:w-60'
                                            type='number'
                                            name='value'
                                            ref={calcValue}
                                            />
                                        </div>
                                        <div>
                                            <p className='pb-2'>Месеци</p>
                                            <input
                                            className='w-32 pl-2 h-10 rounded-xl text-black max-2xl:w-60'
                                            type='number'
                                            name='value'
                                            ref={calcPeriod}
                                            />
                                        </div>
                                    </div>
                                    <button
                                    className='bg-gray-100 text-black w-32 rounded-lg h-9'
                                    type='submit'>
                                    Калкулирай
                                    </button>
                                </form>
                                </>) : (<>
                                <div className='flex flex-row w-full justify-between '>
                                    <h2 className='text-3xl pb-2'>Ипотека</h2>
                                    <h3>Лихва: 3%</h3>
                                </div>
                                <form onSubmit={handleMortgageCalculation} className='flex flex-col gap-4'>
                                    <div className='flex justify-between pb-3 max-xl:flex-col max-xl:gap-10'>
                                        <div>
                                            <p className='pb-2'>Сума в лв</p>
                                            <input
                                            className='w-32 pl-2 h-10 rounded-xl text-black max-2xl:w-60'
                                            type='number'
                                            name='value'
                                            ref={calcValue}
                                            />
                                        </div>
                                        <div>
                                            <p className='pb-2'>Месеци</p>
                                            <input
                                            className='w-32 pl-2 h-10 rounded-xl text-black max-2xl:w-60'
                                            type='number'
                                            name='value'
                                            ref={calcPeriod}
                                            />
                                        </div>
                                    </div>
                                    <button
                                    className='bg-gray-100 text-black w-32 rounded-lg h-9'
                                    type='submit'>
                                    Калкулирай
                                    </button>
                                </form>
                            </>)}
                                
                    </div>
                </div>
                    <div className="pt-10 pr-28 w-2/5 max-2xl:pr-0 max-2xl:pt-10 max-2xl:w-full ">
                        <div className="overflow-y-auto max-h-96 w-full">
                            <LoanTable columns={columns} data={resultsArray} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoanCalcPage;
