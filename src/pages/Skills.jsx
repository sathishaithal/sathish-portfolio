import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Technologies',
      items: [
        { name: 'React.js', level: 85, icon: '⚛️' },
        { name: 'Angular + TypeScript', level: 70, icon: '🅰️' },
        { name: 'JavaScript', level: 80, icon: '🟨' },
        { name: 'HTML5', level: 90, icon: '🌐' },
        { name: 'CSS3', level: 85, icon: '🎨' },
        { name: 'Bootstrap', level: 75, icon: '💎' },
      ],
    },
    {
      category: 'Backend & Databases',
      items: [
        { name: 'Laravel', level: 75, icon: '🐘' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'PHP', level: 75, icon: '🔷' },
        { name: 'MySQL', level: 80, icon: '🗄️' },
        { name: 'Java', level: 70, icon: '☕' },
        { name: 'C++', level: 65, icon: '⚙️' },
      ],
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'GitHub', level: 80, icon: '🐙' },
        { name: 'Machine Learning', level: 75, icon: '🤖' },
        { name: 'Android Studio', level: 70, icon: '📱' },
        { name: 'TypeScript', level: 70, icon: '🔷' },
      ],
    },
  ];

  return (
    <div className="skills">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">My Skills</h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">Technologies & Frameworks I work with</p>
        </div>

        <div className="skills-container">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h2 className="category-title">{skillCategory.category}</h2>
              <div className="skills-grid">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <h3 className="skill-name">{skill.name}</h3>
                    </div>
                    <div className="skill-level">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                      </div>
                      <span className="level-percent">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>💡 My Approach</h3>
            <p>
              I believe in continuous learning and practical problem solving. My focus is on building efficient,
              scalable, and user-friendly applications with modern web technologies and machine learning.
            </p>
          </div>

          <div className="summary-card">
            <h3>🎯 Current Focus</h3>
            <p>
              I am currently strengthening my React ecosystem knowledge, exploring advanced machine learning,
              and building full-stack applications with modern architectures using Laravel and Angular.
            </p>
          </div>

          <div className="summary-card">
            <h3>🚀 Full-Stack Expertise</h3>
            <p>
              I work across both frontend (React, Angular) and backend (MySQL, Node.js), enabling me to build
              complete web applications from concept to deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
