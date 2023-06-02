import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img from '../../images/demo/img.png';
import MainLandingPAgeHero from '../../images/demo/MainLandingPageHero.png';
// import mobilecommerce from '../../images/demo/mobilecommerce.png';
import lm from '../../images/demo/lm.png';

import './herosection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const nav = useNavigate()
  const images = [
    img,
    MainLandingPAgeHero,
    lm,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the delay as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [images]);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const navigate = () => {
    nav('/login')
  }

  return (
    <div className="hero-section">
      <img  className="imgherosession" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <div className="carousel-content">
        <h1 className='h1herosession'>Find and Hire Quality WordPress Professionals</h1>
        <p className='pherosession'>Discover talented WordPress professionals and get your projects done efficiently.</p>
        <button className="sign-up-button" onClick={navigate}>Sign Up</button>
      </div>
      <div className="carousel-navigation">
        <button onClick={goToPreviousImage}>
          <FaChevronLeft />
        </button>
        <button onClick={goToNextImage}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
