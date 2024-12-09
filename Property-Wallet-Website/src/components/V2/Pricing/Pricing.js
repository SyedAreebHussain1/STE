import React, { useState, useEffect } from "react";
import NavbarNew from "../../global-components/NavbarNew";
import Footer_v1 from "../../global-components/footer";
import PricingHandle from "./helpers/PricingHandle";
import PricingFaqs from "./helpers/PricingFaqs";

import JoinOur from "./helpers/JoinOur";
import NavbarNewTwo from "../../global-components/NavbarNewTwo";
import NavbarSand from "../../global-components/NavbarSand";
import PricingHandlePer from "./helpers/PricingHandlePer";
import Packages from "./helpers/Packages";
import PackagesV2 from "./helpers/PackagesV2";
import StaticPackages from "./helpers/StaticPackages";
import "./helpers/pricing.css";

const Pricing = (props) => {
  const [title, setTitle] = useState("About | Property Wallet");

  useEffect(() => {
    if (props.location.pathname == "/pricing") {
      setTitle("Pricing | Property Wallet");
    } else {
      setTitle("Pricing | Property Wallet");
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <NavbarSand />
      {/* <Packages /> */}
      {/* <PricingHandlePer /> */}
      <PackagesV2 />
      <br />
      {/* <StaticPackages /> */}
      {/* <JoinOur /> */}
      {/* <PricingFaqs /> */}
      <Footer_v1 />
    </div>
  );
};

export default Pricing;
