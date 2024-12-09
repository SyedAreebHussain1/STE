import { useState } from "react";
import LeaveBalanceSideBar from "./LeaveBalanceSideBar";
import LeaveBalanceTable from "./LeaveBalanceTable";
import { Col, Row } from "antd";

const LeaveBalance = ({ activeKey, setActiveKey, tabChange }: any) => {
  return (
    <Row>
      <Col xs={24} md={8} lg={8} xl={5}>
        <div>
          <LeaveBalanceSideBar
            tabChange={tabChange}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        </div>
      </Col>
      <Col xs={24} md={16} lg={16} xl={19}>
        <div className="pl-[16px]">
          <LeaveBalanceTable tabChange={tabChange} activeKey={activeKey} />
        </div>
      </Col>
    </Row>
  );
};
export default LeaveBalance;
