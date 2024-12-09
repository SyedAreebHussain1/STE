import React, { useEffect } from "react";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import Sections from "./helpers/Sections";

const IdeaEvaluation = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <React.Fragment>
      <div className="flex flex-col items-center w-full !bg-[#FFFFFF]">
        <div className="xs:w-[98vw] 2xl:w-[1836px]">
          <PageContainer>
            <Sections />
          </PageContainer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IdeaEvaluation;
