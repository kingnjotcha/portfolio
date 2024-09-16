import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container  text-light py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <h5>Connect with Me</h5>
            <a href="https://github.com/kingnjotcha" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/isaac-king-banda-6ab181241" target="_blank" rel="noopener noreferrer"className="text-light mx-2">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://facebook.com/profile.php?id=100006884865951" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <p className="mt-3">&copy; 2024 Isaac King Banda. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
