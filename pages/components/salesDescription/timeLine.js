import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";

const TimeLineGraph = ({data}) => {
    console.log(data.slice(0, 50))
    
  return (
    <XYPlot width={300} height={300}>
      <HorizontalGridLines style={{ stroke: "#B7E9ED" }} />
      <VerticalGridLines style={{ stroke: "#B7E9ED" }} />
      <XAxis
        title="Date"
        style={{
          line: { stroke: "#ADDDE1" },
          ticks: { stroke: "#ADDDE1" },
          text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
        }}
      />
      <YAxis title="Sales" />
      <LineSeries
        className="first-series"
        data={data.slice(0, 5)}
        style={{
          strokeLinejoin: "round",
          strokeWidth: 2,
          fill: "none",
        }}
      />

    
    </XYPlot>
  );
};
export default TimeLineGraph;
