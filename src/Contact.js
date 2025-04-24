import React from 'react';

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="text-center">
          Feel free to reach out to me through email and social media profiles:
        </p>
        <div className="text-center">
          <a href="https://www.linkedin.com/in/indiphe-nondlazi?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTIZKMHESTcynV0IfKUWFkw%3D%3D" className="btn btn-primary m-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:indipheyonwaba@gmail.com" className="btn btn-danger m-2">Email</a>
          <a href="mailto:+27786503907" className="btn btn-danger m-2"  target="_blank" rel="noopener noreferrer">Phone</a>
          <a href="https://github.com/Indiphe" className="btn btn-primary m-2" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://app.netlify.com/teams/indiphe/sites" className="btn btn-danger m-2"  target="_blank" rel="noopener noreferrer">Netlify</a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
