import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImage from '../assets/images/profile.jpg';
import { getExperienceYearsText } from '../utils/experience';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const experienceText = getExperienceYearsText();

  const texts = ['Web Developer', 'Software Developer', 'React Developer', 'MCA Graduate'];

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < currentText.length) {
          setDisplayText(currentText.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else if (currentCharIndex > 0) {
        setDisplayText(currentText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentTextIndex, isDeleting, texts]);

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="welcome-animation">
                <span className="wave">👋</span> Hello, I'm
              </div>

              <h1 className="hero-title">
                <span className="title-main">Sathish Aithal V S</span>
                <span className="title-underline"></span>
              </h1>

              <div className="typewriter-container">
                <h2 className="typewriter-text">
                  I'm a <span className="typed-text">{displayText}</span>
                  <span className="cursor">|</span>
                </h2>
              </div>

              <p className="hero-description">
                Software Engineer focused on modern web development and machine learning. I currently build
                enterprise solutions with React, Angular, PHP, and full-stack technologies, creating scalable
                applications that solve real business problems.
              </p>

              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View My Projects
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>

              <div className="quick-stats">
                <div className="stat">
                  <h3>8+</h3>
                  <p>Projects</p>
                </div>
                <div className="stat">
                  <h3>{experienceText}</h3>
                  <p>Experience</p>
                </div>
                <div className="stat">
                  <h3>10+</h3>
                  <p>Technologies</p>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <div className="image-container">
                <div className="profile-display">
                  <div className="photo-section">
                    <img src={profileImage} alt="Sathish Aithal" className="profile-photo" />
                  </div>
                  <div className="info-section">
                    <h3>Sathish Aithal V S</h3>
                    <p>Software Developer</p>
                    <div className="location">Bengaluru, India</div>
                    <div className="contact-info">
                      <p>sathishaithal2001@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
