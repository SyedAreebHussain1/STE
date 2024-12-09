import React from "react";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import BusinessToolkitLayout from "../BusinessToolkitLayout";
import Banner from "../BusinessToolkitLayout/helpers/Banner";
import RoundedButton from "../../../../components/button/RoundedButton";
import { canvas } from "../../../../assets/BusinessToolkit";

type Props = {};

const DownloadCanvas = (props: Props) => {
  return (
    <PageContainer>
      <Banner />
      <div className="flex justify-between items-center my-5">
        <h1 className="text-body font-semibold heading-s my-4">
          Your Canvas
        </h1>
        <RoundedButton title={"Download PDF"} type="primary" sm />
      </div>
      <img src={canvas} alt="" className="w-full" />
    </PageContainer>
  );
};

export default DownloadCanvas;
