import React from 'react';
import {FaUniversity, FaSchool } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'B.Tech[HONORS] in Information Technology',
      institution: 'Prasad V. Potluri Siddhartha Institute of Technology',
      year: '2022 - 2026',
      CGPA: '8.7/10',
      icon: <FaUniversity className="education-icon" />
    },
    {
      id: 2,
      degree: 'Intermediate (MPC)',
      institution: 'Narayana Junior College',
      year: '2020 - 2022',
      CGPA: '8.9/10',
      icon: <FaUniversity className="education-icon" />
    },
    {
      id: 3,
      degree: 'Secondary Education',
      institution: 'Narayana E-Techno School',
      year: '2019 - 2020',
      CGPA: '10/10',
      icon: <FaSchool  className="education-icon" />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">My Academic Journey</p>
        </div>

        <div 
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((education, index) => (
            <div 
              key={education.id}
              className={`education-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <div className="education-content">
                <div className="education-icon-container">
                  {education.icon}
                </div>
                <div className="education-details">
                  <span className="education-year">{education.year}</span>
                  <h3 className="education-degree">{education.degree}</h3>
                  <h4 className="education-institution">{education.institution}</h4>
                  <div className="education-CGPA">
                    <span>CGPA: </span>
                    <strong>{education.CGPA}</strong>
                  </div>
                </div>
              </div>
              {index !== educationData.length - 1 && <div className="timeline-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
