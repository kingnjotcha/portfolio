import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container  text-light py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <h5>Connect with Me</h5>
            <a href="https://github.com/your-github" className="text-light mx-2">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" className="text-light mx-2">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://twitter.com/your-twitter" className="text-light mx-2">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <p className="mt-3">&copy; 2024 Isaac Banda. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
