import React, { useState, useEffect } from "react";
import img1 from "../images/HP1.jpg";
import img2 from "../images/HP2.jpg";
import img3 from "../images/HP3.jpg";
import img4 from "../images/td1.jpg";
import img5 from "../images/td2.jpg";
import img6 from "../images/td3.jpg";
import img7 from "../images/new3.jpg";
import img8 from "../images/new1.jpg";
import img9 from "../images/new2.jpg";
import { AiFillInfoCircle } from "react-icons/ai";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import "aos/dist/aos.css";
import Card from "../cards/card";
import Peshawarcard from "../cards/peshawarcard";
const Peshawar = () => {
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        style={{
          // marginLeft: "5%",
          // marginRight: "5%",
          // margin: "3%",
          marginBottom: "4%",
          borderTop: "4px",
          borderTopStyle: "solid",
          borderTopColor: "#d69929",
        }}
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span
            style={
              data == "ur" || data == "ps"
                ? {
                    fontSize: "3.5vh",
                    color: "#2D3748",
                    fontFamily: "JameelNoori",
                  }
                : { fontSize: "3.5vh", color: "#2D3748" }
            }
          >
            {t("pss1")}
            {"  "}
            <span
              style={
                data == "ur" || data == "ps"
                  ? {
                      fontSize: "3.5vh",
                      color: "#d69929",
                      fontFamily: "JameelNoori",
                    }
                  : { fontSize: "3.5vh", color: "#d69929" }
              }
            >
              {t("pss2")}
            </span>{" "}
          </span>
        </h1>
        {/* <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            {data == "ps" ? "د " : null}
            {data == "ur" ? t("hpp2") : data == "ps" ? t("hp2") : t("hp1")}{" "}
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {data == "ur" || data == "ps" ? t("hp1") : t("hp2")}
            </span>{" "}
          </span>
        </h1> */}

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
        <Card />
        <Peshawarcard />
      </div>
    </>
  );
};

export default Peshawar;
