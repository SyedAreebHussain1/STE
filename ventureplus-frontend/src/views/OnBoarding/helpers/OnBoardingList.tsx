import React, { SetStateAction, useState } from "react";
import RoundedButton from "../../../components/button/RoundedButton";
import OnBoardingQuestionAnswerComponent from "./OnBoardingQuestionAnswerComponent";
import { stepGif } from "../../../assets/onBoardingAssets";
import Signup from "../../Signup";
import Header from "./Header";

// Update the interface to use enums
export interface QuestionItem {
  question?: string;
  questionChildOption?: any[];
  keyValue: string;
}

export interface CustomFields {
  customRole: boolean;
  customIndustry: boolean;
  setCustomRole: React.Dispatch<SetStateAction<boolean>>;
  setCustomIndustry: React.Dispatch<SetStateAction<boolean>>;
}
export interface OnBoardingListProps extends CustomFields {
  questionItems: QuestionItem[];
  value: any;
  setValue: any;
}

const OnBoardingList: React.FC<OnBoardingListProps> = ({
  questionItems,
  value,
  setValue,
  customRole,
  setCustomRole,
  customIndustry,
  setCustomIndustry,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [signup, setSignup] = useState(false);

  const nextQuestion = () => {
    if (currentIndex < questionItems.length - 1) {
      setDirection("up");
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setDirection("down");
      setCurrentIndex(currentIndex - 1);
    }
  };
  function signUpHandler() {
    setSignup((pre) => !pre);
  }

  return (
    <div className="h-[100vh] overflow-x-hidden flex flex-col items-center relative  ">
      <Header />
      <div className="flex justify-center items-center h-[70px] w-[500px] relative mt-3 ">
        <div className="bg-gray-200 rounded-md w-full h-[10px] ">
          <div
            className="bg-primary h-full transition-all duration-500  rounded-md "
            style={{
              width: signup
                ? "100%"
                : (currentIndex / (questionItems.length + 1)) * 100 + "%",
            }}
          >
            <img
              src={stepGif}
              alt="My GIF"
              className="absolute  bottom-[10px] w-[50px] h-[50px] translate-x-[-50%] transition-all duration-500"
              style={{
                left: signup
                  ? "100%"
                  : (currentIndex / (questionItems.length + 1)) * 100 + "%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div
          className={`flex w-[200%] h-full relative justify-between transition-all duration-500 ${
            signup ? "left-[-100%]" : "left-[0]"
          }`}
        >
          <div className="onBoarding-container w-[50%] ">
            <div className=" w-[100%] flex justify-center h-[80vh]">
              <OnBoardingQuestionAnswerComponent
                questionItems={questionItems}
                currentIndex={currentIndex}
                direction={direction}
                value={value}
                setValue={setValue}
                customRole={customRole}
                setCustomRole={setCustomRole}
                customIndustry={customIndustry}
                setCustomIndustry={setCustomIndustry}
              />
            </div>
            <div className="flex justify-between w-full gap-2 pt-2 pb-1">
              <RoundedButton
                onClick={signup ? signUpHandler : prevQuestion}
                disabled={currentIndex === 0}
                title={"Previous"}
                className={`w-[110px] text-[#016A70]${
                  currentIndex === 0 ? "flex hidden" : "block"
                }`}
                sm
              />
              <div className="flex items-end justify-end w-full">
                <RoundedButton
                  onClick={() =>
                    questionItems?.length - 1 === currentIndex
                      ? signUpHandler()
                      : nextQuestion()
                  }
                  disabled={!value[questionItems[currentIndex].keyValue]}
                  title={"Next"}
                  type="primary"
                  className="w-[110px]"
                  sm
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Signup signUpHandler={signUpHandler} value={value} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingList;
