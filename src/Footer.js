import React from 'react';


const Footer = () => {
  return (
    <footer
      style={{
        color: 'seashell',
        backgroundColor: '#B13E81',
        textAlign: 'center',
        padding: '20px',
        paddingBottom: '10px',
      }}
    >
      <div style={{ marginBottom: '10px' }}>
        <a
          href="https://www.linkedin.com/in/indiphe-nondlazi/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: '#FEEAFE' }}
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a
          href="mailto:indipheyonwaba@gmail.com"
          style={{ margin: '0 10px', color: '#FEEAFE' }}
        >
          <i className="fas fa-envelope fa-lg"></i>
        </a>
        <a
          href="https://www.facebook.com/share/16S6L1pK7a/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: '#FEEAFE' }}
        >
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a
          href="https://github.com/Indiphe"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: '#FEEAFE' }}
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://app.netlify.com/teams/indiphe/sites"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: '#FEEAFE' }}
        >
          <i className="fas fa-globe fa-lg"></i>
        </a>
      </div>
      <p>© 2025 Indiphe Yonwaba Nondlazi — Built with passion using React.</p>
    </footer>
  );
};

export default Footer;

