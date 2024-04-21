import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { CustomTooltip } from "../../../utils/common";

const TimeLineGraph = ({ dataset1, dataKey, color }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <LineChart
      width={500}
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
      <YAxis type="number" dataKey={dataKey} fontSize="12px" />
      <Tooltip content={<CustomTooltip />} />
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
