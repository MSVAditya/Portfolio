import React, { useState } from 'react';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = 3;

  
  const allCertifications = [
    {
      id: 1,
      title: 'Azure Fundamentals',
      issuer: 'Microsoft',
      link: 'https://drive.google.com/file/d/1x5QVSqTLlO7C7xC04LEpBqddsDGfci4u/view?usp=sharing',
      image: '/images/Cert23.png'
    },
    {
      id: 2,
      title: 'Azure AI Fundamentals',
      issuer: 'Microsoft',
      link: 'https://drive.google.com/file/d/1wSpgBrcyITjTxPHKtW10SjTSwoFu23SV/view?usp=sharing',
      image: '/images/Cert1.png'
    },
    {
      id: 3,
      title: 'Smart Coder',
      issuer: 'Smart Interviews',
      link: 'https://smartinterviews.in/certificate/4909595a',
      image: '/images/Cert19.png'
    },
    {
      id: 4,
      title: 'Natural Language Processing',
      issuer: 'NPTEL, IIT Kharagpur',
      link: 'https://drive.google.com/file/d/1KFI-xUOrafkYhZNqzMUWfGVnraVUVJd2/view?usp=sharing',
      image: '/images/Cert2.png'
    },
    {
      id: 5,
      title: 'Google Cloud Computing Foundations',
      issuer: 'NPTEL, IIT Kharagpur',
      link: 'https://drive.google.com/file/d/1eiJNeyB5-j2cRHqLQ4MAQcxyQUZt3GfN/view?usp=sharing',
      image: '/images/Cert3.png'
    },
    {
      id: 6,
      title: 'Programming, Data Structures and Algorithms using Python',
      issuer: 'NPTEL, IIT Madras',
      link: 'https://drive.google.com/file/d/1DOGSEiIC5sXGWCnuiD-Q6QQnntc9qikC/view?usp=sharing',
      image: '/images/Cert4.png'
    },
    {
      id: 7,
      title: 'Problem Solving through Programming In C',
      issuer: 'NPETL, IIT Kharagpur',
      link: 'https://drive.google.com/file/d/1KT5s_yaASAkerAxFVUdLXvh_ZaQBgx_8/view?usp=sharing',
      image: '/images/Cert5.png'
    },
    {
      id: 8,
      title: 'AI For Everyone',
      issuer: 'Coursera, DeepLearning.AI',
      link: 'https://drive.google.com/file/d/101gWkO-KDoOXDubEqNeNI3sfa1yKMge_/view?usp=sharing',
      image: '/images/Cert6.png'
    },
    {
      id: 9,
      title: 'HTML and CSS in depth',
      issuer: 'Coursera, META',
      link: 'https://drive.google.com/file/d/1vvfoRl8_Ow7eEMqClxwdocOKhdMfTyZu/view?usp=sharing',
      image: '/images/Cert7.png'
    },
    {
      id: 10,
      title: 'Programming with JavaScript',
      issuer: 'Coursera, META',
      link: 'https://drive.google.com/file/d/1CbpKltRe5PTOOrIMukdYbBFPcmPWQ7fY/view?usp=sharing',
      image: '/images/Cert8.png'
    },
    {
      id: 11,
      title: '100 Days of Code: The Complete Python Pro Bootcamp',
      issuer: 'Udemy',
      link: 'https://drive.google.com/file/d/1HDyCsQ7vb76-ROsragzod33jsmEs8YM4/view?usp=sharing',
      image: '/images/Cert9.png'
    },
    {
      id: 12,
      title: 'The Git & Github Bootcamp',
      issuer: 'Udemy',
      link: 'https://drive.google.com/file/d/1q5xRzqWXEXSYHenqyFnoLOINfqEt6Xj2/view?usp=sharing',
      image: '/images/Cert10.png'
    },
    {
      id: 13,
      title: 'GitHub Foundations',
      issuer: 'GitHub',
      link: 'https://drive.google.com/file/d/1w5waaYep5TOqlnEbOEpM9GScBDMICccg/view?usp=sharing',
      image: '/images/Cert11.png'
    },
    {
      id: 14,
      title: 'Basics of Python',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/file/d/1Ko1-HXVuqZOzHb3rUvS9hkdm5QBpMWY9/view?usp=sharing',
      image: '/images/Cert12.png'
    },
    {
      id: 15,
      title: 'Python Foundation Certification',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/file/d/1FudHxkvBt37vwOICuSYMOFHIgzFk_lCZ/view?usp=sharing',
      image: '/images/Cert13.png'
    },
    {
      id: 16,
      title: 'Java Programming Fundamentals',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/file/d/1ZUUXHWxkFxa_DhhDyu45Qp8v4DJ-1eSJ/view?usp=sharing',
      image: '/images/Cert14.png'
    },
    {
      id: 17,
      title: 'Programming Using C++',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/file/d/1tQGV_412UyptRFtkOW6mBLuBc5TsxzjL/view?usp=sharing',
      image: '/images/Cert15.png'
    },
    {
      id: 18,
      title: 'SQL (Advanced)',
      issuer: 'Hackerrank',
      link: 'https://drive.google.com/file/d/1N-57wBnm3_yfADkhsVCxXN1BtFSibGlt/view?usp=sharing',
      image: '/images/Cert16.png'
    },
    {
      id: 19,
      title: 'CSS (Basic)',
      issuer: 'Hackerrank',
      link: 'https://drive.google.com/file/d/15SvSWLSLShH8lD3S4oB7MQ6saPFGm1C4/view?usp=sharing',
      image: '/images/Cert17.png'
    },
    {
      id: 20,
      title: 'Python (Basic)',
      issuer: 'Hackerrank',
      link: 'https://drive.google.com/file/d/1DcpfxVKEo1WVeuT0VbPlsCYQOsqCcTi3/view?usp=sharing',
      image: '/images/Cert18.png'
    },
    {
      id: 21,
      title: 'Java Training',
      issuer: 'Spoken Tutorial Project at IIT Bombay',
      link: 'https://drive.google.com/file/d/1w52YD17ylZFYSbPLWCu0oGLpRD3GUYHi/view?usp=sharing',
      image: '/images/Cert20.png'
    },
    {
      id: 22,
      title: 'Microsoft Learn Student Ambassadors Club Web development Team Member',
      issuer: 'Microsoft Learn Student Ambassador (MLSA)',
      link: 'https://drive.google.com/file/d/1BKpBKZ5iytk_0YeNGsMhOPvRjJR9crIy/view?usp=sharing',
      image: '/images/Cert21.png'
    },
    {
      id: 23,
      title: 'Microsoft Learn AI Skills Challenge',
      issuer: 'Microsoft Learn',
      link: 'https://drive.google.com/file/d/1IRSrOcYpOl9c91iJDz0OVQTJ4KSbfIuP/view?usp=sharing',
      image: '/images/Cert22.png'
    }
  ];

  const displayedCertifications = showAll ? allCertifications : allCertifications.slice(0, itemsToShow);

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">My professional certifications and achievements</p>
        </div>

        <div className="certifications-grid">
          {displayedCertifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="certification-image">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certification-img"
                  loading="lazy"
                />
              </div>
              <div className="certification-content">
                <div className="certification-header">
                  <div className="certification-icon">
                    <FaAward />
                  </div>
                  <h3 className="certification-title">
                    {cert.title}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certification-link"
                        aria-label={`View ${cert.title} certification`}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </h3>
                </div>
                <div className="certification-meta">
                  <span className="certification-issuer">{cert.issuer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {allCertifications.length > itemsToShow && (
          <div className="show-more-container">
            <button
              onClick={() => setShowAll(!showAll)}
              className="show-more-btn"
            >
              {showAll ? 'Show Less' : `Show More`}
            </button>

            {showAll && (
              <button 
                onClick={()=> window.open('https://drive.google.com/drive/folders/1kCTPj-JDah6WjRivLv4QNh86tt5l1qD_?usp=drive_link', '_blank')}
                className="show-more-btn"
              >
                View all my certificates
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
