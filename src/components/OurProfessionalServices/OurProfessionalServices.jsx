import React from 'react';
import { FaDesktop, FaPaintBrush, FaCogs } from 'react-icons/fa';
import './OurProfessionalServices.css';

const services = [
  {
    title: 'WordPress Website Design',
    description: 'Professional and visually appealing website design using WordPress.',
    icon: FaDesktop,
  },
  {
    title: 'WordPress Theme Development',
    description: 'Custom theme development to meet your specific design requirements.',
    icon: FaPaintBrush,
  },
  {
    title: 'Plugin Development and Customization',
    description: 'Create and customize WordPress plugins to enhance your website\'s functionality.',
    icon: FaCogs,
  },
  // Add more services as needed
];

function OurProfessionalServices() {
  return (
    <div className="services-container">
      <h2>Our Professional Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-inner">
              <div className="service-front">
                <div className="service-icon">
                  <service.icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <div className="service-back">
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProfessionalServices;
