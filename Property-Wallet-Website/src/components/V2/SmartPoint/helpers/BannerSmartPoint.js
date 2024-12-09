import React from "react";
import imgS from "../../../images/spbanner.jpg";
const BannerSmartPoint = () => {
  return (
    <>
      <div className="system-view" style={{ width: "100%" }}>
        <div className="sp-banner "> </div>
      </div>
      <div
        className="mobile-view"
        style={{
          width: "100%",
          padding: "10px",
        }}
      >
        <img src={imgS} style={{ borderRadius: "20px" }} />
      </div>
    </>
  );
};

export default BannerSmartPoint;
