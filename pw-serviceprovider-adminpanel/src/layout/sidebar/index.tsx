import React, { ReactNode, useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, Spin, theme } from "antd";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import propertyWalletSmallLogo from "../../assets/PropertyWalletSmallLogo.png";
import arrowLeftIcon from "../../assets/arrowLeftIcon.png";
import arrowRightIcon from "../../assets/arrowRightIcon.png";
import UserManagmentIcon from "../../assets/UserManagment.png";
import EstimatedCost from "../../assets/EstimatedCost.png";
import CategoryIcon from "../../assets/Category.png";
import CustomerIcon from "../../assets/Customer.png";

import {
  default as Logo,
  default as LogoMobile,
} from "./../../assets/logo.png";
import Topbar from "./helpers/Topbar";
import { useSelector } from "react-redux";
const { Header, Sider, Content } = Layout;
interface PropType {
  children?: ReactNode;
}
const Sidebar: React.FC<PropType> = ({ children }: PropType) => {
  const pathname: any = useLocation().pathname;
  const navigate: NavigateFunction = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const getAllModulesSideBar = useSelector((state: any) => state?.getAllModulesSideBar)
  const [routesValue, setRoutesValue]: any = useState([])
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const labels = getAllModulesSideBar?.data?.data?.reduce((acc: any, { systemModule: { title, label } }: { systemModule: { title: string, label: string } }) => {
    const path = `/${title}`;
    acc[path] = label;
    return acc;
  }, {});

  useEffect(() => {
    if (getAllModulesSideBar?.data?.data?.length > 0) {
      const data = getAllModulesSideBar?.data?.data?.map((routeItem: any) => {
        if (routeItem?.systemModule?.title === "order") {
          return {
            key: `/`,
            icon: <img
              src={UserManagmentIcon}
              alt=""
              className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
            />,
            label: labels[`/${routeItem?.systemModule?.title}`]
          }
        } else if (routeItem?.systemModule?.title === "service_provider") {
          return {
            key: `/${routeItem?.systemModule?.title}`,
            icon: <img
              src={UserManagmentIcon}
              alt=""
              className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
            />,
            label: labels[`/${routeItem?.systemModule?.title}`]
          }
        }
        else if (routeItem?.systemModule?.title === "customer") {
          return {
            key: `/${routeItem?.systemModule?.title}`,
            icon: <img
              src={UserManagmentIcon}
              alt=""
              className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
            />,
            label: labels[`/${routeItem?.systemModule?.title}`]
          }
        }
        else if (routeItem?.systemModule?.title === "package") {
          return {
            key: `/${routeItem?.systemModule?.title}`,
            icon: <img
              src={UserManagmentIcon}
              alt=""
              className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
            />,
            label: labels[`/${routeItem?.systemModule?.title}`]
          }
        }
        else if (routeItem?.systemModule?.title === "claim") {
          return {
            key: `/${routeItem?.systemModule?.title}`,
            icon: <img
              src={UserManagmentIcon}
              alt=""
              className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
            />,
            label: labels[`/${routeItem?.systemModule?.title}`]
          }
        }
        else if (routeItem?.systemModule?.title === "target") {
          return {
            key: `/${routeItem?.systemModule?.title}`,
            icon: <img
              src={UserManagmentIcon}
              alt=""
              className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
            />,
            label: labels[`/${routeItem?.systemModule?.title}`]
          }
        }
        else if (routeItem?.systemModule?.title === "rating") {
          return {
            key: `/${routeItem?.systemModule?.title}`,
            icon: <img
              src={UserManagmentIcon}
              alt=""
              className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
            />,
            label: labels[`/${routeItem?.systemModule?.title}`]
          }
        }
        else if (routeItem?.systemModule?.title === "wallet") {
          return {
            key: `/${routeItem?.systemModule?.title}`,
            icon: <img
              src={UserManagmentIcon}
              alt=""
              className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
            />,
            label: labels[`/${routeItem?.systemModule?.title}`]
          }
        }
        else if (routeItem?.systemModule?.title === "category") {
          return {
            key: `/${routeItem?.systemModule?.title}`,
            icon: <img
              src={UserManagmentIcon}
              alt=""
              className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
            />,
            label: labels[`/${routeItem?.systemModule?.title}`]
          }
        }
        else if (routeItem?.systemModule?.title === "user_management") {
          return {
            key: `/${routeItem?.systemModule?.title}`,
            icon: <img
              src={UserManagmentIcon}
              alt=""
              className="h-[22px] w-[20px] translate-x-[-20%] translate-y-[10%] "
            />,
            label: labels[`/${routeItem?.systemModule?.title}`]
          }
        }
      })
      setRoutesValue(data)
    } else {
      setRoutesValue([])
    }
  }, [getAllModulesSideBar?.data?.data])
  return (
    <Layout>
      <Sider
        trigger={null}
        breakpoint="md"
        width={280}
        collapsible
        collapsed={collapsed}
        className={`!sticky top-0 h-screen `}
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
            className={`flex mt-3 ${collapsed ? "ml-0 justify-center" : "ml-2.3 justify-start"
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
                    />
                  </div>
                </div>
              ) : (
                <div className="flex border p-[7px] rounded-[8px] px-[10px] mb-2">
                  <img src={arrowRightIcon} alt="" />
                </div>
              )}
            </button>
          </div>
          <Spin spinning={getAllModulesSideBar?.loading} size="large" className="mt-5">
            <Menu
              onClick={onClick}
              mode="inline"
              selectedKeys={[pathname]}
              items={routesValue}
            />
          </Spin>
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
