import React, { useEffect, useState } from "react";
import { Button, Col, Drawer, Form, Row, Space, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import TextInput from "../../../../../helpers/inputs/TextInput";
import PhoneInput from "react-phone-number-input";
import { AppDispatch } from "../../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updateLeadDataByIdApi } from "../../../../../redux/api/LeadManagement";
import { useParams } from "react-router-dom";
const { TextArea } = Input;
type CountryInputProps = {
  name: string | undefined | null;
  placeholder: string | undefined | null;
  phone: any;
  setPhone: any;
};
type FinishType = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  description?: string;
};
const CountryInput: React.FC<CountryInputProps> = ({
  name,
  placeholder,
  phone,
  setPhone,
}: CountryInputProps) => {
  return (
    <PhoneInput
      placeholder={placeholder}
      value={phone}
      onChange={setPhone}
      maxLength={12}
      country="PK"
      name={name}
      className="h-[48px] p-[9px] border border-[#D0D5DD] rounded-[8px] mb-5"
      defaultCountry="PK"
    />
  );
};

type UpdateLeadDrawerPorps = {
  toggle: boolean;
  setToggle: (e: boolean) => void | undefined | null;
  data: any;
};

const UpdateLeadDrawer: React.FC<UpdateLeadDrawerPorps> = ({
  toggle,
  setToggle,
  data,
}: UpdateLeadDrawerPorps) => {
  const [phone, setPhone] = useState<string>("");
  const [form] = Form.useForm();
  let { id } = useParams();
  const updateLeadDataById = useSelector(
    (state: any) => state.updateLeadDataById
  );
  const dispatch: AppDispatch = useDispatch();
  const initialValues = {
    name: data?.data?.client?.name,
    email: data?.data?.client?.email,
    phone: data?.data?.client?.phone,
    location: data?.data?.location,
    description: data?.data?.description,
  };
  function onFinish(value: FinishType) {
    const body = {
      ...value,
      tags: data?.data?.tags,
      phone: phone,
      leadSource: data?.data?.leadSource,
    };
    updateLeadDataByIdApi(dispatch, body, Number(id), onSuccess);
  }
  useEffect(() => {
    form.setFieldsValue(initialValues);
    setPhone(data?.data?.client?.phone);
  }, [data?.data]);
  function onSuccess() {
    setToggle(false);
    setPhone("");
    form.resetFields();
  }

  return (
    <>
      <Drawer
        title={
          <h3 className="text-[1.2rem] font-medium text-[#475467]">
            Update Lead
          </h3>
        }
        placement="right"
        width={500}
        open={toggle}
        closable={false}
        onClose={() => setToggle(false)}
        extra={
          <Space>
            <CloseOutlined onClick={() => setToggle(false)} />
          </Space>
        }
      >
        <Form
          onFinish={onFinish}
          name="updateLead"
          form={form}
          autoComplete="off"
          initialValues={{ remember: true }}
        >
          <Row gutter={16}>
            <Col sm={24} xs={24} lg={24} md={24}>
              <Row gutter={16}>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <p className="text-[.8125rem]  font-medium text-[#344054] ">
                    Lead Details
                  </p>
                  <div className=" mb-1 mt-2">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Customer Name
                    </p>
                  </div>
                  <TextInput
                    className="h-[44px] "
                    placeholder="Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                    name="name"
                  />
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Email Address
                    </p>
                  </div>
                  <TextInput
                    className="h-[44px] "
                    placeholder="Email"
                    name="email"
                  />
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Phone no
                    </p>
                  </div>
                  <CountryInput
                    name="phone"
                    placeholder={"Phone no"}
                    phone={phone}
                    setPhone={setPhone}
                  />
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Location
                    </p>
                  </div>
                  <TextInput
                    className="h-[44px] "
                    placeholder="location"
                    name="location"
                  />
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Description
                    </p>
                  </div>
                  <Form.Item name="description">
                    <TextArea
                      maxLength={100}
                      placeholder="Description"
                      style={{ height: 183, resize: "none" }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => setToggle(false)}
                className=" text-[#475467] border-none h-[48px] bg-transparent text-[1rem] font-semibold border"
              >
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                loading={updateLeadDataById.loading}
                className="bg-primary text-[#fff] border-none h-[48px]  text-[1rem] font-semibold"
              >
                Confirm Changes
              </Button>
            </div>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default UpdateLeadDrawer;
