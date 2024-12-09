import React, { useEffect, useState, useRef } from "react";
import { QuestionsContainer } from "./QuestionsContainer";
import { Button, Form } from "antd";
import {
  InputAnswer,
  IsChoose,
  IsChooseChild,
  IsMcqs,
  IsMcqsForChild,
  IsTabbular,
} from "./AllQuestions";
import {
  createAnswerApi,
  getQuestionApi,
  postTableValuesApi,
  getAllTopicApi,
  createContentApi,
  getQuestionByIdApi,
  linkedAnswersApi,
} from "../../../services/api/Question";
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { errorMessage } from "../../../utils/message";
import { clearGetAnswerByIds } from "../../../redux/slices/Questions/getAnswerByIdsSlice";
import { clearCreateAnswer } from "../../../redux/slices/Questions/createAnswerSlice";
import { useNavigate, useParams } from "react-router-dom";
import FinalStageModal from "./AllQuestions/helpers/FinalStage";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { clearGetQuestionById } from "../../../redux/slices/Questions/getQuestionById";
import objectsGroup from "../../../assets/question/Objects.png";
import { getFromStorage } from "../../../utils/storage";
import InputAnswerChild from "./AllQuestions/helpers/InputAnswerChild";
import { AnimatePresence } from "framer-motion";
import "./AllQuestions/helpers/style.css";
import { getCurrenciesApi } from "../../../services/api/currency";

const MainQuestion = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const errorRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [toggleModal, setToggleModal] = useState(false);
  const getQuestion = useSelector((state: RootState) => state?.getQuestion);
  const getQuestionById = useSelector(
    (state: RootState) => state?.getQuestionById
  );
  const getPlanId = getFromStorage("businessPlan");
  const currentSelectedBusinessPlan = {
    businessPlan: getPlanId,
  };
  const createAnswer = useSelector((state: RootState) => state.createAnswer);
  const postTableValues = useSelector(
    (state: RootState) => state.postTableValues
  );
  const getAnswerByIds = useSelector(
    (state: RootState) => state.getAnswerByIds
  );
  const linkedAnswers = useSelector((state: RootState) => state?.linkedAnswers);
  const getAllTopic = useSelector((state: RootState) => state?.getAllTopic);
  const navigate: any = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [dataSoucre, setDataSoucre] = useState<any[]>([]);
  const [dataSoucreGetByQuestionId, setDataSoucreGetByQuestionId] = useState<
    any[]
  >([]);
  const [inputAnswer, setInputAnswer] = useState<string>("");
  const [multiAnswer, setMultiAnswer] = useState<any>([]);
  const [currentTopic, setCurrentTopic] = useState<any>(null);
  const [singleAnswerForChild, setSingleAnswerForChild] = useState<any>(null);
  const [tabbularData, setTabbularData] = useState<any>(null);
  const [idsArray, setIdsArray] = useState<any>([]);
  const [bpElementCount, setbpElementCount] = useState<number>(0);
  const [childQuestionBoolean, setChildQuestionBoolean] = useState<
    boolean | null
  >(false);
  const [answers, setAnswers] = useState<any>([]);
  const [singleAnswer, setSingleAnswer] = useState<any>(null);
  const [bpElementType, setBpElementType] = useState<any>([]);
  const [childNextBtn, setChildNextBtn] = useState<boolean>(true);
  const [childElementValue, setChildElementValue] = useState<any>(null);
  const [linkedAnswersCount, setLinkedAnswersCount] = useState(0);
  const [childIndex, setChildIndex] = useState<number>(0);
  const [isLinked, setIsLinked] = useState<string>("next");

  useEffect(() => {
    dispatch(clearCreateAnswer(getAnswerByIds));
    dispatch(clearGetAnswerByIds(getAnswerByIds));
    getAllTopicApi(dispatch);
    getCurrenciesApi(dispatch);
  }, []);

  useEffect(() => {
    if (getQuestionById.data) {
      setDataSoucreGetByQuestionId([getQuestionById.data]);
    }
  }, [getQuestionById.data]);

  function onSuccessForNewQuestionGetId() {
    dispatch(clearCreateAnswer(getAnswerByIds));
    dispatch(clearGetAnswerByIds(getAnswerByIds));
    // setSingleAnswer(null);
    setChildQuestionBoolean(false);
    setChildIndex(0);
    setMultiAnswer([]);
    form.resetFields();
    setTabbularData(null);
    setbpElementCount(0);
    setAnswers([]);
    setLinkedAnswersCount(0);
  }

  function prev() {
    setCurrent((prevCurrent) => prevCurrent - 1);
    dispatch(clearCreateAnswer(getAnswerByIds));
    dispatch(clearGetAnswerByIds(getAnswerByIds));
    setChildIndex(0);
    setAnswers([]);
    setbpElementCount(0);
    setMultiAnswer([]);
    form.resetFields();
    setTabbularData(null);
    setLinkedAnswersCount(0);
    setSingleAnswer(null)
    childAccess();
    setChildQuestionBoolean(false);
    setIsLinked("prev");
    let topics: any[] = [];
    for (let i = 0; i < getQuestion?.data?.length; i++) {
      const element: any = getQuestion?.data?.[i];
      const keys = Object.keys(element);
      const nameEnum: any = keys.filter((item: string, i: number) => {
        return (
          item == "products" ||
          item == "staffings" ||
          item == "equities" ||
          item == "services"
        );
      });
      if (element?.bpElement && element?.[nameEnum?.[0]]?.length === 0) {
      } else {
        topics.push(element);
      }
    }
    if (current == 1) {
      getQuestionByIdApi(
        dispatch,
        topics?.[0]?.id,
        currentSelectedBusinessPlan?.businessPlan?.id,
        onSuccessForNewQuestionGetId
      );
    }
  }

  useEffect(() => {
    if (getAllTopic?.data?.length > 0) {
      const newIdsArray = getAllTopic?.data?.map((element: any) => element.id);
      setIdsArray(newIdsArray);
    }
  }, [getAllTopic?.data]);
  useEffect(() => {
    let topics: any[] = [];
    for (let i = 0; i < getQuestion?.data?.length; i++) {
      const element: any = getQuestion?.data?.[i];
      const keys = Object.keys(element);
      const nameEnum: any = keys.filter((item: string, i: number) => {
        return (
          item == "products" ||
          item == "staffings" ||
          item == "equities" ||
          item == "services"
        );
      });
      if (element?.bpElement && element?.[nameEnum?.[0]]?.length === 0) {
      } else {
        topics.push(element);
      }
    }
    if (current && topics.length > 0) {
      if (
        topics?.[current]?.id &&
        currentSelectedBusinessPlan?.businessPlan?.id
      ) {
        getQuestionByIdApi(
          dispatch,
          topics?.[current]?.id,
          currentSelectedBusinessPlan?.businessPlan?.id,
          onSuccessForNewQuestionGetId
        );
      }
    }
  }, [current]);

  useEffect(() => {
    if (
      id &&
      currentTopic == null &&
      idsArray.length > 0 &&
      currentSelectedBusinessPlan?.businessPlan?.id
    ) {
      setCurrentTopic(idsArray?.findIndex((val: any) => val == id));
    } else if (
      idsArray.length > 0 &&
      currentTopic !== null &&
      currentSelectedBusinessPlan?.businessPlan?.id
    ) {
      if (currentTopic == 0) {
        getQuestionApi(
          dispatch,
          Number(idsArray[currentTopic]),
          Number(currentSelectedBusinessPlan?.businessPlan?.id),
          onSuccess
        );
      } else {
        if (currentTopic && idsArray[currentTopic]) {
          getQuestionApi(
            dispatch,
            Number(idsArray[currentTopic]),
            Number(currentSelectedBusinessPlan?.businessPlan?.id),
            onSuccess
          );
        }
      }
    }
  }, [currentTopic, idsArray, currentSelectedBusinessPlan?.businessPlan?.id]);
  useEffect(() => {
    let topics: any[] = [];
    for (let i = 0; i < getQuestion?.data?.length; i++) {
      const element: any = getQuestion?.data?.[i];
      const keys = Object?.keys(element);
      const nameEnum: any = keys?.filter((item: string, i: number) => {
        return (
          item == "products" ||
          item == "staffings" ||
          item == "equities" ||
          item == "services"
        );
      });
      if (element?.bpElement && element?.[nameEnum?.[0]]?.length === 0) {
      } else {
        topics.push(element);
      }
    }
    if (topics?.[0]?.id) {
      getQuestionByIdApi(
        dispatch,
        topics?.[0]?.id,
        currentSelectedBusinessPlan?.businessPlan?.id,
        onSuccessForNewQuestionGetId
      );
    }
  }, [getQuestion?.data]);


  function onSuccess() {
    navigate(`/questions/${idsArray[currentTopic]}`);
    setCurrent(0);
    setBpElementType(null);
    setbpElementCount(0);
    setChildIndex(0);
    setToggleModal(false);
  }
  function handleNextBp(e: any, type: string, childBpEvent: any) {
    const keys = Object.keys(dataSoucre?.[0]?.question);
    const nameEnum: any = keys.filter((item: string, i: number) => {
      return (
        item == "products" ||
        item == "staffings" ||
        item == "equities" ||
        item == "services"
      );
    });

    if (
      dataSoucre?.[0]?.question?.preferredAnswers?.length == 0 ||
      childBpEvent == undefined ||
      childBpEvent == null
    ) {
      if (e?.mcqType == "Single" && e?.isMCQ == true) {
        if (singleAnswer) {
          let str = nameEnum?.[0];
          str = str.slice(0, -1) === "equitie" ? "equity" : str.slice(0, -1);
          let currentSingleAnswer: any = {
            [`${str}Id`]:
              dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
            answers: [{ answer: singleAnswer }],
          };
          if (type == "next") {
            createAnswerApi(dispatch, currentSingleAnswer, () =>
              setbpElementCount((prevCurrent) => prevCurrent + 1)
            );
          } else {
            createAnswerApi(dispatch, currentSingleAnswer, next);
          }
        } else {
          errorMessage("select atleast one option");
        }
      } else if (e?.mcqType === "Multiple" && e?.isMCQ === true) {
        let str = nameEnum?.[0];
        str = str.slice(0, -1) === "equitie" ? "equity" : str.slice(0, -1);
        if (multiAnswer.length > 0) {
          const uniqueArray = Array.from(new Set(multiAnswer));
          let array: any = [];
          for (let i = 0; i < uniqueArray?.length; i++) {
            const element = uniqueArray[i];
            array.push({
              answer: element,
              [`${str}Id`]:
                dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
            });
          }

          const body = {
            answers: array,
            questionId: e?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          if (type == "next") {
            createAnswerApi(dispatch, body, () =>
              setbpElementCount((prevCurrent) => prevCurrent + 1)
            );
          } else {
            createAnswerApi(dispatch, body, next);
          }
        } else {
          errorMessage("Select atleast one option");
        }
      } else if (e?.isTabular == true) {
        let str = nameEnum?.[0];
        str = str.slice(0, -1) === "equitie" ? "equity" : str.slice(0, -1);
        let currentTableAnswer: any = {
          [`${str}Id`]:
            dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
          valueObjects: tabbularData?.valueObjects,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          questionId: dataSoucre?.[0]?.question?.id,
          answer: "Table",
        };
        if (type == "next") {
          postTableValuesApi(dispatch, currentTableAnswer, () =>
            setbpElementCount((prevCurrent) => prevCurrent + 1)
          );
        } else {
          postTableValuesApi(dispatch, currentTableAnswer, next);
        }
      } else {
        let str = nameEnum?.[0];
        str = str.slice(0, -1) === "equitie" ? "equity" : str.slice(0, -1);
        let currentAnswer: any = {
          [`${str}Id`]:
            dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
          answers: [{ answer: form.getFieldValue("answer") }],
          questionId: e?.id,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        };
        if (form.getFieldValue("answer")) {
          if (type == "next") {
            createAnswerApi(dispatch, currentAnswer, () =>
              setbpElementCount((prevCurrent) => prevCurrent + 1)
            );
          } else {
            createAnswerApi(dispatch, currentAnswer, next);
          }
        } else {
          errorMessage("This field is requried");
        }
      }
      if (
        dataSoucre?.[0]?.question?.[bpElementType]?.length ==
        bpElementCount + 1
      ) {
        return;
      } else {
        form.resetFields();
        // setSingleAnswer(null);
        setMultiAnswer([]);
        setTabbularData(null);
      }
    } else if (
      dataSoucre?.[0]?.question?.preferredAnswers.length > 0 ||
      childBpEvent
    ) {
      if (e?.mcqType == "Single" && e?.isMCQ == true) {
        if (singleAnswer) {
          let str = nameEnum?.[0];
          str = str.slice(0, -1) === "equitie" ? "equity" : str.slice(0, -1);
          let currentSingleAnswer: any = {
            answers: [
              {
                answer: singleAnswer,
                [`${str}Id`]:
                  dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
              },
            ],
            questionId: e?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          if (type == "next") {
            createAnswerApi(dispatch, currentSingleAnswer, () => {
              setbpElementCount((prevCurrent) => prevCurrent + 1);
              setChildQuestionBoolean(false);
              setChildIndex(0);
              // setSingleAnswer(null);
              form.resetFields();
            });
          } else {
            createAnswerApi(dispatch, currentSingleAnswer, next);
          }
        } else {
          errorMessage("select atleast one");
        }
      } else if (e?.mcqType == "Multiple" && e?.isMCQ == true) {
        let str = nameEnum?.[0];
        str = str.slice(0, -1) === "equitie" ? "equity" : str.slice(0, -1);
        if (multiAnswer) {
          let currentMultipleAnswer: any = {
            answers: [
              {
                answer: multiAnswer,
                [`${str}Id`]:
                  dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
              },
            ],
            questionId: e?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          if (type == "next") {
            createAnswerApi(dispatch, currentMultipleAnswer, () => {
              setbpElementCount((prevCurrent) => prevCurrent + 1);
              setChildQuestionBoolean(false);
              setChildIndex(0);
              // setSingleAnswer(null);
              form.resetFields();
              setSingleAnswerForChild(null);
            });
          } else {
            createAnswerApi(dispatch, currentMultipleAnswer, next);
          }
        } else {
          errorMessage("Select atleast one option");
        }
      } else if (e?.isTabular == true) {
        let str = nameEnum?.[0];
        str = str.slice(0, -1) === "equitie" ? "equity" : str.slice(0, -1);
        let currentTableAnswer: any = {
          [`${str}Id`]:
            dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
          valueObjects: tabbularData?.valueObjects,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          questionId: dataSoucre?.[0]?.question?.id,
          answer: "Table",
        };
        if (type == "next") {
          postTableValuesApi(dispatch, currentTableAnswer, () =>
            setbpElementCount((prevCurrent) => prevCurrent + 1)
          );
        } else {
          postTableValuesApi(dispatch, currentTableAnswer, next);
        }
      } else {
        let str = nameEnum?.[0];
        str = str.slice(0, -1) === "equitie" ? "equity" : str.slice(0, -1);
        let currentAnswer: any = {
          answers: [
            {
              answer: form.getFieldValue("answer"),
              [`${str}Id`]:
                dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
            },
          ],
          questionId: e?.id,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        };
        if (type == "next") {
          createAnswerApi(dispatch, currentAnswer, () => {
            setbpElementCount((prevCurrent) => prevCurrent + 1);
            setChildQuestionBoolean(false);
            setChildIndex(0);
            form.resetFields();
            // setSingleAnswer(null);
            setSingleAnswerForChild(null);
          });
        } else {
          createAnswerApi(dispatch, currentAnswer, next);
        }
      }
      if (
        dataSoucre?.[0]?.question?.[bpElementType]?.length ==
        bpElementCount + 1
      ) {
        return;
      } else {
        form.resetFields();
        // setSingleAnswer(null);
        setMultiAnswer([]);
        setTabbularData(null);
        setSingleAnswerForChild(null);
      }
    }
  }

  useEffect(() => {
    if (getQuestionById?.data?.linkedAnswers === null) {
      if (isLinked === "next") {
        next();
        return;
      } else if (isLinked === "prev") {
        prev();
        return;
      }
    }
  }, [getQuestionById?.data]);
  function hitBpApi(values?: any) {
    const { table, ...valuesBoday }: any = values;
    const body: any = valuesBoday;

    if (
      table == "table" &&
      dataSoucre?.[0]?.question?.isTabular &&
      dataSoucre?.[0]?.question?.[bpElementType]?.length == bpElementCount + 1
    ) {
      if (
        dataSoucre?.[0]?.question?.[bpElementType]?.length ==
        bpElementCount + 1
      ) {
        postTableValuesApi(dispatch, body, next);
      } else {
        postTableValuesApi(dispatch, body, () => { });
      }
    }
    if (
      dataSoucre?.[0]?.question?.[bpElementType]?.length ==
      bpElementCount + 1 &&
      !table
    ) {
      createAnswerApi(dispatch, body, next);
    }
  }

  function handleBpPre(e: any) {
    if (e?.mcqType == "Single" && e?.isMCQ == true) {
      const newAnswers = [...answers];
      let removeLastIndex = newAnswers.pop();
      setAnswers(newAnswers);
      if (removeLastIndex) {
        setSingleAnswer(removeLastIndex?.answer);
      }
      setbpElementCount((prevCurrent) => prevCurrent - 1);
    } else if (e?.mcqType == "Multiple" && e?.isMCQ == true) {
      const newAnswers = [...answers];
      let removeLastIndex = newAnswers.pop();
      setAnswers(newAnswers);
      if (removeLastIndex) {
        setMultiAnswer(removeLastIndex?.answer);
      }
      setbpElementCount((prevCurrent) => prevCurrent - 1);
    } else if (e?.isTabular == true) {
    } else {
      const newAnswers = [...answers];
      let removeLastIndex = newAnswers.pop();
      setAnswers(newAnswers);
      form.setFieldsValue({
        answer: removeLastIndex ? removeLastIndex.answer : "",
      });
      setbpElementCount((prevCurrent) => prevCurrent - 1);
    }
  }

  function handleNextLinked(e: any, type: string) {
    const keys = Object.keys(dataSoucre?.[0]?.question);
    const nameEnum: any = keys.filter((item: string, i: number) => {
      return (
        item == "products" ||
        item == "staffings" ||
        item == "equities" ||
        item == "services"
      );
    });
    let bpListName = nameEnum?.[0];

    if (bpListName && e?.[bpElementType]?.length > 0) {
      if (e?.mcqType == "Single" && e?.isMCQ == true) {
        let str = nameEnum?.[0];
        str = str.slice(0, -1) === "equitie" ? "equity" : str.slice(0, -1);
        let currentSingleAnswer: any = {
          [`${str}Id`]:
            dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
          answerId:
            dataSoucre?.[0]?.question?.linkedAnswers[linkedAnswersCount]?.id,
          answer: singleAnswer,
        };
        if (type == "next") {
          setAnswers((prevAnswers: any) => [
            ...prevAnswers,
            currentSingleAnswer,
          ]);
          if (bpElementCount < e[bpListName].length - 1) {
            setbpElementCount(bpElementCount + 1);
          } else {
            setbpElementCount(0);
            setLinkedAnswersCount(
              (linkedAnswersCount + 1) % e?.linkedAnswers.length
            );
          }
          hitLinkedApi({
            answers: [...answers, currentSingleAnswer],
            questionId: e?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          });
        } else {
          hitLinkedApi({
            answers: [...answers, currentSingleAnswer],
            questionId: e?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          });
        }
      } else if (e?.mcqType == "Multiple" && e?.isMCQ == true) {
        let str = nameEnum?.[0];
        str = str.slice(0, -1) === "equitie" ? "equity" : str.slice(0, -1);
        let currentMultipleAnswer: any = {
          [`${str}Id`]:
            dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
          answerId:
            dataSoucre?.[0]?.question?.linkedAnswers[linkedAnswersCount]?.id,
          answer: multiAnswer,
        };

        if (type == "next") {
          setAnswers((prevAnswers: any) => [
            ...prevAnswers,
            currentMultipleAnswer,
          ]);
          if (bpElementCount < e[bpListName].length - 1) {
            setbpElementCount(bpElementCount + 1);
          } else {
            setbpElementCount(0);
            setLinkedAnswersCount(
              (linkedAnswersCount + 1) % e?.linkedAnswers?.length
            );
          }
          hitLinkedApi({
            answers: [...answers, currentMultipleAnswer],
            questionId: e?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          });
        } else {
          hitLinkedApi({
            answers: [...answers, currentMultipleAnswer],
            questionId: e?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          });
        }
      } else if (e?.isTabular == true) {
        let str = nameEnum?.[0];
        str = str.slice(0, -1) === "equitie" ? "equity" : str.slice(0, -1);
        let currentTableAnswer: any = {
          [`${str}Id`]:
            dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
          valueObjects: tabbularData?.valueObjects,
          answer: "Table",
          answerId:
            dataSoucre?.[0]?.question?.linkedAnswers[linkedAnswersCount]?.id,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          questionId: dataSoucre?.[0]?.question?.id,
        };

        if (type == "next") {
          setAnswers((prevAnswers: any) => [
            ...prevAnswers,
            currentTableAnswer,
          ]);
          if (bpElementCount < e[bpListName].length - 1) {
            setbpElementCount(bpElementCount + 1);
          } else {
            setbpElementCount(0);
            setLinkedAnswersCount(
              (linkedAnswersCount + 1) % e?.linkedAnswers.length
            );
          }
          postTableValuesApi(dispatch, currentTableAnswer, () =>
            setLinkedAnswersCount((pre: any) => pre + 1)
          );
        } else {
          postTableValuesApi(dispatch, currentTableAnswer, next);
        }
      } else {
        let str = nameEnum?.[0];
        str = str.slice(0, -1) === "equitie" ? "equity" : str.slice(0, -1);
        let currentAnswer: any = {
          [`${str}Id`]:
            dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
          answer: form.getFieldValue("answer"),
          answerId:
            dataSoucre?.[0]?.question?.linkedAnswers[linkedAnswersCount]?.id,
        };
        if (type == "next") {
          setAnswers((prevAnswers: any) => [...prevAnswers, currentAnswer]);
          if (bpElementCount < e[bpListName].length - 1) {
            setbpElementCount(bpElementCount + 1);
          } else {
            setbpElementCount(0);
            setLinkedAnswersCount(
              (linkedAnswersCount + 1) % e?.linkedAnswers.length
            );
          }
          hitLinkedApi({
            answers: [...answers, currentAnswer],
            questionId: e?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          });
        } else {
          hitLinkedApi({
            answers: [...answers, currentAnswer],
            questionId: e?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          });
        }
      }

      if (
        dataSoucre?.[0]?.question?.[bpElementType]?.length ==
        bpElementCount + 1 &&
        dataSoucre?.[0]?.question?.linkedAnswers?.length ==
        linkedAnswersCount + 1
      ) {
        return;
      } else {
        form.resetFields();
        // setSingleAnswer(null);
        setMultiAnswer([]);
        setTabbularData(null);
      }
    } else {
      if (e?.mcqType == "Single" && e?.isMCQ == true) {
        if (singleAnswer) {
          let currentSingleAnswer: any = {
            answer: singleAnswer,
            answerId:
              dataSoucre?.[0]?.question?.linkedAnswers[linkedAnswersCount]?.id,
            questionId: e?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          if (type == "next") {
            linkedAnswersApi(dispatch, currentSingleAnswer, () =>
              setLinkedAnswersCount((pre: any) => pre + 1)
            );
          } else {
            linkedAnswersApi(dispatch, currentSingleAnswer, next);
          }
        } else {
          errorMessage("Select atleast one option");
        }
      } else if (e?.mcqType == "Multiple" && e?.isMCQ == true) {
        if (multiAnswer.length > 0) {
          let array = [];
          for (let i = 0; i < multiAnswer.length; i++) {
            const element = multiAnswer[i];
            if (element !== "Linked Answer" && element) {
              array.push({
                answer: element,
                answerId:
                  dataSoucre?.[0]?.question?.linkedAnswers?.[linkedAnswersCount]
                    ?.id,
              });
            }
          }
          let currentMultipleAnswer: any = {
            answers: array,
            questionId: e?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          if (type == "next") {
            linkedAnswersApi(dispatch, currentMultipleAnswer, () =>
              setLinkedAnswersCount((pre: any) => pre + 1)
            );
          } else {
            linkedAnswersApi(dispatch, currentMultipleAnswer, next);
          }
        } else {
          errorMessage("Select atleast one option");
        }
      } else if (e?.isTabular == true) {
        let currentTableAnswer: any = {
          valueObjects: tabbularData?.valueObjects,
          answer: "Table",
          answerId:
            dataSoucre?.[0]?.question?.linkedAnswers[linkedAnswersCount]?.id,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          questionId: dataSoucre?.[0]?.question?.id,
        };
        if (type == "next") {
          postTableValuesApi(dispatch, currentTableAnswer, () =>
            setLinkedAnswersCount((pre: any) => pre + 1)
          );
        } else {
          postTableValuesApi(dispatch, currentTableAnswer, next);
        }
      } else {
        if (form.getFieldValue("answer")) {
          let currentAnswer: any = {
            answers: [
              {
                answer: form.getFieldValue("answer"),
                answerId:
                  dataSoucre?.[0]?.question?.linkedAnswers?.[linkedAnswersCount]
                    ?.id,
              },
            ],
            questionId: e?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          if (type == "next") {
            linkedAnswersApi(dispatch, currentAnswer, () =>
              setLinkedAnswersCount((pre: any) => pre + 1)
            );
          } else {
            linkedAnswersApi(dispatch, currentAnswer, next);
          }
        } else {
          errorMessage("This field is requried");
        }
      }
      if (
        dataSoucre?.[0]?.question?.linkedAnswers?.length ==
        linkedAnswersCount + 1
      ) {
        return;
      } else {
        form.resetFields();
        // setSingleAnswer(null);
        setMultiAnswer([]);
        setTabbularData(null);
        setSingleAnswerForChild(false);
      }
    }
  }
  function hitLinkedApi(values?: any) {
    const { table, ...valuesBoday }: any = values;
    const body: any = valuesBoday;
    if (
      dataSoucre?.[0]?.question?.linkedAnswers.length ==
      linkedAnswersCount + 1 &&
      dataSoucre?.[0]?.question?.[bpElementType]?.length == bpElementCount + 1
    ) {
      linkedAnswersApi(dispatch, body, next);
    }
    if (
      dataSoucre?.[0]?.question?.linkedAnswers.length ==
      linkedAnswersCount + 1
    ) {
      linkedAnswersApi(dispatch, body, next);
    }
  }

  function handlePreviousLinked(e: any, type: string) {
    const keys = Object.keys(dataSoucre?.[0]?.question);
    const nameEnum: any = keys.filter((item: string, i: number) => {
      return (
        item == "products" ||
        item == "staffings" ||
        item == "equities" ||
        item == "services"
      );
    });
    let bpListName = nameEnum?.[0];
    if (bpElementCount > 0) {
      setbpElementCount(bpElementCount - 1);
    } else {
      const newLinkedAnswersCount =
        (linkedAnswersCount - 1 + e?.linkedAnswers.length) %
        e?.linkedAnswers.length;
      setLinkedAnswersCount(newLinkedAnswersCount);
      setbpElementCount(e[bpListName].length - 1);
    }
  }
  function childStateNext(
    bool: boolean,
    body: any,
    preferredAnswers: any,
    highLight: any,
    selected: any
  ) {
    setChildNextBtn(bool);
    setChildElementValue({
      body: body,
      preferredAnswers: preferredAnswers,
      highLight: highLight,
      selected: selected,
    });
    // createAnswerApi(dispatch, body, () => {
    //   if (preferredAnswers?.length > 0) {
    //     childAccess()
    //     highLight()
    //     selected()
    //   }
    // });
  }
  useEffect(() => {
    const stepsQuestion = [];
    if (dataSoucreGetByQuestionId?.length > 0) {
      const existingQuestionIds = new Set(); // Use a Set to track unique question IDs

      for (let i = 0; i < dataSoucreGetByQuestionId?.length; i++) {
        const element: any = dataSoucreGetByQuestionId[i];

        // Check for duplicates using the unique identifier
        if (!existingQuestionIds.has(element.id)) {
          existingQuestionIds.add(element.id); // Add the ID to the Set

          if (element?.isMCQ === true && element?.mcqType === "Single") {
            stepsQuestion.push({
              key: element.id, // Use unique ID for the key
              question: element,
              type: "isMCQSingle",
              childQuestions:
                element?.preferredAnswers?.[singleAnswer]?.[childIndex]
                  ?.isTabular === true ? (
                  <IsTabbular
                    setTabbularData={setTabbularData}
                    data={
                      element?.preferredAnswers?.[singleAnswer]?.[childIndex]
                    }
                    childIndex={childIndex}
                  />
                ) : element?.preferredAnswers?.[singleAnswer]?.[childIndex]
                  ?.isMCQ === true &&
                  element?.preferredAnswers?.[singleAnswer]?.[childIndex]
                    ?.mcqType === "Single" ? (
                  <IsMcqsForChild
                    setSingleAnswer={setSingleAnswerForChild}
                    singleAnswer={singleAnswerForChild}
                    dataSoucre={element}
                    bpElement={{
                      bpElementType: bpElementType,
                      bpElementCount: bpElementCount,
                    }}
                    linkedAnswersCount={linkedAnswersCount}
                    data={
                      element?.preferredAnswers?.[singleAnswer]?.[childIndex]
                    }
                    bpElementWithLinkedName={
                      dataSoucre?.[0]?.question?.[bpElementType]?.[
                        bpElementCount
                      ]?.name ||
                      dataSoucre?.[0]?.question?.linkedAnswers?.[
                        linkedAnswersCount
                      ]?.product?.name ||
                      dataSoucre?.[0]?.question?.linkedAnswers?.[
                        linkedAnswersCount
                      ]?.service?.name ||
                      dataSoucre?.[0]?.question?.linkedAnswers?.[
                        linkedAnswersCount
                      ]?.staffing?.name ||
                      dataSoucre?.[0]?.question?.linkedAnswers?.[
                        linkedAnswersCount
                      ]?.equity?.name
                    }
                  />
                ) : element?.preferredAnswers?.[singleAnswer]?.[childIndex]
                  ?.isMCQ === true &&
                  element?.preferredAnswers?.[singleAnswer]?.[childIndex]
                    ?.mcqType === "Multiple" ? (
                  <IsChooseChild
                    bpElement={{
                      bpElementType: bpElementType,
                      bpElementCount: bpElementCount,
                    }}
                    linkedAnswersCount={linkedAnswersCount}
                    dataSoucre={element}
                    data={
                      element?.preferredAnswers?.[singleAnswer]?.[childIndex]
                    }
                    setMultiAnswer={setMultiAnswer}
                    multiAnswer={multiAnswer}
                    bpElementWithLinkedName={
                      dataSoucre?.[0]?.question?.[bpElementType]?.[
                        bpElementCount
                      ]?.name ||
                      dataSoucre?.[0]?.question?.linkedAnswers?.[
                        linkedAnswersCount
                      ]?.product?.name ||
                      dataSoucre?.[0]?.question?.linkedAnswers?.[
                        linkedAnswersCount
                      ]?.service?.name ||
                      dataSoucre?.[0]?.question?.linkedAnswers?.[
                        linkedAnswersCount
                      ]?.staffing?.name ||
                      dataSoucre?.[0]?.question?.linkedAnswers?.[
                        linkedAnswersCount
                      ]?.equity?.name
                    }
                  />
                ) : (
                  <InputAnswerChild
                    Form={Form}
                    form={form}
                    dataSoucre={element}
                    linkedAnswersCount={linkedAnswersCount}
                    bpElement={{
                      bpElementType: bpElementType,
                      bpElementCount: bpElementCount,
                    }}
                    current={current}
                    data={
                      element?.preferredAnswers?.[singleAnswer]?.[childIndex]
                    }
                    bpElementCount={bpElementCount}
                    setInputAnswer={setInputAnswer}
                    inputAnswer={inputAnswer}
                    bpElementWithLinkedName={
                      dataSoucre?.[0]?.question?.[bpElementType]?.[
                        bpElementCount
                      ]?.name ||
                      dataSoucre?.[0]?.question?.linkedAnswers?.[
                        linkedAnswersCount
                      ]?.product?.name ||
                      dataSoucre?.[0]?.question?.linkedAnswers?.[
                        linkedAnswersCount
                      ]?.service?.name ||
                      dataSoucre?.[0]?.question?.linkedAnswers?.[
                        linkedAnswersCount
                      ]?.staffing?.name ||
                      dataSoucre?.[0]?.question?.linkedAnswers?.[
                        linkedAnswersCount
                      ]?.equity?.name
                    }
                  />
                ),
              children: (
                <IsMcqs
                  setChildQuestionBoolean={setChildQuestionBoolean}
                  setSingleAnswer={setSingleAnswer}
                  singleAnswer={singleAnswer}
                  data={element}
                  linkedAnswersCount={linkedAnswersCount}
                  bpElement={{
                    bpElementType: bpElementType,
                    bpElementCount: bpElementCount,
                  }}
                  childStateNext={childStateNext}
                  dataSoucre={dataSoucre}
                  childAccess={childAccess}
                  next={next}
                  childQuestionBoolean={childQuestionBoolean}
                  showParent={showParent}
                  bpElementWithLinkedName={
                    dataSoucre?.[0]?.question?.[bpElementType]?.[bpElementCount]
                      ?.name ||
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.product?.name ||
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.service?.name ||
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.staffing?.name ||
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.equity?.name
                  }
                  linkedName={
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.answer
                  }
                />
              ),
            });
          } else if (
            element?.isMCQ === true &&
            element?.mcqType === "Multiple"
          ) {
            stepsQuestion.push({
              key: element.id,
              type: "isMCQ",
              question: element,
              children: (
                <IsChoose
                  multiAnswer={multiAnswer}
                  current={current}
                  data={element}
                  dataSoucre={dataSoucre}
                  setMultiAnswer={setMultiAnswer}
                  linkedAnswersCount={linkedAnswersCount}
                  bpElement={{
                    bpElementType: bpElementType,
                    bpElementCount: bpElementCount,
                  }}
                  topicIds={idsArray[currentTopic]}
                  currentTopic={currentTopic}
                  bpElementWithLinkedName={
                    dataSoucre?.[0]?.question?.[bpElementType]?.[bpElementCount]
                      ?.name ||
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.product?.name ||
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.service?.name ||
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.staffing?.name ||
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.equity?.name
                  }
                  linkedName={
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.answer
                  }
                />
              ),
            });
          } else if (element?.isTabular === true) {
            stepsQuestion.push({
              key: element.id,
              type: "isTabular",
              question: element,
              children: (
                <IsTabbular
                  tabbularData={tabbularData}
                  setTabbularData={setTabbularData}
                  data={element}
                  bpElementCount={bpElementCount}
                  bpType={bpElementType}
                />
              ),
            });
          } else {
            stepsQuestion.push({
              key: element.id,
              type: "questionAnswer",
              question: element,
              children: (
                <InputAnswer
                  Form={Form}
                  form={form}
                  data={element}
                  linkedAnswersCount={linkedAnswersCount}
                  setInputAnswer={setInputAnswer}
                  inputAnswer={inputAnswer}
                  bpElement={{
                    bpElementType: bpElementType,
                    bpElementCount: bpElementCount,
                  }}
                  dataSoucre={dataSoucre}
                  bpElementCount={bpElementCount}
                  bpElementWithLinkedName={
                    dataSoucre?.[0]?.question?.[bpElementType]?.[bpElementCount]
                      ?.name ||
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.product?.name ||
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.service?.name ||
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.staffing?.name ||
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.equity?.name
                  }
                  linkedName={
                    dataSoucre?.[0]?.question?.linkedAnswers?.[
                      linkedAnswersCount
                    ]?.answer
                  }
                />
              ),
            });
          }
        }
      }
      setDataSoucre(stepsQuestion); // Set unique questions
    }
  }, [
    dataSoucreGetByQuestionId,
    multiAnswer,
    childIndex,
    bpElementCount,
    linkedAnswersCount,
    bpElementType
  ]);

  function childAccess() {
    setChildIndex(0);
    setChildQuestionBoolean(true);
    form.resetFields();
    dispatch(clearCreateAnswer(getAnswerByIds));
    dispatch(clearGetAnswerByIds(getAnswerByIds));
    setAnswers([]);
    setMultiAnswer([]);
    setTabbularData(null);
    setLinkedAnswersCount(0);
    setChildNextBtn(true);
  }

  function handleChildElementNext(ele: any, type: string) {
    if (singleAnswerForChild) {
      if (ele?.isMCQ === true && ele?.mcqType === "Single") {
        if (singleAnswerForChild) {
          const body = {
            answers: [{ answer: singleAnswerForChild }],
            questionId: ele?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          if (type == "next") {
            createAnswerApi(dispatch, body, nextChild);
          } else {
            createAnswerApi(dispatch, body, next);
          }
        } else {
          errorMessage("Select atleast one option");
        }
      } else if (ele?.isMCQ === true && ele?.mcqType == "Multiple") {
        let array = [];
        for (let i = 0; i < multiAnswer.length; i++) {
          const element = multiAnswer[i];
          array.push({ answer: element });
        }

        if (array?.length > 0) {
          const body = {
            answers: array,
            questionId: ele?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          if (type == "next") {
            createAnswerApi(dispatch, body, nextChild);
          } else {
            createAnswerApi(dispatch, body, next);
          }
        } else {
          errorMessage("Select atleast one option");
        }
      } else if (ele?.isTabular === true) {
        const body: any = {
          valueObjects: tabbularData?.valueObjects,
          answer: "Table",
          questionId: ele?.id,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        };
        if (type == "next") {
          postTableValuesApi(dispatch, body, nextChild);
        } else {
          postTableValuesApi(dispatch, body, next);
        }
      } else {
        if (form.getFieldValue("answer")) {
          const body = {
            answers: [{ answer: form.getFieldValue("answer") }],
            questionId: ele?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };

          if (type == "next") {
            createAnswerApi(dispatch, body, nextChild);
          } else {
            createAnswerApi(dispatch, body, next);
          }
        } else {
          errorMessage("This field is required");
        }
      }
    } else {
      if (ele?.isMCQ === true && ele?.mcqType === "Single") {
        if (singleAnswer) {
          const body = {
            answers: [{ answer: singleAnswer }],
            questionId: ele?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };

          if (type == "next") {
            createAnswerApi(dispatch, body, nextChild);
          } else {
            createAnswerApi(dispatch, body, next);
          }
        } else {
          errorMessage("Select atleast one option");
        }
      } else if (ele?.isMCQ === true && ele?.mcqType == "Multiple") {
        let array = [];
        for (let i = 0; i < multiAnswer.length; i++) {
          const element = multiAnswer[i];
          array.push({ answer: element });
        }

        if (array.length > 0) {
          const body = {
            answers: array,
            questionId: ele?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          if (type == "next") {
            createAnswerApi(dispatch, body, nextChild);
          } else {
            createAnswerApi(dispatch, body, next);
          }
        } else {
          errorMessage("Select atleast one option");
        }
      } else if (ele?.isTabular === true) {
        const body: any = {
          valueObjects: tabbularData?.valueObjects,
          answer: "Table",
          questionId: ele?.id,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        };
        if (type == "next") {
          postTableValuesApi(dispatch, body, nextChild);
        } else {
          postTableValuesApi(dispatch, body, next);
        }
      } else {
        if (form.getFieldValue("answer")) {
          const body = {
            answers: [{ answer: form.getFieldValue("answer") }],
            questionId: ele?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };

          if (type == "next") {
            createAnswerApi(dispatch, body, nextChild);
          } else {
            createAnswerApi(dispatch, body, next);
          }
        } else {
          errorMessage("This field is required");
        }
      }
    }
  }

  function onFinish(value: any, ele: any) {
    if (singleAnswerForChild) {
      if (ele?.isMCQ === true && ele?.mcqType === "Single") {
        if (singleAnswer) {
          const body = {
            answers: [{ answer: singleAnswer }],
            questionId: ele?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          createAnswerApi(dispatch, body, next);
        } else {
          errorMessage("Select atleast one option");
        }
      } else if (ele?.isMCQ === true && ele?.mcqType == "Multiple") {
        let array = [];
        for (let i = 0; i < multiAnswer.length; i++) {
          const element = multiAnswer[i];
          array.push({ answer: element });
        }
        if (array.length > 0) {
          const body = {
            answers: array,
            questionId: ele?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          createAnswerApi(dispatch, body, next);
        } else {
          errorMessage("Select atleast one option");
        }
      } else if (ele?.isTabular === true) {
        const body: any = {
          valueObjects: tabbularData?.valueObjects,
          questionId: ele?.id,
          answer: "Table",
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        };
        postTableValuesApi(dispatch, body, next);
      } else {
        const body = {
          answers: [{ answer: value?.answer }],
          questionId: ele?.id,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        };
        createAnswerApi(dispatch, body, next);
      }
    } else {
      if (ele?.isMCQ === true && ele?.mcqType === "Single") {
        if (singleAnswer) {
          const body = {
            answers: [{ answer: singleAnswer }],
            questionId: ele?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          createAnswerApi(dispatch, body, next);
        } else {
          errorMessage("Select atleast one option");
        }
      } else if (ele?.isMCQ === true && ele?.mcqType == "Multiple") {
        let array = [];
        for (let i = 0; i < multiAnswer.length; i++) {
          const element = multiAnswer[i];
          array.push({ answer: element });
        }
        if (array.length > 0) {
          const body = {
            answers: array,
            questionId: ele?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          createAnswerApi(dispatch, body, next);
        } else {
          errorMessage("Select atleast one option");
        }
      } else if (ele?.isTabular === true) {
        const body: any = {
          valueObjects: tabbularData?.valueObjects,
          questionId: ele?.id,
          answer: "Table",
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        };
        postTableValuesApi(dispatch, body, next);
      } else {
        if (form.getFieldValue("answer")) {
          const body = {
            answers: [{ answer: form.getFieldValue("answer") }],
            questionId: ele?.id,
            businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
          };
          createAnswerApi(dispatch, body, next);
        } else {
          errorMessage("This field is required");
        }
      }
    }
  }

  function showParent() {
    dispatch(clearGetAnswerByIds(getAnswerByIds));
    dispatch(clearCreateAnswer(getAnswerByIds));
    setChildIndex(0);
    setChildNextBtn(true);
    setChildElementValue(null);
    setChildQuestionBoolean(false);
  }

  useEffect(() => {
    if (dataSoucre?.[0]?.question) {
      const keys = Object.keys(dataSoucre?.[0]?.question);
      const nameEnum: any = keys.filter((item: string, i: number) => {
        return (
          item == "products" ||
          item == "staffings" ||
          item == "equities" ||
          item == "services"
        );
      });
      let str = nameEnum?.[0];
      if (str) {
        setBpElementType(str);
      }
    }
  }, [dataSoucre?.[0]?.question]);

  function nextChild() {
    setChildIndex((prevCurrent) => prevCurrent + 1);
    setAnswers([]);
    dispatch(clearCreateAnswer(getAnswerByIds));
    form.resetFields();
    setMultiAnswer([]);
    setTabbularData(null);
    setbpElementCount(0);
    setLinkedAnswersCount(0);
    setSingleAnswerForChild(null);
  }
  function nextBpChild() {
    setChildIndex((prevCurrent) => prevCurrent + 1);
    setAnswers([]);
    dispatch(clearCreateAnswer(getAnswerByIds));
    dispatch(clearGetAnswerByIds(getAnswerByIds));
    form.resetFields();
    setMultiAnswer([]);
    setTabbularData(null);
    setLinkedAnswersCount(0);
    setSingleAnswerForChild(null);
    setChildNextBtn(false);
  }

  function next() {
    dispatch(clearCreateAnswer(getAnswerByIds));
    dispatch(clearGetAnswerByIds(getAnswerByIds));
    setMultiAnswer([]);
    setChildIndex(0);
    setChildQuestionBoolean(false);
    setbpElementCount(0);
    setAnswers([]);
    setSingleAnswer(null)
    form.resetFields();
    setTabbularData(null);
    setLinkedAnswersCount(0);
    setChildNextBtn(false);
    setChildElementValue(null);
    let topics: any[] = [];
    for (let i = 0; i < getQuestion?.data?.length; i++) {
      const element: any = getQuestion?.data?.[i];
      const keys = Object.keys(element);
      const nameEnum: any = keys.filter((item: string, i: number) => {
        return (
          item == "products" ||
          item == "staffings" ||
          item == "equities" ||
          item == "services"
        );
      });
      if (element?.bpElement && element?.[nameEnum?.[0]]?.length === 0) {
      } else {
        topics.push(element);
      }
    }

    if (current == topics?.length - 1) {
      createContentApi(dispatch, {
        questionId: topics?.[0].id,
        businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
      });
      setToggleModal(true);
      dispatch(clearCreateAnswer(getAnswerByIds));
      dispatch(clearGetAnswerByIds(getAnswerByIds));
    } else {
      setIsLinked("next");
      setCurrent((prevCurrent) => prevCurrent + 1);
    }
  }

  function handleNextBpWithChild(ele: any, type: string) {
    const keys = Object.keys(dataSoucre?.[0]?.question);
    const nameEnum: any = keys.filter((item: string, i: number) => {
      return (
        item == "products" ||
        item == "staffings" ||
        item == "equities" ||
        item == "services"
      );
    });
    let str = nameEnum?.[0];
    str = str.slice(0, -1) === "equitie" ? "equity" : str.slice(0, -1);
    if (ele?.isMCQ === true && ele?.mcqType === "Single") {
      if (singleAnswerForChild) {
        const body = {
          answers: [
            {
              answer: singleAnswerForChild,
              [`${str}Id`]:
                dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
            },
          ],
          questionId: ele?.id,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        };
        if (type == "next") {
          createAnswerApi(dispatch, body, nextBpChild);
        } else {
          if (
            dataSoucre?.[0]?.question?.[bpElementType]?.length ==
            bpElementCount + 1 &&
            dataSoucre?.[0]?.question?.preferredAnswers?.[singleAnswer]
              ?.length ==
            childIndex + 1
          ) {
            createAnswerApi(dispatch, body, next);
          } else {
            createAnswerApi(dispatch, body, () => {
              setChildQuestionBoolean(false);
              setbpElementCount((prevCurrent) => prevCurrent + 1);
              form.resetFields();
              dispatch(clearCreateAnswer(getAnswerByIds));
              dispatch(clearGetAnswerByIds(getAnswerByIds));
              setAnswers([]);
              form.resetFields();
              setMultiAnswer([]);
              setTabbularData(null);
              setLinkedAnswersCount(0);
              setSingleAnswerForChild(null);
              setChildNextBtn(true);
            });
          }
        }
      } else {
        errorMessage("Select atleast one option");
      }
    } else if (ele?.isMCQ === true && ele?.mcqType == "Multiple") {
      let array = [];
      for (let i = 0; i < multiAnswer.length; i++) {
        const element = multiAnswer[i];
        array.push({
          answer: element,
          [`${str}Id`]:
            dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
        });
      }
      if (array.length > 0) {
        const body = {
          answers: array,
          questionId: ele?.id,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        };

        if (type == "next") {
          createAnswerApi(dispatch, body, nextBpChild);
        } else {
          if (
            dataSoucre?.[0]?.question?.[bpElementType]?.length ==
            bpElementCount + 1 &&
            dataSoucre?.[0]?.question?.preferredAnswers?.[singleAnswer]
              ?.length ==
            childIndex + 1
          ) {
            createAnswerApi(dispatch, body, next);
          } else {
            createAnswerApi(dispatch, body, () => {
              setChildQuestionBoolean(false);
              setbpElementCount((prevCurrent) => prevCurrent + 1);
              form.resetFields();
              dispatch(clearCreateAnswer(getAnswerByIds));
              dispatch(clearGetAnswerByIds(getAnswerByIds));
              setAnswers([]);
              setMultiAnswer([]);
              setTabbularData(null);
              setLinkedAnswersCount(0);
              setSingleAnswerForChild(null);
              setChildNextBtn(true);
            });
          }
        }
      } else {
        errorMessage("Select atleast one option");
      }
    } else if (ele?.isTabular === true) {
      const body: any = {
        valueObjects: tabbularData?.valueObjects,
        answer: "Table",
        questionId: ele?.id,
        businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        [`${str}Id`]:
          dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
      };
      if (type == "next") {
        postTableValuesApi(dispatch, body, nextChild);
      } else {
        if (
          dataSoucre?.[0]?.question?.[bpElementType]?.length ==
          bpElementCount + 1 &&
          dataSoucre?.[0]?.question?.preferredAnswers?.[singleAnswer]?.length ==
          childIndex + 1
        ) {
          postTableValuesApi(dispatch, body, next);
        } else {
          postTableValuesApi(dispatch, body, () => {
            setChildQuestionBoolean(false);
            setbpElementCount((prevCurrent) => prevCurrent + 1);
            form.resetFields();
            dispatch(clearCreateAnswer(getAnswerByIds));
            dispatch(clearGetAnswerByIds(getAnswerByIds));
            setAnswers([]);
            form.resetFields();
            setMultiAnswer([]);
            setTabbularData(null);
            setLinkedAnswersCount(0);
            setSingleAnswerForChild(null);
            setChildNextBtn(true);
          });
        }
      }
    } else {
      if (form.getFieldValue("answer")) {
        const body = {
          answers: [
            {
              answer: form.getFieldValue("answer"),
              [`${str}Id`]:
                dataSoucre?.[0]?.question?.[nameEnum]?.[bpElementCount]?.id,
            },
          ],
          questionId: ele?.id,
          businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
        };
        if (type == "next") {
          createAnswerApi(dispatch, body, nextBpChild);
        } else {
          if (
            dataSoucre?.[0]?.question?.[bpElementType]?.length ==
            bpElementCount + 1 &&
            dataSoucre?.[0]?.question?.preferredAnswers?.[singleAnswer]
              ?.length ==
            childIndex + 1
          ) {
            createAnswerApi(dispatch, body, next);
          } else {
            createAnswerApi(dispatch, body, () => {
              setChildQuestionBoolean(false);
              setbpElementCount((prevCurrent) => prevCurrent + 1);
              form.resetFields();
              dispatch(clearCreateAnswer(getAnswerByIds));
              dispatch(clearGetAnswerByIds(getAnswerByIds));
              setAnswers([]);
              form.resetFields();
              setMultiAnswer([]);
              setTabbularData(null);
              setLinkedAnswersCount(0);
              setSingleAnswerForChild(null);
              setChildNextBtn(true);
            });
          }
        }
      } else {
        errorMessage("This field is required");
      }
    }
  }
  useEffect(() => {
    if (getAnswerByIds?.data?.[0]?.answer == "Linked Answer") {
    } else {
      if (getAnswerByIds?.data?.length > 0) {
        if (
          dataSoucre?.[0]?.question?.preferredAnswers?.[singleAnswer]?.length >
          0
        ) {
          form.resetFields();
          if (
            Number(getAnswerByIds?.data?.[0]?.answer) &&
            dataSoucre?.[0]?.question?.preferredAnswers?.[singleAnswer]?.[
              childIndex
            ]?.isNumber === true
          ) {
            form.setFieldsValue({
              answer: getAnswerByIds?.data?.[0]?.answer,
            });
          } else {
            if (
              dataSoucre?.[0]?.question?.preferredAnswers?.[singleAnswer]?.[
                childIndex
              ]?.isNumber === false
            ) {
              form.setFieldsValue({
                answer: getAnswerByIds?.data?.[0]?.answer,
              });
            } else {
              form.setFieldsValue({
                answer: "",
              });
            }
          }
        } else {
          form.resetFields();
          if (
            Number(getAnswerByIds?.data?.[0]?.answer) &&
            dataSoucre?.[0]?.question?.isNumber === true
          ) {
            form.setFieldsValue({
              answer: getAnswerByIds?.data?.[0]?.answer,
            });
          } else {
            if (dataSoucre?.[0]?.question?.isNumber === false) {
              form.setFieldsValue({
                answer: getAnswerByIds?.data?.[0]?.answer,
              });
            } else {
              form.setFieldsValue({
                answer: "",
              });
            }
          }
        }
      }
    }
  }, [getAnswerByIds?.data, dataSoucre?.[0]?.question, childIndex]);

  function withChildElement() {
    if (childElementValue?.body) {
      createAnswerApi(dispatch, childElementValue?.body, () => {
        if (childElementValue?.preferredAnswers?.length > 0) {
          childAccess();
          childElementValue?.highLight();
          childElementValue?.selected();
          setChildElementValue(null);
          setChildNextBtn(false);
          dispatch(clearGetAnswerByIds(getAnswerByIds));
        }
      });
    } else {
      errorMessage("Select atleast one option");
    }
  }


  return (
    <React.Fragment>
      {toggleModal && (
        <FinalStageModal
          toggleOpen={setToggleModal}
          open={toggleModal}
          idsArray={idsArray}
          currentTopic={currentTopic}
          setCurrentTopic={setCurrentTopic}
        />
      )}
      <Form
        onFinish={(event: any) => onFinish(event, dataSoucre?.[0]?.question)}
        name="questionAnswer"
        form={form}
        className=" !w-full bg-[#f0f6f6]"
        autoComplete="off"
        initialValues={{ remember: true }}
        ref={errorRef}
      >
        <AnimatePresence>
          <div className="bg-[#f0f6f6] !h-full min-h-[100vh] !w-full">
            <div className="mb-10 ml-3 mr-3 p-3">
              <div className="bg-[#ffffff] mt-2 flex justify-between rounded-xl w-full">
                <div className="p-5">
                  <h5
                    className="cursor-pointer font-semibold text-[#014043] text-[1.125rem]"
                    onClick={() => navigate("/dashboard")}
                  >
                    <ArrowLeftOutlined /> Back to Home
                  </h5>
                  <h1 className="font-semibold text-[#014043] text-[1.8125rem]">
                    {dataSoucre?.[0]?.question?.topic?.chapter?.title &&
                      `Chapter ${dataSoucre?.[0]?.question?.topic?.chapter?.chapterNo}: ${dataSoucre?.[0]?.question?.topic?.chapter?.title}`}
                  </h1>
                  {dataSoucre?.[0]?.question?.topic?.title && (
                    <h1 className="font-medium text-[#67a6a9] mt-2 text-[1.5rem]">
                      {dataSoucre?.[0]?.question?.topic?.title &&
                        `Topic ${dataSoucre?.[0]?.question?.topic?.topicNo}: ${dataSoucre?.[0]?.question?.topic?.title}`}
                    </h1>
                  )}
                </div>
                <div>
                  <img
                    src={objectsGroup}
                    className="!object-cover overflow-hidden  h-full"
                    alt=""
                  />
                </div>
                <div>
                  <div className="h-full flex items-center px-[20px] py-[20px] ">
                    <div
                      className="w-[100px] h-[100px]
                    flex justify-center items-center questionProgressBar
                  rounded-md"
                      style={{
                        background: `linear-gradient(white, white) padding-box,  
                      conic-gradient(#016A70 ${(Math.ceil(
                          (current / getQuestion?.data?.length) * 100
                        ) /
                            100) *
                          360
                          }deg, #E3E7EF ${(Math.ceil(
                            (current / getQuestion?.data?.length) * 100
                          ) /
                            100) *
                          360
                          }deg, #E3E7EF 360deg) border-box`,
                        borderRadius: "50em",
                        border: "20px solid transparent",
                      }}
                    >
                      <div className="w-full h-full bg-[#fff] rounded-full z-10 flex flex-col justify-center items-center">
                        <h1 className="text-[18px] text-[#016A70] font-semibold leading-4">
                          {Math.ceil(
                            (current / getQuestion?.data?.length) * 100
                          ) | 0}
                          %
                        </h1>
                        <p className="text-[#4A5366] text-[10px]">Complete</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <QuestionsContainer>
              {dataSoucre?.[0]?.question?.[bpElementType]?.length > 0 ? (
                <div className="flex justify-center">
                  <div className="mt-3 gap-5  flex flex-col justify-center sm:w-[50%] mb-4 w-full">
                    <div
                      className={
                        "text-[1.0625rem] flex w-full justify-center border-solid border-b-[2px] border-gray"
                      }
                    >
                      <span className="p-3">
                        <h1 className="font-medium text-[#199DA4] text-[30px]">
                          {`${bpElementType.charAt(0).toUpperCase() +
                            bpElementType?.slice(1) ===
                            "Equities"
                            ? "Equity"
                            : bpElementType?.charAt(0)?.toUpperCase() +
                            bpElementType?.slice(1)?.slice(0, -1)
                            }  ${bpElementCount + 1}: ${dataSoucre?.[0]?.question?.[bpElementType]?.[
                              bpElementCount
                            ]?.name
                            }`}
                        </h1>
                      </span>
                    </div>
                  </div>
                </div>
              ) : dataSoucre?.[0]?.question?.linkedAnswers?.length > 0 ? (
                <div className="flex justify-center">
                  <div className="mt-3 gap-5  flex flex-col justify-center cursor-pointer sm:w-[50%] mb-4 w-full">
                    <div
                      className={
                        "flex w-full justify-center border-solid border-b-[2px] border-gray"
                      }
                    >
                      <div className="p-2 text-center">
                        <h1 className="font-medium text-[#199DA4] text-[30px]">
                          {
                            dataSoucre?.[0]?.question?.linkedAnswers?.[
                              linkedAnswersCount
                            ]?.answer
                          }
                        </h1>
                        <h2 className="font-medium text-[#199DA4] text-[20px]">
                          {dataSoucre?.[0]?.question?.linkedAnswers?.[
                            linkedAnswersCount
                          ]?.product?.name ||
                            dataSoucre?.[0]?.question?.linkedAnswers?.[
                              linkedAnswersCount
                            ]?.service?.name ||
                            dataSoucre?.[0]?.question?.linkedAnswers?.[
                              linkedAnswersCount
                            ]?.staffing?.name ||
                            dataSoucre?.[0]?.question?.linkedAnswers?.[
                              linkedAnswersCount
                            ]?.equity?.name}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
              {dataSoucreGetByQuestionId?.length > 0 ? (
                <div className="w-full">
                  <div className="w-full flex items-center mt-3">
                    <div className="w-full">
                      {childQuestionBoolean && (
                        <span onClick={() => showParent()}>
                          <ArrowLeftOutlined
                            style={{ fontSize: "24px", cursor: "pointer" }}
                          />
                        </span>
                      )}
                      <div className="w-full">
                        {childQuestionBoolean &&
                          dataSoucre?.[0]?.childQuestions ? (
                          dataSoucre?.[0]?.childQuestions
                        ) : dataSoucre?.[0]?.children ? (
                          dataSoucre?.[0]?.children
                        ) : (
                          <h2 className="font-semibold text-[#014043] text-[1.8125rem]">
                            No data found
                          </h2>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full justify-center sm:justify-end flex "></div>
              )}
            </QuestionsContainer>
            <div className="w-full fixed bottom-0  flex justify-between p-8">
              <div>
                {current !== 0 && (
                  <Button
                    onClick={prev}
                    loading={getQuestionById?.loading}
                    disabled={current === 0}
                    className="bg-[#FFFFFF] text-[#4A5366] font-semibold"
                    shape="round"
                    size="large"
                  >
                    <span className="text-xl">&#x2190;</span>{" "}
                    <span>
                      <h5>Previous</h5>
                    </span>
                  </Button>
                )}
              </div>
              <div className="absolute bottom-10 right-20 ">
                {dataSoucre?.[0]?.question?.linkedAnswers?.length > 0 &&
                  dataSoucre?.[0]?.question?.[bpElementType]?.length > 0 ? (
                  <Button
                    className="bg-[#016A70] text-[#FFFFFF] font-semibold"
                    shape="round"
                    size="large"
                    loading={
                      linkedAnswers?.loading ||
                      postTableValues?.loading ||
                      linkedAnswers.loading
                    }
                    disabled={
                      linkedAnswers?.loading ||
                      postTableValues?.loading ||
                      linkedAnswers.loading ||
                      dataSoucre?.[0]?.question?.isMCQ && dataSoucre?.[0]?.question?.mcqType === "Single" && singleAnswer === null
                    }
                    onClick={() =>
                      handleNextLinked(
                        dataSoucre?.[0]?.question,
                        dataSoucre?.[0]?.question?.linkedAnswers?.length ==
                          linkedAnswersCount + 1 &&
                          dataSoucre?.[0]?.question?.[bpElementType]?.length ==
                          bpElementCount + 1
                          ? "submit"
                          : "next"
                      )
                    }
                  >
                    <span>Next</span>
                    <span className="text-xl">&#x2192;</span>
                  </Button>
                ) : dataSoucre?.[0]?.question?.[bpElementType]?.length > 0 &&
                  dataSoucre?.[0]?.question?.preferredAnswers?.[singleAnswer]
                    ?.length > 0 ? (
                  <>
                    {childNextBtn ? (
                      <Button
                        className="bg-[#016A70] text-[#FFFFFF] font-semibold"
                        shape="round"
                        size="large"
                        loading={
                          createAnswer?.loading ||
                          postTableValues?.loading ||
                          linkedAnswers.loading
                        }
                        disabled={
                          createAnswer?.loading ||
                          postTableValues?.loading ||
                          linkedAnswers.loading ||
                          dataSoucre?.[0]?.question?.isMCQ && dataSoucre?.[0]?.question?.mcqType === "Single" && singleAnswer === null
                        }
                        onClick={() => {
                          withChildElement();
                        }}
                      >
                        <span>Next</span>
                        <span className="text-xl">&#x2192;</span>
                      </Button>
                    ) : (
                      <Button
                        className="bg-[#016A70] text-[#FFFFFF] font-semibold"
                        shape="round"
                        size="large"
                        loading={
                          createAnswer?.loading ||
                          postTableValues?.loading ||
                          linkedAnswers.loading
                        }
                        disabled={
                          createAnswer?.loading ||
                          postTableValues?.loading ||
                          linkedAnswers.loading ||
                          !childQuestionBoolean ||
                          dataSoucre?.[0]?.question?.isMCQ && dataSoucre?.[0]?.question?.mcqType === "Single" && singleAnswer === null
                        }
                        onClick={() =>
                          handleNextBpWithChild(
                            dataSoucre?.[0]?.question?.preferredAnswers?.[
                            singleAnswer
                            ]?.[childIndex],
                            dataSoucre?.[0]?.question?.preferredAnswers?.[
                              singleAnswer
                            ]?.length ==
                              childIndex + 1
                              ? "submit"
                              : "next"
                          )
                        }
                      >
                        <span>Next </span>
                        <span className="text-xl">&#x2192;</span>
                      </Button>
                    )}
                  </>
                ) : dataSoucre?.[0]?.question?.linkedAnswers?.length > 0 ? (
                  <Button
                    className="bg-[#016A70] text-[#FFFFFF] font-semibold"
                    shape="round"
                    size="large"
                    loading={
                      createAnswer?.loading ||
                      postTableValues?.loading ||
                      linkedAnswers.loading
                    }
                    disabled={
                      createAnswer?.loading ||
                      postTableValues?.loading ||
                      linkedAnswers.loading ||
                      dataSoucre?.[0]?.question?.isMCQ && dataSoucre?.[0]?.question?.mcqType === "Single" && singleAnswer === null
                    }
                    onClick={() =>
                      handleNextLinked(
                        dataSoucre?.[0]?.question,
                        dataSoucre?.[0]?.question?.linkedAnswers?.length ==
                          linkedAnswersCount + 1
                          ? "submit"
                          : "next"
                      )
                    }
                  >
                    <span>Next</span>
                    <span className="text-xl">&#x2192;</span>
                  </Button>
                ) : dataSoucre?.[0]?.question?.[bpElementType]?.length ? (
                  <Button
                    className="bg-[#016A70] text-[#FFFFFF] font-semibold"
                    shape="round"
                    size="large"
                    loading={createAnswer?.loading || postTableValues?.loading}
                    disabled={createAnswer?.loading || postTableValues?.loading ||
                      dataSoucre?.[0]?.question?.isMCQ && dataSoucre?.[0]?.question?.mcqType === "Single" && singleAnswer === null
                    }
                    onClick={() =>
                      handleNextBp(
                        dataSoucre?.[0]?.question,
                        dataSoucre?.[0]?.question?.[bpElementType]?.length ==
                          bpElementCount + 1
                          ? "submit"
                          : "next",
                        dataSoucre?.[0]?.question?.preferredAnswers
                      )
                    }
                  >
                    <span>Next</span>
                    <span className="text-xl">&#x2192;</span>
                  </Button>
                ) : dataSoucre?.[0]?.question?.preferredAnswers?.[singleAnswer]
                  ?.length ? (
                  <>
                    {childNextBtn ? (
                      <Button
                        className="bg-[#016A70] text-[#FFFFFF] font-semibold"
                        shape="round"
                        size="large"
                        loading={
                          createAnswer?.loading || postTableValues?.loading
                        }
                        disabled={
                          createAnswer?.loading || postTableValues?.loading
                        }
                        onClick={() => withChildElement()}
                      >
                        <span>Next</span>
                        <span className="text-xl">&#x2192;</span>
                      </Button>
                    ) : (
                      <Button
                        className="bg-[#016A70] text-[#FFFFFF] font-semibold"
                        shape="round"
                        size="large"
                        loading={
                          createAnswer?.loading || postTableValues?.loading
                        }
                        disabled={
                          createAnswer?.loading || postTableValues?.loading ||
                          dataSoucre?.[0]?.question?.isMCQ && dataSoucre?.[0]?.question?.mcqType === "Single" && singleAnswer === null
                        }
                        onClick={() =>
                          handleChildElementNext(
                            dataSoucre?.[0]?.question?.preferredAnswers?.[
                            singleAnswer
                            ]?.[childIndex],
                            dataSoucre?.[0]?.question?.preferredAnswers?.[
                              singleAnswer
                            ]?.length ==
                              childIndex + 1
                              ? "submit"
                              : "next"
                          )
                        }
                      >
                        <span>Next </span>

                        <span className="text-xl">&#x2192;</span>
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    htmlType="submit"
                    loading={createAnswer?.loading || postTableValues?.loading}
                    disabled={createAnswer?.loading || postTableValues?.loading ||
                      dataSoucre?.[0]?.question?.isMCQ && dataSoucre?.[0]?.question?.mcqType === "Single" && singleAnswer === null
                    }
                    className="bg-[#016A70] text-[#FFFFFF] font-semibold"
                    shape="round"
                    size="large"
                  >
                    <span>Next </span>
                    <span className="text-xl">&#x2192;</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </AnimatePresence>
      </Form>
    </React.Fragment>
  );
};

export default MainQuestion;
