import React, { useState } from 'react';
import axios from 'axios';
import './aboutme.css';

const AboutMe = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(
    "As a junior full stack developer, I specialize in the MERN (MongoDB, Express, React, Node.js) stack and Laravel. I have experience building web applications using these technologies, and I'm always eager to learn more and take on new challenges.In my previous roles, I have contributed to the development of several web applications using the MERN stack and Laravel. I m familiar with RESTful API development, database design, and front-end development using React and Vue.js. I m also experienced with version control using Git and have worked in agile development environments.I m passionate about creating user-friendly and performant web applications, and I m always looking for opportunities to improve my skills and take on new projects. If you re looking for a junior full stack developer with experience in the MERN stack and Laravel, please feel free to contact me."
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);

    axios
      .patch(
        `${process.env.REACT_APP_URL}/profile/edit/`,
      
       { content }) // Adjust the endpoint URL according to your backend API's route
      .then(response => {
        console.log('Content saved successfully!');
      })
      .catch(error => {
        console.error('Error saving content:', error);
      });
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
          <button onClick={handleEditClick}>Edit About</button>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
