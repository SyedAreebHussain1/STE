import { useEffect, useRef, useState } from "react";
import MainPlan from "./helpers/mainPlan";
import {
  businessPlanContentBusinessPlanApi,
  isOnFreePlanApi,
} from "../../services/api/ViewPlanAndDownloadPdf";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useReactToPrint } from "react-to-print";
import { whiteNextIcon } from "../../assets/dashboardAssets";
import { motion } from "framer-motion";
import { Button, Spin } from "antd";
import BusinessPlanCoverPage from "./helpers/BusinessPlanCoverPage";
import ChapterCoverPage from "./helpers/ChapterCoverPage";
import RoundedButton from "../../components/button/RoundedButton";
import DownloadBusinessPlanBanner from "../../components/banners/DownloadBusinessPlanBanner";
import TableOfContents from "./helpers/TableOfContents";
import UpsellingPage, { Perks, Plan } from "./helpers/UpsellingPage";
import { useNavigate } from "react-router-dom";
import ButtonWithSvg from "../../components/button/ButtonWithSvg";
import { downloadIcon } from "../../assets";
import {
  boardImg,
  docSettingImg,
  PencilOn,
  productPromotionImg,
} from "../../assets/ViewPlanDownloadPdf";
import { dollarIcon } from "../../assets/subscriptionAssets";
import { getSubscriptionPlanApi } from "../../services/api/SubscriptionPlan";
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
const ViewPlanAndDownloadPdf = () => {
  const navigate = useNavigate();
  const customPrintRef = useRef<any>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );
  const getChapter = useSelector((state: RootState) => state?.getChapter);
  const getBusinessCount = useSelector(
    (state: RootState) => state.getBusinessCount?.data?.data
  );
  const isOnFreePlan = useSelector((state: RootState) => state.isOnFreePlan);
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
  useEffect(() => {
    if (currentSelectedBusinessPlan?.businessPlan?.id) {
      businessPlanContentBusinessPlanApi(
        dispatch,
        Number(currentSelectedBusinessPlan?.businessPlan?.id)
      );
    }
  }, []);
  const handleSidebarCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const handlePrint = useReactToPrint({
    content: () => customPrintRef.current,
    copyStyles: true,
    pageStyle: `
    @page
      {
  size: letter !important;
  margin: 20px;
      }
     body {
        -webkit-print-color-adjust: exact;
      }
      `,
  });

  useEffect(() => {
    isOnFreePlanApi(dispatch);
  }, []);

  return (
    <>
      <div className="flex gap-4 w-full min-h-full relative">
        <div
          className="h-[100vh] w-[350px]"
          style={{
            width: !isCollapsed ? "64px" : "350px",
            transform: !isCollapsed ? "translate(-350px)" : "",
            transition: !isCollapsed
              ? "all 0s ease-in-out"
              : "all 0.5s ease-in-out",
          }}
        >
          {" "}
        </div>{" "}
        <div
          className="cursor-pointer fixed left-[345px] bottom-1/2 h-[100px] w-[22px] bg-primary flex items-center justify-center rounded-md"
          style={{
            transform: !isCollapsed
              ? "translateX(-285px) translateY(50%)"
              : "translateY(50%)",
            transition: !isCollapsed
              ? "all 0s ease-in-out"
              : "all 0.5s ease-in-out",
          }}
          onClick={handleSidebarCollapse}
        >
          <img src={whiteNextIcon} alt="" />
        </div>
        <div
          className="h-[86%] w-[350px] fixed overflow-y-auto over custom-scrollbar z-20"
          style={{
            transform: !isCollapsed ? "translate(-350px)" : "",
            transition: "all 0.2s ease-in-out",
          }}
        >
          <div className="flex flex-col gap-2 bg-body rounded-tr-[30px] rounded-br-[30px] w-full p-[10px] pl-[80px] pr-[20px] h-full overflow-y-auto custom-scrollbar">
            {getChapter?.data?.data.length > 0 ? (
              getChapter?.data?.data?.map((item: any, key: number) => (
                <a href={`#${item?.id}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-info bg-opacity-20 rounded-md p-3 flex gap-1 flex-col hover:bg-opacity-5"
                  >
                    <div className="flex justify-between">
                      <h1 className="text-[#fff]">{item?.title} </h1>
                      <p className="text-[#fff]">{key + 1}</p>
                    </div>
                  </motion.div>
                </a>
              ))
            ) : getChapter.loading ? (
              <span className="flex justify-center mt-10">
                <Spin size="large" />
              </span>
            ) : (
              <div className="font-light flex justify-center mt-10">
                <h2 className="text-[#fff] text-[20px]">No Data</h2>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 min-h-full h-max w-full m-3 px-[10px]">
          <div>
            <div className="w-full mb-4">
              {getChapter?.data?.data.length > 0 && (
                <DownloadBusinessPlanBanner handleClick={handlePrint} />
              )}
            </div>
            <div className="main-plan mx-auto w-[800px]" ref={customPrintRef}>
              {getChapter?.data?.data.length > 0 ? (
                getChapter?.data?.data
                  ?.slice(0, getBusinessCount?.allowed?.chapters)
                  ?.map((item: any, i: number) => {
                    return (
                      <>
                        {i === 0 && (
                          <div className="flex flex-col">
                            <BusinessPlanCoverPage item={item} />
                            <div
                              className="flex items-end justify-end"
                              onClick={() =>
                                navigate("/account-settings/profile")
                              }
                            >
                              <div className="absolute right-10 mb-20">
                                <Button className="shadow-md bg-[#016A70] text-[#FFFFFF] no-print">
                                  Edit your details
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                        {i === 0 && (
                          <TableOfContents chapters={getChapter?.data?.data} />
                        )}
                        <ChapterCoverPage item={item} index={i + 1} />
                        <MainPlan key={item.id} data={item} />
                      </>
                    );
                  })
              ) : getChapter?.loading ? (
                <div className="flex justify-center h-full mt-9">
                  <Spin size="large" />
                </div>
              ) : (
                <div className="font-light flex justify-center mt-10 ">
                  <h2 className="text-[#000] text-[30px]">No Data</h2>
                </div>
              )}
            </div>
            {isOnFreePlan?.data?.isFree && <UpsellingPage />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPlanAndDownloadPdf;
