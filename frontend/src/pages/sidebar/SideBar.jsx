import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✖' : '☰'}
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2 className="logo">EduSpeak</h2>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setIsOpen(false)}>🏠 Home</Link></li>
          <li><Link to="/learn" onClick={() => setIsOpen(false)}>📚 Learn</Link></li>
          <li><Link to="/create" onClick={() => setIsOpen(false)}>🎤 Create</Link></li>
          <li><Link to="/profile" onClick={() => setIsOpen(false)}>👤 Profile</Link></li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
