import React, { useEffect, useState } from "react";
import { Col, Dropdown, Form, Input, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { iamInterestedPWApi } from "../../../../redux/api/Inventories";
import { setChatData } from "../../../../redux/slice/Chat/chatSlice";
import { getFromStorage, setInStorage } from "../../../../utils/storage";
import Button from "../../../../components/Buttons/Button";
import PhoneInput from "react-phone-number-input";

const { TextArea } = Input;

const PwInterestedForm = ({ data }) => {
  const iamInterested = useSelector((state) => state.iamInterested);
  const [form] = useForm();
  const inventoryId = Form.useWatch("inventoryId", form);
  const dispatch = useDispatch();
  let localFormData = getFromStorage("iaminterestedformPw");
  const getAgencyDetails = useSelector((state) => state.getAgencyDetails);
  const items = () => {
    return data?.data?.propertyWalletInventory
      ? data?.data?.propertyWalletInventory?.map((item) => {
          return {
            value: item.id,
            label: item.landSize,
          };
        })
      : [];
  };
  const itemsPlotNo = (invenId) => {
    const filteredInventory = data?.data?.propertyWalletInventory?.filter(
      (item) => item.id === invenId
    );
    if (filteredInventory?.length > 0) {
      return filteredInventory[0]?.propertyWalletInventoryPlot?.map((item) => {
        return {
          value: item?.id,
          label: item?.plotNo,
        };
      });
    } else {
      return [];
    }
  };

  function onSuccess(data) {
    const newData = {
      phone: data.phone,
      email: data.email,
      name: data.name,
    };
    setInStorage("iaminterestedformPw", newData);
    form.resetFields();
  }
  function onFinish(values) {
    if (values.email) {
      iamInterestedPWApi(
        dispatch,
        {
          ...values,
          phone: values?.phone,
          propertyWalletInventoryPlotId: values?.propertyWalletInventoryPlotId,
          leadSource: "digital catalogue",
          userId: getAgencyDetails?.data?.data?.createdBy,
        },
        onSuccess
      );
    } else {
      iamInterestedPWApi(
        dispatch,
        {
          location: values.location,
          name: values.name,
          description: values.description,
          phone: values?.phone,
          propertyWalletInventoryPlotId: values?.propertyWalletInventoryPlotId,
          leadSource: "digital catalogue",
          userId: getAgencyDetails?.data?.data?.createdBy,
        },
        onSuccess
      );
    }
    delete values.inventoryId;
  }
  useEffect(() => {
    if (localFormData && !inventoryId) {
      form.setFieldsValue(localFormData);
    }
  }, [localFormData]);
  return (
    <div className="w-full p-[18px]  bg-[#DEE0E3] rounded-lg">
      <div>
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
                    className="bg-[#FFFFFF] text-[#667085] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                  />
                </Form.Item>
              </Col>
              <Col sm={24} xs={24} lg={12}>
                <h2 className=" text-[#667085] font-medium text-[1rem] mt-[0] md:mt-[18px]">
                  Email <span>(Optional)</span>
                </h2>
                <Form.Item name="email">
                  <Input
                    placeholder="ali@gmail.com"
                    className="bg-[#FFFFFF] text-[#667085] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
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
                    className=" text-[#667085] p-[10px] pr-[0px] pb-[10px] pl-[0px] rounded-8 h-[48px]"
                  />
                </Form.Item>
              </Col>
              <Col
                sm={24}
                xs={24}
                lg={12}
                className="countryCodeInModal mt-[1px]"
              >
                <h2 className=" text-[#667085] font-medium text-[1rem]">
                  Select Inventory <span className="text-red-700 ">*</span>
                </h2>
                <Form.Item
                  name="inventoryId"
                  rules={[
                    {
                      required: true,
                      message: "Please select inventory",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select"
                    className=" rounded-xl h-[44px] "
                    // allowClear
                    options={data?.data?.propertyWalletInventory.map((val) => ({
                      label: val?.landSize,
                      value: val?.id,
                    }))}
                  />
                </Form.Item>
              </Col>
              {inventoryId && (
                <Col sm={24} xs={24} lg={12} className="countryCodeInModal">
                  <h2 className=" text-[#667085] font-medium text-[1rem]">
                    Select Plot
                  </h2>
                  <Form.Item
                    name="propertyWalletInventoryPlotId"
                    rules={[
                      {
                        required: true,
                        message: "Please Select Inventory",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select"
                      className=" rounded-xl h-[44px] "
                      // allowClear
                      options={itemsPlotNo(inventoryId)}
                    />
                  </Form.Item>
                </Col>
              )}

              <Col sm={24} xs={24} lg={12}>
                <h2 className=" text-[#667085] font-medium text-[1rem]">
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
                    className="bg-[#FFFFFF] text-[#667085] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                  />
                </Form.Item>
              </Col>

              <Col sm={24} xs={24} lg={24}>
                <h2 className=" text-[#667085] font-medium text-[1rem]">
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
                      height: 194,
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
                  className={`px-[8px] py-[10px] !text-[0.9rem] rounded-[10px] transition w-full`}
                  loading={iamInterested.loading}
                />
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PwInterestedForm;
