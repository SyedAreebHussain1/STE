import React, { useState, useEffect } from "react";
import { Partners } from "./helpers/Partners";
import Footer from "../../global-components/footer";
import NavbarSand from "../../global-components/NavbarSand";
import BannerSmartPoint from "./helpers/BannerSmartPoint";
import OurPartner from "./helpers/OurPartner";
import SmartPointForm from "./helpers/SmartPointForm";
import WhatWeDo from "./helpers/WhatWeDo";
import FourBox from "./helpers/FourBox";
import DownloadApp from "./helpers/DownloadApp";
import CenterMobile from "../CenterMobile";
import smartpointmobilevideo from "../../images/smartpointmobilevideo.mp4";
import HereAreThree from "./helpers/HereAreThree";

// icons
import icon1 from "../../images/smartpointimgs/Comprehensive Equipment.png";
import icon2 from "../../images/smartpointimgs/Efficient Apps & Software.png";
import icon3 from "../../images/smartpointimgs/Professional Workspaces.png";
import icon4 from "../../images/smartpointimgs/Exclusive Inventories.png";
import icon5 from "../../images/smartpointimgs/Seamless Transaction.png";
import icon6 from "../../images/smartpointimgs/Branding Neon Lights.png";
import "./helpers/smartPoint.css";
import "../Sellwithus/sellwithus.css";

const SmartPoint = (props) => {
  const [title, setTitle] = useState("Smart Point | Property Wallet");
  useEffect(() => {
    if (props.location.pathname === "/smart-point") {
      setTitle("Smart Point | Property Wallet");
    } else {
      setTitle("Smart Point | Property Wallet");
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
  let content = [
    {
      heading: {
        headingOne: "Professional Workspaces",
        headingTwo: "Comprehensive Equipment",
        headingThree: "Efficient Apps & Software",
        headingFour: "Seamless Transaction",
        headingFive: "Exclusive Inventories",
        headingSix: "Branding Neon Lights",
      },
      content: {
        contentOne: "Transform your space into an office environment",
        contentTwo: "Access essential tools for productivity",
        contentThree: "Streamline operations with our specialized software",
        contentFour: "Easily handle payments and close deals",
        contentFive: "Premium properties that can sell faster & easily",
        contentSix:
          "Illuminate your brand with Property Wallet's distinctive neon lights",
      },
      icons: {
        iconOne: icon3,
        iconTwo: icon1,
        iconThree: icon2,
        iconFour: icon5,
        iconFive: icon4,
        iconSix: icon6,
      },
      videoPhone: smartpointmobilevideo,
    },
  ];
  return (
    <div>
      <NavbarSand />
      <BannerSmartPoint />
      <CenterMobile content={content} heading="What We Are Offering" type='smart' />
      <WhatWeDo />
      <FourBox />
      <DownloadApp />
      <HereAreThree />
      <OurPartner />
      <Partners />
      <SmartPointForm />
      <Footer />
    </div>
  );
};

export default SmartPoint;
