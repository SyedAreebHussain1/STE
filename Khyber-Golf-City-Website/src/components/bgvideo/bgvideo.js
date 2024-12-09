import React from "react";
import videoBg from "../../assets/videoBg.m4v";
import { useTranslation } from "react-i18next";
const Videobg = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="main-video">
      {/* <div className="overlay-video"></div> */}
      <video
        className="overlay-video"
        // src={videoBg}
        // src="https://di7b0povdn4ov.cloudfront.net/khybergolfprofilevideos/videoBg1.mp4"
        // src="https://di7b0povdn4ov.cloudfront.net/khybergolfprofilevideos/Comp1.mp4"
        // src="https://di7b0povdn4ov.cloudfront.net/khybergolfprofilevideos/videoBg.m4v"
        src="https://di7b0povdn4ov.cloudfront.net/videos/BuiltModel-1.m4v"
        autoPlay
        loop
        muted
        // controls="true"
        playsInline
      />
      <div className="content-video">
        <h1
          className="main-heading"
          style={{
            color: "white",
            // fontSize: "60px",
            // letterSpacing: "3px",
            textAlign: "center",
            fontFamily: "codePro",
            // bold: "bold",
          }}
        >
           {t("gateway")}
        </h1>
        {/* <a style={{ marginTop: "2%" }} className="default-btn">
          Forms will be available soon
        </a> */}
      </div>
    </div>
  );
};

export default Videobg;
