import React, { useEffect, useState } from 'react';
import { PieChart, Pie, LabelList, Tooltip } from 'recharts';

const PieChartComponent = ({ todos }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const notDoneCount = todos.filter(todo => !todo.isComplete).length;
    const doneCount = todos.length - notDoneCount;

    setData([
      { name: 'Not Done', value: notDoneCount },
      { name: 'Done', value: doneCount },
    ]);
  }, [todos]);

  return (
    <PieChart width={300} height={300}>
      <Pie dataKey="value" isAnimationActive={true} data={data} fill="#8884d8">
        <LabelList dataKey="name" position="inside" />
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export { PieChartComponent };
