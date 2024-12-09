import { Button, Col, Form, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SelectFieldComponent from "../../../../../helpers/inputs/SelectFieldComponent";
import TextInput from "../../../../../helpers/inputs/TextInput";
import {
  editJobOpeningApi,
  getCompanyDepartmentsDropdownApi,
  getJobOpeningByIdApi,
} from "../../../../../redux/api/Recruitment";
import { RootState } from "../../../../../redux/store";
import { errorMessage } from "../../../../../utils/message";

interface ListType {
  id: number;
  title: string;
  name: string;
}

const employmentTypesList: ListType[] = [
  {
    id: 1,
    title: "Full-time",
    name: "FullTime",
  },
  {
    id: 2,
    title: "Part-time",
    name: "PartTime",
  },
  {
    id: 3,
    title: "Contract",
    name: "Contract",
  },
  {
    id: 4,
    title: "Internship",
    name: "Internship",
  },
];

const workplaceTypesList: ListType[] = [
  {
    id: 1,
    title: "On-Site",
    name: "OnSite",
  },
  {
    id: 2,
    title: "Hybrid",
    name: "Hybird",
  },
  {
    id: 3,
    title: "Remote",
    name: "Remote",
  },
];

const EditJobOpeningForm = () => {
  const [form] = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobDetailsById = useSelector(
    (state: RootState) => state.getJobOpeningById?.data
  );
  const getCompanyDepartmentDropdown = useSelector(
    (state: RootState) => state.getCompanyDepartmentsDropdown
  );
  const [employeeType, setEmployeeType] = useState("");
  const [workspaceType, setWorkspaceType] = useState("");

  const onSuccess = (id: any) => {
    navigate(`/recruitment/job-posting-details/${id}`);
  };

  function onFinish({
    title,
    jobDescription,
    endSalaryRange,
    startSalaryRange,
    departmentId,
    workingExperience,
  }: any) {
    if (
      !title ||
      !jobDescription ||
      !endSalaryRange ||
      !startSalaryRange ||
      !departmentId
    ) {
      errorMessage("Please provide all the required fields");
      return;
    }
    if (!employeeType) {
      errorMessage("Please select employment type");
      return;
    }
    if (!workspaceType) {
      errorMessage("Please select workplace type");
      return;
    }

    editJobOpeningApi(
      dispatch,
      id,
      {
        title,
        jobDescription,
        startSalaryRange: Number(startSalaryRange),
        endSalaryRange: Number(endSalaryRange),
        employeeType,
        workspaceType,
        departmentId: departmentId.value,
      },
      onSuccess
    );
  }

  useEffect(() => {
    if (id) {
      getJobOpeningByIdApi(dispatch, id);
    }
  }, [id]);

  useEffect(() => {
    form.setFieldsValue({
      title: jobDetailsById?.data?.title,
      jobDescription: jobDetailsById?.data?.jobDescription,
      startSalaryRange: Number(jobDetailsById?.data?.startSalaryRange),
      endSalaryRange: Number(jobDetailsById?.data?.endSalaryRange),
      departmentId: jobDetailsById?.data?.companyDepartment?.id,
    });

    setEmployeeType(jobDetailsById?.data?.employeeType);
    setWorkspaceType(jobDetailsById?.data?.workspaceType);
  }, [jobDetailsById]);

  return (
    <div className="p-4">
      <h1 className="dark:text-dark-secondary font-semibold text-2xl mb-4">
        Edit Job Opening
      </h1>
      <Form
        form={form}
        onFinish={onFinish}
        name="create-opening-form"
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={16} md={14}>
            <Row gutter={16}>
              <Col sm={24} xs={24} lg={24} md={24}>
                <Col>
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Job Title
                  </span>
                  <TextInput
                    className="h-[44px] dark-input dark-input"
                    placeholder="Job Title"
                    rules={[
                      {
                        required: true,
                        message: "Please input your job title",
                      },
                    ]}
                    name="title"
                  />
                </Col>
                <Col>
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Job Description
                  </span>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your Job Description",
                      },
                    ]}
                    name="jobDescription"
                  >
                    <TextArea
                      className="w-[100%] h-[40px] dark-input"
                      rows={4}
                      placeholder="Add job description"
                    />
                  </Form.Item>
                </Col>
                <Col>
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Start Salary Range
                  </span>
                  <TextInput
                    className="h-[44px] dark-input "
                    placeholder=" Start Salary Range"
                    rules={[
                      {
                        required: true,
                        message: "Please input valid Start Salary Range",
                      },
                    ]}
                    name="startSalaryRange"
                    isNumber
                  />
                </Col>

                <Col>
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    End Salary Range
                  </span>
                  <TextInput
                    className="h-[44px] dark-input "
                    placeholder="End Salary Range"
                    rules={[
                      {
                        required: true,
                        message: "Please input valid End Salary Range",
                      },
                    ]}
                    name="endSalaryRange"
                    isNumber
                  />
                </Col>
                <Col>
                  <Row gutter={25} className="mb-4">
                    <Col sm={24} xs={24} lg={12}>
                      <span className="text-[#292D35] font-medium text-base dark-input-label">
                        Employment Types
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {employmentTypesList.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => setEmployeeType(item.name)}
                            className={`py-1 px-2 border rounded-full dark:border-dark-borderColor ${
                              item.name === employeeType
                                ? "bg-light-primary dark:bg-white text-white"
                                : ""
                            }  dark:text-dark-borderColor dark:bg-dark-primary flex gap-1 items-center cursor-pointer`}
                          >
                            {item.name === employeeType ? (
                              <BiMinus />
                            ) : (
                              <BiPlus />
                            )}
                            <span>{item.title}</span>
                          </div>
                        ))}
                      </div>
                    </Col>
                    <Col sm={24} xs={24} lg={12}>
                      <span className="text-[#292D35] font-medium text-base dark-input-label">
                        Workplace Types
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {workplaceTypesList.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => setWorkspaceType(item.name)}
                            className={`py-1 px-2 border rounded-full dark:border-dark-borderColor ${
                              item.name === workspaceType
                                ? "bg-light-primary dark:bg-white text-white"
                                : ""
                            }  dark:text-dark-borderColor dark:bg-dark-primary flex gap-1 items-center cursor-pointer`}
                          >
                            {item.name === workspaceType ? (
                              <BiMinus />
                            ) : (
                              <BiPlus />
                            )}
                            <span>{item.title}</span>
                          </div>
                        ))}
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <SelectFieldComponent
                    placeholder={
                      <p className="dark:text-gray-500">Select department</p>
                    }
                    apiwithoutId={getCompanyDepartmentsDropdownApi}
                    name={"departmentId"}
                    loading={getCompanyDepartmentDropdown.loading}
                  />
                </Col>

                <Col sm={24}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-light-primary dark:bg-white dark:text-dark-primary border-none h-[48px]  text-[1rem] font-semibold"
                  >
                    Update
                  </Button>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EditJobOpeningForm;
