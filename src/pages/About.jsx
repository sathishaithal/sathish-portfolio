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
                A passionate Software Developer and MCA Graduate with expertise in full-stack web development 
                and machine learning. I specialize in building scalable enterprise solutions and data-driven 
                applications that solve real-world business challenges. My journey is driven by a commitment 
                to creating efficient, user-centric technology solutions that deliver measurable impact.
              </p>
              <p>
                With hands-on experience in modern web technologies and a strong foundation in computer science 
                principles, I bridge the gap between complex business requirements and technical implementation. 
                I thrive on transforming ideas into robust, high-performance applications that enhance user 
                experiences and drive business growth.
              </p>
            </div>
            
            <div className="experience-grid">
              <div className="experience-card">
                <div className="exp-icon">💼</div>
                <h3>Software Developer</h3>
                <p className="company">Tulasi Technologies</p>
                <p className="duration">Jan 2025 - Present</p>
                <ul className="responsibilities">
                  <li>Developing enterprise-level ERP systems and business intelligence dashboards using Angular, PHP, and MySQL</li>
                  <li>Building responsive web applications with modern frameworks including Laravel, React, and TypeScript</li>
                  <li>Implementing RESTful APIs and optimizing database performance for high-traffic applications</li>
                  <li>Collaborating with cross-functional teams to deliver scalable and maintainable software solutions</li>
                  <li>Integrating data visualization tools and analytics features for real-time business insights</li>
                </ul>
              </div>

              <div className="experience-card">
                <div className="exp-icon">📊</div>
                <h3>Data Analyst & Software Developer</h3>
                <p className="company">BLUNET Ventures Private Limited (Internship)</p>
                <p className="duration">Oct 2023 - Dec 2023</p>
                <ul className="responsibilities">
                  <li>Developed and deployed machine learning models to analyze industrial mold machine data using Python and XGBoost</li>
                  <li>Engineered data preprocessing pipelines and implemented ML algorithms for predictive maintenance</li>
                  <li>Performed comprehensive quality assurance testing for company websites, ensuring optimal functionality</li>
                  <li>Created data visualization dashboards to present analytical insights to stakeholders</li>
                  <li>Optimized model performance through iterative testing and fine-tuning of hyperparameters</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">7+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10 Months</div>
              <div className="stat-label">Professional Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            {/* <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Full-Stack Projects</div>
            </div> */}
          </div>
        </div>

        {/* Skills Overview Section */}
        <div className="skills-overview">
          <h3 className="overview-title">Technical Expertise</h3>
          <div className="skills-categories">
            <div className="skill-category">
              <h4>Frontend Development</h4>
              <p>Angular, React, TypeScript, JavaScript, HTML5, CSS3, Bootstrap</p>
            </div>
            <div className="skill-category">
              <h4>Backend Development</h4>
              <p>PHP, Laravel, Node.js, Express, REST APIs, MySQL, MongoDB</p>
            </div>
            <div className="skill-category">
              <h4>Data Science & ML</h4>
              <p>Python, Machine Learning, XGBoost, Data Analysis, Pandas, NumPy</p>
            </div>
            <div className="skill-category">
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