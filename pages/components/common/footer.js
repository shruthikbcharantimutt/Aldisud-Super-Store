import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="bg-dark text-white footer-div" style={{position:"fixed",width:"100%",bottom:0}}>
      <Container>
        <Row>
          <Col>
          
            <p className="text-center  mt-2 ml-auto mr-auto ">
              Footer Section &copy; {new Date().getFullYear()} Aldi Sud
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
