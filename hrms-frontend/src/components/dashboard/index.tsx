import { Tabs } from "antd"; // Import Tabs component
import Organization from "./helpers/DashboardTabs/Organization";
import { useState } from "react";

const Dashboard = () => {


  return (
    <div className="mb-16 ">
      <Organization/>
    </div>
  );
};

export default Dashboard;
