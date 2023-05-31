import React from "react";
// import AdditionalFeatures from '../../components/AdditionFeatures/additionalfeature.jsx';
// import vide from '../../images/vide.mp4';
// import Timeline from './timeline.jsx';
import { FaCode, FaUsers, FaComments } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection/HeroSession.jsx';
import Card from "../../components/Demos/demo.jsx";
import Testimonial from "../../components/testimonial/testimonial.jsx";
import Footer from '../../components/Footer/Footer.jsx';
import "./home.css";
function HomePage() {
  return (
    <>
      <div className="home-container">
       
        <HeroSection/>
        <section className="features-section">
          <h1 className="features">Services</h1>
          
          <div className="feature-card">
            <div className="feature">
            <FaCode className="Faicons"/>
              <h2> Showcase Your Talents</h2>
              <p>
                Create a professional profile with your skills, portfolio, and
                demo features to impress potential clients.
              </p>
            </div>
            <div className="feature">
            <FaUsers  className="Faicons"/> 
              <h2>Find the Right Professionals</h2>
              <p>
                Search and browse through a curated list of WordPress
                professionals, read reviews, and find the perfect fit for your
                project.
              </p>
            </div>
            <div className="feature">
            <FaComments  className="Faicons"/> 
              <h2>Easy Communication</h2>
              <p>
                Stay connected with professionals using built-in communication
                tools, discuss project requirements, and collaborate
                effectively.
              </p>
            </div>
          </div>

          
        </section>
        <Card />
        {/* <Timeline/> */}

        {/* <AdditionalFeatures /> */}

        <Testimonial />
       
      <Footer/>
      </div>
    </>
  );
}

export default HomePage;
