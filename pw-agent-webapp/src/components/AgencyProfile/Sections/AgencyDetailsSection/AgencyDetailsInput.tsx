import { Col, Row } from "antd";
import React from "react";
import TextInput from "../../../../helpers/inputs/TextInput";

type Props = {};

const AgencyDetailsInput = (props: Props) => {
  return (
    <div>
      <Row gutter={24}>
        <Col lg={8} xs={24}>
          <span className="text-[#292D35] font-medium text-base">
            Agency Name
          </span>
          <TextInput
            name="agencyName"
            className="h-[48px] mt-2"
            rules={[{ required: true, message: "Agency Name is Required" }]}
          />
        </Col>
        <Col lg={8} xs={24}>
          <span className="text-[#292D35] font-medium text-base">City</span>
          <TextInput
            name="city"
            className="h-[48px] mt-2"
            rules={[{ required: true, message: "City is Required" }]}
          />
        </Col>
        <Col lg={8} xs={24}>
          <span className="text-[#292D35] font-medium text-base">Address</span>
          <TextInput
            name="address"
            className="h-[48px] mt-2"
            rules={[{ required: true, message: "Address is Required" }]}
          />
        </Col>
        <Col lg={8} xs={24}>
          <span className="text-[#292D35] font-medium text-base">
            No of Staff
          </span>
          <TextInput
            name="noOfStaff"
            className="h-[48px] mt-2"
            rules={[{ required: true, message: "No of Staff is Required" }]}
          />
        </Col>
        <Col lg={8} xs={24}>
          <span className="text-[#292D35] font-medium text-base">
            No of Branches
          </span>
          <TextInput
            name="noOfBranches"
            className="h-[48px] mt-2"
            rules={[{ required: true, message: "No of Branches is Required" }]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AgencyDetailsInput;
