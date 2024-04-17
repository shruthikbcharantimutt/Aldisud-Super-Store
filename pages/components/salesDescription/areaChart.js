import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AreaGraph = ({ dataset1,dataKey }) => {
  return (
    <AreaChart width={500} height={300} data={dataset1}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="OrderDate" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey={dataKey}  stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default AreaGraph;
