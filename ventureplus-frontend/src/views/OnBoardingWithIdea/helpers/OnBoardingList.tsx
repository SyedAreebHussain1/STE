import React, { SetStateAction, useState } from "react";
import RoundedButton from "../../../components/button/RoundedButton";
import OnBoardingQuestionAnswerComponent from "./OnBoardingQuestionAnswerComponent";
import { stepGif } from "../../../assets/onBoardingAssets";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { createBusinessApi } from "../../../services/api/auth";
import { useNavigate } from "react-router-dom";
import { getFromStorage } from "../../../utils/storage";
import { RootState } from "../../../redux/store";
import OnBoardingRoleAndName from "./AnswerComponent/OnBoardingRoleAndName";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state: RootState) => state.createBusiness);
  const user = getFromStorage("user");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");

  const onSuccessfullyBusinessCreate = () => {
    const updatedUser = {
      ...user,
      companyUser: {
        ...user.companyUser,
        isOnboard: true,
      },
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    navigate("/on-boarding-final");
  };

  const nextQuestion = () => {
    if (currentIndex < questionItems.length - 1) {
      setDirection("up");
      setCurrentIndex(currentIndex + 1);
    } else {
      const body = {
        name: value.businessName,
        description: value.businessDescription,
        companyId: value.companyId,
        stage: "Idea",
        industry: value.businessIndustry,
        currencyId: value.currency,
        city: value.city,
        country: value.country,
        latitude: value.latitude,
        longitude: value.longitude,
      };
      createBusinessApi(body, dispatch, onSuccessfullyBusinessCreate);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setDirection("down");
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="h-max overflow-x-hidden flex flex-col items-center relative  ">
      <Header />
      <div className="flex justify-center items-center h-[70px] w-[500px] relative  ">
        <div className="bg-[#99C3C6] rounded-md w-full h-[10px] ">
          <div
            className="bg-primary h-full transition-all duration-500  rounded-md "
            style={{
              width: (currentIndex / questionItems.length) * 100 + "%",
            }}
          >
            <img
              src={stepGif}
              alt="My GIF"
              className="absolute  bottom-[10px] w-[50px] h-[50px] translate-x-[-50%] transition-all duration-500"
              style={{
                left: (currentIndex / questionItems.length) * 100 + "%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="onBoarding-container w-full">
          <div className=" w-full flex justify-center sm:h-[700px] md:h-[700px] lg-h-[600px] xl:h-[470px] 2xl:h-[80vh]">
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
           
          <div className="flex justify-end w-full gap-2">
            <RoundedButton
              onClick={prevQuestion}
              disabled={currentIndex === 0}
              title={"Previous"}
              type="secondary"
              className="w-[110px]"
              sm
            />
            <RoundedButton
              onClick={nextQuestion}
              disabled={!value[questionItems[currentIndex].keyValue]}
              title={"Next"}
              type="primary"
              className="w-[110px]"
              sm
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingList;
