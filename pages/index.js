import React, { Suspense } from "react";
import { fetchData, writeToExcel } from "../utils/getDataBackend";
import SalesDescription from "./components/salesDescription";
import { getSerializedData } from "./../utils/common";
import Loader from "./components/common/loader";
const SalesDescriptionComponent = React.lazy(() =>
  import("./components/salesDescription")
);
const Home = ({ responseData }) => {
  const { orders, returns } = responseData;

  return (
    <>
    <Suspense fallback={<Loader/>}>
        <SalesDescriptionComponent orders={orders} returns={returns} />
      </Suspense>


    </>
  );
};

export async function getServerSideProps() {
  const data = await fetchData();

  const orders = JSON.parse(data["Orders"]);
  const returns = JSON.parse(data["Returns"]);
  const serializedData = getSerializedData(orders, returns);

  //const beforelastYearOrders = filterByYear(serializedData, 2021);*/

  const responseData = {
    orders: serializedData,
    returns: returns,
  };
  return {
    props: {
      responseData,
    },
  };
}
export default Home;
