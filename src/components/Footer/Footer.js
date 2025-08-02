import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="social-icon" />,
      url: 'https://github.com/MSVAditya',
      ariaLabel: 'Visit my GitHub profile'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="social-icon" />,
      url: 'https://www.linkedin.com/in/mandava-sai-venkata-aditya-vardhan-434119257',
      ariaLabel: 'Connect with me on LinkedIn'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="social-icon" />,
      url: 'https://www.instagram.com/m.s.v.adi_129/',
      ariaLabel: 'Follow me on Instagram'
    }
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', url: '#home' },
        { name: 'About', url: '#about' },
        { name: 'Skills', url: '#skills' },
        { name: 'Projects', url: '#projects' }
      ]
    },
    {
      title: 'More',
      links: [
        { name: 'Education', url: '#education' },
        { name: 'Internships', url: '#internships' },
        { name: 'Achievements', url: '#achievements' },
        { name: 'Certifications', url: '#certifications' },
        { name: 'Contact', url: '#contact' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div 
            className="footer-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="footer-about" variants={itemVariants}>
              <h3 className="footer-logo">M.S.V Aditya</h3>
              <p className="footer-about-text">
                A passionate developer creating beautiful and functional web applications. 
                Let's build something amazing together!
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${social.name.toLowerCase()}`}
                    aria-label={social.ariaLabel}
                    whileHover={{ y: -3 }}
                    variants={itemVariants}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map((section, index) => (
              <div 
                key={index} 
                className="footer-links"
                variants={itemVariants}
              >
                <h4 className="footer-links-title">{section.title}</h4>
                <ul className="footer-links-list">
                  {section.links.map((link, linkIndex) => (
                    <li 
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      variants={itemVariants}
                    >
                      <a 
                        href={link.url} 
                        className="footer-link"
                        target={link.url.startsWith('http') ? '_blank' : '_self'}
                        rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-copyright">
            <p>
              &copy; {currentYear} M.S.V Aditya. All rights reserved.
              <span className="footer-heart">
                Made with <FaHeart className="heart-icon" /> by M.S.V Aditya
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
