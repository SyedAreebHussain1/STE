import React from "react";
// import providing from "../../../images/providing1.png";s
// import hour24 from "../../../images/24serives01.png"
// import unlock from "../images/Unlock.png";
// import verifiedProperties from "../images/VerifiedProperties.png";
// import diverse from "../images/Diverse.png";
// import comprehensive from "../images/Comprehensive.png";
// import mobilecarsoulvideo from "../images/mobilecarsoulvideo.mp4";

const CenterMobile = ({ content, heading, type }) => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  return (
    <div>
      <section
        className="wrapper topspace bottomspace"
      // style={{ marginTop: "7%", marginBottom: "7%" }}
      // data-aos="zoom-in-down"
      >
        <div className="container py-14 py-md-16">
          <div className="row text-center">
            <div className="col-md-10 col-lg-7 mx-auto position-relative mb-6" >
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
                {/* Our Best Feature */}
                {heading}
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
                        iOS || isAndroid ? { width: "100%", outline: 'none', clipPath: 'inset(10px 10px)', } : { width: "320px", outline: 'none', clipPath: 'inset(10px 10px)', }
                      }

                      autoPlay
                      playsInline
                      muted
                      loop={!type ? true : false}
                    >
                      <source src={content?.[0]?.videoPhone} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="w-100 d-lg-none"></div>
                <div className="col-md-6 col-lg-4 order-lg-first max-width-50 mt-4per">
                  <div className="">
                    <span className="fs-60 lh-1  fw-normal text-gradient gradient-7">
                      {" "}
                      <img
                        width={"30px"}
                        src={content?.[0]?.icons?.iconOne}
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
                      {/* Showcase Listings */}
                      {content?.[0]?.heading?.headingOne}
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
                      {/* List and promote properties. */}
                      {content?.[0]?.content?.contentOne}
                    </p>
                  </div>
                  <div>
                    <span className="fs-60 lh-1  fw-normal text-gradient gradient-7">
                      <img
                        width={"30px"}
                        src={content?.[0]?.icons?.iconTwo}
                        alt=""
                      />
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
                      {content?.[0]?.heading?.headingTwo}
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
                      {/* Sell properties 2x fasters */}
                      {content?.[0]?.content?.contentTwo}
                    </p>
                  </div>
                  <div>
                    <span className="fs-60 lh-1  fw-normal text-gradient gradient-7">
                      <img
                        width={"30px"}
                        src={content?.[0]?.icons?.iconThree}
                        alt=""
                      />
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
                      {/* Agent Interaction */}
                      {content?.[0]?.heading?.headingThree}
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
                      {/* Express interest, connect */}
                      {content?.[0]?.content?.contentThree}
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 max-width-50 mt-4per">
                  <div className="">
                    <span className="fs-60 lh-1  fw-normal text-gradient gradient-7">
                      <img
                        width={"30px"}
                        src={content?.[0]?.icons?.iconFour}
                        alt=""
                      />
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
                      {/* AI Search */}
                      {content?.[0]?.heading?.headingFour}
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
                      {/* Smart property recommendations */}
                      {content?.[0]?.content?.contentFour}
                    </p>
                  </div>
                  <div>
                    <span className="fs-60 lh-1  fw-normal text-gradient gradient-7">
                      <img
                        width={"30px"}
                        src={content?.[0]?.icons?.iconFive}
                        alt=""
                      />
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
                      {/* Hot Listings */}
                      {content?.[0]?.heading?.headingFive}
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
                      {/* Highlight your properties */}
                      {content?.[0]?.content?.contentFive}
                    </p>
                  </div>
                  <div>
                    <span className="fs-60 lh-1  fw-normal text-gradient gradient-7">
                      <img
                        width={"30px"}
                        src={content?.[0]?.icons?.iconSix}
                        alt=""
                      />
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
                      {/* Refresh Credits */}
                      {content?.[0]?.heading?.headingSix}
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
                      {/* Boost listing visibility */}
                      {content?.[0]?.content?.contentSix}
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
