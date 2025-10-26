import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Applications",
      institution: "Sir M Visvesvaraya Institute of Technology",
      duration: "2022 - 2024",
      score: "CGPA: 9.23",
      icon: "🎓",
      details: [
        "Specialized in Advanced Web Technologies and Machine Learning",
        "Completed major projects in AI/ML and Web Development",
        "Participated in various technical workshops and coding competitions"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications",
      institution: "Bapuji Institute of Hi-Tech Education",
      duration: "2019 - 2022",
      score: "CGPA: 8.2",
      icon: "💻",
      details: [
        "Foundation in Computer Science fundamentals",
        "Projects in Web Development and Database Management",
        "Active participation in college technical festivals"
      ]
    },
    {
      id: 3,
      degree: "PUC (PCMB)",
      institution: "DRM Science PU College",
      duration: "2017 - 2019",
      score: "Science Stream",
      icon: "🔬",
      details: [
        "Physics, Chemistry, Mathematics, Biology",
        "Foundation for engineering and technology studies",
        "Developed analytical and problem-solving skills"
      ]
    },
    {
      id: 4,
      degree: "SSLC",
      institution: "Rashtrotthana Vidyalaya School",
      duration: "2017",
      score: "School Education",
      icon: "📚",
      details: [
        "Completed secondary school education",
        "Developed interest in mathematics and science",
        "Participated in various extracurricular activities"
      ]
    }
  ];

  const certifications = [
    {
      title: "Web Development",
      issuer: "Various Online Platforms",
      year: "2022-2024"
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Online Courses",
      year: "2023"
    },
    {
      title: "React.js Development",
      issuer: "Self-Paced Learning",
      year: "2023-2024"
    },
    {
      title: "Python Programming",
      issuer: "Academic Curriculum",
      year: "2022-2023"
    }
  ];

  return (
    <div className="education">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Education</h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">My academic journey and qualifications</p>
        </div>

        <div className="education-content">
          <div className="education-timeline">
            {educationData.map((edu, index) => (
              <div key={edu.id} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
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
                    
                    {/* <div className="edu-achievement">
                      <span className="achievement-badge">
                        {edu.score.includes('9.23') ? 'First Class with Distinction' : 
                         edu.score.includes('8.2') ? 'First Class' : 'Completed'}
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="education-sidebar">
            {/* <div className="certifications-section">
              <h3 className="sidebar-title">Certifications & Learning</h3>
              <div className="certifications-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <div className="cert-icon">📜</div>
                    <div className="cert-info">
                      <h4>{cert.title}</h4>
                      <p>{cert.issuer}</p>
                      <span className="cert-year">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="academic-stats">
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
                  <div className="stat-value">7+</div>
                  <div className="stat-label">Projects</div>
                </div>
              </div>
            </div>

            <div className="skills-developed">
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