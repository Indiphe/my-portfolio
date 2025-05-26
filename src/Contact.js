import React, { useState } from 'react';
import './App.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();

 
    const mailtoLink = `mailto:indipheyonwaba@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    // to open the user's default email client
    window.location.href = mailtoLink;
     // to Clear the form fields aftrer sending message
  setName('');
  setEmail('');
  setSubject('');
  setMessage('');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">CONTACT ME</h2>

        <div className="contact-info">
          <div className="info-box">
            <a
              href="https://www.google.com/maps?q=Port+Elizabeth,6070,South+Africa"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              <span className="info-icon">📍</span>
              <div>
                <h3>Location:</h3>
                <p>Port Elizabeth, 6070, South Africa</p>
              </div>
            </a>
          </div>
          <div className="info-box">
            <a href="mailto:indipheyonwaba@gmail.com" className="email-link">
              <span className="info-icon">📧</span>
              <div>
                <h3>Email:</h3>
                <p>indipheyonwaba@gmail.com</p>
              </div>
            </a>
          </div>
        
        </div>

        <form onSubmit={handleSendMessage} className="contact-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            rows="6"
            placeholder="Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            
          ></textarea>
          <button type="submit" className="btn btn-outline-dark me-3">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
