

import React from 'react';
import './projects.css'; // Custom CSS for styling

const projectsData = [
  {
    title: 'Commodity Price Projection',
    description: 'A Python-based web app for predicting prices of commodities using machine learning models.',
    technologies: ['Python', 'Flask', 'Machine Learning'],
    github: 'https://github.com/your-github/commodity-price-projection',
    demo: 'https://commodity-price-projection-demo.com',
    image: '/images/project1.png' // Replace with actual image path
  },
  {
    title: 'Divite Tech Management System',
    description: 'A management system for Divite Tech that is both web-based and mobile.',
    technologies: ['React', 'Node.js', 'Flutter', 'MongoDB'],
    github: 'https://github.com/your-github/divite-tech-management-system',
    demo: 'https://divite-tech-management-system.com',
    image: '/images/project2.png',
  },
  {
    title: 'ANJOTCHA Photography Booking App',
    description: 'A web app for managing photography bookings at ANJOTCHA Photography.',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/your-github/anjotcha-booking-app',
    demo: 'https://anjotcha-booking-app.com',
    image: '/images/project3.png',
  },
  {
    title: 'ANJOTCHA Photography Management App',
    description: 'An app designed to manage activities and workflow at ANJOTCHA Photography.',
    technologies: ['Node.js', 'React', 'PostgreSQL'],
    github: 'https://github.com/your-github/anjotcha-management-app',
    demo: 'https://anjotcha-management-app.com',
    image: '/images/project4.png'
  },
  {
    title: 'Afoto Njotcha King Portfolio',
    description: 'A personal portfolio web app showcasing my work as a developer, photographer, and designer.',
    technologies: ['React', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/your-github/portfolio',
    demo: 'https://yourportfolio.com',
    image: '/images/project2.png'
  },
  {
    title: 'Njotcha Tailoring Shop Management System',
    description: 'A management system for handling operations at Njotcha Tailoring Shop.',
    technologies: ['Django', 'SQLite', 'React'],
    github: 'https://github.com/your-github/njotcha-tailoring-shop',
    demo: 'https://njotcha-tailoring-shop.com',
    image: '/images/project4.png'
  },
  {
    title: 'QR Code Generator and Scanner App',
    description: 'A mobile app that generates and scans QR codes efficiently.',
    technologies: ['Flutter', 'Dart'],
    github: 'https://github.com/your-github/qr-code-generator-scanner',
    demo: 'https://qr-code-app-demo.com',
    image: '/images/project3.png'
  },
  {
    title: 'QGIS Classification Plugin',
    description: 'A plugin for QGIS that assists in land use classification and mapping.',
    technologies: ['Python', 'QGIS'],
    github: 'https://github.com/your-github/qgis-classification-plugin',
    demo: 'https://qgis-plugin-demo.com',
    image: '/images/project4.png'
  },
  {
    title: 'Adventure Mobile Game',
    description: 'A mobile adventure game built on the Godot Engine.',
    technologies: ['Godot Engine', 'C#', 'GDScript'],
    github: 'https://github.com/your-github/adventure-game',
    demo: 'https://adventure-game-demo.com',
    image: '/images/project1.png'
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <div className="projs-section">
    <div className="projects-container container mt-5">
      <h2 className="projects-title text-center mb-4">Projects</h2>
      <p className="projects-subtitle text-center lead">These are some of the major projects I have completed so far. Each project demonstrates my skills in various technologies and showcases my development experience.</p>
      
      <div  className="row ">
        {projectsData.map((project, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card project-card h-100">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: '200px', objectFit: 'cover' }} // Adjust the image height
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p className="card-text">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
                {project.github && (
                  <a href={project.github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {' '}
                {project.demo && (
                  <a href={project.demo} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
