import React from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const IdeaHeader = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Row className="flex items-start h-full w-full mb-5">
        <Col className="relative text-start">
          <div className="justify-start items-start gap-5 flex flex-col">
            <h5
              className="cursor-pointer font-semibold text-[#4A5366] body-s"
              onClick={() => navigate("/dashboard")}
            >
              <ArrowLeftOutlined /> Back to home
            </h5>
            <div className="flex flex-col">
              <h1 className="text-[#040615] font-bold lg:text-3xl md:text-xl text-lg flex text-start">
                Idea Validation
              </h1>
              <p className="text-[#212838] font-medium lg:text-xl md:text-lg text-md flex text-start">
                Assessing your business idea through user feedback.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default IdeaHeader;
