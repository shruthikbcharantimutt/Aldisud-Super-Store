import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons/faTableColumns";
import { faChartLine } from "@fortawesome/free-solid-svg-icons/faChartLine";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const router = useRouter();
  if (!isMounted) {
    return null;
  }
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Sample Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link
              href="/"
              className="mx-2"
              onClick={() => router.push("/")}
            >
              <FontAwesomeIcon className="mr-4" icon={faHouse} />{" "}
              <b className="mx-1">Home</b>
            </Nav.Link>
            <Nav.Link
              href="/table"
              className="mx-2"
              onClick={() => router.push("/table")}
            >
              <FontAwesomeIcon className="mr-4" icon={faTableColumns} />
              <b className="mx-1">Table</b>
            </Nav.Link>
            <Nav.Link
              href="/graph"
              className="mx-2"
              onClick={() => router.push("/graph")}
            >
              <FontAwesomeIcon className="mr-4" icon={faChartLine} />
              <b className="mx-1">Graph</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
