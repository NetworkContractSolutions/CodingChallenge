import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const PieChartComponent = ({ todos }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const notDoneCount = todos.filter((todo) => !todo.isComplete).length;
    const doneCount = todos.length - notDoneCount;

    setData([
      { name: 'Not Done', value: notDoneCount },
      { name: 'Done', value: doneCount },
    ]);
  }, [todos]);

  const COLORS = ['#00C49F', '#0088FE'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = outerRadius + 30;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill={COLORS[index]} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {data[index].name}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          fill="#8884d8"
          innerRadius={50}
          outerRadius={80}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
