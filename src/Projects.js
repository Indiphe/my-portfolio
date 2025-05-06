import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section" style={{ padding: '40px 20px', backgroundColor: 'transparent' }}>
      <Container>
        <h2 className="section-title">My Projects</h2>

    
      <div id="individual-projects" className="mb-5">
          <Row className="gy-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top"   src="/weather.jpg" />
                <Card.Body>
                  <Card.Title>Weather Application</Card.Title>
                  <Card.Text>
                    A real-time weather forecasting app built with HTML, CSS, and JavaScript. 
                  </Card.Text>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover' href="https://github.com/Indiphe/myweatherapp" target="_blank">GitHub</Card.Link>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://dazzling-khapse-dffb4a.netlify.app/" target="_blank">Live Demo</Card.Link>
                </Card.Body>
              </Card>
            </Col>

          <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src="/chat-application.jpg" />
                <Card.Body>
                  <Card.Title>Chat Web-application</Card.Title>
                  <Card.Text>
                    A real-time chat application designed to facilitate seamless communication among users. 
                  </Card.Text>
                  <Card.Subtitle>
                    Role: Backend Developer 
                  </Card.Subtitle>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://github.com/Indiphe/chat-app" target="_blank">GitHub</Card.Link>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://aesthetic-frangipane-09091a.netlify.app/" target="_blank">Live Demo</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src="/QuadJewellerswebsite.jpg" />
                <Card.Body>
                  <Card.Title>Jewellery store Web-application</Card.Title>
                  <Card.Text>
                    A moder web application for a jewellery store, designed to enhance user experience and streamline online shopping.
                  </Card.Text>
                  <Card.Subtitle>
                    Role: Frontend Developer 
                  </Card.Subtitle>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://github.com/buds345/Home-Page" target="_blank">GitHub</Card.Link>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://jolly-sopapillas-2589b1.netlify.app/" target="_blank">Live Demo</Card.Link>
                </Card.Body>
              </Card>
              </Col>
  </Row>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <a
    href="https://www.linkedin.com/in/indiphe-nondlazi/details/certifications/"
    target="_blank"
    rel="noopener noreferrer"
  className="btn btn-outline-dark me-3 custom-btn"
  id='custom-btn'
  >
    View more on LinkedIn
  </a>
  </div>
      </Container>
    </section>
   
  );
};

export default Projects;