import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import TableResourceDashboard from "../../components/table/TableResourceDashboard";

const DashboardTabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab label="Resources" value="1" />
            <Tab label="Events" value="2" />
            <Tab label="Jobs" value="3" />
          </TabList>
          <TabPanel value="1">
            <TableResourceDashboard />
          </TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default DashboardTabs;
