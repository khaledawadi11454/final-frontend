import React from 'react';
import { FaFacebookF, FaGooglePlus, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About</h3>
            <p>W-PRO is the ultimate solution for businesses and WordPress professionals, offering a seamless platform to connect, hire, and showcase talent in a supportive community.</p>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p>Get in touch with us for any inquiries or assistance,such as email address, phone number, or social media links.</p>
            <div className="footer-bottom-right">
            <ul className="social-icons">
              {/* <li><a href="#"><FaFacebookF /></a></li> */}
              <li><a href="awadkhaled.webdev@gmail.com"><FaGooglePlus /></a></li>
              <li><a href="https://www.instagram.com/khaledawadi11454/"><FaInstagram /></a></li>
              <li><a href="https://www.linkedin.com/in/khaledawadi11454/"><FaLinkedinIn /></a></li>
            </ul>
          </div>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/resources">Resources</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; {new Date().getFullYear()} Your WordPress Community. All rights reserved.</p>
           
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
