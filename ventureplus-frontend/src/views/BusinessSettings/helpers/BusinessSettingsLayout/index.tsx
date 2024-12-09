import { Col, Row } from "antd";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Header from "./helpers/Header";
import RightSection from "./helpers/RightSection";
import { SelectedCardType } from "../..";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";

interface BusinessSettingsLayoutI {
  children: React.ReactNode;
  headerTitle: SelectedCardType;
  headerDescription: string;
  headerTagTitle: string;
  selectedCard: SelectedCardType;
  noPadding?: boolean;
  setSelectedCard: Dispatch<SetStateAction<SelectedCardType>>;
}

const BusinessSettingsLayout = ({
  headerTitle,
  headerDescription,
  headerTagTitle,
  selectedCard,
  setSelectedCard,
  noPadding,
  children,
}: BusinessSettingsLayoutI) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <PageContainer>
        <Row>
          <Col span={24}>
            <Header
              title={headerTitle}
              description={headerDescription}
              tagTitle={headerTagTitle}
              setSelectedCard={setSelectedCard}
            />
          </Col>
        </Row>
        <Row className="mt-6 sm:hidden block ">
          <Col lg={6} md={6} sm={24}>
            <RightSection
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          </Col>
          <Col
            lg={18}
            md={18}
            sm={24}
            className="border border-strokes rounded-[10px] p-3 mt-3"
          >
            {children}
          </Col>
        </Row>
        <Row gutter={16} className="mt-6 sm:flex hidden  ">
          <Col
            lg={18}
            md={18}
            span={18}
            sm={24}
            className="border border-strokes rounded-[10px] pl-[52px] py-[22px]"
          >
            {children}
          </Col>
          <Col span={5} lg={1} md={1} sm={24}></Col>

          <Col span={5} lg={5} md={5} sm={24}>
            <RightSection
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};
export default BusinessSettingsLayout;
