import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about">About Me</Nav.Link>

          <NavDropdown title="Projects" id="projects-dropdown">
            <NavDropdown.Item href="#individual-projects">Individual Projects</NavDropdown.Item>
            <NavDropdown.Item href="#group-projects">Group Projects</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#certificates">Certifications</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
