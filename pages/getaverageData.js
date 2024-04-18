// Function to calculate average monthly data
export function calculateAverageMonthlyData(data) {
  const aggregatedData = {};
  // Loop through each data point
  data.forEach(item => {
    const date = new Date(item["Order Date"]);
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const key = `${month} ${year}`;
  
    // Add value to the corresponding month
   if (!aggregatedData[key]) {
      aggregatedData[key] = {
        totalSales: 0,
        count: 0,
        averageSales:0,
        totalProfit:0,
        profitRatio:0,
        daysToShip:0,
        discount:0,
        quantity:0,
        returns:0
      };
    }
   
    aggregatedData[key].totalSales += item["Sales"];
    aggregatedData[key].totalProfit += item["Profit"];
    aggregatedData[key].count++;
    //aggregatedData[key].averageSales=aggregatedData[key].totalSales/30
    aggregatedData[key].profitRatio +=(item.profitRatio)
    aggregatedData[key].daysToShip+=item["daysToShip"]
    aggregatedData[key].discount+=item["Discount"]
    aggregatedData[key].quantity+=item["Quantity"]
    aggregatedData[key].returns+=item.returns
    
    
  });
return aggregatedData;
}


// Calculate average Yearly data


export function calculateAverageYearlyData(data) {
  const aggregatedData = {};
  // Loop through each data point
  data.forEach(item => {
    const date = new Date(item["Order Date"]);
    const year = date.getFullYear();
    const key = `${year}`;
  
    // Add value to the corresponding month
   if (!aggregatedData[key]) {
      aggregatedData[key] = {
        totalSales: 0,
        count: 0,
        averageSales:0,
        totalProfit:0,
        profitMargin:0,
        daysToShip:0,
        discount:0,
        quantity:0,
        returns:0
      };
    }
   
    const  differenceMs = Math.abs(new Date(item["Ship Date"]) - new Date(item["Order Date"]));
    const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    aggregatedData[key].totalSales += item["Sales"];
    aggregatedData[key].totalProfit += item["Profit"];
    aggregatedData[key].count++;
    //aggregatedData[key].averageSales=aggregatedData[key].totalSales/30
    aggregatedData[key].profitRatio+=(item.profitRatio)
    aggregatedData[key].daysToShip=differenceDays;
    aggregatedData[key].discount+=item["Discount"]
    aggregatedData[key].quantity+=item["Quantity"]
    aggregatedData[key].returns+=item.returns
    
    
  });
return aggregatedData;
 
}

export function calculateAverageQuarterData(data) {
  const aggregatedData = {};
  // Loop through each data point
  data.forEach(item => {
    const date = new Date(item["Order Date"]);
    const quarter = Math.floor((date.getMonth() + 3) / 3); // Calculate quarter (1, 2, 3, 4)
    const year = date.getFullYear();
    const key = `${year}-Q${quarter}`;

    // Add value to the corresponding month
   if (!aggregatedData[key]) {
      aggregatedData[key] = {
        totalSales: 0,
        count: 0,
        averageSales:0,
        totalProfit:0,
        profitMargin:0,
        daysToShip:0,
        discount:0,
        quantity:0,
        returns:0
      };
    }
   
    const  differenceMs = Math.abs(new Date(item["Ship Date"]) - new Date(item["Order Date"]));
    const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    aggregatedData[key].totalSales += item["Sales"];
    aggregatedData[key].totalProfit += item["Profit"];
    aggregatedData[key].count++;
    //aggregatedData[key].averageSales=aggregatedData[key].totalSales/30
    aggregatedData[key].profitRatio+=(item.profitRatio)
    aggregatedData[key].daysToShip+=differenceDays;
    aggregatedData[key].discount+=item["Discount"]
    aggregatedData[key].quantity+=item["Quantity"]
    aggregatedData[key].returns+=item.returns
    
    
  });
return aggregatedData;
 
}

export function calculateAverageWeeklyData(data) {
  const aggregatedData = {};
  // Loop through each data point
  data.forEach(item => {
    const date = new Date(item["Order Date"]);
    const weekNumber = getWeekNumber(date);
    const year = date.getFullYear();
    const key = `${year}-W${weekNumber}`;

    // Add value to the corresponding month
   if (!aggregatedData[key]) {
      aggregatedData[key] = {
        totalSales: 0,
        count: 0,
        averageSales:0,
        totalProfit:0,
        profitMargin:0,
        daysToShip:0,
        discount:0,
        quantity:0,
        returns:0
      };
    }
   
    const  differenceMs = Math.abs(new Date(item["Ship Date"]) - new Date(item["Order Date"]));
    const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    aggregatedData[key].totalSales += item["Sales"];
    aggregatedData[key].totalProfit += item["Profit"];
    aggregatedData[key].count++;
    //aggregatedData[key].averageSales=aggregatedData[key].totalSales/30
    aggregatedData[key].profitRatio+=(item.profitRatio)
    aggregatedData[key].daysToShip=differenceDays;
    aggregatedData[key].discount+=item["Discount"]
    aggregatedData[key].quantity+=item["Quantity"]
    aggregatedData[key].returns+=item.returns
    
    
  });
return aggregatedData;
}


// Function to get the week number of a given date
const getWeekNumber = (date) => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
};
