import TextArea from "antd/es/input/TextArea";
import { Button, Col, Input, Row, Spin, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { useEffect, useState } from "react";
import {
  getAnswerByIdsApi,
  getQuestionByIdApi,
} from "../../../../../services/api/Question";
import { errorMessage } from "../../../../../utils/message";
import { getFromStorage } from "../../../../../utils/storage";
import TextInput from "../../../../../components/inputs/TextInput";
import { Typewriter } from "../../../../../components/Typewriter";
import { LoadingGIF } from "../../../../../assets";
const InputAnswer = ({
  data,
  Form,
  form,
  dataSoucre,
  bpElementCount,
  current,
  bpElement,
  setInputAnswer,
  inputAnswer,
  linkedAnswersCount,
  bpElementWithLinkedName,
  linkedName
}: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [answerValue, setAnswerValue] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [suggestanswer, setSuggestanswer] = useState<any>([]);
  const getAnswerByIds = useSelector(
    (state: RootState) => state.getAnswerByIds?.data || []
  );

  const business = { business: getFromStorage("business") };
  const getCurrencies = useSelector(
    (state: RootState) => state?.getCurrencies
  );
  const businessDes = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );
  const getPlanId = getFromStorage("businessPlan");
  const currentSelectedBusinessPlan = {
    businessPlan: getPlanId,
  };



  useEffect(() => {
    if (data?.question) {
      setSuggestanswer([]);
      setInputAnswer("")
      setAnswerValue("")
      form.resetFields();
    }
  }, [data?.question, data?.linkedAnswers?.[linkedAnswersCount], bpElementWithLinkedName, bpElement?.bpElementCount])

  useEffect(() => {
    setSuggestanswer([]);
    form.resetFields();
  }, [bpElementCount, getAnswerByIds, current, data?.bpElement, data?.question, linkedAnswersCount]);
  useEffect(() => {
    if (currentSelectedBusinessPlan?.businessPlan?.id && data?.id && !data?.bpElement) {
      getAnswerByIdsApi(dispatch, {
        questionId: Number(data?.id),
        businessPlanId: Number(currentSelectedBusinessPlan?.businessPlan?.id),
      });
    }
  }, [data?.id]);

  useEffect(() => {
    if (currentSelectedBusinessPlan?.businessPlan?.id && data?.id) {
      if (
        data?.linkedAnswers?.length > 0 &&
        data?.linkedAnswers?.[linkedAnswersCount]?.id
      ) {
        const ids = {
          questionId: Number(data?.id),
          businessPlanId: Number(currentSelectedBusinessPlan?.businessPlan?.id),
          answerId: data?.linkedAnswers?.[linkedAnswersCount]?.id
        }
        // getAnswerByIdsApi(dispatch, ids, undefined, "getOneLinkedAnswer");
      } else if (data?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount]) {
        const keys = Object.keys(data);
        const nameEnum: any = keys.filter((item: string, i: number) => {
          return (
            item == "products" ||
            item == "staffings" ||
            item == "equities" ||
            item == "services"
          );
        });
        let str = nameEnum?.[0];
        str = str.slice(0, -1);
        getAnswerByIdsApi(
          dispatch,
          {
            questionId: Number(data?.id),
            businessPlanId: Number(
              currentSelectedBusinessPlan?.businessPlan?.id
            ),
          },
          {
            id: Number(
              data?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount]?.id
            ),
            bpType:
              [`${str}Id`][0] === "equitie" ? "equityId" : [`${str}Id`][0],
          }
        );
      } else {
        if (!data?.linkedAnswers?.[linkedAnswersCount]) {
          getAnswerByIdsApi(dispatch, {
            questionId: Number(data?.id),
            businessPlanId: Number(
              currentSelectedBusinessPlan?.businessPlan?.id
            ),
          });
        }
      }
    }
  }, [data?.id, dataSoucre]);

  useEffect(() => {
    if (data?.autoSuggestion) {
      if (dataSoucre?.childQuestions?.[0]) {
        const aiDataBody = {
          answers: {
            topic: data?.topic?.title,
            question: data?.question,
            chapter: data?.topic?.chapter?.title,
            businessName: business?.business?.name,
            businessDescription: business?.business?.description,
            isNumber: data?.isNumber ? true : false,
            linkedAnswer: data?.linkedAnswers?.[linkedAnswersCount]?.answer || linkedName || dataSoucre?.[0]?.question?.linkedAnswers?.[
              linkedAnswersCount
            ]?.answer,
            currency: getCurrencies?.data?.filter((item: any) => item?.id == business?.business?.currencyId)?.[0]?.name,
            bpElement: data?.bpElement,
            city: business?.business?.city,
            country: business?.business?.country,
            previousSuggestions: suggestanswer,
            bpElementName: bpElementWithLinkedName
          },
        };
        if (aiDataBody?.answers) {
          setAiLoading(true);
          fetch(`${import.meta.env.VITE_BASE_URL_LAMDA}/suggestanswer`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(aiDataBody),
          })
            .then(function (res) {
              return res.json();
            })
            .then(function (res) {
              if (Object.keys(res)[0] !== "detail") {
                setAiLoading(false);
                const answersArray = Object.values(res);
                setSuggestanswer(answersArray);
              } else {
                setAiLoading(false);
                const error: any = Object.values(res)[0]
                errorMessage(error)
              }
            })
            .catch(function (res) {
              setAiLoading(false);
            });
        } else {
          errorMessage("Enter Question prompt");
        }
      } else {
        const aiDataBody = {
          answers: {
            topic: data?.topic?.title,
            question: data?.question,
            chapter: data?.topic?.chapter?.title,
            businessName: business?.business?.name,
            businessDescription: business?.business?.description,
            isNumber: data?.isNumber ? true : false,
            linkedAnswer: data?.linkedAnswers?.[linkedAnswersCount]?.answer || linkedName || dataSoucre?.[0]?.question?.linkedAnswers?.[
              linkedAnswersCount
            ]?.answer,
            bpElement: data?.bpElement,
            currency: getCurrencies?.data?.filter((item: any) => item?.id == business?.business?.currencyId)?.[0]?.name,
            city: business?.business?.city,
            country: business?.business?.country,
            previousSuggestions: suggestanswer,
            bpElementName: bpElementWithLinkedName
          },
        };
        if (aiDataBody?.answers) {
          setAiLoading(true);
          fetch(`${import.meta.env.VITE_BASE_URL_LAMDA}/suggestanswer`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(aiDataBody),
          })
            .then(function (res) {
              return res.json();
            })
            .then(function (res) {
              if (Object.keys(res)[0] !== "detail") {
                setAiLoading(false);
                const answersArray = Object.values(res);
                setSuggestanswer(answersArray);
              } else {
                setAiLoading(false);
                const error: any = Object.values(res)[0]
                errorMessage(error)
              }
            })
            .catch(function (res) {
              setAiLoading(false);
            });
        }
      }
    }
  }, [data?.question, data?.bpElement, linkedAnswersCount, data?.autoSuggestion]);

  function suggestWithAI() {
    if (dataSoucre?.childQuestions?.[0]) {
      const aiDataBody = {
        answers: {
          topic: data?.topic?.title,
          question: data?.question,
          chapter: data?.topic?.chapter?.title,
          businessName: business?.business?.name,
          businessDescription: business?.business?.description,
          isNumber: data?.isNumber ? true : false,
          linkedAnswer: data?.linkedAnswers?.[linkedAnswersCount]?.answer || linkedName || dataSoucre?.[0]?.question?.linkedAnswers?.[
            linkedAnswersCount
          ]?.answer,
          bpElement: data?.bpElement,
          currency: getCurrencies?.data?.filter((item: any) => item?.id == business?.business?.currencyId)?.[0]?.name,
          city: business?.business?.city,
          country: business?.business?.country,
          previousSuggestions: suggestanswer,
          bpElementName: bpElementWithLinkedName
        },
      };
      if (aiDataBody?.answers) {
        setAiLoading(true);
        fetch(`${import.meta.env.VITE_BASE_URL_LAMDA}/suggestanswer`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(aiDataBody),
        })
          .then(function (res) {
            return res.json();
          })
          .then(function (res) {
            setAiLoading(false);
            const answersArray = Object.values(res);
            setSuggestanswer((pre: any) => [...pre, ...answersArray]);
          })
          .catch(function (res) {
            setAiLoading(false);
          });
      } else {
        errorMessage("Enter Question prompt");
      }
    } else {
      const aiDataBody = {
        answers: {
          topic: data?.topic?.title,
          question: data?.question,
          chapter: data?.topic?.chapter?.title,
          businessName: business?.business?.name,
          businessDescription: business?.business?.description,
          isNumber: data?.isNumber ? true : false,
          linkedAnswer: data?.linkedAnswers?.[linkedAnswersCount]?.answer || linkedName || dataSoucre?.[0]?.question?.linkedAnswers?.[
            linkedAnswersCount
          ]?.answer,
          bpElement: data?.bpElement,
          currency: getCurrencies?.data?.filter((item: any) => item?.id == business?.business?.currencyId)?.[0]?.name,
          city: business?.business?.city,
          country: business?.business?.country,
          previousSuggestions: suggestanswer,
          bpElementName: bpElementWithLinkedName
        },
      };
      if (aiDataBody?.answers) {
        setAiLoading(true);
        fetch(`${import.meta.env.VITE_BASE_URL_LAMDA}/suggestanswer`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(aiDataBody),
        })
          .then(function (res) {
            return res.json();
          })
          .then(function (res) {
            setAiLoading(false);
            const answersArray = Object.values(res);
            setSuggestanswer((pre: any) => [...pre, ...answersArray]);
          })
          .catch(function (res) {
            setAiLoading(false);
          });
      } else {
        errorMessage("Enter Question prompt");
      }
    }
  }
  function handleSelector(e: string) {
    if (e) {
      form.setFieldsValue({
        answer: e,
      });
      setInputAnswer(e);
      setAnswerValue(e);
    }
  }


  return (
    <>
      <div className="flex justify-center ">
        <div className="w-[50%]">
          {!aiLoading ? (
            <div>
              <div className="containerForAnimationQuestion">
                <h2 className="font-semibold text-[#212838] text-[2.375rem] typed-out">
                  <Typewriter text={data?.question} delay={30} />
                </h2>
              </div>
              <div className="w-full">
                {data?.isNumber ? (
                  <TextInput
                    placeholder="Enter Answer"
                    value={inputAnswer}
                    size="large"
                    onChange={(e) => {
                      let value: any = e.target.value;
                      setAnswerValue(value);
                      setInputAnswer(value);
                    }}
                    onKeyDown={(e: any) => {
                      const regex = /[0-9]/;
                      if (e.code === "Space") {
                        e.preventDefault();

                        return;
                      }
                      const allowedKeys = [
                        "Backspace",
                        "Shift",
                        "ArrowLeft",
                        "ArrowRight",
                        "ArrowUp",
                        "ArrowDown",
                        "Tab",
                      ];
                      if (allowedKeys.includes(e.key)) {
                        return;
                      }
                      if (!regex.test(e.key)) {
                        e.preventDefault();
                        return;
                      }
                    }}
                    required
                    name="answer"
                    className="min-h-[50px] dark-input"
                  />
                ) : (
                  <Form.Item name="answer">
                    <TextArea
                      placeholder="Enter Answer"
                      value={inputAnswer}
                      autoSize={{ minRows: 6, maxRows: 5 }}
                      onChange={(e) => {
                        const value = e.target.value;
                        setAnswerValue(value);
                        setInputAnswer(value);
                      }}
                      required
                      name="answer"
                      className="min-h-[48px] dark-input"
                    />
                  </Form.Item>
                )}
              </div>
              <div className="w-full mt-2  flex justify-end">
                <Button
                  loading={aiLoading}
                  className="text-[#FFFFFF] z-20 bg-[#7A5AF8] text-[.9375rem] font-semibold p-4 h-[48px] "
                  onClick={suggestWithAI}
                >
                  Suggest with AI
                </Button>
              </div>
              {suggestanswer?.length > 0 && (
                <div className="flex flex-col gap-4 mt-8 p-2">
                  {suggestanswer?.filter((item: any, index: any, self: any) =>
                    index === self.findIndex((t: any) => t === item)
                  )?.map((val: string, i: number) => {
                    return (
                      <div
                        key={i}
                        className="mt-3 gap-5 z-10 flex flex-col items-center justify-center cursor-pointer w-full"
                      >
                        <div
                          className={
                            answerValue == val
                              ? "bg-[#016A70] text-[#F8FAFC] font-medium text-[1.0625rem] rounded-md flex w-full text-center justify-center"
                              : "bg-[#FFFFFF] text-[#4A5366] font-medium text-[1.0625rem] rounded-md flex w-full text-center justify-center"
                          }
                          onClick={() => handleSelector(val.toString())}
                        >
                          <span className="p-4">{val}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center">
              <img
                src={LoadingGIF}
                style={{ width: "220px", height: "150px" }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InputAnswer;
