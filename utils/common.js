export function filterByYear(data, year) {
    console.log(year)
    const filteredData= data.filter(item => {
      const itemYear = new Date(item["Order Date"]).getFullYear();
      return itemYear === year;
    });
    return filteredData.sort((a, b) => new Date(a["Order Date"]) - new Date(b["Order Date"]))
  }
export function sortArrayByDate(orders){
    return orders.sort((a, b) => new Date(a["Order Date"]) - new Date(b["Order Date"]))
}
  