import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Qualifications from '../components/Qualifications';
import './home.css'; // Ensure you create and include this CSS file

const Home = () => {
  return (
    <>
      <section className="home-intro">
        <div className="container">
          <p className="lead text-center home-subtitle">  Hi! I'm Isaac king Banda</p>
          <h1 className="text-center text-primary home-title">Welcome to My Portfolio</h1>
        </div>
      </section>
      <About />
      <Skills />
      <Experience />
      <Qualifications />
    </>
  );
}

export default Home;
