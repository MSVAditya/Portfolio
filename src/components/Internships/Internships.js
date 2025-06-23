import React from 'react';
import { FaCalendarAlt, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import './Internships.css';

const Internships = () => {
  const itemsToShow = 4; 

  const experiences = [
    {
      id: 1,
      role: 'Generative AI Virtual Internship',
      issued: 'EduSkills (AICTE)',
      duration: 'July 2024 - September 2024',
      description:['I explored cutting-edge concepts and tools in the field of AI-driven content creation. This experience deepened my understanding of Large Language Models (LLMs), diffusion models, and multimodal AI systems. I gained hands-on experience in generating text, images, and code using tools like OpenAI’s GPT, Google’s Gemini, and Stability AI’s models.'],
      link: 'https://drive.google.com/file/d/1hlfeEdLNE64t7IKDQG3MtFcrh93X52wk/view?usp=sharing'
    },
    {
      id: 2,
      role: 'Data Engineering Virtual Internship',
      issued: 'EduSkills (AICTE)',
      duration: 'April 2024 - June 2024',
      description:['I gained hands-on experience with the core tools, technologies, and workflows used to manage and process large-scale data systems. This internship helped me understand how raw data is transformed into valuable insights that drive decision-making in real-world applications.This experience strengthened my understanding of scalable data systems and the role of data engineering in building robust, data-driven applications.'],
      link: 'https://drive.google.com/file/d/1jQesFxdR4LcODwZ28_TkjSvSVk5eCbgS/view?usp=sharing'
    },
    {
      id: 3,
      role: 'Cloud Virtual Internship',
      issued: 'EduSkills (AICTE)',
      duration: 'January 2024 - March 2024',
      description: ['I gained foundational and practical knowledge of deploying, managing, and scaling applications on cloud platforms. This experience helped me understand how modern businesses leverage the cloud for agility, scalability, and cost-efficiency.This internship empowered me with the skills to build and manage scalable applications in the cloud, preparing me for real-world cloud engineering and DevOps roles.'],
      link: 'https://drive.google.com/file/d/100Ac2ynMrB_suCkb3ncGi6uowI_pHrR3/view?usp=sharing'
    },
    {
      id: 4,
      role: 'AI-ML Virtual Internship',
      issued: 'EduSkills (AICTE)',
      duration: 'September 2023 - November 2023',
      description: ['I explored the fundamentals and practical applications of artificial intelligence and machine learning. This internship offered hands-on experience with real-world datasets and model-building processes, helping me bridge theoretical concepts with practical implementation.'],
      link: 'https://drive.google.com/file/d/1C0m1nyT3M4T6YfI9A1Y34sFJXiOeqB_d/view?usp=sharing'
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
            <div key={exp.id} className="internship-card">
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
                        className="internship-link"
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
