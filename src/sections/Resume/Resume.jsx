import React from 'react';

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <p>Click the button below to download my resume.</p>
      
      {/* Resume Image Preview */}
      <img 
        src="/resume.png" 
        alt="Resume Preview" 
        style={{ 
          width: '100%', 
          maxWidth: '600px', 
          marginBottom: '20px', 
          border: '1px solid #ccc',
          borderRadius: '5px' 
        }} 
      />
      
      {/* Download Button */}
      <a href="/resume.pdf" download="resume.pdf">
        <button style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#0987f2',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;
