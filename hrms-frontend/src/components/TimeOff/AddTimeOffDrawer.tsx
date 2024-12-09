import { Button, DatePicker, Drawer, Form, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import {
  addCompanyUserLeaveApi,
  getCUAssignLeavePoliciesApi,
} from "../../redux/api/TimeOff";
import { useDispatch, useSelector } from "react-redux";
import { getFromStorage } from "../../utils/storage";
import RoundedButton from "../../helpers/button/RoundedButton";
import moment from "moment";

type Props = {
  open: boolean;
  activeKey: string;
  onClose: () => void;
};

export default function AddTimeOffDrawer({ open, onClose, activeKey }: Props) {
  const dispatch = useDispatch();
  const user = getFromStorage("user");
  const [form] = Form.useForm();
  const getCUAssignLeavePolicies = useSelector(
    (state: any) => state?.getCUAssignLeavePolicies
  );
  const addCompanyUserLeave = useSelector(
    (state: any) => state?.addCompanyUserLeave
  );
  useEffect(() => {
    if (activeKey) {
      getCUAssignLeavePoliciesApi(dispatch, activeKey);
    }
  }, [activeKey, dispatch]);
  function onFinish(value: any) {
    const body = {
      companyUserId: activeKey,
      assignCUleavePoliciesId: value?.assignCUleavePoliciesId,
      leaveDays: [...value?.leaveDays],
      reason: value?.reason,
    };
    addCompanyUserLeaveApi(dispatch, body, onSuccess);
  }
  function onSuccess() {
    onClose();
  }
  return (
    <Drawer
      title={<h2 className="text-[1.25rem] font-bold ">Add Time Off</h2>}
      placement="right"
      width={400}
      closable={false}
      onClose={onClose}
      open={open}
      extra={
        <Button
          onClick={onClose}
          className="border-[0] text-[1rem] flex justify-center items-center"
        >
          <IoMdClose className="w-[30px] h-[30px]" />
        </Button>
      }
    >
      <Form
        onFinish={onFinish}
        name="timeOff"
        form={form}
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <h1 className="dark-input-label">CUAssign</h1>
        <div className="flex items-center justify-between w-[100%] h-[40px] mt-[10px]">
          <div className="w-[100%]">
            <Form.Item name="assignCUleavePoliciesId" rules={[
              {
                required: true,
                message: "Please Select a policy",
              },
            ]}>
              <Select
                className="w-[100%] h-[40px]"
                placeholder="Select a policy"
                options={getCUAssignLeavePolicies?.data?.data?.map(
                  (val: any) => {
                    return {
                      value: val?.id,
                      label: val?.companyLeavePolicies?.title,
                    };
                  }
                )}
              />
            </Form.Item>
          </div>
        </div>
        <div className="flex justify-between w-[100%] mt-[20px]">
          <div className="w-[100%]">
            <h2 className="pt-[5px] font-semibold dark-input-label">Days</h2>
            <Form.Item name="leaveDays" rules={[
              {
                required: true,
                message: "Please input your Leave Days!",
              },
            ]}>
              <DatePicker
                multiple
                maxTagCount="responsive"
                size="large"
                className="dark-input"
                disabledDate={(current) => {
                  return current && current > moment().endOf("day");
                }}
              />
            </Form.Item>
          </div>
        </div>
        <div className="flex  justify-between w-[100%] h-[40px] mt-[20px]">
          <div className="w-[100%]">
            <Form.Item name="reason" rules={[
              {
                required: true,
                message: "Please input your Reason!",
              },
            ]}>
              <TextArea
                className="w-[100%] h-[40px] dark-input"

                rows={4}
                placeholder="Add a reason or note (optional)"
              />
            </Form.Item>
          </div>
        </div>
        <div className="flex justify-end gap-3 absolute  bottom-6 w-[90%]">
          <RoundedButton
            onClick={onClose}
            title={"Cancel"}
            className="dark:bg-dark-primary dark:text-white w-full"
            sm
          />

          <RoundedButton
            title={"Save"}
            className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white w-full"
            htmlType="submit"
            loading={addCompanyUserLeave?.loading}
            sm
          />
        </div>
      </Form>
    </Drawer>
  );
}
