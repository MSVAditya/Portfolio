import React, { useState } from 'react';
import { FaExternalLinkAlt, FaCalendarAlt, FaUserEdit, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Publications.css';

const Publications = () => {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = 3;

  const publications = [
    {
      id: 1,
      title: 'AI-Powered Multi-Agent Debugging Platform for Computer Science Education',
      authors: 'Mandava. Sai Venkata Aditya Vardhan and co-authors',
      venue: 'Grenze International Journal of Engineering and Technology',
      year: 'Jul 2026',
      type: 'International Journal Research Paper (Scopus Indexing - processing)',
      description: 'Developed an AI-powered multi-agent debugging platform that uses LLMs to analyze programming errors, generate fixes, and verify solutions through Docker-sandboxed execution. The system provides root-cause analysis and educational explanations across Python, Java, C, and C++.',
      link: 'https://thegrenze.com/abstract/journal/7921'
    },
    {
      id: 2,
      title: 'Design of an Automated Fertilizer Intimation Framework using IoT for Tomato Cultivation',
      authors: 'Mandava. Sai Venkata Aditya Vardhan and Dr. T. Preethi Rangamani',
      venue: 'International Journal for Modern Trends in Science and Technology',
      year: 'Jan 2026',
      type: 'International Journal article',
      description: 'Developed an IoT-based smart agriculture system that monitors soil and environmental conditions to automate irrigation and fertilizer delivery for tomato cultivation. The system uses sensors, Arduino, ESP32, and remote monitoring to reduce manual effort and optimize resource usage.',
      link: 'https://zenodo.org/records/18327995'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const displayedPublications = showAll ? publications : publications.slice(0, itemsToShow);

  return (
    <section id="publications" className="publications-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Publications</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">My academic research and technical papers</p>
        </div>

        <div className="publications-grid">
          {displayedPublications.map((pub, index) => (
            <motion.div
              key={pub.id}
              className="publication-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={index % 3}
              whileHover={{ y: -5 }}
            >
              <div className="publication-content">
                <h3 className="publication-title">{pub.title}</h3>

                <div className="publication-meta">
                  <div className="meta-item">
                    <FaUserEdit className="meta-icon" />
                    <span>{pub.authors}</span>
                  </div>
                  <div className="meta-item">
                    <FaBookOpen className="meta-icon" />
                    <span>{pub.venue}</span>
                  </div>
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{pub.year} • {pub.type}</span>
                  </div>
                </div>

                <p className="publication-description">{pub.description}</p>
              </div>

              <div className="publication-footer">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link-btn"
                  aria-label="View Publication"
                  onClick={(e) => {
                    if (pub.link === '#') e.preventDefault();
                  }}
                >
                  <span>View Publication</span>
                  <FaExternalLinkAlt className="link-icon" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {publications.length > itemsToShow && (
          <div className="show-more-container">
            <button
              onClick={() => setShowAll(!showAll)}
              className="show-more-btn"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Publications;
