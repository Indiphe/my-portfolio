import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './App.css';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#B13E81' }} variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={HashLink} smooth to="/#about" style={{ paddingRight: '15px' }}>
          My Portfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav">
            <Nav.Link as={HashLink} smooth to="/#about">About Me</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#projects">Projects</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#skills">Skills</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#certificates">Certifications</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
