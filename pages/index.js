import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import  {fetchData,writeToExcel}  from "../utils/getDataBackend";
import SalesDescription from "./components/salesDescription";
import { RadialChart } from "react-vis";
import { filterByYear, sortArrayByDate,getSerializedData } from "./../utils/common";


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
  
  const orders=JSON.parse(data["Orders"]);
  const returns=JSON.parse(data["Returns"]);
  const serializedData =getSerializedData(orders,returns)

  //const beforelastYearOrders = filterByYear(serializedData, 2021);*/

  const responseData = {
    orders:serializedData,
    returns:returns
  };
  return {
    props: {
      responseData
    },
  };
}
export default Home;
