import React, {useRef, useState} from 'react'
import Navbar from '../components/nav-bar/NavBar.jsx';
import Table from '../components/Table.jsx'

const LoanCalcPage = () => {
    const calcValue = useRef(null);
    const [resultsArray, setResultsArray] = useState([]);  

    const handleCalculation = (event) => {
        event.preventDefault();
        const principal = parseFloat(calcValue.current.value);
        const interestRate = 15.5;
        const years = 5;
        let result = principal;
        const resultsArray = [];
      
        for (let year = 1; year <= years; year++) {
          result *= (1 + interestRate / 100);
          resultsArray.push({ year, result: result.toFixed(2) });
          console.log(`Year ${year}: ${result.toFixed(2)} BGN`);
        }
        setResultsArray(resultsArray);
      
        // Export the results array to your table component
        
      };

  return (
    <div className='flex flex-col'>
        <Navbar/>
        <div className="flex">
            <div className='flex flex-col w-2/6 pl-16'>
                <h1 className='text-5xl font-bold font-mono pt-16'>Калкулатор за заеми</h1>
                <h2 className='text-2xl pt-10 font-mono pb-36'>Изчислете лесно месечните си вноски с нашия удобен калкулатор, като просто въведете сумата на заема.
                Независимо дали обмисляте ипотека, автомобилен заем или потребителски заем, този инструмент ви 
                помага да разберете финансовия ангажимент, преди да вземете назаем. Използвайте калкулатора за заеми,
                за да планирате бюджета си и да вземате информирани финансови решения.
                </h2>
                <div className='flex flex-col bg-sky-950 w-96 h-96 px-7 rounded-3xl text-gray-100 justify-center gap-6'>
                    <div className='flex flex-row w-full justify-between '>
                        <h2 className='text-3xl pb-5'>Заем</h2>
                        <h3>Интерес:15.3%</h3>
                    </div>
                    <h2>Стойност на заема</h2>
                    <form onSubmit={handleCalculation} className='flex flex-col gap-4'>
                        <input className='w-48 h-12 rounded-xl text-black' name='value' ref={calcValue}/>
                        <button className='bg-gray-100 text-black w-32 rounded-lg h-9' type='submit'>Калкулирай</button>
                    </form>
                </div>
            </div>
            <div>
                <Table resultsArray={resultsArray}/>
            </div>
        </div>
    </div>
  )
}

export default LoanCalcPage
