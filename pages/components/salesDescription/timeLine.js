import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  //CustomTooltip
} from "recharts";
const CustomTooltip = ({ active, payload, label }) => {
 
  if (active && payload && payload.length) {
  
   let value;
   if(payload[0].name=="Sales"){
    value= `Sale  ${new Intl.NumberFormat('en-US', {  }).format(payload[0].value).replace('.', '')}`
   }else if(payload[0].name=="ProfitMargin"){
    value= `Profit in ${ new Intl.NumberFormat('en-US', {  }).format(payload[0].value).replace('.', '')}%`
   }else if(payload[0].name=="DaystoShip"){
    value= `Days to Ship: days ${payload[0].value} `
   }else{
    value= ` ${payload[0].value}`
   }
    return (
      <div className="custom-tooltip">
        <p className="label">{`Date: ${label}`}</p>
        <p className="value">{value}</p>
      </div>
    );
  }

  return null;
};

const TimeLineGraph = ({ dataset1, dataKey,color }) => {
  console.log(dataset1)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <LineChart
      width={600}
      height={400}
      data={dataset1}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="OrderDate" />
      <YAxis dataKey={dataKey}/>
      <Tooltip  content={<CustomTooltip />} />
      <Legend />
      <Line
        type="monotone"
        dataKey={dataKey}
        stroke={color}
        activeDot={{ r: 8 }}
      />
     
    </LineChart>
  );
};
export default TimeLineGraph;
