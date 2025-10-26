import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">About Me</h1>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="intro-card">
              <h2>Hello! I'm Sathish Aithal V S</h2>
              <p>
                As a Master of Computer Applications (MCA) graduate and a dedicated developer 
                with expertise in web development and machine learning. This journey focuses 
                on optimizing user experiences and enhancing systems to deliver high-impact 
                technology solutions. Committed to continuous learning and innovation, striving 
                to solve real-world problems through impactful work.
              </p>
            </div>
            
            <div className="experience-grid">
            
              
              <div className="experience-card">
                <div className="exp-icon">💼</div>
                <h3>Software Developer</h3>
                <p className="company">Current Position</p>
                <p className="duration">Present</p>
                <ul className="responsibilities">
                  <li>Developing innovative web applications (ERP, Dashboard etc)</li>
                  <li>Working with Angular, PHP, Laravel and other frameworks</li>
                  <li>Creating user-friendly and efficient solutions</li>
                </ul>
              </div>

                <div className="experience-card">
                <div className="exp-icon">📊</div>
                <h3>Data Analyst & Software Developer</h3>
                <p className="company">BLUNET Ventures Private Limited (Internship)</p>
                <p className="duration">Oct 2023 - Dec 2023</p>
                <ul className="responsibilities">
                  <li>Developed and deployed machine learning models to analyze mold machine data</li>
                  <li>Preprocessed data, implemented ML algorithms, trained and fine-tuned models</li>
                  <li>Evaluated performance with iterative improvements</li>
                  <li>Performed manual QA for company website, ensuring functionality and usability</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">8 Months</div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;