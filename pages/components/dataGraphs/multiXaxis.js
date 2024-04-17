import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MultiYAxisChart = ({ data1, data2 }) => {
  return (
    <LineChart width={600} height={400} data={data1}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" domain={[0, 100]} />
      <YAxis yAxisId="right" orientation="right" domain={[200, 800]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value1" stroke="#8884d8" yAxisId="left" />
      <Line type="monotone" dataKey="value2" stroke="#82ca9d" yAxisId="right" />
    </LineChart>
  );
};

export default MultiYAxisChart;
