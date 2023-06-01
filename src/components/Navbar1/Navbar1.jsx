import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes, FaUser, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Navbar1.css";
import LOGO from "../../images/demo/LOGO.png";
const Navbar1 = ({ isAdmin }) => {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    toggleNav();
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = () => {
   
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header>
      <h3>
        <img
          className="LOGO"
          src={LOGO}
          alt=""
          srcset=""
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
      </h3>

      <nav ref={navRef} className={isNavOpen ? 'responsive_nav' : ''}>

        {isAdmin && <Link to="/dashboard" onClick={toggleNav}>Dashboard</Link>}
        <Link to="/" onClick={toggleNav}>Home</Link>

        <Link to="/blog" onClick={toggleNav}>Blog</Link>
        <Link to="/about" onClick={toggleNav}>About</Link>
        <Link to="/company" onClick={toggleNav}>Company Profile</Link>
        <Link to="/resources" onClick={toggleNav}>Resources</Link>
        <Link to="/events" onClick={toggleNav}>Events</Link>
        <Link to="/findjob" onClick={toggleNav}>Find Job</Link>
        <Link to="/test5" onClick={toggleNav}>tables</Link>
        <Link to="/eventT" onClick={toggleNav}>EventT</Link>
        <Link to="/jobT" onClick={toggleNav}>JobT</Link>
        <div className="profile-menu">
          <button className="nav-btn profile-icon" onClick={toggleProfileMenu}>
            <FaUser />
          </button>
          {showProfileMenu && (
            <div className="profile-dropdown">
            
              <Link to="/profile" onClick={toggleNav}>Profile</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes className="svg" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars className="svg" />
      </button>
    </header>
  );
};

export default Navbar1;

