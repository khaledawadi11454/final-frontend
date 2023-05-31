import BarChart from "../../../components/admin/chart/BarChart";
import DonateCharts from "../../../components/admin/chart/DonateChart";
import LineCharts from "../../../components/admin/chart/LineCharts";

import "./dashboardAdmin.css";

function Dashboard() {
  return (
    <section className="adminDashboard">
      <h1>Dashboard</h1>
   
        <BarChart />
        <section className="charts-dash">
         <DonateCharts />
          <LineCharts/>
        </section>
    </section>
  );
}
export default Dashboard;
