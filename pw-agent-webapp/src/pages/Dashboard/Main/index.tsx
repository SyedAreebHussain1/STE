import React, { useState } from "react";
import "./css/Main.css";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Dashboard from "../../../components/dashboard/Dashboard";
import SpaceWrapper from "../../../components/wrappers/SpaceWrapper";

const Index: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <b>Day</b>,
      children: <Dashboard />,
    },
    {
      key: "2",
      label: <b>Week</b>,
      children: <Dashboard />,
    },
    {
      key: "3",
      label: <b>Month</b>,
      children: <Dashboard />,
    },
  ];
  return (
    <SpaceWrapper className="!py-[.75rem] !pr-0 !pl-[1.5rem]">
      <Tabs defaultActiveKey="1" items={items} size="large" />
    </SpaceWrapper>
  );
};

export default Index;
