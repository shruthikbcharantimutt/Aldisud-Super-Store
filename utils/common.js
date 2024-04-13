export function filterByYear(data, year) {
    console.log(year)
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
