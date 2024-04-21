import TimeLineGraph from "./timeLine";
import PieChartGraph from "./pieChart";
import { calculateAverageMonthlyData } from "./../../getaverageData";
import React, { useState, useEffect, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import { filterByYear } from "../../../utils/common";

const SalesDescription = ({ orders, returns }) => {
  const lastYearOrders = filterByYear(orders, 2022);
  const averageMonthlydataLastYear = calculateAverageMonthlyData(orders);
  const [isMounted, setIsMounted] = useState(false);
  const saleData = Object.keys(averageMonthlydataLastYear).map((elem) => {
    return {
      OrderDate: elem,
      Sales: averageMonthlydataLastYear[elem].totalSales,
    };
  });
  const totalSales = lastYearOrders.reduce(
    (total, obj) => total + obj["Sales"],
    0
  );

  const profitData = Object.keys(averageMonthlydataLastYear).map((elem) => {
    return {
      OrderDate: elem,
      Profit: averageMonthlydataLastYear[elem].totalProfit,
    };
  });

  const profitRatioData = Object.keys(averageMonthlydataLastYear).map(
    (elem) => {
      return {
        OrderDate: elem,
        profitRatio: (
          averageMonthlydataLastYear[elem].profitRatio /
          averageMonthlydataLastYear[elem].count
        ).toFixed(2),
      };
    }
  );

  const daysToShipData = Object.keys(averageMonthlydataLastYear).map((elem) => {
    return {
      OrderDate: elem,
      daysToShip: parseInt(
        averageMonthlydataLastYear[elem].daysToShip /
          averageMonthlydataLastYear[elem].count
      ),
    };
  });
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

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <section className="container">
        <h2>
          Data Graph for year 2022 :representing Average sales, Profit Ratio and
          Days to Ship
        </h2>
        <Row className="my-4">
          <Col className="p-4">
            <TimeLineGraph
              dataset1={saleData}
              dataKey="Sales"
              color="#ff7f50"
            />
            <h6>Total Sales for year 2022: ${totalSales}</h6>
          </Col>
          <Col className="p-4">
            <TimeLineGraph
              dataset1={profitData}
              dataKey="Profit"
              color="#8884d8"
            />
          </Col>
          <Col className="p-4">
            <TimeLineGraph
              dataset1={profitRatioData}
              dataKey="profitRatio"
              color="#8884d8"
            />
          </Col>
          <Col className="p-4">
            <TimeLineGraph
              dataset1={daysToShipData}
              dataKey="daysToShip"
              color="#8884d8"
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <PieChartGraph
            returnedOrdersCount={returnedOrdersCount}
            totalOrders={lastYearOrders.length}
          />
        </Row>
      </section>
    </>
  );
};

export default SalesDescription;
