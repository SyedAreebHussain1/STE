import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Avatar, Divider } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimateButton from "../../../../../helpers/button/AnimateButton";
import Tag from "../../../../../helpers/tag/tag";
import {
  checkInterviewEvaluationApi,
  deleteInterviewApi,
  getAllInterviewsApi,
} from "../../../../../redux/api/Recruitment";
import rightArrowIcon from "./../../../../../assets/rightArrowIcon.svg";

interface PropType {
  interviewDetails: any;
  isUpcoming: boolean;
}

const Interview: React.FC<PropType> = ({ interviewDetails, isUpcoming }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [evaluationData, setEvaluationData] = useState<any>(null);
  const evaluationDetails = useSelector(
    (state: any) => state?.checkInterviewEvaluation
  );

  const onSuccess = () => {
    getAllInterviewsApi(
      dispatch,
      { page: 1, limit: 10 },
      isUpcoming ? "UpComing" : "Past"
    );
  };

  const onDeleteInterview = (id: any) => {
    deleteInterviewApi(dispatch, id, onSuccess);
  };

  useEffect(() => {
    checkInterviewEvaluationApi(dispatch, interviewDetails?.id, onClose);
  }, []);

  const onClose = (res: any) => {
    setEvaluationData(res?.data);
  };

  return (
    <div className="flex gap-2 cursor-pointer mb-2">
      <div className="w-full rounded-md bg-white flex p-4 mb-2 gap-2">
        <div className=" flex justify-center items-center">
          <Avatar>
            {interviewDetails?.candidate?.name?.toUpperCase()?.slice(0, 1)}
          </Avatar>
        </div>
        <div className="flex justify-center items-center min-w-auto sm:min-w-[140px]">
          <h1 className="font-bold text-lg w-full whitespace-nowrap overflow-hidden text-ellipsis">
            {interviewDetails?.candidate?.name}
          </h1>
        </div>
        <div className="flex-1 flex w-full justify-evenly">
          <div className="flex items-center">
            <div>
              <h1 className="font-bold">Position</h1>
              <p>{interviewDetails?.candidate?.jobOpening?.title}</p>
            </div>
          </div>
          <Divider
            type="vertical"
            className="dark:bg-dark-borderColor bg-light-primary h-full w-[1px]"
          />
          <div className="flex items-center gap-1 justify-center flex-col">
            <Tag
              title={moment(interviewDetails?.ScheduledTime).format("MMM D YYYY")}
              bgColor={"light-primary"}
              bgColorDark={"dark-purple"}
              color={"text-white"}
            />
            <Tag title={interviewDetails?.ScheduledTime ? moment(interviewDetails?.ScheduledTime).format("h:mm a") : '-'} />
          </div>
          <Divider
            type="vertical"
            className="dark:bg-dark-borderColor bg-light-primary h-full w-[1px]"
          />
          <div className="flex items-center">
            <div>
              <h1 className="font-bold">Interviewer</h1>
              <Avatar.Group>
                {interviewDetails?.assignInterviews?.map((item: any) => (
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
            </div>
          </div>

          <div className={`${isUpcoming ? "my-auto" : "flex flex-col gap-2"}`}>
            <Tag
              title={isUpcoming ? "Scheduled" : "Completed"}
              bgColorDark={isUpcoming ? "dark-borderColor" : "dark-secondary"}
              bold
            />
            {!isUpcoming && (
              <div
                className="text-gray-500 text-xs"
                onClick={() => {
                  evaluationData
                    ? navigate(
                      `/recruitment/evaluation-details/${evaluationData?.id}`
                    )
                    : navigate(
                      `/recruitment/evaluation/${interviewDetails?.id}`
                    );
                }}
              >
                {evaluationData ? (
                  <span className="flex gap-1 items-center">
                    View Evaluation <img src={rightArrowIcon} alt="" />
                  </span>
                ) : (
                  <span className="flex gap-1 items-center">
                    Evaluate <img src={rightArrowIcon} alt="" />
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <AnimateButton
          title={"Edit"}
          icon={<EditOutlined />}
          sm
          onClick={() =>
            navigate(
              `/recruitment/reschedule-interview/${interviewDetails?.id}`
            )
          }
        />
        <AnimateButton
          title={"View"}
          icon={<EyeOutlined />}
          sm
          onClick={() =>
            navigate(`/recruitment/interview-details/${interviewDetails?.id}`)
          }
        />
        <AnimateButton
          title={"Delete"}
          icon={<DeleteOutlined />}
          sm
          onClick={() => {
            onDeleteInterview(interviewDetails?.id);
          }}
        />
      </div>
    </div>
  );
};

export default Interview;
