import QuestionsSection from "./QuestionsSection";

type QuestionList = {
  question: string;
  answer: string;
};
type FAQ = {
  questionId: string;
  heading: string;
  questionList: QuestionList[];
};
const RightSection = () => {
  const faqs: any = [
    {
      questionId: "getting-started",
      heading: "Getting Started",
      questionList: [
        {
          question: "What is Venture Plus?",
          answer:
            "Venture Plus is an AI-powered platform designed to help entrepreneurs and startups create comprehensive business plans, from idea validation to execution, with real-time insights and personalized guidance.",
        },
        {
          question: "Who is Venture Plus for?",
          answer:
            "Venture Plus is designed for aspiring entrepreneurs, startups, small business owners, freelancers, and students who are looking to turn their business into actionable business plans.",
        },
      ],
    },
    {
      heading: "Features and Functionality",
      questionId: "features-functionality",
      questionList: [
        {
          question: "How does Venture Plus work?",
          answer:
            "Yes! Venture Plus allows you to edit, tweak, and refine your business plan at any stage. You can adjust financial projections, market insights, and other key areas to suit your specific needs.",
        },
        {
          question: "Does Venture Plus provide market research?",
          answer:
            "Yes, Venture Plus offers AI-powered market research to help you understand your target audience, industry trends, and competitive landscape, so you can make informed decisions.",
        },
      ],
    },
    {
      heading: "Pricing and Subscription",
      questionId: "pricing-subscription",
      questionList: [
        {
          question: "What does Venture Plus cost?",
          answer:
            "Venture Plus offers flexible pricing plans based on your needs. We have free features for idea validation and the first two chapters of the business plan. If you require complete features for a single business you will have to buy the PRO plan which will be as low as $20 monthly (if subscribed annually).",
        },
        {
          question: "Is there a free trial available?",
          answer:
            "Yes, we offer a free plan that includes access to key features, so you can explore Venture Plus and see how it works for your business before committing to a paid plan.",
        },
      ],
    },
    {
      heading: "Support and Assistance",
      questionId: "support-assistance",
      questionList: [
        {
          question: "How do I get help if I have a question?",
          answer:
            "If you have any questions, you can browse our FAQ page for quick answers. If you don’t find what you're looking for, simply submit your query through our contact form, and we’ll get back to you via email within 24-48 hours.",
        },
        {
          question: "Is customer support available?",
          answer:
            "Yes, our support team is available via email to assist you with any technical or product-related questions. Reach out to us through the contact form, and we’ll respond as soon as possible.",
        },
      ],
    },
    ,
    {
      heading: "Business Planning and Execution",
      questionId: "business-planning-execution",
      questionList: [
        {
          question: "Can Venture Plus help me with financial forecasting?",
          answer:
            "Yes, Venture Plus generates accurate financial projections, helping you estimate costs, revenue, and profit margins based on your inputs.",
        },
        {
          question: "How does Venture Plus help with execution?",
          answer:
            "Once your business plan is in place, Venture Plus provides AI-driven guidance to help you execute your plan, offering real-time insights and updates along the way.",
        },
      ],
    },
    ,
    {
      heading: "Account and Billing",
      questionId: "account-billing",
      questionList: [
        {
          question: "How do I cancel my subscription?",
          answer:
            "You can cancel your subscription at any time through your account settings. If you need assistance, feel free to contact our support team via email.",
        },
        {
          question: "Can I upgrade or downgrade my subscription?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time through your account settings. Changes will take effect immediately for the next billing cycle.",
        },
      ],
    },
    ,
    {
      heading: "Security and Data",
      questionId: "security-data",
      questionList: [
        {
          question: "Is my data secure with Venture Plus?",
          answer:
            "Yes, we take data security seriously. Venture Plus uses industry-standard encryption and security protocols to protect your information and ensure your data is safe.",
        },
        {
          question: "Can I export my business plan?",
          answer:
            "Yes, Venture Plus allows you to export your business plan into a PDF format, so you can easily share it with investors or team members.",
        },
      ],
    },
  ];

  return (
    <div className="flex-1 flex flex-col gap-2 ">
      {faqs.map((faq: FAQ) => (
        <QuestionsSection
          heading={faq.heading}
          questionId={faq.questionId}
          questionList={faq.questionList}
        />
      ))}
    </div>
  );
};

export default RightSection;
