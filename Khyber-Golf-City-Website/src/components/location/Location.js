import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import OtherHeader from "../OtherHeader/OtherHeader";
import { AiFillInfoCircle } from "react-icons/ai";
import Button from "../UI/Button/Button";
import AOS from "aos";
import lc from "../images/locat.png";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Googlemap from "./googlemap";
import { useLocation } from "react-router-dom";
import NavbarV2 from "../navbar/NavbarV2";
// import Googlemap from "./googlemap";
const ProjectLocation = (props) => {
  const [title, setTitle] = useState("Khyber Golf City");

  const { i18n, t } = useTranslation();
  let location = useLocation();
  console.log("LOCATION DATA IN HASH ROUTING", location.state);
  const data = useSelector((state) => state.language.lang);
  useEffect(() => {
    window.fbq("track", "Project-Location-Page");
    AOS.init({
      duration: 1000,
    });
  }, []);
  // console.log(props)
  useEffect(() => {
    if (props.location.pathname == "/location") {
      setTitle("Project Location | Khyber Golf City")
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
        <OtherHeader name1={t("pl1")} name2={t("pl2")} />
      </header> */}
      {/* <Navbar sticky="*" /> */}
      <NavbarV2 />
      <OtherHeader
        name1={t("pl1")}
        name2={t("pl2")}
        breadcumb1="Home"
        breadcumb2=">"
        breadcumb3="Project Location"
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
            {t("pl3")}{" "}
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {t("pl4")}
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

        {/* 
        <div style={{ marginTop: "2%" }} className="pesharwarow">
          <div>
          
          </div>
        </div> */}
        {/*  */}


        {/* areeb */}
        <div className="">
          <Googlemap />
        </div>
        <div style={{ marginTop: "2%" }} className="pesharwarow">
          <div className="">
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
              {t("pl5")}
              {/* {t("pl5u")} */}
            </p>
          </div>
        </div>
        {/* areeb end*/}


        {/* <div style={{ marginTop: "2%" }} className="pesharwarow"> */}
        {/* <div className="aboutacolumn">
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
              {t("pl5")}
            </p>
          </div> */}
        {/* <div className="aboutacolumn"> */}
        {/* <Googlemap /> */}

        {/* <Googlemap /> */}
        {/* <img src={lc} alt="Snow" width="100%" style={{ borderRadius: 5 }} /> */}

        {/* </div> */}
        {/* </div> */}

        <div
          onClick={() => {
            window.fbq("track", "Location-Button");
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: "3%",
          }}
        >
          <Button
            text={t("pl6")}
            btnClass={"btn-light"}
            href={
              "https://www.google.com/maps/place/Khyber+Golf+City/@34.1077012,71.750751,15z/data=!4[…]s0x0:0xcf1bcdc4cf980d4d!8m2!3d34.1077012!4d71.750751?hl=en-GB"
            }
          />
        </div>
      </div>
    </>
  );
};
export default ProjectLocation;
