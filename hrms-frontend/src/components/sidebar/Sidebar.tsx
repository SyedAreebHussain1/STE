import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import userManagementIcon from "../../assets/usermanagement.png";
import { RootState } from "../../redux/store";
import Topbar from "./Topbar";
import timesheets from "../../assets/timesheets.png";
import officeLetters from "../../assets/Officeletters.png";
import leavePoliciesicon from "../../assets/LeavePolicies.png";
import departmentIcon from "../../assets/Department.png";
import salary from "../../assets/SaleryManagment.png";
import recruitment from "../../assets/Recruitment.png";
import dashboard from "../../assets/dashboard.png";
import schedules from "../../assets/Workschedules.png";
import locationicon from "../../assets/LiveLocation.png";
import projectActiviesIcon from "../../assets/projectActiviesIcon.svg";
import evaluationsIcon from "../../assets/Evaluation.png";
import "./DarkAndLightModeSwitch.css";
import SidebarLogo from "./SidebarLogo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
const { Header, Sider, Content } = Layout;

interface PropType {
  children: ReactNode;
}

const Sidebar: React.FC<PropType> = ({ children }: PropType) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const navigate: NavigateFunction = useNavigate();
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };

  const labels: { [label: string]: string } = {
    "/": "Dashboard",
    "/timesheets": "Timesheets",
    "/stop-location": "Stop Location",
    "/live-location": "Live Location",
    "/time-off": "Time Off",
    "/letter-head": "Office Letters",
    "/reports": "Reports",
    "/people": "People",
    "/time-off-and-holidays": "Time Off Policies",
    "/location": "Location",
    "/user-management": "User Management",
    "/calls": "Calls",
    "/salary-management": "Salary Management",
    "/department": "Department",
    "/recruitment": "Recruitment",
    "/user-payroll": "User Payrol",
    "/project-activies": "Projects & Activities",
    "/evaluations": "Evaluation",
    "/announcement": "Announcement",
    "/notification": "Notification",
  };

  let location = useLocation();
  const [current, setCurrent] = useState("/");

  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        const rootpath = location.pathname.slice(1, location.pathname.length);
        const root = rootpath.substring(0, rootpath.indexOf("/"));
        if (root) {
          setCurrent("/" + root);
          return;
        }
        setCurrent(location.pathname);
      } else {
        return;
      }
    }
  }, [location, current]);

  return (
    <Layout>
      <Sider
        trigger={null}
        breakpoint="md"
        collapsedWidth="40"
        width={280}
        className="!sticky top-0 h-screen"
      >
        <div className="flex flex-col justify-between h-[100vh]">
          <SidebarLogo darkMode={darkMode} current={current} />
          <div className="overflow-y-auto h-full custom-menu ">
            <Menu
              onClick={onClick}
              theme={darkMode === "dark" ? "dark" : "light"}
              mode="inline"
              className="min-h-[100%] h-max flex-1 pt-3"
              selectedKeys={[current]}
              items={[
                {
                  key: "/",
                  icon: <img src={dashboard} className="iconcolor" />,
                  label: labels["/"],
                },
                {
                  key: "/timesheets",
                  icon: <img src={timesheets} className="iconcolor" />,
                  label: labels["/timesheets"],
                },
                {
                  key: "/letter-head",
                  icon: <img src={officeLetters} />,
                  label: labels["/letter-head"],
                },
                {
                  key: "/stop-location",
                  icon: <img src={locationicon} />,
                  label: labels["/stop-location"],
                },
                {
                  key: "/live-location",
                  icon: <img src={locationicon} />,
                  label: labels["/live-location"],
                },
                {
                  key: "/project-activies",
                  icon: <img src={projectActiviesIcon} />,
                  label: labels["/project-activies"],
                },
                {
                  key: "/salary-management",
                  icon: <img src={salary} className="iconcolor" />,
                  label: labels["/salary-management"],
                },
                {
                  key: "/department",
                  icon: <img src={departmentIcon} />,
                  label: labels["/department"],
                },
                {
                  key: "/recruitment",
                  icon: <img src={recruitment} className="iconcolor" />,
                  label: labels["/recruitment"],
                },
                {
                  key: "/time-off",
                  icon: <img src={timesheets} className="iconcolor" />,
                  label: labels["/time-off"],
                },
                {
                  key: "/location",
                  icon: <img src={locationicon} />,
                  label: labels["/location"],
                },
                {
                  key: "/time-off-and-holidays",
                  icon: <img src={leavePoliciesicon} />,
                  label: "Leave Policies",
                },
                {
                  key: "/user-management",
                  icon: <img src={userManagementIcon} className="iconcolor" />,
                  label: "User Management",
                },
                {
                  key: "/work-schedule",
                  icon: <img src={schedules} className="iconcolor" />,
                  label: "Work Schedule",
                },
                {
                  key: "/notification",
                  icon: <img src={departmentIcon} />,
                  label: labels["/notification"],
                },
                {
                  key: "/evaluations",
                  icon: <img src={evaluationsIcon} />,
                  label: labels["/evaluations"],
                },
                {
                  key: "/announcement",
                  icon: <img src={evaluationsIcon} />,
                  label: labels["/announcement"],
                },
              ]}
            />
          </div>

          <div className=" w-full  md:block dark:bg-dark-grayprimary h-[80px] border-t-[1px] border-gray-200 dark:border-[#ffffff55]">
            <ThemeToggle />
          </div>
        </div>
      </Sider>
      <Layout className="dark:bg-dark-primary ">
        <Header
          className={`px-[16px] sticky top-0 z-10 h-auto dark:bg-dark-grayprimary dark:text-white`}
        >
          <Topbar labels={labels} />
        </Header>
        <Content
          style={{
            minHeight: 280,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
