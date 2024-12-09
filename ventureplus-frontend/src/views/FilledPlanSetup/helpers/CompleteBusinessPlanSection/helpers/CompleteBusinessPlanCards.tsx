import CompleteBusinessPlanCard from "./CompleteBusinessPlanCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { getFromStorage } from "../../../../../utils/storage";
import { Spin } from "antd";
import PageLoading from "../../../../../components/loaders/PageLoading";
import { generateSummaryApi } from "../../../../../services/api/Question";

const CompleteBusinessPlanCards = () => {
  const [data, setData] = useState<any[]>([]);
  const [unlockChapters, setUnlockChapters] = useState(false);
  const [isFreemium, setIsFreemium] = useState(false);
  const [isAllChaptersComplete, setIsAllChaptersComplete] = useState(true);

  const getSelectedBusinessPlanId = useSelector(
    (state: RootState) => state?.currentSelectedBusinessPlan?.businessPlan?.id
  );

  const getBusinessPlanInfo = useSelector(
    (state: RootState) => state.getBusinessPlanInfo
  );

  // const subscriptionPlan = getFromStorage("subscriptionPlans");
  const getSubscriptionPlan = useSelector(
    (state: RootState) => state.getUserSubscribedplan
  );

  useEffect(() => {
    if (getSubscriptionPlan?.data?.data?.benefit?.package?.isFree) {
      setIsFreemium(true);
    }

    //   subscriptionPlan?.forEach((plan: any) => {
    //     if (plan?.subscribed === true && plan?.isFree === true) {
    //       setIsFreemium(true);
    //     }
    //   });
    // }
  }, [getSubscriptionPlan]);

  const dispatch = useDispatch();

  // const businessCount = getFromStorage("businessCount");
  const getBusinessCount = useSelector(
    (state: RootState) => state.getBusinessCount
  );

  const businessCount = getBusinessCount?.data?.data;

  const ChaptersCount = businessCount?.allowed?.chapters;

  useEffect(() => {
    if (getBusinessPlanInfo?.data?.chapters) {
      setData([...getBusinessPlanInfo.data.chapters]);
      handleGenerateSummary();
    } else {
      setData([]);
    }

    if (getBusinessPlanInfo?.data) {
      // if services, equity, staffing or products is empty, lock all chapters
      setUnlockChapters(!checkAllArraysNotEmpty(getBusinessPlanInfo?.data));
    }
  }, [getBusinessPlanInfo, dispatch]);

  const checkAllArraysNotEmpty = (obj: { [key: string]: any }) => {
    const { staffing, equity, product, services } = obj;

    const staffingAndEquityValid =
      Array.isArray(staffing) &&
      staffing.length > 0 &&
      Array.isArray(equity) &&
      equity.length > 0;

    const productsOrServicesValid =
      (Array.isArray(product) && product.length > 0) ||
      (Array.isArray(services) && services.length > 0);

    return staffingAndEquityValid && productsOrServicesValid;
  };

  const isChapterLocked = (index: number): boolean => {
    // it will return true is the chapter is going to be locked
    if (!isFreemium && !checkAllArraysNotEmpty(getBusinessPlanInfo?.data)) {
      return true;
    }
    if (
      (getBusinessPlanInfo?.data?.isBusinessPlanCompleted && index === 0) ||
      index === 8
    ) {
      return false;
    }

    if (isFreemium && index >= ChaptersCount) {
      return true;
    } else {
      return false;
    }
  };

  const handleGenerateSummary = () => {
    !getBusinessPlanInfo?.data?.isBusinessPlanCompleted &&
      generateSummaryApi(getSelectedBusinessPlanId);
  };

  const isSummaryAppendixUnlocked = () => {
    if (!checkAllArraysNotEmpty(getBusinessPlanInfo?.data)) {
      return true;
    }
    if (!isFreemium) {
      // if (getBusinessPlanInfo?.data?.isBusinessPlanCompleted) return false;
      // else return true;
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="flex justify-center w-full">
      {getBusinessPlanInfo?.loading ? (
        <div className="h-[400px] flex justify-center items-center">
          <PageLoading />
        </div>
      ) : (
        <div className="flex gap-3 flex-wrap mt-8 items-center xs:w-[350px] lg:w-[720px] xl:w-[1080px] 2xl:w-[1440px]">
          {data.map((chap, i) => {
            if (chap.topics[0].isAppendix || chap.topics[0].isSummary) {
              return (
                <div className="w-[350px]" key={i}>
                  <CompleteBusinessPlanCard
                    data={chap}
                    index={i}
                    chapters={data}
                    locked={isSummaryAppendixUnlocked()}
                    unlockChapters={unlockChapters}
                    isChaptersComplete={
                      getBusinessPlanInfo?.data?.isBusinessPlanCompleted
                    }
                  />
                </div>
              );
            }

            return (
              <div className="w-[350px]" key={i}>
                <CompleteBusinessPlanCard
                  data={chap}
                  index={i}
                  chapters={data}
                  locked={isChapterLocked(i)}
                  unlockChapters={unlockChapters}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CompleteBusinessPlanCards;
