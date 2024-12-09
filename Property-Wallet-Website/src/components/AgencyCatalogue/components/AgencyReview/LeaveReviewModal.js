import React, { useEffect, useState } from "react";
import { Col, Form, Input, Modal, Row, Space, Rate } from "antd";
import Button from "../Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
import { createReviewForAgencyApi } from "../../redux/api/Testinomials";
import { errorMessage } from "../../utils/message";
import { getFromStorage } from "../../utils/storage";
import PhoneInput from "react-phone-number-input";

const LeaveReviewModal = ({ visible, toggle }) => {
  const agencyReview = getFromStorage("agencyReview");
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [value, setValue] = useState(0);
  const createReviewForAgency = useSelector(
    (state) => state.createReviewForAgency
  );
  const params = useParams();
  const [form] = useForm();

  function onFinish(data) {
    if (!params?.id) {
      errorMessage("Agency Id not found");
    }
    if (value && params?.id) {
      const body = {
        agencyId: Number(params?.id),
        rateStar: value,
        ...data,
        phone: data?.phone,
      };
      createReviewForAgencyApi(dispatch, body, onSuccess);
    } else {
      errorMessage("Rating is required");
    }
  }
  function onSuccess(data) {
    let newData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
    };
    localStorage.setItem("agencyReview", JSON.stringify(newData));
    toggle();
    form.resetFields();
  }

  useEffect(() => {
    if (agencyReview) {
      form.setFieldsValue({
        name: agencyReview?.name,
        phone: agencyReview?.phone,
        email: agencyReview?.email,
      });
      setValue(0);
    }
  }, []);

  useEffect(() => {
    // Function to update window width in the state
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", updateWindowWidth);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Leave a Review</h3>}
      open={visible}
      onCancel={toggle}
      footer={null}
      centered={true}
      width={719}
    >
      <div className="agency-catalogue">
        <div>
          <Form
            name="leave_review"
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Row gutter={16}>
              <Col sm={24} xs={24} lg={12} className="mt-[0px] !md:mt-[5px]">
                <h2 className="mb-[0px] !md:mb-[5px] text-[#667085] font-medium text-[1rem]">
                  Name <span className="text-red-700 ">*</span>
                </h2>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input
                    name="name"
                    autoComplete="off"
                    placeholder="Ali"
                    className="bg-[#FFFFFF] text-[#667085] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                  />
                </Form.Item>
              </Col>
              <Col sm={24} xs={24} lg={12} className="!mt-[0px] !md:mt-[5px]">
                <h2 className="mb-[0px] !md:mb-[5px] text-[#667085] font-medium text-[1rem]">
                  Email <span>(Optional)</span>
                </h2>
                <Form.Item name="email">
                  <Input
                    name="email"
                    placeholder="ali@gmail.com"
                    autoComplete="off"
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
                    className="bg-[#FFFFFF] text-[#667085] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                  />
                </Form.Item>
              </Col>
              <Col sm={24} xs={24} lg={24} className="!mt-[0px] !md:mt-[5px]">
                <h2 className="mb-[0px] !md:mb-[5px] text-[#667085] font-medium text-[1rem]">
                  Comments <span className="text-red-700 ">*</span>
                </h2>
                <Form.Item
                  name="comment"
                  rules={[
                    { required: true, message: "Please enter your comment" },
                  ]}
                >
                  <TextArea
                    placeholder="Comment"
                    name="comment"
                    autoComplete="off"
                    style={{
                      height: windowWidth > 769 ? 188 : 140,
                      resize: "none",
                    }}
                    className="text-[#667085] bg-[#FFFFFF] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8"
                  />
                </Form.Item>
              </Col>
              <Col sm={24} xs={24} lg={24} className="!mt-[0px] !md:mt-[5px]">
                <h2 className="mb-[0px] !md:mb-[5px] text-[#667085] font-medium text-[1rem]">
                  Rate <span className="text-red-700 ">*</span>
                </h2>
                <Space>
                  <Rate value={value} onChange={setValue} />
                </Space>
              </Col>
            </Row>
            <div className="flex justify-end !mt-[5px] !md:mt-[55px]">
              <Button
                className="text-base px-3 py-3"
                htmltype="submit"
                variant={"filled-inverse"}
                label={"Submit"}
                loading={createReviewForAgency?.loading}
              />
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default LeaveReviewModal;
