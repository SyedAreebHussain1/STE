import {
  SearchOutlined,
  UserDeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Input, Pagination, Rate, Row } from "antd";
import { useEffect, useRef, useState } from "react";
import AnimateButton from "../../../../../helpers/button/AnimateButton";
import downloadIcon from "./../../assets/downloadIcon.svg";
import scheduleIcon from "./../../assets/scheduleIcon.svg";
import viewIcon from "./../../assets/viewIcon.svg";
import rejectCandidateIcon from "./../../assets/rejectCandidateIcon.svg";
import { useNavigate, useParams } from "react-router-dom";
import ButtonWithSvg from "../../../../../helpers/button/ButtonWithSvg";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import {
  deleteCandidateApi,
  getAllCandidatesByJobIdApi,
  getEvaluationByIdApi,
} from "../../../../../redux/api/Recruitment";
import { RootState } from "../../../../../redux/store";
const EvaluationDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const evaluationDetail = useSelector(
    (state: RootState) => state.getEvaluationById
  );

  useEffect(() => {
    if (id) getEvaluationByIdApi(dispatch, id);
  }, []);

  return (
    <>
      <Row className="p-4" gutter={[0, 20]}>
        <div
          className="text-[0.975rem] flex  items-center font-medium text-black dark:text-white cursor-pointer pt-[20px] w-max "
          onClick={() => navigate(-1)}
        >
          <span>
            <IoIosArrowBack className="px-[1px] text-[1rem]" size={20} />
          </span>
          <span>Back</span>
        </div>
        <Col span={24} className="flex gap-4 items-center mb-2">
          <h1 className="dark:text-dark-secondary font-semibold text-2xl">
            Evaluation Details
          </h1>
          <AnimateButton
            icon={<EditOutlined />}
            title={"Edit"}
            onClick={() => navigate(`/recruitment/evaluation/update/${id}`)}
          />
        </Col>

        <Col xs={24} md={12} className="dark-input-label">
          <p className="text-lg">
            Interview ID:{" "}
            <span className="font-bold">
              #{evaluationDetail?.data?.data?.interview?.id}
            </span>
          </p>
        </Col>
        <Col xs={24} md={12} className="dark-input-label">
          <p className="text-lg">
            Candidate Name:{" "}
            <span className="font-bold">
              {evaluationDetail?.data?.data?.interview?.candidate?.name}
            </span>
          </p>
        </Col>
        <Col span={24}>
          <h1 className="text-md font-bold dark:text-white">Position:</h1>
          <p className="mb-4 dark:text-white text-lg">
            {" "}
            {evaluationDetail?.data?.data?.interview?.title}
          </p>

          <h1 className="text-md font-bold dark:text-white">Comments:</h1>
          <p className="mb-4 dark:text-white text-lg">
            {" "}
            {evaluationDetail?.data?.data?.comments}{" "}
          </p>

          <h1 className="text-md font-bold dark:text-white">Strengths:</h1>
          <p className="mb-4 dark:text-white text-lg">
            {evaluationDetail?.data?.data?.strenghts}
          </p>

          <h1 className="text-md font-bold dark:text-white">Weakness</h1>
          <p className="dark:text-white text-lg mb-4">
            {evaluationDetail?.data?.data?.weakness}
          </p>

          <h1 className="text-md font-bold dark:text-white">Rating</h1>
          <Rate value={evaluationDetail?.data?.data?.ratings} disabled />

          <div className="mt-4 flex gap-2 items-center">
            <h1 className="text-md font-bold dark:text-white">Interviewers:</h1>
            <Avatar.Group>
              {evaluationDetail?.data?.data?.interview?.assignInterviews?.map(
                (item: any) => (
                  <Avatar
                    className="bg-light-primary dark:bg-dark-purple"
                    key={item?.companyUser?.companyUserProfile?.id}
                  >
                    {item?.companyUser?.companyUserProfile?.name
                      ?.toUpperCase()
                      ?.slice(0, 1)}
                  </Avatar>
                )
              )}
            </Avatar.Group>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default EvaluationDetails;
