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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
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

