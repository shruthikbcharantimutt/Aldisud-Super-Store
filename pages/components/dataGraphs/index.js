import DualAxisChart from "./bubbleChart";
import TimelineChart from "./timeline";
import { Row, Col, Container, Form } from "react-bootstrap";
import "../../../styles/Home.module.css";
import { useEffect, useState } from "react";
import {
  calculateAverageMonthlyData,
  calculateAverageWeeklyData,
  calculateAverageQuarterData,
  calculateAverageYearlyData,
} from "./../../getaverageData";

const DataGraph = ({ orders }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const [graphData, setGraphData] = useState({});
  const [dataGranularity, setDataGranularity] = useState("month");
  useEffect(() => {
    if (dataGranularity === "week") {
      const data = calculateAverageWeeklyData(orders);

      setGraphData(data);
    } else if (dataGranularity === "month") {
      const data = calculateAverageMonthlyData(orders);

      setGraphData(data);
    } else if (dataGranularity === "quarter") {
      const data = calculateAverageQuarterData(orders);

      setGraphData(data);
    } else if (dataGranularity === "year") {
      const data = calculateAverageYearlyData(orders);

      setGraphData(data);
    }
  }, [dataGranularity]);

  const handleDataGranularity = (e) => {
    setDataGranularity(e.target.value);
  };
  if (!isMounted) {
    return null;
  }
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <h1>Data Graph</h1>
        </Col>
        <Col lg={6}>
          <Form.Label>Select Data Granularity</Form.Label>
          <Form.Select
            value={dataGranularity}
            name="dataGranularity"
            onChange={handleDataGranularity}
          >
            <option value="week">Week</option>
            <option value="month">Monthly</option>
            <option value="quarter">Quarter</option>
            <option value="year">Yearly</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="my-4 ml-auto mr-auto">
          <DualAxisChart data={graphData} />
        </Col>
      </Row>
      <Row className="my-4 ml-auto mr-auto">
        <Col lg={6} className="my-4 ml-auto mr-auto">
          <TimelineChart data={graphData} />
        </Col>
      </Row>
    </Container>
  );
};

export default DataGraph;
