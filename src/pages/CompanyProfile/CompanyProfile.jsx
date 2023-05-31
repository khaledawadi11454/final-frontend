import React from 'react';
import './CompanyProfile.css';

import herosection from '../../images/demo/herosection.png';
import Footer from '../../components/Footer/Footer.jsx';
const JobPage = () => {
  // Fake data for jobs
  const jobs = [
    {
      category: 'Taxi Drivers',
      count: 7,
      items: [
        'Client Service Coordinator',
        'Community Marketing Coordinator',
        'Community Marketing Coordinator (Healthcare)',
        'Industry Solution Sales - Business Development',
        'Inside Sales / Account Executive',
        'Marketing Coordinator (Healthcare)',
        'Solution Sales - Business Development',
      ],
    },
    {
      category: 'Sedan Drivers',
      count: 11,
      items: [
        'Client Service Coordinator',
        'Community Marketing Coordinator',
        'Community Marketing Coordinator (Healthcare)',
        'Industry Solution Sales - Business Development',
        'Inside Sales / Account Executive',
        'Marketing Coordinator (Healthcare)',
        'Solution Sales - Business Development',
        'Sales - Business Development',
        'Inside Sales / Account Executive',
        'Marketing Coordinator (Healthcare)',
        'Solution Sales - Business Development',
      ],
    },
    {
      category: 'Medical Drivers',
      count: 3,
      items: ['Marketing Coordinator', 'Sales Account Executive', 'Solution & Business Development'],
    },
    {
      category: 'Dispatchers',
      count: 9,
      items: [
        'Client Service Coordinator',
        'Community Marketing',
        'Community Marketing Coordinator (Healthcare)',
        'Industry Solution Sales - Business Development',
        'Community Marketing Coordinator (Healthcare)',
        'Industry Solution Sales - Business Development',
        'Inside Sales / Account Executive',
        'Marketing Coordinator (Healthcare)',
        'Solution Sales - Business Development',
      ],
    },
    {
      category: 'Other',
      count: 3,
      items: ['Community Marketing Coordinator', 'Inside Account Executive', 'Solution Sales & Development'],
    },
  ];

  // Fake data for job details
  const jobDetails = {
    title: 'Part Time - Financial Accountant (20-24 hrs per week) Job',
    description:
      "We look for the same qualities in every employee, because they add up to something special for our customers. Since 1964, we've been developing natural solutions to improve lives in a world where eating and living well means both enjoying good food and treating our planet with respect. We're passionate about real food and genuine customer service. And it all starts with great people.",
    responsibilities: [
      'Ensure integrity of the financial statements for the legal entities assigned.',
      'Assist with the monthly accounting close process including the preparation of journal entries and account reconciliations.',
      'Prepare financial statements and supporting schedules according to monthly close schedule.',
      'Analyze revenues, commissions and expenses to ensure they are recorded appropriately on a monthly basis.',
      'Prepare monthly financial statement variance analysis.',
      'Assist with the annual audit process including preparation of audit schedules and financial statements.',
    ],
    qualifications: [
      "Bachelor's degree in Accounting or Finance.",
      'CPA or equivalent preferred.',
      '2-4 years of overall general accounting experience.',
      'Strong Excel skills required.',
      'Experience with Oracle Financials is a plus.',
    ],
  };

  return (
    <>
    <div className="main job-page">
      <div className="company-header">
        <div className="headline-image">
          <img src={herosection} alt="Company Header" />
        </div>
        <ul>
          {/* <li className="follow">
            <a href="" className="button">
              Follow
            </a>
          </li> */}
          <li className="logo">
            <a className="joba" href="">
              <img src={herosection} alt="Company Name" />
            </a>
          </li>
          <li className="nav">
            {/* <a className="joba" href="">
              Overview
            </a> */}
            {/* <a className="joba" href="">
              Jobs
            </a>
            <a className="joba" href="">
              Video
            </a>
            <a className="joba" href="">
              More
            </a> */}
          </li>
        </ul>
      </div>
      <div className="slide profile-content">
        <h1>CVS Caremark</h1>
        <p className='pcompanyresponsive'>
          At the heart of your story is the profound and wide-reaching impact that's possible when you choose to reinvent
          your career with the company that's reinventing pharmacy.
        </p>
        <p className='pcompanyresponsive'>
          It begins when you feel the inspiring weight of our promise. When you find yourself part of a team unified in
          purpose and goal. When our values resonate in the work you do, the connections you make and the communities you
          enrich.
        </p>
        <h2>Who We Are</h2>
        <p className='pcompanyresponsive'>
          Innovative ideas. Strategic solutions. Compassionate care. Better outcomes. That's CVS Caremark. We welcome
          passion, reward greatness and embody our values in all we do. From the unparalleled service we provide our
          customers, to the opportunities and steadfast support we provide our colleagues, we're dedicated to helping
          people on their path to better health.
        </p>
      </div>
      <div className="slide open-jobs" id="job-list">
        <h2>Open Jobs</h2>
        <div className="jobs groups">
          {jobs.map((job) => (
            <div key={job.category}>
              <h3>
                {job.category} <span>{job.count} jobs</span>
              </h3>
              <ul>
                {job.items.map((item, index) => (
                  <li key={index}>
                    <a className="joba" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="slide callout-content">
        <div className="callout">
          <h2>At the Heart of Your Story</h2>
          <p className='pcompanyresponsive'>
            is the profound and wide-reaching impact that's possible when you choose to reinvent your career with the
            company that's reinventing pharmacy.
          </p>
          <p className='pcompanyresponsive'>
            It begins when you feel the inspiring weight of our promise. When you find yourself part of a team unified in
            purpose and goal. When our values resonate in the work you do, the connections you make and the communities
            you enrich.
          </p>
          <p className="logo">
            <a className="joba" href="">
              <img src="http://imgsg.jobing.com/company/logos/125x60/logo12856.gif" alt="Company Name" />
            </a>
          </p>
        </div>
      </div>
      <div className="slide job-detail">
        <div className="apply-top">
          <a className="buttonprofile apply-button" href="">
            Apply Now
          </a>
          {/* <a href="#" className="button secondary">
            <i className="fa fa-star"></i> Save Job
          </a> */}
          <p>Or, know someone who would be a perfect fit? Let them know!</p>
          <a href="#" className="buttonprofile secondary">
            <i className="fa fa-envelope-o"></i>
            Email job
          </a>
          <a href="#" className="buttonprofile secondary">
            <i className="fa fa-facebook"></i>
            Share on Facebook
          </a>
        </div>
        <h1>Part Time - Financial Accountant (20-24 hrs per week) Job</h1>
        <div className="job-body">
          <h2>Job Description</h2>
          <p className='pcompanyresponsive'>
            We look for the same qualities in every employee, because they add up to something special for our customers.
            Since 1964, we've been developing natural solutions to improve lives in a world where{" "}
            <a className="joba" href="#">
              eating and living well
            </a>{" "}
            means both enjoying good food and{" "}
            <a className="joba" href="#">
              treating our planet
            </a>{" "}
            with respect.
          </p>
          <p className='pcompanyresponsive'>
            We're passionate about real food and genuine customer service. And it all starts with great people.
          </p>
          <h2>Responsibilities</h2>
          <ul className='pcompanyresponsive'>
            <li>Ensure integrity of the financial statements for the legal entities assigned.</li>
            <li>Assist with the monthly accounting close process including the preparation of journal entries and account reconciliations.</li>
            <li>Prepare financial statements and supporting schedules according to monthly close schedule.</li>
            <li>Analyze revenues, commissions and expenses to ensure they are recorded appropriately on a monthly basis.</li>
            <li>Prepare monthly financial statement variance analysis.</li>
            <li>Assist with the annual audit process including preparation of audit schedules and financial statements.</li>
          </ul>
          <h2>Qualifications</h2>
          <ul>
            <li>Bachelor's degree in Accounting or Finance.</li>
            <li>CPA or equivalent preferred.</li>
            <li>2-4 years of overall general accounting experience.</li>
            <li>Strong Excel skills required.</li>
            <li>Experience with Oracle Financials is a plus.</li>
          </ul>
        </div>
      </div>
     
    </div>
     <Footer/>
     </>
  );
};

export default JobPage;
