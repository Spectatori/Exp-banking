  import React from 'react';
  import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

  const categoryColors = {
    "Храна": {
      Name: "Храна",
      Color: "#a6f791",
    },
    "Забавление": {
      Name:"Забавление",
      Color: "#8683ce",
    },
    "Пътуване": {
      Name: "Пътуване",
      Color: "#00c9f4",
    },
    "Хранителни стоки": {
      Name: "Хранителни стоки",
      Color: "#f9f871",
    }
  };

  const defaultColor = "#D3D3D3";

  const calculateTotalByCategory = (data) => {
    return data.reduce((acc, entry) => {
      const amount = typeof entry.amount === 'string'
      ? parseFloat(entry.amount.replace(/[^\d.-]/g, ''))
      : parseFloat(entry.amount)
      acc[entry.details] = (acc[entry.details] || 0) + amount;
      return acc;
    }, {});
  };

  const getMaxSpendingCategory = (totals) => {
    return Object.entries(totals).reduce((max, current) => current[1] < max[1] ? current : max, ['', 0]);
  };

  const renderCustomLabel = ({ cx, cy }, maxCategory, maxAmount) => {
    return (
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
        <tspan x={cx} dy="-1em" fontSize="16" fill={categoryColors[maxCategory]?.Color || defaultColor}>{maxCategory}</tspan>
        <tspan x={cx} dy="1.2em" fontSize="24" fill={categoryColors[maxCategory]?.Name || defaultColor}>{`${maxAmount.toFixed(2)} BGN`}</tspan>
      </text>
    );
  };

  const ProfilePieChart = ({ transactions }) => {
    const totalsByCategory = calculateTotalByCategory(transactions);
    const [maxCategory, maxAmount] = getMaxSpendingCategory(totalsByCategory);
    
  const pieData = Object.keys(totalsByCategory)
    .filter(category => category !== "Заплата")
    .map(category => ({
    name: category,
    value: Math.abs(totalsByCategory[category]),
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
                fill={categoryColors[entry.name]?.Color || defaultColor}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  export default ProfilePieChart;
