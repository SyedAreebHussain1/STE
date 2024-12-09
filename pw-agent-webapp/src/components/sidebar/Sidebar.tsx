import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React, { ReactNode, useEffect, useState } from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import propertyWalletSmallLogo from "../../assets/PropertyWalletSmallLogo.png";
import arrowLeftIcon from "../../assets/arrowLeftIcon.png";
import arrowRightIcon from "../../assets/arrowRightIcon.png";
import inventoryManagementIcon from "../../assets/inventorysvg.svg";
import leadsManagementIcon from "../../assets/leadmanagersvg.svg";
import staffManagementIcon from "../../assets/staffsvg.svg";
import walletIcon from "../../assets/walletsvg.svg";
import AgencyIcon from "../../assets/agencyProfilesvg.svg";
import webEstateIcon from "../../assets/websitesvg.svg";
import marketingToolsIcon from "../../assets/marketing-tools-icon.svg";
import {
  default as Logo,
  default as LogoMobile,
} from "./../../assets/logo.png";
import Topbar from "./Topbar";
import { getFromStorage } from "../../utils/storage";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
const { Header, Sider, Content } = Layout;
interface PropType {
  children?: ReactNode;
}
const Sidebar: React.FC<PropType> = ({ children }: PropType) => {
  const navigate: NavigateFunction = useNavigate();
  const getProfile = useSelector((state: RootState) => state.getProfile);

  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };
  const userRole = getFromStorage("user")?.role;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const labels: { [label: string]: string } = {
    "/": " Lead Management",
    "/staff-management": "Staff Management",
    // "/staff-details": "Staff Details",
    // "/dashboard": "Staff Management",
    "/inventory-management": "Inventory Management",
    "/wallet": "Wallet",
    "/webestate": "Web Estate",
    "/agency-profile": "Agency Profile",
    "/marketing-tools": "Marketing Tools",
    "/package": "Packages",
    "/active-package": "Active Package",
  };

  let location = useLocation();
  const [current, setCurrent] = useState("/");

  useEffect(() => {
    if (location) {
      if (current !== location.pathname) {
        const rootpath = location.pathname.slice(1, location.pathname.length);
        const root = rootpath.substring(0, rootpath.indexOf("/"));
        if (rootpath === "lead-management" || root) {
          setCurrent(root === "lead-management" ? "/" : "/" + root);
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
        width={280}
        collapsible
        collapsed={collapsed}
        className={`!sticky top-0 h-screen  `}
      >
        <div className="py-3 flex  border-b border-borderColor mb-6 w-full">
          {!collapsed ? (
            <>
              <img
                src={Logo}
                className="cursor-pointer hidden md:block h-[46px] ml-5 "
              />
              <img src={LogoMobile} className="cursor-pointer md:hidden " />
            </>
          ) : (
            <div className="flex justify-center w-full h-[46px] ">
              <img src={propertyWalletSmallLogo} className="cursor-pointer " />
            </div>
          )}
        </div>
        <div className="mb-7 mt-3 ">
          <div
            className={`flex mt-3 ${
              collapsed ? "ml-0 justify-center" : "ml-2.3 justify-start"
            }  `}
          >
            <button onClick={() => setCollapsed(!collapsed)}>
              {!collapsed ? (
                <div className="flex border p-[7px]  rounded-[8px] ml-5 mb-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={arrowLeftIcon}
                      alt=""
                      className="h-[11px] w-[22px]"
                    />{" "}
                    <span className="text-[.9375rem] font-medium text-[#104141]">
                      Hide Menu
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex border p-[7px] rounded-[8px] px-[10px] mb-2">
                  <img src={arrowRightIcon} alt="" />
                </div>
              )}
            </button>
          </div>
          <Menu
            onClick={onClick}
            theme="light"
            mode="inline"
            selectedKeys={[current]}
            items={[
              {
                key: "/",
                icon: (
                  <img
                    src={leadsManagementIcon}
                    alt=""
                    className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
                  />
                ),
                label: labels["/"],
              },
              {
                key: "/package",
                icon: (
                  <img
                    src={leadsManagementIcon}
                    alt=""
                    className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
                  />
                ),
                label: labels["/package"],
              },
              {
                key: "/staff-management",
                icon: (
                  <img
                    src={staffManagementIcon}
                    alt=""
                    className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
                  />
                ),
                label: labels["/staff-management"],
              },
              {
                key: "/inventory-management",
                icon: (
                  <img
                    src={inventoryManagementIcon}
                    alt=""
                    className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
                  />
                ),
                label: labels["/inventory-management"],
              },
              {
                key: "/wallet",
                icon: (
                  <img
                    src={walletIcon}
                    alt=""
                    className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
                  />
                ),
                label: labels["/wallet"],
              },
              {
                key: "/webestate",
                icon: (
                  <img
                    src={webEstateIcon}
                    alt=""
                    className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
                  />
                ),
                label: labels["/webestate"],
              },
              {
                key: "/agency-profile",
                icon: (
                  <img
                    src={AgencyIcon}
                    alt=""
                    className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
                  />
                ),
                label: labels["/agency-profile"],
              },
              {
                key: "/active-package",
                icon: (
                  <img
                    src={AgencyIcon}
                    alt=""
                    className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
                  />
                ),
                label: labels["/active-package"],
              },
              {
                key: "/marketing-tools",
                icon: (
                  <img
                    src={marketingToolsIcon}
                    alt=""
                    className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
                  />
                ),
                label: labels["/marketing-tools"],
              },
            ].filter((item: any) => {
              if (
                userRole === "agentStaff" &&
                (item.key == "/staff-management" ||
                  item.key == "/agency-profile" ||
                  item.key == "/package")
              ) {
                return;
              } else if (
                getProfile?.data?.isSubscribe == false &&
                item.key == "/active-package"
              ) {
                return;
              } else if (
                userRole === "agentManager" &&
                (item.key == "/agency-profile" || item.key == "/package")
              ) {
                return;
              } else {
                return item;
              }
            })}
          />
        </div>
      </Sider>
      <Layout>
        <Header className={`px-[16px] sticky top-0 z-10 h-[70px]`}>
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
