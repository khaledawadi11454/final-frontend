import React from "react";
import './Profile.css';
import PersonalInformation from '../../components/profile/personalinformation.jsx';
// import Education from '../../components/profile/education.jsx';
import AboutMe from '../../components/profile/aboutme.jsx';
import PortfolioItems from '../../components/protfolio.jsx';

const Profile = () =>{
    return(
         <>
    <div >
        <PersonalInformation/>
        <AboutMe/>
        <PortfolioItems/>
        {/* <Education/> */}
        </div>
        </>
    );
}
export default Profile;