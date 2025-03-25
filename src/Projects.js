import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <section id="projects" className="my-5">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="project1-image.jpg" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  A short description of the project, what technologies were used, and the challenges you faced.
                </Card.Text>
                <Card.Link href="https://github.com/your-username/project1" target="_blank">GitHub</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more projects here */}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
