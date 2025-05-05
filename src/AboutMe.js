import React from 'react';
import Typical from 'react-typical';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';


const AboutMe = () => {
  return (
    <section
    id="about"
    className="app-container"
    style={{
      scrollMarginTop: '80px',
      scrollPaddingTop: '80px',
      backgroundColor: 'transparent'
    }}
  >
  
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col md={6}>
            <h2>Hello, I'm Indiphe Yonwaba Nondlazi 👋</h2>
            <h6>Full-stack developer based in Gqeberha, South Africa</h6>
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
            <div class="custom-card">

            <p >
            I recently completed my diploma in ICT with a specialization in Applications Development at Walter Sisulu University
             (BCC-Potsdam), and currently serve as a Software Development Associate at Capaciti, where I’ll continue 
             contributing for the rest of the year.

            Driven by a passion for growth and excellence, I bring strong communication, leadership, and interpersonal 
            skills, along with the ability to effectively manage multiple tasks.

             To strengthen my full stack development expertise, I’ve earned certifications in various technologies,
              allowing me to stay current with industry trends. While focused on my current role, I’m also exploring
              future IT job opportunities and internships to further refine my skills and make a meaningful impact in
              the field.
            </p>
            </div>

            {/* Button Below the Paragraph */}
            <a
  href="\IndipheCV_update.pdf (2).pdf"
  download="Indiphe_Nondlazi_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline-dark me-3"
>
  Download CV
</a>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="text-center">
          <img 
  src="/formalImage2.jpg" 
  alt="My Profile" 
  className="img-fluid rounded-circle custom-profile-img"
/>


          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
