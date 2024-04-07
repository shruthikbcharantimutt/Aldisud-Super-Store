import React, { useCallback, useEffect, useState } from "react";
import getData from "../utils/getData";
import DataGraph from "./components/dataGraphs"
const GraphPage=()=> {
  return (
    <>
      <DataGraph/>
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
export default GraphPage
