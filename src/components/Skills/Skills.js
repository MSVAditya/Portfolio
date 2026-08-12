import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiReact, SiRedux, SiNodedotjs, SiExpress, SiFastapi, SiPostgresql, SiMongodb, SiSqlalchemy, SiAmazonwebservices, SiGooglecloud, SiPython, SiGit, SiGithub, SiPostman, SiJenkins, SiLangchain, } from "react-icons/si";
import { FaDatabase, FaCode, FaNetworkWired, FaBrain, FaProjectDiagram, FaLock, FaServer, FaJava, } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import './Skills.css';

const Skills = () => {
  const skills = [
    // Web Development
    { name: "HTML", icon: <SiHtml5 className="skill-icon" /> },
    { name: "CSS", icon: <SiCss3 className="skill-icon" /> },
    { name: "JavaScript", icon: <SiJavascript className="skill-icon" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="skill-icon" /> },
    { name: "React", icon: <SiReact className="skill-icon" /> },
    { name: "Redux", icon: <SiRedux className="skill-icon" /> },
    { name: "Node.js", icon: <SiNodedotjs className="skill-icon" /> },
    { name: "Express.js", icon: <SiExpress className="skill-icon" /> },
    { name: "FastAPI", icon: <SiFastapi className="skill-icon" /> },
    { name: "REST APIs", icon: <FaServer className="skill-icon" /> },
    { name: "Responsive Web Design", icon: <FaCode className="skill-icon" /> },
    { name: "JWT Authentication", icon: <FaLock className="skill-icon" /> },

    // Artificial Intelligence
    { name: "Machine Learning", icon: <FaBrain className="skill-icon" /> },
    { name: "Natural Language Processing (NLP)", icon: <FaBrain className="skill-icon" /> },
    { name: "Large Language Models (LLMs)", icon: <FaBrain className="skill-icon" /> },
    { name: "Retrieval-Augmented Generation (RAG)", icon: <FaProjectDiagram className="skill-icon" /> },
    { name: "Agentic AI", icon: <FaBrain className="skill-icon" /> },
    { name: "LangChain", icon: <SiLangchain className="skill-icon" /> },
    { name: "LangGraph", icon: <FaProjectDiagram className="skill-icon" /> },
    { name: "Prompt Engineering", icon: <FaCode className="skill-icon" /> },

    // Programming Languages
    { name: "Python", icon: <SiPython className="skill-icon" /> },
    { name: "Java", icon: <FaJava className="skill-icon" /> },
    { name: "C++", icon: <FaCode className="skill-icon" /> },
    { name: "C", icon: <FaCode className="skill-icon" /> },

    // Databases
    { name: "MySQL", icon: <FaDatabase className="skill-icon" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="skill-icon" /> },
    { name: "MongoDB", icon: <SiMongodb className="skill-icon" /> },
    { name: "SQLAlchemy", icon: <SiSqlalchemy className="skill-icon" /> },

    // Cloud Technologies
    { name: "Microsoft Azure", icon: <VscAzure className="skill-icon" /> },
    { name: "AWS", icon: <SiAmazonwebservices className="skill-icon" /> },
    { name: "Google Cloud", icon: <SiGooglecloud className="skill-icon" /> },

    // Tools & DevOps
    { name: "Git", icon: <SiGit className="skill-icon" /> },
    { name: "GitHub", icon: <SiGithub className="skill-icon" /> },
    { name: "Postman", icon: <SiPostman className="skill-icon" /> },
    { name: "Jenkins", icon: <SiJenkins className="skill-icon" /> },

    // Computer Science Fundamentals
    { name: "Data Structures & Algorithms", icon: <FaCode className="skill-icon" /> },
    { name: "Object-Oriented Programming (OOP)", icon: <FaCode className="skill-icon" /> },
    { name: "DBMS", icon: <FaDatabase className="skill-icon" /> },
    { name: "Operating Systems", icon: <FaCode className="skill-icon" /> },
    { name: "Computer Networks", icon: <FaNetworkWired className="skill-icon" /> },
    { name: "Microservices", icon: <FaProjectDiagram className="skill-icon" /> },
    { name: "MVC Architecture", icon: <FaProjectDiagram className="skill-icon" /> },
    { name: "JSON", icon: <FaCode className="skill-icon" /> },
  ];

  const categories = [
    {
      name: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "React",
        "Redux",
        "Node.js",
        "Express.js",
        "FastAPI",
        "REST APIs",
        "Responsive Web Design",
        "JWT Authentication",
      ],
    },
    {
      name: "Artificial Intelligence",
      skills: [
        "Machine Learning",
        "Natural Language Processing (NLP)",
        "Large Language Models (LLMs)",
        "Retrieval-Augmented Generation (RAG)",
        "Agentic AI",
        "LangChain",
        "LangGraph",
        "Prompt Engineering",
      ],
    },
    {
      name: "Programming Languages",
      skills: [
        "Python",
        "Java",
        "C++",
        "C",
      ],
    },
    {
      name: "Databases",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQLAlchemy",
      ],
    },
    {
      name: "Cloud Technologies",
      skills: [
        "Microsoft Azure",
        "AWS",
        "Google Cloud",
      ],
    },
    {
      name: "Tools & DevOps",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Jenkins",
      ],
    },
    {
      name: "Computer Science Fundamentals",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Microservices",
        "MVC Architecture",
        "JSON",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-categories">
          {categories.map((category, index) => (
            <div key={index} className="category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-grid">
                {skills
                  .filter(skill => category.skills.includes(skill.name))
                  .map((skill, idx) => (
                    <div key={idx} className="skill-card">
                      <div className="skill-header">
                        <div className="skill-icon-wrapper">
                          {skill.icon}
                        </div>
                        <h4 className="skill-name">{skill.name}</h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
