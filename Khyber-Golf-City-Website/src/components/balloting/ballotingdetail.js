import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import OtherHeader from "../OtherHeader/OtherHeader";
import { AiFillInfoCircle } from "react-icons/ai";
import img1 from "../images/kgc1.jpg";
import img2 from "../images/Kgc2.jpg";
import img3 from "../images/Kgc3.png";
import AOS from "aos";
import img7 from "../images/kgclayout.jpg";
import img8 from "../images/1280-gate.jpg";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Question from "../faq/Question";
import NavbarV2 from "../navbar/NavbarV2";
const BallotinDetail = () => {
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, []);
  return (
    <>
      {/* <header className="header-other-bg">
        <Navbar />
        <OtherHeader name1={t("balloting7")} name2={t("balloting8")} />
      </header> */}
      {/* <Navbar sticky="*" /> */}
      <NavbarV2 />
      <OtherHeader
        name1={t("balloting7")}
        name2={t("balloting8")}
        breadcumb1="Home"
        breadcumb2=">"
        breadcumb3="Balloting Process"
      />
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
            {t("balloting7")}{" "}
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {t("balloting8")}
            </span>{" "}
          </span>
        </h1>
        {/* hr */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%", marginTop: "0.3%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* hr */}

        <Question />
      </div>
    </>
  );
};
export default BallotinDetail;
