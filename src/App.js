import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Certificates from './Certificates';
import Skills from './Skills';
import './App.css';

const App = () => {
  return (
    <div className="Appcontainer">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
