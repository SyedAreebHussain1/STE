import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { rightArrowGreenIcon } from "../../../assets";
import { dashboardBanner } from "../../../assets/dashboardAssets";
import { arrowRightGreyIcon } from "../../../assets/ProductPromotions";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import PlanLimitModal from "../../../components/modals/PlanLimitModal";
import useToggle from "../../../hooks/useToggle";
import { RootState } from "../../../redux/store";
import { getFromStorage, setInStorage } from "../../../utils/storage";
import AddNewPlanModal from "../../BusinessSettings/helpers/Plans/helpers/AddNewPlanModal";
import BannerBottom from "./BannerBottom";
import RoundedButton from "../../../components/button/RoundedButton";
import { AddIcon } from "../../../assets/filledPlanSetupAssets";
import { setCurrentSelectedBusinessPlan } from "../../../redux/slices/SelectedBusinessPlan/selectedBusinessPlanSlice";

const Banner = () => {
  const dispatch = useDispatch();
  const [open, toggle] = useToggle();
  const [isBuyPlanModalVisible, setBuyPlanModalVisible] = useToggle();
  const navigate = useNavigate();

  // const businessCount = getFromStorage("businessCount");
  const getBusinessCount = useSelector(
    (state: RootState) => state.getBusinessCount
  );

  const businessCount = getBusinessCount?.data?.data;
  const plan = businessCount?.current?.businessplancount;
  const subscribedPlan = businessCount?.allowed?.businessPlanCount;
  const isPlanLimitExceeded = subscribedPlan ? subscribedPlan <= plan : false;

  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const getPlansByBusinessId = useSelector(
    (state: RootState) => state.getPlansByBusinessId?.data
  );
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );

  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );

  const isPlanSelected = (plan: any) => {
    return currentSelectedBusinessPlan?.businessPlan?.id === plan?.id;
  };

  const handleAddNewPlan = () => {
    if (isPlanLimitExceeded) {
      setBuyPlanModalVisible();
    } else {
      toggle();
    }
  };

  return (
    <>
      {isBuyPlanModalVisible && (
        <PlanLimitModal
          title="Plan"
          isVisible={isBuyPlanModalVisible}
          onCancel={() => setBuyPlanModalVisible()}
        />
      )}

      {open && !isPlanLimitExceeded && (
        <AddNewPlanModal open={open} onClose={toggle} />
      )}

      <div className="flex flex-col xl:w-full lg:w-[900px] mid:w-[800px] md:w-[650px] sm:w-[500px] xs:w-[400px] relative justify-center items-center bg-[#fff] rounded-2xl">
        {/* main dashboard banner */}
        <div className="relative bg-green-100 rounded-[15px] p-5 mxl:p-6 !w-full gap-1 overflow-hidden xl:min-h-[280px] mb-6 mxl:min-h-[301px] sm:flex hidden flex-col">
          <img
            src={dashboardBanner}
            alt=""
            className="absolute top-0 right-0 hidden xl:block"
          />
          <div className="flex">
            <div className="z-10 relative mb-4 w-[50%]">
              <h1 className="text-body heading-m font-medium leading-[25.02px] mb-1">
                {currentSelectedBusiness?.business?.name
                  ? currentSelectedBusiness?.business?.name
                  : "Business Name"}
              </h1>
              <h1 className="text-body heading-l font-bold leading-[39.17px] mb-[12px]">
                {currentSelectedBusinessPlan?.businessPlan?.title
                  ? currentSelectedBusinessPlan?.businessPlan?.title
                  : "Business Plan"}
              </h1>
              <p className="text-para font-normal body-s mb-[18px]">
                {currentSelectedBusiness?.business?.description}
              </p>
            </div>

            <div
              className={`absolute z-20 top-5 right-0 transition-all duration-300 ease-in-out max-w-[50%]  ${
                expanded ? "w-[50%]" : "w-[125px]"
              } overflow-hidden bg-[#fff] pr-2 bg-opacity-[30%] rounded-tl-full rounded-bl-full flex items-center`}
            >
              <div
                onClick={handleClick}
                className={`flex gap-2 items-center h-full cursor-pointer p-4 mr-2 min-h-[76px]`}
              >
                <p
                  className={`text-para body-s font-semibold whitespace-nowrap ${
                    expanded ? "w-0 hidden" : "w-auto"
                  }`}
                >
                  {" "}
                  View Plans
                </p>
                <img src={arrowRightGreyIcon} alt="" />
              </div>

              <div
                className={`flex justify-start gap-2 overflow-x-auto custom-scrollbar flex-1 mr-2 items-center py-4 ${
                  expanded ? "max-w-[500px]" : ""
                }`}
              >
                {getPlansByBusinessId?.data?.map((plan: any) => (
                  <RoundedButton
                    key={plan?.id}
                    title={plan?.title}
                    sm
                    className={`p-5 `}
                    type={isPlanSelected(plan) ? "dark" : "transparent-black"}
                    onClick={() => {
                      setInStorage("businessPlan", plan);
                      dispatch(setCurrentSelectedBusinessPlan(plan));
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-end w-fit ml-28">
                <ButtonWithSvg
                  title={"Add New Plan"}
                  icon={AddIcon}
                  type="transparent"
                  bold
                  sm
                  onClick={handleAddNewPlan}
                  isLeft
                  className={`!border-[2px] !p-5 !text-[#002A2D]  !border-[#002A2D]  hover:!border-[#002A2D] ${
                    expanded ? "!w-fit" : ""
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex z-10 relative items-end">
            <ButtonWithSvg
              title={"Complete your Business Plan"}
              type="transparent"
              className="!text-primary !border-primary hover:!text-primary hover:!border-primary"
              bold
              onClick={() => navigate("/edit-plan")}
              icon={rightArrowGreenIcon}
            />
          </div>
        </div>
        <div className="relative bg-green-100 rounded-[15px] p-5 mxl:p-6 !w-full gap-1 overflow-hidden xl:min-h-[280px] mb-6 mxl:min-h-[301px] flex sm:hidden flex-col">
          <img
            src={dashboardBanner}
            alt=""
            className="absolute top-0 right-0 hidden xl:block"
          />
          <div className="flex">
            <div className="z-10 relative mb-4 w-[50%]">
              <h1 className="text-body text-[16px] font-normal leading-[25.02px] mb-1">
                {currentSelectedBusiness?.business?.name
                  ? currentSelectedBusiness?.business?.name?.length > 11
                    ? `${currentSelectedBusiness?.business?.name.substr(
                        0,
                        11
                      )}..`
                    : currentSelectedBusiness?.business?.name
                  : "Business Name"}
              </h1>
              <h1 className="text-body heading-l font-bold leading-[39.17px] mb-[12px]">
                {currentSelectedBusinessPlan?.businessPlan?.title
                  ? currentSelectedBusinessPlan?.businessPlan?.title?.length >
                    11
                    ? `${currentSelectedBusinessPlan?.businessPlan?.title.substr(
                        0,
                        11
                      )}..`
                    : currentSelectedBusinessPlan?.businessPlan?.title
                  : "Business Plan"}
              </h1>
              <p className="text-para font-normal body-s mb-[18px]">
                {currentSelectedBusiness?.business?.description}
              </p>
            </div>

            <div
              className={`absolute z-20 top-5 right-0 transition-all duration-300 ease-in-out max-w-[50%]  ${
                expanded ? "w-[50%]" : "w-[125px]"
              } overflow-hidden bg-[#fff] pr-2 bg-opacity-[30%] rounded-tl-full rounded-bl-full flex items-center`}
            >
              <div
                onClick={handleClick}
                className={`flex gap-2 items-center h-full cursor-pointer p-1 mr-2 min-h-[76px]`}
              >
                <p
                  className={`text-para body-s font-semibold whitespace-nowrap ${
                    expanded ? "w-0 hidden" : "w-auto"
                  }`}
                >
                  {" "}
                  View Plans
                </p>
                <img src={arrowRightGreyIcon} alt="" />
              </div>

              <div
                className={`flex justify-start gap-2 overflow-x-auto custom-scrollbar flex-1 mr-2 items-center py-4 ${
                  expanded ? "max-w-[500px]" : ""
                }`}
              >
                {getPlansByBusinessId?.data?.map((plan: any) => (
                  <RoundedButton
                    key={plan?.id}
                    title={plan?.title}
                    sm
                    className={`p-2 `}
                    type={isPlanSelected(plan) ? "dark" : "transparent-black"}
                    onClick={() => {
                      setInStorage("businessPlan", plan);
                      dispatch(setCurrentSelectedBusinessPlan(plan));
                    }}
                  />
                ))}
              </div>
              {/* */}
            </div>
          </div>
          <div className="flex  w-fit ">
            <ButtonWithSvg
              title={"Add New Plan"}
              icon={AddIcon}
              type="transparent"
              bold
              sm
              onClick={handleAddNewPlan}
              isLeft
              className={`!border-[2px] !p-2 !text-[#002A2D]  !border-[#002A2D]  hover:!border-[#002A2D] ${
                expanded ? "!w-fit" : ""
              }`}
            />
          </div>
        </div>

        {/* banner bottom cards */}
        <BannerBottom />
      </div>
    </>
  );
};

export default Banner;
