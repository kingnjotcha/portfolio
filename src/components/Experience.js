import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './experience.css';  // Link to the CSS file

const Experience = () => {
  return (
    <section id="experience" className="py-5 experience-section">
      <Container>
        <h2 className="text-center mb-4">Experience</h2>
        <Row>
          <Col md={6}>
            <h4>Divine Tech Internship - ICT Department</h4>
            <p>
              <strong>Position:</strong> Intern <br />
              <strong>Duration:</strong> 2024 - Present <br />
              Worked on IT-related tasks including system maintenance, data management, and support for the internal processes.
            </p>
          </Col>
          <Col md={6}>
            <h4>ANJOTCHA Photography - Founder & Photographer</h4>
            <p>
              <strong>Position:</strong> Founder, Photographer, and Software Developer <br />
              <strong>Duration:</strong> 2023 - Present <br />
              Established and managed a photo studio offering photography, editing services, and graphic design, while developing software solutions for internal management.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h4>National Registration Bureau (NRB) Internship</h4>
            <p>
              <strong>Position:</strong> Intern <br />
              <strong>Duration:</strong> 2024 - Present <br />
              Provided IT support and assistance in managing and maintaining registration data systems at the NRB.
            </p>
          </Col>
          <Col md={6}>
            <h4>Freelance Software Developer</h4>
            <p>
              <strong>Position:</strong> Software Developer <br />
              <strong>Duration:</strong> 2021 - Present <br />
              Developed various applications and websites for clients, focusing on web technologies, APIs, and database management.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
