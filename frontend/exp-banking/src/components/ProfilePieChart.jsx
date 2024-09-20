import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const categoryColors = {
  Food: "#3ACDEA",
  Groceries: "#32CD32",
  Entertainment: "#FFD700",
  Travel: "#1E90FF",
};

const defaultColor = "#D3D3D3";

const calculateTotalByCategory = (data) => {
  return data.reduce((acc, entry) => {
    const amount = parseFloat(entry.amount.replace(/[^\d.-]/g, ''));
    acc[entry.category] = (acc[entry.category] || 0) + amount;
    return acc;
  }, {});
};

const getMaxSpendingCategory = (totals) => {
  return Object.entries(totals).reduce((max, current) => current[1] < max[1] ? current : max, ['', 0]);
};

const renderCustomLabel = ({ cx, cy }, maxCategory, maxAmount) => {
  return (
    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
      <tspan x={cx} dy="-1em" fontSize="16" fill={categoryColors[maxCategory] || defaultColor}>{maxCategory}</tspan>
      <tspan x={cx} dy="1.2em" fontSize="24" fill={categoryColors[maxCategory] || defaultColor}>{`${maxAmount.toFixed(2)} BGN`}</tspan>
    </text>
  );
};

const ProfilePieChart = ({ transactions }) => {
  const totalsByCategory = calculateTotalByCategory(transactions);
  const [maxCategory, maxAmount] = getMaxSpendingCategory(totalsByCategory);
  
const pieData = Object.keys(totalsByCategory).map(category => ({
  name: category,
  value: Math.abs(totalsByCategory[category])
}));

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
          innerRadius={110}
          fill="#8884d8"
          labelLine={false}
          label={(props) => renderCustomLabel(props, maxCategory, maxAmount)}
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={categoryColors[entry.name] || defaultColor}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ProfilePieChart;
