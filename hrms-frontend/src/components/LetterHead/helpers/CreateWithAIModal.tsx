import { Col, Modal, Row, Spin } from "antd";
import React, { useState } from "react";
import RoundedButton from "../../../helpers/button/RoundedButton";
import axios from "axios";
import CreateLetter from "./CreateLetter";
import { prepareAutoBatched } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const CreateWithAIModal = ({ open, onClose }: any) => {
  const [apiRes, setApiRes] = useState({ loading: false, data: null });
  const [active, setActive] = useState({ id: 1, title: "Offer Letter" });

  const navigate = useNavigate();
  const array = [
    { id: 1, title: "Offer Letter" },
    { id: 2, title: "Promotion Letter" },
    { id: 3, title: "Resignation Letter" },
    { id: 4, title: "Termination Letter" },
    { id: 5, title: "Permanency Letter" },
    { id: 6, title: "Internship Completion Letter" },
    { id: 7, title: "Warning Letter" },
    { id: 8, title: "Increment Letter" },
    { id: 9, title: "Experience Letter" },
  ];
  const ApiCall = async (props: any) => {
    try {
      const response = await axios.post(
        `https://dlfqs3ulrjovrdeujoh47j6zwq0pkxys.lambda-url.ap-south-1.on.aws/lettercreation?letter=${props?.title}`,
        { "Content-Type": "application/json" }
      );
      setApiRes({ loading: false, data: response?.data });
      navigate("/letter", {
        state: { data: response?.data, title: props?.title },
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const onClickHandler = (props: any) => {
    setApiRes((pre: any) => ({ ...pre, loading: true }));
    ApiCall(props);
  };
  return (
    <Modal
      title={"Create New Doc"}
      centered
      footer={null}
      open={open ? true : false}
      onCancel={() => onClose(false)}
      width={1000}
    >
      <div className="relative h-full w-full">
        <Spin fullscreen spinning={apiRes?.loading} />
        <Row gutter={[16, 16]} className="mt-3">
          {array &&
            array?.map((item: any, index: any) => (
              <Col xs={24} sm={12} md={12} lg={8}>
                <TempleteComponent
                  title={item?.title}
                  active={active}
                  setActive={setActive}
                  id={item?.id}
                  clickHandler={onClickHandler}
                />
              </Col>
            ))}
        </Row>
        {/* <div className="flex mt-5 justify-end">
        <div className="flex items-center gap-3">
          <RoundedButton
            onClick={onClose}
            title={"cancel"}
            className="dark:bg-dark-primary dark:text-white"
            sm
          />
          <RoundedButton
            onClick={onClickHandler}
            title={"Continue"}
            loading={apiRes?.loading}
            className="dark:bg-white dark:text-dark-primary  text-light-primary bg-white"
            sm
          />
        </div>
      </div> */}
      </div>
    </Modal>
  );
};

export default CreateWithAIModal;

const TempleteComponent = (props: any) => {
  // ${
  //   props?.active?.id == props?.id
  //     ? "border-[#655DBB] dark:border-dark-secondary"
  //     : "border-[#EAECF0] dark:border-[#f2f4f70d]"
  // }
  return (
    <div
      className={`w-full h-full border-[#EAECF0] dark:border-[#f2f4f70d]  rounded-md border-[1px]`}
      onClick={() => props.clickHandler(props)}
    >
      <div className="bg-[#a4b6ff12]  h-[100px] overflow-hidden flex justify-center pt-[15px]">
        <div className="bg-[#a4b6ff0f] relative h-full w-[28%] rounded-tl-sm rounded-tr-sm">
          <div className="absolute w-full h-full top-[15px] left-[15px] flex justify-center bg-white rounded-sm dark:bg-dark-grayprimary">
            <div className="flex flex-col justify-center w-[80%] h-[35px] bg-[#655DBB] dark:bg-[#7C4BDE]  rounded-sm mt-[8%] gap-[5px] px-2">
              <div className="w-[80%] h-[5px] bg-white dark:bg-black"></div>
              <div className="w-[50%] h-[5px] bg-white dark:bg-black"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[15px]">
        <h1 className="text-[1rem] dark:text-white font-semibold ">
          {props?.title}
        </h1>
        <p className="dark:text-dark-secondary">Use Template</p>
      </div>
    </div>
  );
};
