import React, { useState } from 'react';
import './personalinformation.css'; // Import the CSS file for styling
import khaled1 from '../../images/demo/khaled1.png';

const PersonalInformation = () => {
  // Fake data
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    image: khaled1,
    firstName: 'John',
    lastName: 'Doe',
    title: 'Software Engineer',
    location: 'New York, USA',
    hourlyRate: '$50',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Update the data in your desired way (e.g., send it to an API)
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData((prevData) => ({
        ...prevData,
        image: reader.result,
      }));
    };
  };

  return (
  <>
  <div className="fo2lcard"></div>
    <div className={`personal-information ${isEditing ? 'editing' : ''}`}>
      
      <h2>Personal Information</h2>
      <div className="flexprofily">
      <div className="profile-image">
        {isEditing ? (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="imageedit"
          />
        ) : (
          <img src={formData.image} alt="Profile" />
        )}
      </div>
      
      <div className="info-container">
        <div className="info-row">
          <label>First Name:</label>
          {isEditing ? (
            <input
            className='inputpersonalinformation'
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{formData.firstName}</span>
          )}
        </div>
        <div className="info-row">
          <label>Last Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{formData.lastName}</span>
          )}
        </div>
        <div className="info-row">
          <label>Title:</label>
          {isEditing ? (
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          ) : (
            <span>{formData.title}</span>
          )}
        </div>
        <div className="info-row">
          <label>Location:</label>
          {isEditing ? (
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          ) : (
            <span>{formData.location}</span>
          )}
        </div>
        <div className="info-row">
          <label>Hourly Rate:</label>
          {isEditing ? (
            <input
              type="text"
              name="hourlyRate"
              value={formData.hourlyRate}
              onChange={handleInputChange}
            />
          ) : (
            <span>{formData.hourlyRate}</span>
          )}
        </div>
        </div>
      </div>
      {isEditing ? (        <button onClick={handleFormSubmit}>Save</button>
      ) : (
        <div className="button-containere">
          <button onClick={handleEditClick}>Edit Profile</button>
        </div>
      )}
    </div>
    </>
  );
};

export default PersonalInformation;

