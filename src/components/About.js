import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row>
          <Col md={6} className="mx-auto text-center">
            <h2>About Me</h2>
            <p className="lead">
               I'm a Software Developer, Photographer, and Graphic Designer from Malawi.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
