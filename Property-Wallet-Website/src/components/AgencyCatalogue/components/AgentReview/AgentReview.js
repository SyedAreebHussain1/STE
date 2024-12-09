import React, { useEffect, useState } from "react";
import { Col, Form, Input, Modal, Rate, Row, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import { createReviewApi } from "../../redux/api/MeetOurTeam";
import Button from "../Buttons/Button";
import { getFromStorage } from "../../utils/storage";
import PhoneInput from "react-phone-number-input";
import { errorMessage } from "../../utils/message";

const AgentReview = ({ visible, toggle, id }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const agentReview = getFromStorage("agentReview");
  const createReview = useSelector((state) => state.createReview);
  const validatePhoneNumber = (_, value) => {
    const phoneNumberRegex = /^\92\d{10}$/;
    if (value && !phoneNumberRegex.test(value)) {
      return Promise.reject(
        new Error("Please enter a valid Pakistani phone number.")
      );
    }
    return Promise.resolve();
  };

  useEffect(() => {
    // Function to update window width in the state
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  function onSuccess(data) {
    let newData = {
      email: data?.email,
      name: data?.name,
      phone: data?.phone,
    };
    localStorage.setItem("agentReview", JSON.stringify(newData));
    toggle();
  }

  function onFinish(data) {
    if (data && value) {
      const body = {
        userId: id,
        rateStar: value,
        comment: data.comment,
        name: data.name,
        phone: data.phone,
        email: data.email,
      };
      createReviewApi(dispatch, body, onSuccess);
    } else {
      errorMessage("Rating is required");
    }
  }
  useEffect(() => {
    if (agentReview) {
      form.setFieldsValue({
        name: agentReview?.name,
        phone: agentReview?.phone,
        email: agentReview?.email,
      });
      setValue(0);
    }
  }, []);
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Leave Review</h3>}
      open={visible}
      onCancel={toggle}
      footer={null}
      centered={true}
      width={719}
    >
      <div className="agency-catalogue">
        <div>
          <Form
            name="normal_login"
            form={form}
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Row gutter={16}>
              <Col sm={24} xs={24} lg={12} className="mt-[0px] !md:mt-[22px]">
                <h2 className="mb-[5px] text-[#667085] font-medium text-[1rem]">
                  Name <span className="text-red-700 ">*</span>
                </h2>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your name.",
                    },
                  ]}
                >
                  <Input
                    name="name"
                    placeholder="Name"
                    className="bg-[#FFFFFF] text-[#667085] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                  />
                </Form.Item>
              </Col>
              <Col sm={24} xs={24} lg={12} className="!mt-[0px] !md:mt-[22px]">
                <h2 className="mb-[2px] !md:mb-[5px] text-[#667085] font-medium text-[1rem]">
                  Email <span>(Optional)</span>
                </h2>
                <Form.Item name="email">
                  <Input
                    name="email"
                    placeholder="Email"
                    className="bg-[#FFFFFF] text-[#667085] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                  />
                </Form.Item>
              </Col>
              <Col
                sm={24}
                xs={24}
                lg={12}
                className="!mt-[0] !md:mt-[22px] countryCodeInModal"
              >
                <h2 className=" text-[#667085] font-medium text-[1rem]">
                  Phone no <span className="text-red-700 ">*</span>
                </h2>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number.",
                    },
                  ]}
                >
                  <PhoneInput
                    name="phone"
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="PK"
                    className="bg-[#FFFFFF] text-[#667085] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                  />
                </Form.Item>
              </Col>
              <Col sm={24} xs={24} lg={24} className="!mt-[0] !md:mt-[22px]">
                <h2 className="mb-[5px] text-[#667085] font-medium text-[1rem]">
                  Comment <span className="text-red-700 ">*</span>
                </h2>
                <Form.Item
                  name="comment"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your comment.",
                    },
                  ]}
                >
                  <TextArea
                    placeholder="Comment"
                    name="comment"
                    style={{
                      height: windowWidth > 769 ? 188 : 140,
                      resize: "none",
                    }}
                    className="text-[#667085] bg-[#FFFFFF] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8"
                  />
                </Form.Item>
              </Col>
              <Col sm={24} xs={24} lg={24} className="!mt-[0px] !md:mt-[22px]">
                <h2 className="!mb-[0px] !md:mb-[5px] text-[#667085] font-medium text-[1rem]">
                  Rate <span className="text-red-700 ">*</span>
                </h2>
                <Space>
                  <Rate onChange={setValue} value={value} />
                </Space>
              </Col>
            </Row>
            <div className="flex justify-end !mt-[10px] !md:mt-[55px]">
              <Button
                // type="primary"
                className="text-base px-3 py-3"
                htmlType="submit"
                variant={"filled-inverse"}
                label={"Submit"}
                loading={createReview.loading}
              />
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default AgentReview;
