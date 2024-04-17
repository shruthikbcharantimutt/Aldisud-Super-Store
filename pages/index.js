import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import fetchData from "../utils/getDataBackend";
import SalesDescription from "./components/salesDescription";
import { RadialChart } from "react-vis";


const Home = ({ responseData }) => {
 
  const { orders, returns } =responseData;
 
 
  return (
    <>
     <SalesDescription
        orders={orders}
        returns={returns}
      />
    </>
  );
};

export async function getServerSideProps() {
  const data = await fetchData();
  
  const orders=data["Orders"];
  const returns=data["Returns"]
 
 /* const { Orders, People, Returns } = data;
  const serializedData = Orders.map((order) => ({
    ...order,
    "Order Date": order["Order Date"].toISOString(),
    "Ship Date": order["Ship Date"].toISOString(),
  }));
 
  const beforelastYearOrders = filterByYear(serializedData, 2021);*/

  const responseData = {
    "orders":JSON.parse(orders),
    'returns':JSON.parse(returns)
  };
  return {
    props: {
      responseData
    },
  };
}
export default Home;
