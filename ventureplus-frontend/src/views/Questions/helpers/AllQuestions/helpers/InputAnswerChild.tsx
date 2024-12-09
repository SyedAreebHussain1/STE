import TextArea from "antd/es/input/TextArea";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { useEffect, useState } from "react";
import { getAnswerByIdsApi } from "../../../../../services/api/Question";
import { errorMessage } from "../../../../../utils/message";
import { getFromStorage } from "../../../../../utils/storage";
import TextInput from "../../../../../components/inputs/TextInput";
import { Typewriter } from "../../../../../components/Typewriter";
import { LoadingGIF } from "../../../../../assets";

const InputAnswerChild = ({
  data,
  Form,
  form,
  dataSoucre,
  bpElementCount,
  current,
  bpElement,
  setInputAnswer,
  inputAnswer,
  bpElementWithLinkedName,
}: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [answerValue, setAnswerValue] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [suggestanswer, setSuggestanswer] = useState<any>([]);

  const business = { business: getFromStorage("business") };
  const getCurrencies = useSelector((state: RootState) => state?.getCurrencies);
  const getPlanId = getFromStorage("businessPlan");
  const currentSelectedBusinessPlan = {
    businessPlan: getPlanId,
  };
  // useEffect(() => {
  //     setSuggestanswer([]);
  //     // setAnswerValue("");
  //     // form.resetFields();
  // }, [bpElementCount, current, data?.bpElement, data?.id]);

  useEffect(() => {
    if (currentSelectedBusinessPlan?.businessPlan?.id && data?.id) {
      if (dataSoucre?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount]) {
        const keys = Object.keys(dataSoucre);
        const nameEnum: any = keys.filter((item: string, i: number) => {
          return (
            item == "products" ||
            item == "staffings" ||
            item == "equities" ||
            item == "services"
          );
        });
        let str = nameEnum?.[0];
        str = str?.slice(0, -1);
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
              dataSoucre?.[bpElement?.bpElementType]?.[
                bpElement?.bpElementCount
              ]?.id
            ),
            bpType:
              [`${str}Id`][0] === "equitie" ? "equityId" : [`${str}Id`][0],
          }
        );
      } else {
        getAnswerByIdsApi(dispatch, {
          questionId: Number(data?.id),
          businessPlanId: Number(currentSelectedBusinessPlan?.businessPlan?.id),
        });
      }
    }
  }, [data?.id, dataSoucre?.[bpElement?.bpElementType]]);

  useEffect(() => {
    if (data?.autoSuggestion) {
      if (dataSoucre?.childQuestions?.[0]) {
        const aiDataBody = {
          answers: {
            topic: data?.topic?.title || dataSoucre?.topic?.title,
            question: data?.question,
            chapter:
              data?.topic?.chapter?.title || dataSoucre?.topic?.chapter?.title,
            businessName: business?.business?.name,
            businessDescription: business?.business?.description,
            isNumber: data?.isNumber ? true : false,
            city: business?.business?.city,
            country: business?.business?.country,
            currency: getCurrencies?.data?.filter(
              (item: any) => item?.id == business?.business?.currencyId
            )?.[0]?.name,
            previousSuggestions: suggestanswer,
            bpElement: dataSoucre?.bpElement,
            bpElementName: bpElementWithLinkedName,
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
                setSuggestanswer((pre: any) => [...pre, ...answersArray]);
              } else {
                setAiLoading(false);
                const error: any = Object.values(res)[0];
                errorMessage(error);
              }
            })
            .catch(function (res) {
              setAiLoading(false);
            });
        } else {
          errorMessage("Enter Question prompt");
        }
      }
    }
  }, [data?.question, data?.bpElement, data?.autoSuggestion]);

  function suggestWithAI() {
    if (dataSoucre?.childQuestions?.[0]) {
      const aiDataBody = {
        answers: {
          topic: data?.topic?.title || dataSoucre?.topic?.title,
          question: data?.question,
          chapter:
            data?.topic?.chapter?.title || dataSoucre?.topic?.chapter?.title,
          businessName: business?.business?.name,
          businessDescription: business?.business?.description,
          isNumber: data?.isNumber ? true : false,
          city: business?.business?.city,
          country: business?.business?.country,
          previousSuggestions: suggestanswer,
          currency: getCurrencies?.data?.filter(
            (item: any) => item?.id == business?.business?.currencyId
          )?.[0]?.name,
          bpElement: dataSoucre?.bpElement,
          bpElementName: bpElementWithLinkedName,
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
              setSuggestanswer((pre: any) => [...pre, ...answersArray]);
            } else {
              setAiLoading(false);
              const error: any = Object.values(res)[0];
              errorMessage(error);
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
          topic: data?.topic?.title || dataSoucre?.topic?.title,
          question: data?.question,
          chapter:
            data?.topic?.chapter?.title || dataSoucre?.topic?.chapter?.title,
          businessName: business?.business?.name,
          businessDescription: business?.business?.description,
          isNumber: data?.isNumber ? true : false,
          currency: getCurrencies?.data?.filter(
            (item: any) => item?.id == business?.business?.currencyId
          )?.[0]?.name,
          city: business?.business?.city,
          country: business?.business?.country,
          previousSuggestions: suggestanswer,
          bpElement: dataSoucre?.bpElement,
          bpElementName: bpElementWithLinkedName,
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
              setSuggestanswer((pre: any) => [...pre, ...answersArray]);
            } else {
              const error: any = Object.values(res)[0];
              errorMessage(error);
            }
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
      <div className="flex justify-center  ">
        <div className="w-[50%]">
          {!aiLoading ? (
            <div>
              <h2 className="font-semibold text-[#212838] text-[2.375rem]">
                <Typewriter
                  key={data?.question}
                  text={data?.question}
                  delay={30}
                />
              </h2>
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
                  <h2>Suggested Answer</h2>
                  {suggestanswer
                    ?.filter((item: string) => item)
                    .map((val: string, i: number) => {
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

export default InputAnswerChild;
