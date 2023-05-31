import React, { useState } from 'react';
import './aboutme.css'; // Import the CSS file for styling

const AboutMe = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(
    "I am a passionate individual with a love for programming."
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save the updated content to your desired storage or API
  };

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className={`about-me ${isEditing ? 'editing' : ''}`}>
      <h2>About</h2>
      {isEditing ? (
        <textarea value={content} onChange={handleInputChange} />
      ) : (
        <p>{content}</p>
      )}
      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <div className="button-container">
        <button onClick={handleEditClick}>Edit About</button></div>
      )}
    </div>
  );
};

export default AboutMe;
