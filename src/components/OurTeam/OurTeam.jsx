import React from 'react';
import { FaInstagram, FaTwitter, FaGooglePlus, FaLinkedin } from 'react-icons/fa';
import khaled1 from '../../images/demo/khaled1.png';
import './OurTeam.css';
const teamData = [
  {
    imgSrc: khaled1,
    title: 'Khaled Awad',
    post: 'Frontend Developer',
  },
  {
    imgSrc: khaled1,
    title: 'Khaled Awad',
    post: 'FullStack developer',
  },
  {
    imgSrc: khaled1,
    title: 'Khaled Awad',
    post: 'Web developer',
  },
  
];

const OurTeam = () => {
  return (<>
    <h1 className="titleourteam">OUR TEAM</h1>
    <section className="our-team-section">
      <div className="containerTeam">
        <div className="rowOurTeam">
          {teamData.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

const TeamMember = ({ member }) => {
  const { imgSrc, title, post } = member;

  return (
  <>
      
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="our-team">
        <div className="pic">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="team-content">
          <h3 className="title">{title}</h3>
          <span className="post">{post}</span>
        </div>
        <ul className="social">
          <li>
            <a href="https://www.instagram.com/khaledawadi11454/" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="awadkhaled.webdev@gmail.com">
              <FaGooglePlus />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/khaledawadi11454/">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default OurTeam;
