import { CloseOutlined } from "@ant-design/icons";
import {
  Col,
  DatePicker,
  Drawer,
  Form,
  Row,
  Select,
  Space
} from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
import SelectFieldComponent from "../../../../../helpers/inputs/SelectFieldComponent";
import TextInput from "../../../../../helpers/inputs/TextInput";
import {
  getCompanyUsersApi,
  updateCompanyLeavePolicyApi,
} from "../../../../../redux/api/TimeOffAndHoliday/TimeOfPolicies";
import { RootState } from "../../../../../redux/store";

type EditTimeOffPolicyDrawerProps = {
  open?: boolean;
  setOpen?: any;
  updateData: any;
};

enum CompensationTypeEnum {
  Paid = "Paid",
  Unpaid = "Unpaid",
}

enum PolicyTypeEnum {
  General = "General",
  Specific = "Sepicfic",
}

enum ScheduleOfAccuralEnum {
  None = "None",
  Annually = "Annually",
}

export enum AccuralDateTypeEnum {
  None = "None",
  Custom = "Custom",
  JoinedDate = "JoinedDate",
}
const AddTimeOffPolicyDrawer: React.FC<EditTimeOffPolicyDrawerProps> = ({
  open,
  setOpen,
  updateData,
}: EditTimeOffPolicyDrawerProps) => {
  const dispatch = useDispatch();
  const [activeCompensation, setActiveCompensation] = useState<number>(0);
  const [activeUnits, setActiveUnits] = useState<number>(0);
  const [form] = Form.useForm();
  const policyType = Form.useWatch("policyType", form);
  const accuralDateType = Form.useWatch("accuralDateType", form);
  const getCompanyUsers = useSelector(
    (state: RootState) => state.getCompanyUsers
  );
  const updateCompanyLeavePolicy = useSelector(
    (state: RootState) => state.updateCompanyLeavePolicy
  );
  function handleTabsState(type: string, value: number) {
    if (type === "compensation") {
      setActiveCompensation(value);
    } else {
      setActiveUnits(value);
    }
  }

  function onFinish(values: any) {
    const body: any = {
      title: values.title,
      scheduleOfAccural: values.scheduleOfAccural,
      accuralDateType: values.accuralDateType,
      policyType: values.policyType,
      companyUserIds:
        values.policyType === PolicyTypeEnum.General
          ? []
          : values.companyUserIds,
      accure: values.accure,
      waitDate:
        values.accuralDateType === AccuralDateTypeEnum.Custom
          ? values.waitDate
          : null,
    };
    updateCompanyLeavePolicyApi(
      dispatch,
      body,
      onSuccess,
      updateData.leavePoliciesId
    );
  }
  function onSuccess() {
    setOpen(false);
  }

  useEffect(() => {
    form.setFieldValue("title", updateData?.companyLeavePolicies?.title);
    form.setFieldValue(
      "policyType",
      updateData?.companyLeavePolicies?.policyType
    );
    setActiveCompensation(
      updateData?.companyLeavePolicies?.compensationType ===
        CompensationTypeEnum.Paid
        ? 0
        : 1
    );
    form.setFieldValue(
      "scheduleOfAccural",
      updateData?.companyLeavePolicies?.scheduleOfAccural
    );
    form.setFieldValue(
      "accuralDateType",
      updateData?.companyLeavePolicies?.accuralDateType
    );

    updateData?.companyLeavePolicies?.waitDate &&
      form.setFieldValue(
        "waitDate",
        dayjs(updateData?.companyLeavePolicies?.waitDate)
      );

    form.setFieldValue("accure", updateData?.accure);
    form.setFieldValue("leave", updateData?.isLeaveBalancesForNext);
  }, []);

  return (
    <>
      <Drawer
        title={
          <span className="text-[1.25rem]  font-bold">
            Update Time Off Policy
          </span>
        }
        closable={false}
        placement="right"
        width={448}
        onClose={() => setOpen(false)}
        open={open}
        className="bg-[#fff] h-[100vh]"
        extra={
          <Space>
            <CloseOutlined onClick={() => setOpen(false)} />
          </Space>
        }
      >
        <Form
          wrapperCol={{ span: 24 }}
          layout="vertical"
          onFinish={onFinish}
          form={form}
          className="h-full"
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex-1">
              <Row gutter={10}>
                <Col xs={24} lg={24} sm={24} md={24}>
                  <Form.Item
                    name="policyType"
                    rules={[{ required: true }]}
                    label={
                      <span className=" text-[rgb(0,0,0)] text-[.875rem] font-normal dark-input-label">
                        Policy Type
                      </span>
                    }
                  >
                    <Select
                      placeholder="Policy Type"
                      className="h-[48px] w-full mt-[5px]"
                    >
                      <Select.Option value={PolicyTypeEnum.General}>
                        {PolicyTypeEnum.General}
                      </Select.Option>
                      <Select.Option value={PolicyTypeEnum.Specific}>
                      Specific
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <TextInput
                    className="h-[48px] w-full dark-input"
                    placeholder="Name"
                    name="title"
                    rules={[{ required: true }]}
                    label={
                      <span className="text-[rgb(0,0,0)] text-[.875rem] font-normal  mb-[5px] dark-input-label">
                        Name
                      </span>
                    }
                  />
                  {policyType === PolicyTypeEnum.Specific && (
                    <>
                      <span className=" text-[rgb(0,0,0)] text-[.875rem] font-normal dark-input-label">
                        Add Member
                      </span>
                      <SelectFieldComponent
                        name="companyUserIds"
                        apiwithoutId={getCompanyUsersApi}
                        loading={getCompanyUsers.loading}
                        labelCustom={(val: any) =>
                          val?.companyUserProfile?.name
                        }
                        multiple={true}
                      />
                    </>
                  )}

                  <div className="mt-4">
                    <Form.Item
                      name="scheduleOfAccural"
                      rules={[{ required: true }]}
                      label={
                        <span className=" text-[rgb(0,0,0)] text-[.875rem] font-normal dark-input-label">
                          Schedule of Accural
                        </span>
                      }
                    >
                      <Select
                        placeholder="Schedule of Accural"
                        className="h-[48px] w-full mt-[5px]"
                      >
                        <Select.Option value={ScheduleOfAccuralEnum.Annually}>
                          {ScheduleOfAccuralEnum.Annually}
                        </Select.Option>
                        <Select.Option value={ScheduleOfAccuralEnum.None}>
                          {ScheduleOfAccuralEnum.None}
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="mt-4">
                    <Form.Item
                      name="accuralDateType"
                      rules={[{ required: true }]}
                      label={
                        <span className=" text-[rgb(0,0,0)] text-[.875rem] font-normal dark-input-label">
                          Accural Date Type
                        </span>
                      }
                    >
                      <Select
                        placeholder="Accural Date Type"
                        className="h-[48px] w-full mt-[5px]"
                      >
                        <Select.Option value={AccuralDateTypeEnum.Custom}>
                          {AccuralDateTypeEnum.Custom}
                        </Select.Option>
                        <Select.Option value={AccuralDateTypeEnum.JoinedDate}>
                          {AccuralDateTypeEnum.JoinedDate}
                        </Select.Option>
                        <Select.Option value={AccuralDateTypeEnum.None}>
                          {AccuralDateTypeEnum.None}
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                  {accuralDateType === AccuralDateTypeEnum.Custom && (
                    <div className="mt-4">
                      <Form.Item
                        name="waitDate"
                        rules={[{ required: true }]}
                        label={
                          <span className=" text-[rgb(0,0,0)] text-[.875rem] font-normal dark-input-label">
                            Wait Date
                          </span>
                        }
                      >
                        <DatePicker
                          className="h-[48px] w-full mt-[5px] dark-input"
                          placeholder="Wait Date"
                        />
                      </Form.Item>
                    </div>
                  )}

                  <Col lg={24} sm={24} md={24}>
                    <Row gutter={16} className="flex items-center">
                      <Col lg={12} sm={24} md={24}>
                        <div className="">
                          <h4 className="mt-[-5px] text-[rgb(0,0,0)] text-[.875rem] font-normal hidden md:flex dark-input-label">
                            <span className="text-red mr-1 text-lg">*</span>{" "}
                            Number of Leaves
                          </h4>{" "}
                          <div className="flex gap-2 mt-3">
                            <TextInput
                              className="w-full md:w-[120px] h-[48px] dark-input"
                              placeholder="leaves"
                              name="accure"
                              value={"0"}
                              rules={[{ required: true }]}
                              size="large"
                              isNumber
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Col>
              </Row>
            </div>
            <div className="flex justify-end  gap-3 w-full">
              <RoundedButton
                onClick={() => setOpen(false)}
                title={"Cancel"}
                className="dark:bg-dark-primary dark:text-white w-full"
                htmlType="button"
              />

              <RoundedButton
                loading={updateCompanyLeavePolicy.loading}
                title={"Save"}
                className="dark:bg-white dark:text-dark-primary w-full  bg-light-primary text-white"
                htmlType="submit"
              />
            </div>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default AddTimeOffPolicyDrawer;
