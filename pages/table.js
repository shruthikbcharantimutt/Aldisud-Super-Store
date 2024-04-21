import React, { Suspense, useCallback, useEffect, useState } from "react";
import { fetchData, writeToExcel } from "../utils/getDataBackend";
import Dashboard from "./components/dashboard";
import Loader from "./components/common/loader";
import {
  filterByYear,
  sortArrayByDate,
  getSerializedData,
} from "./../utils/common";
const DashboardComponent = React.lazy(() => import("./components/dashboard"));
const TablePage = ({ lastYearOrders }) => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <DashboardComponent orders={lastYearOrders} />
      </Suspense>
    </>
  );
};
export async function getServerSideProps(context) {
  const data = await fetchData();

  const orders = JSON.parse(data["Orders"]);
  const returns = JSON.parse(data["Returns"]);
  const serializedData = getSerializedData(orders, returns);
  const lastYearOrders = filterByYear(serializedData, 2022);
  return {
    props: {
      lastYearOrders,
    },
  };
}

export default TablePage;
