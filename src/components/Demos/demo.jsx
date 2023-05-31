import React from 'react';
import AboutUsPage from '../../images/demo/AboutUsPage.jpeg';
import RestaurantLandingPage from "../../images/demo/RestaurantLandingPage.jpeg";
import ServiceLandingPage from "../../images/demo/ServiceLandingPage.jpeg";
import './demos.css';
const Card = () => {
  const fakeData = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: AboutUsPage,
      demoUrl: 'https://www.example.com'
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: RestaurantLandingPage,
      demoUrl: 'https://www.example.com'
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: ServiceLandingPage,
      demoUrl: 'https://www.example.com'
    }
  ];

  return (
    <div className="card-container">
      <h1 className="PRoject">Top Project</h1>
      {fakeData.map((data) => (
        <div className="card" key={data.id}>
          <div className="card-img-container">
            <img src={data.imageUrl} alt="Demo Image" />
          </div>
          <div className="card-content">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <a href={data.demoUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
