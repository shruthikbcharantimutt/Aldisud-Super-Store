import React from 'react';
import { RadialChart } from 'react-vis';

const RadialChart1 = ({count,ordersLength}) => {
    //console.log(count,ordersLength)
    const p1= count*100/ordersLength.toFixed(2);
    const p2= (ordersLength-count)*100/ordersLength.toFixed(2);
   // console.log(p1,p2)
  const data = [
    { angle: p1, color: "#FFF", label:"", name: "Items Returned"},
    { angle: p2,  color: "#000",label:"Items Not Returned",  name: "Items Not Returned" },
  ];

  return (
    <RadialChart
      data={data}
      width={300}
      height={300}
      showLabels
      labelsAboveChildren
      labelsRadiusMultiplier={1.1}
      labelsStyle={{
        fontSize: 12,
        fill: '#000',
      }}
    />
  );
};

export default RadialChart1;
