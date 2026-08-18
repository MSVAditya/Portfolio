import React, { useState } from 'react';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = 3;

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

  const allCertifications = [
    {
      id: 1,
      title: 'Azure AI Apps and Agents Developer Associate (AI-103)',
      issuer: 'Microsoft',
      link: 'https://drive.google.com/file/d/1linVgWtXKPJQsi1P1fRwpxUFdMZF0zP2/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert24.png'
    },
    {
      id: 2,
      title: 'Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      link: 'https://drive.google.com/file/d/1qWJCueWvUaZnvsmESx_8UWtt17_F94g3/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert23.png'
    },
    {
      id: 3,
      title: 'Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft',
      link: 'https://drive.google.com/file/d/1kuDmuUpW0WEM2k6CAa9AoMW_sPH4942j/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert1.png'
    },
    {
      id: 4,
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      link: 'https://drive.google.com/file/d/1A2Wk82Pfe2xZWw86zoZnyjvDi4v7ZKg1/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert27.png'
    },
    {
      id: 5,
      title: 'GitHub Foundations (GH-900)',
      issuer: 'GitHub',
      link: 'https://drive.google.com/file/d/1FEEcefzJV5KdccrLB11gQpX0moqXPpuS/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert11.png'
    },
    {
      id: 6,
      title: 'Smart Coder',
      issuer: 'Smart Interviews',
      link: 'https://smartinterviews.in/certificate/4909595a',
      image: process.env.PUBLIC_URL + '/images/Cert19.png'
    },
    {
      id: 7,
      title: 'Natural Language Processing',
      issuer: 'NPTEL, IIT Kharagpur',
      link: 'https://drive.google.com/file/d/1ReEg-KtbRdjVFm9-GCEOz2yfZ1DDT8CB/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert2.png'
    },
    {
      id: 8,
      title: 'Google Cloud Computing Foundations',
      issuer: 'NPTEL, IIT Kharagpur',
      link: 'https://drive.google.com/file/d/154VYWLSIfXIpx6PYp_22S3xe7RK2C1oQ/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert3.png'
    },
    {
      id: 9,
      title: 'Programming, Data Structures and Algorithms using Python',
      issuer: 'NPTEL, IIT Madras',
      link: 'https://drive.google.com/file/d/1VA5iE7uneE3dDOUOiYdFFs69BNjksUZc/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert4.png'
    },
    {
      id: 10,
      title: 'Problem Solving through Programming In C',
      issuer: 'NPTEL, IIT Kharagpur',
      link: 'https://drive.google.com/file/d/1ENwRtwWlFgK7FyNVYx5KD9CxpXC8Qaqt/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert5.png'
    },
    {
      id: 11,
      title: 'AI For Everyone',
      issuer: 'Coursera, DeepLearning.AI',
      link: 'https://drive.google.com/file/d/1aRORqzWnbnPMa-0Vd_boOSNLxPQr_Kcn/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert6.png'
    },
    {
      id: 12,
      title: 'HTML and CSS in depth',
      issuer: 'Coursera, META',
      link: 'https://drive.google.com/file/d/1p90ZS9-zRqo_6c8dFqRHpNv6VZ9C-5v2/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert7.png'
    },
    {
      id: 13,
      title: 'Programming with JavaScript',
      issuer: 'Coursera, META',
      link: 'https://drive.google.com/file/d/1FINaWhepwlvwSxo9A6ZtcTlfOwo3V2ZU/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert8.png'
    },
    {
      id: 14,
      title: '100 Days of Code: The Complete Python Pro Bootcamp',
      issuer: 'Udemy',
      link: 'https://drive.google.com/file/d/1MAwiE-dKoapuMn2_JoRGimq6mtxzgcBq/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert9.png'
    },
    {
      id: 15,
      title: 'The Git & Github Bootcamp',
      issuer: 'Udemy',
      link: 'https://drive.google.com/file/d/1W7vtEUsrsCmvY-hzCG-IfnAX9X1lTl9G/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert10.png'
    },
    {
      id: 16,
      title: 'Learning React',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/file/d/1U6GJk6IRKAoQRwaw5Hv4Rg-HCalmfb0U/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert25.png'
    },
    {
      id: 17,
      title: 'Full Stack',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/file/d/1l8CdUNPe-MEKJYByy1UszeXEHcYXz5yt/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert26.png'
    },
    {
      id: 18,
      title: 'Basics of Python',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/file/d/1hC3lb0GT5XPEU558VpyWglxQqHKg2PZ0/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert12.png'
    },
    {
      id: 19,
      title: 'Python Foundation Certification',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/file/d/13Dn4RkFVw-K0qxR3DeUruKj6vbsoRr_-/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert13.png'
    },
    {
      id: 20,
      title: 'Java Programming Fundamentals',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/file/d/1wfySGmdTbej3wzl71FqDtIwGi68pf7gk/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert14.png'
    },
    {
      id: 21,
      title: 'Programming Using C++',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/file/d/1XpARMlmiTpyN0V-VqN-OkaQIMiZ3k1u6/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert15.png'
    },
    {
      id: 22,
      title: 'SQL (Advanced)',
      issuer: 'Hackerrank',
      link: 'https://drive.google.com/file/d/1gtrVXn2Cs49QQ6aI35J645f7ktuU21vT/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert16.png'
    },
    {
      id: 23,
      title: 'CSS (Basic)',
      issuer: 'Hackerrank',
      link: 'https://drive.google.com/file/d/10a0VNPMlRCCaYO8YkujHVixTv2ruIXLA/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert17.png'
    },
    {
      id: 24,
      title: 'Python (Basic)',
      issuer: 'Hackerrank',
      link: 'https://drive.google.com/file/d/1x3RCIwC_Ic8XI3vrEFkCAbweyq5oTZtD/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert18.png'
    },
    {
      id: 25,
      title: 'Java Training',
      issuer: 'Spoken Tutorial Project at IIT Bombay',
      link: 'https://drive.google.com/file/d/1iidE4bHrGzBIiguA3gC-OURAPUC2VcF5/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert20.png'
    },
    {
      id: 26,
      title: 'DevOps 101: What is DevOps?',
      issuer: 'simplilearn SkillUP',
      link: 'https://drive.google.com/file/d/1cnut-icXgfDIw0OmR0B5PrSr_X0hSTIO/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert21.png'
    },
    {
      id: 27,
      title: 'Microsoft Learn AI Skills Challenge',
      issuer: 'Microsoft Learn',
      link: 'https://drive.google.com/file/d/1QSZ8nJTDwFROZNEaasVCdBiD_SjonNiy/view?usp=sharing',
      image: process.env.PUBLIC_URL + '/images/Cert22.png'
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
          {displayedCertifications.map((cert, index) => (
            <motion.div 
              key={cert.id} 
              className="certification-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={index % 3}
              whileHover={{ y: -5 }}
            >
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
            </motion.div>
          ))}
        </div>

        {allCertifications.length > itemsToShow && (
          <div className="show-more-container">
            <button
              onClick={() => setShowAll(!showAll)}
              className="show-more-btn"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>

            {showAll && (
              <button
                onClick={() => window.open('https://drive.google.com/drive/folders/1dUX_Ft9FhtCP8kyLW7KWQqdY4VkbWWyP?usp=drive_link')}
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
