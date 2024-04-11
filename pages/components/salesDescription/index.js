import TimeLineGraph from "./timeLine";
import RadialChart1 from "./radialChart";
import PieChartGraph  from "./pieChart";
import { calculateAverageMonthlyData } from "./../../getaverageData";
import { filterByYear, sortArrayByDate } from "../../../utils/common";


const SalesDescription = ({ lastYearOrders ,returnedOrdersCount}) => {
  let averageMonthlydataLastYear = calculateAverageMonthlyData(lastYearOrders);

  let graphData1 = Object.keys(averageMonthlydataLastYear).map((elem) => {
    return {
      OrderDate: elem,
      Sales: averageMonthlydataLastYear[elem].averageSales,
      Profit:averageMonthlydataLastYear[elem].averageProfit,
    };
  });

  
  
//console.log(count,lastYearOrders.length)
  return (
    <>
      <h2>Data Graph for year 2022 representing Monnths, Average sales and Profit</h2>
      <TimeLineGraph dataset1={graphData1}/>
      <h2>Data Graph for year 2022 representing Number of orders Returns</h2>
      <PieChartGraph returnedOrdersCount={returnedOrdersCount} totalOrders={lastYearOrders.length}/>
     
    </>
  );
};

export default SalesDescription;
