import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, like sending an email or saving the contact info
    console.log(formData);
    alert('Thank you for reaching out!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row>
          <Col md={6} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="message" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5 text-center">
          <Col>
            <p>Email: <a href="mailto:isaackbanda112@gmail.com">isaackbanda112@gmail.com</a></p>
            <p>Phone: +265 888308644</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
