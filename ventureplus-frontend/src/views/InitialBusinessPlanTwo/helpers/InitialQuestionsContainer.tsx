import React from "react";
import rocketGIF from "../../../assets/question/rocketGIF.gif";
import bgRocketGIF from "../../../assets/question/bg-rocketGIF.png";
import { Col, Row } from "antd";

type InitialQuestionsContainerProps = {
  children: React.ReactNode;
};

export const InitialQuestionsContainer = ({
  children,
}: InitialQuestionsContainerProps) => {
  return (
    <Row className="w-full mb-20 h-full min-h-[100vh] max-h-full ">
      <Col sm={24} md={24} lg={24} xs={24}>
        <div className="p-2 sm:mb-0 mb-10">{children}</div>
      </Col>
    </Row>
  );
};
