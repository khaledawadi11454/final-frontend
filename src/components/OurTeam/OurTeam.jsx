import React from 'react';
import { FaFacebook, FaTwitter, FaGooglePlus, FaLinkedin } from 'react-icons/fa';
import './OurTeam.css';
const teamData = [
  {
    imgSrc: 'https://i.ibb.co/8x9xK4H/team.jpg',
    title: 'Team 1',
    post: 'Inhaber & Geschäftsführer',
  },
  {
    imgSrc: 'https://i.ibb.co/8x9xK4H/team.jpg',
    title: 'Team 2',
    post: 'Stellvertretender Geschäftsführer',
  },
  {
    imgSrc: 'https://i.ibb.co/8x9xK4H/team.jpg',
    title: 'Team 3',
    post: 'Dipl. Physiotherapeut',
  },
  // {
  //   imgSrc: 'https://i.ibb.co/8x9xK4H/team.jpg',
  //   title: 'Team 4',
  //   post: 'Dipl. Physiotherapeut',
  // },
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
            <a href="#" target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaGooglePlus />
            </a>
          </li>
          <li>
            <a href="#">
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
