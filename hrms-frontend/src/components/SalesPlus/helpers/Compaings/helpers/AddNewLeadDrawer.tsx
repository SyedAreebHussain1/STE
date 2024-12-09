import React from "react";
import { Button, Col, Divider, Drawer, Form, Row, Select, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import { createLeadsApi } from "../../../../../redux/api/SalesPlus/LeadDetails";
export enum RoleType {
  agentStaff = "agentStaff",
  agentManager = "agentManager",
}
type AddNewStaffDrawerPorps = {
  toggle: boolean;
  setToggle: (e: boolean) => void | undefined | null;
  campaignData: any;
};
const AddNewLeadDrawer: React.FC<AddNewStaffDrawerPorps> = ({
  toggle,
  setToggle,
  campaignData,
}: AddNewStaffDrawerPorps) => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const createLeads = useSelector((state: any) => state?.createLeads);
  const onFinish = (value: any) => {
    if (campaignData?.id) {
      const body: any = {
        ...value,
        tag: "Interested",
        campaignId: campaignData?.id,
        phone: "+" + value?.phone,
      };
      createLeadsApi(dispatch, body, onSuccess);
    }
  };
  const onSuccess = () => {
    setToggle(false);
  };

  return (
    <>
      <Drawer
        title={
          <h3 className="text-[1.2rem]  font-medium dark:bg-[#282828]   dark:text-white text-[rgb(64,64,64)]">
            Add New Lead
          </h3>
        }
        placement="right"
        width={440}
        open={toggle}
        closable={false}
        onClose={() => setToggle(false)}
        extra={
          <Space>
            <CloseOutlined onClick={() => setToggle(false)} />
          </Space>
        }
        footer={false}
      >
        <Form onFinish={onFinish} autoComplete="off" form={form}>
          <Row gutter={16}>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] dark-input-label font-medium text-[1rem]">
                  Campaign Name
                </p>
              </div>
              <TextInput
                className="h-[48px] dark-input "
                value={campaignData?.title}
                disabled={true}
              />
            </Col>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] dark-input-label font-medium text-[1rem]">
                  Name<span className="text-[red]">*</span>
                </p>
              </div>
              <TextInput
                rules={[{ required: true, message: "Please input your name!" }]}
                className="h-[48px] dark-input dark:bg-transparent "
                placeholder="Name"
                name="name"
              />
            </Col>

            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] dark-input-label font-medium text-[1rem]">
                  Email<span className="text-[red]">*</span>
                </p>
              </div>
              <TextInput
                className="h-[48px] dark:bg-transparent dark-input "
                placeholder="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              />
            </Col>

            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] dark-input-label font-medium text-[1rem]">
                  Phone<span className="text-[red]">*</span>
                </p>
              </div>
              <TextInput
                rules={[
                  { required: true, message: "Please input your Phone no!" },
                ]}
                className="h-[48px] dark:bg-transparen dark-input "
                placeholder="+92xxxxxxxxxx"
                type="number"
                maxLength={13}
                name="phone"
              />
            </Col>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] dark-input-label font-medium text-[1rem]">
                  Location<span className="text-[red]">*</span>
                </p>
              </div>
              <TextInput
                className="h-[48px] dark:bg-transparent dark-input "
                placeholder="Location"
                name="location"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              />
            </Col>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] dark-input-label font-medium text-[1rem]">
                  Lead Source<span className="text-[red]">*</span>
                </p>
              </div>
              <Form.Item
                name="leadSource"
                rules={[
                  { required: true, message: "Please Select Lead Source!" },
                ]}
              >
                <Select
                  className="h-[48px] w-full dark:bg-transparent dark-input"
                  placeholder="Select"
                  options={[
                    {
                      label: "Web",
                      value: "Web",
                    },
                    {
                      label: "App",
                      value: "App",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] dark-input-label font-medium text-[1rem]">
                  Status<span className="text-[red]">*</span>
                </p>
              </div>
              <Form.Item
                name="status"
                rules={[{ required: true, message: "Please Select Status!" }]}
              >
                <Select
                  className="h-[48px] w-full dark:bg-transparent dark-input-label"
                  placeholder="Select Status"
                  optionFilterProp="children"
                  options={[
                    {
                      value: "Interested",
                      label: "Interested",
                    },
                    {
                      value: "Pending",
                      label: "Pending",
                    },
                    {
                      value: "Inprogress",
                      label: "Inprogress",
                    },
                    {
                      value: "Completed",
                      label: "Completed",
                    },
                    {
                      value: "Top Priority",
                      label: "Top Priority",
                    },
                    {
                      value: "Appointment Aligned",
                      label: "Appointment Aligned",
                    },
                    {
                      value: "Untouched",
                      label: "Untouched",
                    },
                    {
                      value: "Not Interested",
                      label: "Not Interested",
                    },
                    {
                      value: "Not Connected",
                      label: "Not Connected",
                    },
                    {
                      value: "Wrong No",
                      label: "Wrong No",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] dark-input-label font-medium text-[1rem]">
                  Description<span className="text-[red]">*</span>
                </p>
              </div>
              <Form.Item
                name="description"
                rules={[
                  { required: true, message: "Please Enter Description!" },
                ]}
              >
                <TextArea rows={4} className="dark:bg-transparent dark-input" />
              </Form.Item>
            </Col>
            <Divider />
            <div className="flex justify-end w-[100%]">
              <Button
                htmlType="submit"
                type="primary"
                loading={createLeads?.loading}
                className="bg-light-primary text-[#fff] dark:bg-white dark:text-dark-primary  rounded-md border-none h-[53px]  w-full text-[1.2rem] font-semibold"
              >
                Add New Lead
              </Button>
            </div>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default AddNewLeadDrawer;
