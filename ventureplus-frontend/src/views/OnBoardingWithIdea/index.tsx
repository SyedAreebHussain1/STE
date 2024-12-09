import { useEffect, useState } from "react";
import OnBoardingList, { QuestionItem } from "./helpers/OnBoardingList";

// const SampleAnswerComponent: React.FC = () => <div>This is the answer</div>;
const OnBoardingWithIdea = () => {
  const [customRole, setCustomRole] = useState<boolean>(false);
  const [customIndustry, setCustomIndustry] = useState<boolean>(false);

  const [value, setValue] = useState({
    businessStage: null,
    businessName: null,
    businesslocated: false,
    userName: null,
    userRole: null,
    businessDescription: null,
    currencyAndLanguage: false,
    businessIndustry: null,
    nameAndRole: false,
    currency: null,
    language: null,
    address: "",
    city: "",
    country: null,
    businessStartup: false,
    year: 0,
    month: 0,
    latitude: "",
    longitude: "",
  });
  const [questionItems, setQuestionItems] = useState<QuestionItem[]>([
    {
      question: "Where is the business located?",
      keyValue: "businesslocated",

      questionChildOption: [
        {
          example: "Example :",
          exampleDiscription:
            "Imagine you're starting a bakery and need to create a plan outlining your menu,target market, location strategy, and financial projections.",
        },
        {
          example: "Example :",
          exampleDiscription:
            "Imagine you're starting a bakery and need to create a plan outlining your menu,target market, location strategy, and financial projections.",
        },
      ],
    },
    {
      question: "Which currency & language will you be using?",
      keyValue: "currencyAndLanguage",

      questionChildOption: [
        {
          example: "Example :",
          exampleDiscription:
            "Imagine you're starting a bakery and need to create a plan outlining your menu,target market, location strategy, and financial projections.",
        },
        {
          example: "Example :",
          exampleDiscription:
            "Imagine you're starting a bakery and need to create a plan outlining your menu,target market, location strategy, and financial projections.",
        },
      ],
    },
    {
      question: "Give us a brief description of your business.",
      keyValue: "businessDescription",

      questionChildOption: [
        {
          example: "Example :",
          exampleDiscription:
            "Imagine you're starting a bakery and need to create a plan outlining your menu,target market, location strategy, and financial projections.",
        },
        {
          example: "Example :",
          exampleDiscription:
            "Imagine you're starting a bakery and need to create a plan outlining your menu,target market, location strategy, and financial projections.",
        },
      ],
    },
    {
      question: "What industry will you be operating in?",
      keyValue: "businessIndustry",

      questionChildOption: [
        {
          example: "Example :",
          exampleDiscription:
            "Imagine you're starting a bakery and need to create a plan outlining your menu,target market, location strategy, and financial projections.",
        },
        {
          example: "Example :",
          exampleDiscription:
            "Imagine you're starting a bakery and need to create a plan outlining your menu,target market, location strategy, and financial projections.",
        },
      ],
    },
    {
      question: "What will your business be called?",
      keyValue: "businessName",

      questionChildOption: [
        {
          exampleDiscription:
            "If you haven't chosen a name, enter a temporary one and change it later in the Business Settings.",
        },
      ],
    },
  ]);

  useEffect(() => {
    if (value.businessStage && value.businessStage !== "Idea") {
      setQuestionItems((pre) => [
        ...pre,
        {
          question: "When did you start your business or startup?",
          keyValue: "businessStartup",

          questionChildOption: [
            {
              exampleDiscription:
                "Select the month, year, and date your business or startup began.",
            },
          ],
        },
      ]);
    } else if (value.businessStage && value.businessStage === "Idea") {
      setQuestionItems((pre) =>
        pre.filter((item) =>
          item.keyValue === "businessStartup" ? null : item
        )
      );
    }
  }, [value.businessStage]);

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
    <div className="h-full  px-10 pb-[8px] ">
      <OnBoardingList
        questionItems={questionItems}
        value={value}
        setValue={setValue}
        customRole={customRole}
        setCustomRole={setCustomRole}
        customIndustry={customIndustry}
        setCustomIndustry={setCustomIndustry}
      />
    </div>
  );
};

export default OnBoardingWithIdea;
