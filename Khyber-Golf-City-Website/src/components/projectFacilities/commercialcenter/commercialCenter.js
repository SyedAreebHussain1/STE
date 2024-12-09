import React, { useEffect, useState } from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import AOS from "aos";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
const CommercialCenter = () => {
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos="flip-up"
      style={{ marginTop: "2%", marginLeft: "0%" }}
      className="pesharwarow"
    >
      <div className="moderninfracolumn">
        <img src={img1} alt="Snow" width="100%" style={{ borderRadius: 5 }} />
      </div>
      <div className="moderninfracolumn">
        <img src={img2} alt="Forest" width="100%" style={{ borderRadius: 5 }} />
      </div>
      <div className="moderninfracolumn">
        <img
          src={img3}
          alt="Mountains"
          width="100%"
          style={{ borderRadius: 5 }}
        />
      </div>
    </div>
  );
};
export default CommercialCenter;
