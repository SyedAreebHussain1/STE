import React, { useState } from "react";
import SideBarForLead from "./helpers/sideBarForLead";
import { Row } from "antd";
import Analytics from "./helpers/Analytics";
import Compaings from "./helpers/Compaings";
import TasksOverview from "./helpers/TasksOverview";
import FollowUp from "./helpers/LeadsDetails/FollowUp/FollowUp";
type Props = {};
export type SidebarContent = {
  id: number;
  title: any;
  component: React.ReactNode;
};
export type LeadSourceField = {
  id: number;
  color: string;
  value: number | string;
  title: string;
};
export type LeadbyStatusField = {
  id: number;
  color: string;
  value: number | string;
  title: string;
};
export type LeadsByCompaignChart = {
  subject: string;
  A: number;
  fullMark: number;
};
export type LeadsStatisticsChart = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};
const NewLeadManagement = (props: Props) => {
  const [active, setActive] = useState<SidebarContent | null>({
    id: 1,
    title: <b>Analytics</b>,
    component: <Analytics />,
  });
  const sidebarLabel: SidebarContent[] = [
    {
      id: 1,
      title: <b>Analytics</b>,
      component: <Analytics />,
    },
    {
      id: 2,
      title: <b>Campaigns</b>,
      component: <Compaings active={active} setActive={setActive} />,
    },
    {
      id: 3,
      title: <b>Tasks Overview</b>,
      component: <TasksOverview />,
    },
    {
      id: 4,
      title: "Follow Up Leads",
      component: <FollowUp />,
    },
  ];
  return (
    <div>
      <Row>
        <SideBarForLead
          sideContent={sidebarLabel}
          active={active}
          setActive={setActive}
        />
        <div className="w-full">{active?.component}</div>
      </Row>
    </div>
  );
};
export default NewLeadManagement;
