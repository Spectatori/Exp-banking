import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const data = [
  { name: "", population: 21500000, color: "rgba(131, 167, 234, 1)" },
];

const ProfilePieChart = () => (
  <PieChart width={400} height={400}>
    <Pie
      data={data}
      dataKey="population"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={150}
      fill="#8884d8"
      label
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default ProfilePieChart;