import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const loanCategories = {
    "Кредити над 10 000 лв.": {
        Name: "Кредити над 10 000 лв.",
        Color: "#FF7F50",
    },
    "Кредити под 5000 лв.": {
        Name: "Кредити под 5000 лв.",
        Color: "#4682B4",
    },
    "Кредити между 5000 и 10 000 лв.": {
        Name: "Кредити между 5000 и 10 000 лв.",
        Color: "#32CD32",
    },
};

const defaultColor = "#D3D3D3";

const LoansPieChart = ({ loansOverTen, loansUnderFive, loansBetweenFiveAndTen }) => {
    const pieData = [
        { name: 'Кредити над 10 000 лв.', value: loansOverTen },
        { name: 'Кредити под 5000 лв.', value: loansUnderFive },
        { name: 'Кредити между 5000 и 10 000 лв.', value: loansBetweenFiveAndTen },
    ];

    return (
        <div className='flex flex-col gap-5 md:flex-row w-full md:gap-20 items-center justify-center'>
            <ResponsiveContainer width={300} height={300}>
                <PieChart>
                    <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={140}
                        innerRadius={0}
                        fill="#8884d8"
                    >
                        {pieData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={loanCategories[entry.name]?.Color || defaultColor}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>

            <div className='flex flex-col w-fit justify-center space-y-5'>
                {Object.values(loanCategories).map((category) => (
                    <div key={category.Name} className='flex flex-row font-medium gap-3 items-center'>
                        <div
                            className={` min-w-3 min-h-3`}
                            style={{ backgroundColor: category.Color }}
                        >
                        </div>
                        <p className='font-semibold'>
                            {category.Name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LoansPieChart
