import React, { useEffect, useState } from "react";
import { Button, Steps, Form } from "antd";
import IdeaStep1 from "./IdeaStep1";
import { useDispatch, useSelector } from "react-redux";
import ValidationScoreModal from "./ValidationScoreModal";
import {
  getIdeaQuestionApi,
  postIdeaIdApi,
  submitIdeaAnswersApi,
} from "../../../services/api/AddNewIdea";
import { AppDispatch, RootState } from "../../../redux/store";
import { useLocation, useNavigate } from "react-router-dom";
import { getFromStorage } from "../../../utils/storage";
import SignUpModal from "../../SignUpModal";
import { rightArrowBlackIcon, rightArrowGrayIcon } from "../../../assets";

interface Question {
  id: number;
  question: string;
  isMCQ: boolean;
  type: string;
  mcqAnswers: any[];
}

const StepsIdea = ({ valueData }: any) => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(
    (state: RootState) => state.submitIdeaAnswers
  );

  const postIdeaId = useSelector((state: RootState) => state.postIdeaId);

  const { state } = useLocation();
  const token = getFromStorage("token");
  const ideaValidationId = state;

  const getIdeaQuestion = useSelector(
    (state: RootState) => state.getIdeaQuestion
  );

  const [questions, setQuestions] = useState<Question[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<any>(null);
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
  const [allAnswers, setAllAnswers] = useState<any>({});
  const [ideaName, setIdeaName] = useState<string>("");
  const [bodyData, setBodyData] = useState<any>({});
  const [stateData, setStateData] = useState<any>([]);

  const handleCancel = () => {
    setIsModalVisible(null);
    if (ideaValidationId) {
      navigate("/idea-evaluation", { state: { id: ideaValidationId } });
    }
  };

  const handleSignUpModalCancel = () => {
    setIsSignUpModalVisible(false);
  };

  useEffect(() => {
    getIdeaQuestionApi(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (getIdeaQuestion?.data?.data) {
      setQuestions(getIdeaQuestion.data.data);
    }
  }, [getIdeaQuestion]);

  const next = async () => {
    try {
      const values = await form.validateFields();

      setAllAnswers((prevAnswers: any) => ({
        ...prevAnswers,
        ...values,
      }));

      setStateData((pre: any) => [...pre, valueData]);

      setCurrent(current + 1);
    } catch (error) {
      console.error("Form validation failed:", error);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const getStepClass = (index: any) => {
    if (index < current) {
      return "bg-[#016A70] text-gray-100";
    } else if (index === current) {
      return "bg-[#016A70] text-[#FFFFFF]";
    } else {
      return "bg-gray-200 text-gray-350";
    }
  };

  const getQuestionsByType = (type: string) => {
    return questions.filter((question) => question.type === type);
  };

  const steps = [
    {
      title: "Problem",
      content: (
        <IdeaStep1
          Form={Form}
          form={form}
          questions={getQuestionsByType("Problem")}
          isFirstStep={true}
        />
      ),
      description: "Problem Statement - Identifying the Core Issue",
      steps: "Step 1",
    },
    {
      title: "Client",
      content: (
        <IdeaStep1
          Form={Form}
          form={form}
          questions={getQuestionsByType("Client")}
          isFirstStep={false}
          valueData={valueData}
        />
      ),
      description: "Customer Readiness - Assessing Adaptability, and Value",
      steps: "Step 2",
    },
    {
      title: "Market",
      content: (
        <IdeaStep1
          Form={Form}
          form={form}
          questions={getQuestionsByType("Market")}
          isFirstStep={false}
          valueData={valueData}
        />
      ),
      description: "Market Analysis - Segment, Size, and Growth",
      steps: "Step 3",
    },
    {
      title: "Pricing",
      content: (
        <IdeaStep1
          Form={Form}
          form={form}
          questions={getQuestionsByType("Pricing")}
          isFirstStep={false}
          valueData={valueData}
        />
      ),
      description: "Revenue Model - Type, Frequency and Financials",
      steps: "Step 4",
    },
    {
      title: "Product",
      content: (
        <IdeaStep1
          Form={Form}
          form={form}
          questions={getQuestionsByType("Product")}
          isFirstStep={false}
          valueData={valueData}
        />
      ),
      description: "Product Details - Features, Specifications",
      steps: "Step 5",
    },
    {
      title: "Plan",
      content: (
        <IdeaStep1
          Form={Form}
          form={form}
          questions={getQuestionsByType("Plan")}
          isFirstStep={false}
          valueData={valueData}
        />
      ),
      description: "Timeliness and Sales - Development and Revenue",
      steps: "Step 6",
    },
  ];

  const items = steps.map((item, index) => ({
    key: item.title,
    title: (
      <div className="flex items-center justify-center gap-2 min-w-[145px] mr-2">
        <div className="flex items-center justify-center">
          <div
            className={`flex items-center justify-center gap-2 lg:text-base md:text-[15px] text-xs px-3 py-1 rounded-full w-[120px] ${getStepClass(
              index
            )}`}
          >
            <div
              className={`text-xs font-bold rounded-full flex items-center justify-center ${
                index < current
                  ? "text-[10px] border border-2 px-[5px] py-[2px]"
                  : index === current
                  ? "bg-primary h-[15px] w-[15px] text-body border-4 border-[#FFFFFF]"
                  : "bg-gray-200 h-[15px] w-[15px] text-body border-4 border-primary"
              }`}
            >
              {index < current ? "✔" : ""}
            </div>
            <span>{item.title} </span>
          </div>
        </div>
        <div className="w-5">
          {index < steps.length - 1 && (
            <img
              src={index <= current ? rightArrowBlackIcon : rightArrowGrayIcon}
              alt=""
              className="w-full"
            />
          )}
        </div>
      </div>
    ),
    icon: <span className="hidden" />,
  }));

  const customStepsStyle = `
    .ant-steps-item-icon {
      display: none !important; 
    }
  `;

  const handleDone = async () => {
    try {
      const values = await form.validateFields();

      const finalAnswers = {
        ...allAnswers,
        ...values,
      };

      const ideaAnswersMap = new Map<number | string, string>();
      let ideaTitle = finalAnswers.idea || "";
      let ideaDescription = finalAnswers.description || "";

      Object.keys(finalAnswers).forEach((key) => {
        if (key !== "idea" && key !== "description") {
          const questionId = parseInt(key.split("_")[1]);
          ideaAnswersMap.set(questionId, finalAnswers[key]);
        }
      });

      setIdeaName(ideaTitle);

      const ideaAnswers = Array.from(
        ideaAnswersMap,
        ([ideaQuestionId, answer]) => ({
          answer,
          ideaQuestionId,
        })
      );

      const body = {
        title: ideaTitle,
        description: ideaDescription,
        ideaAnswers,
      };

      setBodyData(body);

      if (!token) {
        setIsSignUpModalVisible(true);
        return;
      }

      await submitIdeaAnswersApi(body, dispatch, onSuccess);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  const onSuccess = (response: any) => {
    if (response?.data) {
      const ideaBody = {
        ideaValidationId: response?.data?.ideaValidationData?.id,
      };

      postIdeaIdApi(ideaBody, dispatch, onIdeaSuccess);
    }
  };

  const onIdeaSuccess = (response: any) => {
    if (response?.data) {
      setIsModalVisible(response?.data);
    }
  };

  return (
    <div className="w-full sm:p-3 p-1">
      <style>{customStepsStyle}</style>
      <div className="w-[30%] flex mb-4">
        <div className="px-4 py-1 border border-gray-200 rounded-full text-center">
          {steps[current].steps}
        </div>
      </div>

      <div className="sm:flex hidden lg:flex-row flex-col gap-2 mb-3 items-center w-full">
        <div>
          <span className="font-medium lg:text-lg md:text-md text-sm lg:w-[20%] sm:w-full">
            {steps[current].description}
          </span>
        </div>
      </div>
      <div className="w-full sm:block hidden mb-4 overflow-x-auto custom-scrollbar py-2">
        <Steps
          current={current}
          items={items}
          className="w-fit flex items-center !p-0 !m-0"
        />
      </div>

      <div className="border border-strokes rounded-md p-5 bg-[#FFFFFF]">
        <div>{steps[current].content}</div>
        <div style={{ marginTop: 24 }} className="flex justify-between">
          {current > 0 && (
            <Button
              className="px-8 py-4"
              style={{ margin: "0 8px" }}
              onClick={() => prev()}
            >
              Back
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button
              className="px-8 py-4 bg-[#016A70] text-[#FFFFFF]"
              onClick={() => next()}
            >
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              className="px-8 bg-[#016A70] text-[#FFFFFF]"
              onClick={handleDone}
              loading={loading || postIdeaId?.loading}
              disabled={loading || postIdeaId?.loading}
            >
              Done
            </Button>
          )}
          {isModalVisible !== null && (
            <ValidationScoreModal
              data={isModalVisible}
              onCancel={handleCancel}
            />
          )}
          <SignUpModal
            isVisible={isSignUpModalVisible}
            onCancel={handleSignUpModalCancel}
            valueData={valueData}
            bodyData={bodyData}
            title={ideaName}
          />
        </div>
      </div>
    </div>
  );
};

export default StepsIdea;
