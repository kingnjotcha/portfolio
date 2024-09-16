import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment, faPhone } from '@fortawesome/free-solid-svg-icons';
import './contact.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const contactForm = document.querySelector('.contact-form');
    contactForm.classList.add('animate-form');
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);

    console.log(formData);
  };

  return (
    <section id="contact" className="py-5 contact-section">
      <div className="overlay"></div>
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row>
          <Col md={6} className="mx-auto">
            <Form onSubmit={handleSubmit} className={`contact-form ${formSubmitted ? 'submitted' : ''}`}>
              <Form.Group controlId="name" className="icon-input">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <div className="icon-container">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                </div>
              </Form.Group>

              <Form.Group controlId="email" className="mt-3 icon-input">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="icon-container">
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                </div>
              </Form.Group>

              <Form.Group controlId="message" className="mt-3 icon-input">
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
                <div className="icon-container">
                  <FontAwesomeIcon icon={faComment} className="input-icon" />
                </div>
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4 w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5 text-center">
          <Col>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="email-icon" />{' '}
              Email: <a href="mailto:isaackbanda112@gmail.com">isaackbanda112@gmail.com</a>
            </p>
           
            <p>
             <a href="https://wa.me/265888308644" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
             +265 888 308 644
             </a>
             <span className="separator"> | </span>   
             <a href="tel:+265993851049" className="contact-link">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                +265 993 851 049
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
