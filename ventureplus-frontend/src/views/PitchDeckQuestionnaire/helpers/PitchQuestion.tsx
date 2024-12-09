import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAttemptedPitchAnswersApi,
  getPitchQuestionByIdApi,
  postPitchAnswerApi,
} from "../../../services/api/PitchDeck";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { PageContainer } from "../../../components/PageContainer/PageContainer";
import {
  leftArrowBlackIcon,
  rightArrowGrayIcon,
  rightArrowIcon,
} from "../../../assets";
import objectsGroup from "../../../assets/question/Objects.png";
import { InitialQuestionsContainer } from "../../InitialBusinessPlan/helpers/InitialQuestionsContainer";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import DescriptiveAnswer from "../../../components/questionTypes/DescriptiveAnswer";
import SingleSelectAnswer from "../../../components/questionTypes/SingleSelectAnswer";
import MultiSelectAnswer from "../../../components/questionTypes/MultiSelectAnswer";
import { leftArrowGrayIcon } from "../../../assets/website";
import { Spin } from "antd";

interface PitchQuestionI {
  questions: any[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const PitchQuestion = ({ questions, current, setCurrent }: PitchQuestionI) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<any[]>([]);
  const [descriptiveAnswer, setDescriptiveAnswer] = useState("");
  const [multiSelectAnswers, setMultiSelectAnswers] = useState<any[]>([]);
  const [singleMcqAnswer, setSingleMcqAnswer] = useState<any[]>([]);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );
  const getPitchQuestionById = useSelector(
    (state: RootState) => state.getPitchQuestionById
  );
  const pitchDeck = useSelector((state: RootState) => state.pitchDeck?.data);
  const getAttemptedPitchAnswers = useSelector(
    (state: RootState) => state.getAttemptedPitchAnswers
  );

  useEffect(() => {
    if (questions.length > 0 && currentSelectedBusiness?.business?.id) {
      getPitchQuestionByIdApi(
        dispatch,
        questions[current]?.id,
        currentSelectedBusiness?.business?.id
      );
    }
  }, [questions, current, currentSelectedBusiness?.business?.id]);

  useEffect(() => {
    //to retreive the answer of previously attempted question
    if (getPitchQuestionById?.data?.id && pitchDeck?.data?.id)
      getAttemptedPitchAnswersApi(
        dispatch,
        getPitchQuestionById?.data?.id,
        pitchDeck?.data?.id,
        (res: any) => {
          if (res?.data?.length > 0) {
            setAnswer(res?.data?.map((ans: any) => ans?.answer));
            if (getPitchQuestionById?.data?.isMCQ) {
              if (getPitchQuestionById?.data?.mcqType === "Single") {
                setSingleMcqAnswer(res?.data?.map((ans: any) => ans?.answer));
              } else if (getPitchQuestionById?.data?.mcqType === "Multiple") {
                setMultiSelectAnswers(
                  res?.data?.map((ans: any) => ans?.answer)
                );
              }
            } else {
              const text = res?.data?.map((ans: any) => ans?.answer);
              setDescriptiveAnswer(text[0]);
            }
          } else {
            emptyStates();
          }
        }
      );


    //if auto-suggestion is allowed, populate options through another API
    if(getPitchQuestionById?.data?.autoSuggestion){
      // api not ready yet
    }
  }, [getPitchQuestionById]);

  useEffect(() => {
    if (!(questions.length > 0) && !currentSelectedBusiness?.business?.id)
      return;
    isDisabled();
  }, [
    getPitchQuestionById?.data,
    current,
    currentSelectedBusiness?.business?.id,
    descriptiveAnswer,
    multiSelectAnswers,
    singleMcqAnswer,
    getAttemptedPitchAnswers,
  ]);

  const next = () => {
    if (current + 1 == questions.length) {
      postAnswer(true);
    } else {
      postAnswer();
    }
  };

  const previous = () => {
    emptyStates();
    setCurrent(current - 1);
  };

  const postAnswer = (isLastQuestion?: boolean) => {
    postPitchAnswerApi(
      dispatch,
      {
        answer: answer,
        questionId: questions[current]?.id,
        businessId: currentSelectedBusiness?.business?.id,
        pitchDeckId: pitchDeck?.data?.id,
      },
      () => {
        //future-note: use isLastQuestion boolean value for navigation when the user attempts the last question
        emptyStates();
        setCurrent(current + 1);
        if (isLastQuestion) navigate("/dashboard");
      }
    );
  };

  const emptyStates = () => {
    setDescriptiveAnswer("");
    setMultiSelectAnswers([]);
    setSingleMcqAnswer([]);
    setAnswer([]);
  };

  const isDisabled = () => {
    // if there are no questions
    if (questions.length <= 0) {
      setIsNextDisabled(true);
      return;
    }

    if (getPitchQuestionById?.data?.isMCQ) {
      // if its mcq, then then identify its type and target it only
      if (
        getPitchQuestionById?.data?.mcqType === "Single" &&
        !singleMcqAnswer
      ) {
        setIsNextDisabled(true);
        return;
      } else if (
        getPitchQuestionById?.data?.mcqType === "Multiple" &&
        multiSelectAnswers.length <= 0
      ) {
        setIsNextDisabled(true);
        return;
      }
    } else {
      // if its descriptive, then target the descriptive state only
      if (!descriptiveAnswer) {
        setIsNextDisabled(true);
        return;
      }
    }

    setIsNextDisabled(false);
  };

  return (
    <PageContainer>
      <div className="bg-primary bg-opacity-[6%] w-full min-h-screen rounded-[20px] p-10">
        <div className="w-full h-[170px] bg-[white] flex justify-between rounded-[20px] overflow-hidden shadow-[0px_4px_9.7px_0px_#002A2D29]">
          <div className="flex flex-col gap-3 rounded-[20px] p-10">
            <h1 className="text-green-700 heading-l font-semibold">
              {getPitchQuestionById?.data?.type}
            </h1>
            <h1 className="text-primaryActive text-2xl font-medium">
              {getPitchQuestionById?.data?.type}
            </h1>
          </div>
          <img src={objectsGroup} alt="" />
        </div>
        <InitialQuestionsContainer>
          {getPitchQuestionById?.loading ? (
            <Spin className="!m-auto !h-full !w-full" />
          ) : (
            <>
              <h1 className="text-body heading-l font-semibold">
                {getPitchQuestionById?.data?.question}
              </h1>
              {!getAttemptedPitchAnswers.loading &&
                getPitchQuestionById?.data && (
                  <>
                    {getPitchQuestionById?.data?.isMCQ ? (
                      getPitchQuestionById?.data?.mcqType === "Single" ? (
                        <SingleSelectAnswer
                          options={getPitchQuestionById?.data?.mcqAnswers}
                          selectedOption={singleMcqAnswer}
                          setSelectedOption={setSingleMcqAnswer}
                          setAnswer={setAnswer}
                        />
                      ) : (
                        <MultiSelectAnswer
                          options={getPitchQuestionById?.data?.mcqAnswers}
                          selectedOptions={multiSelectAnswers}
                          setSelectedOptions={setMultiSelectAnswers}
                          setAnswer={setAnswer}
                        />
                      )
                    ) : (
                      <DescriptiveAnswer
                        descriptiveAnswer={descriptiveAnswer}
                        setDescriptiveAnswer={setDescriptiveAnswer}
                        setAnswer={setAnswer}
                      />
                    )}
                  </>
                )}
            </>
          )}
        </InitialQuestionsContainer>
        <div className="flex justify-between items-center">
          <ButtonWithSvg
            title={"Previous"}
            icon={current == 0 ? leftArrowGrayIcon : leftArrowBlackIcon}
            type="white"
            sm
            bold
            isLeft
            disabled={current == 0}
            loading={getPitchQuestionById?.loading}
            onClick={previous}
          />
          <ButtonWithSvg
            title={current + 1 == questions.length ? "Complete" : "Next"}
            icon={isNextDisabled ? rightArrowGrayIcon : rightArrowIcon}
            type="primary"
            sm
            bold
            disabled={isNextDisabled}
            loading={getPitchQuestionById?.loading}
            onClick={next}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default PitchQuestion;
