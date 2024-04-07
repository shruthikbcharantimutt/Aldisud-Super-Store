import BubbleChart from "./bubbleChart";
import TimelineChart from "./timeline";
import { Row, Col,Container } from 'react-bootstrap';
import '../../../styles/Home.module.css'; 
const DataGraph=({orders}) =>{

  return (
    <Container>
     <h2>Data Representation</h2>
     
     <Row className="my-4 ml-auto mr-auto">
      <Col lg={6} className="my-4 ml-auto mr-auto">
      <TimelineChart/>
      </Col>
      <Col lg={6} className="my-4 ml-auto mr-auto">
      <BubbleChart/>
      </Col>
    </Row>

  
    
    </Container>
  );
}


export default DataGraph;