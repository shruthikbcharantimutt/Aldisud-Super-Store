import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { CustomTooltip } from "../../../utils/common";

const DualAxisChart = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  const bubbleChart = Object.keys(data).map((elem) => {
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

  const selectOption = [
    "daystoShip",
    "discount",
    "totalProfit",
    "totalSales",
    "quantity",
     "returns",
    "profitRatio",
  ];
  const [xKey, setXkey] = useState();
  const [yKey, setYkey] = useState();
  const [bubbleChartData, setBubbleChartData] = useState([]);

  const getBubbleChartData = (xKey, yKey) => {
    return Object.keys(bubbleChart).map((elem) => {
      console.log(bubbleChart);
      return {
        OrderDate: bubbleChart[elem].orderDate,
        [xKey]: bubbleChart[elem][xKey],
        [yKey]: bubbleChart[elem][yKey],
      };
    });
  };

  useEffect(() => {
    const data = getBubbleChartData(xKey, yKey);
    setBubbleChartData(data);
    setIsMounted(true);
  }, [xKey, yKey]);

  if (!isMounted) {
    return null;
  }
  // console.log("yyyy",bubbleChartData)
  return (
    <>
      <div>
        <Row>
          <Col lg="6">
            <Form.Select
              value={xKey}
              name="xKey"
              onChange={(e) => {
                setXkey(e.target.value);
              }}
            >
              <option>Select axis 1 key</option>
              {selectOption.map((x) => {
                return (
                  <option
                    key={x}
                    value={x}
                    style={{ "text-transform": "capitalize" }}
                  >
                    {x}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
          <Col lg="6">
            <Form.Select
              value={yKey}
              name="yKey"
              onChange={(e) => {
                setYkey(e.target.value);
              }}
              disabled={xKey ? false : true}
            >
              <option>Select axis 2 Key</option>
              {selectOption.map((y) => {
                if (y != xKey) {
                  return (
                    <option
                      key={y}
                      value={y}
                      style={{ "text-transform": "capitalize" }}
                    >
                      {y}
                    </option>
                  );
                }
              })}
            </Form.Select>
          </Col>
        </Row>

        <ComposedChart
          width={800}
          height={400}
          data={bubbleChartData}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="OrderDate" scale="date" />
          <Tooltip />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#8884d8"
            fontSize="12px"
          />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar dataKey={xKey} barSize={20} fill="#413ea0" yAxisId="left" />
          <Line
            type="monotone"
            dataKey={yKey}
            stroke="#82ca9d"
            yAxisId="right"
          />
        </ComposedChart>
      </div>
    </>
  );
};

export default DualAxisChart;
