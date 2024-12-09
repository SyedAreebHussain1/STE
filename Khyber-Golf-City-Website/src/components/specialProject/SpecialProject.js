import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import OtherHeader from "../OtherHeader/OtherHeader";
import { AiFillInfoCircle } from "react-icons/ai";
import rf from "../images/rf.jpg";
import swp from "../images/spf.jpg";
import ri from "../images/ri.jpg";
import ra from "../images/ra.jpg";
import AOS from "aos";
import wg from "../images/wg.jpg";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import NavbarV2 from "../navbar/NavbarV2";
const SpecialProject = (props) => {
  const [title, setTitle] = useState("Khyber Golf City");
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  useEffect(() => {
    window.fbq("track", "Special-Projects-Page");
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    if (props.location.pathname == "/special-projects") {
      setTitle("Special Projects | Khyber Golf City")
    } else {
      setTitle("Khyber Golf City | Modern Lifestyle Housing Project")
    }
  }, []);
  useEffect(() => {
    document.title = title;
  }, [title]);



  return (
    <>
      {/* <header className="header-other-bg">
        <Navbar />
        <OtherHeader name1={t("sp1")} name2={t("sp2")} />
      </header> */}
      {/* <Navbar sticky="*" /> */}
      <NavbarV2 />
      <OtherHeader
        name1={t("sp1")}
        name2={t("sp2")}
        breadcumb1="Home"
        breadcumb2=">"
        breadcumb3="Special Projects"
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
            {t("sp3")}{" "}
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {t("sp4")}
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
        <div style={{ marginTop: "2%" }} className="pesharwarow">
          <div className="aboutacolumn">
            <img
              src={swp}
              alt="Forest"
              width="100%"
              // height="375px"
              style={{ borderRadius: 5 }}
            />
          </div>
          <div className="aboutacolumn">
            <p
              style={
                data == "en"
                  ? {
                    textAlign: "left",
                    marginLeft: "1%",
                    marginRight: "1%",
                    // marginTop: "2%",
                    fontWeight: "400",
                  }
                  : {
                    textAlign: "right",
                    marginLeft: "1%",
                    marginRight: "1%",
                    // marginTop: "2%",
                    fontSize: 20,
                  }
              }
              className="u-text-small"
            >
              {t("sp5")}
              <br />
              {data == "en" ? (
                <>
                  {t("spp5")} <br />
                </>
              ) : null}
              <ul style={{ listStyleType: 'none' }}>
                <li>{t("sp11")}</li>
                {/* <br /> */}
                <li>{t("sp12")}</li>
                {/* <br /> */}
                <li>{t("sp13")}</li>
                {/* <br /> */}
                <li>{t("sp14")}</li>
                {/* <br /> */}
                <li>{t("sp10")}</li>
                {/* <br /> */}
                <li>{t("sp7")}</li>
                {/* <br /> */}
                <li>{t("sp9")}</li>
                {/* <br /> */}
                <li>{t("sp15")}</li>
                {/* <br /> */}
                <li>{t("sp6")}</li>
                {/* <br /> */}
                <li>{t("sp8")}</li>
                {/* <br /> */}
              </ul>
            </p>
          </div>
        </div>

        <div style={{ marginTop: "2%" }} className="pesharwarow">
          <div className="aboutacolumn">
            <div
              data-aos="fade-up"
              style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
            >
              <h1 style={{ textAlign: "center", marginTop: "2%" }}>
                <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
                  {t("sp16")}{" "}
                  <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
                    {t("sp17")}
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
                {t("sp18")}
                {/* {t("")} */}
              </p>
              {/* <br />
              <br /> */}
              <div style={{ marginTop: "2%" }} className="pesharwarow">
                <div>
                  <img
                    src={ri}
                    alt="Snow"
                    width="100%"
                    // height="355px"
                    style={{ borderRadius: 5 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="aboutacolumn">
            <div
              data-aos="fade-up"
              style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
            >
              <h1 style={{ textAlign: "center", marginTop: "2%" }}>
                <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
                  {t("sp19")}{" "}
                  <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
                    {t("sp20")}
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
                {/* {t("sp21")}{" "} */}
                {t("sp21")}{""}
                {data == "en" ? (
                  <span
                    style={{
                      color: "transparent",
                      cursor: "context-menu",
                      userSelect: "none",
                    }}
                  >
                    testing
                  </span>
                ) : null}
              </p>
              <div style={{ marginTop: "2%" }} className="pesharwarow">
                <div>
                  <img
                    src={rf}
                    alt="Snow"
                    width="100%"
                    style={{ borderRadius: 5 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "2%" }} className="pesharwarow">
          <div className="aboutacolumn">
            <div
              data-aos="fade-up"
              style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
            >
              <h1 style={{ textAlign: "center", marginTop: "2%" }}>
                <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
                  {t("sp22")}{" "}
                  <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
                    {t("sp23")}
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
                {t("sp24u")}
                {/* <br/> */}
                {t("sp24")}
              </p>
              <div style={{ marginTop: "2%" }} className="pesharwarow">
                <div>
                  <img
                    src={ra}
                    alt="Snow"
                    width="100%"
                    style={{ borderRadius: 5 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="aboutacolumn">
            <div
              data-aos="fade-up"
              style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
            >
              <h1 style={{ textAlign: "center", marginTop: "2%" }}>
                <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
                  {t("sp25")}{" "}
                  <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
                    {t("sp26")}
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
                {t("sp27")}
              </p>
              <div style={{ marginTop: "2%" }} className="pesharwarow">
                <div>
                  <img
                    src={wg}
                    alt="Snow"
                    width="100%"
                    style={{ borderRadius: 5 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          style={{
            marginTop: "2%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img
              src={swp}
              alt="Snow"
              width="100%"
              height="100%"
              style={{ borderRadius: 5 }}
            />
          </div>
          <div style={{ width: "130%" }}>
            <p
              style={
                data == "en"
                  ? {
                      textAlign: "left",
                      marginLeft: "1%",
                      marginRight: "1%",
                      // marginTop: "2%",
                      fontWeight: "400",
                    }
                  : {
                      textAlign: "right",
                      marginLeft: "1%",
                      marginRight: "1%",
                      // marginTop: "2%",
                      fontSize: 20,
                    }
              }
              className="u-text-small"
            >
              {t("sp5")}
              <br /> <br />
              {t("sp6")}
              <br />
              {t("sp7")}
              <br />
              {t("sp8")}
              <br />
              {t("sp9")}
              <br />
              {t("sp10")}
              <br />
              {t("sp11")}
              <br />
              {t("sp12")}
              <br />
              {t("sp13")}
              <br />
              {t("sp14")}
              <br />
              {t("sp15")}
              <br />
            </p>
          </div>
        </div> */}
        {/* <p
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
          {t("sp5")}
          <br /> <br />
          {t("sp6")}
          <br />
          {t("sp7")}
          <br />
          {t("sp8")}
          <br />
          {t("sp9")}
          <br />
          {t("sp10")}
          <br />
          {t("sp11")}
          <br />
          {t("sp12")}
          <br />
          {t("sp13")}
          <br />
          {t("sp14")}
          <br />
          {t("sp15")}
          <br />
        </p>

        <div style={{ marginTop: "2%" }} className="pesharwarow">
          <div>
            <img
              src={swp}
              alt="Snow"
              width="100%"
              style={{ borderRadius: 5 }}
            />
          </div>
        </div> */}
      </div>
      {/* FIRST SECTIOIN */}
      {/* Riverine Island Resort */}

      {/* second SECTIOIN */}
      {/* River Front Theme Park */}

      {/* third SECTIOIN */}
      {/* Riverside Apartment Enclave */}

      {/* 4th SECTIOIN */}
      {/* Waterfront Golf Course */}
    </>
  );
};
export default SpecialProject;
