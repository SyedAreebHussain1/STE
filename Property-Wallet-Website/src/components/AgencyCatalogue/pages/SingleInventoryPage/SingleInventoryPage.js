import React, { useEffect } from "react";
import GallerySection from "./components/GallerySection/GallerySection";
import InventoryDetailsSection from "./components/InventoryDetailsSection/InventoryDetailsSection";
import MapSection from "./components/MapSection/MapSection";
import SimilarListingsSection from "./components/SimilarListingsSection/SimilarListingsSection";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { scrollToTop } from "../../utils/utils";
import { useParams } from "react-router-dom";
import { getInventoryDetailsForPublicApi } from "../../redux/api/Inventories";
import { useDispatch, useSelector } from "react-redux";
import CatalogueWrappar from "../../components/CatalogueWrappar/CatalogueWrappar";

const SingleInventoryPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.getInventoryDetailsForPublic);
  const getAgencyDetails = useSelector((state) => state.getAgencyDetails);

  useEffect(() => {
    scrollToTop();
  }, [params]);
  useEffect(() => {
    if (params?.inventoryId) {
      getInventoryDetailsForPublicApi(dispatch, params?.inventoryId);
    }
  }, [params?.inventoryId, dispatch]);

  return (
    <div>
      <CatalogueWrappar>
        <Header
          primaryColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
          }
          data={getAgencyDetails?.data?.data}
          fontColor={getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.fontColor}
        />
        <GallerySection data={data} />
        <InventoryDetailsSection data={data} />
        <MapSection data={data} />
        <SimilarListingsSection />
        <Footer />
      </CatalogueWrappar>
    </div>
  );
};

export default SingleInventoryPage;
