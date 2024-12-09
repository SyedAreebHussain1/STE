import React, { useEffect } from "react";
import TopSection from "./components/TopSection/TopSection";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturedListingSection from "./components/FeaturedListingSection/FeaturedListingSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import TeamsSection from "./components/TeamsSection/TeamsSection";
import AnnouncementSection from "./components/AnnouncementSection/AnnouncementSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { scrollToTop } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { analyticViewApi } from "../../redux/api/Analytic";
import CatalogueWrappar from "../../components/CatalogueWrappar/CatalogueWrappar";
import HeroBg from "./../../assets/images/hero-bg.svg";
import PopupForm from "../../components/PopupForm/PopupForm";

const HomePage = () => {
  const getAgencyDetails = useSelector((state) => state.getAgencyDetails);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (getAgencyDetails?.data?.data?.pageStatus && params?.id) {
      analyticViewApi(dispatch, params?.id);
    }
  }, [params?.id, getAgencyDetails?.data?.data?.pageStatus]);

  return (
    <div>
      <CatalogueWrappar>
        <PopupForm
          primaryColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
          }
          fontColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.fontColor
          }
        />
        <Header
          primaryColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
          }
          fontColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.fontColor
          }
          data={getAgencyDetails?.data?.data}
        />
        <div className="relative">
          <img src={HeroBg} className="absolute -z-10 left-0" alt="" />
          <TopSection data={getAgencyDetails?.data?.data} />
          <HeroSection
            fontColor={
              getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.fontColor
            }
            data={getAgencyDetails?.data?.data}
            primaryColor={
              getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
            }
          />
        </div>
        <FeaturedListingSection
          fontColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.fontColor
          }
          primaryColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
          }
        />
        <AboutUsSection
          data={getAgencyDetails?.data?.data}
          fontColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.fontColor
          }
          primaryColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
          }
        />
        <TeamsSection
          fontColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.fontColor
          }
          primaryColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
          }
        />
        <AnnouncementSection
          fontColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.fontColor
          }
          primaryColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
          }
        />
        <TestimonialsSection
          fontColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.fontColor
          }
          primaryColor={
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
          }
        />
      </CatalogueWrappar>
      <Footer />
    </div>
  );
};

export default HomePage;
