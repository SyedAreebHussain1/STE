import { Col, Divider, Row } from "antd";
import React from "react";

type Props = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children: React.ReactNode;
};

const SectionContainer = (props: Props) => {
  return (
    <>
      <Row gutter={24} className="mt-6">
        <Col xs={6}>
          <div className="px-6">
            <h4 className=" text-[#292D35] text-[1.2rem] font-medium mb-1">
              {props.title}
            </h4>
            <p className="text-base text-[#667085] font-medium">
              {props.subtitle}
            </p>
          </div>
        </Col>
        <Col xs={18}>
          <Row gutter={24}>{props.children}</Row>
        </Col>
      </Row>
      <Divider />
    </>
  );
};

export default SectionContainer;
