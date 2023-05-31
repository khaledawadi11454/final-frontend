import React from 'react';
import './home.css';

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      title: 'Event Title 1',
      date: 'January 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Event Title 2',
      date: 'February 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 3,
        title: 'Event Title 1',
        date: 'January 2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
  ];

  return (
    <div className="timeline-container">
      {timelineData.map((event, index) => (
        <div
          className={`timeline-card ${index % 2 === 0 ? 'left' : 'right'}`}
          key={event.id}
        >
          <div className="timeline-content">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
