import TimeLineGraph from "./timeLine";
import AreaGraph  from "./areaChart";
import PieChartGraph  from "./pieChart";
import { calculateAverageMonthlyData } from "./../../getaverageData";
import React, { useState, useEffect } from "react";

const SalesDescription = ({ lastYearOrders ,returnedOrdersCount}) => {
  let averageMonthlydataLastYear = calculateAverageMonthlyData(lastYearOrders);
  const [isMounted, setIsMounted] = useState(false);
  let graphData1 = Object.keys(averageMonthlydataLastYear).map((elem) => {
    return {
      OrderDate: elem,
      Sales: averageMonthlydataLastYear[elem].averageSales,
      Profit:averageMonthlydataLastYear[elem].averageProfit,
      DaystoShip:averageMonthlydataLastYear[elem].daystoShip,
    };
  });
  let graphData2 = Object.keys(averageMonthlydataLastYear).map((elem) => {
    return {
      OrderDate: elem,  
      DaystoShip:averageMonthlydataLastYear[elem].daystoShip,
    };
  });
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <section className="container">
      <h2>Data Graph for year 2022 representing Months, Average sales and Profit</h2>
      <TimeLineGraph dataset1={graphData1}/>
      <AreaGraph dataset1={graphData2}/>
      <h2>Data Graph for year 2022 representing Number of orders Returns</h2>
      <PieChartGraph returnedOrdersCount={returnedOrdersCount} totalOrders={lastYearOrders.length}/>
     
    </section>
  );
};

export default SalesDescription;
