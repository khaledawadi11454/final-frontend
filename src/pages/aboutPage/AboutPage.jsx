import React from 'react';
import { useEffect } from 'react';
import './AboutPage.css';

import OurTeam from "../../components/OurTeam/OurTeam.jsx";
import Footer from '../../components/Footer/Footer.jsx';
import LeftImageAbout from '../../images/demo/LeftImageAbout.png';
import RightImageAbout from '../../images/demo/RightImageAbout.webp';

function AboutPage() {
  useEffect(() => {

    }, [])
  return (
    <div>
      <nav></nav>
      <div className="header"></div>
      <div className="container">
        <div className="about">
          <div className="left">
            <h1 >About us</h1>
            <hr />
            <p>
            At W-PRO, we are passionate about connecting businesses and individuals with top-quality WordPress professionals. Our platform serves as a hub for both clients and professionals, providing a seamless experience for hiring and showcasing talent. With our user-friendly profiles, demo features, ratings and reviews, search function, and communication tools, we make it easy to find the perfect WordPress professional for any project.
            </p>
            <p>
            We understand the challenges that both businesses and WordPress professionals face. Businesses often struggle to find reliable and skilled WordPress professionals, while professionals find it challenging to showcase their talents and attract clients. That's why we built W-PRO – to bridge the gap and create a supportive community for both parties.
            </p>
          </div>
          <div className="right">
            <img src={RightImageAbout} alt="About Us" />
          </div>
          <div className="clear"></div>
        </div>

        <div className="mission">
          <div className="left">
            <img src={LeftImageAbout} alt="Mission" />
          </div>
          <div className="right">
            <h1>Mission Statement</h1>
            <hr />
            <p>
            Our mission is to empower businesses and individuals to succeed in their WordPress projects by connecting them with the right professionals and providing a platform that fosters growth and collaboration. We aim to be the go-to resource for all WordPress-related needs, offering unique features and resources that set us apart from the competition.
            </p>
            <p>
            We are committed to facilitating successful transactions, ensuring customer satisfaction, and promoting the growth of WordPress professionals. By providing a reliable and user-friendly platform, we strive to make the process of finding, hiring, and working with WordPress professionals a seamless and enjoyable experience.
            </p>
            <p>
            Join W-PRO today and become part of a vibrant community where businesses and professionals thrive together.
            </p>
          </div>
          <div className="clear"></div>
        </div>

       
      </div>
    <OurTeam/>
    <Footer/>
    </div>
  );
}

export default AboutPage;

