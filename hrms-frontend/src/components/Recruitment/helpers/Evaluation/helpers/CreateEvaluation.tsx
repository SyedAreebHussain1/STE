import { CloseOutlined } from "@ant-design/icons";
import { Col, Form, Rate, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import AnimateButton from "../../../../../helpers/button/AnimateButton";
import ButtonWithSvg from "../../../../../helpers/button/ButtonWithSvg";
import TextInput from "../../../../../helpers/inputs/TextInput";
import checkIcon from "./../../../../../assets/checkIcon.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInterviewByIdApi,
  postEvaluationApi,
} from "../../../../../redux/api/Recruitment";
import { errorMessage } from "../../../../../utils/message";

const Evaluation = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ratings, setRatings] = useState(0);
  const { id } = useParams();
  const getInterviewDetails = useSelector(
    (state: any) => state?.getInterviewById
  );

  const onSuccess = (evaluationId: any) => {
    navigate(`/recruitment/evaluation-details/${evaluationId}`);
  };

  function onFinish(value: any) {
    if (!ratings) {
      errorMessage("Please rate the interview");
      return;
    }

    postEvaluationApi(
      dispatch,
      { interviewId: id, ...value, ratings },
      onSuccess
    );
  }

  useEffect(() => {
    if (!getInterviewDetails?.data?.data?.id) getInterviewByIdApi(dispatch, id);
  }, []);

  return (
    <div className="p-4">
      <h1 className="dark:text-dark-secondary font-semibold text-2xl mb-6">
        Evaluation
      </h1>
      <Row gutter={[0, 20]} className="mb-4">
        <Col xs={24} md={12} className="dark-input-label">
          <p className="text-lg">
            Interview ID: <span className="font-bold">#{id}</span>
          </p>
        </Col>
        <Col xs={24} md={12} className="dark-input-label">
          <p className="text-lg">
            Candidate Name:{" "}
            <span className="font-bold">
              {getInterviewDetails?.data?.data?.candidate?.name}
            </span>
          </p>
        </Col>
        <Col span={24} className="dark-input-label">
          <h1 className="font-semibold text-lg">Rating</h1>
          <Rate value={ratings} onChange={setRatings} />
        </Col>
      </Row>
      <Form
        form={form}
        onFinish={onFinish}
        name="Evaluation"
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={16} md={14}>
            <Row gutter={16}>
              <Col sm={24} xs={24} lg={24} md={24}>
                <Col>
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Comments
                  </span>
                  <TextInput
                    className="h-[44px] dark-input "
                    placeholder="Comments"
                    rules={[
                      {
                        required: true,
                        message: "Please input valid Comments",
                      },
                    ]}
                    name="comments"
                  />
                </Col>

                <Col>
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Strengths
                  </span>
                  <TextInput
                    className="h-[44px] dark-input "
                    placeholder="Strengths"
                    rules={[
                      {
                        required: true,
                        message: "Please input valid Strengths",
                      },
                    ]}
                    name="strenghts"
                  />
                </Col>

                <Col>
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Weaknesses
                  </span>
                  <TextInput
                    className="h-[44px] dark-input "
                    placeholder="Weaknesses"
                    rules={[
                      {
                        required: true,
                        message: "Please input valid Weaknesses",
                      },
                    ]}
                    name="weakness"
                  />
                </Col>
                
                <Col sm={24}>
                  <div className="flex gap-4 w-full">
                    <ButtonWithSvg
                      htmlType="submit"
                      onClick={() => {}}
                      icon={checkIcon}
                      title={"Submit Evaluation"}
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

export default Evaluation;
