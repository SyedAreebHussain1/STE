import React, { useEffect } from "react";
import AOS from "aos";

// img
import spMobile from "../../../images/spmobile.png";
import diversePortfolio from "../../../images/DiversePortfolio.png";
import verifiedProperties2 from "../../../images/VerifiedProperties2.png";
import inDepthProperty from "../../../images/InDepthProperty.png";

const DownloadApp = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="topspace bottomspace">
      <section className="wrapper ">
        <div className="container pt-9 pt-lg-11 pb-14 pb-lg-6">
          <div className="row gx-lg-8 gx-xl-10 align-items-center flex-d-c-r ">
            <div className="col-lg-6 screen-view">
              <figure>
                <img src={spMobile} alt="" />
              </figure>
            </div>
            <div className="col-lg-6">
              <h3
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
                Providing Exclusive Real Estate Inventory
              </h3>
              <div className="col-lg-6 mobile-view">
                <figure>
                  <img src={spMobile} alt="" />
                </figure>
              </div>
              <p
                className="mb-8"
                style={{
                  display: "block",
                  marginBlockStart: "1em",
                  fontSize: "18px",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                Explore a special the best properties picked just for you. We
                partner with the top builders and developers to give you access
                to unique listings.
              </p>
              <div className="row gy-6 gx-xxl-8 process-wrapper">
                <div className="col-md-4">
                  <div className="mt-2per">
                    <img
                      src={verifiedProperties2}
                      style={{ width: "2rem", height: "2rem" }}
                      className="svg-inject icon-svg icon-svg-sm text-green mb-3"
                      alt=""
                    />
                  </div>
                  <h4 className="mb-1 fs-20">Verified Properties Only</h4>
                </div>
                <div className="col-md-4">
                  <div className="mt-2per">
                    <img
                      src={diversePortfolio}
                      style={{ width: "2rem", height: "2rem" }}
                      className="svg-inject icon-svg icon-svg-sm text-red mb-3"
                      alt=""
                    />
                  </div>

                  <h4 className="mb-1 fs-20">
                    Diverse <br /> Portfolio
                  </h4>
                </div>
                <div className="col-md-4">
                  {" "}
                  <div className="mt-2per">
                    <img
                      src={inDepthProperty}
                      style={{ width: "2rem", height: "2rem" }}
                      className="svg-inject icon-svg icon-svg-sm text-aqua mb-3"
                      alt=""
                    />
                  </div>
                  <h4 className="mb-1 fs-20">In-depth Property Data</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadApp;
