import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';

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

const SkillCategory = ({ title, skills }) => (
  <div className="mb-3">
    <h4 className="section-title mt-3 mb-2" style={{ fontSize: '1.25rem', color: '#66590D' }}>{title}</h4>
    <Row className="gx-3 gy-3">
      {skills.map((skill, index) => (
        <Col key={index} xs={12} sm={6} md={3}>
          <Card id="skill-cards" className="text-center">
            <Card.Img
              variant="top"
              src={skill.img}
              alt={skill.title}
              style={{ height: '80px', objectFit: 'contain', padding: '5px', borderRadius: '15px' }}
            />
            <Card.Body style={{ padding: '4px' }}>
              <Card.Title style={{ fontSize: '0.8rem' }}>{skill.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section" style={{ padding: '10px' }}>
      <Container fluid="lg">
        <h2 className="text-center section-title mb-3">My Skills</h2>

        <SkillCategory title="Frontend" skills={frontendSkills} />
        <SkillCategory title="Backend" skills={backendSkills} />
        <SkillCategory title="Familiar Tools" skills={familiarTools} />

        <div className="text-center mt-3">
          <a
            href="https://www.linkedin.com/in/indiphe-nondlazi/details/skills/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm"
          >
            View more on LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
