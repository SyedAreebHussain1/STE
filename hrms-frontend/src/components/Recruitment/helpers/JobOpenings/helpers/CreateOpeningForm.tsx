import { CloseOutlined } from "@ant-design/icons";
import { Col, Form, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimateButton from "../../../../../helpers/button/AnimateButton";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
import SelectFieldComponent from "../../../../../helpers/inputs/SelectFieldComponent";
import TextInput from "../../../../../helpers/inputs/TextInput";
import {
  createNewJobOpeningApi,
  getCompanyDepartmentsDropdownApi,
} from "../../../../../redux/api/Recruitment";
import { RootState } from "../../../../../redux/store";
import { errorMessage } from "../../../../../utils/message";
import thunderIcon from "./../../../../../assets/thunderIcon.svg";
import thunderDarkIcon from "./../../../../../assets/thunderDarkIcon.svg";
import { motion } from "framer-motion";

interface ListType {
  id: number;
  title: string;
  selected: boolean;
  name: string;
}

const employmentTypesList: ListType[] = [
  {
    id: 1,
    title: "Full-time",
    selected: false,
    name: "FullTime",
  },
  {
    id: 2,
    title: "Part-time",
    selected: false,
    name: "PartTime",
  },
  {
    id: 3,
    title: "Contract",
    selected: false,
    name: "Contract",
  },
  {
    id: 4,
    title: "Internship",
    selected: false,
    name: "Internship",
  },
];

const workplaceTypesList: ListType[] = [
  {
    id: 1,
    title: "On-Site",
    selected: false,
    name: "OnSite",
  },
  {
    id: 2,
    title: "Hybrid",
    selected: false,
    name: "Hybird",
  },
  {
    id: 3,
    title: "Remote",
    selected: false,
    name: "Remote",
  },
];

const CreateOpeningForm = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [jobDescription, setJobDescription] = useState<string>("");
  const [hovered, setHovered] = useState<boolean>(false);
  const getCompanyDepartmentDropdown = useSelector(
    (state: RootState) => state.getCompanyDepartmentsDropdown
  );
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
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

    createNewJobOpeningApi(
      dispatch,
      {
        title,
        jobDescription,
        startSalaryRange: Number(startSalaryRange),
        endSalaryRange: Number(endSalaryRange),
        employeeType,
        workspaceType,
        departmentId: departmentId,
        workingExperience,
      },
      onSuccess
    );
  }

  function jd() {
    if (jobDescription !== "") {
      fetch(
        `https://dlfqs3ulrjovrdeujoh47j6zwq0pkxys.lambda-url.ap-south-1.on.aws/enhancejd?jd=${jobDescription}`,
        {
          method: "POST",
        }
      )
        .then(function (res) {
          return res.json();
        })
        .then(function ({ data }) {
          form.setFieldValue(
            "jobDescription",

            data[0].transformed
          );
        })
        .catch(function (res) {
          console.log(res);
        });
    } else {
      errorMessage("Enter job decription prompt");
    }
  }

  return (
    <div className="p-4">
      <h1 className="dark:text-dark-secondary font-semibold text-2xl mb-4">
        Create an Opening
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
                      onChange={(e) => setJobDescription(e.target.value)}
                      className="w-[100%] h-[40px] dark-input custom-scrollbar"
                      rows={4}
                      placeholder="Add job description"
                    />
                  </Form.Item>
                </Col>
                <Col className="flex justify-end swap-animation">
                  {" "}
                  <motion.div
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    animate={{ x: hovered ? 127 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center justify-center rounded-full h-[30px] bg-light-primary w-[30px] dark:bg-dark-secondary">
                      <img
                        src={
                          darkMode === "dark" ? thunderIcon : thunderDarkIcon
                        }
                        alt=""
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    animate={{ x: hovered ? -30 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <RoundedButton
                      title={
                        <span className="flex items-center font-bold">
                          Create with AI
                        </span>
                      }
                      xs
                      onClick={jd}
                      className="dark:bg-white dark:text-black hover:dark:!bg-white"
                    />
                  </motion.div>
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
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Working Experience
                  </span>
                  <TextInput
                    className="h-[44px] dark-input "
                    placeholder="Working Experience"
                    rules={[
                      {
                        required: true,
                        message: "Please input valid Working Experience",
                      },
                    ]}
                    name="workingExperience"
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
                            className={`py-1 px-2 border rounded-full ${
                              item.name === employeeType
                                ? "bg-light-primary text-white dark:bg-white "
                                : ""
                            }  dark:border-dark-borderColor dark:text-dark-borderColor dark:bg-dark-primary flex gap-1 items-center cursor-pointer`}
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
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Department
                  </span>
                  <SelectFieldComponent
                    apiwithoutId={getCompanyDepartmentsDropdownApi}
                    name={"departmentId"}
                    loading={getCompanyDepartmentDropdown.loading}
                    placeholder={
                      <p className="dark:text-gray-500">Select Department</p>
                    }
                  ></SelectFieldComponent>
                </Col>

                <Col sm={24}>
                  <div className="flex gap-4 w-full">
                    <RoundedButton
                      className="dark:bg-white"
                      title={"Save Job Opening"}
                      htmlType="submit"
                    />
                    <AnimateButton
                      htmlType="button"
                      icon={<CloseOutlined />}
                      title={"Cancel"}
                      onClick={() => navigate(-1)}
                    />
                  </div>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateOpeningForm;
