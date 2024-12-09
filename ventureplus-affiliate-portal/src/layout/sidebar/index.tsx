import { UserSwitchOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import Topbar from "./helpers/Topbar";
import { faviconIcon, venturelogo } from "../../assets";
import { affilateUserProfileApi } from "../../services/api/Dashboard/Profile";
import { affilateBankDetailsApi } from "../../services/api/Dashboard/Bank";
import {
  dashboardIcon,
  dashboardSelectedIcon,
  ebooksIcon,
  ebooksSelectedIcon,
  linkIcon,
  marketingIcon,
  marketingSelectedIcon,
  walletIcon,
  walletSelectedIcon,
} from "../../assets/SidebarAssets";
import { getFromStorage } from "../../utils/storage";
import { RoundedButton } from "../../components";
import { successMessage } from "../../utils/message";
import { RootState } from "../../store/store";
const { Header, Sider, Content } = Layout;
interface PropType {
  children?: ReactNode;
}
const Sidebar: React.FC<PropType> = ({ children }: PropType) => {
  const pathname: any = useLocation().pathname;
  const dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };
  const [current, setCurrent] = useState<string>("/");
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const affilateUserProfile = useSelector(
    (state: RootState) => state?.affilateUserProfile
  );

  const labels: { [label: string]: string } = {
    "/": "Dashboard",
    "/wallet": "Wallet",
    "/marketing": "Marketing",
    "/ebooks-guides": "Ebooks/Guides",
  };
  const textDivRef = useRef<any>(null);

  // Function to copy the text of the div to clipboard
  const copyToClipboard = () => {
    const textToCopy = textDivRef?.current?.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        successMessage("Link copied!");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  useEffect(() => {
    affilateUserProfileApi(dispatch);
    affilateBankDetailsApi(dispatch);
  }, []);

  useEffect(() => {
    if (pathname) {
      if (current !== pathname) {
        const rootpath = pathname.slice(1, pathname.length);
        const root = rootpath.substring(0, rootpath.indexOf("/"));
        if (root) {
          setCurrent("/" + root);
          return;
        }
        setCurrent(pathname);
      } else {
        return;
      }
    }
  }, [pathname, current]);

  return (
    <Layout>
      <Sider
        trigger={null}
        breakpoint="md"
        width={280}
        collapsible
        collapsed={collapsed}
        className={`!sticky top-0 h-screen overflow-y-scroll custom-scrollbar !bg-green-700`}
      >
        <div className="py-3 flex  border-b border-green-500 border-opacity-[37%] mb-6 w-full">
          {!collapsed ? (
            <>
              <img
                src={venturelogo}
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
                icon:
                  current === "/" ? (
                    <img src={dashboardSelectedIcon} alt="dashboard" />
                  ) : (
                    <img src={dashboardIcon} alt="dashboard" />
                  ),
                label: "Dashboard",
              },
              {
                key: "/wallet",
                icon:
                  current === "/wallet" ? (
                    <img src={walletSelectedIcon} alt="wallet" />
                  ) : (
                    <img src={walletIcon} alt="wallet" />
                  ),
                label: "Wallet",
              },
              {
                key: "/marketing",
                icon:
                  current === "/marketing" ? (
                    <img src={marketingSelectedIcon} alt="marketing" />
                  ) : (
                    <img src={marketingIcon} alt="marketing" />
                  ),
                label: "Marketing",
              },
              {
                key: "/ebooks-guides",
                icon:
                  current === "/ebooks-guides" ? (
                    <img src={ebooksSelectedIcon} alt="ebooksGuides" />
                  ) : (
                    <img src={ebooksIcon} alt="ebooksGuides" />
                  ),
                label: "Ebooks/Guides",
              },
            ]}
          />
        </div>
        <div className="flex justify-center items-center  absolute bottom-2">
          <div className="bg-secondaryActive gap-2 w-[95%] rounded-xl mx-auto flex flex-col p-3">
            <div className="flex gap-2 items-center">
              <img src={linkIcon} alt="" />
              <a
                href={affilateUserProfile?.data?.refLink}
                target="_blank"
                className="text-[#344054] text-lg font-medium cursor-pointer hover:text-primaryHover"
              >
                My Affiliate Link
              </a>
            </div>
            <p ref={textDivRef} className="text-body font-medium">
              {affilateUserProfile?.data?.refLink}
            </p>
            <RoundedButton
              title={"Copy Link"}
              onClick={copyToClipboard}
              type="primary"
              sm
              bold
            />
          </div>
        </div>
      </Sider>
      <Layout>
        <Header className={`px-[16px] sticky top-0 z-10 h-[70px]`}>
          <Topbar labels={labels} current={current} />
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
