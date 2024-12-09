import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import AnimateButton from "../../../../../helpers/button/AnimateButton";
import ButtonWithSvg from "../../../../../helpers/button/ButtonWithSvg";
import Tag from "../../../../../helpers/tag/tag";
import rescheduleIcon from "./../../../../../assets/reschedule.svg";
import { useEffect, useState } from "react";
import { getInterviewByIdApi } from "../../../../../redux/api/Recruitment";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const InterviewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const interviewDetail = useSelector((state: any) => state.getInterviewById);
  const [isCompleted, setIsCompleted] = useState<any>(null);

  const rescheduleInterview = () => {
    navigate(`/recruitment/reschedule-interview/${id}`);
  };

  const onCancel = () => {
    navigate(-1);
  };

  const onSuccess = () => {
    setIsCompleted(
      Date.now() >
        new Date(interviewDetail?.data?.data?.ScheduledTime).getTime()
    );
  };

  useEffect(() => {
    getInterviewByIdApi(dispatch, id, onSuccess);
  }, []);

  return (
    <>
      <Row className="p-4" gutter={[0, 20]}>
        <Col span={24} className="flex gap-4 items-center mb-2">
          <h1 className="dark:text-dark-secondary font-semibold text-2xl">
            Interview Details
          </h1>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={24} className="flex gap-4 items-center mb-2">
              <h1 className="dark:text-white font-bold text-2xl">
                {interviewDetail?.data?.data?.candidate?.name}
              </h1>
              <AnimateButton
                icon={<EditOutlined />}
                title={"Edit"}
                onClick={rescheduleInterview}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <h1 className="text-md font-semibold dark:text-white">Position:</h1>
          <p className="mb-4 dark:text-white text-lg">
            {interviewDetail?.data?.data?.title}
          </p>

          <h1 className="text-md font-semibold dark:text-white">
            Interview Type:
          </h1>
          <p className="mb-4 dark:text-white text-lg">
            {" "}
            {interviewDetail?.data?.data?.interviewType}{" "}
          </p>

          <h1 className="text-md font-semibold dark:text-white">
            Interview Date and Time:
          </h1>
          <p className="mb-4 dark:text-white text-lg">
            {moment(interviewDetail?.data?.data?.ScheduledTime).format(
              "MMM. D, YYYY | HH : MM"
            )}
          </p>
          <h1 className="text-md font-semibold dark:text-white">
            Interview Location
          </h1>
          <p className="dark:text-white text-lg">
            {interviewDetail?.data?.data?.Location}
          </p>
        </Col>

        <Col span={24}>
          <Tag
            title={isCompleted ? "Completed" : "Scheduled"}
            bgColorDark={isCompleted ? "dark-secondary" : "dark-borderColor"}
            borderColorDark={
              isCompleted ? "border-dark-secondary" : "border-dark-borderColor"
            }
            bold
          />
        </Col>

        <Col span={24} className="flex gap-2 items-center">
          <h1 className="text-md font-semibold dark:text-white">
            Interviewer:
          </h1>
          <Avatar.Group>
            {interviewDetail?.data?.data?.assignInterviews?.map((item: any) => (
              <Avatar
                className="bg-light-primary dark:bg-dark-purple"
                key={item?.companyUser?.companyUserProfile?.id}
              >
                {item?.companyUser?.companyUserProfile?.name
                  ?.toUpperCase()
                  ?.slice(0, 1)}
              </Avatar>
            ))}
          </Avatar.Group>
        </Col>

        <Col sm={24}>
          <div className="flex gap-4 w-full">
            <ButtonWithSvg
              title={"Reschedule"}
              onClick={rescheduleInterview}
              icon={rescheduleIcon}
              className="bg-light-primary text-white dark:bg-white dark:text-dark-primary"
            />
            <AnimateButton
              title={"Cancel"}
              icon={<CloseOutlined />}
              onClick={onCancel}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default InterviewDetails;
