import React, { useState } from 'react';
import './ChatBox.css';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, fromUser: true }]);
      setInput('');
    }
  };

  return (
    <div className="chatbox-container">
      <div className={`chatbox ${isOpen ? 'open' : ''}`}>
        <div className="chatbox-header">
          <span>EduBot 💬</span>
          <button onClick={toggleChat}>✖</button>
        </div>
        <div className="chatbox-body">
          {messages.map((msg, index) => (
            <div key={index} className={msg.fromUser ? 'user-msg' : 'bot-msg'}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chatbox-input">
          <input
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>

      {/* Toggle Button */}
      {!isOpen && (
        <button className="chatbox-toggle" onClick={toggleChat}>
          💬
        </button>
      )}
    </div>
  );
};

export default ChatBox;
