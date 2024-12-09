import { Tabs } from "antd";
import React from "react";
import type { TabsProps } from "antd";
import Users from "./Users";

type Props = {};

const InAndOut = (props: Props) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex flex-col font-bold">
          <span className="text-[1.25rem] text-center">3</span>
          <span className="text-[.6875rem] text-center">IN</span>
        </div>
      ),
      children: <Users />,
    },
    {
      key: "2",
      label: (
        <div className="flex flex-col font-bold">
          <span className="text-[1.25rem] text-center">6</span>
          <span className="text-[.6875rem] text-center">BREAK</span>
        </div>
      ),
      children: <Users />,
    },
    {
      key: "3",
      label: (
        <div className="flex flex-col font-bold">
          <span className="text-[1.25rem] text-center">8</span>
          <span className="text-[.6875rem] text-center">OUT</span>
        </div>
      ),
      children: <Users />,
    },
  ];
  return (
    <div className="bg-white lg:ml-6 py-6">
      <h4 className="font-bold text-base text-center">Who's in/out</h4>
      <Tabs
        defaultActiveKey="1"
        items={items}
        size="large"
        centered
        indicator={{ align: "center", size: 40 }}
      />
    </div>
  );
};

export default InAndOut;
