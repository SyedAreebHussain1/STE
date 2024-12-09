import React, { useEffect, useState } from "react";
import { Col, Row, Radio, Button, Input } from "antd";
import TextInput from "../../../../components/inputs/TextInput";
import IdeaCard from "./UpdateIdeaCard";
import { getFromStorage } from "../../../../utils/storage";
import { useLocation } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { getCurrenciesApi } from "../../../../services/api/currency";

const UpdateIdeaStep1 = ({
  Form,
  form,
  questions,
  isFirstStep,
  title,
}: any) => {
  const { state } = useLocation();
  const business = { business: getFromStorage("business") };
  const dispatch = useDispatch();
  const [aiLoading, setAiLoading] = useState(false);
  const [suggestwithAi, setSuggestwithAi] = useState<any>({});
  const [highlightedAnswers, setHighlightedAnswers] = useState<string>("");
  const [selectedQuestionText, setSelectedQuestionText] = useState<string>("");
  const [selectedAiAnswer, setSelectedAiAnswer] = useState<string>("");
  const [inputValues, setInputValues] = useState<any>("");

  const currencies = useSelector((state: any) => state?.getCurrencies);
  let userCurrency = currencies
    ? currencies?.data?.find(
      (element: any) => element.id === business.business?.currencyId
    ).code
    : "$";

  useEffect(() => {
    getCurrenciesApi(dispatch);
  }, []);
  useEffect(() => {
    const initialValues: any = {};

    questions.map((question: any) => {
      if (question?.userAnswer) {
        initialValues[`question_${question.id}`] = question?.userAnswer?.answer;
      }
    });

    form.setFieldsValue({
      ...initialValues,
      idea: title?.title,
      description: title?.description,
    });
  }, [form, questions, title]);

  const handleAi = (
    questionId: number,
    questionAi: string,
    questionNumberType: any
  ) => {
    const ideaName =
      form.getFieldValue("idea") == undefined
        ? null
        : form.getFieldValue("idea");
    const ideaDescription =
      form.getFieldValue("description") == undefined
        ? null
        : form.getFieldValue("description");
    const aiDataBody = {
      input: {
        businessName: business?.business?.name
          ? business?.business?.name
          : state?.businessName,
        businessDescription: business?.business?.description
          ? business?.business?.description
          : state?.businessDescription,
        industry: business?.business?.industry
          ? business?.business?.industry
          : state?.businessIndustry,
        ideaName: ideaName,
        ideaDescription: ideaDescription,
        ideaSolvingAnswer: selectedAiAnswer,
        ideaSolvingQuestion: selectedQuestionText,
        numberType: questionNumberType,
        question: questionAi,
      },
    };

    if (aiDataBody) {
      setAiLoading(true);
      fetch(
        `${import.meta.env.VITE_BASE_URL_LAMDA}/IdeaValidationAnswerSuggestion`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(aiDataBody),
        }
      )
        .then(function (res) {
          return res.json();
        })
        .then(function (res: any) {
          setAiLoading(false);
          const answersArray = Object.values(res);
          setSuggestwithAi((prev: any) => ({
            ...prev,
            [questionId]: answersArray,
          }));
        })
        .catch(function (res) {
          setAiLoading(false);
        });
    }

  };

  const handleSelect = (questionId: number, answer: string) => {
    setHighlightedAnswers(answer);
    if (questionId == 2 && selectedAiAnswer == "") {
      setSelectedAiAnswer(answer);
    }

    setSelectedQuestionText("What is the problem the idea is solving?");
    form.setFieldsValue({
      [`question_${questionId}`]: answer,
    });
    setInputValues((prev: any) => ({
      ...prev,
      [questionId]: String(answer),
    }));
  };

  const handleInputChange = (e: any, questionId: number, question: string) => {
    const value = e.target.value;
    form.setFieldsValue({
      [`question_${questionId}`]: value,
    });
    setInputValues((prev: any) => ({
      ...prev,
      [questionId]: value,
    }));
    if (questionId == 2) {
      setSelectedQuestionText(question);
      setSelectedAiAnswer(value);
    }
  };

  return (
    <React.Fragment>
      <Row gutter={16} className="flex justify-between">
        <Col lg={24} md={24} sm={24}>
          <Form
            form={form}
            name="Submit idea2"
            initialValues={{ remember: true }}
          >
            {isFirstStep && (
              <>
                <h1 className="text-[#212838] md:text-lg text-md font-medium mb-2">
                  Enter Idea Name
                </h1>
                <Form.Item
                  name="idea"
                  rules={[
                    { required: true, message: "Please input the idea!" },
                  ]}
                >
                  <TextInput
                    placeholder="Idea"
                    className="w-full sm:w-[100%] h-[50px]"
                  />
                </Form.Item>
                <h1 className="text-[#212838] md:text-lg text-md font-medium mb-2">
                  Give Description of Your Idea
                </h1>
                <Form.Item
                  name="description"
                  rules={[
                    {
                      required: true,
                      message: "Please input the description!",
                    },
                  ]}
                >
                  <TextArea
                    rows={4}
                    name="description"
                    placeholder="Description"
                  />
                </Form.Item>
              </>
            )}

            {questions.map((question: any) => (
              <div key={question.id}>
                <h1 className="text-[#212838] md:text-lg text-md font-medium mb-2">
                  {question.question}
                </h1>
                {question.isMCQ ? (
                  <Form.Item
                    name={`question_${question.id}`}
                    rules={[
                      { required: true, message: "Please select an option!" },
                    ]}
                  >
                    <Radio.Group className="w-full green-radio-group">
                      {question.mcqAnswers.map((answer: any) => (
                        <Radio
                          key={answer.id}
                          value={answer.answer}
                          className="green-radio border border-[#999985] font-medium p-3 rounded-lg w-[50%] text-[#4A5366] mb-2"
                        >
                          {answer.answer}
                        </Radio>
                      ))}
                    </Radio.Group>
                  </Form.Item>
                ) : (
                  <Form.Item
                    name={`question_${question.id}`}
                    rules={[
                      {
                        required: true,
                        message: "Please input the required data",
                      },
                    ]}
                  >
                    <Input
                      value={inputValues[question.id]}
                      name={`answer_${question.id}`}
                      placeholder="Enter Text"
                      type="text"
                      autoComplete="off"
                      className="p-2 border border-[#D9D9D9]"
                      onChange={(e) =>
                        handleInputChange(e, question.id, question?.question)
                      }
                      suffix={
                        <Button
                          type="primary"
                          className="!h-[32px] tex-[#E3E7EF] w-[120px] !bg-[#7A5AF8] py-5 px-4 z-10"
                          onClick={() =>
                            handleAi(
                              question.id,
                              question.question.replace("$", userCurrency),
                              question?.numberType
                            )
                          }
                          loading={aiLoading}
                          disabled={aiLoading}
                        >
                          Suggest With AI
                        </Button>
                      }
                    />
                    {suggestwithAi[question.id]?.length > 0 && (
                      <div className="flex flex-col gap-3 mt-2">
                        <h1 className="text-lg font-bold">Suggested Answers</h1>

                        {suggestwithAi[question.id]?.map(
                          (answerItems: string, i: number) => {
                            const isHighlighted =
                              String(highlightedAnswers) ===
                              String(answerItems);
                            return (
                              <div
                                key={i}
                                onClick={() =>
                                  handleSelect(question.id, answerItems)
                                }
                                className={`${isHighlighted
                                  ? "bg-[#016A70] text-[#F8FAFC] cursor-pointer"
                                  : "bg-[#a9a9a917] text-[#4A5366] cursor-pointer"
                                  } font-medium text-[1.0625rem] rounded-md flex w-full text-start p-2 justify-start border border-2`}
                              >
                                {answerItems}
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                  </Form.Item>
                )}
              </div>
            ))}
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default UpdateIdeaStep1;
