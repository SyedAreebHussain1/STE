import React from "react";
import providing from "../../../images/providing1.png";
// import hour24 from "../../../images/24serives01.png"
import unlock from "../../../images/Unlock.png";
import verifiedProperties from "../../../images/VerifiedProperties.png";
import diverse from "../../../images/Diverse.png";
import comprehensive from "../../../images/Comprehensive.png";
import mobilecarsoulvideo from "../../../images/mobilecarsoulvideo.mp4";

const CenterMobile = ({ content }) => {
  console.log(content);
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  return (
    <div>
      <section
        className="wrapper"
        style={{ marginTop: "7%", marginBottom: "7%" }}
        data-aos="zoom-in-down"
      >
        <div className="container py-14 py-md-16">
          <div className="row text-center">
            <div className="col-md-10 col-lg-7 mx-auto position-relative">
              {/* <img
                src="https://sandbox.elemisthemes.com/assets/img/svg/doodle5.svg"
                className="w-15 position-absolute d-none d-lg-block"
                data-delay="1800"
                style={{ bottom: "-70%", right: "5%" }}
                alt=""
              /> */}
              {/* <img src="https://sandbox.elemisthemes.com/assets/img/svg/doodle5.svg" className="h-15 position-absolute d-none d-lg-block" data-delay="1800" style={{ top: '-40%', left: '-5%' }} alt="" /> */}
              <h3
                className="display-3  px-xl-6"
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
                Our Best Feature
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-11 mx-auto">
              <div className="row gy-10 gy-lg-0 text-center d-flex align-items-center ">
                <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
                  {/* <figure className="mx-auto">
                    <img src={providing} alt="" />
                  </figure> */}
                  <div className="system-view">
                    <video
                      style={
                        iOS || isAndroid ? { width: "" } : { width: "320px" }
                      }
                      // className="video-class1"
                      autoPlay
                      playsInline
                      muted
                      loop
                    >
                      <source src={mobilecarsoulvideo} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="w-100 d-lg-none"></div>
                <div className="col-md-6 col-lg-4 order-lg-first">
                  <div className="">
                    <span className="fs-60 lh-1  fw-normal text-gradient gradient-7">
                      {" "}
                      <img
                        width={"30px"}
                        src={verifiedProperties}
                        alt=""
                      />{" "}
                    </span>
                    <h4
                      className="fs-20"
                      style={{
                        marginTop: "0",
                        // marginBottom: "0.5rem",
                        fontWeight: "700",
                        color: "#343f52",
                        wordSpacing: "0.1rem",
                        letterSpacing: "-.01rem",
                      }}
                    >
                      Showcase Listings
                    </h4>
                    <p
                      className=" px-xl-7"
                      style={{
                        display: "block",
                        marginBlockStart: "1em",
                        fontSize: "15px",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      List and promote properties.
                    </p>
                  </div>
                  <div>
                    <span className="fs-60 lh-1  fw-normal text-gradient gradient-7">
                      <img width={"30px"} src={unlock} alt="" />
                    </span>
                    <h4
                      className="fs-20"
                      style={{
                        marginTop: "0",
                        // marginBottom: "0.5rem",
                        fontWeight: "700",
                        color: "#343f52",
                        wordSpacing: "0.1rem",
                        letterSpacing: "-.01rem",
                      }}
                    >
                      Faster Sales
                    </h4>
                    <p
                      className=" px-xl-7"
                      style={{
                        display: "block",
                        marginBlockStart: "1em",
                        fontSize: "15px",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      Sell properties 2x fasters
                    </p>
                  </div>
                  <div>
                    <span className="fs-60 lh-1  fw-normal text-gradient gradient-7">
                      <img width={"30px"} src={comprehensive} alt="" />
                    </span>
                    <h4
                      className="fs-20"
                      style={{
                        marginTop: "0",
                        // marginBottom: "0.5rem",
                        fontWeight: "700",
                        color: "#343f52",
                        wordSpacing: "0.1rem",
                        letterSpacing: "-.01rem",
                      }}
                    >
                      Agent Interaction
                    </h4>
                    <p
                      className=" px-xl-7 "
                      style={{
                        display: "block",
                        marginBlockStart: "1em",
                        fontSize: "15px",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      Express interest, connect
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="">
                    <span className="fs-60 lh-1  fw-normal text-gradient gradient-7">
                      <img width={"30px"} src={diverse} alt="" />
                    </span>
                    <h4
                      className="fs-20"
                      style={{
                        marginTop: "0",
                        // marginBottom: "0.5rem",
                        fontWeight: "700",
                        color: "#343f52",
                        wordSpacing: "0.1rem",
                        letterSpacing: "-.01rem",
                      }}
                    >
                      AI Search
                    </h4>
                    <p
                      className=" px-xl-7"
                      style={{
                        display: "block",
                        marginBlockStart: "1em",
                        fontSize: "15px",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      Smart property recommendations
                    </p>
                  </div>
                  <div>
                    <span className="fs-60 lh-1  fw-normal text-gradient gradient-7">
                      <img width={"30px"} src={unlock} alt="" />
                    </span>
                    <h4
                      className="fs-20"
                      style={{
                        marginTop: "0",
                        // marginBottom: "0.5rem",
                        fontWeight: "700",
                        color: "#343f52",
                        wordSpacing: "0.1rem",
                        letterSpacing: "-.01rem",
                      }}
                    >
                      Hot Listings
                    </h4>
                    <p
                      className=" px-xl-7"
                      style={{
                        display: "block",
                        marginBlockStart: "1em",
                        fontSize: "15px",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      Highlight your properties
                    </p>
                  </div>
                  <div>
                    <span className="fs-60 lh-1  fw-normal text-gradient gradient-7">
                      <img width={"30px"} src={unlock} alt="" />
                    </span>
                    <h4
                      className="fs-20"
                      style={{
                        marginTop: "0",
                        // marginBottom: "0.5rem",
                        fontWeight: "700",
                        color: "#343f52",
                        wordSpacing: "0.1rem",
                        letterSpacing: "-.01rem",
                      }}
                    >
                      Refresh Credits
                    </h4>
                    <p
                      className=" px-xl-7"
                      style={{
                        display: "block",
                        marginBlockStart: "1em",
                        fontSize: "15px",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      Boost listing visibility
                    </p>
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

export default CenterMobile;
