import { Button, Col, DatePicker, Drawer, Form, Row, Select, Spin } from "antd";
import { IoMdClose } from "react-icons/io";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { getAllCompanyDepartmentApi } from "../../../../../redux/api/SalaryManagement/SalaryDetails/index";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import { useEffect, useState } from "react";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
import {
  createEvaluationForDepartmentApi,
  getDepartmentForEvaluationApi,
} from "../../../../../redux/api/Evolution";
const { Option } = Select;
interface Props {
  open: boolean;
  onClose: () => void;
};

export const CreateEvalutionDrawer: React.FC<Props> = ({
  open,
  onClose,
}: Props) => {
  const { getDepartmentForEvaluation, createEvaluationForDepartment } =
    useSelector((state: any) => state);
  const dispatch: AppDispatch = useDispatch();
  const [form] = Form.useForm();
  const getAllCompanyDepartment = useSelector(
    (state: any) => state?.getAllCompanyDepartment
  );
  const getAllCompanyUser = useSelector(
    (state: any) => state?.getAllCompanyUser
  );
  const onFinish = (values: any) => {
    createEvaluationForDepartmentApi(dispatch, values, onClose);
  };

  useEffect(() => {
    getDepartmentForEvaluationApi(dispatch);
  }, []);
  return (
    <Drawer
      title={
        <h2 className="text-[1.25rem] font-bold">Create New Evaluation</h2>
      }
      placement="right"
      width={400}
      closable={false}
      onClose={onClose}
      styles={{
        body: {
          padding: 0,
        },
      }}
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
        className="p-4"
        onFinish={onFinish}
        name="createEvaluation"
        form={form}
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <div>
          <label
            htmlFor="title"
            className="text-[.975rem] font-medium text-[#667085] dark-input-label "
          >
            Evaluation Title
          </label>
          <TextInput
            rules={[
              {
                required: true,
                message: "Please input your Evaluation!",
              },
            ]}
            onKeyDown={(event) => {
              if (/[0-9,.]/.test(event.key)) {
                event.preventDefault();
                return;
              }
            }}
            id="title"
            name="title"
            className="min-h-[48px] dark-input"
          />
        </div>
        <div>
          <label
            htmlFor="departmentId"
            className="text-[.975rem] font-medium text-[#667085] dark-input-label "
          >
            Department
          </label>
          <Form.Item
            name="departmentId"
            rules={[
              {
                required: true,
                message: "Please select your Department!",
              },
            ]}
          >
            <Select className="w-full min-h-[48px]" placeholder="Select">
              {getDepartmentForEvaluation?.data?.map((item: any, i: number) => {
                return (
                  <Option key={i} value={item?.id}>
                    {item?.title}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </div>
        <div className="flex justify-between gap-2 fixed bottom-1 right-1">
          <RoundedButton
            onClick={onClose}
            title={"Cancel"}
            className="dark:bg-dark-primary dark:text-white w-full"
          />
          <RoundedButton
            title={"Create Evaluation"}
            loading={createEvaluationForDepartment?.loading}
            className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white w-full"
            htmlType="submit"
          />
        </div>
      </Form>
    </Drawer>
  );
};
