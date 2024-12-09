import React from "react";
import StepsIdea from "../../../AddNewIdea/helpers/StepsIdea";
import Header from "../Header";
import { useLocation } from "react-router-dom";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";

interface OnBoardingIdeaProps {
  isVisible: boolean;
  onCancel: () => void;
}

const OnBoardingIdea: React.FC<OnBoardingIdeaProps> = () => {
  const { state } = useLocation();

  return (
    <div>
      <div className="px-4">
        <Header />
      </div>
      <div className="sm:p-10 p-4 bg-[#f0f8ff] ">
        <StepsIdea valueData={state} />
      </div>
    </div>
  );
};

export default OnBoardingIdea;
