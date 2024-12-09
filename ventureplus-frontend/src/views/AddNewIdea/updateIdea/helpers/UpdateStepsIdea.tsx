import React, { useEffect, useState } from "react";
import { Button, Steps, Form } from "antd";
import IdeaStep1 from "./UpdateIdeaStep1";
import { useDispatch, useSelector } from "react-redux";
import ValidationScoreModal from "./ValidationScoreModal";

import { AppDispatch, RootState } from "../../../../redux/store";
import { useParams } from "react-router-dom";
import {
  getIdeaQuestionAndAnswerByIdApi,
  patchIdeaAnswersByIdApi,
  postIdeaIdApi,
} from "../../../../services/api/AddNewIdea";
import { rightArrowBlackIcon, rightArrowGrayIcon } from "../../../../assets";

interface Question {
  id: number;
  question: string;
  isMCQ: boolean;
  type: string;
  mcqAnswers: any[];
  title: string;
}

const StepsIdea: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const dispatch: AppDispatch = useDispatch();

  const { id } = useParams();

  const getIdeaQuestionAndAnswerById = useSelector(
    (state: RootState) => state.getIdeaQuestionAndAnswerById
  );

  const patchIdeaAnswersById = useSelector(
    (state: RootState) => state.patchIdeaAnswersById
  );

  const postIdeaId = useSelector((state: RootState) => state.postIdeaId);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<any>(null);
  const [allAnswers, setAllAnswers] = useState<any>({});

  const handleCancel = () => {
    setIsModalVisible(null);
  };

  useEffect(() => {
    if (id) {
      getIdeaQuestionAndAnswerByIdApi(dispatch, Number(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (getIdeaQuestionAndAnswerById?.data?.data?.ideaAnswersWithQuestions) {
      setQuestions(
        getIdeaQuestionAndAnswerById.data.data?.ideaAnswersWithQuestions
      );
    }
  }, [getIdeaQuestionAndAnswerById]);

  const next = async () => {
    try {
      const values = await form.validateFields();

      setAllAnswers((prevAnswers: any) => ({
        ...prevAnswers,
        ...values,
      }));

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

  const titleName = getIdeaQuestionAndAnswerById?.data?.data?.ideaValidation;

  const steps = [
    {
      title: "Problem",
      content: (
        <IdeaStep1
          title={titleName}
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
              className={`text-xs font-bold rounded-full flex items-center justify-center ${index < current
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

  const handleUpdate = async () => {
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

      await patchIdeaAnswersByIdApi(dispatch, body, Number(id), onSuccess);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  const onSuccess = (response: any) => {
    if (response?.data) {
      const ideaBody = {
        ideaValidationId: response?.data?.ideaValidationUpdated?.id,
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
    <div className="w-full ">
      <style>{customStepsStyle}</style>
      <div className="w-[30%] flex mb-4">
        <div className="px-4 py-1 border border-gray-200 rounded-full text-center">
          {steps[current].steps}
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-2 mb-3 items-center w-full">
        <div>
          <span className="font-medium lg:text-lg md:text-md text-sm lg:w-[20%] sm:w-full">
            {steps[current].description}
          </span>
        </div>
      </div>
      <div className="w-full mb-4 ">
        <Steps current={current} items={items} className="w-full" />
      </div>

      <div className="border border-gray-200 rounded-md p-5 bg-[#FFFFFF]">
        <div>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current > 0 && (
            <Button
              className="px-8"
              style={{ margin: "0 8px" }}
              onClick={() => prev()}
            >
              Back
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button
              className="px-8 bg-[#016A70] text-[#FFFFFF]"
              onClick={() => next()}
            >
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              className="px-8 bg-[#016A70] text-[#FFFFFF]"
              onClick={handleUpdate}
              loading={patchIdeaAnswersById?.loading || postIdeaId?.loading}
              disabled={patchIdeaAnswersById?.loading || postIdeaId?.loading}
            >
              Update
            </Button>
          )}
          {isModalVisible !== null && (
            <ValidationScoreModal
              data={isModalVisible}
              onCancel={handleCancel}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StepsIdea;
