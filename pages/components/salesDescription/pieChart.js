import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const PieChartGraph = ({ returnedOrdersCount, totalOrders }) => {
  const [isMounted, setIsMounted] = useState(false);
  // Sample data
  const data = [
    { name: "% of orders returned ", value: returnedOrdersCount },
    {
      name: "% of orders not returned",
      value: totalOrders - returnedOrdersCount,
    },
  ];

  // Colors for the pie chart
  const COLORS = ["#0088FE", "#00C49F"];
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
    <p>Total Number of orders in 2022: {totalOrders} </p>
     <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Tooltip />
      </Pie>
    </PieChart>
     
    </>
   
  );
};

export default PieChartGraph;
