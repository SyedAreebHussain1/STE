import React, { useEffect, useRef, useState } from "react";
import {
  Layout,
  Col,
  Row,
  Spin,
  Dropdown,
  Menu,
  Avatar,
  Badge,
  Divider,
  Space,
} from "antd";

import { Switch, Route } from "react-router-dom";
import { Switch as AntSwitch } from "antd";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";

import {
  BellOutlined,
  LockOutlined,
  DownOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

import SaleOrder from "./Pages/SaleOrder/SaleOrder";
import WithdrawRequests from "./Pages/Wallet/helpers/WithDrawRequests";
import Wallet from "./Pages/Wallet/Wallet";

const Index = ({ history }) => {
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
  const { Header, Content } = Layout;

  const [collapsed, setCollapsed] = useState(
    window.innerWidth < 600 ? true : false
  );

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) {
      history.push("/login");
    }
  }, [localStorage]);
  console.log("user", user);
  const menu = (
    <Menu
      items={[
        {
          label: (
            <Row style={{ width: "200px", marginTop: "2%" }}>
              <Col>
                <Avatar
                  style={{ marginTop: "2.5%" }}
                  size={40}
                  src={
                    "https://res.cloudinary.com/zamcloud/image/upload/v1597753027/glszymv7uwlsx5ordark.png"
                  }
                />
              </Col>
              <Col style={{ marginLeft: "5%" }}>
                <span>Zaman Dahar</span>
              </Col>
            </Row>
          ),
          key: "1",
          // icon: <UserOutlined />,
        },

        {
          label: "Logout",
          key: "5",
          icon: <LogoutOutlined />,
          onClick: () => {
            handleLogout();
          },
        },
      ]}
    />
  );

  return (
    <>
      <Layout className="site-layout">
        <Sidebar collapsed={collapsed} onCollapse={() => onCollapse()} />

        <Layout
          className="site-layout content-layout-bg-loaded"
          style={
            collapsed
              ? {
                  marginLeft: 80,
                }
              : {
                  marginLeft: 200,
                }
          }
        >
          <>
            <Header
              // color="light"
              className={collapsed ? "header" : "header custom-header"}
              // color="white"
              style={{
                boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                position: "sticky",
                top: 0,
                zIndex: 999,
                height: "80px",
                marginLeft: collapsed ? "" : "2.9%",

                // borderLeft: "2px solid #0E475E",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    marginTop: "1%",
                    // display: "flex",

                    // width: "50%",
                  }}
                >
                  {/* <div style={{ marginTop: "-2%" }}>
                    {React.createElement(
                      collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                      {
                        className: "trigger",
                        onClick: () => setCollapsed(!collapsed),
                      }
                    )}
                  </div> */}
                  <div
                  // style={{ marginLeft: "5%" }}
                  >
                    <h6 style={{ height: "0px" }}>
                      {" "}
                      Welcome Back, {JSON.parse(user).email}
                    </h6>

                    <p
                      style={{
                        color: "grey",
                        fontWeight: "510",
                        marginTop: "-3%",
                      }}
                    >
                      Spot owner
                    </p>
                  </div>
                </div>
                <div>
                  <Avatar
                    style={{ marginTop: "1.2%", marginRight: "2%" }}
                    size={40}
                    src={require("../images/avtar.png")}
                  />
                </div>
              </div>
            </Header>

            <Content
              className={
                collapsed
                  ? "color-switch-content"
                  : "color-switch-content custom-content"
              }
              style={
                collapsed
                  ? {
                      margin: "14px 24px 0",
                      overflow: "initial", // marginLeft: "4%",
                      height: "100%",
                    }
                  : {
                      marginLeft: "2.5%",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      overflow: "initial",
                      marginTop: "0%",
                      overflowX: "hidden",
                      height: "100%",
                    }
              }
            >
              <div
                className="site-layout-background"
                style={{
                  padding: 0,
                  minHeight: "100vh",
                }}
              >
                <Switch>
                  <Route exact path="/dashboard/order" component={SaleOrder} />
                  {/* <Route
                    exact
                    path="/dashboard/requests"
                    component={WithdrawRequests}
                  /> */}
                  <Route path="/dashboard/wallet" component={Wallet} />
                </Switch>
              </div>
            </Content>
          </>
        </Layout>
      </Layout>
    </>
  );
};
export default Index;
