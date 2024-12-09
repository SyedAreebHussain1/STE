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
    <Row className="w-full !my-5 !h-full">
      <Col sm={14} md={14} lg={16} xs={24}>
        <div className="p-6 ml-5 ">{children}</div>
      </Col>
      <Col
        sm={10}
        md={10}
        lg={8}
        xs={24}
        className="flex justify-end items-end"
      >
        <div
          className="flex justify-end items-end h-[330px] w-[315px] my-3 bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${bgRocketGIF})` }}
        >
          
            <img
              className="mt-3 h-[320px] w-[355px] scale-x-[-1] mix-blend-color-burn"
              src={rocketGIF}
              alt=""
            />
          
        </div>
      </Col>
    </Row>
  );
};
