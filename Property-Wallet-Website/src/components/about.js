import React, { useEffect, useState } from "react";

import Footer from "./global-components/footer";
import { OurEthics } from "./section-components/our-ethics";

import PageHeaderV2 from "./V2/about-v2-a/page-headerV2";
import About_V2_View from "./V2/about-v2-a/About_V2_View";
import DetailsContent from "./V2/about-v2-a/details-content";
import NavbarSand from "./global-components/NavbarSand";
import ThreeBox from "./V2/Home/helpers/ThreeBox";

const About_v1 = (props) => {
  const [title, setTitle] = useState("About | Property Wallet");

  useEffect(() => {
    if (props.location.pathname == "/about") {
      setTitle("About | Property Wallet");
    } else {
      setTitle("About | Property Wallet");
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
  const contentArry = [
    {
      title: "Mission ",
      content:
        "At Property Wallet, our mission is to empower real estate professionals across Pakistan with cutting-edge technology and unparalleled convenience. We strive to revolutionize the real estate industry by providing a comprehensive platform that enhances the way agents manage, market, and grow their businesses.",
    },
    {
      title: "Vision ",
      content:
        "Our vision at Property Wallet is to reshape the landscape of real estate in Pakistan. We envision a future where every realtor can harness the power of our innovative mobile app to streamline their operations, expand their networks, and increase their overall success.",
    },
  ];
  return (
    <div>
      <NavbarSand />
      <PageHeaderV2
        headertitle="About Us"
        content="Our mission is to provide complete convenience to all estate dealers through a safe, fast and reliable service that you can access anywhere, anytime,"
      />
      <About_V2_View />
      <DetailsContent content="Property Wallet is not just a mobile app it's your trusted ally in the world of real estate. With a dedicated focus on providing top-notch solutions to realtors, we've created a platform that is designed to be your all-in-one business management & selling. We understand the unique challenges and opportunities in the Pakistani real estate market, and our mission is to equip you with the resources you need to thrive. Whether you're a seasoned professional or just starting your journey in real estate, Property Wallet is here to support you every step of the way. Join us in shaping the future of the real estate industry and experience the difference with Property Wallet – where convenience, efficiency, and success converge." />
      <ThreeBox
        contentArry={contentArry}
        customClass="margin-top-fix-1 ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---"
      />
      <OurEthics />
      <Footer />
    </div>
  );
};

export default About_v1;
