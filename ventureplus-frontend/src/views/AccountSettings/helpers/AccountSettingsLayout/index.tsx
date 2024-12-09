import { Col, Row } from "antd";
import React from "react";
import Header from "./helpers/Header";
import RightSection from "./helpers/RightSection";
import {
  businessBlackIcon,
  communicationIcon,
  profileIcon,
  securityIcon,
  subscriptionIcon,
} from "../../../../assets/accountSettingsAssets";
interface AccountSettingsLayoutI {
  children: React.ReactNode;
  headerTitle: string;
  headerDescription: string;
  headerTagTitle?: string;
  selectedCard: string;
}

const AccountSettingsLayout = ({
  headerTitle,
  headerDescription,
  headerTagTitle,
  selectedCard,
  children,
}: AccountSettingsLayoutI) => {
  const menuItems: { title: string; icon: string }[] = [
    {
      title: "Subscription",
      icon: subscriptionIcon,
    },
    {
      title: "Profile",
      icon: profileIcon,
    },
    {
      title: "Security",
      icon: securityIcon,
    },
    {
      title: "Business",
      icon: businessBlackIcon,
    },
    {
      title: "Communication",
      icon: communicationIcon,
    },
  ];
  return (
    <div>
      <Row>
        <Col span={24}>
          <Header
            title={headerTitle}
            description={headerDescription}
            tagTitle={headerTagTitle}
          />
        </Col>
      </Row>
      <Row gutter={16} className="mt-6 sm:hidden block ">
        <Col lg={6} md={6} sm={24}>
          <RightSection selectedCard={selectedCard} />
        </Col>
        <Col
          lg={18}
          md={18}
          span={18}
          sm={24}
          className=" rounded-[10px] p-[15px] w-full min-w-full"
        >
          {children}
        </Col>
        {/* <Col span={1} lg={2} md={2}></Col> */}
      </Row>
      <Row gutter={16} className="mt-6 sm:flex hidden ">
        <Col
          lg={18}
          md={18}
          span={18}
          sm={24}
          className=" rounded-[10px] p-[15px]"
        >
          {children}
        </Col>
        <Col span={5} lg={6} md={6} sm={24}>
          <RightSection selectedCard={selectedCard} />
        </Col>
        {/* <Col span={1} lg={2} md={2}></Col> */}
      </Row>
    </div>
  );
};
export default AccountSettingsLayout;
