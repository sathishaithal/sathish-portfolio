import React, { useState } from 'react';
import './Contact.css';
import profileImage from '../assets/images/profile.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const isFormDisabled = true;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    if (isFormDisabled) return;

    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const showAlert = (type, message) => {
    if (isFormDisabled) return;
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: '', message: '' }), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormDisabled) return;

    if (!validateForm()) {
      showAlert('error', 'Please fix the errors in the form.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        showAlert('success', data.message || 'Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        showAlert('error', data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      showAlert('error', 'Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Contact Me</h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">Get in touch for opportunities or just to say hello!</p>
        </div>

        {alert.show && (
          <div className={`alert alert-${alert.type}`}>
            <div className="alert-content">
              {alert.type === 'success' ? '✅' : '❌'} {alert.message}
            </div>
            <button className="alert-close" onClick={() => setAlert({ show: false, type: '', message: '' })}>
              ×
            </button>
          </div>
        )}

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <img src={profileImage} alt="Sathish Aithal" className="info-image" />
              </div>
              <div className="info-content">
                <h3>Name</h3>
                <p>Sathish Aithal V S</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Address</h3>
                <p>Bengaluru, India</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>sathishaithal2001@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">💼</div>
              <div className="info-content">
                <h3>Current Position</h3>
                <p>Software Developer</p>
              </div>
            </div>

            <div className="availability">
              <h3>🟢 Available for Opportunities</h3>
              <p>Open to new projects and collaborations</p>
            </div>
          </div>

          <div className="contact-form-container">
            <p className="coming-soon-note">Contact form coming soon. Please use email or social links for now.</p>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  disabled={isLoading || isFormDisabled}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  disabled={isLoading || isFormDisabled}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter the subject"
                  disabled={isLoading || isFormDisabled}
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Enter your message..."
                  disabled={isLoading || isFormDisabled}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className={`submit-btn ${isLoading ? 'loading' : ''}`} disabled={isLoading || isFormDisabled}>
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="footer-note">
          <p>Created by Sathish Aithal V S - currently working as a Software Developer</p>
          <div className="social-links">
            <a href="https://github.com/sathishaithal" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sathishaithalvs" className="social-link">
              LinkedIn
            </a>
            <a href="https://x.com/SathishAithal?t=km9mqU1wJS55qdCDGOb3Rw&s=09" className="social-link">
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
