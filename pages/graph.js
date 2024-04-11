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
    "Ship Date": order["Ship Date"].toISOString() 
  }));
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
