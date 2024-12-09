import { CloseOutlined } from "@ant-design/icons";
import { Col, Form, Rate, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import AnimateButton from "../../../../../helpers/button/AnimateButton";
import ButtonWithSvg from "../../../../../helpers/button/ButtonWithSvg";
import TextInput from "../../../../../helpers/inputs/TextInput";
import checkIcon from "./../../../../../assets/checkIcon.svg";
import { useEffect, useState } from "react";
import {
  getEvaluationByIdApi,
  updateEvaluationApi,
} from "../../../../../redux/api/Recruitment";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import moment from "moment";

const UpdateEvaluation = () => {
  const [form] = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const evaluationDetails = useSelector(
    (state: RootState) => state.getEvaluationById?.data
  );
  const [ratings, setRatings] = useState(evaluationDetails?.data?.ratings);

  const onSuccess = () => {
    navigate("/recruitment/evaluation-details/" + id);
  };

  function onFinish(value: any) {
    updateEvaluationApi(
      dispatch,
      id,
      {
        interviewId: evaluationDetails?.data?.interviewId,
        ...value,
        ratings,
      },
      onSuccess
    );
  }

  useEffect(() => {
    getEvaluationByIdApi(dispatch, id);
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      comments: evaluationDetails?.data?.comments,
      strenghts: evaluationDetails?.data?.strenghts,
      weakness: evaluationDetails?.data?.weakness,
    });
  }, [evaluationDetails]);

  return (
    <div className="p-4">
      <h1 className="dark:text-dark-secondary font-semibold text-2xl mb-6">
        Update Evaluation
      </h1>
      <Row gutter={[0, 20]} className="mb-4">
        <Col xs={24} md={12} className="dark-input-label">
          <p className="text-lg">
            Interview ID:{" "}
            <span className="font-bold">
              #{evaluationDetails?.data?.interviewId}
            </span>
          </p>
        </Col>
        <Col xs={24} md={12} className="dark-input-label">
          <p className="text-lg">
            Candidate Name:{" "}
            <span className="font-bold">
              {evaluationDetails?.data?.interview?.candidate?.name}
            </span>
          </p>
        </Col>
        <Col span={24} className="dark-input-label">
          <h1 className="font-semibold text-lg">Rating</h1>
          <Rate onChange={(e) => setRatings(e)}     value={ratings} />
        </Col>
      </Row>
      <Form
        form={form}
        onFinish={onFinish}
        name="UpdateEvaluation"
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

                <Col className="mb-4">
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Submitted on:{" "}
                    {moment(evaluationDetails?.data?.createdAt).format(
                      "MMM. D, YYYY | HH : MM"
                    )}
                  </span>
                </Col>

                <Col sm={24}>
                  <div className="flex gap-4 w-full">
                    <ButtonWithSvg
                      htmlType="submit"
                      icon={checkIcon}
                      title={"Update Evaluation"}
                    />
                    <AnimateButton
                      icon={<CloseOutlined />}
                      htmlType="button"
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

export default UpdateEvaluation;
