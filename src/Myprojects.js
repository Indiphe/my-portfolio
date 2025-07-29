import React from 'react';
import { Container, Row, Col, Card  } from 'react-bootstrap';
import './Projects.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="section" style={{ padding: '40px 20px', backgroundColor: 'transparent' ,   color: 'seashell'}}>
<Container fluid="lg">
<h2 className="section-title">My Projects</h2>

    
      <div id="individual-projects" className="mb-5">
          <Row className="gy-4">
          <Col xs={12} sm={6} md={6} lg={4}>
          <Card className="h-100 shadow-sm">
                <Card.Img variant="top"  className="card-img-top"  src="/codesnack.png" />
                <Card.Body>
                <div className="card-text-box">
                  <Card.Title>CodeSnack</Card.Title>
                  <Card.Text>
                    An educational content generator that provides structured learning materials for sodtware development education.
                  </Card.Text>
                  <Card.Subtitle>
                    Tech stack: Python, Streamlit, OpenAI API 
                  </Card.Subtitle>
                  
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover' href="https://github.com/BanziDube/CodeSnack" target="_blank">GitHub</Card.Link>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://codesnack-dnr3hmxcnmkgnsvjca8ewd.streamlit.app/" target="_blank">Live Demo</Card.Link>
                  </div>
                </Card.Body>
             
              </Card>
            </Col>
              <Col xs={12} sm={6} md={6} lg={4}>
                      <Card className="h-100 shadow-sm">
                            <Card.Img variant="top"  className="card-img-top"  src="/chatbot.png" />
                            <Card.Body>
                            <div className="card-text-box">
                              <Card.Title>ScholarChat</Card.Title>
                              <Card.Text>
                                A real-time AI chatbot that educates pupils and the youth about Artificial Intelligence, its applications, and its impact on society.
                              </Card.Text>
                              <Card.Subtitle>
                    Tech stack: botpress 
                  </Card.Subtitle>
                              <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover' href="https://github.com/Indiphe/My-chatbot-ScholarChat" target="_blank">GitHub</Card.Link>
                              <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/06/03/11/20250603110847-NPPMJ1OS.json" target="_blank">Live Demo</Card.Link>
                              </div>
                            </Card.Body>
                         
                          </Card>
                        </Col>

                     <Col xs={12} sm={6} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
                <Card.Img variant="top"  className="card-img-top" src="/bookcradle.png" />
                <Card.Body>
                <div className="card-text-box">
                  <Card.Title>Book Cradle</Card.Title>
                  <Card.Text>
                    A library management system that allows users to manage books, members, and transactions efficiently.
                  </Card.Text>
                  <Card.Subtitle>
                    Tech stack: Java, Gradle 
                  </Card.Subtitle>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://github.com/EmmanualJanuarie/bookcradle2.0" target="_blank">GitHub</Card.Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
                  
            
            <Col xs={12} sm={6} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
                <Card.Img variant="top"  className="card-img-top" src="/edupath.png" />
                <Card.Body>
                <div className="card-text-box">
                  <Card.Title>EduPath</Card.Title>
                  <Card.Text>
                    A South African universities AI -powered educational platform that helps students make informed decisions about their academic paths.
                  </Card.Text>
                    <Card.Subtitle>
                    Tech stack: Transcript, OpenAI API 
                  </Card.Subtitle>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://github.com/BanziDube/EduPathSA/tree/main" target="_blank">GitHub</Card.Link>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://edupathsa.netlify.app/" target="_blank">Live Demo</Card.Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
                <Card.Img variant="top"  className="card-img-top" src="/cartoonify.png" />
                <Card.Body>
                <div className="card-text-box">
                  <Card.Title>Cartoonify</Card.Title>
                  <Card.Text>
                    A web application that uses AI and speech recognition to turn photos into cartoon-style images.
                  </Card.Text>
                  <Card.Subtitle>
                    Tech stack: Python 
                  </Card.Subtitle>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://github.com/ZisandaNodali/CartoonifyApp" target="_blank">GitHub</Card.Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
                <Card.Img variant="top"  className="card-img-top" src="/planit.png" />
                <Card.Body>
                <div className="card-text-box">
                  <Card.Title>PlanIt</Card.Title>
                  <Card.Text>
                    An events management platform that allows users to create, manage, and share events seamlessly.
                  </Card.Text>
          <Card.Subtitle>
                    Tech stack: Python, Firebase. 
                  </Card.Subtitle>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://github.com/buds345/PlanItt/blob/main/Tech%20quads%20PlanIt.pptx" target="_blank">GitHub</Card.Link>
                  </div>
                </Card.Body>
              </Card>
              </Col>
               <Col xs={12} sm={6} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
                <Card.Img variant="top"  className="card-img-top" src="/KhanyaWebsite.jpg" />
                <Card.Body>
                <div className="card-text-box">
                  <Card.Title>Khanya Best Quality Garments</Card.Title>
                  <Card.Text>
                    A website for a store that sells school uniforms.
                  </Card.Text>
                  <Card.Subtitle>
                    Tech stack: HTML, CSS, JavaScript, SQL, PHP 
                  </Card.Subtitle>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://github.com/Indiphe/Khanya-Best-Quality-Garments" target="_blank">GitHub</Card.Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
                <Card.Img variant="top"  className="card-img-top" src="/portfolio_template.jpg" />
                <Card.Body>
                <div className="card-text-box">
                  <Card.Title>Portfolio Template</Card.Title>
                  <Card.Text>
                    A customizable template for creating professional portfolios.
                  </Card.Text>
                  <Card.Subtitle>
                    Tech stack: HTML,CSS,JavaScript 
                  </Card.Subtitle>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://github.com/Indiphe/Indiphe_Nondlazi" target="_blank">GitHub</Card.Link>
                 <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://quiet-horse-26b2d8.netlify.app/" target="_blank">Live Demo</Card.Link>

                  </div>
                </Card.Body>
              </Card>
            </Col>

<Col xs={12} sm={6} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
                <Card.Img variant="top"  className="card-img-top" src="/LangChainwebPage.jpg" />
                <Card.Body>
                <div className="card-text-box">
                  <Card.Title>LLM Presentation</Card.Title>
                  <Card.Text>
                    A presentation showcasing the capabilities of large language models.
                  </Card.Text>
                  <Card.Subtitle>
                    Role: HTML, CSS
                  </Card.Subtitle>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://github.com/Indiphe/LLM" target="_blank">GitHub</Card.Link>
                 <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://app.netlify.com/projects/starlit-zabaione-555640/" target="_blank">Live Demo</Card.Link>

                  </div>
                </Card.Body>
              </Card>
            </Col>


<Col xs={12} sm={6} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
                <Card.Img variant="top"  className="card-img-top" src="/1stResponsive_WebPage.jpg" />
                <Card.Body>
                <div className="card-text-box">
                  <Card.Title>Recipe website</Card.Title>
                  <Card.Text>
                    A web application for sharing a croissant recipe.
                  </Card.Text>
                  <Card.Subtitle>
                    Tech stack: HTML, CSS, JavaScript
                  </Card.Subtitle>
                  <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://github.com/Indiphe/Recipe" target="_blank">GitHub</Card.Link>
                 <Card.Link className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'  href="https://app.netlify.com/projects/gleaming-cocada-019146/" target="_blank">Live Demo</Card.Link>

                  </div>
                </Card.Body>
              </Card>
            </Col>

  </Row>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
   <Link
    to="/"
    className="btn btn-outline-dark me-3 custom-btn"
    id="custom-btn"
  >
    Back to Home
  </Link>
  </div>
      </Container>
    </section>
   
  );
};

export default Projects;