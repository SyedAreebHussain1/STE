import React from "react";
import Header from "./helpers/Header/Header";
import MainSteps from "./helpers/MainSteps";

const OnboardingSteps = () => {
  return (
    <React.Fragment>
      <div className="bg-[#F8FAFC] ">
        <Header />
        <MainSteps />
      </div>
    </React.Fragment>
  );
};

export default OnboardingSteps;
