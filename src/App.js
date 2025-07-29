import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Certificates from './Certificates';
import Skills from './Skills';
import MyProjects from './Myprojects'; // Make sure the filename matches exactly

const App = () => {
  return (
    <div className="Appcontainer">
      <>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutMe />
                <Projects />
                <Skills />
                <Certificates />
                <Contact />
              </>
            }
          />
          <Route path="/myprojects" element={<MyProjects />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}
export default App;
