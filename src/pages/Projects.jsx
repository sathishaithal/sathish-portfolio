import React, { useState } from 'react';
import './Projects.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: 'ERP System Development',
      year: '2024',
      type: 'Company Project',
      status: 'ongoing',
      description:
        'Enterprise resource planning system for managing finance, HR, inventory, and customer workflows with real-time business insights.',
      technologies: ['PHP', 'MySQL', 'Laravel', 'JavaScript', 'HTML', 'CSS'],
      image: '🏢',
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      year: '2024',
      type: 'Company Project',
      status: 'ongoing',
      description:
        'Real-time business intelligence dashboard with interactive charts and visual reports for operational and sales analysis.',
      technologies: ['Angular', 'TypeScript', 'PHP', 'REST API'],
      image: '📊',
    },
    {
      id: 3,
      title: 'MERN ERP Reporting Module',
      year: '2024',
      type: 'Company Project',
      status: 'ongoing',
      description:
        'Reporting module built with the MERN stack for ERP systems, featuring dynamic reports, exports, and customizable analytics dashboards.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      image: '📈',
    },
    {
      id: 4,
      title: 'MERN Notes App',
      year: '2024',
      type: 'Full Stack Project',
      status: 'completed',
      description:
        'A full-stack note-taking application with authentication, CRUD operations, and user-specific data isolation built with the MERN stack.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
      link: 'https://github.com/sathishaithal/MERN-Notes',
      image: '📝',
    },
    {
      id: 5,
      title: 'CardioForesight',
      year: '2024',
      type: 'Academic Project',
      status: 'completed',
      description:
        'AI-based cardiovascular risk prediction system using XGBoost and health parameters such as BMI to provide tailored health recommendations.',
      technologies: ['Python', 'Machine Learning', 'XGBoost', 'AI'],
      link: 'https://github.com/sathishaithal/CardioForesight',
      image: '❤️',
    },
    {
      id: 6,
      title: 'Quiz Application',
      year: '2023',
      type: 'Academic Project',
      status: 'completed',
      description:
        'A mobile quiz application built with Java and Android Studio that lets users answer topic-based questions and view results instantly.',
      technologies: ['Java', 'Android Studio', 'Mobile Development'],
      link: 'https://github.com/sathishaithal/quiz-MobileApplication',
      image: '📝',
    },
    {
      id: 7,
      title: 'Live Weather App',
      year: '2022',
      type: 'Personal Project',
      status: 'completed',
      description:
        'Weather application that fetches live updates by city name using external APIs, helping users plan with real-time forecasts.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      link: 'https://sathishaithal.github.io/saweather.github.io/',
      image: '🌤️',
    },
    {
      id: 8,
      title: 'Product Comparison',
      year: '2023',
      type: 'Academic Project',
      status: 'completed',
      description:
        'Web-based product comparison system for phones, TVs, tablets, and laptops with user queries and admin support features.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      link: '#',
      image: '🛒',
    },
    {
      id: 9,
      title: 'Basic Banking System',
      year: '2023',
      type: 'Personal Project',
      status: 'completed',
      description:
        'Banking system with dummy customer records, transfer tracking, and transaction history management for basic operations.',
      technologies: ['Web Development', 'Database', 'Banking'],
      link: '#',
      image: '🏦',
    },
  ];

  const ongoingProjects = projects.filter((project) => project.status === 'ongoing');
  const completedProjects = projects.filter((project) => project.status === 'completed');
  const initialDisplayCount = 3;
  const displayedCompletedProjects = showAll ? completedProjects : completedProjects.slice(0, initialDisplayCount);

  return (
    <div className="projects">
      <div className="container">
        <div className="section-header sf">
          <h1 className="section-title">My Projects</h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">A showcase of my professional, academic, and personal projects</p>
        </div>

        <div className="projects-stats">
          <div className="stat-badge sf-scale" style={{ transitionDelay: '0.25s' }}>
            <h3>8+</h3>
            <p>Total Projects</p>
          </div>
          <div className="stat-badge sf-scale" style={{ transitionDelay: '0.5s' }}>
            <h3>4</h3>
            <p>Academic Projects</p>
          </div>
        </div>

        {ongoingProjects.length > 0 && (
          <div className="projects-section">
            <h2 className="section-subtitle sf" style={{ transitionDelay: '0.05s' }}>Current Projects</h2>
            <div className="projects-grid">
              {ongoingProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-card ongoing-card sf"
                  style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
                >
                  <div className="project-badge ongoing-badge">Ongoing</div>

                  <div className="project-image">
                    <div className="project-icon">{project.image}</div>
                    <div className="project-year">{project.year}</div>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-type">{project.type}</span>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="projects-section">
          <h2 className="section-subtitle sf" style={{ transitionDelay: '0.05s' }}>Academic and Other Projects</h2>
          <div className="projects-grid">
            {displayedCompletedProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card completed-card sf"
                style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
              >
                <div className="project-badge completed-badge">Completed</div>

                <div className="project-image">
                  <div className="project-icon">{project.image}</div>
                  <div className="project-year">{project.year}</div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-type">{project.type}</span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      {project.id === 4 || project.id === 5 ? 'View Project' : 'View Details'}
                      <span className="link-arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAll && completedProjects.length > initialDisplayCount && (
            <div className="show-more-section">
              <button className="show-more-btn" onClick={() => setShowAll(true)}>
                Show More Projects ({completedProjects.length - initialDisplayCount})
                <span className="btn-arrow">↓</span>
              </button>
            </div>
          )}

          {showAll && (
            <div className="show-more-section">
              <button className="show-less-btn" onClick={() => setShowAll(false)}>
                Show Less
                <span className="btn-arrow">↑</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
