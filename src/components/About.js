import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './about.css';
import 'animate.css';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row>
          <Col md={12} className="mx-auto text-center">
            <div className="about-heading">About Me</div>
            <Carousel interval={3000} fade controls={true} indicators className="custom-carousel">
              {/* Slide 1: Software Developer */}
              <Carousel.Item className="carousel-item-custom">
                <div
                  className="d-block w-100"
                  style={{
                    height: '400px',
                    backgroundImage: 'url("/images/fada/suit.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                    <h3 className="animate__animated animate__fadeInDown">Software Developer</h3>
                    <p className="lead animate__animated animate__fadeInUp">
                      I specialize in building web applications, APIs, and mobile solutions.
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              {/* Slide 2: Photographer */}
              <Carousel.Item className="carousel-item-custom">
                <div
                  className="d-block w-100"
                  style={{
                    height: '400px',
                    backgroundImage: 'url("/images/fada/video.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                    <h3 className="animate__animated animate__fadeInDown">Photographer</h3>
                    <p className="lead animate__animated animate__fadeInUp">
                      Capturing moments, one frame at a time, with passion.
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              {/* Slide 3: Graphic Designer */}
              <Carousel.Item className="carousel-item-custom">
                <div
                  className="d-block w-100"
                  style={{
                    height: '400px',
                    backgroundImage: 'url("../images/flier.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                    <h3 className="animate__animated animate__fadeInDown">Graphic Designer</h3>
                    <p className="lead animate__animated animate__fadeInUp">
                      Crafting visuals that inspire and communicate effectively.
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              {/* Slide 4: Tech Enthusiast */}
              <Carousel.Item className="carousel-item-custom">
                <div
                  className="d-block w-100"
                  style={{
                    height: '400px',
                    backgroundImage: 'url("/images/fada/video2.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                    <h3 className="animate__animated animate__fadeInDown">Tech Enthusiast</h3>
                    <p className="lead animate__animated animate__fadeInUp">
                      Constantly exploring new technologies and pushing boundaries.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
