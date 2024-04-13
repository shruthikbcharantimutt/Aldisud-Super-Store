import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AreaGraph = ({ dataset1 }) => {
  return (
    <AreaChart width={600} height={400} data={dataset1}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="OrderDate" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="DaystoShip"  stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default AreaGraph;
