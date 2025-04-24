import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css'; // Optional custom CSS for advanced styling

const Projects = () => {
  return (
    <section id="projects" className="projects-container" style={{ padding: '40px 20px', backgroundColor: 'rgb(219, 187, 6)' }}>
      <Container>
        <h2 className="section-title">My Projects</h2>

      {/* Individual Projects */}
      <div id="individual-projects" className="mb-5">
          <h3 className="section-title" style={{fontSize: '1.5rem', color:'#66590D'}}>Individual Projects</h3>
          <Row className="gy-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top"   src="/weather.jpg" />
                <Card.Body>
                  <Card.Title>Weather Application</Card.Title>
                  <Card.Text>
                    A real-time weather forecasting app built with HTML, CSS, and JavaScript. It fetches data from the OpenWeatherMap API to display dynamic weather updates based on user input. Designed with a clean, responsive UI for an intuitive experience.
                  </Card.Text>
                  <Card.Link className='Links' href="https://github.com/Indiphe/myweatherapp" target="_blank">GitHub</Card.Link>
                  <Card.Link className='Links'  href="https://dazzling-khapse-dffb4a.netlify.app/" target="_blank">Live Demo</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src="/LangChainwebPage.jpg" />
                <Card.Body>
                  <Card.Title>LangChain Web Page</Card.Title>
                  <Card.Text>
                    A single-page educational site created for a presentation. It introduces LangChain, outlines its key features, and explores real-world use cases. Focused on clarity, responsiveness, and visual storytelling to enhance learning.
                  </Card.Text>
                  <Card.Link className='Links'  href="https://github.com/Indiphe/LLM" target="_blank">GitHub</Card.Link>
                  <Card.Link className='Links'  href="https://starlit-zabaione-555640.netlify.app/" target="_blank">Live Demo</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src="/1stResponsive_WebPage.jpg" />
                <Card.Body>
                  <Card.Title>Recipe Website</Card.Title>
                  <Card.Text>
                    A beautifully styled croissant recipe site built with SEO best practices and fully responsive design. This project tested and refined my HTML/CSS skills with an emphasis on mobile-first layouts and web accessibility.
                  </Card.Text>
                  <Card.Link className='Links'  href="https://github.com/Indiphe/responsive" target="_blank">GitHub</Card.Link>
                  <Card.Link className='Links'  href="https://gleaming-cocada-019146.netlify.app/" target="_blank">Live Demo</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="gy-4 mt-3">
    <Col md={4}>
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src="/portfolio_template.jpg" />
        <Card.Body>
          <Card.Title>Portfolio Template Website</Card.Title>
          <Card.Text>
            A modern, responsive portfolio template crafted to showcase developer projects and profiles.
            Built with SEO optimization and a clean UI, this project reflects our team’s focus on
            user-centric design and front-end best practices.
          </Card.Text>
          <Card.Link className='Links' href="https://github.com/Indiphe/Indiphe_Nondlazi" target="_blank">GitHub</Card.Link>
          <Card.Link className='Links' href="https://celebrated-frangipane-3787b6.netlify.app/" target="_blank">Live Demo</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  </Row>
        </div>

      {/* Group Projects */}
      <div id="group-projects">
          <h3 className="section-title" style={{fontSize: '1.5rem', color:'#66590D'}}>Group Projects</h3>
          <Row className="gy-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src="/chat-application.jpg" />
                <Card.Body>
                  <Card.Title>Chat Web-application</Card.Title>
                  <Card.Text>
                    A real-time chat application designed to facilitate seamless communication among users. Built with a focus on user experience,
                    it features a responsive design and intuitive interface, ensuring smooth interactions across devices. 
                  </Card.Text>
                  <Card.Subtitle>
                    Role: Backend Developer 
                  </Card.Subtitle>
                  <Card.Link className='Links'  href="https://github.com/Indiphe/chat-app" target="_blank">GitHub</Card.Link>
                  <Card.Link className='Links'  href="https://aesthetic-frangipane-09091a.netlify.app/" target="_blank">Live Demo</Card.Link>
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
                    The project emphasizes responsive design, user-friendly navigation, and efficient product management,
                    showcasing our commitment to quality and innovation in web development.
                  </Card.Text>
                  <Card.Subtitle>
                    Role: Frontend Developer 
                  </Card.Subtitle>
                  <Card.Link className='Links'  href="https://github.com/buds345/Home-Page" target="_blank">GitHub</Card.Link>
                  <Card.Link className='Links'  href="https://jolly-sopapillas-2589b1.netlify.app/" target="_blank">Live Demo</Card.Link>
                </Card.Body>
              </Card>
              </Col>

              <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src="/KhanyaWebsite.jpg" />
                <Card.Body>
                  <Card.Title>Uniform store Web-application</Card.Title>
                  <Card.Text>
                    A modern web application for a uniform store, designed to enhance user experience and streamline online shopping.
                    The project emphasizes responsive design, user-friendly navigation, and efficient product management. The application
                    allows users to easily browse and purchase uniforms, showcasing our commitment to quality and innovation in web development.
                  </Card.Text>
                  <Card.Subtitle>
                    Role: Fullstack Developer 
                  </Card.Subtitle>
                  <Card.Link className='Links' href="https://github.com/Indiphe/Khanya-Best-Quality-Garments" target="_blank">GitHub</Card.Link>
                </Card.Body>
              </Card>
              </Col>

              <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src="/code_cartels.jpg" />
                <Card.Body>
                  <Card.Title>Machine learning model</Card.Title>
                  <Card.Text>
                    A machine learning system to predict severe weather conditions, analyze its effect on water and sanitation systems.
                    This project emphasizes data-driven decision-making and predictive analytics, showcasing our commitment to
                    leveraging technology for public health and safety.
                    </Card.Text>
                    <Card.Subtitle>
                    Role: Reasearch and Visualisation 
                  </Card.Subtitle>
                  <Card.Link className='Links'  href="https://github.com/Indiphe/Code-Cartel-s" target="_blank">GitHub</Card.Link>
                </Card.Body>
              </Card>
              </Col>
          </Row>
        </div>
      </Container>
    </section>
   
  );
};

export default Projects;