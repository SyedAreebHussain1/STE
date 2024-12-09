import React from "react";
import { Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import PhoneInput from "react-phone-number-input";

const ConfirmationStep = () => {
  return (
    <Row gutter={20}>
      <Col xs={24} sm={24} lg={24}>
        <div>
          <h2>Name</h2>
          <Form.Item
            name={"name"}
            className="mt-[10px]"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
            ]}
          >
            <Input className="w-full h-[43px]" />
          </Form.Item>
        </div>
        <div>
          <h2>Email</h2>
          <Form.Item
            name={"email"}
            className="mt-[10px]"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
            ]}
          >
            <Input className="w-full h-[43px]" />
          </Form.Item>
        </div>
        <div className="countryCodeInModal">
          <h2>Phone</h2>
          <Form.Item
            name={"phone"}
            className="mt-[10px]"
            rules={[
              {
                required: true,
                message: "Please enter your phone no",
              },
            ]}
          >
            <PhoneInput
              name="phone"
              international
              countryCallingCodeEditable={false}
              defaultCountry="PK"
              className=" text-[#667085] p-[10px] pr-[0px] pb-[10px] pl-[0px] rounded-8 h-[48px]"
            />
          </Form.Item>
        </div>
        <div>
          <h2>
            Subject <span className="text-red-700 ">*</span>
          </h2>
          <Form.Item
            name={"subject"}
            className="mt-[10px]"
            rules={[
              {
                required: true,
                message: "Please enter your subject",
              },
            ]}
          >
            <Input className="w-full h-[43px]" />
          </Form.Item>
        </div>
        <div>
          <h2>
            Description <span className="text-red-700 ">*</span>
          </h2>
          <Form.Item
            name={"description"}
            className="mt-[10px]"
            rules={[
              {
                required: true,
                message: "Please enter your Description",
              },
            ]}
          >
            <TextArea
              className="rounded-[8px]"
              autoSize={{ minRows: 3, maxRows: 5 }}
              style={{ padding: "10px, 14px, 10px, 14px" }}
            />
          </Form.Item>
        </div>
      </Col>
    </Row>
  );
};

export default ConfirmationStep;
