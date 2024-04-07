'use strict';

import { XYPlot, XAxis, YAxis, MarkSeries } from 'react-vis';
const BubbleChart = ({orders}) => {
  

  const data = [
    { x: 1, y: 10, size: 5 },
    { x: 2, y: 12, size: 8 },
    { x: 3, y: 8, size: 12 },
    { x: 4, y: 15, size: 7 },
    { x: 5, y: 11, size: 10 },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <XYPlot width={500} height={300} xDomain={[0, 6]} yDomain={[0, 20]}>
        <XAxis title="X Axis" />
        <YAxis title="Y Axis" />
        <MarkSeries
          data={data}
          sizeRange={[3, 15]} // Define the range of bubble sizes
          colorRange={['blue']} // Optional: You can define colors for the bubbles
        />
      </XYPlot>
    </div>
  );

}
export default BubbleChart;


