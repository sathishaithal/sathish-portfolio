import React from 'react';
import './Education.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Education = () => {
  useScrollAnimation();

  const educationData = [
    {
      id: 1,
      degree: 'Master of Computer Applications',
      institution: 'Sir M Visvesvaraya Institute of Technology',
      duration: '2022 - 2024',
      score: 'CGPA: 9.23',
      icon: '🎓',
      details: [
        'Specialized in advanced web technologies and machine learning',
        'Completed major projects in AI/ML and web development',
        'Participated in technical workshops and coding competitions',
      ],
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Applications',
      institution: 'Bapuji Institute of Hi-Tech Education',
      duration: '2019 - 2022',
      score: 'CGPA: 8.2',
      icon: '💻',
      details: [
        'Built a strong foundation in computer science fundamentals',
        'Completed projects in web development and database management',
        'Actively participated in college technical festivals',
      ],
    },
    {
      id: 3,
      degree: 'PUC (PCMB)',
      institution: 'DRM Science PU College',
      duration: '2017 - 2019',
      score: 'Science Stream',
      icon: '🔬',
      details: [
        'Studied Physics, Chemistry, Mathematics, and Biology',
        'Built a foundation for engineering and technology studies',
        'Developed analytical and problem-solving skills',
      ],
    },
    {
      id: 4,
      degree: 'SSLC',
      institution: 'Rashtrotthana Vidyalaya School',
      duration: '2017',
      score: 'School Education',
      icon: '📚',
      details: [
        'Completed secondary school education',
        'Developed an early interest in mathematics and science',
        'Participated in various extracurricular activities',
      ],
    },
  ];

  return (
    <div className="education">
      <div className="container">
        <div className="section-header sf">
          <h1 className="section-title">Education</h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">My academic journey and qualifications</p>
        </div>

        <div className="education-content">
          <div className="education-timeline">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className="timeline-item sf-left"
                style={{ transitionDelay: `${0.2 + index * 0.25}s` }}
              >
                <div className="timeline-marker">
                  <div className="marker-icon">{edu.icon}</div>
                  <div className="timeline-line"></div>
                </div>

                <div className="timeline-content">
                  <div className="edu-card">
                    <div className="edu-header">
                      <h3 className="edu-degree">{edu.degree}</h3>
                      <span className="edu-duration">{edu.duration}</span>
                    </div>

                    <div className="edu-institution">
                      <h4>{edu.institution}</h4>
                      <span className="edu-score">{edu.score}</span>
                    </div>

                    <ul className="edu-details">
                      {edu.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="education-sidebar">
            <div className="academic-stats sf-right" style={{ transitionDelay: '0.3s' }}>
              <h3 className="sidebar-title">Academic Highlights</h3>
              <div className="stats-grid">
                <div className="academic-stat">
                  <div className="stat-value">9.23</div>
                  <div className="stat-label">MCA CGPA</div>
                </div>
                <div className="academic-stat">
                  <div className="stat-value">8.2</div>
                  <div className="stat-label">BCA CGPA</div>
                </div>
                <div className="academic-stat">
                  <div className="stat-value">8+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="academic-stat">
                  <div className="stat-value">4</div>
                  <div className="stat-label">Degrees</div>
                </div>
              </div>
            </div>

            <div className="skills-developed sf-right" style={{ transitionDelay: '0.6s' }}>
              <h3 className="sidebar-title">Skills Developed</h3>
              <div className="skills-tags">
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Analytical Thinking</span>
                <span className="skill-tag">Research</span>
                <span className="skill-tag">Teamwork</span>
                <span className="skill-tag">Project Management</span>
                <span className="skill-tag">Technical Writing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
