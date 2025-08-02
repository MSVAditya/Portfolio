import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Internships from './components/Internships/Internships';
import Achievements from './components/Achievements/Achievements';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Create refs and inView states for each section
  const observerOptions = {
    threshold: [0.1, 0.5, 0.8],
    triggerOnce: false,
    rootMargin: '-20% 0px -70% 0px' // Adjust these values as needed
  };

  const [homeRef, homeInView] = useInView(observerOptions);
  const [aboutRef, aboutInView] = useInView(observerOptions);
  const [skillsRef, skillsInView] = useInView(observerOptions);
  const [projectsRef, projectsInView] = useInView(observerOptions);
  const [educationRef, educationInView] = useInView(observerOptions);
  const [internshipsRef, internshipsInView] = useInView(observerOptions);
  const [achievementsRef, achievementsInView] = useInView(observerOptions);
  const [certificationsRef, certificationsInView] = useInView(observerOptions);
  const [contactRef, contactInView] = useInView(observerOptions);

  // Add scroll event listener for more precise section detection
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY + 100; // Adjust this offset as needed
      
      // Get all section elements
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'internships', 'achievements', 'certifications', 'contact'];
      
      // Find the section that's currently in view
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        const elementBottom = elementTop + rect.height;
        
        // If the top of the viewport is within this section
        if (currentScroll >= elementTop && currentScroll < elementBottom) {
          currentSection = section;
          break;
        }
      }
      
      setActiveSection(currentSection);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array since we only want to set up the listener once

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar activeSection={activeSection} />
        <main>
          <div ref={homeRef}><Home id="home" /></div>
          <div ref={aboutRef}><About id="about" /></div>
          <div ref={skillsRef}><Skills id="skills" /></div>
          <div ref={projectsRef}><Projects id="projects" /></div>
          <div ref={educationRef}><Education id="education" /></div>
          <div ref={internshipsRef}><Internships id="internships" /></div>
          <div ref={achievementsRef}><Achievements id="achievements" /></div>
          <div ref={certificationsRef}><Certifications id="certifications" /></div>
          <div ref={contactRef}><Contact id="contact" /></div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
