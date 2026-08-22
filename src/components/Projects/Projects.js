import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [activeFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'DebugMentor (Debugging-Agent)',
      description: 'Built an AI-powered debugging platform that automatically analyzes, fixes, and verifies buggy code using LLMs and Docker sandboxing, with an instructor dashboard for course and student management.',
      tags: ['Agentic AI', 'Python', 'React.js', 'FastAPI', 'Large Language Models (LLM)', 'REST API Design', 'SQLite'],
      image: process.env.PUBLIC_URL + '/images/Proj6.png',
      github: 'https://github.com/MSVAditya/Debugging-Agent',
      demo: 'https://github.com/MSVAditya/Debugging-Agent',
    },
    {
      id: 2,
      title: 'Cyberbullying & Hate Speech Detection System',
      description: 'Developed an NLP-based hate speech detection system using TF-IDF, Logistic Regression, and Decision Tree models to classify 35K+ social media posts, achieving 91.7% accuracy.',
      tags: ['Machine Learning', 'Data Analysis', 'Natural Language Processing (NLP)', 'Text Classification', 'Python'],
      image: process.env.PUBLIC_URL + '/images/Proj7.png',
      github: 'https://github.com/MSVAditya/Cyber-bullying-Hate-Speech-Detection',
      demo: 'https://github.com/MSVAditya/Cyber-bullying-Hate-Speech-Detection',
    },
    {
      id: 3,
      title: 'Smart File Analyzer & Log Insights Tool',
      description: 'A lightweight Python CLI that reads log files, parses records, handles malformed lines gracefully, computes insights, and emits text/JSON reports and a severity chart.',
      tags: ['Python', 'CLI Development', 'Object-Oriented Programming (OOP)', 'Log Analysis', 'Data Parsing', 'Matplotlib', 'Pytest', 'DevOps Tooling'],
      image: process.env.PUBLIC_URL + '/images/Proj8.png',
      github: 'https://github.com/MSVAditya/Smart-File-Analyzer',
      demo: 'https://github.com/MSVAditya/Smart-File-Analyzer',
    },
    {
      id: 4,
      title: 'Photo Gallery',
      description: 'Enhanced a dynamic and responsive photo gallery website using HTML, CSS, and JavaScript, enabling users to browse, filter, and view high-quality images with smooth transitions and interactive UI.',
      tags: ['CSS', 'ReactJS'],
      image: process.env.PUBLIC_URL + '/images/Proj1.png',
      github: 'https://github.com/MSVAditya/PhotoGallery',
      demo: 'https://msvphotogallery.netlify.app/',
    },
    {
      id: 5,
      title: 'Online Library',
      description: 'Created an interactive, responsive web application withdynamic navigation and sliding features using HTML, CSS, andJavaScript, including image sliders and product categories.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: process.env.PUBLIC_URL + '/images/Proj2.png',
      github: 'https://github.com/MSVAditya/Online_Library_Demo',
      demo: 'https://msvaditya.github.io/Online_Library_Demo/',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and modern CSS.',
      tags: ['React', 'CSS3', 'Responsive Design'],
      image: process.env.PUBLIC_URL + '/images/Proj3.png',
      github: 'https://github.com/MSVAditya/Portfolio',
      demo: 'https://msvaditya.github.io/Portfolio/',
    },
    {
      id: 7,
      title: 'Responsive Landing Page',
      description: 'Developed an interactive, fixed position navigation menu using HTML, CSS, and JavaScript, with color and stylechanges on scroll and hover for an enhanced user experience',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: process.env.PUBLIC_URL + '/images/Proj4.png',
      github: 'https://github.com/MSVAditya/Responsive_Landing_Page',
      demo: 'https://msvaditya.github.io/Responsive_Landing_Page/',
    },
    {
      id: 8,
      title: 'Stop Watch',
      description: 'Developed a stopwatch web application using HTML, CSS, andJavaScript, featuring start, pause, reset functions, and lap timetracking for accurate time measurement.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: process.env.PUBLIC_URL + '/images/Proj5.png',
      github: 'https://github.com/MSVAditya/Stop_Watch',
      demo: 'https://msvaditya.github.io/Stop_Watch/',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card cursor-target"
              variants={projectVariants}
              initial="hidden"
              animate="visible"
              custom={index % 3}
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link cursor-target"
                    aria-label="View on GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link cursor-target"
                    aria-label="View Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
