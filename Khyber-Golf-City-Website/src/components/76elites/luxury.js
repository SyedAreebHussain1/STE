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
import LuxuryCard from "./luxurycard";
import lx3 from "../images/lx3.jpg";
import lxf13 from "../../assets/luxryimages/1 (1).jpg";
import lxf1 from "../../assets/luxryimages/1 (2).jpg";
import lxf6 from "../../assets/luxryimages/1 (3).jpg";
import lxf10 from "../../assets/luxryimages/1 (4).jpg";
import lxf14 from "../../assets/luxryimages/1 (5).jpg";
import lxf12 from "../../assets/luxryimages/1 (6).jpg";
import lxf7 from "../../assets/luxryimages/1 (7).jpg";
import lxf8 from "../../assets/luxryimages/1 (8).jpg";
import lxf15 from "../../assets/luxryimages/1 (9).jpg";
import lxf16 from "../../assets/luxryimages/1 (16).jpg";
import lxf5 from "../../assets/luxryimages/1 (10).jpg";
import lxf4 from "../../assets/luxryimages/1 (11).jpg";
import lxf9 from "../../assets/luxryimages/1 (12).jpg";
import lxf2 from "../../assets/luxryimages/1 (13).jpg";
import lxf3 from "../../assets/luxryimages/1 (14).jpg";
import lxf11 from "../../assets/luxryimages/1 (15).jpg";
import NavbarV2 from "../navbar/NavbarV2";




// 
import lxicon1 from "../../assets/luxryicons/icon-01.png"
import lxicon2 from "../../assets/luxryicons/icon-02.png"
import lxicon3 from "../../assets/luxryicons/icon-03.png"
import lxicon4 from "../../assets/luxryicons/icon-04.png"
import lxicon5 from "../../assets/luxryicons/icon-05.png"
import lxicon6 from "../../assets/luxryicons/icon-06.png"
import lxicon7 from "../../assets/luxryicons/icon-07.png"
import lxicon8 from "../../assets/luxryicons/icon-08.png"
import lxicon9 from "../../assets/luxryicons/icon-09.png"
import lxicon10 from "../../assets/luxryicons/icon-10.png"
import lxicon11 from "../../assets/luxryicons/icon-11.png"
import lxicon12 from "../../assets/luxryicons/icon-12.png"
import lxicon13 from "../../assets/luxryicons/icon-13.png"
import lxicon14 from "../../assets/luxryicons/icon-14.png"
import lxicon15 from "../../assets/luxryicons/icon-15.png"
import lxicon16 from "../../assets/luxryicons/icon-16.png"
// 


const Luxury = (props) => {
  const [title, setTitle] = useState("Khyber Golf City");
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  // const data = "en";
  useEffect(() => {
    window.fbq("track", "AboutClicked");
    AOS.init({
      duration: 1000,
    });
  }, []);


  useEffect(() => {
    if (props.location.pathname == "/76elites") {
      setTitle("76 Elites | Khyber Golf City")
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
        <OtherHeader
          // mystyle={data == "en" ? {} : { direction: "rtl" }}
          // name1="76 Elites Luxury"
          // name2="Resorts"
          name1={t("lux1")}
          name2={t("lux2")}
          // name1={data == "ur" || data == "ps" ? t("lux2") : t("lux1")}
          // name2={data == "ur" || data == "ps" ? t("lux1") : t("lux2")}
        />
      </header> */}
      <NavbarV2 />
      {/* <Navbar sticky="*" /> */}
      <OtherHeader
        // mystyle={data == "en" ? {} : { direction: "rtl" }}
        // name1="76 Elites Luxury"
        // name2="Resorts"
        name1={t("lux1")}
        name2={t("lux2")}
        // name1={data == "ur" || data == "ps" ? t("lux2") : t("lux1")}
        // name2={data == "ur" || data == "ps" ? t("lux1") : t("lux2")}
        breadcumb1="Home"
        breadcumb2=">"
        breadcumb3="Luxury Resorts"
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
              direction: "rtl",
            }
        }
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            {t("lux1")}{" "}
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {t("lux2")}
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
        <LuxuryCard />
      </div>
      {/* second section */}

      {/* <div
        data-aos="fade-up"
        style={
          data == "en"
            ? { marginLeft: "5%", marginRight: "5%", margin: "3%" }
            : {
              marginLeft: "5%",
              marginRight: "5%",
              margin: "3%",
              fontFamily: "JameelNoori",
              direction: "rtl",
            }
        }
      > */}
      {/* <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            {t("lux6")}{" "}
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {t("lux7")}
            </span>{" "}
          </span>
        </h1> */}
      {/* hr */}
      {/* <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div> */}

      {/* CARD */}
      {/* <div style={{ marginTop: "3%" }} className="luxury-main-div-ps">
          <div className="luxury-blog-card-ps">
            <div className="luxury-meta-ps">
              <div
                className="luxury-photo-ps"
                style={{
                  backgroundImage: "url(" + lx3 + ")",
                  width: "100%",
                  //   objectFit: "inherit",
                }}
              // style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"
              ></div>
            </div>
            <div className="luxury-description-ps">
              <p
                className={
                  data == "en" ? `luxury-p-desc-en` : `luxury-p-desc-ur`
                }
                style={data == "en" ? {} : { fontFamily: "JameelNoori" }}
              >
                {t("lux5")}{" "}
                {data == "ps" ? (
                  <>
                    <br /> <br />
                  </>
                ) : null}
              </p>
              <p className="luxury-read-more-ps">
                <a href="#"></a>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* third section */}
      <div
        // data-aos="fade-up"
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
            {/* {t("lux6")}{" "} */}
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {t("lux8")}
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

        <div
          data-aos="fade-up"
          style={{ marginTop: "2%", marginLeft: "0%" }}
          className="pesharwarow"
        >
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                {/* <img src={lxf1} alt="Snow" width="100%" /> */}
                <img src={lxicon1} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf1")} */}
                  <div className="e-card-head">PRIVATE AC ROOMS</div>
                  <div>Have your vehicles parked safely</div>
                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                {/* <img src={lxf2} alt="Snow" width="100%" /> */}
                <img src={lxicon2} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf2")} */}
                  <div className="e-card-head">SWIMMING POOL</div>
                  <div>Dive in and swim away your stress</div>
                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn">
            <div className="e-card" >
              <div className="e-card-image e-card-icon" >
                {/* <img src={lxf3} alt="Snow" width="100%" /> */}
                <img src={lxicon3} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf3")} */}
                  <div className="e-card-head">WATERSLIDES</div>
                  <div>Slide all the way into the swimming pool</div>
                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                <img src={lxicon4} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf4")} */}
                  <div className="e-card-head">SUNBEDS</div>
                  <div>Ease off while soaking up the sunshine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          style={{ marginTop: "2%", marginLeft: "0%" }}
          className="pesharwarow"
        >
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                {/* <img src={lxf5} alt="Snow" width="100%" /> */}
                <img src={lxicon5} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                        direction: "rtl",
                      }
                  }
                >
                  {/* {t("lxf5")} */}
                  <div className="e-card-head">OUTDOOR LOUNGE & DINING</div>
                  <div>Luxury spaces provide a blend of natural areas</div>
                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                {/* <img src={lxf6} alt="Snow" width="100%" /> */}
                <img src={lxicon6} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf6")} */}
                  <div className="e-card-head">BARBEQUE SPACES</div>
                  <div>Throw a barbecue party and invite your guests</div>
                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                <img src={lxicon7} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf7")} */}
                  <div className="e-card-head">INDOOR GAMES</div>
                  <div>A safe, secure yet challenging space for children</div>
                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                <img src={lxicon8} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf8")} */}
                  <div className="e-card-head">PLAYGROUNDS</div>
                  <div>Playspaces should be accessible to everyone</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          style={{ marginTop: "2%", marginLeft: "0%" }}
          className="pesharwarow"
        >
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                {/* <img src={lxf9} alt="Snow" width="100%" /> */}
                <img src={lxicon9} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf9")} */}
                  <div className="e-card-head">SHOPS & CAFES</div>
                  <div>Excellent service, ambience, and high-quality products</div>
                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                {/* <img src={lxf10} alt="Snow" width="100%" /> */}
                <img src={lxicon10} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf10")} */}
                  <div className="e-card-head">CAR PARKING</div>
                  <div>Have your vehicles parked safely</div>
                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                {/* <img src={lxf11} alt="Snow" width="100%" /> */}
                <img src={lxicon11} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf11")} */}
                  <div className="e-card-head">WHEEL CHAIR</div>
                  <div>To make it easier for disabled people</div>
                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                {/* <img src={lxf12} alt="Snow" width="100%" /> */}
                <img src={lxicon12} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf12")} */}
                  <div className="e-card-head">FREE WIFI</div>
                  <div>Everyone will have access to the free internet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          style={{ marginTop: "2%", marginLeft: "0%" }}
          className="pesharwarow"
        >
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                {/* <img src={lxf13} alt="Snow" width="100%" /> */}
                <img src={lxicon13} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                        direction: "rtl",
                      }
                  }
                >
                  {/* {t("lxf13")} */}
                  <div className="e-card-head">24/7 SECURITY</div>
                  <div>To ensure the well-being of you and your family</div>
                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                {/* <img src={lxf14} alt="Snow" width="100%" /> */}
                <img src={lxicon14} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf14")} */}
                  <div className="e-card-head">HOUSEKEEPING</div>
                  <div>To ensure a safe and maintained environment</div>
                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                {/* <img src={lxf16} alt="Snow" width="100%" /> */}
                <img src={lxicon15} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf16")} */}
                  <div className="e-card-head">FIRST AID FACILITY</div>
                  <div>Emergency situations will be handled with care</div>
                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn">
            <div className="e-card">
              <div className="e-card-image e-card-icon">
                {/* <img src={lxf15} alt="Snow" width="100%" /> */}
                <img src={lxicon16} alt="Snow" width="" />
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf15")} */}
                  <div className="e-card-head">MOSQUE</div>
                  <div>Pray together and strengthen your relationships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Luxury;
