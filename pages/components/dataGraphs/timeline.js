import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalBarSeries,LineSeries } from 'react-vis';

const TimelineChart = () => {
  // Sample data for the timeline chart
  const data = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 6, y: 2 },
    { x: 8, y: 4 },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <XYPlot width={500} height={300} yType="ordinal">
        <XAxis />
        <YAxis />
        <HorizontalBarSeries data={data} />
        <LineSeries
        className="first-series"
        data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
        style={{
          strokeLinejoin: 'round',
          strokeWidth: 4
        }}
      />
      </XYPlot>
    </div>
  );
};

export default TimelineChart;
