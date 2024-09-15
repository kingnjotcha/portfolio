import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCode, faChartBar, faGlobe, faLaptopCode, faRobot, faPalette, faCogs, faCloud, faUsers, faTrophy, faLanguage } from '@fortawesome/free-solid-svg-icons';
import './skills.css';

const skillsData = [
  { category: "Database Management", icon: faDatabase, skills: ["PostgreSQL", "MySQL", "Database management systems"] },
  { category: "Programming Languages", icon: faCode, skills: ["Python", "JavaScript", "HTML & CSS", "SQL", "React.js"] },
  { category: "Data Analysis", icon: faChartBar, skills: ["PowerBI", "Data visualization", "Predictive analytics"] },
  { category: "Geospatial Computing", icon: faGlobe, skills: ["Geospatial computing (GIS)", "Proficiency in QGIS", "Spatial data analysis"] },
  { category: "Web Development", icon: faLaptopCode, skills: ["Web design and development", "Front-end and back-end development"] },
  { category: "Machine Learning", icon: faRobot, skills: ["Experience with LSTM", "Random Forest", "Linear Regression", "Predictive modeling"] },
  { category: "Graphic Designing & Photography", icon: faPalette, skills: ["Graphic design", "Professional photography", "Photo editing"] },
  { category: "Software Development", icon: faCogs, skills: ["Software engineering", "System architecture", "API development"] },
  { category: "Cloud Computing", icon: faCloud, skills: ["Kubernetes for cloud computing", "Cloud system deployment"] },
  { category: "Soft Skills", icon: faUsers, skills: ["Trustworthy, Integrity, Hardworking", "Teamwork and collaboration", "Adaptability and innovation"] },
  { category: "Leadership & Management", icon: faTrophy, skills: ["Project management", "Leadership and problem-solving", "Ability to work under pressure"] },
  { category: "Languages", icon: faLanguage, skills: ["Fluent in English", "Fluent in Chichewa"] }
];

const Skills = () => {
  useEffect(() => {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate');
      }, index * 150); // Delay each skill item for a cascading effect
    });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="skills-title text-center mb-4">Skills and Competencies</h2>

      <div className="row">
        {skillsData.map((categoryObj, index) => (
          <div key={index} className="col-md-6 mb-4 skill-category">
            <div className="d-flex align-items-center">
              <div className="skill-category-avatar"></div>
              <h4 className="skill-category-title">
                <FontAwesomeIcon icon={categoryObj.icon} className="category-icon" />
                {categoryObj.category}
              </h4>
            </div>
            <ul className="skill-list">
              {categoryObj.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
