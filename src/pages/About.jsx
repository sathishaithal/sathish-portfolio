import React from 'react';
import './About.css';
import { getExperienceYearsText } from '../utils/experience';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const experienceText = getExperienceYearsText();
  useScrollAnimation();

  return (
    <div className="about">
      <div className="container">
        <div className="section-header sf">
          <h1 className="section-title">About Me</h1>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="intro-card sf" style={{ transitionDelay: '0.25s' }}>
              <h2>Hello! I'm Sathish Aithal V S</h2>
              <p>
                I am a Software Developer and MCA graduate with experience in full-stack web development and
                machine learning. I focus on building scalable, practical applications that solve real-world
                business challenges.
              </p>
              <p>
                With a strong foundation in computer science and hands-on experience in modern web technologies,
                I turn business requirements into reliable, high-performance software that improves user experience
                and supports business growth.
              </p>
            </div>

            <div className="experience-grid">
              <div className="experience-card sf-left" style={{ transitionDelay: '0.5s' }}>
                <div className="exp-icon">💼</div>
                <h3>Software Developer</h3>
                <p className="company">Tulasi Technologies</p>
                <p className="duration">Jan 2025 - Present</p>
                <ul className="responsibilities">
                  <li>Developed and maintained enterprise ERP modules covering Sales, Inventory, Finance, Billing, Authorization, GST, e-Invoicing, and Reporting using PHP and MySQL</li>
                  <li>Designed and built interactive analytics dashboards using Angular and TypeScript, improving API response performance by approximately 40% through optimized backend queries and efficient frontend data handling</li>
                  <li>Designed and implemented RESTful APIs for ERP modules to enable seamless communication between frontend and backend systems</li>
                  <li>Optimized complex MySQL queries, reporting logic, and backend processing for large transactional datasets, significantly improving report generation performance</li>
                  <li>Collaborated with cross-functional teams to build scalable ERP applications, implement new business requirements, and deliver production-ready software solutions</li>
                  <li>Participated in requirement analysis, debugging, feature enhancements, database modifications, deployment, and production support</li>
                </ul>
              </div>

              <div className="experience-card sf-right" style={{ transitionDelay: '0.75s' }}>
                <div className="exp-icon">📊</div>
                <h3>Data Analyst and Software Developer Intern</h3>
                <p className="company">BLUNET Ventures Private Limited (Internship)</p>
                <p className="duration">Oct 2023 - Dec 2023</p>
                <ul className="responsibilities">
                  <li>Developed machine learning models to analyze industrial mold machine data using Python and XGBoost</li>
                  <li>Built preprocessing pipelines and predictive maintenance workflows</li>
                  <li>Performed quality assurance testing for company websites to ensure reliable functionality</li>
                  <li>Created dashboards to present analytical insights to stakeholders</li>
                  <li>Improved model performance through testing and hyperparameter tuning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card sf-scale" style={{ transitionDelay: '0.3s' }}>
              <div className="stat-number">8+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card sf-scale" style={{ transitionDelay: '0.55s' }}>
              <div className="stat-number">{experienceText}</div>
              <div className="stat-label">Professional Experience</div>
            </div>
            <div className="stat-card sf-scale" style={{ transitionDelay: '0.8s' }}>
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>

        <div className="skills-overview sf" style={{ transitionDelay: '0.1s' }}>
          <h3 className="overview-title">Technical Expertise</h3>
          <div className="skills-categories">
            <div className="skill-category sf" style={{ transitionDelay: '0.2s' }}>
              <h4>Frontend Development</h4>
              <p>Angular, React, TypeScript, JavaScript, HTML5, CSS3, Bootstrap</p>
            </div>
            <div className="skill-category sf" style={{ transitionDelay: '0.4s' }}>
              <h4>Backend Development</h4>
              <p>PHP, Node.js, Express, REST APIs, MySQL, PostgreSQL</p>
            </div>
            <div className="skill-category sf" style={{ transitionDelay: '0.6s' }}>
              <h4>Data Science & ML</h4>
              <p>Python, Machine Learning, XGBoost, Data Analysis, Pandas, NumPy</p>
            </div>
            <div className="skill-category sf" style={{ transitionDelay: '0.8s' }}>
              <h4>Tools & Platforms</h4>
              <p>Git, GitHub, Android Studio, VS Code, Postman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
