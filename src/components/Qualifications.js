import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './qualifications.css';

const Qualifications = () => {
  return (
    <section id="qualifications" className="py-5 qualifications-section">
      <Container>
        <h2 className="text-center mb-4">Qualifications</h2>
        <Row>
          <Col md={6}>
            <h4>Bachelor's Degree in Computer Science</h4>
            <p>
              <strong>Institution:</strong> University of Malawi <br />
              <strong>Year:</strong> 2024
            </p>
          </Col>
          <Col md={6}>
            <h4>Malawi School Certificate of Education (MSCE)</h4>
            <p>
              <strong>Institution:</strong> Dowa Secondary School <br />
              <strong>Year:</strong> 2018
            </p>
          </Col>
        </Row>
        <h3 className="certificates text-center mt-5">Certificates</h3>
        <Row>
          <Col md={6}>
            <h4>Project Management for Development Professionals</h4>
            <p>
              <strong>Institution:</strong> The Humanitarian Leadership Academy
            </p>
          </Col>
          <Col md={6}>
            <h4>Financial Management Essentials</h4>
            <p>
              <strong>Institution:</strong> Cornerstone OnDemand Foundation <br />
              <strong>Year:</strong> 2024
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h4>Marketing Essentials</h4>
            <p>
              <strong>Institution:</strong> Cornerstone OnDemand Foundation <br />
              <strong>Year:</strong> 2024
            </p>
          </Col>
          <Col md={6}>
            <h4>Qualitative Data Analysis</h4>
            <p>
              <strong>Institution:</strong> Cornerstone OnDemand Foundation <br />
              <strong>Year:</strong> 2024
            </p>
          </Col>
          <Col md={6}>
            <h4>Introduction to Human Resource Management in Humanitarian
            Contexts</h4>
            <p>
              <strong>Institution:</strong> Cornerstone OnDemand Foundation <br />
              <strong>Year:</strong> 2024
            </p>
          </Col>
          <Col md={6}>
            <h4>introduction to critical infrastructure protection </h4>
            <p>
              <strong>Institution:</strong> opswat academy <br />
              <strong>Year:</strong> 2024
            </p>
          </Col>
          <Col md={6}>
            <h4>Financial Management Essentials Certificate Program</h4>
            <p>
              <strong>Institution:</strong> Cornerstone OnDemand Foundation <br />
              <strong>Year:</strong> 2024
            </p>
          </Col>
          <Col md={6}>
            <h4>AI Carear Essentials</h4>
            <p>
              <strong>Institution:</strong> Intranet.alx <br />
              <strong>Year:</strong> 2024
            </p>
          </Col>
          <Col md={6}>
            <h4>Internet Governance </h4>
            <p>
              <strong>Institution:</strong> Learning@internet Society, internet society foundation <br />
              <strong>Year:</strong> 2024
            </p>
          </Col>
          <Col md={6}>
            <h4>Introduction to Cyber Security</h4>
            <p>
              <strong>Institution:</strong> cisco networking academy <br />
              <strong>Year:</strong> 2024
            </p>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
}

export default Qualifications;
