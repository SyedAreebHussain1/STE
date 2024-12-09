import React, { ReactNode, useState } from "react";
import PropertyDetailsStep from "./Steps/PropertyDetailsStep/PropertyDetailsStep";
import ImageAndAttachmentsStep from "./Steps/ImageAndAttachmentsStep/ImageAndAttachmentsStep";
import FeaturesStep from "./Steps/FeaturesStep/FeaturesStep";
import CommissionStep from "./Steps/CommissionStep/CommissionStep";
import Steps, { StepsItemsType } from "../../../helpers/Steps/Steps";
import { Form } from "antd";
import { FormInstance } from "antd/lib";

type Props = {};

const InventorySteps = (props: Props) => {
  const [current, setCurrent] = useState(0);
  function prev() {
    setCurrent((prev) => prev - 1);
  }
  function next() {
    setCurrent((prev) => prev + 1);
  }
  const items: StepsItemsType = [
    {
      label: "Project Details",
      component: (currentStep: number, formInstance: any) => (
        <PropertyDetailsStep
          current={currentStep}
          next={next}
          prev={prev}
          formInstance={formInstance}
        />
      ),
      formInstance: Form.useForm(),
    },
    {
      label: "Images and Attachments",
      component: (currentStep: number, formInstance: any) => (
        <ImageAndAttachmentsStep
          current={currentStep}
          next={next}
          prev={prev}
          formInstance={formInstance}
        />
      ),
      formInstance: Form.useForm(),
    },
    {
      label: "Features",
      component: (currentStep: number, formInstance: any) => (
        <FeaturesStep
          current={currentStep}
          next={next}
          prev={prev}
          formInstance={formInstance}
        />
      ),
      formInstance: Form.useForm(),
    },
    {
      label: "Commission",
      component: (currentStep: number, formInstance: any) => (
        <CommissionStep
          current={currentStep}
          next={next}
          prev={prev}
          formInstance={formInstance}
        />
      ),
      formInstance: Form.useForm(),
    },
  ];
  return <Steps items={items} current={current} next={next} prev={prev} />;
};

export default InventorySteps;
