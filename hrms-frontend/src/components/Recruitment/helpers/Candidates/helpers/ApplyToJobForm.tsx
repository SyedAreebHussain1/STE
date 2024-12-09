import { CloseOutlined } from "@ant-design/icons";
import { Button, Col, Form, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimateButton from "../../../../../helpers/button/AnimateButton";
import ButtonWithSvg from "../../../../../helpers/button/ButtonWithSvg";
import TextInput from "../../../../../helpers/inputs/TextInput";
import useToggle from "../../../../../hooks/useToggle";
import { createCandidateApi, decodeUrlApi } from "../../../../../redux/api/Recruitment";
import { resumeScrapingApi } from "../../../../../redux/api/ResumeScraping";
import { errorMessage } from "../../../../../utils/message";
import checkIcon from "./../../../../../assets/checkIcon.svg";
import deleteIcon from "./../../../../../assets/deleteIcon.png";
import ApplyToJobModal from "./ApplyToJobModal";
import { RootState } from "../../../../../redux/store";

const ApplyToJobForm = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const [upload, setUpload] = useState(false);
  const [uploadCoverLetter, setUploadCoverLetter] = useState(false);
  const [uploadPortfolio, setUploadPortfolio] = useState(false);
  const inputRef = useRef<any>(null);
  const coverLetterInputRef = useRef<any>(null);
  const portfolioInputRef = useRef<any>(null);
  const [coverLetter, setCoverLetter] = useState<any>(null);
  const [portfoio, setPortfoio] = useState<any>(null);
  const [resume, setResume] = useState<any>(null);
  const dispatch = useDispatch();
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [open, toggleModal] = useToggle();
  const resumeScraping = useSelector((state: any) => state.resumeScraping);
  const decodeUrl = useSelector((state: RootState) => state?.decodeUrl)
  function getQueryParam(param: any) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  const base64EncodedObj = getQueryParam('obj');
  useEffect(() => {
    if (base64EncodedObj) {
      decodeUrlApi(dispatch, base64EncodedObj);
    }
  }, [base64EncodedObj]);
  function onFinish(values: any) {
    if (!resume) {
      errorMessage("Resume is required");
      return;
    }
    let files: any = {};
    if (coverLetter) {
      files = { ...files, coverLetterUrl: coverLetter };
    }
    if (portfoio) {
      files = { ...files, coverLetterUrl: portfoio };
    }
    if (decodeUrl?.data?.data?.jobOpeningId) {
      createCandidateApi(
        dispatch,
        { jobOpeningId: decodeUrl?.data?.data?.jobOpeningId, ...values, cvUrl: resume, ...files },
        onSuccess
      );
    }
  }

  const onSuccess = () => {
    toggleModal();
    setIsSuccessful(true);
  };

  const jobSources = [
    "Company Website",
    "Linkedln",
    "Indeed",
    "Facebook",
    "Employee Referral",
    "Other",
  ];

  const uploadHandler = (ref: any) => {
    ref.current.click();
  };
  const changeHandler = (e: any, docName: any) => {
    const { files } = e.target;
    if (files.length === 0) return;
    if (files[0]) {
      const fileType = files[0].type;
      const fileName = files[0].name;
      const isDocx = fileName.endsWith('.docx');
      if (fileType === 'application/pdf' || isDocx) {
        switch (docName) {
          case "resume":
            let formData: any = new FormData();
            setUpload(true);
            setResume(files[0]);
            formData.append("resume", files[0]);
            resumeScrapingApi(dispatch, formData);
            break;
          case "coverLetter":
            setUploadCoverLetter(true);
            setCoverLetter(files[0]);
            break;
          case "portfolio":
            setUploadPortfolio(true);
            setPortfoio(files[0]);
            break;
          default:
            break;
        }
      } else {
        errorMessage("Invalid file type. Please select an Doc file or PDF file.")
      }
    }

  };

  useEffect(() => {
    const phone = resumeScraping?.data?.["Phone Number"] ?? "";

    form.setFields([
      {
        name: "name",
        value: form.getFieldValue("name")
          ? form.getFieldValue("name")
          : resumeScraping?.data?.Name,
      },
      {
        name: "email",
        value: form.getFieldValue("email")
          ? form.getFieldValue("email")
          : resumeScraping?.data?.Email,
      },
      {
        name: "phone",
        value: form.getFieldValue("phone")
          ? form.getFieldValue("phone")
          : phone,
      },
    ]);
  }, [resumeScraping, form]);

  return (
    <>
      {isSuccessful && <ApplyToJobModal onClose={toggleModal} open={open} />}
      <div className="p-10">
        <h1 className="dark:text-dark-secondary font-semibold text-2xl mb-6">
          Apply To Job
        </h1>
        <h1 className="dark:text-dark-secondary font-bold text-2xl mb-6">
          {decodeUrl?.data?.data?.jobTitle}
        </h1>
        <h1 className="dark:text-dark-secondary font-semibold text-2xl mb-6">
          {decodeUrl?.data?.data?.companyName}
        </h1>

        <Form
          form={form}
          onFinish={onFinish}
          name="ApplyToJobForm"
          autoComplete="off"
          initialValues={{ remember: true }}
          encType="multipart/form-data"
        >
          <Row gutter={16}>
            <Col sm={24} md={12}>
              <span className="text-[#292D35] font-medium text-base dark-input-label">
                Full Name<span className="text-red">*</span>
              </span>
              <TextInput
                maxLength={20}
                className="h-[44px] dark-input "
                placeholder="name" onKeyDown={(event) => {
                  if (/[0-9,.]/.test(event.key)) {
                    event.preventDefault();
                    return;
                  }
                }}
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                name="name"
              />
            </Col>
            <Col sm={24} md={12}>
              <span className="text-[#292D35] font-medium text-base dark-input-label">
                Email<span className="text-red">*</span>
              </span>
              <TextInput
                maxLength={80}
                className="h-[44px] dark-input "
                placeholder="Email"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                  {
                    type: "email",
                    message: "Please input valid Email",
                  },
                ]}
                name="email"
              />
            </Col>
            <Col sm={24} md={12}>
              <span className="text-[#292D35] font-medium text-base dark-input-label">
                Phone Number<span className="text-red">*</span>
              </span>
              <TextInput
                maxLength={12}
                className="h-[44px] dark-input "
                placeholder="Phone Number"
                prefix="+92"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                name="phone"
                isNumber
              />
            </Col>
            <Col sm={24} md={12}>
              <span className="text-[#292D35] font-medium text-base dark-input-label">
                Years of Experience<span className="text-red">*</span>
              </span>
              <TextInput
                maxLength={2}
                className="h-[44px] dark-input "
                placeholder="Years of Experience"
                isNumber
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                name="workingExperience"
              />
            </Col>
            <Col sm={24} md={12}>
              <span className="text-[#292D35] font-medium text-base dark-input-label">
                Expected Salary<span className="text-red">*</span>
              </span>
              <TextInput
                maxLength={20}
                className="h-[44px] dark-input "
                placeholder="Expected Salary"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                name="expectedSalary"
                isNumber
              />
            </Col>
            <Col sm={24} md={12}>
              <span className="text-[#292D35] font-medium text-base dark-input-label">
                Job Source<span className="text-red">*</span>
              </span>
              <Form.Item
                className="h-[44px] dark-input"
                name="candidatSource"
                rules={[
                  {
                    required: true,
                    message: "Please Select Job Source",
                  },
                ]}
              >
                <Select
                  placeholder={<p className="dark:text-gray-500">Created By</p>}
                  className="h-[44px] dark-input"
                >
                  {jobSources.map((source, i) => (
                    <Select.Option key={i} value={source}>
                      {source}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col sm={24} lg={12} className="flex gap-4 items-center my-4">
              <span className="text-[#292D35] font-medium text-base dark-input-label">
                Cover Letter (Optional)
              </span>
              <Button
                onClick={() => uploadHandler(coverLetterInputRef)}
                className="gap-[8px] h-[48px] border rounded-full flex justify-center items-center cursor-pointer bg-white"
              >
                <input
                  type="file"
                  ref={coverLetterInputRef}
                  onChange={(e) => changeHandler(e, "coverLetter")}
                  className="hidden w-0"
                  accept=".pdf,.docx"
                ></input>
                <span className="text-[#475467] text-[1rem] font-semibold">
                  Browse files
                </span>
              </Button>
              {uploadCoverLetter && (
                <div className="flex justify-between">
                  <div className="w-full">
                    <div className="bg-gray-100 p-4 flex rounded-[5px] justify-between items-center gap-5 my-4">
                      <div className="flex items-center gap-1">
                        <div>
                          <p className="font-medium text-[.8125rem] text-[#344054] cursor-pointer flex items-center gap-1">
                            {coverLetter.name}
                          </p>
                          <p className="text-[#98A2B3] text-[.75rem] font-medium">
                            {coverLetter.bytes} bytes
                          </p>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            if (coverLetterInputRef?.current?.value) {
                              coverLetterInputRef.current.value = null;
                            }
                            setUploadCoverLetter(false);
                            setCoverLetter(null);
                          }}
                        >
                          <img src={deleteIcon} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col md={24} lg={12} className="flex gap-4 items-center my-4">
              <span className="text-[#292D35] font-medium text-base dark-input-label">
                Portfolio (Optional)
              </span>
              <Button
                onClick={() => uploadHandler(portfolioInputRef)}
                className="gap-[8px] h-[48px] border rounded-full flex justify-center items-center cursor-pointer bg-white"
              >
                <input
                  type="file"
                  ref={portfolioInputRef}
                  onChange={(e) => changeHandler(e, "portfolio")}
                  className="hidden w-0"
                  accept=".pdf,.docx"
                ></input>
                <span className="text-[#475467] text-[1rem] font-semibold">
                  Browse files
                </span>
              </Button>
              {uploadPortfolio && (
                <div className="flex justify-between">
                  <div className="w-full">
                    <div className="bg-gray-100 p-4 flex rounded-[5px] justify-between items-center gap-5 my-4">
                      <div className="flex items-center gap-1">
                        <div>
                          <p className="font-medium text-[.8125rem] text-[#344054] cursor-pointer flex items-center gap-1">
                            {portfoio.name}
                          </p>
                          <p className="text-[#98A2B3] text-[.75rem] font-medium">
                            {portfoio.bytes} bytes
                          </p>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            if (portfolioInputRef?.current?.value) {
                              portfolioInputRef.current.value = null;
                            }
                            setUploadPortfolio(false);
                            setPortfoio(null);
                          }}
                        >
                          <img src={deleteIcon} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col md={24} lg={12} className="flex gap-4 items-center md:my-4">
              <span className="text-[#292D35] font-medium text-base dark-input-label">
                Resume / CV
              </span>
              <Button
                onClick={() => uploadHandler(inputRef)}
                className="gap-[8px] h-[48px] border rounded-full flex justify-center items-center cursor-pointer bg-white"
              >
                <input
                  type="file"
                  ref={inputRef}
                  onChange={(e) => changeHandler(e, "resume")}
                  className="hidden w-0"
                  accept=".pdf,.docx"
                ></input>
                <span className="text-[#475467] text-[1rem] font-semibold">
                  Browse files
                </span>
              </Button>
              {upload && (
                <div className="flex justify-between">
                  <div className="w-full">
                    <div className="bg-gray-100 p-4 flex rounded-[5px] justify-between items-center gap-5 my-4">
                      <div className="flex items-center gap-1">
                        <div>
                          <p className="font-medium text-[.8125rem] text-[#344054] cursor-pointer flex items-center gap-1">
                            {resume?.name}
                          </p>
                          <p className="text-[#98A2B3] text-[.75rem] font-medium">
                            {resume?.bytes} bytes
                          </p>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            if (inputRef?.current?.value) {
                              inputRef.current.value = null;
                            }
                            setUpload(false);
                            setResume(null);
                          }}
                        >
                          <img src={deleteIcon} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col span={24} className="flex gap-4">
              <ButtonWithSvg
                htmlType="submit"
                title={"Submit Application"}
                icon={checkIcon}
              />
              <AnimateButton title={"Cancel"} onClick={() => navigate(-1)} icon={<CloseOutlined />} />
            </Col>
          </Row>
        </Form>

      </div>
    </>
  );
};

export default ApplyToJobForm;
