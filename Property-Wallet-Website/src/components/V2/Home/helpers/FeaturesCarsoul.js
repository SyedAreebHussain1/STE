import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import aiIcon from "../../../images/features/ai.png";
import earnIcon from "../../../images//features/EarnExtraCommission.png";
import sellFasterIcon from "../../../images//features/SellPropertiesFaster.png";
import exclusiveIcon from "../../../images//features/ExclusiveProjects.png";
import hotListingIcon from "../../../images//features/HotListing.png";
import smoothIcon from "../../../images//features/SmoothDigitalTransactions.png";
import completeManagementIcon from "../../../images//features/CompleteRealEstateManagement.png";
import pwLeadIcon from "../../../images//features/PropertyWalletLeadsCenter.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../SmartPoint/helpers/smartPoint.css";
import ViewAllFeature from "./ViewAllFeature";

export const FeaturesCarsoul = (name, handleNavigate) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  const items = [
    <div
      className="card11 shadow-lg "
      style={{ margin: "10px", padding: "18px", height: "270px" }}
    >
      <div className="card-body-carsoul" style={{ textAlign: "center" }}>
        <img
          src={aiIcon}
          className="svg-inject icon-svg icon-svg-md text-blue mb-3"
          alt=""
        />
        <h5>Property Wallet Integrated with AI</h5>
        <p className="mb-2">
          Utilizes artificial intelligence to enhance property management,
          analysis, and customer interactions.
        </p>
      </div>
    </div>,
    <div
      className="card11 shadow-lg "
      style={{ margin: "10px", padding: "18px", height: "270px" }}
    >
      <div className="card-body-carsoul" style={{ textAlign: "center" }}>
        <img
          src={earnIcon}
          className="svg-inject icon-svg icon-svg-md text-blue mb-3"
          alt=""
        />
        <h5>
          Earn High <br />
          Commission
        </h5>
        <p className="mb-2">
          Provides opportunities for agents to earn additional commissions and
          successful transactions within the platform.
        </p>
      </div>
    </div>,
    <div
      className="card11 shadow-lg "
      style={{ margin: "10px", padding: "18px", height: "270px" }}
    >
      <div className="card-body-carsoul" style={{ textAlign: "center" }}>
        <img
          src={sellFasterIcon}
          className="svg-inject icon-svg icon-svg-md text-blue mb-3"
          alt=""
        />
        <h5>
          Sell Properties 2X <br />
          Faster
        </h5>
        <p className="mb-2">
          Offers efficient tools and resources to accelerate property sales,
          reducing listing-to-sale timelines significantly.
        </p>
      </div>
    </div>,
    <div
      className="card11 shadow-lg "
      style={{ margin: "10px", padding: "18px", height: "270px" }}
    >
      <div className="card-body-carsoul" style={{ textAlign: "center" }}>
        <img
          src={exclusiveIcon}
          className="svg-inject icon-svg icon-svg-md text-blue mb-3"
          alt=""
        />
        <h5>
          Exclusive <br />
          Projects
        </h5>
        <p className="mb-2">
          Showcases exclusive real estate projects, granting users access to
          unique and high-value opportunities.
        </p>
      </div>
    </div>,
    <div
      className="card11 shadow-lg "
      style={{ margin: "10px", padding: "18px", height: "270px" }}
    >
      <div className="card-body-carsoul" style={{ textAlign: "center" }}>
        <img
          src={hotListingIcon}
          className="svg-inject icon-svg icon-svg-md text-blue mb-3"
          alt=""
        />
        <h4>
          Hot
          <br /> Listing
        </h4>
        <p className="mb-2">
          Highlights top-performing and high-demand properties, increasing
          visibility and attracting potential buyers.
        </p>
      </div>
    </div>,
    <div
      className="card11 shadow-lg "
      style={{ margin: "10px", padding: "18px", height: "270px" }}
    >
      <div className="card-body-carsoul" style={{ textAlign: "center" }}>
        <img
          src={smoothIcon}
          className="svg-inject icon-svg icon-svg-md text-blue mb-3"
          alt=""
        />
        <h4>
          Smooth Digital <br />
          Transactions
        </h4>
        <p className="mb-2">
          Facilitates seamless and secure digital transactions for property
          purchases, minimizing paperwork and complexities.
        </p>
      </div>
    </div>,
    <div
      className="card11 shadow-lg "
      style={{ margin: "10px", padding: "18px", height: "270px" }}
    >
      <div className="card-body-carsoul" style={{ textAlign: "center" }}>
        <img
          src={completeManagementIcon}
          className="svg-inject icon-svg icon-svg-md text-blue mb-3"
          alt=""
        />
        <h4>
          Complete Real <br />
          Estate Management
        </h4>
        <p className="mb-2">
          Provides comprehensive tools for real estate agencies to manage
          listings, transactions, agents, and clients efficiently.
        </p>
      </div>
    </div>,
    <div
      className="card11 shadow-lg "
      style={{ margin: "10px", padding: "18px", height: "270px" }}
    >
      <div className="card-body-carsoul" style={{ textAlign: "center" }}>
        <img
          src={pwLeadIcon}
          className="svg-inject icon-svg icon-svg-md text-blue mb-3"
          alt=""
        />
        <h4>
          Property Wallet <br /> Leads Center
        </h4>
        <p className="mb-2">
          Centralizes and organizes leads generated from various sources,
          optimizing lead management and conversion processes.
        </p>
      </div>
    </div>,
  ];
  return (
    <>
      <div className="Main-cont">
        <div className="carous">
          <AliceCarousel
            animationDuration={2000}
            items={items}
            activeIndex={activeIndex}
            responsive={responsive}
            autoPlay={true}
            keyboardNavigation={true}
            renderPrevButton={() => {
              return (
                <div
                  className="carsoul-btn"
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderRadius: "100%",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 22px",
                  }}
                >
                  {" "}
                  <ArrowLeftOutlined
                    style={{ paddingRight: "9px", paddingLeft: "4px" }}
                  />{" "}
                </div>
              );
            }}
            renderNextButton={() => {
              return (
                <div
                  className="carsoul-btn"
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderRadius: "100%",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                >
                  {" "}
                  <ArrowRightOutlined style={{ marginLeft: "20%" }} />{" "}
                </div>
              );
            }}
            infinite
          />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ViewAllFeature
          name="View All Features"
          handleNavigate={handleNavigate}
        />
      </div>
    </>
  );
};
