import React, { PureComponent, useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomToolTip from "../../../utils/common";
import { Row, Col } from "react-bootstrap";

const TimelineChart = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const timelineData = Object.keys(data).map((elem) => {
    return {
      orderDate: elem,
      daystoShip: parseInt(data[elem].daysToShip / data[elem].count),
      discount: (data[elem].discount / data[elem].count).toFixed(2),
      quantity: Math.round(data[elem].quantity / data[elem].count),
      profitRatio: (data[elem].profitRatio / data[elem].count).toFixed(2),
      returns: data[elem].returns,
      totalSales: data[elem].totalSales,
      totalProfit: data[elem].totalProfit,
    };
  });
  console.log("eeeee",timelineData)

  if (!isMounted) {
    return null;
  }
  return (
    <Row>
      <Col>
        <LineChart
          width={800}
          height={500}
          data={timelineData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="orderDate" />

          <YAxis fontSize="12px" />
          <Tooltip/>
          <Legend />

          <Line
            type="monotone"
            dataKey="totalSales"
            stroke="#ffc658"
            name="Total Sales in $"
          />

          <Line
            type="monotone"
            dataKey="totalProfit"
            stroke="#ff0000"
            name="Total Profit in $"
          />
        </LineChart>
      </Col>
      <Col>
        <LineChart
          width={800}
          height={500}
          data={timelineData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="orderDate" />

          <YAxis fontSize="12px" />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="daystoShip"
            stroke="#8884d8"
            name="Average Days to Ship"
          />
          <Line
            type="monotone"
            dataKey="quantity"
            stroke="#008000"
            name="Average Quantity"
          />

          <Line
            type="monotone"
            dataKey="returns"
            stroke="#c1cb3d"
            name="Returns"
          />
          <Line
            type="monotone"
            dataKey="discount"
            stroke="#c1cb3d"
            name="Average Discount"
          />
          <Line
            type="monotone"
            dataKey="profitRatio"
            stroke="violet"
            name="Average Profit Ratio"
          />
        </LineChart>
      </Col>
    </Row>
  );
};
export default TimelineChart;
