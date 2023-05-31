import React, { useState, useEffect } from 'react';
import './education.css';
const Education = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const headers = new Headers();
        headers.append("X-CSCAPI-KEY", "D0nQsprw9L0i1PefWihK1nDpT7iaM10S");

        const requestOptions = {
          method: 'GET',
          headers: headers,
          redirect: 'follow'
        };

        const response = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
        const data = await response.json();

        if (data.status === "success") {
          setCountries(data.data);
        } else {
          console.log('Error fetching countries:', data.message);
        }
      } catch (error) {
        console.log('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  // Add a new useEffect to fetch university/college data
  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        // Replace 'UNIVERSITY_API_URL' with the actual URL of the university/college API
        const response = await fetch("UNIVERSITY_API_URL");
        const data = await response.json();

        // Process the response and set the university/college data
        // Update the following code based on the response format of the university/college API
        if (data.status === "success") {
          // Assuming the university/college data is available in 'data.data'
          // Modify the following line to set the university/college data in the state
          setUniversity(data.data);
        } else {
          console.log('Error fetching universities:', data.message);
        }
      } catch (error) {
        console.log('Error fetching universities:', error);
      }
    };

    fetchUniversities();
  }, []);

  const handleEdit = () => {
    // Add your logic here to handle the edit button action
    console.log('Edit button clicked');
  };

  return (
    <div className="education-container">
      <h2>Education</h2>

      <label htmlFor="country">Country:</label>
      <select
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.iso2} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <label htmlFor="university">University/College:</label>
      <input
        type="text"
        id="university"
        value={university}
        onChange={(e) => setUniversity(e.target.value)}
      />

      <label htmlFor="degree">Degree:</label>
      <input
        type="text"
        id="degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />

      <label htmlFor="startYear">Start Year:</label>
      <input
        type="text"
        id="startYear"
        value={startYear}
        onChange={(e) => setStartYear(e.target.value)}
        />

        <label htmlFor="endYear">End Year:</label>
        <input
          type="text"
          id="endYear"
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
        />
  
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  };
  
  export default Education;
  
// import React, { useState } from 'react';
// import './education.css';
// const Education = () => {
//   const [country, setCountry] = useState('Lebanon');
//   const [university, setUniversity] = useState('');
//   const [degree, setDegree] = useState('');
//   const [startYear, setStartYear] = useState('');
//   const [endYear, setEndYear] = useState('');
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     // Perform saving logic here
//     setIsEditing(false);
//   };

//   const handleCancelClick = () => {
//     // Perform cancellation logic here
//     setIsEditing(false);
//   };

//   return (
//     <div className={`education ${isEditing ? 'editing' : ''}`}>
//       <h2>Education</h2>
//       {isEditing ? (
//         <div className="edit-form">
//           <label>Country:</label>
//           <input
//             type="text"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//           />
//           <label>University/College:</label>
//           <input
//             type="text"
//             value={university}
//             onChange={(e) => setUniversity(e.target.value)}
//           />
//           <label>Degree:</label>
//           <input
//             type="text"
//             value={degree}
//             onChange={(e) => setDegree(e.target.value)}
//           />
//           <label>Start Year:</label>
//           <input
//             type="text"
//             value={startYear}
//             onChange={(e) => setStartYear(e.target.value)}
//           />
//           <label>End Year:</label>
//           <input
//             type="text"
//             value={endYear}
//             onChange={(e) => setEndYear(e.target.value)}
//           />
//           <button onClick={handleSaveClick}>Save</button>
//           <button onClick={handleCancelClick}>Cancel</button>
//         </div>
//       ) : (
//         <div className="education-info">
//           <p>
//             <strong>Country:</strong> {country}
//           </p>
//           <p>
//             <strong>University/College:</strong> {university}
//           </p>
//           <p>
//             <strong>Degree:</strong> {degree}
//           </p>
//           <p>
//             <strong>Years:</strong> {startYear} - {endYear}
//           </p>
//           <div className="button-container1">
//           <button onClick={handleEditClick}>Edit</button></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Education;

