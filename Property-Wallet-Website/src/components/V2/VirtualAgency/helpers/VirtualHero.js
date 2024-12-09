import React, { useEffect } from "react";
import AOS from "aos";
import pricingPackge from "../../../images/pricingPackge.png";
import googlePlayBtn from "../../../images/playstore-banner-btn.png";
import appStoreApple from "../../../images/apple-banner-btn.png";
const VirtualHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="topspace bottomspace">
      <section className="wrapper ">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center flex-d-c-r">
            <div className="col-lg-6 mt-4per">
              <div
                className="shape bg-line leaf rounded-circle rellax w-17 h-17"
                data-rellax-speed="1"
                style={{ top: "-2rem", right: "-0.6rem" }}
              ></div>
              <div
                className="shape bg-pale-violet rounded-circle rellax w-17 h-17"
                data-rellax-speed="1"
                style={{ bottom: "-2rem", left: "-0.4rem" }}
              ></div>
              <figure className="rounded mb-0 screen-view">
                <img src={pricingPackge} alt="" />
              </figure>
            </div>
            <div className="col-lg-6 margin--px">
              <h3
                className="display-4 mb-4"
                style={{
                  lineHeight: "1.3",
                  marginTop: "0",
                  marginBottom: "0.5rem",
                  fontWeight: "700",
                  color: "#343f52",
                  wordSpacing: "0.1rem",
                  letterSpacing: "-.01rem",
                  fontSize: "2.5rem",
                }}
              >
                We Redefine Success in Real Estate Join Us Now!{" "}
              </h3>
              <figure className="rounded mb-0 mobile-view">
                <img src={pricingPackge} alt="" />
              </figure>

              <p
                className="mb-5"
                style={{
                  display: "block",
                  marginBlockStart: "1em",
                  fontSize: "18px",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                On Property Wallet, we're encouraging you to experience a
                brand-new era of real estate success. Utilize our powerful
                online platform to quickly make significant commissions, list
                properties, and connect with ease. Embrace the real estate of
                tomorrow today to realize your full company potential.
              </p>
              <div className="row gy-3">
                <div
                  className=""
                  style={{ display: "flex", justifyContent: "" }}
                >
                  <div>
                    <a target="_blank" href="http://bit.ly/400UobD">
                      <img
                        style={{ width: "8rem", height: "" }}
                        src={appStoreApple}
                      />
                    </a>
                  </div>
                  <div style={{ cursor: "pointer" }}>
                    <a target="_blank" href="http://bit.ly/40cIpYz">
                      <img
                        style={{ width: "8rem", height: "" }}
                        src={googlePlayBtn}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualHero;
