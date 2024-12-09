import React, { useState } from "react";
import SideBarForLead from "./helpers/sideBarForLead";
import { Row } from "antd";
import Analytics from "./helpers/Analytics";
import Compaings from "./helpers/Compaings";
import TasksOverview from "./helpers/TasksOverview";
import LeadPipeline from "./helpers/Pipeline";
import FollowUpTable from "../LeadManagement/helpers/FollowUpTable";
type Props = {};
export type SidebarContent = {
  id: number;
  title: string;
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
    title: "Analytics",
    component: <Analytics />,
  });
  const sidebarLabel: SidebarContent[] = [
    {
      id: 1,
      title: "Analytics",
      component: <Analytics />,
    },
    {
      id: 2,
      title: "Campaigns",
      component: <Compaings active={active} setActive={setActive} />,
    },
    {
      id: 3,
      title: "Tasks Overview",
      component: <TasksOverview />,
    },
    {
      id: 4,
      title: "Follow Up Leads",
      component: <FollowUpTable />,
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
