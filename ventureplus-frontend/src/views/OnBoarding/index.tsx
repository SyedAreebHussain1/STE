import React, { useEffect, useState } from "react";
import OnBoardingList, { QuestionItem } from "./helpers/OnBoardingList";

const OnBoarding = () => {
  const [customRole, setCustomRole] = useState<boolean>(false);
  const [customIndustry, setCustomIndustry] = useState<boolean>(false);
  const [value, setValue] = useState({
    category: "",
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
      question: "What is your name & role?",
      keyValue: "nameAndRole",

      questionChildOption: [
        {
          exampleDiscription:
            "Please provide your full name and describe your position or affiliation with the business.",
        },
      ],
    },
    {
      question: "Where is the business located?",
      keyValue: "businesslocated",

      questionChildOption: [
        {
          exampleDiscription:
            "This refers to the physical address or primary location where the business operates (To get better responses and insights from our AI model, select the exact location from the button below)",
        },
      ],
    },
    {
      question: "Which of these best describe you?",
      keyValue: "category",
    },

    {
      question: "Give a description of your business",
      keyValue: "businessDescription",

      questionChildOption: [
        {
          exampleDiscription:
            "Tell us what sets your business apart and what makes it unique. Share the key details about your business and what you do, so we can offer tailored suggestions to help you succeed. (Make sure you share everything about your businesss in a descriptive way to get better results)",
        },
      ],
    },

    {
      question: "What industry will you be operating in?",
      keyValue: "businessIndustry",

      questionChildOption: [
        {
          exampleDiscription:
            "Specify the sector or market your business will operate in such as retail, technology, healthcare,finance, manufacturing, e-commerce, etc.",
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

    {
      question: "Which currency & language will you be using?",
      keyValue: "currencyAndLanguage",

      questionChildOption: [
        {
          exampleDiscription:
            "Specify the primary currency your business will use for transactions and the main language for communication with customers.",
        },
      ],
    },
    {
      question: "What stage is the business at?",
      keyValue: "businessStage",
    },
  ]);

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
    <div className="h-full px-10 bg-[#fff]">
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

export default OnBoarding;
