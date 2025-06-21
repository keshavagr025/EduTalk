import React from 'react';
import './Home.css';
import SideBar from '../sidebar/SideBar';
import ChatBox from '../../components/chatbox/ChatBox';

const Home = () => {
  return (
    <div className="home">
      <div className="background-gradient"></div>
      
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨ AI-Powered Learning</span>
          </div>
          <h1 className="hero-title">
            Welcome to <span className="brand-name">EduSpeak</span> 🎙️
          </h1>
          <p className="hero-subtitle">
            Transform your learning experience with voice-powered interactive content
            and AI-driven educational tools.
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary">
              <span>Get Started</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="cta-button secondary">
              <span>Watch Demo</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">🎧</div>
            <div className="card-text">Voice Learning</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">📝</div>
            <div className="card-text">Interactive Quiz</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">📊</div>
            <div className="card-text">Progress Track</div>
          </div>
        </div>
      </section>

      <SideBar />

      <section className="features">
        <div className="features-header">
          <h2>Why Choose EduSpeak?</h2>
          <p>Discover the power of voice-enabled learning</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon">
              <div className="icon-bg">🎧</div>
            </div>
            <h3>Voice Learning</h3>
            <p>Transform any text content into natural-sounding speech with advanced Murf API integration for immersive learning experiences.</p>
            <div className="feature-stats">
              <span className="stat">50+ Voices</span>
              <span className="stat">20+ Languages</span>
            </div>
          </div>
          
          <div className="feature-box featured">
            <div className="featured-badge">Most Popular</div>
            <div className="feature-icon">
              <div className="icon-bg">📝</div>
            </div>
            <h3>Interactive Quizzes</h3>
            <p>Engage with voice-enabled quizzes that adapt to your learning pace and provide instant feedback for better retention.</p>
            <div className="feature-stats">
              <span className="stat">Smart AI</span>
              <span className="stat">Real-time</span>
            </div>
          </div>
          
          <div className="feature-box">
            <div className="feature-icon">
              <div className="icon-bg">📊</div>
            </div>
            <h3>Track Progress</h3>
            <p>Monitor your learning journey with detailed analytics, performance insights, and personalized recommendations.</p>
            <div className="feature-stats">
              <span className="stat">Analytics</span>
              <span className="stat">Insights</span>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-header">
          <h2>What Learners Say</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"EduSpeak has revolutionized how I learn. The voice features make complex topics so much easier to understand!"</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">👨‍🎓</div>
              <div className="author-info">
                <div className="author-name">Alex Kumar</div>
                <div className="author-role">Computer Science Student</div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The interactive quizzes with voice feedback have improved my retention rate by 300%. Amazing platform!"</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">👩‍💼</div>
              <div className="author-info">
                <div className="author-name">Priya Sharma</div>
                <div className="author-role">Professional Learner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>EduSpeak 🎙️</h3>
            <p>Empowering minds through voice-powered learning</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#demo">Demo</a>
            </div>
            <div className="link-group">
              <h4>Support</h4>
              <a href="#help">Help Center</a>
              <a href="#contact">Contact</a>
              <a href="#docs">Documentation</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 EduSpeak. All rights reserved.</p>
          <div className="social-links">
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#github">GitHub</a>
          </div>
        </div>
      </footer>

      <ChatBox />
    </div>
  );
};

export default Home;