import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import { useDispatch, useSelector } from "react-redux";
import NavbarSand from "../../global-components/NavbarSand";
import Banner from "./helpers/Banner";
import Facts from "./helpers/Facts";
// import SandBox from "./helpers/SandBox";
import VirtualHero from "./helpers/VirtualHero";
import VirtualProcess from "./helpers/VirtualProcess";
import VirtualPricing from "./helpers/VirtualPricing";
import Footer_v1 from "../../global-components/footer";
import ApartmentV2 from "../../section-components/apartment-v2";
import mobilecarsoulvideo from "../../images/mobilecarsoulvideo.mp4";

//icons
import agentInteraction from "../../images/agentInteraction.png";
import aISearch from "../../images/aISearch.png";
import fasterSales from "../../images/fasterSales.png";
import hotListingspw from "../../images/hotListingspw.png";
import refreshCredits from "../../images/refreshCredits.png";
import showcaseListings from "../../images/showcaseListings.png";
// import mobilecarsoulvideo from "../../images/mobilecarsoulvideo.mp4";
// import ApartmentCustomerVerificationApp from "../../section-components/ApartmentCustomerVerificationApp";
// import ApartmentV2Crm from "../../section-components/apartmentV2Crm";
// import { getRegisteredUsersForPwWebAction, getReportsInfoAction } from '../../../store/action/traficAction'
import Heading from "./helpers/Heading";
import TheFeaturesSevice from "./helpers/TheFeaturesSevice";
import CenterMobile from "../CenterMobile";
// import PackagesV2 from "../Pricing/helpers/PackagesV2";
import VirtualPricingHandler from "./helpers/VirtualPricingHandler";
import "./helpers/virtualAgency.css";
import SeeAllPrices from "./helpers/SeeAllPrices";

const VirtualAgency = () => {
  const divRef = useRef(null);
  const [packages, setPackages] = useState("");
  const location = useLocation();

  let content = [
    {
      heading: {
        headingOne: "Showcase Listings",
        headingTwo: "Faster Sales",
        headingThree: "Agent Interaction",
        headingFour: "AI Search",
        headingFive: "Hot Listings",
        headingSix: "Refresh Credits",
      },
      content: {
        contentOne: "List and promote properties.",
        contentTwo: "Sell properties 2x fasters",
        contentThree: "Express interest, connect",
        contentFour: "Smart property recommendations",
        contentFive: "Highlight your properties",
        contentSix: "Boost listing visibility",
      },
      icons: {
        iconOne: showcaseListings,
        iconTwo: fasterSales,
        iconThree: agentInteraction,
        iconFour: aISearch,
        iconFive: hotListingspw,
        iconSix: refreshCredits,
      },
      videoPhone: mobilecarsoulvideo,
    },
  ];
  return (
    <>
      <NavbarSand divRef={divRef} setPackages={setPackages} />
      <Banner />
      <Facts />
      <Heading
        heading={
          <div>
            <span>Unlock the Future of Property Marketing with Our </span>
            <span style={{ color: "#27a3a3" }}>Property Wallet App</span>
          </div>
        }
      />
      <ApartmentV2 customClass="margin-top-fix-1" />
      <Heading heading="Property Wallet Inventory" />
      <TheFeaturesSevice />
      <CenterMobile content={content} heading="Agent Listing" />
      <VirtualProcess divRef={divRef} loc={location?.state?.ref} />
      {/* <VirtualPricingHandler /> */}
      <VirtualHero />
      <Footer_v1 />
    </>
  );
};

export default VirtualAgency;
