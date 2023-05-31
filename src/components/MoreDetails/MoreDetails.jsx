import React from 'react';
import './MoreDetails.css';
import khaled1 from '../../images/demo/khaled1.png';
const details = [
  {
    image: khaled1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique enim at justo semper, nec placerat odio tempor.',
  },
  {
    image: khaled1,
    text: 'Sed a enim eget justo fringilla eleifend. Integer eleifend massa elit, a pulvinar nunc egestas nec.',
  },
  {
    image: khaled1,
    text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed malesuada tincidunt orci sed convallis.',
  },
  {
    image: khaled1,
    text: 'Phasellus sed tincidunt elit, sit amet aliquet sem. Curabitur non aliquam mauris, ac tincidunt tellus.',
  },
];

function MoreDetails() {
  return (
    <div className="more-details">
      {details.map((detail, index) => (
        <div className={`detail-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
          <div className="detail-image">
            <img src={detail.image} alt={`Image ${index + 1}`} />
          </div>
          <div className="detail-text">
            <p>{detail.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoreDetails;
