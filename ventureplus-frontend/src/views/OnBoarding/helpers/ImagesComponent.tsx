import {
  businessLocation,
  bestDescribe,
  businessCalled,
  businessDesciption,
  currencyAndLanguage,
  industryOperation,
  nameAndRole,
  businessPlan,
} from "../../../assets/onBoardingAssets";
import { CustomFields, QuestionItem } from "./OnBoardingList";

interface Props extends CustomFields {
  item: QuestionItem;
  index: number;
  value: any;
  setValue: any;
}

const ImagesComponent = ({ item }: Props) => {
  return (
    <>
      {item?.keyValue === "category" && (
        <img src={bestDescribe} className="rounded-md h-[80%] w-[80%]" />
      )}
      {item?.keyValue == "businessStage" && (
        <img src={businessPlan} className="rounded-md h-[65%] w-[65%]" />
      )}
      {item?.keyValue == "businessName" && (
        <img src={businessCalled} className="rounded-md h-[80%] w-[80%]" />
      )}
      {item?.keyValue == "businesslocated" && (
        <img src={businessLocation} className="rounded-md h-[80%] w-[80%]" />
      )}
      {item?.keyValue == "nameAndRole" && (
        <img src={nameAndRole} className="rounded-md h-[70%] w-[70%]" />
      )}
      {item?.keyValue == "businessDescription" && (
        <img src={businessDesciption} className="rounded-md h-[70%] w-[70%]" />
      )}
      {item?.keyValue == "currencyAndLanguage" && (
        <img
          src={currencyAndLanguage}
          className="rounded-md h-[60%] w-[60%] "
        />
      )}
      {item?.keyValue == "businessIndustry" && (
        <img src={industryOperation} className="rounded-md h-[70%] w-[70%] " />
      )}
      {item?.keyValue == "businessStartup" && (
        <img src={businessLocation} className="rounded-md h-full w-full" />
      )}
    </>
  );
};

export default ImagesComponent;
