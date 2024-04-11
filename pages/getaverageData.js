import { AgGridReact } from "ag-grid-react";

// Example JSON data
const jsonData = [
  { "date": "2023-10-15", "value": 10 },
  { "date": "2023-10-20", "value": 20 },
  { "date": "2023-11-08", "value": 15 },
  { "date": "2023-11-10", "value": 25 },
  { "date": "2023-12-05", "value": 30 }
];

// Function to calculate average monthly data
export function calculateAverageMonthlyData(data) {
  const aggregatedData = {};

  // Loop through each data point
  data.forEach(item => {
    //console.log(item)
    
    const date = new Date(item["Order Date"]);
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const key = `${month} ${year}`;
  //console.log(item["Order Date"],key)
    // Add value to the corresponding month
   if (!aggregatedData[key]) {
      aggregatedData[key] = {
        totalSales: 0,
        count: 0,
        averageSales:0,
        totalProfit:0,
        averageProfit:0
      };
    }
    
    aggregatedData[key].totalSales += item["Sales"];
    aggregatedData[key].totalProfit += item["Profit"];
    aggregatedData[key].count++;
    aggregatedData[key].averageSales=aggregatedData[key].totalSales/30
    aggregatedData[key].averageProfit=aggregatedData[key].totalProfit/30
    
    
  });

console.log(aggregatedData)
return aggregatedData


  // Calculate average for each month
  /*const averageMonthlyData = {};
  Object.entries(aggregatedData).forEach(([key, value]) => {
    const [month, year] = key.split(' ');
    const daysInMonth = new Date(year, new Date(Date.parse(month + " 1, " + year)).getMonth() + 1, 0).getDate();
    averageMonthlyData[key] = value.total / daysInMonth;
  });
  console.log(averageMonthlyData);
  return averageMonthlyData;*/
}


// Calculate average monthly data


