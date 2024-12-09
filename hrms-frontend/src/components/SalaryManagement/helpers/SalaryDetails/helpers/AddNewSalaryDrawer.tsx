import { Button, Col, DatePicker, Drawer, Form, Row, Select, Spin } from "antd";
import { IoMdClose } from "react-icons/io";
import TextInput from "../../../../../helpers/inputs/TextInput";
import {
  createUserPayrollApi,
  getAllCompanyDepartmentApi,
  getAllCompanyUserApi,
  getPayrollByEmployeeIdApi,
  payrollDetailsByUserIdApi,
} from "../../../../../redux/api/SalaryManagement/SalaryDetails/index";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import { useEffect, useState } from "react";
import { clearPayrollDetailsByUserId } from "../../../../../redux/slices/SalaryManagement/SalaryDetails/payrollDetailsByUserIdSlice";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
const { Option } = Select;
type Props = {
  open: boolean;
  onClose: () => void;
};

export const AddNewSalaryDrawer: React.FC<Props> = ({
  open,
  onClose,
}: Props) => {
  const [departmentId, setDepartmentId] = useState<any>();
  const [employeeId, setEmployeeId] = useState<any>("");
  const [date, setDate] = useState<any>("");
  const dispatch: AppDispatch = useDispatch();
  const [form] = Form.useForm();
  const getAllCompanyDepartment = useSelector(
    (state: any) => state?.getAllCompanyDepartment
  );
  const payrollDetailsByUserId = useSelector(
    (state: any) => state?.payrollDetailsByUserId
  );
  const getAllCompanyUser = useSelector(
    (state: any) => state?.getAllCompanyUser
  );
  const onFinish = (values: any) => {
    const body = {
      deductionAmount: Number(values?.deductionAmount),
      companyUserId: Number(values?.companyUserId),
      paidAmount: Number(values?.paidAmount),
      workingHours: Number(values?.workingHours),
      totalHours: Number(values?.totalHours),
      bonusAmount: Number(values?.bonusAmount),
      payrollMonth: date,
    };
    createUserPayrollApi(dispatch, body, onSuccess);
  };

  useEffect(() => {
    if (departmentId) {
      getAllCompanyUserApi(dispatch, departmentId);
    }
  }, [departmentId]);
  useEffect(() => {
    getAllCompanyDepartmentApi(dispatch);
  }, []);
  function onSuccess() {
    onClose();
    dispatch(clearPayrollDetailsByUserId());
  }

  useEffect(() => {
    if (employeeId && date) {
      payrollDetailsByUserIdApi(dispatch, employeeId, date);
    }
  }, [employeeId, date]);

  useEffect(() => {
    if (payrollDetailsByUserId?.data?.data) {
      form.setFields([
        {
          name: "totalHours",
          value: payrollDetailsByUserId?.data?.data?.totalHours,
        },
        {
          name: "workingHours",
          value: payrollDetailsByUserId?.data?.data?.workedHours,
        },
        {
          name: "paidAmount",
          value: payrollDetailsByUserId?.data?.data?.salaryPayable,
        },
        {
          name: "deductionAmount",
          value: payrollDetailsByUserId?.data?.data?.deductedAmount,
        },
      ]);
    }
  }, [payrollDetailsByUserId?.data?.data]);
  useEffect(() => {
    dispatch(clearPayrollDetailsByUserId());
  }, [open]);

  return (
    <Drawer
      title={<h2 className="text-[1.25rem] font-bold">Add Salary</h2>}
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
        name="addSalary"
        form={form}
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <div>
          <label
            htmlFor="department"
            className="text-[.975rem] font-medium text-[#667085] dark-input-label mb-2"
          >
            Department
          </label>
          <Form.Item
            name="department"
            rules={[
              {
                required: true,
                message: "Please input your Department!",
              },
            ]}
          >
            <Select
              className="w-full min-h-[48px]"
              placeholder="Select"
              onChange={(e) => setDepartmentId(e)}
            >
              {getAllCompanyDepartment?.data?.data?.items?.map(
                (item: any, i: number) => {
                  return (
                    <Option key={i} value={item?.id}>
                      {item?.title}
                    </Option>
                  );
                }
              )}
            </Select>
          </Form.Item>
        </div>
        <div>
          <label
            htmlFor="companyUserId"
            className="text-[.975rem] font-medium text-[#667085] dark-input-label mb-2"
          >
            Select Employee
          </label>
          <Form.Item
            name="companyUserId"
            rules={[
              {
                required: true,
                message: "Please input your Company User!",
              },
            ]}
          >
            <Select
              id="companyUserId"
              className="min-h-[48px]"
              disabled={!departmentId}
              onChange={(e) => setEmployeeId(e)}
            >
              {getAllCompanyUser?.data?.data?.items.map(
                (item: any, i: number) => {
                  return (
                    <Select.Option
                      key={i}
                      value={item?.companyUserProfile?.companyUserId}
                    >
                      {item?.companyUserProfile?.name}
                    </Select.Option>
                  );
                }
              )}
            </Select>
          </Form.Item>
        </div>
        <div className="w-full">
          <label
            htmlFor="companyUserId"
            className="text-[.975rem] font-medium text-[#667085] dark-input-label mb-2"
          >
            Date
          </label>
          <div className="flex gap-2 w-full">
            <Form.Item
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please input your date",
                },
              ]}
            >
              <DatePicker className="w-full" onChange={setDate} />
            </Form.Item>
          </div>
        </div>
        {!payrollDetailsByUserId?.loading ? (
          <>
            {payrollDetailsByUserId?.data?.data && (
              <div>
                <div>
                  <label
                    htmlFor="paidAmount"
                    className="text-[.975rem] font-medium text-[#667085] dark-input-label mb-2"
                  >
                    Amount Payable
                  </label>
                  <TextInput
                    type="number"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Amount Payable!",
                      },
                    ]}
                    id="paidAmount"
                    name="paidAmount"
                    className="min-h-[48px] dark-input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="deductionAmount"
                    className="text-[.975rem] font-medium text-[#667085] dark-input-label mb-2"
                  >
                    Deduction Amount
                  </label>
                  <TextInput
                    type="number"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Deduction Amount!",
                      },
                    ]}
                    id="deductionAmount"
                    name="deductionAmount"
                    className="min-h-[48px] dark-input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="bonusAmount"
                    className="text-[.975rem] font-medium text-[#667085] dark-input-label mb-2"
                  >
                    Bonus Amount
                  </label>
                  <TextInput
                    type="number"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Bonus Amount!",
                      },
                    ]}
                    id="bonusAmount"
                    name="bonusAmount"
                    className="min-h-[48px] dark-input"
                  />
                </div>
                <div>
                  <Row gutter={16}>
                    <Col xs={12} md={12}>
                      <label
                        htmlFor="totalHours"
                        className="text-[.975rem] font-medium text-[#667085] dark-input-label mb-2"
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
                        className="min-h-[48px] dark-input"
                      />
                    </Col>
                    <Col xs={12} md={12}>
                      <label
                        htmlFor="workingHours"
                        className="text-[.975rem] font-medium text-[#667085] dark-input-label mb-2"
                      >
                        Working Hours
                      </label>
                      <TextInput
                        type="number"
                        name="workingHours"
                        id="workingHours"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Working Hours!",
                          },
                        ]}
                        className="min-h-[48px] dark-input"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="flex justify-between gap-2">
                  <RoundedButton
                    onClick={onClose}
                    title={"Cancel"}
                    className="dark:bg-dark-primary dark:text-white w-full"
                  />
                  <RoundedButton
                    title={"Add Salary"}
                    className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white w-full"
                    htmlType="submit"
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-center">
            <Spin size="large" />
          </div>
        )}
      </Form>
    </Drawer>
  );
};
