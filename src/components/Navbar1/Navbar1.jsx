import { useRef, useState ,useEffect} from "react";
import { FaBars, FaTimes, FaUser, FaBell } from 'react-icons/fa';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Navbar1.css';
import LOGO from '../../images/demo/LOGO.png';
const Navbar1 = () => {
  const navRef = useRef();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  }

  const handleLogout = () => {
    // Add your logout logic here
    // For example, redirect to the login page or clear user session
  }
useEffect(() => {
AOS.init()
}, [])
  return (
    <header>
      <h3><img className="LOGO" src={LOGO} alt="" srcset="" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/></h3>
      
      <nav ref={navRef}>
      <Link to="/dashboard">Dashboard</Link>
        <Link to="/">Home</Link>
        
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/company">Company Profile</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/events">Events</Link>
        <Link to="/findjob">Find Job</Link>
        <Link to="/test5">tables</Link>
        <Link to="/eventT">EventT</Link>
        <Link to="/jobT">JobT</Link>
        <div className="profile-menu">
          <button className="nav-btn profile-icon" onClick={toggleProfileMenu}>
            <FaUser />
          </button>
          {showProfileMenu && (
            <div className="profile-dropdown">
              {/* Add your profile menu options here */}
              <Link to="/profile">Profile</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
        <button className="nav-btn notification-icon">
          <FaBell />
        </button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes  className="svg"/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars className="svg" />
      </button>
    </header>
  );
};

export default Navbar1;
