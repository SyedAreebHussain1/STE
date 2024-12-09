import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Form, Input, Row, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import Button from "../Buttons/Button";
import PhoneInput from "react-phone-number-input";
import { addLeadFormApi } from "../../redux/api/Agency";

const PopupForm = (props) => {
  const getAgencyDetails = useSelector((state) => state.getAgencyDetails);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [form] = useForm();
  const dispatch = useDispatch();
  const addLeadForm = useSelector((state) => state.addLeadForm);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleShow();
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function onSuccess() {
    handleClose();
  }
  function onFinish(e) {
    const body = {
      ...e,
      ownerId: getAgencyDetails?.data?.data?.createdBy,
    };
    addLeadFormApi(dispatch, body, onSuccess);
  }
  return (
    <div className="">
      <Modal
        title={
          <h3 className="text-[18px] font-semibold">
            Tell us your Requirements
          </h3>
        }
        open={show}
        onCancel={handleClose}
        footer={null}
        centered={true}
        width={719}
      >
        <Form
          name="leave_review"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Row gutter={16} className="agency-catalogue">
            <Col sm={24} xs={24} lg={12} className="mt-[0px] !md:mt-[5px]">
              <h2 className="mb-[0px] !md:mb-[5px] text-[#667085] font-medium text-[1rem]">
                Name <span className="text-red-700 ">*</span>
              </h2>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input
                  name="name"
                  autoComplete="off"
                  placeholder="Name"
                  className=" text-[#000000] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                />
              </Form.Item>
            </Col>
            <Col sm={24} xs={24} lg={12} className="!mt-[0px] !md:mt-[5px]">
              <h2 className="mb-[0px] !md:mb-[5px] text-[#667085] font-medium text-[1rem]">
                Email <span className="text-red-700 ">*</span>
              </h2>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please enter your Email" }]}
              >
                <Input
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  className=" text-[#000000] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                />
              </Form.Item>
            </Col>
            <Col sm={24} xs={24} lg={12} className="mt-[0px] !md:mt-[5px]">
              <h2 className="mb-[0px] !md:mb-[5px] text-[#667085] font-medium text-[1rem]">
                Prefered Area <span>(Optional)</span>
              </h2>
              <Form.Item name="preferedArea">
                <Input
                  name="preferedArea"
                  autoComplete="off"
                  placeholder="Prefered Area"
                  className="bg-[#FFFFFF] text-[#667085] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                />
              </Form.Item>
            </Col>
            <Col
              sm={24}
              xs={24}
              lg={12}
              className=" countryCodeInModal !mt-[0px] !md:mt-[5px]"
            >
              <h2 className="mb-[0px] !md:mb-[5px] text-[#667085] font-medium text-[1rem]">
                Phone no <span className="text-red-700 ">*</span>
              </h2>
              <Form.Item
                name="phone"
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
                  className="bg-[] text-[#000000] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                />
              </Form.Item>
            </Col>
            <Col sm={24} xs={24} lg={24} className="!mt-[0px] !md:mt-[5px]">
              <h2 className="mb-[0px] !md:mb-[5px] text-[#667085] font-medium text-[1rem]">
                Description <span>(Optional)</span>
              </h2>
              <Form.Item name="description">
                <TextArea
                  placeholder="Description"
                  name="description"
                  autoComplete="off"
                  style={{
                    height: windowWidth > 769 ? 188 : 140,
                    resize: "none",
                  }}
                  className="text-[#000000] bg-[] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8"
                />
              </Form.Item>
            </Col>
          </Row>
          <div className="flex justify-end !mt-[5px] !md:mt-[55px]">
            <Button
              className="text-base px-3 py-3"
              htmltype="submit"
              variant={"filled-inverse"}
              label={"Submit"}
              loading={addLeadForm?.loading}
            />
          </div>
        </Form>
      </Modal>
    </div>
  );
};
export default PopupForm;
