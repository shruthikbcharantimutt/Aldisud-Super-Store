import React, { useCallback, useEffect, useState } from "react";
import getData from "../utils/getData";
import Dashboard from "./components/dashboard";
const TablePage=({data}) =>{
  
  return (
    <>
      <Dashboard orders={data.Orders}/>
    </>
  );
}
export async function getServerSideProps(context) {
  const data = await getData();
  return {
    props: {
      data,
    },
  };
}

export default TablePage;