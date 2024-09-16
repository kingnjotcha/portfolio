import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'

const NavigationBar = () => {
  const location = useLocation();

  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
      navbarToggler.click(); // Close the toggler
    }
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavLinkClick}>Isaac King Banda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={handleNavLinkClick}
              className={location.pathname === '/' ? 'active' : ''}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              onClick={handleNavLinkClick}
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/skills"
              onClick={handleNavLinkClick}
              className={location.pathname === '/skills' ? 'active' : ''}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={handleNavLinkClick}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/qualifications"
              onClick={handleNavLinkClick}
              className={location.pathname === '/qualifications' ? 'active' : ''}
            >
              Qualifications
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
