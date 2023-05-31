import React, { useState } from 'react';
import './portfolio.css';
import EventLandingPage from '../images/demo/EventLandingPage.jpeg';
const PortfolioItems = () => {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    description: '',
    imageUrl: '',
    demoUrl: ''
  });

  const [fakeData, setFakeData] = useState([
    {
      id: 1,
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: EventLandingPage,
      demoUrl: 'https://www.example.com'
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: EventLandingPage,
      demoUrl: 'https://www.example.com'
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: EventLandingPage,
      demoUrl: 'https://www.example.com'
    }
  ]);

  const handleManageClick = (id) => {
    setEditingId(id);
    const cardToEdit = fakeData.find((data) => data.id === id);
    setFormData({ ...cardToEdit });
  };

  const handleSaveClick = () => {
    // Find the index of the edited card in fakeData
    const index = fakeData.findIndex((data) => data.id === formData.id);
    if (index !== -1) {
      // Create a copy of the fakeData array
      const updatedData = [...fakeData];
      // Update the card's data
      updatedData[index] = { ...formData };
      // Update the fakeData state with the updated array
      setFakeData(updatedData);
    }
    setEditingId(null);
  };

  const handleCancelClick = () => {
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setFormData({ ...formData, imageUrl: event.target.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="portfolio-items-container">
      <h2 className='POrt'>Portfolio Items</h2>
      {fakeData.map((data) => (
        <div className="portfolio-item" key={data.id}>
          <div className="portfolio-item-img-container">
            {editingId === data.id ? (
              <>
                <img src={formData.imageUrl} alt="Demo Image" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </>
            ) : (
              <img src={data.imageUrl} alt="Demo Image" />
            )}
          </div>
          <div className="portfolio-item-content">
            {editingId === data.id ? (
              <>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
                <input
                  type="text"
                  name="demoUrl"
                  value={formData.demoUrl}
                  onChange={handleInputChange}
                />
                <button className='btn-pi' onClick={handleSaveClick}>Save</button>
                <button className='btn-pi' onClick={handleCancelClick}>Cancel</button>
</>
) : (
<>
<h2>{data.title}</h2>
<p>{data.description}</p>
<a href={data.demoUrl} target="_blank" rel="noopener noreferrer">
Live Demo
</a>
<button className='btn-pi' onClick={() => handleManageClick(data.id)}>Manage</button>
</>
)}
</div>
</div>
))}
</div>
);
};

export default PortfolioItems;