import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TopSection from "./components/TopSection/TopSection";
import AllTeamMembers from "./components/AllTeamMembers/AllTeamMembers";
import { scrollToTop } from "../../utils/utils";
import { useSelector } from "react-redux";
import CatalogueWrappar from "../../components/CatalogueWrappar/CatalogueWrappar";

const MeetOurTeamPage = () => {
  const getAgencyDetails = useSelector((state) => state.getAgencyDetails);

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <CatalogueWrappar>
        <Header
          primaryColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
          }
          fontColor={getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.fontColor}
          data={getAgencyDetails?.data?.data}
        />
        <TopSection />
        <AllTeamMembers />
        <Footer />
      </CatalogueWrappar>
    </div>
  );
};

export default MeetOurTeamPage;
