import React from 'react';

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '40px 20px', backgroundColor: '#f5f5f5' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>My Skills</h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2rem' }}>
          <li><strong>Frontend:</strong> React, HTML5, CSS3, JavaScript</li>
          <li><strong>Backend:</strong> Node.js, Express</li>
          <li><strong>Databases:</strong> Firebase, MongoDB, MySQL</li>
          <li><strong>Tools:</strong> Git, GitHub, VS Code, Postman</li>
          <li><strong>Certifications:</strong> Python & AI, Node.js, React Basics</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
