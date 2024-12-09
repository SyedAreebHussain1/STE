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
        <Col xs={24}  xl={6}>
          <div >
            <h4 className=" text-[#292D35] text-[1.2rem] font-medium mb-1">
              {props.title}
            </h4>
            <p className="text-base text-[#667085] font-medium p-0 mb-2">
              {props.subtitle}
            </p>
          </div>
        </Col>
        <Col xs={24} xl={18}>
          <Row gutter={24}>{props.children}</Row>
        </Col>
      </Row>
      <Divider />
    </>
  );
};

export default SectionContainer;
