// import React, { useState, useEffect } from "react";
// import "./personalinformation.css";
// import axios from "axios"; // Import Axios library
// import khaled1 from "../../images/demo/khaled1.png";
// import { useAuthUser } from "react-auth-kit";
// import AboutMe from "./aboutme";
// const PersonalInformation = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [axiosError, setAxiosError] = useState(false);
//   const userData = useAuthUser();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.patch(
//         `${process.env.REACT_APP_URL}/profile/edit/${userData()._id}`,
//         formData
//       );
//       getData();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       let res = await axios.get(
//         `http://localhost:5000/profile/user/${userData()._id}`
//       );
//       console.log(res);
//       console.log(res.data.message[0]);
//       setFormData(res.data.message[0]);
//     } catch (error) {
//       console.log(error);
//       if (error.response.status === 404) setAxiosError(true);
//     }
//   };
 
//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setIsEditing(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       setFormData((prevData) => ({
//         ...prevData,
//         image: reader.result,
//       }));
//     };
//   };

//   return (
//     <>
//       {axiosError ? (
//         <></>
//       ) : (
//         <>
//           <div className="fo2lcard"></div>
//           <div className={`personal-information ${isEditing ? "editing" : ""}`}>
//             <h2>Personal Information</h2>
//             <div className="flexprofily">
//               <div className="profile-image">
//                 {isEditing ? (
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="imageedit"
//                   />
//                 ) : (
//                   <img src={formData.image} alt="Profile" />
//                 )}
//               </div>

//               <div className="info-container">
//                 <div className="info-row">
//                   <label>First Name:</label>
//                   {isEditing ? (
//                     <input
//                       className="inputpersonalinformation"
//                       type="text"
//                       name="first_name"
//                       value={formData.first_name}
//                       onChange={handleInputChange}
//                     />
//                   ) : (
//                     <span>{formData.first_name}</span>
//                   )}
//                 </div>
//                 <div className="info-row">
//                   <label>Last Name:</label>
//                   {isEditing ? (
//                     <input
//                       className="inputpersonalinformation"
//                       type="text"
//                       name="last_name"
//                       defaultValue={formData.last_name}
//                       onChange={handleInputChange}
//                     />
//                   ) : (
//                     <span>{formData.last_name}</span>
//                   )}
//                 </div>
//                 <div className="info-row">
//                   <label>Title:</label>
//                   {isEditing ? (
//                     <input
//                       className="inputpersonalinformation"
//                       type="text"
//                       name="title"
//                       value={formData.title}
//                       onChange={handleInputChange}
//                     />
//                   ) : (
//                     <span>{formData.title}</span>
//                   )}
//                 </div>
//                 <div className="info-row">
//                   <label>Location:</label>
//                   {isEditing ? (
//                     <input
//                       className="inputpersonalinformation"
//                       type="text"
//                       name="location"
//                       value={formData.location}
//                       onChange={handleInputChange}
//                     />
//                   ) : (
//                     <span>{formData.location}</span>
//                   )}
//                 </div>
//                 <div className="info-row">
//                   <label>Hourly Rate:</label>
//                   {isEditing ? (
//                     <input
//                       className="inputpersonalinformation"
//                       type="text"
//                       name="hourly_rate"
//                       value={formData.hourly_rate}
//                       onChange={handleInputChange}
//                     />
//                   ) : (
//                     <span>{formData.hourly_rate}</span>
//                   )}
//                 </div>
//               </div>
//             </div>
//             {isEditing ? (
//               <button onClick={handleFormSubmit}>Save</button>
//             ) : (
//               <div className="button-containere">
//                 <button onClick={handleEditClick}>Edit Profile</button>
//               </div>
//             )}
//             <AboutMe/>

//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default PersonalInformation;
import React, { useState } from 'react';
import './personalinformation.css'; // Import the CSS file for styling
import khaled1 from '../../images/demo/khaled1.png';


const PersonalInformation = () => {
  // Fake data
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    image: khaled1,
    firstName: 'Khaled',
    lastName: 'Awad',
    title: 'Junior Full Stack Developer',
    location: 'Tripoli, LB',
    hourlyRate: '$20',
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

