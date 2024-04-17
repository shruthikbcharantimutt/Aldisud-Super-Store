export function filterByYear(data, year) {
    const filteredData=  data.filter(item => {
      const itemYear = new Date(item["Order Date"]).getFullYear();
      return itemYear === year &&  new Date(item["Order Date"])> new Date(`01-01-${year}`);
    });

    return filteredData.sort((a, b) => new Date(a["Order Date"]) - new Date(b["Order Date"]))
  }
export function sortArrayByDate(orders){
    return orders.sort((a, b) => new Date(a["Order Date"]) - new Date(b["Order Date"]))
}
  
export function getUniqueElementsByKey(array, key) {
  const values = array.map(obj => obj[key]); // Extract values of the specified key
  const uniqueValues = [...new Set(values)]; // Get unique values using Set
  return uniqueValues;
}
export function getSerializedData(orders){
  
 return orders.map((order) => ({
    ...order,
    daysToShip:  Math.floor((Date.parse(order["Ship Date"]) - Date.parse(order["Order Date"])) / 86400000),
    profitRatio: (order["Profit"]/order["Sales"])*100,
    "Sales":parseInt(order["Sales"].toString().replace('.','')),
    "Profit":parseInt(order["Profit"].toString().replace('.','')),
  }));
}