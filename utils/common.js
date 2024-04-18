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
export function getSerializedData(orders,returns){
  const returnsData=returns.map((r) => {return r["Order ID"]});
 let data= orders.map((order) => ({
    ...order, 
    daysToShip:  Math.floor((Date.parse(order["Ship Date"]) - Date.parse(order["Order Date"])) / 86400000),
    profitRatio: (parseFloat(parseInt(order["Profit"])/parseInt(order["Sales"]))*100),
    "Sales":parseInt(order["Sales"].toString().replace('.','')),
    "Profit":parseInt(order["Profit"].toString().replace('.','')),
    returns:(returnsData.includes(order["Order ID"]))?1:0
  }));
  return sortArrayByDate(data)
}
export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    let value;
    if (payload[0].name == "Sales" ) {
      value = `Sales in $ ${new Intl.NumberFormat("en-US", {})
        .format(payload[0].value)
        .replace(".", "")}`;
    } else  if (payload[0].name == "Profit" ) {
      value = `Profit in $  ${new Intl.NumberFormat("en-US", {})
        .format(payload[0].value)
        .replace(".", "")}`;
    } else if (payload[0].name == "profitRatio") {
      value = `Profit Ratio  ${payload[0].value}%`;
    } else if (payload[0].name == "daysToShip") {
      value = `Days to Ship: days ${payload[0].value} `;
    } else {
      value = ` ${payload[0].value}`;
    }
    return (
      <div className="custom-tooltip" style={{"background":"rgb(150, 150, 88)",padding:"8px",borderRadius:"8px"}}>
        <p className="label">{`Date: ${label}`}</p>
        <p className="value">{value}</p>
      </div>
    );
  }
  return null;
};