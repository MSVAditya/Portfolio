import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaJava, FaRegFileCode } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiRedux, SiBootstrap, SiExpress, SiGooglecloud } from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <SiHtml5 className="skill-icon" /> },
    { name: 'CSS', icon: <SiCss3 className="skill-icon" /> },
    { name: 'JavaScript', icon: <SiJavascript className="skill-icon" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="skill-icon" /> },
    { name: 'React', icon: <FaReact className="skill-icon" /> },
    { name: 'Redux', icon: <SiRedux className="skill-icon" /> },
    { name: 'Node.js', icon: <FaNodeJs className="skill-icon" /> },
    { name: 'Express.js', icon: <SiExpress className="skill-icon" /> },
    { name: 'Microsoft Azure', icon: <VscAzure className="skill-icon" /> },
    { name: 'AWS', icon: <FaAws className="skill-icon" /> },
    { name: 'Google Cloud', icon: <SiGooglecloud className="skill-icon" /> },
    { name: 'MySQL', icon: <FaDatabase className="skill-icon" /> },
    { name: 'MongoDB/NoSQL', icon: <FaDatabase className="skill-icon" /> },
    { name: 'Python', icon: <FaPython className="skill-icon" /> },
    { name: 'Java', icon: <FaJava className="skill-icon" /> },
    { name: 'C++', icon: <FaRegFileCode className="skill-icon" /> },
    { name: 'C', icon: <FaRegFileCode className="skill-icon" /> }
  ];

  const categories = [
    {
      name: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Redux', 'Node.js', 'Express.js']
    },
    {
      name: 'Cloud and Data Engineering',
      skills: ['Microsoft Azure', 'AWS', 'Google Cloud']
    },
    {
      name: 'Databases',
      skills: ['MySQL', 'MongoDB/NoSQL']
    },
    {
      name: 'Programming Languages',
      skills: ['Python', 'Java', 'C++', 'C']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-categories">
          {categories.map((category, index) => (
            <div key={index} className="category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-grid">
                {skills
                  .filter(skill => category.skills.includes(skill.name))
                  .map((skill, idx) => (
                    <div key={idx} className="skill-card">
                      <div className="skill-header">
                        <div className="skill-icon-wrapper">
                          {skill.icon}
                        </div>
                        <h4 className="skill-name">{skill.name}</h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
