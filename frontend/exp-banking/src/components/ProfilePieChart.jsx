import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: "Starbucks", date: "2024-09-06", type: "Плащане с карта", category: "Food", amount: 5 },
  { name: "Grocery Store", date: "2024-09-05", type: "Плащане с карта", category: "Groceries", amount: 30 },
  { name: "Restaurant", date: "2024-09-04", type: "Плащане с карта", category: "Food", amount: 50 },
  { name: "Super market", date: "2024-09-04", type: "Плащане с карта", category: "Groceries", amount: 50 },
];

const categoryColors = {
  Food: "#3ACDEA",
  Groceries: "#32CD32",
  Entertainment: "#FFD700",
  Travel: "#1E90FF",
};

const defaultColor = "#D3D3D3";

// Function to calculate total spending by category
const calculateTotalByCategory = (data) => {
  return data.reduce((acc, entry) => {
    acc[entry.category] = (acc[entry.category] || 0) + entry.amount;
    return acc;
  }, {});
};

// Find the category with the highest spending
const getMaxSpendingCategory = (totals) => {
  return Object.entries(totals).reduce((max, current) => current[1] > max[1] ? current : max, ['', 0]);
};

// Calculate totals and determine the category with the maximum spending
const totalsByCategory = calculateTotalByCategory(data);
const [maxCategory, maxAmount] = getMaxSpendingCategory(totalsByCategory);

// Custom label component to display the top category and its amount in the center
const renderCustomLabel = ({ cx, cy }) => {
  return (
    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
      <tspan x={cx} dy="-1em" fontSize="16" fill={categoryColors[maxCategory] || defaultColor}>{maxCategory}</tspan>
      <tspan x={cx} dy="1.2em" fontSize="24" fill={categoryColors[maxCategory] || defaultColor}>{`${maxAmount.toFixed(2)} BGN`}</tspan>
    </text>
  );
};

const ProfilePieChart = () => (
  <ResponsiveContainer width={300} height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="amount"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={140}
        innerRadius={110}
        fill="#8884d8"
        labelLine={false}
        label={renderCustomLabel}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={categoryColors[entry.category] || defaultColor}
          />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

export default ProfilePieChart;
