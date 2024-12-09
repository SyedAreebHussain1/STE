import React, { useEffect } from "react";
import FilterSection from "./components/FilterSection/FilterSection";
import InventoriesSection from "./components/InventoriesSection/InventoriesSection";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { scrollToTop } from "../../utils/utils";
import { useSelector } from "react-redux";
import ListingSection from "./components/ListingSection/ListingSection";
import AgencyInventories from "./components/AgencyInventories/AgencyInventories";
import PwInventories from "./components/PwInventories/PwInventories";
import CatalogueWrappar from "../../components/CatalogueWrappar/CatalogueWrappar";
import CheckOurListings from "./components/CheckOurListings/CheckOurListings";

const InventoriesPage = () => {
  const getAgencyDetails = useSelector((state) => state.getAgencyDetails);

  useEffect(() => {
    scrollToTop();
  }, []);
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
        
        <FilterSection />
        <CheckOurListings />
        {/* <InventoriesSection /> */}
        {/* <ListingSection /> */}
        <AgencyInventories />
        <PwInventories />
        <Footer />
      </CatalogueWrappar>
    </div>
  );
};

export default InventoriesPage;
