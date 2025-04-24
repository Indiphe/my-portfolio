import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css'; // Add styles here or in a separate CSS module

<h2 className="text-center mb-4">My Skills</h2>
const frontendSkills = [
  { title: 'React', img: '/favicon.ico' },
  { title: 'Python', img: '/python-logo.png' },
  { title: 'Java', img: '/java.png' },
  { title: 'JavaScript', img: '/Jscript.png' },
];

const backendSkills = [
  { title: 'Node.js', img: '/node.png' },
  { title: 'Firebase', img: '/firebaselogo.png' },
  { title: 'Oracle Apex', img: '/oracleapex.png' },
  { title: 'MySQL', img: '/sql.png' },
];

const familiarTools = [
  { title: 'Intelli J', img: '/intellij.png' },
  { title: 'Postman', img: '/postman.png' },
  { title: 'VS Code', img: '/vscode.png' },
  { title: 'Jira', img: '/jiralogo.png' },
];

const Skills = () => {
  return (
    <section id='skills' className="skills-container" style={{ padding: '40px 20px', backgroundColor: 'rgb(219, 187, 6) ' }}>
      <Container >
        <h2 className="section-title">My Skills</h2>

        <h4 className="section-title" style={{fontSize: '1.5rem', color:'#66590D'}}>Frontend</h4>
        <Row className="g-4 mb-5">
          {frontendSkills.map((skill, index) => (
            <Col key={index} xs={6} md={3}>
              <Card id='skill-cards' className="h-100 text-center">
                <Card.Img variant="top" src={skill.img} alt={skill.title} style={{ height: '100px', objectFit: 'contain', padding: '10px' }} />
                <Card.Body>
                  <Card.Title>{skill.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h4 className="section-title" style={{fontSize: '1.5rem', color:'#66590D'}}>Backend</h4>
        <Row className="g-4">
          {backendSkills.map((skill, index) => (
            <Col key={index} xs={6} md={3}>
              <Card id='skill-cards' className="h-100 text-center">
                <Card.Img variant="top" src={skill.img} alt={skill.title} style={{ height: '100px', objectFit: 'contain', padding: '10px' }} />
                <Card.Body>
                  <Card.Title>{skill.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h4 className="section-title" style={{fontSize: '1.5rem', color:'#66590D'}}>Familiar Tools</h4>
        <Row className="g-4">
          {familiarTools.map((skill, index) => (
            <Col key={index} xs={6} md={3}>
              <Card id='skill-cards' className="h-100 text-center">
                <Card.Img variant="top" src={skill.img} alt={skill.title} style={{ height: '100px', objectFit: 'contain', padding: '10px' }} />
                <Card.Body>
                  <Card.Title>{skill.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
<a
  href="https://www.linkedin.com/in/indiphe-nondlazi/details/skills/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline-dark"
>
  View more on LinkedIn
</a>
</div>
      </Container>
    </section>
    
  );
};



export default Skills;

