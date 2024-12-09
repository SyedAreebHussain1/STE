import React from "react";
import bannerCover from "../../../images/modal-backgrond2.jpg";
import mobileCover from "../../../images/modal-mod-view2.jpg";
const CoverBanner = () => {
  return (
    <>
      <div className="screen-view">
        <img src={bannerCover} alt="" />
      </div>
      <div className="mobile-view">
        <img src={mobileCover} alt="" />
      </div>
    </>
  );
};

export default CoverBanner;
