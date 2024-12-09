import { Button, Form, Input, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../redux/store";
import {
  getAnswerByIdsApi,
} from "../../../../../services/api/Question";
import { getFromStorage } from "../../../../../utils/storage";
import { motion } from "framer-motion";
import { LoadingGIF } from "../../../../../assets";
import { Typewriter } from "../../../../../components/Typewriter";
import { errorMessage } from "../../../../../utils/message";
import { useParams } from "react-router-dom";

const IsChoose = ({
  data,
  setMultiAnswer,
  multiAnswer,
  current,
  dataSoucre,
  bpElement,
  linkedAnswersCount,
  bpElementWithLinkedName,
  linkedName,
  currentTopic,
  topicIds
}: any) => {
  const dispatch: AppDispatch = useDispatch();
  const apiCallRef = useRef(false);
  const params = useParams()
  const [mcqAnswer, setMcqAnswer] = useState<any>([]);
  const [enterText, setEnterText] = useState<string>("");
  const [pleaseSpecify, setPleaseSpecify] = useState<boolean>(false);
  const [aiLoading, setAiLoading] = useState(false);
  const business = { business: getFromStorage("business") };
  const getPlanId = getFromStorage("businessPlan");
  const currentSelectedBusinessPlan = {
    businessPlan: getPlanId
  }
  const getAnswerByIds = useSelector(
    (state: RootState) => state.getAnswerByIds?.data || []
  );
  const getQuestionById = useSelector(
    (state: RootState) => state?.getQuestionById
  );
  const getCurrencies = useSelector(
    (state: RootState) => state?.getCurrencies
  );

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
      }
    }
  }, [data?.id, data?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount], bpElement?.bpElementCount, bpElement?.bpElementType]);




  useEffect(() => {
    if (
      currentSelectedBusinessPlan?.businessPlan?.id &&
      data?.id &&
      !data.bpElement && !data?.isLinked
    ) {
      getAnswerByIdsApi(dispatch, {
        questionId: Number(data?.id),
        businessPlanId: Number(currentSelectedBusinessPlan?.businessPlan?.id),
      });
    }
  }, [data?.id, currentSelectedBusinessPlan?.businessPlan?.id]);
  useEffect(() => {
    if (data?.autoSuggestion && data?.id && getQuestionById?.data?.question === data?.question) {
      const aiDataBody = {
        answers: {
          topic: data?.topic?.title,
          question: data?.question,
          chapter: data?.topic?.chapter?.title,
          businessName: business?.business?.name,
          businessDescription: business?.business?.description,
          currency: getCurrencies?.data?.filter((item: any) => item?.id == business?.business?.currencyId)?.[0]?.name,
          isNumber: data?.isNumber ? true : false,
          linkedAnswer: data?.linkedAnswers?.[linkedAnswersCount]?.answer || linkedName || dataSoucre?.[0]?.question?.linkedAnswers?.[
            linkedAnswersCount
          ]?.answer,
          bpElement: data?.bpElement,
          city: business?.business?.city,
          country: business?.business?.country,
          previousSuggestions: mcqAnswer?.map((item: any) => {
            return item?.answer
          }
          ),
          bpElementName: bpElementWithLinkedName
        },
      };
      if (aiDataBody?.answers) {
        setAiLoading(true);
        fetch(`${import.meta.env.VITE_BASE_URL_LAMDA}/suggestanswer`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(aiDataBody),
        })
          .then((res) => res.json())
          .then((res) => {
            if (Object.keys(res)[0] !== "detail") {
              if (getQuestionById?.data?.question === data?.question) {
                setAiLoading(false);
                const answersArray = Object.values(res).filter(Boolean); // Filter out falsy values
                const uniqueAnswers = [...new Set(answersArray.map((answer, i) => ({ answer, id: i + 1 })))];
                setMcqAnswer((prev: any) => {
                  return [...data.mcqAnswers, ...uniqueAnswers]
                }
                );
              }
            } else {
              setAiLoading(false);
              const error: any = Object.values(res)[0]
              errorMessage(error)
            }
          })
          .catch(() => setAiLoading(false));
      }
    }
  }, [data?.id, bpElement?.bpElementCount, data?.autoSuggestion, linkedAnswersCount, data?.linkedAnswers?.[linkedAnswersCount]?.id]);




  useEffect(() => {
    if (data?.mcqAnswers?.length > 0 && getQuestionById?.data?.question === data?.question) {
      setMcqAnswer(data.mcqAnswers);
    }
  }, [data?.mcqAnswers, getQuestionById?.data?.question, data?.question]);

  useEffect(() => {
    if (getAnswerByIds?.length > 0 && getQuestionById?.data?.question === data?.question) {
      const apiAnswers = getAnswerByIds?.map((item: any) => item.answer);
      setMultiAnswer(apiAnswers);
    }
  }, [getAnswerByIds]);


  function handleClick() {
    if (enterText) {
      setMcqAnswer((prev: any) => [...prev, { answer: enterText }]);
      setEnterText("");
      setPleaseSpecify(false);
    }
  }

  // useEffect(() => {
  //   if (suggestWithAi?.length > 0) {
  //     setMcqAnswer((prev: any) => {
  //       console.log("pre", prev);
  //       let arr: any = []
  //       for (let index = 0; index < prev?.length; index++) {
  //         const element = prev?.[index];
  //         if (element?.questionId && data?.id === element?.questionId) {
  //           arr.push(element)
  //         } else {
  //           // setMcqAnswer([])
  //           // setMultiAnswer([])
  //           // setSuggestWithAi([])
  //         }
  //       }
  //       console.log("arr", arr);

  //       return [...arr, ...suggestWithAi]
  //     }
  //     );
  //   }
  // }, [suggestWithAi])

  useEffect(() => {
    if (data?.linkedAnswers?.length > 0 && data?.linkedAnswers?.[linkedAnswersCount]?.id) {
      const ids = {
        questionId: Number(data.id),
        businessPlanId: Number(getPlanId),
        answerId: data?.linkedAnswers[linkedAnswersCount]?.id,
      };
      // getAnswerByIdsApi(dispatch, ids, undefined, "getOneLinkedAnswer");
    }
  }, [data?.id, data?.linkedAnswers, linkedAnswersCount]);



  function handleChoose(answer: string) {
    setMultiAnswer((prev: any) =>
      prev.includes(answer)
        ? prev.filter((item: any) => item !== answer)
        : [...prev, answer]
    );
  }

  function suggestWithAI() {
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
        previousSuggestions: mcqAnswer?.map((item: any) => {
          return item?.answer
        }
        ),
        bpElementName: bpElementWithLinkedName
      },
    };
    if (aiDataBody?.answers) {
      setAiLoading(true);
      fetch(`${import.meta.env.VITE_BASE_URL_LAMDA}/suggestanswer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(aiDataBody),
      })
        .then((res) => res.json())
        .then((res) => {
          if (Object.keys(res)[0] !== "detail") {
            if (getQuestionById?.data?.question === data?.question) {
              setAiLoading(false);
              const answersArray = Object.values(res).filter(Boolean); // Filter out falsy values
              const uniqueAnswers = [...new Set(answersArray.map((answer, i) => ({ answer, id: i + 1 })))];
              setMcqAnswer((prev: any) => {
                return [...prev, ...uniqueAnswers]
              }
              );
            }
          } else {
            setAiLoading(false);
            const error: any = Object.values(res)[0]
            errorMessage(error)
          }
        })
        .catch(() => setAiLoading(false));
    }
  };

  return (
    <div className="flex justify-center h-full">
      <Form className="w-[50%]">
        {!aiLoading ? (
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <div className="w-full">
                <h1 className="font-semibold text-[#212838] text-[2.375rem]">
                  <Typewriter key={data?.question} text={data?.question} delay={30} />
                </h1>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="mt-3 gap-5 z-10 flex flex-col items-center justify-center">
                {mcqAnswer
                  ?.filter((item: any, index: any, self: any) =>
                    index === self.findIndex((t: any) => t?.answer === item?.answer)
                  )
                  .map((item: any, i: any) => {
                    return <div key={i} className="mt-3 gap-5 z-10 flex flex-col items-center justify-center cursor-pointer w-full">
                      <motion.div
                        className="w-full"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{ duration: 2 }}
                      >
                        <div
                          onClick={() => handleChoose(item?.answer.toString())}
                          className={`${multiAnswer?.includes(item?.answer.toString()) ? "bg-[#016A70] text-[#F8FAFC] font-medium text-[1.0625rem] rounded-md flex w-full text-center justify-center" : "bg-[#FFFFFF] text-[#4A5366] font-medium text-[1.0625rem] rounded-md flex w-full text-center justify-center"}`}
                        >
                          <span className="p-4">{item.answer}</span>
                        </div>
                      </motion.div>
                    </div>
                  }
                  )}
              </div>
              {!data?.OptionsBPElement && <div className="mt-7 !w-full z-20">
                {!pleaseSpecify && (
                  <Button
                    className="bg-[#FFFFFF] text-[#4A5366] h-[48px] w-full font-semibold p-7"
                    onClick={() => setPleaseSpecify(true)}
                  >
                    <span>Other (please specify)</span>
                  </Button>
                )}
                {pleaseSpecify && (
                  <Input
                    className="w-full"
                    value={enterText}
                    placeholder="Enter Text"
                    autoComplete="off"
                    onKeyDown={(e: any) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleClick()
                      }
                    }}
                    type={data?.isNumber ? "number" : "text"}
                    onChange={(e) => setEnterText(e.target.value.toString())}
                    suffix={<Button onClick={handleClick} type="primary" className="!h-[42px] text-[#E3E7EF] w-[67px] !bg-[#016A70] p-3 z-10">Save</Button>}
                  />
                )}
              </div>
              }
              {!data?.OptionsBPElement && <div className="w-full mt-2 z-20 flex justify-end">
                <Button
                  loading={aiLoading}
                  className="text-[#FFFFFF] bg-[#7A5AF8] text-[.9375rem] font-semibold p-4 h-[48px]"
                  onClick={suggestWithAI}
                >
                  Get more suggestions
                </Button>
              </div>}
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <img src={LoadingGIF} style={{ width: "220px", height: "150px" }} alt="Loading" />
          </div>
        )}
      </Form>
    </div>
  );
};

export default IsChoose;
