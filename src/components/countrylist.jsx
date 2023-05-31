import React, { useEffect, useState } from 'react';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://api.apilayer.com/number_verification/countries", {
          method: 'GET',
          headers: {
            "apikey": "D0nQsprw9L0i1PefWihK1nDpT7iaM10S"
          }
        });
        const data = await response.json();

        if (data.success) {
          setCountries(data.result);
        } else {
          console.log('Error fetching countries:', data.error.info);
        }
      } catch (error) {
        console.log('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Country:', selectedCountry);
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h2>Country List</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {countries.map((country) => (
            <li key={country.name}>
              <button
                type="button"
                onClick={() => handleCountrySelect(country.name)}
                className={selectedCountry === country.name ? 'selected' : ''}
              >
                {country.name}
              </button>
            </li>
          ))}
        </ul>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CountryList;
