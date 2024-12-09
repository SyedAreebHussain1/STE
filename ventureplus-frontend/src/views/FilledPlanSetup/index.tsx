import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { rightArrowGreenIcon } from "../../assets";
import { briefcaseBgImg, infoIcon } from "../../assets/filledPlanSetupAssets";
import ButtonWithSvg from "../../components/button/ButtonWithSvg";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { RootState } from "../../redux/store";
import { getBusinessPlanInfoApi } from "../../services/api/PlanSetup";
import CompleteBusinessPlan from "./helpers/CompleteBusinessPlanSection";
import Content from "./helpers/ContentSection";
import SetupBusinessPlan from "./helpers/SetupBusinessPlanSection";

const FilledPlanSetup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [unlockChapters, setUnlockChapters] = useState(false);
  const [isFreeUser, setIsFreeUser] = useState(false);

  const getSelectedBusinessPlanId = useSelector(
    (state: RootState) => state?.currentSelectedBusinessPlan?.businessPlan?.id
  );

  const getBusinessPlanInfo = useSelector(
    (state: RootState) => state.getBusinessPlanInfo
  );

  const getSubscriptionPlan = useSelector(
    (state: RootState) => state.getUserSubscribedplan
  );

  useEffect(() => {
    if (getSubscriptionPlan?.data?.data?.benefit?.package?.isFree) {
      setIsFreeUser(true);
    }
  }, [getSubscriptionPlan]);

  useEffect(() => {
    if (getSelectedBusinessPlanId) {
      getBusinessPlanInfoApi(getSelectedBusinessPlanId, dispatch);
    }
  }, [getSelectedBusinessPlanId, dispatch]);

  useEffect(() => {
    if (getBusinessPlanInfo?.data) {
      //check if services, equity, staffing or products is empty
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

  return (
    <div className="flex flex-col items-center w-full">
      <PageContainer>
        <Row>
          <Col xl={9} lg={10} md={24} sm={24}>
            <Content />
          </Col>
          <Col xl={15} lg={14} md={24} sm={24}>
            <SetupBusinessPlan />
          </Col>
          {unlockChapters && !isFreeUser && (
            <Col lg={24} sm={24} md={24}>
              <div className="mt-1 mb-2">
                <img
                  src={briefcaseBgImg}
                  alt=""
                  className="absolute top-0 right-0 sm:h-[145px] h-[130px]"
                />
                <div className="h-full flex flex-col relative">
                  <div className="bg-[#FFA800] bg-opacity-5 rounded-xl flex justify-between items-center sm:p-4 p-2 ">
                    <div className=" flex gap-2 items-center p-4 justify-center mt-4">
                      <img
                        src={infoIcon}
                        alt=""
                        className=" sm:h-[60px] h-[30px]"
                      />
                      <p className="font-normal text-[#212838] sm:text-[2.0625rem] text-[.75rem]">
                        To unlock and view your chapters, please complete the
                        setup first.
                      </p>
                    </div>
                    <ButtonWithSvg
                      title={"Complete Now"}
                      icon={rightArrowGreenIcon}
                      sm
                      bold
                      onClick={() => navigate("/initial-business-plan")}
                    />
                  </div>
                </div>
              </div>
            </Col>
          )}
          <Col span={24} className="!p-0">
            <CompleteBusinessPlan />
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default FilledPlanSetup;
