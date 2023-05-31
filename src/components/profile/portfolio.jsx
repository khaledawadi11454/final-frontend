import React, { useState } from 'react';
import './portfolio.css'; // Import the CSS file for styling
import RestaurantLandingPage from '../../images/demo/RestaurantLandingPage.jpeg';

const Portfolio = () => {
  // Fake data
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'This is the description of Project 1',
      image: RestaurantLandingPage,
      websiteURL: 'https://example.com/demo1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is the description of Project 2',
      image: RestaurantLandingPage,
      websiteURL: 'https://example.com/demo2',
    },
    // Add more portfolio items here...
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of items to display per page
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState({});

  const handleManageClick = () => {
    setIsEditing(true);
    setEditedItem({
      id: portfolioItems.length + 1,
      title: '',
      description: '',
      image: '',
      websiteURL: '',
    });
  };

  const handleEditClick = (item) => {
    setIsEditing(true);
    setEditedItem(item);
  };

  const handleSaveClick = () => {
    let updatedItems;
    if (editedItem.id <= portfolioItems.length) {
      updatedItems = portfolioItems.map((item) =>
        item.id === editedItem.id ? editedItem : item
      );
    } else {
      updatedItems = [...portfolioItems, editedItem];
    }
    setPortfolioItems(updatedItems);
    setIsEditing(false);
    setEditedItem({});
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedItem({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setEditedItem((prevItem) => ({
        ...prevItem,
        image: event.target.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate pagination indexes
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const displayedItems = portfolioItems.slice(firstIndex, lastIndex);

  return (
    <div className={`portfolio ${isEditing ? 'editing' : ''}`}>
      <h2>Portfolio Items</h2>
      <div className="flexy">
        {displayedItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} />
            <a href={item.websiteURL} target="_blank" rel="noopener noreferrer">
              Demo
            </a>

            {isEditing && editedItem.id === item.id && (
              <div className="edit-form">
                <input
                  type="text"
                  name="title"
                  value={editedItem.title}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="description"
                  value={editedItem.description}
                  onChange={handleInputChange}
                />
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={handleImageChange}
                />
                <input
                  type="text"
                  name="websiteURL"
                  value={editedItem.websiteURL}
                  onChange={handleInputChange}
                />
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
            )}
            {!isEditing && (
              <button onClick={() => handleEditClick(item)}>Edit</button>
            )}
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {!isEditing && (
        <button onClick={handleManageClick} className="manage-button">
          Manage
        </button>
      )}
    </div>
  );
};

export default Portfolio;
