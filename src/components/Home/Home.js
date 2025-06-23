import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaHackerrank} from 'react-icons/fa';
import { BsCcCircleFill } from "react-icons/bs";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { IoIosLink } from "react-icons/io";
import './Home.css';

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const socialLinks = [
    {
      name: 'Leetcode',
      icon: <SiLeetcode />,
      url: 'https://leetcode.com/u/MSV129/',
      ariaLabel: 'Visit my Leetcode profile',
    },
    {
      name: 'Codeforces',
      icon: <SiCodeforces />,
      url: 'https://codeforces.com/profile/msvaditya129',
      ariaLabel: 'Connect with me on Codeforces',
    },
    {
      name: 'Hackerrank',
      icon: <FaHackerrank />,
      url: 'https://www.hackerrank.com/profile/msvaditya129',
      ariaLabel: 'Follow me on Hackerrank',
    },
    {
      name: 'CodeChef',
      icon: <BsCcCircleFill />,
      url: 'https://www.codechef.com/users/msvaditya',
      ariaLabel: 'Connect with me on CodeChef',
    },
    {
      name: 'Smart Interviews',
      icon: <IoIosLink />,
      url: 'https://smartinterviews.in/profile/22501A1264',
      ariaLabel: 'Connect with me on Smart Interviews',
    },
  ];

  // Typewriter effect for the subtitle
  useEffect(() => {
    const roles = ['Full Stack Developer', 'Problem Solver', 'Tech Lover'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';
    let typingSpeed = 100;

    const type = () => {
      const role = roles[roleIndex];

      if (isDeleting) {
        currentText = role.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        currentText = role.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      const typewriterElement = document.querySelector('.typewriter');
      if (typewriterElement) {
        typewriterElement.textContent = currentText;
      }

      if (!isDeleting && currentText === role) {
        typingSpeed = 2000; // Pause at the end of a word
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div
            className="content-wrapper"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <span
              className="greeting"
              variants={item}
            >
              Hi, I'm
            </span>

            <h1
              className="name"
              variants={item}
            >
              <span className="highlight">Mandava. Sai Venkata Aditya Vardhan</span>
            </h1>

            <h2
              className="title"
              variants={item}
            >
              <span className="typewriter"></span>
              <span className="cursor">|</span>
            </h2>

            <div
              className="cta-buttons"
              variants={item}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cta-button primary"
                aria-label="View my projects"
              >
                View My Work
              </Link>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-linkbyme"
                  aria-label={social.ariaLabel}
                  data-tooltip={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="home-image">
          <div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
          >
            <div className="image-wrapper">
              <div className="placeholder-image">
                <img src={process.env.PUBLIC_URL + '/images/Myphoto.jpg'} alt='Your Snap' className='profile-photo'/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="scroll-down"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}
      >
        <Link to="about" smooth={true} duration={500} className="scroll-link">
          <span className="scroll-text">Scroll Down</span>
          <span className="scroll-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Home;
