import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./Resources.css";
import { Box } from "@mui/material";
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
const Resources = () => {
  const [resources, setResources] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [resourcesPerPage] = useState(5);

  const getData = async () => {
    try {
      let res = await axios.get("https://finalproject-app-api.onrender.com/resource");
      setResources(res.data.message);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Function to handle category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset current page when changing category filter
  };

  // Function to handle resource rating
  const handleRating = (resourceId, rating) => {
    const updatedResources = resources.map((resource) => {
      if (resource.id === resourceId) {
        return { ...resource, rating };
      }
      return resource;
    });
    setResources(updatedResources);
  };

  // Get current resources
  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentResources = resources.slice(indexOfFirstResource, indexOfLastResource);

  // Function to render the list of resources
  const renderResources = () => {
    let filteredResources = currentResources;
    if (selectedCategory !== "All") {
      filteredResources = currentResources.filter(
        (resource) => resource.category === selectedCategory
      );
    }

    if (filteredResources.length === 0) {
      return <p className="no-resources">No resources found.</p>;
    }

    return filteredResources.map((resource) => (
      <li key={resource.id} className="resource-item">
        <div className="resource-info">
          <h3>
            <a href={resource.link} className="resource-title">
              {resource.title}
            </a>
          </h3>
          <p className="resource-category">Category: {resource.category}</p>
          <div className="resource-rating">
            <p className="rating-label">Rating: {resource.rating}</p>
            <div className="rating-stars">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`star ${index < resource.rating ? "selected" : ""}`}
                  onClick={() => handleRating(resource.id, index + 1)}
                />
              ))}
            </div>
          </div>
        </div>
      </li>
    ));
  };

  // Function to handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(resources.length / resourcesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="bgResources"></div>
      <section className="resources-section">
        <div className="container">
          <h2 className="resources-title">Resources</h2>
          <p className="resources-description">
            Here are some helpful resources for the WordPress community and freelancers:
          </p>
          <div className="category-filter">
            <button
              className={`filter-button ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => handleCategoryFilter("All")}
            >
              All
            </button>
            <button
              className={`filter-button ${selectedCategory === "Official Website" ? "active" : ""}`}
              onClick={() => handleCategoryFilter("Official Website")}
            >
              Official Website
            </button>
            <button
              className={`filter-button ${selectedCategory === "Website Hosting" ? "active" : ""}`}
              onClick={() => handleCategoryFilter("Website Hosting")}
            >
              Website Hosting
            </button>
          </div>
          {loading ? (
            <Box sx={{ width: "100%", height: "60vh", display: "grid", placeItems: "center" }}>
              <Loader/>
            </Box>
          ) : (
            <>
              <ul className="resources-list">{renderResources()}</ul>
              <div className="pagination">
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    className={`page-number ${currentPage === number ? "active" : ""}`}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Resources;
