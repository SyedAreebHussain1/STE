import { useEffect } from "react";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import {
  AssistancePersonalization,
  Banner,
  Footer,
  TopPicksSection,
  ValidationSection,
} from "./helpers";
import { getAllBusinessPromotionsApi } from "../../services/api/ProductPromotion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import PromoteProductSection from "./helpers/PromoteProductSection";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, [location]);

  const getAllBusinessPromotions = useSelector(
    (state: RootState) => state.getAllBusinessPromotions
  );
  useEffect(() => {
    getAllBusinessPromotionsApi(dispatch, { page: 1, limit: 6 }, true);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col w-full bg-[white]">
      <PageContainer>
        {" "}
        <div className="flex justify-center">
          <Banner />
        </div>
        <div className="mt-[33px] flex justify-center">
          <ValidationSection />
        </div>
        {getAllBusinessPromotions?.data?.data?.length > 0 && (
          <div className="mt-[33px] flex justify-center">
            <TopPicksSection products={getAllBusinessPromotions?.data?.data} />
          </div>
        )}
        <div className="mt-[33px] flex justify-center">
          <PromoteProductSection />
        </div>
        <div className="mt-[73px] flex justify-center">
          <AssistancePersonalization />
        </div>
      </PageContainer>

      <Footer />
    </div>
  );
};

export default Dashboard;
