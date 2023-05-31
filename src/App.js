
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar1 from './components/Navbar1/Navbar1.jsx';
import DashCon from './pages/DashboardContainer';
import TableEventDashboard from './components/table/TableEventDashboard.jsx';
import TableJobs from './components/table/TableResourceDashboard.jsx';
import TableFindJobDashboard from './components/TableFindJobDashboard/TableFindJobDashboard.jsx';

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
import LoginForm from './components/login/login.jsx';
import { useState } from 'react';
function App() {
  const [isAdmin, setIsAdmin] = useState(true)
  return (
    <div className="App">
      <Router>
          <Navbar1 isAdmin={isAdmin}/>
          {/* <Outlet/> */}
          <Routes>
              <Route path='/dashboard/' element={<DashCon/>}>
                <Route path="profile" element={<Profiledash/>}/>
              </Route>

              <Route path='/eventT' element={<TableEventDashboard/>}/>
              <Route path='/jobT' element={<TableFindJobDashboard/>}/>
              <Route path='/home'element={<LoginForm/>}/>
              <Route path="/test5" element={<TableJobs/>} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/company" element={<JobPage />} />
     
            <Route path='/resources' element={<Resources/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/findjob' element={<JobList/>}/>
            <Route path='/dashboard' element={<Header/>}/>
            <Route path='/login' element={<LoginForm />} />
            
          
          </Routes>
      </Router>
    </div>
  );
}

export default App;
