import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import getData from "../utils/getData";
import SalesDescription from "./components/salesDescription";
const Home = ({ data }) => {
  
  const {Orders}=data
  
  return (
    <>
      <SalesDescription orders={Orders}/>
    </>
  );
};

export async function getServerSideProps(context) {
  const data = await getData();
  return {
    props: {
      data,
    },
  };
}
export default Home;
