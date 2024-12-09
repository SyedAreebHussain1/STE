import React, { useEffect } from "react";
import FinalScreen from "./helpers/FinalScreen";

const OnBoardingFinal = () => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Tab") {
        event.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <React.Fragment>
      <FinalScreen />
    </React.Fragment>
  );
};

export default OnBoardingFinal;
