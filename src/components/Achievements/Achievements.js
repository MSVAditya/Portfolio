import React from 'react';
import './Achievements.css';

const AchievementCard = ({ title, description, certificateLink }) => (
  <div className="achievement-card">
    <h3>{title}</h3>
    <p>{description}</p>
    {certificateLink && (
      <a
        href={certificateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-link"
      >
        View Certificate
      </a>
    )}
  </div>
);

const Achievements = () => {
  const academicAchievements = [
    {
      id: 1,
      title: 'Praveshika Examination',
      description: 'Achieved second-class distinction in the Praveshika examination, showcasing strong proficiency in the subject.',
      certificateLink: 'https://drive.google.com/file/d/1SLiRhqMSAFQG-WpU9GwuhFw43NnrmkCx/view?usp=sharing'
    },
    {
      id: 1,
      title: 'Rashtrabhasha Examination',
      description: 'Secured second-class in the Rashtrabhasha examination, demonstrating a good command of the Hindi language.',
      certificateLink: 'https://drive.google.com/file/d/1wOYkqEpS1jpZ7is-ekicwFQ6XwoNZwOP/view?usp=sharing'
    },
    {
      id: 3,
      title: 'India-Level Mathematics Olympiad',
      description: 'Recognized for exceptional problem-solving skills at a national-level mathematics competition.',
      certificateLink: 'https://drive.google.com/file/d/1bdRR7L--nPcdcZsH0MsKLRcHuCLc6Mdo/view?usp=sharing'
    },
    {
      id: 4,
      title: '8-Hour Hackathon [Java Full Stack]',
      description: 'Won first place in a competitive hackathon, showcasing full-stack development expertise under time constraints.',
      certificateLink: 'https://drive.google.com/file/d/1m8YPTftA9wGwWQw4y_bZli9jickrCosX/view?usp=sharing'
    },
    {
      id: 5,
      title: 'GEN-AI Jams by GDG',
      description: 'Successfully participated in AI-focused coding jams conducted by Google Developer Group, enhancing AI and coding skills.',
      certificateLink: 'https://drive.google.com/file/d/1kvfAQtBTIccpBZc56lJ2dbiVix8kAy8A/view?usp=sharing'
    },
    {
      id: 6,
      title: 'MLSA – Web Development Team Member',
      description: 'Successfully served as a Web Developer in the MLSA Club at Prasad V. Potluri Siddhartha Institute of Technology, contributing to web development initiatives and student technology activities.',
      certificateLink: 'https://drive.google.com/file/d/1ICA3jFW7FuR3vb1a5E73ZuXHCtrujd1m/view?usp=sharing'
    },
  ];

  const nonAcademicAchievements = [
    {
      id: 1,
      title: '3rd National Shotokan Karate Championship (2016)',
      description: 'Secured first position at the national-level Shotokan Karate Championship, demonstrating excellence in martial arts.',
      certificateLink: 'https://drive.google.com/file/d/16JkjOUQDqu79RHpTrksAf_Z4aEEjutvC/view?usp=sharing'
    },
    {
      id: 2,
      title: 'South India Invitational Karate Championship (2018)',
      description: 'Achieved first place in a prestigious karate championship, reflecting dedication and skill in sports.',
      certificateLink: 'https://drive.google.com/file/d/1spALvGK79V3P-vXTObqXU4_CrfS2KGPM/view?usp=sharing'
    },
    {
      id: 3,
      title: 'Completed Black Belt Training in Karate (2019)',
      description: 'Earned a black belt in karate, marking a high level of discipline, strength, and mastery in martial arts.',
      certificateLink: 'https://drive.google.com/file/d/1yYFfPQhi8ox9x9qxt6xxFi9ymVvIMc-K/view?usp=sharing'
    },
    {
      id: 4,
      title: 'NSS Student Coordinator',
      description: 'Led National Service Scheme activities, coordinating social and community service initiatives.',
      certificateLink: 'https://drive.google.com/file/d/1oUbaYm8zesXtmvzwqFkuiMBJLRLccs0c/view?usp=sharing'
    },
    {
      id: 5,
      title: 'Coordinator of SITAR 2K25 Event',
      description: 'Managed and organized the SITAR 2K25 event, demonstrating leadership and event management skills.',
      certificateLink: 'https://drive.google.com/file/d/1yJ0h_tA36V5nlZrHyDheWe9NJ1Asc_FY/view?usp=sharing'
    },
    {
      id: 6,
      title: 'Organizer of International Cultural Festival “Rath Fest 2024”',
      description: 'Successfully organized a global cultural festival, promoting diversity, teamwork, and event coordination expertise.',
      certificateLink: 'https://drive.google.com/file/d/1BqgDCTVEg0EHk17ncMtle3_D2oUZMOAL/view?usp=sharing'
    },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements</h2>
          <div className="section-divider"></div>
          <b className="section-subtitle">My Academic and Non-Academic Accomplishments</b>
        </div>

        <div className="achievements-container">
          <div className="achievement-category">
            <h3>Academic</h3>
            <div className="achievements-grid">
              {academicAchievements.map(achievement => (
                <AchievementCard key={achievement.id} {...achievement} />
              ))}
            </div>
          </div>

          <div className="achievement-category">
            <h3>Non-Academic</h3>
            <div className="achievements-grid">
              {nonAcademicAchievements.map(achievement => (
                <AchievementCard key={achievement.id} {...achievement} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
