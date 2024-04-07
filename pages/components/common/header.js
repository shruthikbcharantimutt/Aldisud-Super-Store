import {Navbar,Container,Nav} from 'react-bootstrap';
import { useRouter } from 'next/router'


const Header=()=> {
  const router = useRouter()
  return (
    <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Sample Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" onClick={() => router.push('/')}>Home</Nav.Link>
          <Nav.Link href="/table" onClick={() => router.push('/table')}>Table</Nav.Link>
          <Nav.Link href="/graph" onClick={() => router.push('/graph')}>Graph</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export default Header;