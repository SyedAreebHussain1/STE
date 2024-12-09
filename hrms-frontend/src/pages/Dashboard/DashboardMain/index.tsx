import React from "react";
import Dashboard from "../../../components/dashboard";
import SpaceWrapper from "../../../components/wrappers/SpaceWrapper";

const DashboardMainPage: React.FC = () => {
  return (
    <SpaceWrapper className="!py-[.75rem] !pr-0 !pl-[1.5rem]">
      <Dashboard />
    </SpaceWrapper>
  );
};

export default DashboardMainPage;
