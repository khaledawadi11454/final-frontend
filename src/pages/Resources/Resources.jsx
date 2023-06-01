import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./Resources.css";
import { CircularProgress, Box } from "@mui/material";

const Resources = () => {
  const [resources, setResources] = useState([
    {
      id: 1,
      title: "WordPress.org",
      category: "Official Website",
      link: "https://wordpress.org/",
      rating: 4.5,
      // reviews: 10,
    },
    {
      id: 2,
      title: "WordPress.com",
      category: "Website Hosting",
      link: "https://wordpress.com/",
      rating: 4.2,
      // reviews: 8,
    },
    // Add more resource objects as needed
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      let res = await axios.get("https://finalproject-app-api.onrender.com/resource");
      // console.log(res.data);
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

  // Function to render the list of resources
  const renderResources = () => {
    let filteredResources = resources;
    if (selectedCategory !== "All") {
      filteredResources = resources.filter(
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
                  className={`star ${
                    index < resource.rating ? "selected" : ""
                  }`}
                  onClick={() => handleRating(resource.id, index + 1)}
                />
              ))}
            </div>
            {/* <p className="reviews">({resource.reviews} reviews)</p> */}
          </div>
        </div>
      </li>
    ));
  };

  return (
    <>
      <div className="bgResources"></div>
      <section className="resources-section">
        <div className="container">
          <h2 className="resources-title">Resources</h2>
          <p className="resources-description">
            Here are some helpful resources for the WordPress community and
            freelancers:
          </p>
          <div className="category-filter">
            <button
              className={`filter-button ${
                selectedCategory === "All" ? "active" : ""
              }`}
              onClick={() => handleCategoryFilter("All")}
            >
              All
            </button>
            <button
              className={`filter-button ${
                selectedCategory === "Official Website" ? "active" : ""
              }`}
              onClick={() => handleCategoryFilter("Official Website")}
            >
              Official Website
            </button>
            <button
              className={`filter-button ${
                selectedCategory === "Website Hosting" ? "active" : ""
              }`}
              onClick={() => handleCategoryFilter("Website Hosting")}
            >
              Website Hosting
            </button>
            {/* Add more category buttons as needed */}
          </div>
          {loading ? (
            <Box sx={{ width: "100%", height: "60vh", display: "grid", placeItems: "center" }}>
              <CircularProgress />
            </Box>
             ) : (
              <ul className="resources-list">{renderResources()}</ul>
              )}
            </div>
          </section>
        </>
      );
    };

export default Resources;
