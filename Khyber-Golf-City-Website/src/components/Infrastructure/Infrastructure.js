import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import OtherHeader from "../OtherHeader/OtherHeader";
import { AiFillInfoCircle } from "react-icons/ai";
import img1 from "../images/kgc1.jpg";
import img2 from "../images/Kgc2.jpg";
import img3 from "../images/Kgc3.png";
import AOS from "aos";
import img7 from "../images/kgclayout.jpg";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import InfrastructureData from "./data/ModernInfrastructure";
const Infrastructure = () => {
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <header className="header-other-bg">
        <Navbar />
        <OtherHeader
          name1={t("profea6")}
          // name2={  data== "ur" || data == "ps" ? t('profea7') : t('profea71')}
        />
      </header>
      <div
        data-aos="fade-up"
        style={
          data == "en"
            ? { marginLeft: "5%", marginRight: "5%", margin: "3%" }
            : {
                marginLeft: "5%",
                marginRight: "5%",
                margin: "3%",
                fontFamily: "JameelNoori",
              }
        }
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            {/* {data == "ur" || data == "ps" ? t("profea7") : t("profea71")}{" "} */}
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {t("profea71")}
            </span>{" "}
          </span>
        </h1>
        {/* hr */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* hr */}
        <p
          style={
            data == "en"
              ? {
                  textAlign: "left",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontWeight: "400",
                }
              : {
                  textAlign: "right",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontSize: 20,
                }
          }
          className="u-text-small"
        >
          {t("profeainf")}
        </p>
        <InfrastructureData />
      </div>
      {/* section 2 */}
    </>
  );
};
export default Infrastructure;
