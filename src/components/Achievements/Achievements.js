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
      title: 'Rashtrabhasha Examination',
      description: 'Secured second-class in the Rashtrabhasha examination, demonstrating a good command of the Hindi language.',
      certificateLink: 'images/AA1.jpg'
    },
    {
      id: 2,
      title: 'Praveshika Examination',
      description: 'Achieved second-class distinction in the Praveshika examination, showcasing strong proficiency in the subject.',
      certificateLink: 'images/AA2.jpg'
    },
    {
      id: 3,
      title: 'India-Level Mathematics Olympiad',
      description: 'Recognized for exceptional problem-solving skills at a national-level mathematics competition.',
      certificateLink: 'images/AA3.jpg'
    },
    {
      id: 4,
      title: '8-Hour Hackathon [Java Full Stack]',
      description: 'Won first place in a competitive hackathon, showcasing full-stack development expertise under time constraints.',
      certificateLink: 'images/AA4.jpg'
    },
    {
      id: 5,
      title: 'GEN-AI Jams by GDG',
      description: 'Successfully participated in AI-focused coding jams conducted by Google Developer Group, enhancing AI and coding skills.',
      certificateLink: 'images/AA5.jpg'
    },
  ];

  const nonAcademicAchievements = [
    {
      id: 1,
      title: '3rd National Shotokan Karate Championship (2016)',
      description: 'Secured first position at the national-level Shotokan Karate Championship, demonstrating excellence in martial arts.',
      certificateLink: 'images/NA1.jpg'
    },
    {
      id: 2,
      title: 'South India Invitational Karate Championship (2018)',
      description: 'Achieved first place in a prestigious karate championship, reflecting dedication and skill in sports.',
      certificateLink: 'images/NA2.jpg'
    },
    {
      id: 3,
      title: 'Completed Black Belt Training in Karate (2019)',
      description: 'Earned a black belt in karate, marking a high level of discipline, strength, and mastery in martial arts.',
      certificateLink: 'images/NA3.jpg'
    },
    {
      id: 4,
      title: 'NSS Student Coordinator',
      description: 'Led National Service Scheme activities, coordinating social and community service initiatives.',
      certificateLink: 'images/NA4.jpg'
    },
    {
      id: 5,
      title: 'Coordinator of SITAR 2K25 Event',
      description: 'Managed and organized the SITAR 2K25 event, demonstrating leadership and event management skills.',
      certificateLink: 'images/NA5.jpg'
    },
    {
      id: 6,
      title: 'Organizer of International Cultural Festival “Rath Fest 2024”',
      description: 'Successfully organized a global cultural festival, promoting diversity, teamwork, and event coordination expertise.',
      certificateLink: 'images/NA6.jpg'
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
