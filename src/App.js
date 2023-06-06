import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar1 from "./components/Navbar1/Navbar1.jsx";
// import DashCon from "./pages/DashboardContainer";
import TableEventDashboard from "./components/table/TableEventDashboard.jsx";
import TableFindJobDashboard from "./components/TableFindJobDashboard/TableFindJobDashboard.jsx";
import { AuthProvider } from "react-auth-kit";
// import Profiledash from "./components/dashbordcomponant/profiledash.jsx";
import HomePage from "./pages/homePage/home.jsx";
import AboutPage from "./pages/aboutPage/AboutPage.jsx";

import BlogPage from "./pages/BlogPage/Blog.jsx";

import JobPage from "./pages/CompanyProfile/CompanyProfile.jsx";

import Resources from "./pages/Resources/Resources.jsx";
import Events from "./pages/Events/Events.jsx";
import Profile from "./pages/ProfilePage/Profile.jsx";
import JobList from "./pages/Test/Test.jsx";
import Header from "./components/SideBar/Sidebar.jsx";
// import Dashboard from './pages/Dashboard/dashbord.jsx';
// import AnimatedBackground from './pages/ProfilePage/animeted.jsx';
import LoginForm from "./components/login/login.jsx";
import { useEffect, useState } from "react";
import DashboardTabs from "./pages/dashboardTabs/DashboardTabs";
function App() {


console.log(window.location.hostname)
  return (
    <div className="App">
        <Router>
      <AuthProvider
        authType={"localstorage"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
          <Navbar1/>
          {/* <Outlet/> */}
          <Routes>
            {/* <Route path="/dashboard/" element={<DashCon />}>
            <Route path="profile" element={<Profiledash />} />
          </Route> */}

            <Route path="/eventT" element={<TableEventDashboard />} />
            <Route path="/jobT" element={<TableFindJobDashboard />} />
            <Route path="/home" element={<LoginForm />} />
 <Route path="/test5" element={<DashboardTabs />} />
            <Route
              path="*"
              element={
                <p
                  style={{
                    width: "100%",
                    minHeight: "89.5vh",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  404 NOT FOUND
                </p>
              }
            />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/company" element={<JobPage />} />

            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/findjob" element={<JobList />} />
            <Route path="/dashboard" element={<Header />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
      </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
