import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';


const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#510F52' }} variant="dark" expand="lg" sticky="top">

      <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>

      <Nav className="ml-auto custom-nav">
  <Nav.Link href="#about">About Me</Nav.Link>

  <NavDropdown title="Projects" id="projects-dropdown">
    <NavDropdown.Item href="#individual-projects">Individual Projects</NavDropdown.Item>
    <NavDropdown.Item href="#group-projects">Group Projects</NavDropdown.Item>
  </NavDropdown>
  <Nav.Link href="#skills">Skills</Nav.Link>
  <Nav.Link href="#certificates">Certifications</Nav.Link>
  <Nav.Link href="#contact">Contact</Nav.Link>
  
</Nav>
 
    </Navbar>
  );
};

export default Header;
