import { Button, Col, Drawer, Form, Row, Select } from "antd";
import { IoMdClose } from "react-icons/io";
import TextInput from "../../../../../helpers/inputs/TextInput";
import {
  getAllCompanyDepartmentApi,
  getAllCompanyUserApi,
  getPayrollByEmployeeIdApi,
  updateUserPayrollApi,
} from "../../../../../redux/api/SalaryManagement/SalaryDetails/index";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import { useEffect, useState } from "react";
const { Option } = Select;

type Props = {
  data: any;
  onClose: () => void;
};

export const UpdateSalaryDrawer: React.FC<Props> = ({
  data,
  onClose,
}: Props) => {
  const [departmentId, setDepartmentId] = useState<any>();
  const dispatch: AppDispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    const body = {
      deductionAmount: Number(values?.deductionAmount),
      companyUserId: Number(values?.companyUserId),
      paidAmount: Number(values?.paidAmount),
      workingHours: Number(values?.workingHours),
      totalHours: Number(values?.totalHours),
      bonusAmount: Number(values?.bonusAmount),
    };
    updateUserPayrollApi(dispatch, body, data?.id, onSuccess);
  };

  useEffect(() => {
    if (departmentId) {
      getAllCompanyUserApi(dispatch, departmentId);
      form.setFieldValue("companyUserId", "");
    }
  }, [departmentId]);
  useEffect(() => {
    getAllCompanyDepartmentApi(dispatch);
  }, []);
  function onSuccess() {
    onClose();
  }
  const employeeIdHandler = (employeeId: any) => {
    let dt = new Date().toLocaleDateString();
    getPayrollByEmployeeIdApi(dispatch, employeeId, departmentId, dt);
  };
  useEffect(() => {
    form.setFieldsValue(data);
  }, [data]);
  return (
    <Drawer
      title={<h2 className="text-[1.25rem] font-bold">Update Salary</h2>}
      placement="right"
      width={400}
      closable={false}
      onClose={onClose}
      styles={{
        body: {
          padding: 0,
        },
      }}
      open={data ? true : false}
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
        name="addSalary"
        form={form}
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <div>
          <label
            htmlFor="paidAmount"
            className="text-[.975rem] font-medium text-[#667085] mb-2"
          >
            Amount Payable
          </label>
          <TextInput
            type="number"
            id="paidAmount"
            name="paidAmount"
            className="min-h-[48px]"
          />
        </div>
        <div>
          <label
            htmlFor="deductionAmount"
            className="text-[.975rem] font-medium text-[#667085] mb-2"
          >
            Deduction Amount
          </label>
          <TextInput
            type="number"
            id="deductionAmount"
            name="deductionAmount"
            className="min-h-[48px]"
          />
        </div>
        <div>
          <label
            htmlFor="bonusAmount"
            className="text-[.975rem] font-medium text-[#667085] mb-2"
          >
            Bonus Amount
          </label>
          <Form.Item name="bonusAmount">
            <TextInput
              type="number"
              id="bonusAmount"
              className="min-h-[48px]"
            />
          </Form.Item>
        </div>
        <div>
          <Row gutter={16}>
            <Col xs={12} md={12}>
              <label
                htmlFor="totalHours"
                className="text-[.975rem] font-medium text-[#667085] mb-2"
              >
                Total Hours
              </label>
              <TextInput
                type="number"
                rules={[
                  {
                    required: true,
                    message: "Please input your Total Hours!",
                  },
                ]}
                name="totalHours"
                id="totalHours"
                className="min-h-[48px]"
              />
            </Col>
            <Col xs={12} md={12}>
              <label
                htmlFor="workingHours"
                className="text-[.975rem] font-medium text-[#667085] mb-2"
              >
                Working Hours
              </label>
              <TextInput
                type="number"
                name="workingHours"
                id="workingHours"
                className="min-h-[48px]"
              />
            </Col>
          </Row>
        </div>

        <div className="flex justify-between">
          <Button
            className="h-[42px]  rounded-full font-medium text-[.975rem] px-[3.75rem]"
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            htmlType="submit"
            className="h-[42px] dark:bg-dark-primary bg-light-primary rounded-full font-medium text-[.975rem] text-white px-[16px]"
          >
            Update Salary
          </Button>
        </div>
      </Form>
    </Drawer>
  );
};
