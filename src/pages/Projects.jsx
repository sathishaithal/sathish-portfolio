import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "ERP System Development",
      year: "2024",
      type: "Company Project",
      status: "ongoing",
      description: "Enterprise Resource Planning system for managing business processes. Integrating modules for finance, HR, inventory, and customer relationship management. Streamlining operations and providing real-time business intelligence.",
      technologies: [],
      link: "#",
      image: "🏢"
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      year: "2024",
      type: "Company Project",
      status: "ongoing",
      description: "Real-time business intelligence dashboard with interactive charts, data visualization. Provides insights into sales performance and operational metrics.",
      technologies: [],
      link: "#",
      image: "📊"
    },
    {
      id: 3,
      title: "MERN Notes App",
      year: "2024",
      type: "Full Stack Project",
      status: "completed",
      description: "A complete full-stack note-taking application with user authentication and CRUD operations. Features JWT authentication, real-time updates, and user-specific data isolation. Built with React, Node.js, Express, and MongoDB.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
      link: "https://github.com/yourusername/mern-notes-app",
      image: "📝"
    },
    {
      id: 4,
      title: "CardioForesight",
      year: "2024",
      type: "Academic Project",
      status: "completed",
      description: "Employes AI to predict cardiovascular risk, offering personalized preventive strategies. Utilizing XGBoost and health parameters like BMI, it provides tailored diet/exercise plans and actionable insights.",
      technologies: ["Python", "Machine Learning", "XGBoost", "AI"],
      link: "https://sathishaithal.github.io/portfolio/",
      image: "❤️"
    },
    {
      id: 5,
      title: "Product Comparison",
      year: "2023",
      type: "Academic Project",
      status: "completed",
      description: "An online web-based comparison system for comparing many products like Phones, TVs, Tablets, Laptops, etc. Users can send queries and contact the administrator.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#",
      image: "🛒"
    },
    {
      id: 6,
      title: "Quiz Application",
      year: "2023",
      type: "Academic Project",
      status: "completed",
      description: "A mobile application developed using Java and Android Studio that offers an immersive quiz experience. Users answer questions across various topics and receive detailed results instantly.",
      technologies: ["Java", "Android Studio", "Mobile Development"],
      link: "#",
      image: "📝"
    },
    {
      id: 7,
      title: "Basic Banking System",
      year: "2023",
      type: "Personal Project",
      status: "completed",
      description: "Starts with creating dummy data for up to 10 customers. Features customer records with fields for sender, receiver, and transacted amount, recording all transfers.",
      technologies: ["Web Development", "Database", "Banking"],
      link: "#",
      image: "🏦"
    }
  ];

  const ongoingProjects = projects.filter(project => project.status === "ongoing");
  const completedProjects = projects.filter(project => project.status === "completed");
  const initialDisplayCount = 3;
  const displayedCompletedProjects = showAll ? completedProjects : completedProjects.slice(0, initialDisplayCount);

  return (
    <div className="projects">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">My Projects</h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">A showcase of my professional, academic, and personal projects</p>
        </div>

        <div className="projects-stats">
          <div className="stat-badge">
            <h3>7+</h3>
            <p>Total Projects</p>
          </div>
          <div className="stat-badge">
            <h3>{ongoingProjects.length}</h3>
            <p>Ongoing Projects</p>
          </div>
          <div className="stat-badge">
            <h3>4</h3>
            <p>Academic Projects</p>
          </div>
        </div>

        {/* Ongoing Projects Section */}
        {ongoingProjects.length > 0 && (
          <div className="projects-section">
            <h2 className="section-subtitle">Current Projects</h2>
            <div className="projects-grid">
              {ongoingProjects.map((project, index) => (
                <div key={project.id} className="project-card ongoing-card" style={{ animationDelay: `${index * 0.1}s` }}>
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
                    
                   
                    
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completed Projects Section */}
        <div className="projects-section">
          <h2 className="section-subtitle">Completed Projects</h2>
          <div className="projects-grid">
            {displayedCompletedProjects.map((project, index) => (
              <div key={project.id} className="project-card completed-card" style={{ animationDelay: `${index * 0.1}s` }}>
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
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-actions">
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      {project.id === 3 ? "View Project" : "View Details"}
                      <span className="link-arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAll && completedProjects.length > initialDisplayCount && (
            <div className="show-more-section">
              <button 
                className="show-more-btn"
                onClick={() => setShowAll(true)}
              >
                Show More Projects ({completedProjects.length - initialDisplayCount})
                <span className="btn-arrow">↓</span>
              </button>
            </div>
          )}

          {showAll && (
            <div className="show-more-section">
              <button 
                className="show-less-btn"
                onClick={() => setShowAll(false)}
              >
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