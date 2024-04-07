import TimeLineGraph from "./timeLine";
const SalesDescription = ({ orders }) => {
  let filtered_data = orders.map((order) => {
    return Object.fromEntries(
      Object.entries(order).filter(
        ([key]) => key === "Order Date" || key === "Sales"
      )
    );
  });
  const isWithinLastMonth = (timestamp) => {
    const oneMonthAgo = new Date().getTime() - 365 * 24 * 60 * 60 * 1000; // Timestamp one month ago
    return timestamp >= oneMonthAgo / 1000; // Convert milliseconds to seconds for comparison
  };
  [
    { x: 1, y: 3 },
    { x: 2, y: 5 },
    { x: 3, y: 15 },
    { x: 4, y: 12 },
  ];
  const data  = (filtered_data).map((obj) => {
    return { x: obj["Order Date"], y: obj["Sales"] };
  });

  
  
  return (
    <>
      <TimeLineGraph data={data} />
    </>
  );
};

export default SalesDescription;
