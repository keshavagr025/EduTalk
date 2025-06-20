import React, { useState } from 'react';
import './Create.css';

const Create = () => {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('default');
  const [audioUrl, setAudioUrl] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setWordCount(newText.trim().split(/\s+/).filter(word => word.length > 0).length);
  };

  const handleGenerateAudio = async () => {
    if (!text.trim()) {
      alert('Please enter some text to generate audio.');
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      console.log('Generating audio for:', text, voice);
      // Create a data URL for a sample audio (silent audio for demo)
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const duration = Math.max(2, Math.min(text.length / 10, 30)); // 2-30 seconds based on text length
      const sampleRate = audioContext.sampleRate;
      const numSamples = duration * sampleRate;
      const audioBuffer = audioContext.createBuffer(1, numSamples, sampleRate);
      
      // Add some simple audio generation for demo
      const channelData = audioBuffer.getChannelData(0);
      for (let i = 0; i < numSamples; i++) {
        channelData[i] = Math.sin(2 * Math.PI * 440 * i / sampleRate) * 0.1 * Math.exp(-i / (sampleRate * 2));
      }
      
      // Convert to blob and create URL
      const blob = new Blob([new Float32Array(channelData)], { type: 'audio/wav' });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      setIsGenerating(false);
    }, 2000);
  };

  const handleDownload = () => {
    if (audioUrl) {
      const a = document.createElement('a');
      a.href = audioUrl;
      a.download = `voice-content-${Date.now()}.wav`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const clearContent = () => {
    setText('');
    setWordCount(0);
    setAudioUrl(null);
  };

  return (
    <div className="create-container">
      <div className="create-wrapper">
        <div className="create-card">
          <div className="create-header">
            <h2 className="create-title">
              Create Voice Content
            </h2>
            <p className="create-subtitle">Transform your educational content into engaging audio</p>
          </div>

          <div className="create-content">
            {/* Text Input Section */}
            <div className="input-section">
              <label className="input-label">
                Educational Content
              </label>
              <div className="textarea-wrapper">
                <textarea
                  value={text}
                  onChange={handleTextChange}
                  placeholder="Enter your educational content here... Start with an engaging introduction, explain key concepts clearly, and include examples to make it more understandable."
                  className="content-textarea"
                />
                <div className="word-counter">
                  {wordCount} words
                </div>
              </div>
            </div>

            {/* Voice Selection */}
            <div className="selection-grid">
              <div className="selection-item">
                <label className="input-label">
                  Voice Selection
                </label>
                <select 
                  value={voice} 
                  onChange={(e) => setVoice(e.target.value)}
                  className="voice-select"
                >
                  <option value="default">🎙️ Default Voice (Neutral)</option>
                  <option value="female-1">👩 Sarah - Professional Female</option>
                  <option value="male-1">👨 David - Professional Male</option>
                  <option value="female-2">👩‍🏫 Emma - Educator Female</option>
                  <option value="male-2">👨‍🏫 James - Educator Male</option>
                  <option value="child-friendly">🧒 Alex - Child-Friendly</option>
                </select>
              </div>

              <div className="selection-item">
                <label className="input-label">
                  Audio Settings
                </label>
                <div className="settings-row">
                  <select className="setting-select">
                    <option>Normal Speed</option>
                    <option>Slow Speed</option>
                    <option>Fast Speed</option>
                  </select>
                  <select className="setting-select">
                    <option>High Quality</option>
                    <option>Standard Quality</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button
                onClick={handleGenerateAudio}
                disabled={isGenerating || !text.trim()}
                className={`generate-btn ${isGenerating ? 'generating' : ''}`}
              >
                {isGenerating ? (
                  <>
                    <div className="spinner"></div>
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <span>🎵</span>
                    <span>Generate Audio</span>
                  </>
                )}
              </button>

              <button
                onClick={clearContent}
                className="clear-btn"
              >
                <span>🗑️</span>
                <span>Clear</span>
              </button>
            </div>

            {/* Audio Preview Section */}
            {audioUrl && (
              <div className="audio-preview">
                <div className="preview-header">
                  <h4 className="preview-title">
                    <span>🎧</span>
                    <span>Audio Preview</span>
                  </h4>
                  <button
                    onClick={handleDownload}
                    className="download-btn"
                  >
                    <span>⬇️</span>
                    <span>Download</span>
                  </button>
                </div>
                
                <div className="audio-player-wrapper">
                  <audio 
                    controls 
                    src={audioUrl}
                    className="audio-player"
                  />
                </div>
                
                <div className="audio-info">
                  <p><strong>Voice:</strong> {voice.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                  <p><strong>Content Length:</strong> {wordCount} words</p>
                  <p><strong>Estimated Duration:</strong> ~{Math.max(1, Math.ceil(wordCount / 150))} minute{Math.ceil(wordCount / 150) > 1 ? 's' : ''}</p>
                </div>
              </div>
            )}

            {/* Tips Section */}
            <div className="tips-section">
              <h4 className="tips-title">
                <span>💡</span>
                <span>Tips for Better Audio</span>
              </h4>
              <ul className="tips-list">
                <li>• Use clear, simple language for better pronunciation</li>
                <li>• Add punctuation to create natural pauses</li>
                <li>• Break long sentences into shorter ones</li>
                <li>• Include phonetic spelling for complex terms</li>
                <li>• Preview and adjust voice settings for your audience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;