import React, { useEffect } from "react";
import AOS from "aos";
// icon
import lisiting from "../../../images/Listing.png";
import explore from "../../../images/explore.png";
import connecation from "../../../images/connecation.png";
import roadMap from "../../../images/roadmap.png";

const VirtualProcess = ({ divRef, loc }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    if (!loc) {
    } else {
      divRef.current.scrollIntoView({ behavior: "smooth" });
      loc = null;
    }
  }, [divRef, loc]);
  return (
    <div className="topspace bottomspace" data-aos="fade-up">
      <section className="wrapper ">
        <div className="container py-14 py-md-16">
          <div
            className="row gx-lg-8 gx-xl-12 gy-10 align-items-center flex-d-c-r "
            //       style={{display: flex;
            // flex-direction: column-reverse;}}
          >
            <div className="col-lg-7 mt-4per screen-view">
              <figure>
                <img className="w-auto" src={roadMap} srcSet="" alt="" />
              </figure>
            </div>
            <div className="col-lg-5">
              <h2
                className="fs-15 text-uppercase text-line text-primary mb-3"
                style={{
                  display: "block",
                  marginBlockStart: "1em",
                  fontSize: "18px",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                How It Works?
              </h2>
              <h3
                className="display-5 mb-7 pe-xxl-5 "
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
                The Roadmap to Real Estate Victory
              </h3>
              <div className="col-lg-7 mt-4per mobile-view">
                <figure>
                  <img className="w-auto" src={roadMap} srcSet="" alt="" />
                </figure>
              </div>
              <div className="d-flex flex-row mb-4" ref={divRef}>
                <div>
                  <img
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    src={lisiting}
                    className="svg-inject icon-svg icon-svg-sm text-primary me-4"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="mb-1 fs-20"> Listings</h4>
                  <p
                    className="mb-1"
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
                    Easily display your properties online with thorough
                    descriptions, pictures, to increase their appeal and
                    visibility.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row mb-4">
                <div>
                  <img
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    src={connecation}
                    className="svg-inject icon-svg icon-svg-sm text-green me-4"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="mb-1 fs-20"> Connect</h4>
                  <p
                    className="mb-1"
                    style={{
                      marginTop: "0",
                      marginBottom: "1rem",
                      display: "block",
                      marginBlockStart: "1em",
                      marginBlockEnd: "1em",
                      fontSize: "16px",
                      marginInlineStart: "0px",
                      marginInlineEnd: "0px",
                      display: "block",
                    }}
                  >
                    Within our online community, connect with other agents to
                    build your network and collaborate with ease.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div>
                  <img
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    src={explore}
                    className="svg-inject icon-svg icon-svg-sm text-yellow me-4"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="mb-1 fs-20"> Explore</h4>
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
                      display: "block",
                    }}
                  >
                    By registering and perusing our portal, you can learn about
                    the simple features of Property Wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualProcess;
