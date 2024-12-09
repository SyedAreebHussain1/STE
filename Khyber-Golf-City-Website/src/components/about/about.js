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
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import NavbarV2 from "../navbar/NavbarV2";
const About = (props) => {
  const { i18n, t } = useTranslation();
  const [title, setTitle] = useState("Khyber Golf City");
  const data = useSelector((state) => state.language.lang);
  const { pathname } = useLocation();
  useEffect(() => {
    // console.log("path name at about", pathname);
    window.fbq("track", "AboutClicked");
    AOS.init({
      duration: 1000,
    });
  }, []);


  useEffect(() => {
    if (props.location.pathname == "/about") {
      setTitle("About | Khyber Golf City")
    } else {
      setTitle("Khyber Golf City ")
    }
  }, []);
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      {/* <header className="header-other-bg">
        <Navbar />
        <OtherHeader
          name1={data == "ur" || data == "ps" ? t("about2") : t("about1")}
          name2={data == "ur" || data == "ps" ? t("about1") : t("about2")}
          breadcumb="Home/About"
        />
      </header> */}
      <NavbarV2 />
      {/* <Navbar sticky="*" /> */}
      <OtherHeader
        name1={data == "ur" || data == "ps" ? t("about2") : t("about1")}
        name2={data == "ur" || data == "ps" ? t("about1") : t("about2")}
        breadcumb1="Home"
        breadcumb2=">"
        breadcumb3="About"
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
            {t("about3")}{" "}
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {t("about4")}
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
          {t("about5")}
          {/* {"f"} */}
        </p>
        <div style={{ marginTop: "2%" }} className="pesharwarow">
          <div className="pesharwarcolumn">
            <img
              src={img1}
              alt="Snow"
              width="100%"
              style={{ borderRadius: 5 }}
            />
          </div>
          <div className="pesharwarcolumn">
            <img
              src={img2}
              alt="Forest"
              width="100%"
              style={{ borderRadius: 5 }}
            />
          </div>
          <div className="pesharwarcolumn">
            <img
              src={img3}
              alt="Mountains"
              width="100%"
              style={{ borderRadius: 5 }}
            />
          </div>
        </div>
      </div>
      {/* section 2 */}

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
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
            {data == "ur" || data == "ps" ? t("about7") : t("about6")}{" "}
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {data == "ur" || data == "ps" ? t("about6") : t("about7")}
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
        {/* <div
          style={{
            marginTop: "2%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "180%" }}>
            <p
              style={
                data == "en"
                  ? {
                      textAlign: "justify",
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
              {t("about8")}
            </p>
          </div>
          <div>
            <img
              src={img7}
              alt="Snow"
              width="100%"
              style={{ borderRadius: 5 }}
            />
          </div>
        </div> */}
        <div>
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
            {t("about8")}
            {/* <br/>
            {t("about9")}
            <br/>
            {t("about10")} */}

          </p>
          <div style={{ marginTop: "2%" }} className="pesharwarow">
            <div className="aboutacolumn">
              <img
                src={img7}
                alt="Snow"
                width="100%"
                style={{ borderRadius: 5 }}
              />
            </div>
            <div className="aboutacolumn">
              <img
                src={img8}
                alt="Forest"
                width="100%"
                style={{ borderRadius: 5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
