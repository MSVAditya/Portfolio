import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <b className="section-subtitlee">Get to know me better</b>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
                To secure a challenging position in software engineering that utilizes my technical skills and knowledge in programming languages such as Java, Python, and C++, 
                and help me to gain knowledge in emerging technologies such as AI and machine learning. 
                As a B Tech student, I am passionate about software development. 
                I am seeking a role that allows me to work with a team of experts to solve complex problems, develop innovative solutions, 
                and contribute to the growth and success of the organization.
            </p>
            
            <div className="personal-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Mandava. Sai Venkata Aditya Vardhan</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">msvaditya129@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Vijayawada, Andhra Pradesh</span>
              </div>
              <div className="info-item">
                <span className="info-label">Availability:</span>
                <span className="info-value available">Available for work</span>
              </div>
            </div>
          </div>
          
          <div className="skills-previeww">
            <u><h3>Tools I use</h3></u>
            <div className="skills-container">
              {[
                { name: 'VsCode' },
                { name: 'Github'},
                { name: 'Google Colab'},
                { name: 'Microsoft Azure, Microsoft Office(Word, Excel, PowerPoint)'},
                { name: 'PyCharm, IDLE(Python)'},
                { name: 'MySQL Workbench, MongoDB Compass'},
                { name: 'Jupyter Notebook, Anaconda Navigator, RapidMiner tool'},
                { name: 'Raptor tool, CodeBlocks, Arduino IDE'},
              ].map((skill, index) => (
                <div key={index}>
                  <div className="skill-info">
                    <span className="skill-namee">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
