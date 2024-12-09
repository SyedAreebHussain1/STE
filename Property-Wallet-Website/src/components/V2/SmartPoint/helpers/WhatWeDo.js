import React, { useEffect } from "react";
import AOS from "aos";
import spbelowimg from "../../../images/spbelowimg.png";
// icons
import exclusiveInventory from "../../../images/ExclusiveInventory.png";
import highCommissions from "../../../images/HighCommissions.png";
import trainingSupport from "../../../images/TrainingSupport.png";
import marketingSupport from "../../../images/MarketingSupport.png";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);
  return (
    <div className="bottomspace topspace">
      <section className="wrapper ">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gy-8 align-items-center flex-d-c-r">
            <div className="col-lg-6 order-lg-2">
              {/* <div className="row gx-md-5 gy-5">
                <div className="col-md-4 offset-md-2 align-self-end">
                  <figure className="rounded">
                    <img src="./assets/img/photos/g1.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-md-6 align-self-end">
                  <figure className="rounded">
                    <img src="./assets/img/photos/g2.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-md-6 offset-md-1">
                  <figure className="rounded">
                    <img src="./assets/img/photos/g3.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-md-4 align-self-start">
                  <figure className="rounded">
                    <img src="./assets/img/photos/g4.jpg" alt="" />
                  </figure>
                </div>
              </div> */}
              <div className="screen-view">
                <img src={spbelowimg} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2
                className="display-4 "
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
                What We Do?
              </h2>
              <div className="mobile-view">
                <img src={spbelowimg} alt="" />
              </div>
              <p
                className=""
                style={{
                  display: "block",
                  marginBlockStart: "1em",
                  fontSize: "18px",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                Property Wallet Smart Point is a cutting-edge platform that
                offers a physical and interactive selling point in high-traffic
                location
              </p>
              <div className="row gx-xl-10 gy-6">
                <div className="col-md-6 col-lg-12 col-xl-6">
                  <div className="d-flex flex-row">
                    <div>
                      <div
                        className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-3"
                        style={{ backgroundColor: "#e0e9fa" }}
                      >
                        {" "}
                        {/* <i className="uil uil-phone-volume"></i>{" "} */}
                        <img
                          src={exclusiveInventory}
                          style={{ width: "1.5rem", height: "1.5rem" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="fs-20">Exclusive Inventory</h4>
                      <p
                        className="mb-0"
                        style={{
                          marginTop: "0",
                          marginBottom: "1rem",
                          display: "block",
                          marginBlockStart: "1em",
                          marginBlockEnd: "1em",
                          fontSize: "16px",
                          marginInlineStart: "0px",
                          marginInlineEnd: "0px",
                        }}
                      >
                        Access to exclusive and high-demand properties
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12 col-xl-6">
                  <div className="d-flex flex-row">
                    <div>
                      <div
                        className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-3"
                        style={{ backgroundColor: "#e0e9fa" }}
                      >
                        {" "}
                        <img
                          src={highCommissions}
                          style={{ width: "1.5rem", height: "1.5rem" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="fs-20">High Commissions</h4>

                      <p
                        className="mb-0"
                        style={{
                          marginTop: "0",
                          marginBottom: "1rem",
                          display: "block",
                          marginBlockStart: "1em",
                          marginBlockEnd: "1em",
                          fontSize: "16px",
                          marginInlineStart: "0px",
                          marginInlineEnd: "0px",
                        }}
                      >
                        Earn attractive commissions by selling properties
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-12 col-xl-6"
                  style={{ border: "", marginTop: "20px" }}
                >
                  <div className="d-flex flex-row">
                    <div>
                      <div
                        className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-3"
                        style={{ backgroundColor: "#e0e9fa" }}
                      >
                        {" "}
                        <img
                          src={marketingSupport}
                          style={{ width: "1.5rem", height: "1.5rem" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="fs-20">Marketing Support</h4>

                      <p
                        className="mb-0"
                        style={{
                          marginTop: "0",
                          marginBottom: "1rem",
                          display: "block",
                          marginBlockStart: "1em",
                          marginBlockEnd: "1em",
                          fontSize: "16px",
                          marginInlineStart: "0px",
                          marginInlineEnd: "0px",
                        }}
                      >
                        Reach broader audience & attract buyers
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-12 col-xl-6"
                  style={{ marginTop: "20px" }}
                >
                  <div className="d-flex flex-row">
                    <div>
                      <div
                        className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-3"
                        style={{ backgroundColor: "#e0e9fa" }}
                      >
                        {" "}
                        <img
                          style={{ width: "1.5rem", height: "1.5rem" }}
                          src={trainingSupport}
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="fs-20">Training & Support</h4>
                      <p
                        className="mb-0"
                        style={{
                          marginTop: "0",
                          marginBottom: "1rem",
                          display: "block",
                          marginBlockStart: "1em",
                          marginBlockEnd: "1em",
                          fontSize: "16px",
                          marginInlineStart: "0px",
                          marginInlineEnd: "0px",
                        }}
                      >
                        Provide comprehensive training & ongoing support
                      </p>
                    </div>
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

export default WhatWeDo;
