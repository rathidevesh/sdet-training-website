import React from 'react';
import './Hero1.css';

const Hero1 = () => {
  return (
    <div className="landing-container">
      <div className="content">
        <div className="badge">
          <span className="rocket-icon">🚀</span>
          #1 SDET Training Program
        </div>

        <h1 className="main-heading">
          Master <span className="gradient-text">Software Testing</span> &<br />
          Automation
        </h1>

        <p className="description">
          Transform your career with our comprehensive SDET program. Learn cutting-edge automation frameworks, API
          testing, mobile testing, and land your dream job at top tech companies.
        </p>

        <div className="buttons">
          <button className="btn-primary">
            <span className="play-icon">▶</span>
            Start Your Journey Today
          </button>
          <button className="btn-secondary">
            <span className="grid-icon">⊞</span>
            Explore Courses
          </button>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Industry Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">85%</div>
              <div className="stat-label">Job Placement</div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Hero1;
