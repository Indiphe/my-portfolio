import React from 'react';
import Typical from 'react-typical';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <section id="about" className="my-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col md={6}>
            <h2>Hello, I'm Indiphe Yonwaba Nondlazi 👋</h2>
            <h6>Full-stack front-end developer based in Gqeberha, South Africa</h6>
            <h3>
              <Typical
                steps={[
                  'Web Developer', 2000,
                  'Application Developer', 2000,
                  'Data Analyst', 2000,
                  'Machine Learning Enthusiast', 2000
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </h3>
            <p>
         I have recently completed my final year of a diploma in ICT,
         specializing in Applications Development, at Walter Sisulu University (BCC-Potsdam), and I am currently awaiting graduation. 

         As an ambitious and goal-driven individual, I am committed to personal and professional growth. I possess strong communication, 
         interpersonal, and leadership skills, coupled with resilience and the ability to multitask effectively. 

        To enhance my technical expertise, I have completed several extracurricular courses.
         I am now actively seeking IT job opportunities and internships to gain valuable industry exposure and experience, 
         with the aim of contributing to the growth and success of an organization.
            </p>
            {/* Button Below the Paragraph */}
            <a href="/cv.pdf" download="YourName_CV.pdf">
              <Button  style={{ backgroundColor: '#510F52' }} variant="primary" className="mt-3">Download CV</Button>
            </a>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="text-center">
            <img 
              src="/formalImage2.jpg" 
              alt="My Profile" 
              className="img-fluid rounded-circle" 
              width="250"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
