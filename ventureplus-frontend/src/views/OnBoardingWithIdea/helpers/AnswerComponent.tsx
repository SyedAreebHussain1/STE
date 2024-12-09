import OnBoardingBusinessStage from "./AnswerComponent/OnBoardingBusinessStage";
import OnBoardingCountry from "./AnswerComponent/OnBoardingCountry";
import OnBoardingBusinessDescription from "./AnswerComponent/OnBoardingBusinessDescription";
import OnBoardingBusinessName from "./AnswerComponent/OnBoardingBusinessName";
import OnBoardingRoleAndName from "./AnswerComponent/OnBoardingRoleAndName";
import OnBoardingCurrencyAndLanguage from "./AnswerComponent/OnBoardingCurrencyAndLanguage";
import OnBoardingBusinessType from "./AnswerComponent/OnBoardingBusinessType";
import OnBoardingYearAndMonth from "./AnswerComponent/OnBoardingYearAndMonth";
import { CustomFields, QuestionItem } from "./OnBoardingList";

interface Props extends CustomFields {
  item: QuestionItem;
  index: number;
  value: any;
  setValue: any;
}

const AnswerComponent = ({
  item,
  index,
  value,
  setValue,
  customRole,
  setCustomRole,
  customIndustry,
  setCustomIndustry,
}: Props) => {
  return (
    <>
      {item?.keyValue == "businessStage" && (
        <OnBoardingBusinessStage
          item={item}
          index={index}
          value={value}
          setValue={setValue}
        />
      )}
      {item?.keyValue == "businessName" && (
        <OnBoardingBusinessName value={value} setValue={setValue} item={item} />
      )}
      {item?.keyValue == "businesslocated" && (
        <OnBoardingCountry value={value} setValue={setValue} item={item} />
      )}
      {item?.keyValue == "nameAndRole" && (
        <OnBoardingRoleAndName
          value={value}
          setValue={setValue}
          item={item}
          custom={customRole}
          setCustom={setCustomRole}
        />
      )}
      {item?.keyValue == "businessDescription" && (
        <OnBoardingBusinessDescription
          value={value}
          setValue={setValue}
          item={item}
        />
      )}
      {item?.keyValue == "currencyAndLanguage" && (
        <OnBoardingCurrencyAndLanguage
          value={value}
          setValue={setValue}
          item={item}
        />
      )}
      {item?.keyValue == "businessIndustry" && (
        <OnBoardingBusinessType
          value={value}
          setValue={setValue}
          item={item}
          custom={customIndustry}
          setCustom={setCustomIndustry}
        />
      )}
      {item?.keyValue == "businessStartup" && (
        <OnBoardingYearAndMonth value={value} setValue={setValue} item={item} />
      )}
    </>
  );
};

export default AnswerComponent;
