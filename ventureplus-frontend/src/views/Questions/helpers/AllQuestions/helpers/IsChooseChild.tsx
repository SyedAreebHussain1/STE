import { Button, Form, Input, Spin } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { getAnswerByIdsApi } from "../../../../../services/api/Question";
import ButtonWithoutSvg from "../../../../../components/button/ButtonWithoutSvg";
import { getFromStorage } from "../../../../../utils/storage";
import { motion } from "framer-motion";
import { Typewriter } from "../../../../../components/Typewriter";
import { LoadingGIF } from "../../../../../assets";
import { useTypewriter } from "../../../../../hooks/useTypewriter";
import { errorMessage } from "../../../../../utils/message";

const IsChooseChild = ({
  data,
  setMultiAnswer,
  multiAnswer,
  current,
  dataSoucre,
  bpElement,
}: any) => {
  const [choose, setChoose] = useState<string[]>([]);
  const [mcqAnswer, setMcqAnswer] = useState<any>([]);
  const [enterText, setEnterText] = useState<string>("");
  const [pleaseSpecify, setPleaseSpecify] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const [aiLoading, setAiLoading] = useState(false);
  const business = { business: getFromStorage("business") };
  const getCurrencies = useSelector(
    (state: RootState) => state?.getCurrencies
  );

  const getPlanId = getFromStorage("businessPlan");
  const currentSelectedBusinessPlan = {
    businessPlan: getPlanId,
  };
  const getAnswerByIds = useSelector(
    (state: RootState) => state.getAnswerByIds?.data || []
  );
  useEffect(() => {
    setEnterText("");
  }, [data.question, bpElement, bpElement, current]);



  useEffect(() => {
    if (data?.mcqAnswers.length > 0) {
      setMcqAnswer(data?.mcqAnswers);
    }
  }, [data?.mcqAnswers]);
  useEffect(() => {
    if (getAnswerByIds.length > 0) {
      const apiAnswers = getAnswerByIds.map((item: any) => item.answer);
      setMultiAnswer(apiAnswers);
    }
  }, [getAnswerByIds]);

  useEffect(() => {
    if (multiAnswer?.length > 0) {
      setMultiAnswer(multiAnswer);
    } else {
      setMultiAnswer([]);
    }
  }, [multiAnswer?.length]);
  useEffect(() => {
    if (choose.length > 0) {
      setMultiAnswer(choose);
    }
  }, [choose]);
  function suggestWithAI() {
    if (data?.autoSuggestion) {
      const aiDataBody = {
        answers: {
          topic: data?.topic?.title || dataSoucre?.topic?.title,
          question: data?.question,
          chapter:
            data?.topic?.chapter?.title || dataSoucre?.topic?.chapter?.title,
          businessName: business?.business?.name,
          businessDescription: business?.business?.description,
          currency: getCurrencies?.data?.filter((item: any) => item?.id == business?.business?.currencyId)?.[0]?.name,
          isNumber: data?.isNumber ? true : false,
          previousSuggestions: mcqAnswer?.map((item: any) => {
            return item?.answer
          }),
          bpElement: data?.bpElement,
          city: business?.business?.city,
          country: business?.business?.country,
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
              const uniqueArray = [...new Set(aiSuggest)];
              setMcqAnswer((pre: any) => [...pre, ...uniqueArray]);
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
          topic: data?.topic?.title || dataSoucre?.topic?.title,
          question: data?.question,
          chapter:
            data?.topic?.chapter?.title || dataSoucre?.topic?.chapter?.title,
          businessName: business?.business?.name,
          businessDescription: business?.business?.description,
          isNumber: data?.isNumber ? true : false,
          previousSuggestions: mcqAnswer?.map((item: any) => {
            return item?.answer
          }),
          bpElement: data?.bpElement,
          city: business?.business?.city,
          country: business?.business?.country,
          bpElementName: data?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount]?.name
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
              const uniqueArray = [...new Set(aiSuggest)];
              setMcqAnswer((pre: any) => [...pre, ...uniqueArray]);
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
  };
  // suggestwithAi
  useEffect(() => {
    if (data?.autoSuggestion) {
      const aiDataBody = {
        answers: {
          topic: data?.topic?.title || dataSoucre?.topic?.title,
          question: data?.question,
          chapter:
            data?.topic?.chapter?.title || dataSoucre?.topic?.chapter?.title,
          businessName: business?.business?.name,
          businessDescription: business?.business?.description,
          isNumber: data?.isNumber ? true : false,
          currency: getCurrencies?.data?.filter((item: any) => item?.id == business?.business?.currencyId)?.[0]?.name,
          previousSuggestions: mcqAnswer?.map((item: any) => {
            return item?.answer
          }),
          bpElement: data?.bpElement,
          city: business?.business?.city,
          country: business?.business?.country,
          bpElementName: data?.[bpElement?.bpElementType]?.[bpElement?.bpElementCount]?.name
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
              const uniqueArray = [...new Set(aiSuggest)];
              setMcqAnswer((pre: any) => [...data?.mcqAnswers, ...uniqueArray]);
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
  }, [data?.autoSuggestion, current]);

  const handleChoose = (answer: string) => {
    setMultiAnswer((prev: any) =>
      prev.includes(answer)
        ? prev.filter((item: any) => item !== answer)
        : [...prev, answer]
    );
  };

  function handleClick() {
    if (enterText) {
      setMcqAnswer((pre: any) => [...pre, { answer: enterText }]);
      setEnterText("");
      setPleaseSpecify(false);
    }
  }

  // useEffect(() => {
  //   if (suggestwithAi.length > 0) {
  //     setMcqAnswer((prev: any) => [...data.mcqAnswers, ...suggestwithAi]);
  //   }
  // }, [suggestwithAi]);
  // useEffect(() => {
  //   if (suggestwithAi?.length > 0) {
  //     setMcqAnswer((prev: any) => {
  //       let arr: any = []
  //       for (let index = 0; index < prev?.length; index++) {
  //         const element = prev?.[index];
  //         if (element?.questionId) {
  //           arr.push(element)
  //         }
  //       }
  //       return [...arr, ...suggestwithAi]
  //     }
  //     );
  //   }
  // }, [suggestwithAi])


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
  }, [data?.id, dataSoucre]);
  return (
    <div className="flex justify-center h-full">
      <Form className="w-[50%]">
        {!aiLoading ? (
          <div className="flex flex-col justify-center" >
            <div className="flex justify-center">
              <div className="containerForAnimationQuestion">
                <h2 className="font-semibold text-[#212838] text-[2.375rem] typed-out">
                  <Typewriter key={data?.question} text={data?.question} delay={30} />

                </h2>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="mt-3 gap-5 z-10 flex flex-col items-center justify-center">
                {mcqAnswer
                  ?.filter(
                    (item: any, index: number, self: any) =>
                      index ===
                      self.findIndex((t: any) => t?.answer === item?.answer)
                  )
                  ?.map((item: any, i: number) => (
                    <div key={i} className="mt-3 gap-5 z-10 flex flex-col items-center justify-center cursor-pointer w-full">
                      <motion.div
                        className="w-full"
                        key={i}
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
                          onClick={() => handleChoose(item?.answer.toString())}
                          className={
                            multiAnswer?.includes(item?.answer)
                              ? "bg-[#016A70] text-[#F8FAFC] font-medium text-[1.0625rem] rounded-md flex w-full text-center justify-center"
                              : "bg-[#FFFFFF] text-[#4A5366] font-medium text-[1.0625rem] rounded-md flex w-full text-center justify-center"
                          }
                        >
                          <span className="p-4">
                            {item?.answer}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  ))}
              </div>
              {!data?.OptionsBPElement && <div className="mt-7 !w-full z-20 ">
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
                    suffix={<Button
                      onClick={handleClick}
                      type="primary"
                      className="!h-[42px] tex-[#E3E7EF] w-[67px] !bg-[#016A70] p-3 z-10 "
                    >Save</Button>}
                  />
                )}
              </div>}
              {!data?.OptionsBPElement && <div className="w-full mt-2 z-20 flex justify-end">
                <Button
                  loading={aiLoading}
                  className="text-[#FFFFFF] bg-[#7A5AF8] text-[.9375rem] font-semibold p-4 h-[48px] "
                  onClick={suggestWithAI}
                >
                  Get more suggestions
                </Button>
              </div>}
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <img src={LoadingGIF} style={{ width: "220px", height: "150px" }} />
          </div>
        )}
      </Form>
    </div>
  );
};

export default IsChooseChild;
