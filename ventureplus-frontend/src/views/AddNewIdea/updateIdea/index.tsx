import React from "react";
import IdeaHeader from "./helpers/UpdateIdeaHeader";
import StepsIdea from "./helpers/UpdateStepsIdea";
import { PageContainer } from "../../../components/PageContainer/PageContainer";

const UpdateNewIdea = () => {
  return (
    <React.Fragment>
      <PageContainer>
        <div className="flex flex-col items-start w-full p-4">
          <IdeaHeader />
          <div className="flex w-full p-4 border border-1 rounded-md bg-[#CCE1E2]/15">
            <StepsIdea />
          </div>
        </div>
      </PageContainer>
    </React.Fragment>
  );
};

export default UpdateNewIdea;
