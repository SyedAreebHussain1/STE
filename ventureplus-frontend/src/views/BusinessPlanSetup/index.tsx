import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { RootState } from "../../redux/store";
import { getAllElementsOfPlanSetupApi } from "../../services/api/BusinessPlanSetup";
import {
  EquitySection,
  ProductsSection,
  ServiceSection,
  StaffSection,
} from "./helpers";
import Banner from "./helpers/Banner";

interface Props {}

const BusinessPlanSetup = (props: Props) => {
  const dispatch = useDispatch();
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );
  const getAllElementsOfPlanSetup = useSelector(
    (state: RootState) => state.getAllElementsOfPlanSetup?.data?.data
  );

  useEffect(() => {
    if (currentSelectedBusinessPlan?.businessPlan?.id)
      getAllElementsOfPlanSetupApi(
        dispatch,
        currentSelectedBusinessPlan?.businessPlan?.id
      );
  }, [currentSelectedBusinessPlan?.businessPlan?.id]);

  return (
    <PageContainer>
      <Banner />
      <ProductsSection products={getAllElementsOfPlanSetup?.product} />
      <StaffSection staffing={getAllElementsOfPlanSetup?.staffing} />
      <EquitySection equity={getAllElementsOfPlanSetup?.equity} />
      <ServiceSection services={getAllElementsOfPlanSetup?.services} />
    </PageContainer>
  );
};

export default BusinessPlanSetup;
