import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  TopicSection,
  BlankSection,
} from "../../../components/DataFormats/BlankSection";
import ViewNestedChild from "./viewNestedChild";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../../components/button/RoundedButton";
import { Perks, Plan } from "./UpsellingPage";
import { dollarIcon } from "../../../assets/subscriptionAssets";
import { getSubscriptionPlanApi } from "../../../services/api/SubscriptionPlan";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import { downloadIcon } from "../../../assets";
import {
  boardImg,
  docSettingImg,
  PencilOn,
  productPromotionImg,
} from "../../../assets/ViewPlanDownloadPdf";
// const cards = [
//   {
//     title: "Full Business Plan",
//     description:
//       "A basic plan offers essential features at a lower cost with limited access",
//     icon: docSettingImg,
//   },
//   {
//     title: "Pitch Deck",
//     description:
//       "A basic plan offers essential features at a lower cost with limited access",
//     icon: boardImg,
//   },
//   {
//     title: "Business Model Canvas",
//     description:
//       "A basic plan offers essential features at a lower cost with limited access",
//     icon: PencilOn,
//   },
//   {
//     title: "Product Promotion",
//     description:
//       "A basic plan offers essential features at a lower cost with limited access",
//     icon: productPromotionImg,
//   },
// ];

const MainPlan = ({ data }: any) => {
  const [pushObject, setPushObject] = useState<any>([]);
  const getChapter = useSelector((state: RootState) => state.getChapter);
  let i = 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const businessPlanContentBusinessPlan = useSelector(
    (state: RootState) => state.businessPlanContentBusinessPlan
  );
  const isOnFreePlan = useSelector((state: RootState) => state.isOnFreePlan);

  const subscriptions = useSelector(
    (state: RootState) => state?.getSubscriptionPlan
  );
  const [monthlySubscription, setMonthlySubscription] = useState([]);

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
  function extractData(data: any): any[] {
    function processObject(obj: any): any[] {
      let results: any[] = [];
      if (Array.isArray(obj)) {
        results = obj;
      } else if (typeof obj === "object" && obj !== null) {
        if (Object.keys(obj)?.includes("type")) {
          results = [obj];
        } else {
          for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              results = processObject(obj[key]);
            }
          }
        }
      }
      return results;
    }
    return processObject(data);
  }
  useEffect(() => {
    if (businessPlanContentBusinessPlan?.data?.length > 0) {
      const myObj = businessPlanContentBusinessPlan?.data
        ?.filter((val: any) => val?.topic?.chapterId == data?.id)
        ?.map((item: any) => {
          if (item?.content === "loading" || item?.content === "error") {
            return "loading";
          }

          const changeItem = extractData(JSON.parse(item?.content));
          return changeItem;
        });

      if (myObj?.length <= 0) {
        setPushObject([]);
        return;
      }
      const myNewObj = myObj?.map((item: any) =>
        item === "loading" || item === "error"
          ? ["loading"]
          : item?.map((obj: any) =>
              obj === "loading" || obj === "error"
                ? obj
                : Object.keys(obj)?.includes("id")
                ? { ...obj }
                : { ...obj, id: generateId() }
            )
      );

      setPushObject([...myNewObj]);
    } else {
      setPushObject(null);
    }
  }, [businessPlanContentBusinessPlan?.data]);
  const perks = [
    "Idea validation",
    "Pitch",
    "Business Model Canvas",
    "Critical Analysis",
    "Product Promotion",
    "1 User",
  ];
  
  const handleGetStarted = (planId: number, price: number) => {
    navigate(`/check-out/${planId}`, { state: { price: price } });
  };

  return (
    <>
      <Spin spinning={businessPlanContentBusinessPlan?.loading}>
        <div className="flex w-full min-h-[70%] gap-2 mb-4" id={data?.id}>
          <div className="flex gap-4 w-full min-h-full relative">
            <div className="flex-1  h-max w-full ">
              <div className=" bg-[white] p-[20px] min-h-[1030px]">
                <BlankSection
                  handleClick={() => {}}
                  saveChanges={false}
                  chapterNumber={
                    getChapter?.data?.data?.filter(
                      (item: any) => item?.id == data?.id
                    )?.[0]?.chapterNo
                  }
                  chapterTitle={data?.title}
                  checkSaveChanges={businessPlanContentBusinessPlan?.data}
                  saveChangesDisabled={true}
                >
                  <>
                    {pushObject?.length > 0 &&
                      pushObject?.map?.((item: any, index: number) => {
                        return (
                          <ViewNestedChild
                            key={index}
                            headingNumber={`${
                              getChapter?.data?.data?.filter(
                                (item: any) => item?.id == data?.id
                              )?.[0]?.chapterNo
                            }.${index + 1}`}
                            heading={data?.topics?.[index]?.title}
                            pushObject={pushObject}
                            setPushObject={setPushObject}
                            index={index}
                          />
                        );
                      })}
                  </>
                </BlankSection>
                {isOnFreePlan?.data?.isFree &&
                  data.title.includes("Executive") && (
                    <div className="mx-auto mt-80 bg-[white] flex items-center justify-center p-8 text-center flex-col gap-3">
                      <h1 className="heading-m font-bold text-body">
                        Unlock Your Business Plan’s Full Potential
                      </h1>
                      <p className="body-s text-para font-medium w-[80%]">
                        Upgrade now to generate unlimited chapters, access
                        expert features, and take your business to the next
                        level.
                      </p>
                      <ButtonWithSvg
                        title={"Upgrade Now to Unlock All Features"}
                        type="primary"
                        bold
                        sm
                        icon={downloadIcon}
                        onClick={() => navigate("/subscription-plan")}
                      />
                    </div>
                  )}
              </div>
              {/* {isOnFreePlan?.data?.isFree && data.title.includes("Executive") && (
                <div className="mx-auto w-[800px] bg-[white] flex items-center justify-center p-8 text-center flex-col gap-3">
                  <h1 className="heading-m font-bold text-body">
                    Unlock Your Business Plan’s Full Potential
                  </h1>
                  <p className="body-s text-para font-medium w-[80%]">
                    Upgrade now to generate unlimited chapters, access expert features, and
                    take your business to the next level.
                  </p>
                  <ButtonWithSvg
                    title={"Upgrade Now to Unlock All Features"}
                    type="primary"
                    bold
                    sm
                    icon={downloadIcon}
                    onClick={() => navigate("/subscription-plan")}
                  />

                </div>
              )
              } */}
            </div>
          </div>
        </div>
      </Spin>
    </>
  );

  function generateId() {
    const now = new Date();

    const datePart =
      now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate(); // YYYYMMDD
    const timePart =
      now.getHours() * 10000 + now.getMinutes() * 100 + now.getSeconds(); // HHMMSS
    const millisecondsPart = now.getMilliseconds(); // MS
    const randomPart = Math.floor(Math.random() * 1000); // Random 3 digits

    // Combine the parts into a single number
    const id =
      datePart * 1000000000 +
      timePart * 10000 +
      millisecondsPart * 1000 +
      randomPart;
    return id;
  }
};
export default MainPlan;
