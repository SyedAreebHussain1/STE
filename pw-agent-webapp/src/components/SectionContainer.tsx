import { Col, Row } from "antd";
import React from "react";

type Props = {
  title: string | JSX.Element;
  subtitle: string | JSX.Element;
  extras?: JSX.Element | undefined;
  children: JSX.Element | JSX.Element[];
};

const SectionContainer = ({ title, subtitle, extras, children }: Props) => {
  return (
    <Row gutter={24} className="py-9 border-b border-borderColor">
      <Col lg={6} xs={24}>
        <p className="text-[#292D35] font-medium text-[15px] mb-1">{title}</p>
        <p className="text-[#667085] font-medium text-[12px]">{subtitle}</p>
        {extras}
      </Col>
      <Col lg={18} xs={24}>
        {children}
      </Col>
    </Row>
  );
};

export default SectionContainer;
