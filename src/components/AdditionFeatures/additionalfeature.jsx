import React from 'react';


import { FaLock, FaTasks, FaFileAlt, FaUserCheck, FaHeadset } from 'react-icons/fa';
import './additionalfeature.css'; // Import the CSS file

function AdditionalFeatures() {
  return (
    <section className="additional-features">
      <h1 className="SErvice">Best Services</h1>
      <div className="allcards">
      <div className="feature-card">
        <div className="card-inner">
          <div className="card-front">
            <div className="icon">
              <FaLock />
            </div>
            <h2>Secure Payments</h2>
          </div>
          <div className="card-back">
            <div className="icon">
              <FaLock />
            </div>
            <p className='Paragraph'>Make hassle-free and secure payments for the completed projects using our integrated payment system.</p>
          </div>
        </div>
      </div>
      <div className="feature-card">
        <div className="card-inner">
          <div className="card-front">
            <div className="icon">
              <FaTasks />
            </div>
            <h2>Project Management</h2>
          </div>
          <div className="card-back">
            <div className="icon">
              <FaTasks />
            </div>
            <p className='Paragraph'>Manage your projects efficiently with our project management tools, including task tracking, deadlines, and progress monitoring.</p>
          </div>
        </div>
      </div>
      <div className="feature-card">
        <div className="card-inner">
          <div className="card-front">
            <div className="icon">
              <FaFileAlt />
            </div>
            <h2>Custom Offers</h2>
          </div>
          <div className="card-back">
            <div className="icon">
              <FaFileAlt />
            </div>
            <p className='Paragraph'>Create custom offers based on your client's specific requirements and negotiate the terms directly with the professionals.</p>
          </div>
        </div>
      </div>
      <div className="feature-card">
        <div className="card-inner">
          <div className="card-front">
            <div className="icon">
              <FaUserCheck />
            </div>
            <h2>Verified Professionals</h2>
          </div>
          <div className="card-back">
            <div className="icon">
              <FaUserCheck />
            </div>
            <p className='Paragraph'>Rest assured that you are hiring skilled and reliable WordPress professionals. All our professionals undergo a thorough verification process.</p>
          </div>
        </div>
      </div>
      {/* <div className="feature-card">
        <div className="card-inner">
          <div className="card-front">
            <div className="icon">
              <FaHeadset />
            </div>
            <h2>24/7 Support</h2>
          </div>
          <div className="card-back">
            <div className="icon">
              <FaHeadset />
            </div>
            <p>Get round-the-clock support from our customer service team. We are here to assist you with any queries or issues you may have.</p>
          </div>
        </div>
      </div> */}
      </div>
    </section>
  );
}

export default AdditionalFeatures;
