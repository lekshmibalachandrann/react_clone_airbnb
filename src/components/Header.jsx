import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';


const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/" className='text-danger fw-bold'><FontAwesomeIcon icon={faAirbnb} style={{color: "#e33f16",}} /> Airbnb Clone</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" className='text-dark'>Home</Nav.Link>
          <Nav.Link href="/search"  className='text-dark'>Search</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2 border-5"
            aria-label="Search"
          />
          <Button variant="outline-success" className='border-3 bg-success text-light'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
