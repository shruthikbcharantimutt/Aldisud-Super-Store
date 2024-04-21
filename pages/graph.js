import React, { useCallback, useEffect, useState, Suspense } from "react";
import { fetchData, writeToExcel } from "../utils/getDataBackend";
//import DataGraph from "./components/dataGraphs"
import {
  filterByYear,
  sortArrayByDate,
  getSerializedData,
} from "./../utils/common";
import Loader from "./components/common/loader";
const DataGraph = React.lazy(() => import("./components/dataGraphs"));
const GraphPage = ({ returnData }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  const { orders } = returnData;
  return (
    <>
      <Suspense fallback={<Loader />}>
        <DataGraph orders={orders} />
      </Suspense>
    </>
  );
};
export async function getServerSideProps(context) {
  const data = await fetchData();

  const orders = JSON.parse(data["Orders"]);
  const returns = JSON.parse(data["Returns"]);
  const serializedData = getSerializedData(orders, returns);

  // Days to ship ,Discount ,profit, profit ratio, Quantity ,returns, sales
  const returnData = {
    orders: serializedData,
    //people:People,
    returns: returns,
  };
  return {
    props: {
      returnData,
    },
  };
}
export default GraphPage;
