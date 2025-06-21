import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    username: 'khushal_kks',
    email: 'khushal@example.com',
    role: 'Student',
    preferredVoice: 'Female - Clara',
    language: 'English',
    playbackSpeed: 1.2,
    subscription: {
      plan: 'Student Plan',
      expiresAt: '2025-08-31',
    },
    profilePicture: null,
    joinedDate: '2024-01-15',
    totalAudioGenerated: 45,
    favoriteTopics: ['Mathematics', 'Science', 'History']
  });

  const [editData, setEditData] = useState({ ...user });

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...user });
  };

  const handleSave = () => {
    setUser({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...user });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getSubscriptionStatus = () => {
    const expiryDate = new Date(user.subscription.expiresAt);
    const today = new Date();
    const daysLeft = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysLeft < 0) return { status: 'expired', color: 'red', text: 'Expired' };
    if (daysLeft <= 7) return { status: 'expiring', color: 'orange', text: `${daysLeft} days left` };
    return { status: 'active', color: 'green', text: `${daysLeft} days left` };
  };

  const subscriptionStatus = getSubscriptionStatus();

  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <div className="profile-header">
          <div className="profile-avatar">
            <div className="avatar-circle">
              {user.profilePicture ? (
                <img src={user.profilePicture} alt="Profile" />
              ) : (
                <span className="avatar-initials">
                  {user.username.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <button className="avatar-edit-btn">📷</button>
          </div>
          
          <div className="profile-title-section">
            <h2 className="profile-title">Your Profile</h2>
            <p className="profile-subtitle">Manage your account settings and preferences</p>
          </div>

          <div className="profile-actions">
            {isEditing ? (
              <div className="edit-actions">
                <button onClick={handleSave} className="save-btn">
                  ✓ Save
                </button>
                <button onClick={handleCancel} className="cancel-btn">
                  ✕ Cancel
                </button>
              </div>
            ) : (
              <button onClick={handleEdit} className="edit-btn">
                ✏️ Edit Profile
              </button>
            )}
          </div>
        </div>

        <div className="profile-content">
          {/* Personal Information */}
          <div className="profile-section">
            <h3 className="section-title">
              <span className="section-icon">👤</span>
              Personal Information
            </h3>
            <div className="info-grid">
              <div className="info-group">
                <label className="info-label">Username</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className="edit-input"
                  />
                ) : (
                  <p className="info-value">{user.username}</p>
                )}
              </div>

              <div className="info-group">
                <label className="info-label">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="edit-input"
                  />
                ) : (
                  <p className="info-value">{user.email}</p>
                )}
              </div>

              <div className="info-group">
                <label className="info-label">Role</label>
                <p className="info-value">
                  <span className="role-badge">{user.role}</span>
                </p>
              </div>

              <div className="info-group">
                <label className="info-label">Member Since</label>
                <p className="info-value">{new Date(user.joinedDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Audio Preferences */}
          <div className="profile-section">
            <h3 className="section-title">
              <span className="section-icon">🎧</span>
              Audio Preferences
            </h3>
            <div className="info-grid">
              <div className="info-group">
                <label className="info-label">Preferred Voice</label>
                {isEditing ? (
                  <select
                    value={editData.preferredVoice}
                    onChange={(e) => handleInputChange('preferredVoice', e.target.value)}
                    className="edit-select"
                  >
                    <option value="Female - Clara">Female - Clara</option>
                    <option value="Male - David">Male - David</option>
                    <option value="Female - Sarah">Female - Sarah</option>
                    <option value="Male - James">Male - James</option>
                  </select>
                ) : (
                  <p className="info-value">{user.preferredVoice}</p>
                )}
              </div>

              <div className="info-group">
                <label className="info-label">Language</label>
                {isEditing ? (
                  <select
                    value={editData.language}
                    onChange={(e) => handleInputChange('language', e.target.value)}
                    className="edit-select"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                  </select>
                ) : (
                  <p className="info-value">{user.language}</p>
                )}
              </div>

              <div className="info-group">
                <label className="info-label">Playback Speed</label>
                {isEditing ? (
                  <select
                    value={editData.playbackSpeed}
                    onChange={(e) => handleInputChange('playbackSpeed', parseFloat(e.target.value))}
                    className="edit-select"
                  >
                    <option value={0.5}>0.5x</option>
                    <option value={0.75}>0.75x</option>
                    <option value={1.0}>1.0x</option>
                    <option value={1.2}>1.2x</option>
                    <option value={1.5}>1.5x</option>
                    <option value={2.0}>2.0x</option>
                  </select>
                ) : (
                  <p className="info-value">{user.playbackSpeed}x</p>
                )}
              </div>

              <div className="info-group">
                <label className="info-label">Total Audio Generated</label>
                <p className="info-value">
                  <span className="stat-number">{user.totalAudioGenerated}</span> files
                </p>
              </div>
            </div>
          </div>

          {/* Subscription Information */}
          <div className="profile-section">
            <h3 className="section-title">
              <span className="section-icon">💳</span>
              Subscription Details
            </h3>
            <div className="subscription-card">
              <div className="subscription-header">
                <div className="plan-info">
                  <h4 className="plan-name">{user.subscription.plan}</h4>
                  <p className="plan-expires">Expires: {user.subscription.expiresAt}</p>
                </div>
                <div className={`subscription-status ${subscriptionStatus.status}`}>
                  {subscriptionStatus.text}
                </div>
              </div>
              <div className="subscription-actions">
                <button className="upgrade-btn">Upgrade Plan</button>
                <button className="renew-btn">Renew Subscription</button>
              </div>
            </div>
          </div>

          {/* Favorite Topics */}
          <div className="profile-section">
            <h3 className="section-title">
              <span className="section-icon">📚</span>
              Favorite Topics
            </h3>
            <div className="topics-container">
              {user.favoriteTopics.map((topic, index) => (
                <span key={index} className="topic-tag">
                  {topic}
                </span>
              ))}
              <button className="add-topic-btn">+ Add Topic</button>
            </div>
          </div>

          {/* Account Actions */}
          <div className="profile-section">
            <h3 className="section-title">
              <span className="section-icon">⚙️</span>
              Account Settings
            </h3>
            <div className="account-actions">
              <button className="action-btn primary">Change Password</button>
              <button className="action-btn secondary">Download Data</button>
              <button className="action-btn secondary">Privacy Settings</button>
              <button className="action-btn danger">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;