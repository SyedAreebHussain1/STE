import React, { useEffect } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import SpaceWrapper from "../wrappers/SpaceWrapper";
import SalaryDetails from "./helpers/SalaryDetails/SalaryDetails";
import SalaryTransactions from "./helpers/SalaryTransactions/SalaryTransactions";

const SalaryManagement: React.FC = () => {

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <b>Salary Details</b>,
      children: <SalaryDetails />,
    },
  ];
  return (
    <SpaceWrapper>
      <Tabs defaultActiveKey="1" items={items} size="large" />
    </SpaceWrapper>
  );
};

export default SalaryManagement;
