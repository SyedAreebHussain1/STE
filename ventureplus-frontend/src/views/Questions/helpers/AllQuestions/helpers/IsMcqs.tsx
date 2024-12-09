import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  createAnswerApi,
  getAnswerByIdsApi,
  getQuestionByIdApi,
} from "../../../../../services/api/Question";
import { getFromStorage } from "../../../../../utils/storage";
import { Typewriter } from "../../../../../components/Typewriter";

import { motion } from 'framer-motion';
import { LoadingGIF } from "../../../../../assets";
import { clearGetAnswerByIds } from "../../../../../redux/slices/Questions/getAnswerByIdsSlice";
import { errorMessage } from "../../../../../utils/message";

const IsMcqs = ({
  data,
  dataSoucre,
  setSingleAnswer,
  setChildQuestionBoolean,
  childQuestionBoolean,
  showParent,
  singleAnswer,
  next,
  bpElement,
  childAccess,
  linkedAnswersCount,
  childStateNext,
  bpElementWithLinkedName,
  linkedName
}: any) => {
  const [selected, setSelected] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const [dataSource, setDataSource] = useState<any>([]);
  const [highlightedAnswers, setHighlightedAnswers] = useState<string[]>([]);
  const [pleaseSpecify, setPleaseSpecify] = useState<boolean>(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [suggestwithAi, setSuggestwithAi] = useState<any>([]);
  const [enterText, setEnterText] = useState<string>("");
  const business = { business: getFromStorage("business") };
  const getPlanId = getFromStorage("businessPlan");
  const currentSelectedBusinessPlan = {
    businessPlan: getPlanId,
  };
  const getCurrencies = useSelector(
    (state: RootState) => state?.getCurrencies
  );

  const getAnswerByIds = useSelector(
    (state: RootState) => state.getAnswerByIds?.data || []
  );

  useEffect(() => {
    setHighlightedAnswers([])
    // setSingleAnswer(null)
    setSuggestwithAi([])
  }, [data?.bpElement, data?.question, linkedAnswersCount, bpElement]);
  useEffect(() => {
    if (data?.question && data?.mcqAnswers.length > 0) {
      setDataSource(data?.mcqAnswers);
      // setChildQuestionBoolean(false);
    }
  }, [data.question, data?.mcqAnswers]);

  useEffect(() => {
    if (selected) {
      setSingleAnswer(selected);
    }
  }, [selected]);
  useEffect(() => {
    if (currentSelectedBusinessPlan?.businessPlan?.id && data?.id) {
      if (data?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount]) {
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
        // getAnswerByIdsApi(
        //   dispatch,
        //   {
        //     questionId: Number(data?.id),
        //     businessPlanId: Number(
        //       currentSelectedBusinessPlan?.businessPlan?.id
        //     ),
        //   },
        //   {
        //     id: Number(
        //       data?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount]?.id
        //     ),
        //     bpType:
        //       [`${str}Id`][0] === "equitie" ? "equityId" : [`${str}Id`][0],
        //   }
        // );
      } else {
        getAnswerByIdsApi(dispatch, {
          questionId: Number(data?.id),
          businessPlanId: Number(currentSelectedBusinessPlan?.businessPlan?.id),
        });
      }
    }
  }, [data?.id, data?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount], bpElement?.bpElementCount]);

  // useEffect(() => {
  //   if (getAnswerByIds?.length > 0) {
  //     const receivedAnswers = getAnswerByIds?.map((item: any) => item?.answer);
  //     setHighlightedAnswers(receivedAnswers[0]);
  //     setSelected(receivedAnswers[0]);
  //   }
  // }, [getAnswerByIds]);
  useEffect(() => {
    if (getAnswerByIds?.length > 0 && data?.preferredAnswers.length === 0) {
      const receivedAnswers = getAnswerByIds?.map((item: any) => item?.answer);
      setHighlightedAnswers(receivedAnswers[0]);
      setSelected(receivedAnswers[0]);
      if (receivedAnswers?.[0] === data?.preferredAnswer) {
        showParent();
      }
    }
  }, [getAnswerByIds]);

  function selectOpt(opt: any) {
    if (
      bpElement?.bpElementType &&
      data?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount]?.id
    ) {
      if (data?.preferredAnswers?.length !== 0) {
        const preferredAnswers = Object.keys(data?.preferredAnswers).filter(
          (val: string) => val == opt
        );
        if (
          preferredAnswers.length > 0 &&
          data?.id &&
          currentSelectedBusinessPlan?.businessPlan?.id
        ) {
          const body = {
            answers: [
              {
                answer: opt,
                [`${bpElement?.bpElementType?.slice(0, -1)}Id`]:
                  data?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount]
                    ?.id,
              },
            ],
            questionId: data?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          // createAnswerApi(dispatch, body, () => {
          // if (preferredAnswers?.length > 0) {
          //   childAccess()
          //   setHighlightedAnswers([]);
          //   setSelected(null);
          // }
          // });
          childStateNext(
            true,
            body,
            preferredAnswers,
            () => setHighlightedAnswers([]),
            () => setSelected(null)
          );
        }
      }
    } else {
      // if (data?.preferredAnswers?.length > 0) {
      const preferredAnswers = Object.keys(data?.preferredAnswers).filter(
        (val: string) => val == opt
      );
      if (
        preferredAnswers.length > 0 &&
        data?.id &&
        currentSelectedBusinessPlan?.businessPlan?.id
      ) {
        const body = {
          answers: [{ answer: opt }],
          questionId: data?.id,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        };
        // createAnswerApi(dispatch, body, () => {
        //   if (preferredAnswers?.length > 0) {
        //     setChildQuestionBoolean(true);
        //     childAccess()
        //     setHighlightedAnswers([]);
        //     setSelected(null);
        //   }
        // });

        childStateNext(
          true,
          body,
          preferredAnswers,
          () => setHighlightedAnswers([]),
          () => setSelected(null)
        );
      } else if (
        opt &&
        data?.id &&
        currentSelectedBusinessPlan?.businessPlan?.id &&
        data?.preferredAnswers?.length &&
        preferredAnswers?.length === 0
      ) {
        const body = {
          answers: [{ answer: opt }],
          questionId: data?.id,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        };
        // createAnswerApi(dispatch, body, () => {
        //   showParent()
        //   setHighlightedAnswers([])
        //   setDataSource([])
        //   setSelected(null)
        //   mcqSelect = []
        //   setSingleAnswer(null)
        //   next()
        // })
      }
      // }
    }
  }

  function suggestWithAI() {
    if (data?.autoSuggestion) {
      const aiDataBody = {
        answers: {
          topic: data?.topic?.title,
          question: data?.question,
          chapter: data?.topic?.chapter?.title,
          businessName: business?.business?.name,
          businessDescription: business?.business?.description,
          isNumber: data?.isNumber ? true : false,
          bpElement: data?.bpElement,
          city: business?.business?.city,
          country: business?.business?.country,
          currency: getCurrencies?.data?.filter((item: any) => item?.id == business?.business?.currencyId)?.[0]?.name,
          previousSuggestions: suggestwithAi?.map((item: any) => {
            return item?.answer
          }
          ),
          bpElementName: bpElementWithLinkedName || data?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount]?.name || dataSoucre?.[0]?.question?.linkedAnswers?.[
            linkedAnswersCount
          ]?.product?.name || dataSoucre?.[0]?.question?.linkedAnswers?.[
            linkedAnswersCount
          ]?.service?.name ||
            dataSoucre?.[0]?.question?.linkedAnswers?.[
              linkedAnswersCount
            ]?.staffing?.name ||
            dataSoucre?.[0]?.question?.linkedAnswers?.[
              linkedAnswersCount
            ]?.equity?.name
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
              let aiSuggest: any = [];
              for (
                let i = 0;
                i < answersArray?.filter((val: any) => val).length;
                i++
              ) {
                const element = answersArray[i];
                if (element) {
                  aiSuggest.push({ answer: element, id: i + 1 });
                }
              }
              setSuggestwithAi((pre: any) => [...pre, ...aiSuggest]);
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
    } else {
      const aiDataBody = {
        answers: {
          topic: data?.topic?.title,
          question: data?.question,
          chapter: data?.topic?.chapter?.title,
          businessName: business?.business?.name,
          businessDescription: business?.business?.description,
          isNumber: data?.isNumber ? true : false,
          bpElement: data?.bpElement,
          currency: getCurrencies?.data?.filter((item: any) => item?.id == business?.business?.currencyId)?.[0]?.name,
          city: business?.business?.city,
          country: business?.business?.country,
          previousSuggestions: suggestwithAi?.map((item: any) => {
            return item?.answer
          }
          ),
          bpElementName: bpElementWithLinkedName || data?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount]?.name || dataSoucre?.[0]?.question?.linkedAnswers?.[
            linkedAnswersCount
          ]?.product?.name || dataSoucre?.[0]?.question?.linkedAnswers?.[
            linkedAnswersCount
          ]?.service?.name ||
            dataSoucre?.[0]?.question?.linkedAnswers?.[
              linkedAnswersCount
            ]?.staffing?.name ||
            dataSoucre?.[0]?.question?.linkedAnswers?.[
              linkedAnswersCount
            ]?.equity?.name
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
              let aiSuggest: any = [];
              for (
                let i = 0;
                i < answersArray?.filter((val: any) => val).length;
                i++
              ) {
                const element = answersArray[i];
                if (element) {
                  aiSuggest.push({ answer: element, id: i + 1 });
                }
              }
              setSuggestwithAi((pre: any) => [...pre, ...aiSuggest]);
            } else {
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
  const handleSelect = (answer: string) => {
    setSelected(answer);
    setHighlightedAnswers([answer]);
    setSingleAnswer(answer)
  };

  function handleClick() {
    if (enterText) {
      setDataSource((pre: any) => [...pre, { answer: enterText }]);
      setEnterText("");
      setPleaseSpecify(false);
    }
  }
  useEffect(() => {
    if (suggestwithAi.length > 0) {
      setDataSource((prev: any) => [...prev, ...suggestwithAi]);
    }
  }, [suggestwithAi]);
  useEffect(() => {
    if (data?.autoSuggestion) {
      suggestWithAI();
    }
  }, [data?.autoSuggestion, linkedAnswersCount, bpElement, data?.id]);

  useEffect(() => {
    if (data?.preferredAnswers?.length > 0) {
      if (getAnswerByIds?.length > 0) {
        dispatch(clearGetAnswerByIds(getAnswerByIds));
        setHighlightedAnswers([]);
        setSelected(null);
        setSingleAnswer(null);
      }
    }
  }, [data?.preferredAnswers, getAnswerByIds, bpElement]);

  // useEffect(() => {
  //   if (data?.linkedAnswers?.[linkedAnswersCount]) {
  //     getQuestionByIdApi(
  //       dispatch,
  //       data?.id,
  //       currentSelectedBusinessPlan?.businessPlan?.id,
  //       () => { },
  //       Number(data?.linkedAnswers?.[linkedAnswersCount]?.id)
  //     );
  //   }
  // }, [linkedAnswersCount])

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[50%]">
          {!aiLoading ? (
            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <h2 className="font-semibold text-[#212838] text-[2.375rem]">
                  <Typewriter key={data?.question} text={data?.question} delay={30} />
                </h2>
              </div>
              <div className="w-full mt-6 ">
                <div className="mt-3 gap-5 z-10 flex flex-col items-center justify-center">
                  {dataSource
                    ?.filter(
                      (item: any, index: number, self: any) =>
                        index ===
                        self.findIndex((t: any) => t?.answer === item?.answer)
                    )
                    ?.map((item: any, i: number) => {
                      const isHighlighted = highlightedAnswers.includes(
                        item?.answer
                      );
                      return (
                        <div
                          key={i}
                          className="mt-3 gap-5 z-10 flex flex-col items-center justify-center cursor-pointer w-full"
                        >
                          <motion.div
                            className="w-full"
                            initial={{
                              opacity: 0,
                              x: -100,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{
                              opacity: 0,
                              x: 0,
                            }}
                            transition={{ duration: 2 }}
                          >
                            <div
                              onClick={() => [
                                handleSelect(item?.answer.toString()),
                                selectOpt(item?.answer.toString()),
                              ]}
                              className={
                                isHighlighted
                                  ? "bg-[#016A70] text-[#F8FAFC] font-medium text-[1.0625rem] rounded-md flex w-full text-center justify-center"
                                  : "bg-[#FFFFFF] text-[#4A5366] font-medium text-[1.0625rem] rounded-md flex w-full text-center justify-center"
                              }
                            >
                              <span className="p-4">
                                <h5>{item?.answer}</h5>
                              </span>
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                </div>
                {data?.preferredAnswers?.length === 0 || !data?.preferredAnswers ? (
                  <div className="mt-7 w-full z-20">
                    {!pleaseSpecify && (
                      <Button
                        className={
                          "bg-[#FFFFFF] text-[#4A5366] h-[48px] w-full font-semibold p-7"
                        }
                        onClick={() => setPleaseSpecify(true)}
                      >
                        <span>Other (please specify)</span>
                      </Button>
                    )}
                    {pleaseSpecify && (
                      <Input
                        name="enterText"
                        className="w-full"
                        value={enterText}
                        placeholder="Enter Text"
                        autoComplete="off"
                        type={data?.isNumber ? "number" : "text"}
                        onChange={(e: any) => setEnterText(e.target.value.toString())}
                        onKeyDown={(e: any) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleClick()
                          }
                        }}
                        suffix={
                          <Button
                            onClick={handleClick}
                            type="primary"
                            className="!h-[42px] tex-[#E3E7EF] w-[67px] !bg-[#016A70] p-3 z-10 "
                          >
                            Save
                          </Button>
                        }
                      />
                    )}
                  </div>
                ) : <></>}
                {data?.preferredAnswers?.length === 0 || !data?.preferredAnswers ? (
                  <div className="w-full mt-2  flex justify-end">
                    <Button
                      loading={aiLoading}
                      className="text-[#FFFFFF] bg-[#7A5AF8] text-[.9375rem] font-semibold p-4 h-[48px] "
                      onClick={suggestWithAI}
                    >
                      Get more suggestions
                    </Button>
                  </div>
                ) : <></>}
              </div>
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

export default IsMcqs;
