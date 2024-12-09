import { useNavigate } from "react-router-dom";
import { downloadIcon, rightArrowIcon } from "../../../assets";
import { checkIcon, dollarIcon } from "../../../assets/subscriptionAssets";
import {
  boardImg,
  commasImg,
  docSettingImg,
  PencilOn,
  productPromotionImg,
} from "../../../assets/ViewPlanDownloadPdf";
import {
  boyimage1,
  girlImage,
  girlimage2,
  girlimage3,
} from "../../../assets/website";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import RoundedButton from "../../../components/button/RoundedButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
import { getSubscriptionPlanApi } from "../../../services/api/SubscriptionPlan";

interface Props { }

export interface Plan {
  id: number;
  title: string;
  description: string;
  price: number;
  interval: string;
  features: string[];
  subscribed: boolean;
  noOfchapters: number;
  noOfBusinesses: number;
  noOfBusinessPlans: number;
  isFree: boolean;
  creditCounts?: number;
}

const cards = [
  {
    title: "Full Business Plan",

    icon: docSettingImg,
  },
  {
    title: "Pitch Deck",

    icon: boardImg,
  },
  {
    title: "Business Model Canvas",

    icon: PencilOn,
  },
  {
    title: "Product Promotion",

    icon: productPromotionImg,
  },
];

const planCards = [
  {
    title: "Basic",
    description: "For personal use.",
    price: "0",
    perks: [
      "100 requests per day",
      "Free trail features access",
      "25 Chapters",
      "2 Business",
    ],
  },
  {
    title: "Premium",
    description: "For personal use.",
    price: "466",
    perks: [
      "100 requests per day",
      "Free trail features access",
      "25 Chapters",
      "2 Business",
    ],
  },
  {
    title: "Enterprise",
    description: "For personal use.",
    price: "466",
    perks: [
      "100 requests per day",
      "Free trail features access",
      "25 Chapters",
      "2 Business",
    ],
  },
];

const reviews = [
  {
    description:
      "As an e-commerce business owner, refining strategies and setting financial goals was challenging. The AI-driven business plan from Venture Plus helped me create a compelling pitch and achieve faster growth than I expected with my business!",
    userName: "Sarah Patel",
    userDesignation: "E-commerce business owner",
    avatar: girlImage,
  },
  {
    description:
      "When we needed to validate our ideas and secure funding, Venture Plus was there to guide us. From idea validation to pitch creation and financial projections, it saved us hours of work and played a key role in securing our first round of funding.",
    userName: "Ahmed Khan",
    userDesignation: "Tech Startup - CEO",
    avatar: boyimage1,
  },
  {
    description:
      "For my accounting firm, having a scalable business plan and a professional pitch deck was critical. With the roadmap feature of Venture Plus, we stayed on track with our growth goals, making it an invaluable tool for service-based businesses like ours.",
    userName: "Lisa Thompson",
    userDesignation: "Accounting Services",
    avatar: girlimage2,
  },
  {
    description:
      "Venture Plus transformed how we plan our agricultural business. The AI tools helped us map out operational strategy, build a strong pitch, and create financial forecasts, giving us a clear path for expansion.",
    userName: "Zhang Wei",
    userDesignation: "AgriTech Co-Founder",
    avatar: girlimage3,
  },
];

const perks = [
  "Idea validation",
  "Pitch",
  "Business Model Canvas",
  "Critical Analysis",
  "Product Promotion",
  "1 User",
];

const UpsellingPage = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [monthlySubscription, setMonthlySubscription] = useState([]);

  const subscriptions = useSelector(
    (state: RootState) => state?.getSubscriptionPlan
  );

  useEffect(() => {
    if (!subscriptions?.data) getSubscriptionPlanApi(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (subscriptions)
      setMonthlySubscription(
        subscriptions?.data?.data?.filter(
          (plan: Plan) => plan.interval === "month"
        )
      );
  }, [subscriptions]);

  const handleGetStarted = (planId: number, price: number) => {
    navigate(`/check-out/${planId}`, { state: { price: price } });
  };

  return (
    <div className="mx-auto w-[800px] bg-[white] flex items-center justify-center p-8 text-center flex-col gap-3">
      <h1 className="heading-m font-bold text-body">
        Unlock all chapters of your business plan!
      </h1>
      <p className="body-s text-para font-medium w-[80%]">
        Furthermore, you can also get access to your own personal business
        consultant, multiple pitch decks, business model canvas and financial
        projections and more.
      </p>
      <ButtonWithSvg
        title={"Upgrade Your Plan"}
        type="primary"
        bold
        sm
        icon={rightArrowIcon}
        iconStyles={"color-white"}
        onClick={() => navigate("/subscription-plan")}
      />
      <h1 className="heading-m font-bold text-body mt-4">
        Why You Should Go Pro
      </h1>
      <div className="flex flex-wrap gap-3 justify-center mt-4">
        {cards.map((card: any, i: number) => (
          <div
            key={i}
            className="rounded-lg border border-strokes bg-primary bg-opacity-[4%] p-6 flex flex-col gap-2 items-center justify-center w-[45%]"
          >
            <img
              src={card.icon}
              alt=""
              className="w-[48px] h-[48px] object-cover"
            />
            <h1 className="paragraph font-bold text-body">{card.title}</h1>
            <p className="body-s font-medium text-para">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 justify-center mt-4 pt-2 w-full">
        {monthlySubscription?.slice(0, 3)?.map((plan: any, i) => (
          <div
            key={plan?.id}
            className={`rounded-tl-xl rounded-tr-xl border-2 w-[32%] p-4 flex flex-col items-start text-start ${i !== 1
              ? "border-strokes border-b-transparent"
              : "border-gradient"
              }`}
          >
            <h1 className="paragraph text-body font-bold ">{plan.title}</h1>
            <h1 className="body-s text-para font-medium ">
              {plan?.description
                ? plan?.description
                : "Perfect for professionals and small businesses in need of significant AI integration"}
            </h1>
            <div className="relative mt-3">
              <img src={dollarIcon} alt="" className="absolute top-0" />

              <h1 className="heading-l font-bold relative ml-6 text-green-700">
                {plan?.price}
              </h1>
            </div>
            <RoundedButton
              title={plan?.subscribed ? "Subscribed" : "Upgrade Now"}
              type="primary"
              xs
              bold
              className="!w-full"
              disabled={plan?.price == 0 ? true : false}
              onClick={() => handleGetStarted(plan.id, plan.price)}
            />
            <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar mt-4 max-h-[200px] custom-scrollbar">
              {plan?.noOfBusinesses > 0 && (
                <Perks text={`No of Businesses: ${plan?.noOfBusinesses} `} />
              )}
              {plan?.noOfBusinesses > 0 && (
                <Perks
                  text={`No of Business Plans: ${plan?.noOfBusinessPlans} `}
                />
              )}
              {plan?.noOfchapters > 0 && (
                <Perks text={`No of Chapters: ${plan?.noOfchapters} `} />
              )}
              {!plan.isFree &&
                perks.map((perk, i) => <Perks key={i} text={perk} />)}
            </div>
          </div>
        ))}
      </div>

      <div className="relative p-8 flex flex-col bg-primary w-full bg-opacity-[5%] rounded-xl mt-4">
        <img
          src={commasImg}
          alt=""
          className="absolute top-7 left-8 h-20 w-20"
        />
        <h1 className="heading-m font-bold text-body">
          Reviews from our Customers
        </h1>

        <div className="flex flex-wrap gap-3 justify-center mt-4">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="w-[300px] bg-[white] flex flex-col text-start gap-2 shadow-lg p-6 rounded-xl"
            >
              <p className="body-s text-para font-medium flex-1">
                {review.description}
              </p>

              <hr className="border-strokes" />

              <div className="flex gap-2 items-center">
                <img
                  src={review.avatar}
                  alt=""
                  className="rounded-full object-cover w-10 h-10"
                />
                <div className="flex flex-col items-start">
                  <h1 className="body-s font-semibold text-body">
                    {review.userName}
                  </h1>
                  <p className="body-xs text-paraLight">
                    {review.userDesignation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpsellingPage;

export const Perks = ({ text }: { text: string }) => {
  return (
    <div className="flex py-2 border-b border-strokes gap-1 items-center">
      <img src={checkIcon} alt="" />
      <h1 className="body-s font-medium">{text}</h1>
    </div>
  );
};
