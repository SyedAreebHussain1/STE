import React from "react";
import SectionContainer from "../../SectionContainer";
import AgencyDetailsInput from "./AgencyDetailsInput";

type Props = {};

const AgencyDetailsSection = (props: Props) => {
  return (
    <SectionContainer
      title="Agency Details"
      subtitle="Provide your Real Estate Agency Details."
    >
      <AgencyDetailsInput />
    </SectionContainer>
  );
};

export default AgencyDetailsSection;
