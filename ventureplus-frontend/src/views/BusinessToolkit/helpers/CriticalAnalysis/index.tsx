import React from "react";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import BusinessToolkitLayout from "../BusinessToolkitLayout";

interface Props {}

const CriticalAnalysis = (props: Props) => {
  return (
    <PageContainer>
      <BusinessToolkitLayout />
      <h1 className="text-body font-semibold heading-s my-4">Critical Analysis</h1>
    </PageContainer>
  );
};

export default CriticalAnalysis;
