import type { MenuProps } from "antd";
import { Layout, Menu, Popover, theme } from "antd";
import React, { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { getChapterApi } from "../../services/api/EditPlan";
import {
  botActive,
  botInactive,
  editPlanIcon,
  editPlanSelectedIcon,
  homeIcon,
  homeSelectedIcon,
  pricingIcon,
  pricingSelectedIcon,
  usersIcon,
  usersSelectedIcon,
  viewPlanIcon,
  viewPlanSelectedIcon,
} from "./../../assets/sidebarAssets";
import "./DarkAndLightModeSwitch.css";
import Topbar from "./Topbar";
const { Header, Sider, Content } = Layout;

interface PropType {
  children: ReactNode;
}

const Sidebar: React.FC<PropType> = ({ children }: PropType) => {
  const navigate: NavigateFunction = useNavigate();

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };

  const labels: { [label: string]: string } = {
    "/dashboard": "Home",
    "/view-plan": "View Plan",
  };

  let location = useLocation();
  let paramNumber = location?.pathname;
  paramNumber = paramNumber.replace(/[^0-9]/g, "");

  const hideSidebarPaths = [
    "/on-boarding-final",
    "/all-done",
    "/check-out",
    "/initial-business-plan",
    `/questions/${paramNumber}`,
    "/consultant",
  ];
  const hideTopbarPaths = [
    "/on-boarding-final",
    "/initial-business-plan",
    `/questions/${paramNumber}`,
  ];

  const hideSidebar = hideSidebarPaths.includes(location.pathname);

  const hideTopbar = hideTopbarPaths.includes(location.pathname);

  const [current, setCurrent] = useState<string>("/");

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
  const dispatch = useDispatch();
  const getChapter = useSelector((state: RootState) => state.getChapter);
  useEffect(() => {
    getChapterApi(dispatch);
  }, []);

  return (
    <Layout className="h-screen ">
      {/* sidebar */}
      {!hideSidebar && (
        <Sider
          trigger={null}
          breakpoint="md"
          collapsed={false}
          className="!fixed !top-[82px] h-[88%] hidden sm:block !min-w-16 !max-w-16 !bg-surfacePrimary !left-0 !rounded-tr-[100px] !rounded-br-[100px] overflow-hidden pt-12 z-50"
        >
          <div className="flex flex-col justify-between h-full bg-transparent">
            <div className="overflow-y-auto custom-scrollbar h-full custom-menu bg-transparent">
              <Menu
                onClick={onClick}
                mode="inline"
                className="min-h-[100%] h-full pt-3 flex flex-col gap-5 !w-full bg-transparent"
                selectedKeys={[current]}
                items={[
                  {
                    key: "/dashboard",
                    icon: (
                      <Popover placement="top" title={"Home"}>
                        {current === "/dashboard" ? (
                          <img src={homeSelectedIcon} alt="home" />
                        ) : (
                          <img src={homeIcon} alt="home" />
                        )}
                      </Popover>
                    ),

                    label: labels["/dashboard"],
                  },
                  {
                    key: "/edit-plan",
                    icon: (
                      <Popover placement="top" title={"Edit Plan"} className="">
                        {current.includes("/edit-plan") ? (
                          <img
                            src={editPlanSelectedIcon}
                            alt="editPlanSelectedIcon"
                          />
                        ) : (
                          <img src={editPlanIcon} alt="editPlanIcon" />
                        )}
                      </Popover>
                    ),
                    label: labels["/edit-plan"],
                  },
                  {
                    key: `/view-plan`,
                    icon: (
                      <Popover placement="top" title={"View Plan"} className="">
                        {current.includes("/view-plan") ? (
                          <img
                            src={viewPlanSelectedIcon}
                            alt="viewPlanSelectedIcon"
                          />
                        ) : (
                          <img src={viewPlanIcon} alt="viewPlanIcon" />
                        )}
                      </Popover>
                    ),
                    label: labels["/view-plan"],
                  },

                  {
                    key: "/consultant",
                    icon: (
                      <Popover
                        placement="top"
                        title={"Business Consultant"}
                        className=""
                      >
                        {current.includes("/consultant") ? (
                          <img src={botActive} alt="chatbotSelectedIcon" />
                        ) : (
                          <img src={botInactive} alt="chatbotIcon" />
                        )}
                      </Popover>
                    ),
                    label: labels["/consultant"],
                  },
                  {
                    key: "/subscription-plan",
                    icon: (
                      <Popover
                        placement="top"
                        title={"Pricing Plan"}
                        className=""
                      >
                        {current.includes("subscription-plan") ? (
                          <img src={pricingSelectedIcon} alt="pricingIcon" />
                        ) : (
                          <img src={pricingIcon} alt="pricingSelectedIcon" />
                        )}
                      </Popover>
                    ),
                  },
                  // will be enabled after testing is complete

                  // {
                  //   key: "/Blogs",
                  //   icon: (
                  //     <Popover placement="top" title={"Blogs"} className="">
                  //       {current.includes("Blogs") ? (
                  //         <img src={pricingSelectedIcon} alt="pricingIcon" />
                  //       ) : (
                  //         <img src={pricingIcon} alt="pricingSelectedIcon" />
                  //       )}
                  //     </Popover>
                  //   ),
                  // },
                ]}
              />
            </div>
          </div>
        </Sider>
      )}
      <Layout>
        {!hideTopbar && (
          <Header
            className={`px-12 !sticky top-0 z-50 h-auto w-full !bg-background border-b`}
          >
            <Topbar labels={labels} />
          </Header>
        )}

        <Content
          className={`!bg-background  ${!hideTopbar ? "overflow-y-auto" : ""}`}
          style={{
            minHeight: 280,
            borderRadius: hideSidebar ? 0 : borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
