
// import './App.css';
// import { Scrollbars } from 'react-custom-scrollbars';
// import { Outlet } from 'react-router-dom';

// import { BrowserRouter as Router } from 'react-router-dom';
// // import AdditionalFeatures from './components/AdditionFeatures/additionalfeature.jsx';
// // import NewsletterSection from './components/NewsLetter/newsletter.jsx';
// // import Tabs from '../src/components/login/login.jsx';
// // import PersonalInformation from "./components/profile/personalinformation.jsx";
// // import AboutMe from './components/profile/aboutme.jsx';
// // import PortfolioItems from './components/protfolio.jsx';
// // import Portfolio from './components/profile/portfolio.jsx';
// // import CountryList from './components/countrylist.jsx';
// // import Education from './components/profile/education.jsx';
// // import Reviews from './components/Review/review.jsx';
// // import OurProfessionalServices from './components/OurProfessionalServices/OurProfessionalServices.jsx';
// // import MoreDetails from './components/MoreDetails/MoreDetails.jsx';
// // import Card from '../src/components/Demos/demo.jsx';
// // import Navigation from './components/Navbar/Navbar.jsx';
// // import Cursor from './components/Cursor/Cursor.jsx';
// import SliderComponent from './components/HeroSection/HeroSession.jsx';
// // import Timeline from '../../final-project/src/pages/homePage/timeline.jsx';


// import Navbar1 from './components/Navbar1/Navbar1.jsx';

// // import HomePage from './pages/homePage/home.jsx';

// // import AboutPage from './pages/aboutPage/AboutPage.jsx';
// // import Footer from '../src/components/Footer/Footer.jsx';

// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <Scrollbars style={{ width: '100%', height: '100vh' }}>
//         <Navbar1/>
//     {/* <AboutPage/> */}
//         {/* <HomePage/> */}
//     {/* <Footer/> */}
       
//     {/* <CountryList/>  */}
//     {/* <SliderComponent/> */}
//     {/* <Card/> */}

//     {/* <OurProfessionalServices/> */}

//     {/* <AdditionalFeatures/> */}
//     {/* <NewsletterSection/> */}
//     {/* <Tabs/> */}
//     {/* <PersonalInformation/> */}
//     {/* <AboutMe/> */}
//     {/* <PortfolioItems/> */}
//     {/* <Portfolio/> */}
//     {/* <Education/> */}
//     {/* <Reviews/> */}
//     {/* <Timeline/> */}
//     {/* <MoreDetails/> */}
//     {/* <Navigation/> */}
//     {/* <Cursor/> */}
//     </Scrollbars>
//     </div>
//     </Router>
//   );
// }

// export default App;
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar1 from './components/Navbar1/Navbar1.jsx';
import DashCon from './pages/DashboardContainer';
import TableEventDashboard from '../../final-project/src/components/table/TableEventDashboard.jsx';
import TableJobs from '../../final-project/src/components/table/TableResourceDashboard.jsx';
import TableFindJobDashboard from '../../final-project/src/components/TableFindJobDashboard/TableFindJobDashboard.jsx';

import Profiledash from '../src/components/dashbordcomponant/profiledash.jsx';
import HomePage from '../src/pages/homePage/home.jsx';
import AboutPage from '../src/pages/aboutPage/AboutPage.jsx';

import BlogPage from '../src/pages/BlogPage/Blog.jsx';

import JobPage from '../src/pages/CompanyProfile/CompanyProfile.jsx';

import Resources from '../src/pages/Resources/Resources.jsx';
import Events from '../src/pages/Events/Events.jsx';
import Profile from '../src/pages/ProfilePage/Profile.jsx';
import JobList from "../src/pages/Test/Test.jsx";
import Header from '../src/components/SideBar/Sidebar.jsx';
// import Dashboard from '../src/pages/Dashboard/dashbord.jsx';
// import AnimatedBackground from '../src/pages/ProfilePage/animeted.jsx';
import LoginForm from '../../final-project/src/components/login/login.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Scrollbars style={{ width: '100%', height: '100vh' }}>
          <Navbar1/>
          {/* <Outlet/> */}
          <Routes>
              <Route path='/dashboard/' element={<DashCon/>}>
                <Route path="profile" element={<Profiledash/>}/>
              </Route>

              <Route path='/eventT' element={<TableEventDashboard/>}/>
              <Route path='/jobT' element={<TableFindJobDashboard/>}/>
              <Route path='/'element={<LoginForm/>}/>
              <Route path="/test5" element={<TableJobs/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/company" element={<JobPage />} />
     
            <Route path='/resources' element={<Resources/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/findjob' element={<JobList/>}/>
            <Route path='/dashboard' element={<Header/>}/>
            
          
          </Routes>
        </Scrollbars>
      </Router>
    </div>
  );
}

export default App;
