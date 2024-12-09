import React, { ReactNode, useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, Spin, theme } from "antd";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import ventureLogo from "./../../assets/venturelogo.png";
import faviconIcon from "./../../assets/faviconIcon.png";
import Topbar from "./helpers/Topbar";
import {
  PicRightOutlined,
  PicCenterOutlined,
  UserSwitchOutlined,
  BulbOutlined,
  WalletOutlined,
  GroupOutlined,
  CiCircleOutlined,
} from "@ant-design/icons";
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
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const labels: { [label: string]: string } = {
    "/question": "Question",
    "/chapter": "Chapter",
    "/topic": "Topic",
    "/create-package": "Create Package",
    "/add-on": "Add On",
    "/": "All Users",
    "/affiliateUsers": "Affiliate Users",
    "/ideaValidationsPage": "Idea Validations",
    "/businesses": "Businesses",
    "/business-plan": "Business Plan",
    "/blogs": "Blogs Page",
    "/leads": "Leads",
    "/coupons": "Coupons",
  };
  return (
    <Layout>
      <Sider
        trigger={null}
        breakpoint="md"
        width={280}
        collapsible
        collapsed={collapsed}
        className={`!sticky top-0 h-screen overflow-y-scroll custom-scrollbar`}
      >
        <div className="py-3 flex  border-b border-borderColor mb-6 w-full">
          {!collapsed ? (
            <>
              <img
                src={ventureLogo}
                className="cursor-pointer  h-[76px] ml-5 "
              />
            </>
          ) : (
            <div className="flex justify-center w-full h-[46px] ">
              <img src={faviconIcon} className="cursor-pointer " />
            </div>
          )}
        </div>
        <div className="mb-7 mt-3 ">
          <Menu
            onClick={onClick}
            mode="inline"
            selectedKeys={[pathname]}
            defaultOpenKeys={["user"]}
            items={[
              {
                key: "/",
                icon: <UserSwitchOutlined />,
                label: "Users",
              },
              {
                key: "/affiliateUsers",
                icon: <UserSwitchOutlined />,
                label: "Affiliate Users",
              },
              {
                key: "/leads",
                icon: <UserSwitchOutlined />,
                label: "Leads",
              },
              {
                key: "/ideaValidationsPage",
                icon: <BulbOutlined />,
                label: "Idea Validations",
              },
              {
                key: "/blogs",
                icon: <GroupOutlined />,
                label: "Blogs",
              },
              {
                key: "/coupons",
                icon: <CiCircleOutlined />,
                label: "Coupons",
              },
              {
                key: "sub",
                icon: <PicRightOutlined />,
                children: [
                  { key: "/chapter", label: labels["/chapter"] },
                  { key: "/topic", label: labels["/topic"] },
                  { key: "/question", label: labels["/question"] },
                ],
                label: "Plan Creation",
              },
              {
                key: "package",
                icon: <PicCenterOutlined />,
                children: [
                  { key: "/create-package", label: labels["/create-package"] },
                  { key: "/add-on", label: labels["/add-on"] },
                ],
                label: "Package Creation",
              },
              {
                key: "businessInfo",
                icon: <WalletOutlined />,
                children: [
                  { key: "/businesses", label: labels["/businesses"] },
                  { key: "/business-plan", label: labels["/business-plan"] },
                ],
                label: "Business Info",
              },
            ]}
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
