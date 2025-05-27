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
          <Col xs={12} md={6}>
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
            <div className="custom-card">

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
  href="/CV_of_Indiphe_Nondlazi.pdf"
  download="CV of Indiphe_Nondlazi.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline-dark me-3 custom-btn"
  id='custom-btn'
>
  Download CV
</a>
</Col>

<Col xs={12} md={6} className="text-left d-flex flex-column align-items-center">
  <img
    src="/formalImage2.jpg"
    alt="Profile of Indiphe Nondlazi"
    style={{

        width: '100%',
        maxWidth: '400px',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '60%',
        border: '2px solid #B13E81',
        marginBottom: '30px',
    
      objectFit: 'cover',
      borderRadius: '60%',
      border: '2px solid #B13E81',
      marginBottom: '30px',
    }}
  />

  <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
    <a
      href="https://www.linkedin.com/in/indiphe-nondlazi/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      style={{ color: '#FEEAFE' }}
    >
      <i className="fab fa-linkedin fa-3x"style={{
      transition: 'transform 0.3s',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  ></i>
    </a>

    <a
      href="https://www.facebook.com/share/16S6L1pK7a/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      style={{ color: '#FEEAFE' }}
    >
      <i className="fab fa-facebook fa-3x"style={{
      transition: 'transform 0.3s',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  ></i>
    </a>

    <a
      href="https://github.com/Indiphe"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      style={{ color: '#FEEAFE' }}
    >
 <i
    className="fab fa-github fa-3x"
    style={{
      transition: 'transform 0.3s',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  ></i>
    </a>
  </div>
</Col>
</Row>

      </Container>
    </section>
  );
};

export default AboutMe;
