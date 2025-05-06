import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './App.css';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#B13E81' }} variant="dark" expand="lg" sticky="top">
      <Container>
        {/* "My Portfolio" links to #about */}
        <Navbar.Brand href="#about" style={{paddingRight:'15px'}}>My Portfolio</Navbar.Brand>

        {/* Toggle button for mobile devices */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav">
            <Nav.Link href="#about">About Me</Nav.Link>

            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#certificates">Certifications</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

