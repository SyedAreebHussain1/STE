import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PwMapSection from "./components/PwMapSection/PwMapSection";
import PwGalleySection from "./components/PwGalleySection/PwGalleySection";
import PwInventoryDetailsSection from "./components/PwInventoryDetailsSection/PwInventoryDetailsSection";
import PwSimilarListingsSection from "./components/PwSimilarListingsSection/PwSimilarListingsSection";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { scrollToTop } from "../../utils/utils";
import { getProjectByIdpublicApi } from "../../redux/api/Inventories";
import SimilarListingsSection from "../SingleInventoryPage/components/SimilarListingsSection/SimilarListingsSection";
import CatalogueWrappar from "../../components/CatalogueWrappar/CatalogueWrappar";

const PwSingleInventoryPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { projectById } = useSelector(
    (state) => state?.getInventoryDetailsForPublic
  );
  const getAgencyDetails = useSelector((state) => state.getAgencyDetails);
  useEffect(() => {
    scrollToTop();
  }, [params]);

  useEffect(() => {
    if (params?.projectId) {
      getProjectByIdpublicApi(dispatch, params?.projectId);
    }
  }, [params?.projectId, dispatch]);
  return (
    <div>
      <CatalogueWrappar>
        <Header
        fontColor={getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.fontColor}
          primaryColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
          }
          data={getAgencyDetails?.data?.data}
        />
        <PwGalleySection data={projectById} />
        <PwInventoryDetailsSection data={projectById} />
        <PwMapSection data={projectById} />
        <SimilarListingsSection />
        <Footer />
      </CatalogueWrappar>
    </div>
  );
};

export default PwSingleInventoryPage;
