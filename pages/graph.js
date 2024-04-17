import React, { useCallback, useEffect, useState } from "react";
import getData from "../utils/getData";
import DataGraph from "./components/dataGraphs"
const GraphPage=({returnData})=> {
  const {orders,people,returns}=returnData;
  return (
    <>
      <DataGraph orders={orders}/>
    </>
  );
}
export async function getServerSideProps(context) {
  const data = await getData();
  const {Orders,People,Returns}=data;
  const serializedData = Orders.map(order => ({
    ...order,
    "Order Date": order["Order Date"].toISOString(), // Assuming Order Date is a Date object
    "Ship Date": order["Ship Date"].toISOString() ,
    Sales: parseInt(order["Sales"].toString().replace(".", ",")),
     "Quantity": order["Quantity"],
    "Discount": parseInt(order["Profit"].toString().replace(".", ",")),
    Profit: parseInt(order["Profit"].toString().replace(".", ",")),
    
  }));

  // Days to ship ,Discount ,profit, profit ratio, Quantity ,returns, sales
  console.log("ggggg",serializedData[1])
  const returnData={
    orders: serializedData,
    people:People,
    returns:Returns
  }
  return {
    props: {
      returnData,
    },
  };
}
export default GraphPage
