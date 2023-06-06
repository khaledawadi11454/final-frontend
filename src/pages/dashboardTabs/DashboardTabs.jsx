import React, { useState } from "react";
import styles from "./DashboardTabs.module.css";
import TableResourceDashboard from "../../components/table/TableResourceDashboard";
import TableEventDashboard from "../../components/table/TableEventDashboard";
import TableJobDashboard from "../../components/table/TableJobDashboard";
import PersonalInformation from "../../components/profile/personalinformation";
import AboutMe from "../../components/profile/aboutme";
import PortfolioItems from '../../components/protfolio';
import ProfilePage from "../../components/profile/ProfilePage";

const DashboardTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.dashboardTabs}>
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tab} ${value === "1" ? styles.active : ""}`}
          onClick={() => handleChange(null, "1")}
        >
          Resources
        </button>
        <button
          className={`${styles.tab} ${value === "2" ? styles.active : ""}`}
          onClick={() => handleChange(null, "2")}
        >
          Events
        </button>
        <button
          className={`${styles.tab} ${value === "3" ? styles.active : ""}`}
          onClick={() => handleChange(null, "3")}
        >
          Jobs
        </button>
        <button
          className={`${styles.tab} ${value === "4" ? styles.active : ""}`}
          onClick={() => handleChange(null, "4")}
        >
          Profile
        </button>
        <button
          className={`${styles.tab} ${value === "5" ? styles.active : ""}`}
          onClick={() => handleChange(null, "5")}
        >
          Portfolio
        </button>
      </div>
      <div className={styles.tabContent}>
        {value === "1" && <TableResourceDashboard />}
        {value === "2" && <TableEventDashboard />}
        {value === "3" && <TableJobDashboard />}
        {value === "4" && (
          <>
            <ProfilePage />
          </>
        )}
         {value === "5" && <PortfolioItems />}
      </div>
    </div>
  );
};

export default DashboardTabs;
