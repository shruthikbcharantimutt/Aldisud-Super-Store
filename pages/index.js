import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import getData from "../utils/getData";
import SalesDescription from "./components/salesDescription";
import { RadialChart } from "react-vis";
import { filterByYear, sortArrayByDate } from "./../utils/common";
const Home = ({ superStoreData }) => {
 
  const { lastYearOrders, beforelastYearOrders, orders, people, returns } =
    superStoreData;

  let returnedOrdersCount = 0;

  lastYearOrders.map((order) => {
    if (
      returns
        .map((r) => {
          return r["Order ID"];
        })
        .includes(order["Order ID"])
    ) {
      returnedOrdersCount = returnedOrdersCount + 1;
    }
  });
  
  return (
    <>
      <SalesDescription
        lastYearOrders={lastYearOrders}
        returnedOrdersCount={returnedOrdersCount}
      />
    </>
  );
};

export async function getServerSideProps() {
  const data = await getData();

  const { Orders, People, Returns } = data;
  const serializedData = Orders.map((order) => ({
    ...order,
    "Order Date": order["Order Date"].toISOString(),
    "Ship Date": order["Ship Date"].toISOString(),
  }));
  const lastYearOrders = filterByYear(serializedData, 2022);
  const beforelastYearOrders = filterByYear(serializedData, 2021);

  const superStoreData = {
    lastYearOrders: lastYearOrders,
    beforelastYearOrders: beforelastYearOrders,
    orders: serializedData,
    people: People,
    returns: Returns,
  };
  return {
    props: {
      superStoreData,
    },
  };
}
export default Home;
