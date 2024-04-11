import React, { PureComponent, useEffect, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Form from "react-bootstrap/Form";

const BubbleChart = ({  orders }) => {
  const selectOption = ["Discount", "Profit", "Quantity", "Sales"];
  const [xKey, setXkey] = useState(""); 
  const [yKey, setYkey] = useState("");
  const [bubbleChartData, setBubbleChartData] = useState([]);

  const getBubbleChartData = (xKey, yKey) => {
   
    return orders.slice(0, 12).map((order) => {
      return {
        [xKey]: (order[xKey]),
        [yKey]: (order[yKey]),
      };
    });
  };
  useEffect(() => {
    let data = getBubbleChartData(xKey, yKey);
    setBubbleChartData(data);
  }, [xKey, yKey]);

  return (
    <>
      <div>
        <Form.Select
          value={xKey}
          name="xKey"
          onChange={(e) => {
            setXkey(e.target.value);
          }}
        >
          <option>Select X axis key</option>
          {selectOption.map((x) => {
            return <option value={x}>{x}</option>;
          })}
        </Form.Select>
        <Form.Select
          value={yKey}
          name="yKey"
          onChange={(e) => {
            setYkey(e.target.value);
          }}
          disabled={xKey ? false : true}
        >
          <option>Select Y axis Key</option>
          {selectOption.map((y) => {
            if (y != xKey) {
              return <option value={y}>{y}</option>;
            }
          })}
        </Form.Select>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey={xKey} label={xKey} name={xKey} />
          <YAxis type="number" dataKey={yKey} label={yKey} name={yKey} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="A school" data={bubbleChartData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
};
export default BubbleChart;
