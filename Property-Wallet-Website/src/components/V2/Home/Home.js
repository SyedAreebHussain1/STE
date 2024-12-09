import React, { useState, useEffect } from "react";
import Footer from "../../global-components/footer";
import ModalPopup from "../../V2/ModalPopup.js";
import MainVideoBanner from "../../V2/MainVideoBanner";
import ThreeBox from "./helpers/ThreeBox";
import Process from "./helpers/Process";
import PwAgent from "./helpers/PwAgent";
import Heading from "./helpers/Heading";
import sellfaster from "../../images/sellfaster01.png";
import hour24 from "../../images/24serives01.png";
import easytouse from "../../images/easytouse01.png";
import PwSide from "./helpers/PwSide";
import NavbarSand from "../../global-components/NavbarSand";
import { useHistory } from "react-router-dom";
import "./helpers/Home.css";
import { FeaturesCarsoul } from "./helpers/FeaturesCarsoul";
import CoverBanner from "./helpers/CoverBanner";

const Home = (props) => {
  const history = useHistory();
  const [title, setTitle] = useState(
    "Pakistan’s 1st Real Estate App | Property Wallet"
  );

  useEffect(() => {
    if (props.location.pathname === "/") {
      setTitle("Pakistan’s 1st Real Estate App | Property Wallet");
    } else {
      setTitle("Pakistan’s 1st Real Estate App | Property Wallet");
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
  const contentArry = [
    {
      title: "Easy to use",
      content:
        "You can easily navigate through our app without being a tech specialist.",
      icon: easytouse,
    },
    {
      title: "Sell Property 2X Faster",
      content: "Properties Sold Twice as Fast with Our Innovative Approach!",
      icon: sellfaster,
    },
    {
      title: "24/7 Service",
      content:
        "We’re never offline, hence, you can manage your properties online, anytime, anywhere.",
      icon: hour24,
    },
  ];
  function handleNavigate(nav) {
    history.push(nav);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <ModalPopup />
      <NavbarSand />
      <MainVideoBanner />
      <ThreeBox
        locationType={props?.location?.pathname}
        contentArry={contentArry}
        customClass="margin-top-fix-1 ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---"
      />
      <CoverBanner />
      <PwAgent />
      <PwSide
        content="Property Wallet is designed to make your property journey easy and efficient. Our platform offers intuitive features that guide you every step of the way. To begin, sign up for a free account on our mobile app. After logging in, you'll have access to free tools. You can upgrade to a premium account to unlock more features like:"
        heading="Property Management & Selling Made Easy"
        listItem={{
          arrFirst: [
            "Property Wallet Listings",
            "Wide Range of Inventories",
            "Streamlined Transactions",
            "Agency Management",
          ],
          arrSecond: [
            "AI Powered Tools",
            "Verified Properties",
            "Hot Listings",
            "Marketing and Lead Generation",
          ],
        }}
        name="View All Features"
        handleNavigate={() => handleNavigate("/property-wallet-app")}
        btn="View All Features"
      />
      <Process />
      <Heading Heading="Our Features" />
      <FeaturesCarsoul
        name="View All Features"
        handleNavigate={() => handleNavigate("/property-wallet-app")}
      />
      <PwSide
        contentBelow="You only need to quickly fill out a form to sign up as a Property Wallet partner to start your journey. For those looking to make a handsome income, we have a premium account that gives you access to a lot of extra features."
        content="Property Wallet introduces a new solution aimed at transforming your real estate experiences. Our user-friendly platform has been carefully designed to make each stage of your real estate adventure easier and more enriching. When you join the Property Wallet community, you gain access to a number of user-friendly features that ensure a smooth journey from start to finish."
        heading="Join Property Wallet to Become Pro Realtor"
        btn="Become a Property Wallet Partner"
        handleNavigate={() => handleNavigate("/property-wallet-app")}
      />
      <Footer />
    </>
  );
};

export default Home;
