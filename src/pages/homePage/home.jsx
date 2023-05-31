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
        {/* <header>
        <nav>
        
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/professionals">Find Professionals</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header> */}

        {/* <section className="hero-section">
  <div className="video-container">
    <video src={vide} autoPlay muted loop></video>
  </div>
  <div className="hero-content">
    <h1>Find and Hire Quality WordPress Professionals</h1>
    <p>Discover talented WordPress professionals and get your projects done efficiently.</p>
    <a href="/signup" className="cta-button">Sign Up</a>
  </div>
</section> */}
        <HeroSection/>
        <section className="features-section">
          <h1 className="features">Services</h1>
          {/* <div className="load">
          <div>F</div>
          <div>e</div>
          <div>a</div>
          <div>t</div>
          <div>u</div>
          <div>r</div>
          <div>e</div>
          <div>s</div>
        </div> */}
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

          {/* <div className="feature">
          <h2>Helpful Resources</h2>
          <p>Explore our blog section with informative articles, tutorials, and best practices to enhance your WordPress skills.</p>
        </div> */}
        </section>
        <Card />
        {/* <Timeline/> */}

        {/* <AdditionalFeatures /> */}

        <Testimonial />
        {/* <section className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-container">
  
          <div className="testimonial-card">
            <p>"Working with a WordPress professional from this platform was a game-changer for my business. Highly recommended!"</p>
            <p>- John Smith, CEO of ABC Company</p>
          </div>
          <div className="testimonial-card">
            <p>"I found my dream project through this platform. The communication tools made collaboration seamless!"</p>
            <p>- Jane Doe, Freelance Developer</p>
          </div>
        </div>
      </section> */}

        {/* <section className="newsletter-section">
        <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with the latest trends, news, and offers in the WordPress community.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email address" />
        <button type="submit">Subscribe</button>
      </form>
    </section> */}

        {/* <footer>
        <p>&copy; 2023 Your WordPress Professionals Platform. All rights reserved.</p>
      </footer> */}
      <Footer/>
      </div>
    </>
  );
}

export default HomePage;
