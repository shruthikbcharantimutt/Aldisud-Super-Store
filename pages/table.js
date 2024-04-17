import React, { useCallback, useEffect, useState } from "react";
import getData from "../utils/getData";
import Dashboard from "./components/dashboard";
import { filterByYear, sortArrayByDate } from "./../utils/common";

const TablePage = ({ lastYearOrders }) => {
  return (
    <>
      <Dashboard orders={lastYearOrders} />
    </>
  );
};
export async function getServerSideProps(context) {
  const data = await getData();
  const { Orders } = data;
  const serializedData = Orders.map((order) => ({
    ...order,
    "Order Date": order["Order Date"].toISOString(),
    "Ship Date": order["Ship Date"].toISOString(),
    Sales:  new Intl.NumberFormat('en-US', {  }).format(order["Sales"]).replace('.', ','),  
  //  Discount: new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(order["Sales"]).replace('.', ','),
    Profit:new Intl.NumberFormat('en-US', { }).format(order["Profit"]).replace('.', ','),
  }));
  const lastYearOrders = filterByYear(serializedData, 2022);
  return {
    props: {
      lastYearOrders,
    },
  };
}

export default TablePage;
