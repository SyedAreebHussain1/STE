import React from "react";
import IdeaHeader from "./helpers/IdeaHeader";
import StepsIdea from "./helpers/StepsIdea";
import { PageContainer } from "../../components/PageContainer/PageContainer";

const AddNewIdea = () => {
  return (
    <React.Fragment>
      <PageContainer>
        <div className="flex flex-col items-start w-full sm:p-4 p-0">
          <IdeaHeader />
          <div className="flex w-full sm:p-4 p-0 border border-1 rounded-md bg-[#CCE1E2]/15">
            <StepsIdea />
          </div>
        </div>
      </PageContainer>
    </React.Fragment>
  );
};

export default AddNewIdea;
