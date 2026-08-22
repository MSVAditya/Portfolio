import React from 'react';
import { FaCalendarAlt, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import './Internships.css';

const Internships = () => {
  const itemsToShow = 6;

  const experiences = [
    {
      id: 1,
      role: 'Angular Full Stack Internship ',
      issued: 'Infosys Springboard',
      duration: 'October 2025 - December 2025',
      description: ['Developed end-to-end full-stack web applications by integrating Angular/React frontends with Node.js and MongoDB backends. Collaborated in an agile team to design and implement RESTful APIs, build responsive and user-friendly interfaces, and streamline deployment workflows. Leveraged Git-based version control and reusable component architecture to improve code maintainability, collaboration, and overall development efficiency by 20%.'],
      link: 'https://drive.google.com/file/d/1TrWcxHCA29dcwE7sT8cmbA5eReI8_THR/view?usp=sharing'
    },
    {
      id: 2,
      role: 'Cybersecurity Internship',
      issued: 'EduSkills (AICTE)',
      duration: 'January 2025 - March 2025',
      description: ['Acquired practical experience in network security, vulnerability management, cyber threat identification, and security operations. Enhanced understanding of cybersecurity principles, risk mitigation strategies, and secure computing practices through hands-on learning.'],
      link: 'https://drive.google.com/file/d/14_Sy-DQce7EMejdVOGG66n7oo2B-ZQPx/view?usp=sharing'
    },
    {
      id: 3,
      role: 'Generative AI Internship',
      issued: 'EduSkills (AICTE)',
      duration: 'July 2024 - September 2024',
      description: ['I explored cutting-edge concepts and tools in the field of AI-driven content creation. This experience deepened my understanding of Large Language Models (LLMs), diffusion models, and multimodal AI systems. I gained hands-on experience in generating text, images, and code using tools like OpenAI’s GPT, Google’s Gemini, and Stability AI’s models.'],
      link: 'https://drive.google.com/file/d/1MwnpYhCrPOWkL7eXkcDlGf3LKGjkJzGa/view?usp=sharing'
    },
    {
      id: 4,
      role: 'Data Engineering Internship',
      issued: 'EduSkills (AICTE)',
      duration: 'April 2024 - June 2024',
      description: ['I gained hands-on experience with the core tools, technologies, and workflows used to manage and process large-scale data systems. This internship helped me understand how raw data is transformed into valuable insights that drive decision-making in real-world applications.This experience strengthened my understanding of scalable data systems and the role of data engineering in building robust, data-driven applications.'],
      link: 'https://drive.google.com/file/d/1639VqzLhEQY4mw19eQzjOdgY-RSxV5zf/view?usp=sharing'
    },
    {
      id: 5,
      role: 'Cloud Internship',
      issued: 'EduSkills (AICTE)',
      duration: 'January 2024 - March 2024',
      description: ['I gained foundational and practical knowledge of deploying, managing, and scaling applications on cloud platforms. This experience helped me understand how modern businesses leverage the cloud for agility, scalability, and cost-efficiency.This internship empowered me with the skills to build and manage scalable applications in the cloud, preparing me for real-world cloud engineering and DevOps roles.'],
      link: 'https://drive.google.com/file/d/1KYsH3uS7MBa7S1uQmmOCoqqsDTC_Q8-L/view?usp=sharing'
    },
    {
      id: 6,
      role: 'AI-ML Internship',
      issued: 'EduSkills (AICTE)',
      duration: 'September 2023 - November 2023',
      description: ['I explored the fundamentals and practical applications of artificial intelligence and machine learning. This internship offered hands-on experience with real-world datasets and model-building processes, helping me bridge theoretical concepts with practical implementation.'],
      link: 'https://drive.google.com/file/d/1sStfEDqbmeAMtOxvv_wYKu_flBEG4Ocm/view?usp=sharing'
    }
  ];


  const displayedExperiences = experiences.slice(0, itemsToShow);

  return (
    <section id="internships" className="internships-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">My professional journey so far</p>
        </div>

        <div className="internships-grid">
          {displayedExperiences.map((exp) => (
            <div key={exp.id} className="internship-card cursor-target">
              <div className="internship-content">
                <div className="internship-header">
                  <div className="internship-icon">
                    <FaAward />
                  </div>
                  <h3 className="internship-role">
                    {exp.role}
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="internship-link cursor-target"
                        aria-label={`View ${exp.role} certificate`}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </h3>
                </div>
                <div className="internship-meta">
                  <span className="internship-company">{exp.issued}</span>
                  <span className="internship-duration">
                    <FaCalendarAlt className="meta-icon" />
                    {exp.duration}
                  </span>
                </div>
                <p className="internship-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
