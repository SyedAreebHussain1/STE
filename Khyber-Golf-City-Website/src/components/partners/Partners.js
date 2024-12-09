import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import img1 from "../images/bnkubl.png";
import img2 from "../images/bnkislami.png";
import img3 from "../images/bnkdubai.png";
import img5 from "../images/bnkblinq.png";
import img6 from "../images/promag.png";
import img7 from "../images/khan.png";
import img8 from "../images/jazz.png";
import img9 from "../images/hbl.png"
import img10 from "../images/mcb.png"

import sfex from "../images/sf (1).png";
import sfex1 from "../images/sf (2).png";
import sfex2 from "../images/sf (3).png";
import sfexur from "../images/urdu1.png";
import sfex1ur from "../images/urdu2.png";
import sfex2ur from "../images/urdu3.png";
import "./Partners.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
export const Partners = () => {
  const data = useSelector((state) => state.language.lang);
  const { i18n, t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 5 },
  };
  const items = [
    <img
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.open("https://www.ubldigital.com/", "_blank");
      }}
      width="100%"
      src={img1}
    />,

    <img
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.open("https://www.dibpak.com/", "_blank");
      }}
      width="100%"
      src={img3}
    />,
    <img
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.open("https://blinq.pk/", "_blank");
      }}
      width="100%"
      src={img5}
    />,
    // <img
    //   style={{ cursor: "pointer" }}
    //   onClick={() => {
    //     window.open("https://promag.co/", "_blank");
    //   }}
    //   width="100%"
    //   src={img6}
    // />,

    // <img  src={img7} />,
    <img
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.open("https://bankislami.com.pk/", "_blank");
      }}
      width="100%"
      src={img2}
    />,
    <img
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.open("https://jazz.com.pk/", "_blank");
      }}
      width="100%"
      src={img8}
    />,
    // <img
    //   style={{ cursor: "pointer" }}
    //   onClick={() => {
    //     window.open("https://www.khansaheb.ae/", "_blank");
    //   }}
    //   width="100%"
    //   src={img7}
    // />,
    <img
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.open("https://www.bankalhabib.com/", "_blank");
      }}
      width="100%"
      src={img9}
    />,
    <img
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.open("https://www.mcb.com.pk/", "_blank");
      }}
      width="100%"
      src={img10}
    />,
  ];
  return (
    <div
      style={data == "en" ? {} : { fontFamily: "JameelNoori" }}
      data-aos="fade-up"
      className="Main-cont"
    >
      <h1 style={{ textAlign: "center", marginTop: "2.5%" }}>
        <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
          {/* {t("mb1")}{" "} */}
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
            {t("mb2")}
          </span>{" "}
        </span>
      </h1>
      {/* <hr
        style={{
          maxWidth: "100%",
          // marginLeft: "12%",
          // marginRight: "12%",
          marginTop: "2%",
          color: "black",
          backgroundColor: "black",
          // height: 10,
        }}
      /> */}
      <div
        style={{
          display: "flex",
          marginTop: "1%",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ cursor: "pointer", marginTop: "1.5%" }}
          onClick={() => {
            window.open("https://www.khansaheb.ae/en/", "_blank");
          }}
          width="28%"
          height="28%"
          src={data == "en" ? sfex : sfex1ur}
        // style={{ marginTop: "1.5%" }}
        />
        <img
          style={{ cursor: "pointer", marginTop: "1.5%" }}
          onClick={() => {
            window.open("https://promag.co/", "_blank");
          }}
          width="28%"
          height="28%"
          src={data == "en" ? sfex1 : sfex2ur}
        // style={{ marginTop: "1.5%" }}
        />
        <img
          style={{ cursor: "pointer", marginTop: "1.5%" }}
          onClick={() => {
            window.open("https://squarefootexchange.com/", "_blank");
          }}
          width="28%"
          height="28%"
          src={data == "en" ? sfex2 : sfexur}
        // style={{ marginTop: "1.5%" }}
        />
      </div>
      <h1 style={{ textAlign: "center", marginTop: "3%" }}>
        <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
          {t("op1")}{" "}
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
            {t("op2")}
          </span>{" "}
        </span>
      </h1>
      <div
        className="carous"
      // style={{
      //   // backgroundColor:'red',
      //   marginLeft: "12%",
      //   marginRight: "12%",
      //   // marginTop: 27,
      //   margin:'1%',
      //   marginBottom: "2.5%",
      // }}
      >
        <AliceCarousel
          // style={{margin:20}}
          animationDuration={1000}
          items={items}
          responsive={responsive}
          autoPlay={true}
          infinite
          disableButtonsControls={true}
          // disableButtonsControls={true}
          disableDotsControls
        />
      </div>
    </div>
  );
};
