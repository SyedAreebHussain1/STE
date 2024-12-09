import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Drawer,
  Form,
  Row,
  Select,
  Space,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import TextInput from "../../../helpers/inputs/TextInput";
import PhoneInput from "react-phone-number-input";
import { useForm } from "antd/es/form/Form";
import { getFromStorage } from "../../../utils/storage";
import {
  createStaffApi,
  getonlyStaffManagerApi,
} from "../../../redux/api/StaffManagement";
import { useDispatch, useSelector } from "react-redux";

type CountryInputProps = {
  name?: string | undefined | null;
  placeholder?: string | undefined | null;
  value?: any;
  setValue?: any;
};

export enum RoleType {
  agentStaff = "agentStaff",
  agentManager = "agentManager",
}

const CountryInput: React.FC<CountryInputProps> = ({
  name,
  placeholder,
  value,
  setValue,
}: CountryInputProps) => {
  return (
    <PhoneInput
      placeholder={placeholder}
      value={value}
      international
      onChange={setValue}
      country="PK"
      name={name}
      className="h-[48px] p-[9px] border border-[#D0D5DD] rounded-[8px] "
      defaultCountry="PK"
    />
  );
};

type AddNewStaffDrawerPorps = {
  open: boolean;
  setOpen: (e: boolean) => void | undefined | null;
};

let user = getFromStorage("user");
const AddNewStaffDrawer: React.FC<AddNewStaffDrawerPorps> = ({
  open,
  setOpen,
}: AddNewStaffDrawerPorps) => {
  const [sameAsPhone, setSameAsPhone] = useState(false);
  const [phone, setPhone] = useState<any>();
  const [whatsApp, setWhatsApp] = useState<any>();
  const [role, setRole] = useState<any>();
  const dispatch = useDispatch();

  const [form] = useForm();
  const getOnlyStaffManager = useSelector(
    (state: any) => state.getOnlyStaffManager
  );

  const onFinish = (value: any) => {
    if (!phone) {
      form.setFields([
        {
          name: "phoneNo",
          errors: ["Phone is Required"],
        },
      ]);
      return;
    } else if (!whatsApp) {
      form.setFields([
        {
          name: "whatsappNo",
          errors: ["Whatsapp is Required"],
        },
      ]);
      return;
    }
    const body: any = {
      fullName: value.name,
      email: value.email,
      phone: phone,
      whatsapp_no: whatsApp,
      cnic: value.cnic,
      pastExperience: value.pastExperience,
      yearOfExperience: value.yearOfExperience,
      roleTitle: value.roleType,
    };
    if (role == RoleType.agentStaff) {
      body.createdBy = value.managerId;
    } else {
      body.createdBy = user.userId;
    }
    createStaffApi(body, dispatch, onSuccess);
  };
  const onSuccess = () => {
    setOpen(false);
  };

  useEffect(() => {
    getonlyStaffManagerApi(dispatch, user.userId);
  }, [user.userId]);

  return (
    <>
      <Drawer
        title={
          <h3 className="text-[1.2rem] font-medium text-[rgb(64,64,64)]">
            Add New Staff
          </h3>
        }
        placement="right"
        width={440}
        open={open}
        closable={false}
        onClose={() => setOpen(false)}
        extra={
          <Space>
            <CloseOutlined onClick={() => setOpen(false)} />
          </Space>
        }
        footer={false}
      >
        <Form onFinish={onFinish} autoComplete="off" form={form}>
          <Row gutter={16}>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] font-medium text-[1rem]">
                  Name<span className="text-[red]">*</span>
                </p>
              </div>
              <TextInput
                rules={[{ required: true, message: "Please input your name!" }]}
                className="h-[48px] "
                placeholder="Name"
                name="name"
              />
            </Col>

            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] font-medium text-[1rem]">
                  Email<span className="text-[red]">*</span>
                </p>
              </div>
              <TextInput
                className="h-[48px] "
                placeholder="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              />
            </Col>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] font-medium text-[1rem]">
                  Phone no<span className="text-[red]">*</span>
                </p>
              </div>
              <Form.Item
                name="phoneNo"
                rules={[
                  { required: false, message: "Please input your phone!" },
                ]}
              >
                <CountryInput
                  name="phoneNo"
                  placeholder={"Phone no"}
                  value={phone}
                  setValue={(e: any) => {
                    setPhone(e);
                    if (sameAsPhone) {
                      form.setFieldValue("whatsappNo", e);
                      setWhatsApp(e);
                    }
                  }}
                />
              </Form.Item>
            </Col>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] font-medium text-[1rem]">
                  Whatsapp no <span className="text-[red]">*</span>
                </p>
              </div>

              <Form.Item
                name="whatsappNo"
                rules={[
                  { required: false, message: "Please input your WhatsApp!" },
                ]}
              >
                <div className="relative ">
                  <div
                    className={`absolute left-0 top-[0px] w-full h-[100%] rounded-lg border border-[#d9d9d9] z-20 bg-[#000000] opacity-[0.04] ${!sameAsPhone ? "hidden" : "block"
                      }`}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  ></div>
                  <CountryInput
                    name="whatsappNo"
                    placeholder={"Whatsapp no"}
                    value={whatsApp}
                    setValue={setWhatsApp}
                  />
                </div>
              </Form.Item>
            </Col>
            <div className="flex justify-end pb-2">
              <span>
                <Checkbox
                  value={sameAsPhone}
                  onChange={(e) => {
                    setSameAsPhone(e.target.checked);
                    setWhatsApp(phone);
                    form.setFieldValue("whatsappNo", phone);
                  }}
                >
                  Same as Phone
                </Checkbox>{" "}
              </span>
            </div>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] font-medium text-[1rem]">
                  Year of Experience<span className="text-[red]">*</span>
                </p>
              </div>
              <TextInput
                rules={[
                  { required: true, message: "Please input your Experience!" },
                ]}
                className="h-[48px] "
                placeholder="Year of Experience"
                name="yearOfExperience"
              />
            </Col>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] font-medium text-[1rem]">
                  Past Experience<span className="text-[red]">*</span>
                </p>
              </div>
              <TextInput
                rules={[
                  {
                    required: true,
                    message: "Please input your Past Experience!",
                  },
                ]}
                className="h-[48px] "
                placeholder="Past Experience"
                name="pastExperience"
              />
            </Col>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] font-medium text-[1rem]">
                  CNIC<span className="text-[red]">*</span>
                </p>
              </div>
              <TextInput
                rules={[{ required: true, message: "Please input your CNIC!" }]}
                className="h-[48px] "
                placeholder="CNIC"
                maxLength={13}
                name="cnic"
              />
            </Col>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] font-medium text-[1rem]">
                  Role<span className="text-[red]">*</span>
                </p>
              </div>
              <Form.Item
                name="roleType"
                rules={[{ required: true, message: "Please Select Role!" }]}
              >
                <Select
                  className="h-[48px] w-full"
                  placeholder="Select"
                  onChange={(e: any) => setRole(e)}
                  options={[
                    {
                      label: "Manager",
                      value: RoleType.agentManager,
                    },
                    {
                      label: "Staff",
                      value: RoleType.agentStaff,
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            {role == RoleType.agentStaff && (
              <Col sm={24} xs={24} lg={24} md={24}>
                <div className="mt-1 mb-1">
                  <p className="text-[#292D35] font-medium text-[1rem]">
                    Manager<span className="text-[red]">*</span>
                  </p>
                </div>

                <Form.Item
                  name="managerId"
                  rules={[
                    { required: true, message: "Please Select Manager!" },
                  ]}
                >
                  <Select
                    className="h-[48px] w-full"
                    placeholder="Select"
                    options={[
                      { label: "No Team", value: user.userId },
                      ...getOnlyStaffManager?.data.map((val: any) => ({
                        label: val?.profile?.fullName,
                        value: val.id,
                      })),
                    ]}
                  />
                </Form.Item>
              </Col>
            )}
            <Divider />
            <div className="flex justify-end w-[100%]">
              <Button
                htmlType="submit"
                type="primary"
                className="bg-primary text-[#fff] border-none h-[53px]  w-full text-[1.2rem] font-semibold"
              >
                Add Staff
              </Button>
            </div>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default AddNewStaffDrawer;
