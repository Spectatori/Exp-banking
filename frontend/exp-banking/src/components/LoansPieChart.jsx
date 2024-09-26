import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const loanCategories = {
    "Кредити над 10 000 лв.": {
        Name: "Loans Over 10",
        Color: "#FF7F50", 
    },
    "Кредити под 5000 лв.": {
        Name: "Loans Under 5",
        Color: "#4682B4", 
    },
    "Кредити между 5000 и 10 000 лв.": {
        Name: "Loans Between 5 and 10",
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
    )
}

export default LoansPieChart
