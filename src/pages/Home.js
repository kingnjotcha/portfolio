import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Qualifications from '../components/Qualifications';

const Home = () => {
  return (
    
    <>
    <div className="container">
    <h1 className="text-center text-primary">Welcome to My Portfolio</h1>
    <p className="lead text-center">This is the home page.</p>
  </div>
      <About />
      <Skills />
      <Experience />
      <Qualifications/>
    </>
  );
}

export default Home;
