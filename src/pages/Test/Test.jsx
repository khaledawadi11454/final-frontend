import React, { useEffect, useState } from "react";
import "./Test.css"; // Import the CSS file
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import axios from "axios";
import Loader from '../../components/Loader/Loader';
import {Box} from "@mui/material";

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [typeFilter, setTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleApplyNow = (job) => {
    console.log(`Applying for ${job.title}`);
    // Implement your apply now logic here
  };

  const handleTypeFilterChange = (filter) => {
    setTypeFilter(filter);
  };

  const getData = async () => {
    try {
      setIsLoading(true);
      let res = await axios.get("https://finalproject-app-api.onrender.com/job");
      console.log(res.data.message);
      setJobs(res.data.message);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    const typeMatch =
      typeFilter === "" ||
      job?.type[0].toLowerCase() === typeFilter.toLowerCase();
    const locationMatch = locationFilter
      ? job.location === locationFilter
      : true;
    return typeMatch && locationMatch;
  });

  return (
    <>
      {isLoading ? (<Box sx={{width: "100%", height: "60vh", display: "grid", placeItems: "center"}}>
        <Loader />
        </Box>
      ) : (
        <>
          <div className="test1"></div>
          <div className="job-list">
            <h2 className="job-list-heading">Job List</h2>
            <div className="flexfilter">
              <div className="job-list-filter">
                <span className="job-list-filter-label">Filter by Type:</span>
                <button
                  className={`filter-button ${typeFilter === "" ? "active" : ""}`}
                  onClick={() => handleTypeFilterChange("")}
                >
                  All
                </button>
                <button
                  className={`filter-button ${
                    typeFilter === "full-time" ? "active" : ""
                  }`}
                  onClick={() => handleTypeFilterChange("fulltime")}
                >
                  Full-time
                </button>
                <button
                  className={`filter-button ${
                    typeFilter === "part-time" ? "active" : ""
                  }`}
                  onClick={() => handleTypeFilterChange("parttime")}
                >
                  Part-time
                </button>
                <button
                  className={`filter-button ${
                    typeFilter === "freelancer" ? "active" : ""
                  }`}
                  onClick={() => handleTypeFilterChange("freelancer")}
                >
                  Freelancer
                </button>
              </div>
              <div className="job-list-filter">
                <span className="job-list-filter-label">Filter by Location:</span>
                <select
                  id="locationFilter"
                  value={locationFilter}
                  onChange={handleLocationFilterChange}
                  className="job-list-filter-select"
                >
                  <option value="">All</option>
                  <option value="New York">New York</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="London">London</option>
                  {/* Add more locations as needed  */}
                </select>
              </div>
            </div>
            <div className="job-list-container">
              {jobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div
                    key={job._id}
                    className={`job-item ${
                      selectedJob === job ? "selected" : ""
                    }`}
                    onClick={() => handleJobClick(job)}
                  >
                    <h3 className="job-item-title">{job.title}</h3>
                    <p className="job-item-detail">
                      <strong>Company:</strong> {job.company}
                    </p>
                    <p className="job-item-detail">
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p className="job-item-detail">
                      <strong>Salary:</strong> {job.salary}
                    </p>
                    <p className="job-item-detail">
                      <strong>Type:</strong> {job.type}
                    </p>
                    <p className="job-item-description">{job.description}</p>
                    <button
                      onClick={() => handleApplyNow(job)}
                      className="job-item-apply-button"
                    >
                      <Link className="linkjob" to="/company">
                        Apply Now
                      </Link>
                    </button>
                  </div>
                ))
              ) : (
                <p className="job-list-message">
                  No jobs matching the selected filter.
                </p>
              )}
              {
              selectedJob && (
                <div className="container2">
                  <div className="job-details job-item">
                    <h3 className="job-item-title">
                      Selected Job: {selectedJob.title}
                    </h3>
                    <p className="job-item-detail">
                      <strong>Company:</strong> {selectedJob.company}
                    </p>
                    <p className="job-item-detail">
                      <strong>Location:</strong> {selectedJob.location}
                    </p>
                    <p className="job-item-detail">
                      <strong>Salary:</strong> {selectedJob.salary}
                    </p>
                    <p className="job-item-detail">
                      <strong>Type:</strong> {selectedJob.type}
                    </p>
                    <p className="job-item-description">
                      {selectedJob.description}
                    </p>
                    <button
                      onClick={() => handleApplyNow(selectedJob)}
                      className="job-item-apply-button"
                    >
                      <Link to="/Home">Apply Now</Link>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default JobList;
