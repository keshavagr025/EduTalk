import React, { useState } from 'react';
import './Learn.css';

const Learn = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const learningCategories = [
    {
      id: 1,
      title: '📚 Study Guides',
      subtitle: 'Comprehensive Learning',
      description: 'Explore expertly curated study guides across various subjects with interactive elements and progress tracking.',
      buttonText: 'View Guides',
      category: 'guides',
      stats: { lessons: 150, duration: '2-4 hrs', level: 'Beginner' },
      popular: true
    },
    {
      id: 2,
      title: '🎙️ Audio Lessons',
      subtitle: 'Voice-Powered Learning',
      description: 'Listen to AI-generated lessons with natural-sounding voices. Perfect for learning on-the-go.',
      buttonText: 'Start Listening',
      category: 'audio',
      stats: { lessons: 200, duration: '15-30 min', level: 'All Levels' },
      popular: false
    },
    {
      id: 3,
      title: '🧠 Interactive Quizzes',
      subtitle: 'Test Your Knowledge',
      description: 'Practice with adaptive quizzes that adjust to your learning pace and provide instant feedback.',
      buttonText: 'Take Quiz',
      category: 'quiz',
      stats: { lessons: 300, duration: '5-15 min', level: 'Intermediate' },
      popular: false
    },
    {
      id: 4,
      title: '🎯 Skill Challenges',
      subtitle: 'Level Up Fast',
      description: 'Take on progressive challenges designed to rapidly improve your skills in specific areas.',
      buttonText: 'Start Challenge',
      category: 'challenge',
      stats: { lessons: 75, duration: '1-2 hrs', level: 'Advanced' },
      popular: false
    },
    {
      id: 5,
      title: '📖 Reading Materials',
      subtitle: 'Deep Dive Content',
      description: 'Access comprehensive reading materials with highlights, notes, and discussion features.',
      buttonText: 'Start Reading',
      category: 'reading',
      stats: { lessons: 120, duration: '30-60 min', level: 'All Levels' },
      popular: true
    },
    {
      id: 6,
      title: '🎬 Video Tutorials',
      subtitle: 'Visual Learning',
      description: 'Watch step-by-step video tutorials with interactive elements and downloadable resources.',
      buttonText: 'Watch Now',
      category: 'video',
      stats: { lessons: 180, duration: '10-45 min', level: 'Beginner' },
      popular: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Categories', icon: '🌟' },
    { id: 'guides', label: 'Study Guides', icon: '📚' },
    { id: 'audio', label: 'Audio', icon: '🎙️' },
    { id: 'quiz', label: 'Quizzes', icon: '🧠' },
    { id: 'challenge', label: 'Challenges', icon: '🎯' },
    { id: 'reading', label: 'Reading', icon: '📖' },
    { id: 'video', label: 'Videos', icon: '🎬' }
  ];

  const filteredCategories = activeFilter === 'all' 
    ? learningCategories 
    : learningCategories.filter(category => category.category === activeFilter);

  return (
    <div className="learn-container">
      <div className="learn-header">
        <div className="header-content">
          <div className="header-badge">
            <span>🚀 Learn & Grow</span>
          </div>
          <h1 className="learn-title">Start Learning 🎧</h1>
          <p className="learn-subtitle">
            Choose your preferred learning method and embark on an exciting educational journey
            with AI-powered tools and interactive content.
          </p>
        </div>
        
        <div className="stats-overview">
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Lessons</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Subjects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10k+</div>
            <div className="stat-label">Students</div>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h3>Browse by Category</h3>
        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className="filter-icon">{filter.icon}</span>
              <span className="filter-label">{filter.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="learning-grid">
        {filteredCategories.map((category, index) => (
          <div 
            key={category.id} 
            className={`learn-card ${category.popular ? 'popular' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {category.popular && (
              <div className="popular-badge">
                <span>⭐ Popular</span>
              </div>
            )}
            
            <div className="card-header">
              <h3 className="card-title">{category.title}</h3>
              <p className="card-subtitle">{category.subtitle}</p>
            </div>
            
            <div className="card-content">
              <p className="card-description">{category.description}</p>
              
              <div className="card-stats">
                <div className="stat">
                  <span className="stat-icon">📊</span>
                  <span>{category.stats.lessons} Lessons</span>
                </div>
                <div className="stat">
                  <span className="stat-icon">⏱️</span>
                  <span>{category.stats.duration}</span>
                </div>
                <div className="stat">
                  <span className="stat-icon">🎓</span>
                  <span>{category.stats.level}</span>
                </div>
              </div>
            </div>
            
            <div className="card-footer">
              <button className="learn-btn">
                <span>{category.buttonText}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              
              <div className="card-actions">
                <button className="action-btn bookmark">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                  </svg>
                </button>
                <button className="action-btn share">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <h3>Your Learning Progress</h3>
          <p>Track your journey across different learning methods</p>
        </div>
        
        <div className="progress-grid">
          <div className="progress-card">
            <div className="progress-info">
              <h4>Study Guides</h4>
              <span>12/20 completed</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '60%' }}></div>
            </div>
            <span className="progress-percentage">60%</span>
          </div>
          
          <div className="progress-card">
            <div className="progress-info">
              <h4>Audio Lessons</h4>
              <span>8/15 completed</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '53%' }}></div>
            </div>
            <span className="progress-percentage">53%</span>
          </div>
          
          <div className="progress-card">
            <div className="progress-info">
              <h4>Quizzes</h4>
              <span>25/30 completed</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '83%' }}></div>
            </div>
            <span className="progress-percentage">83%</span>
          </div>
        </div>
      </div>

      <div className="achievements-section">
        <h3>Recent Achievements 🏆</h3>
        <div className="achievements-grid">
          <div className="achievement-badge">
            <div className="badge-icon">🔥</div>
            <div className="badge-info">
              <h4>Learning Streak</h4>
              <p>7 days in a row!</p>
            </div>
          </div>
          <div className="achievement-badge">
            <div className="badge-icon">🎯</div>
            <div className="badge-info">
              <h4>Quiz Master</h4>
              <p>100% on 5 quizzes</p>
            </div>
          </div>
          <div className="achievement-badge">
            <div className="badge-icon">📚</div>
            <div className="badge-info">
              <h4>Knowledge Seeker</h4>
              <p>Completed 10 guides</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;