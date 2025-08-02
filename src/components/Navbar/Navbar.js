import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = ({ activeSection }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'internships', label: 'Internships' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="home" smooth={true} duration={500}>
            MSV's Portfolio
          </Link>
        </div>
        
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              spy={true}
              offset={-70}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
