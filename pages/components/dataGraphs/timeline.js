import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

 const TimelineChart=({data})=> {
 // static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
 let xValues=[];
 const formatDate = (date) => {
  if (xValues.includes(date.getMonth())) {
    xValues=[...xValues, date.getMonth()]
      return moment(date, "YYYY-MM-DD HH:mm:ss").format("MMMM")
  } return ''
}


    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="orderDate" />
          <XAxis scale="time" dataKey="orderDate" axisLine={false} tickLine={false} />

          <YAxis />
          <Tooltip />
          <Legend />
        
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
          <Line type="monotone" dataKey="discount" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="quantity" stroke="rgb(203 196 76)" />
          
          <Line type="monotone" dataKey="sales" stroke="rgb(63 31 178)" />
        </LineChart>
      </ResponsiveContainer>
    );
  
}
export default TimelineChart