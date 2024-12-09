import React, { useState } from "react";
import { Button, Col, Row, Tabs, TabsProps } from "antd";
import AddTimeOffDrawer from "../../../components/TimeOff/AddTimeOffDrawer";
import "./TimeOff.css";
import OverView from "../../../components/TimeOff/Overview";
import LeaveBalance from "../../../components/TimeOff/LeaveBalance";
import SpaceWrapper from "../../../components/wrappers/SpaceWrapper";

const TimeOff: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string>("");
  const [tabChange, setTabChange] = useState<any>("");

  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: <b>Overview</b>,
      children: <OverView tabChange={tabChange} />,
    },
    {
      key: "2",
      label: <b>Leave Balance</b>,
      children: (
        <LeaveBalance
          tabChange={tabChange}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
        />
      ),
    },
  ];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <AddTimeOffDrawer onClose={onClose} open={open} activeKey={activeKey} />
      )}
      <SpaceWrapper>
        <Row>
          <Col span={24}>
            <Tabs
              defaultActiveKey="1"
              items={tabs}
              size="large"
              onChange={setTabChange}
              tabBarExtraContent={
                <div className=" hidden sm:flex justify-end items-center align-middle h-[49px] ">
                  {tabChange === "2" && (
                    <Button
                      onClick={showDrawer}
                      className="dark:bg-dark-primary bg-light-primary text-[white] font-semibold "
                      htmlType="submit"
                    >
                      Add Time Off
                    </Button>
                  )}
                </div>
              }
            />
          </Col>
        </Row>
      </SpaceWrapper>
    </>
  );
};

export default TimeOff;
