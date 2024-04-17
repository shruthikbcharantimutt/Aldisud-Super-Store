import BubbleChart from "./bubbleChart";
import Example from "./bubbleCharts2";
import TimelineChart from "./timeline";
import { Row, Col,Container,Form } from 'react-bootstrap';
import '../../../styles/Home.module.css';
import { useState } from "react"; 
const DataGraph=({orders}) =>{
const [timelineParam,setTimeLineParam]=useState("Profit");
const [dataGranularity,setDataGranularity]=useState("")
const timelineData=orders.slice(0,12).map((order)=>{
  return {
    orderDate:(order["Order Date"]).split("T")[0],
    daystoShip:  Math.floor((Date.parse(order["Ship Date"]) - Date.parse(order["Order Date"])) / 86400000),
    profit:(order.Profit).toFixed(2),
    discount:(order.Discount).toFixed(2),
    quantity:order.Quantity,
    sales:(order.Sales).toFixed(2),
    DaysToShip:Math.floor((Date.parse(order["Ship Date"]) - Date.parse(order["Order Date"])) / 86400000)
   // quantity:order.Quantity,
  }
})
const bubbleChartData=orders.slice(0,12).map((order)=>{
 
  return {
   // orderDate:(order["Order Date"]).split("T")[0],
    //daystoShip:  Math.floor((Date.parse(order["Ship Date"]) - Date.parse(order["Order Date"])) / 86400000),
    profit:(order.Profit).toFixed(2),
    //discount:(order.Discount).toFixed(2),
    quantity:order.Quantity,
   // sales:(order.Sales).toFixed(2),
    //quantity:order.Quantity,
  }
})

  return (
    <Container>
     <h2>Data Representation</h2>
     <Form.Select
          value={dataGranularity}
          name="dataGranularity"
          onChange={(e) => {
            setDataGranularity(e.target.value);
          }}
          
        >
          <option>Week</option>
          <option>Monthly</option>
          <option>Quarter</option>
          <option>Yearly</option>
        </Form.Select>
     <Row className="my-4 ml-auto mr-auto">
      <Col lg={6} className="my-4 ml-auto mr-auto">
      <TimelineChart data={timelineData}/>
      </Col>
      <Col lg={6} className="my-4 ml-auto mr-auto">
      <BubbleChart data={bubbleChartData} orders={orders}/>
      <Example orders={orders}/>
      </Col>
    </Row>

  
    
    </Container>
  );
}


export default DataGraph;