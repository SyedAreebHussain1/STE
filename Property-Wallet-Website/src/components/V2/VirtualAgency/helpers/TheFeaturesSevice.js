import React from "react";
import pwappvideo from "../../../images/pwappvideo.mp4";
import securePayment from "../../../images/Secure Payment.png";
import instantCommission from "../../../images/Instant Commission.png";
import exclusiveProjects from "../../../images/Exclusive Projects.png";
import incomeGrowth from "../../../images/Income Growth.png";

const TheFeaturesSevice = () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

  return (
    <div className="topspace bottomspace">
      <section className="wrapper ">
        <div
          className="feature-mobile-padding py-14 py-md-16"
          style={{ paddingRight: "20px" }}
        >
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center flex-d-c-r">
            <div className="col-lg-6 order-lg-2">
              <div className="row gx-md-5 gy-5 ">
                <div className="col-md-5 offset-md-1 align-self-end zindex-9999">
                  <div className="card-thefeatures bg-pale-yellow">
                    <div className="card-body-thefeatures">
                      <img
                        src={exclusiveProjects}
                        className="svg-inject icon-svg icon-svg-md text-yellow mb-3"
                        alt=""
                      />
                      <h4>Exclusive Projects</h4>
                      <p className="mb-0">
                        Premium, high-demand properties that are easy to sell
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 align-self-end">
                  <div className="card-thefeatures bg-pale-red">
                    <div className="card-body-thefeatures">
                      <img
                        src={instantCommission}
                        className="svg-inject icon-svg icon-svg-md text-red mb-3"
                        alt=""
                      />
                      <h4>Instant Commissions</h4>
                      <p className="mb-0">
                        Rapid earnings on successful deals, Get commission
                        within 72 hours
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 zindex-9999">
                  <div className="card-thefeatures bg-pale-leaf">
                    <div className="card-body-thefeatures">
                      <img
                        src={incomeGrowth}
                        className="svg-inject icon-svg icon-svg-md text-leaf mb-3"
                        alt=""
                      />
                      <h4>Income Growth</h4>
                      <p className="mb-0">
                        Achieve substantial and sustainable income growth
                        effortlessly
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 align-self-start">
                  <div className="card-thefeatures bg-pale-primary">
                    <div className="card-body-thefeatures">
                      <img
                        src={securePayment}
                        className="svg-inject icon-svg icon-svg-md text-primary mb-3"
                        alt=""
                      />
                      <h4>Secure Payments</h4>
                      <p className="mb-0">
                        Smooth deal finalization process with trustworthy
                        commission handling
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <h2
                className="fs-15 text-uppercase text-muted mb-3"
                style={{
                  display: "block",
                  marginBlockStart: "1em",
                  fontSize: "18px",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                What We Do?
              </h2>
              <h3
                className="display-4 mb-5"
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
                The service we offer is specifically designed
              </h3>
              <p
                style={{
                  display: "block",
                  marginBlockStart: "1em",
                  fontSize: "18px",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Maecenas sed diam eget risus varius blandit sit amet non
                magna. Maecenas faucibus mollis interdum. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et.
              </p> */}
              <div>
                <video
                  style={iOS || isAndroid ? { width: "" } : { width: "" }}
                  className="video-class1"
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source src={pwappvideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheFeaturesSevice;
