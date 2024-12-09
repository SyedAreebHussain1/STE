import { CloseOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Col, DatePicker, Form, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AnimateButton from "../../../../../helpers/button/AnimateButton";
import ButtonWithSvg from "../../../../../helpers/button/ButtonWithSvg";
import TextInput from "../../../../../helpers/inputs/TextInput";
import {
  ScheduleInterviewApi,
  getCandidateByIdApi,
  getInterviewersApi,
} from "../../../../../redux/api/Recruitment";
import { errorMessage } from "../../../../../utils/message";
import checkIcon from "./../../../../../assets/checkIcon.svg";
import { InterviewTypes } from "./ResheduleInterview";

const ScheduleInterview = () => {
  const [form] = useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const candidateDetail = useSelector((state: any) => state?.getCandidateById);
  const getInterviewers = useSelector((state: any) => state?.getInterviewers);

  const [selectedInterviewType, setSelectedInterviewType] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const interviewTypes = ["Phone", "Video", "In-Person"];

  const onSuccess = (interviewId: any) => {
    navigate(`/recruitment/interview-details/${interviewId}`);
  };

  function onFinish(value: any) {
    if (!selectedInterviewType) {
      errorMessage("Please select interview type");
      return;
    }
    ScheduleInterviewApi(
      dispatch,
      {
        candidateId: Number(id),
        ...value,
        interviewType: selectedInterviewType,
        link: selectedInterviewType === InterviewTypes.Video ? value.link : "",
      },
      onSuccess
    );
  }

  useEffect(() => {
    getCandidateByIdApi(dispatch, id);
  }, []);

  useEffect(() => {
    getInterviewersApi(dispatch, { page: 1, limit: 10 });
  }, []);

  const disabledEndDate = (endDate: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return endDate && endDate < today;
  };

  function onDateChange(date: any) {
    setScheduledTime(date);
  }

  return (
    <div className="p-4">
      <h1 className="dark:text-dark-secondary font-semibold text-2xl mb-6">
        Schedule an Interview
      </h1>
      <Row gutter={[0, 20]} className="mb-4">
        <Col xs={24} md={12} xl={8} className="dark-input-label">
          <p className="text-lg">
            Job Title:{" "}
            <span className="font-bold">
              {candidateDetail?.data?.data?.jobOpening?.title}
            </span>
          </p>
        </Col>
        <Col xs={24} md={12} xl={8} className="dark-input-label">
          <p className="text-lg">
            Candidate Name:{" "}
            <span className="font-bold">
              {candidateDetail?.data?.data?.name}
            </span>
          </p>
        </Col>
        <Col xs={24} md={12} xl={8} className="dark-input-label">
          <p className="text-lg">
            Candidate ID:{" "}
            <span className="font-bold">{candidateDetail?.data?.data?.id}</span>
          </p>
        </Col>
        <Col span={24}>
          <div className="flex gap-2 items-center">
            <p className="dark-input-label">Interview Type</p>
            <div className="flex flex-wrap gap-2">
              {interviewTypes.map((item) => (
                <div
                  key={item}
                  onClick={() => setSelectedInterviewType(item)}
                  className="py-1 px-2 border rounded-full dark:border-dark-borderColor dark:text-dark-borderColor dark:bg-dark-primary flex gap-1 items-center cursor-pointer"
                >
                  {selectedInterviewType !== item ? <BiPlus /> : <BiMinus />}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Form
        form={form}
        onFinish={onFinish}
        name="scheduleInterview"
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={16} md={14}>
            <Row gutter={16}>
              <Col sm={24} xs={24} lg={24} md={24}>
                <Col>
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Title
                  </span>
                  <TextInput
                    className="h-[44px] dark-input "
                    placeholder="Title"
                    rules={[
                      {
                        required: true,
                        message: "This field is required",
                      },
                    ]}
                    name="title"
                  />
                </Col>
                <Col span={24}>
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Pick a Date and Time
                  </span>
                  <Form.Item
                    name="ScheduledTime"
                    rules={[
                      {
                        required: true,
                        message: "This field is required",
                      },
                    ]}
                  >
                    <DatePicker
                      className="w-full h-[44px] dark-input "
                      onChange={(e) =>
                        onDateChange(dayjs(e).format("YYYY-MM-DD HH:mm"))
                      }
                      disabledDate={disabledEndDate}
                      showTime={{ format: "HH:mm" }}
                      format="YYYY-MM-DD HH:mm"
                    />
                  </Form.Item>
                </Col>

                <Col>
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Location
                  </span>
                  <TextInput
                    className="h-[44px] dark-input "
                    placeholder="Location"
                    rules={[
                      {
                        required: true,
                        message: "This field is required",
                      },
                    ]}
                    name="Location"
                  />
                </Col>
                <Col>
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Interviewers
                  </span>
                  <div>
                    <Form.Item
                      name={"companyUserIds"}
                      rules={[
                        {
                          required: true,
                          message: "Please select Interviwer!",
                        },
                      ]}
                    >
                      <Select
                        className="w-full !h-[44px] dark-input"
                        placeholder="Select Interviewer"
                        mode="multiple"
                        loading={getInterviewers.loading}
                      >
                        {getInterviewers?.data?.data?.map(
                          (item: any, i: number) => (
                            <Select.Option key={i} value={item?.id}>
                              {item?.companyUserProfile?.name}
                            </Select.Option>
                          )
                        )}
                      </Select>
                    </Form.Item>
                  </div>
                </Col>
                {selectedInterviewType === InterviewTypes.Video && (
                  <Col>
                    <span className="text-[#292D35] font-medium text-base dark-input-label">
                      Video Conference Link
                    </span>
                    <div className="w-full flex gap-2">
                      <div className="flex-1">
                        <TextInput
                          className="h-[44px] dark-input "
                          placeholder="Video Conference Link"
                          suffix={
                            <div className="cursor-pointer dark-input-label">
                              Copy
                            </div>
                          }
                          rules={[
                            {
                              required: true,
                              message:
                                "Please input your Video Conference Link",
                            },
                          ]}
                          name="link"
                        />
                      </div>

                      <ShareAltOutlined className="mb-6 text-lg cursor-pointer dark-input-label" />
                    </div>
                  </Col>
                )}
                <Col sm={24}>
                  <div className="flex gap-4 w-full">
                    <ButtonWithSvg
                      htmlType="submit"
                      onClick={() => { }}
                      icon={checkIcon}
                      title={"Confirm Interview"}
                    />
                    <AnimateButton
                      icon={<CloseOutlined />}
                      title={"Cancel"}
                      onClick={() => navigate(-1)}
                      htmlType="button"
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

export default ScheduleInterview;
