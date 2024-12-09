import React, { useEffect } from "react";
import TextInput from "../../../helpers/inputs/TextInput";
import { IoSearchOutline } from "react-icons/io5";
import { DatePicker, Form, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanyDepartmentApi } from "../../../redux/api/SalaryManagement/SalaryDetails";
const { Option } = Select;

const EmployeeFilteration = ({
  setName,
  setEmpolyeeId,
  setDepartment,
  setStartDate,
  setEndDate,
  startDate,
  endDate,
  empolyeeId,
  name
}: any) => {
  const dispatch = useDispatch();
  const getAllCompanyDepartment = useSelector(
    (state: any) => state?.getAllCompanyDepartment
  );
  useEffect(() => {
    getAllCompanyDepartmentApi(dispatch);
  }, []);
  const disabledEndDate = (endDateDis: any) => {
    return endDateDis && endDateDis < startDate;
  };

  return (
    <div className="p-4 bg-white dark:bg-dark-grayprimary dark:text-white text-[#344054] rounded-[.625rem]  my-4">
      <div className="flex gap-3 flex-wrap">
        <div className="w-[243px]">
          <label htmlFor="employeeId" className="text-[.8125rem]   mb-1">
            Employee id
          </label>
          <TextInput
            id="employeeId"
            value={empolyeeId}
            className="min-h-[35px] dark-input"
            onChange={(e: any) => {
              if (e.target.value > 0) {
                setEmpolyeeId(e.target.value)
              } else {
                setEmpolyeeId("")
              }
            }
            }
            prefix={<IoSearchOutline size={"18"} />}
            placeholder="Enter Id"
          />
        </div>
        <div className="w-[243px]">
          <label htmlFor="employeeName" className="text-[.8125rem]  mb-1">
            Employee Name
          </label>
          <TextInput
            id="employeeName"
            value={name}
            onChange={(e) => {
              const value = e.target.value;
              const alphabeticValue = value.replace(/[^a-zA-Z]/g, '');
              setName(alphabeticValue);
            }
            }
            className="min-h-[35px] dark-input"
            prefix={<IoSearchOutline size={"18"} />}
            placeholder="Enter Name"
          />
        </div>
        <div className="w-[243px]">
          <label htmlFor="department" className="text-[.8125rem]  mb-1">
            Department
          </label>

          <Form.Item>
            <Select
              className="min-h-[35px] dark-input"
              allowClear
              onChange={(e) => setDepartment(e)}
              placeholder="Department"
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
        <div className="flex items-center gap-1">
          <DatePicker
            value={startDate}
            onChange={(event) => setStartDate(event)}
            placeholder="Start Date "
            suffixIcon={null}
            className="dark-input"
          />{" "}
          -
          <DatePicker
            value={endDate}
            onChange={(event) => setEndDate(event)}
            disabledDate={disabledEndDate}
            placeholder="End Date"
            disabled={!startDate}
            suffixIcon={null}
            className="dark-input"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeFilteration;
