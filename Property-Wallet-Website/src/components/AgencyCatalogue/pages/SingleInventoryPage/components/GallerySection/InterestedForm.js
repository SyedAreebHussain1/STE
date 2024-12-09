import React, { useEffect } from "react";
import { Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { iamInterestedApi } from "../../../../redux/api/Inventories";
import { setChatData } from "../../../../redux/slice/Chat/chatSlice";
import { getFromStorage, setInStorage } from "../../../../utils/storage";
import Button from "../../../../components/Buttons/Button";
import PhoneInput from "react-phone-number-input";

const { TextArea } = Input;

// const validatePhoneNumber = (_, value) => {
//   const phoneNumberRegex = /^\92\d{10}$/;

//   if (value && !phoneNumberRegex.test(value)) {
//     return Promise.reject(new Error("Please enter a valid phone number."));
//   }

//   return Promise.resolve();
// };

const InterestedForm = ({ data, toggle }) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  let localFormData = getFromStorage("iaminterestedform");
  const iamInterested = useSelector((state) => state.iamInterested);
  function onSuccess() {
    form.resetFields();
  }
  function onFinish(values) {
    if (values.email) {
      iamInterestedApi(
        dispatch,
        {
          ...values,
          phone: values?.phone,
          inventoryId: data?.data?.inventory?.[0]?.id,
          leadSource: "digital catalogue",
        },
        data?.data?.profile?.userId,
        onSuccess
      );
    } else {
      iamInterestedApi(
        dispatch,
        {
          name: values.name,
          location: values.location,
          description: values?.description,
          phone: values?.phone,
          inventoryId: data?.data?.inventory?.[0]?.id,
          leadSource: "digital catalogue",
        },
        data?.data?.profile?.userId,
        onSuccess
      );
    }
    setInStorage("iaminterestedform", values);
  }

  useEffect(() => {
    if (localFormData) {
      const newlocalFormData = {
        phone: localFormData.phone,
        email: localFormData.email,
        name: localFormData.name,
      };
      form.setFieldsValue(newlocalFormData);
    }
  }, [localFormData]);

  return (
    <div className=" w-full p-[18px]  bg-[#DEE0E3] rounded-lg">
      <div>
        <div className="flex gap-[10px]">
          <div
            className=" rounded-full w-[58px] h-[58px] overflow-hidden bg-center bg-cover"
            style={{
              backgroundImage: `url(${data?.data?.profile?.profile_picture_url})`,
            }}
          />
          <div>
            <div className="w-[226px]">
              <h4 className="text-[#344054] font-bold text-[1rem] leading-[27.68px] ">
                {data?.data?.profile?.fullName || "-"},{" "}
                {data?.data?.profile?.city || "-"}
              </h4>
              <h4 className=" font-medium text-[1rem] text-[#667085] tracking-tight leading-[25.6px]">
                {data?.data?.profile?.yearOfExperience
                  ? `${data?.data?.profile?.yearOfExperience} years experience`
                  : "-"}
              </h4>
            </div>
          </div>
        </div>
        <div>
          <Form
            name="interested"
            form={form}
            initialValues={{ remember: true }}
            style={{
              marginTop: -5,
            }}
            onFinish={onFinish}
          >
            <Row gutter={16}>
              <Col sm={24} xs={24} lg={12} className="mt-[18px]">
                <h2 className=" text-[#667085] font-medium text-[1rem]">
                  Name <span className="text-red-700 ">*</span>
                </h2>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your name",
                    },
                  ]}
                >
                  <Input
                    placeholder="Ali"
                    className="bg-[#FFFFFF]  p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                  />
                </Form.Item>
              </Col>
              <Col sm={24} xs={24} lg={12} className="mt-[0] md:mt-[18px]">
                <h2 className=" text-[#667085] font-medium text-[1rem]">
                  Email <span>(Optional)</span>
                </h2>
                <Form.Item name="email">
                  <Input
                    placeholder="ali@gmail.com"
                    className="bg-[#FFFFFF]  p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                  />
                </Form.Item>
              </Col>
              <Col sm={24} xs={24} lg={12} className="countryCodeInModal">
                <h2 className=" text-[#667085] font-medium text-[1rem]">
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
                    className="select-none  p-[10px] pr-[0px] pb-[10px] pl-[0px] rounded-8 h-[48px]"
                  />
                </Form.Item>
              </Col>
              <Col sm={24} xs={24} lg={12}>
                <h2 className=" text-[#667085] font-medium text-[1rem] mt-[0px] !md:mt-[2px]">
                  Preferred Area <span className="text-red-700 ">*</span>
                </h2>
                <Form.Item
                  name="location"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your preferred area",
                    },
                  ]}
                >
                  <Input
                    placeholder="Karachi"
                    className="bg-[#FFFFFF]  p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                  />
                </Form.Item>
              </Col>

              <Col sm={24} xs={24} lg={24}>
                <h2 className="  font-medium text-[1rem]">
                  Comment <span className="text-red-700 ">*</span>
                </h2>
                <Form.Item
                  name="description"
                  rules={[
                    { required: true, message: "Please enter your comment" },
                  ]}
                >
                  <TextArea
                    placeholder="Comment"
                    style={{
                      height: 145,
                      resize: "none",
                    }}
                    className="text-[#667085] bg-[#FFFFFF] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8"
                  />
                </Form.Item>
              </Col>
              <Col sm={24} xs={24} lg={24} className="mt-[]">
                <Button
                  label={"I am interested"}
                  variant={"filled-inverse"}
                  htmlType="submit"
                  className={`px-[6px] py-[8px] !text-[0.9rem] rounded-[10px] transition w-full`}
                  loading={iamInterested.loading}
                />
              </Col>
              <Col sm={24} xs={24} lg={24} className="md:mt-[16px] mt-[8px]">
                <div className="flex flex-col md:flex-row justify-around gap-2">
                  <Button
                    variant={"outlined"}
                    label={"Book Appointment"}
                    onClick={(e) => {
                      e.preventDefault();
                      toggle();
                    }}
                    className={`w-full px-[6px] py-[8px] border-[1px] border-[#C7C1C1] !text-[0.9rem] text-[#344054]`}
                  />

                  <Button
                    variant={"outlined"}
                    label={"Live Chat"}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        setChatData({
                          image:
                            data?.data?.profile?.profile_picture_url ||
                            "https://placehold.co /107x107",
                          name: data?.data?.profile?.fullName,
                          id: data?.data?.profile?.userId,
                          by: "click",
                        })
                      );
                    }}
                    className={`w-full px-[6px] py-[8px] border-[1px] border-[#C7C1C1] !text-[0.9rem] text-[#344054]`}
                  />
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default InterestedForm;
