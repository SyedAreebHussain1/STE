import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import OtherHeader from "../OtherHeader/OtherHeader";
import { AiFillInfoCircle, AiOutlinePhone } from "react-icons/ai";
import img1 from "../images/kgc1.jpg";
import img2 from "../images/Kgc2.jpg";
import img3 from "../images/Kgc3.png";
import AOS from "aos";
import img7 from "../images/kgclayout.jpg";
import "aos/dist/aos.css";
import { IoLocationSharp, IoLogoFacebook, IoLocationOutline, } from "react-icons/io5";
// import { AiOutlineClockCircle,AiFillClockCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import "./helper.css";
// import {
//   IoLocationOutline,
//   IoLocationSharp,
//   IoLocation,
// } from "react-icons/io5";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillClockCircle,
  AiOutlineClockCircle,
  AiFillLock,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillPhone,
} from "react-icons/ai";
import swal from "sweetalert";
import axios from "axios";
import NavbarV2 from "../navbar/NavbarV2";

import karachi from "../../assets/city/3-01.png"
import islamabad from "../../assets/city/3-03.png"
import peshawar from "../../assets/city/3-02.png"


const BASEURL = "https://backend.khybergolfcity.com/";
const apiPath = "web-contact-form";
const Feedback = (props) => {
  const [title, setTitle] = useState("Khyber Golf City");
  const { i18n, t } = useTranslation();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const data = useSelector((state) => state.language.lang);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    if (props.location.pathname == "/contact") {
      setTitle("Contact | Khyber Golf City")
    } else {
      setTitle("Khyber Golf City | Modern Lifestyle Housing Project")
    }
  }, []);
  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleSubmit = () => {
    console.log("Handle submit");
    setLoading(true);
    const body = {
      name,
      email,
      subject,
      message: msg,
    };
    axios
      .post(`${BASEURL}${apiPath}`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("RESDARA", res.data);
        if (res.data) {
          window.fbq("track", "QueryForm");
          setLoading(false);
          setName("");
          setEmail("");
          setSubject("");
          setMsg("");
          swal({
            title: "Congratulations!",
            text: "Your query has been submitted",
            icon: "success",
            // buttons : true,
          }).then((isOk) => {
            console.log("Success");
          });
        }
      })
      .catch(function (error) {
        if (error.response) {
          setLoading(false);
          swal("Sorry!", `${error.response.data.message}`, "error");
          console.log(error.response.data);
        } else {
          setLoading(false);
          swal("Sorry!", `${error}`, "error");
        }
      });
  };
  return (
    <>
      {/* <header className="header-other-bg">
        <Navbar />
        <OtherHeader name1={t("contact1")} name2={t("contact2")} />
      </header> */}
      {/* <Navbar sticky="*" /> */}
      <NavbarV2 />
      <OtherHeader
        name1={t("contact1")}
        name2={t("contact2")}
        breadcumb1="Home"
        breadcumb2=">"
        breadcumb3="Contact"
      />


      {/* areeb */}
      <h1 style={{ textAlign: "center", marginTop: "2%" }}>
        <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
          {/* {t("lux1")}{" "} */} {t("ourOffice")}
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
            {" "}
            {/* {t("lux2")} */}
            {t("location")}
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
        // data-aos="fade-up"
        style={
          data == "en"
            ? { marginLeft: "2%", marginRight: "2%", margin: "3% " }
            : {
              marginLeft: "5%",
              marginRight: "5%",
              margin: "3%",
              fontFamily: "JameelNoori",
            }
        }
      >

        <div
          data-aos="fade-up"
          style={{ marginTop: "2%", marginLeft: "0%", height: "auto" }}
          className="pesharwarow1"
        >

          <div className="luxurycolumn1 " style={{}} >
            <div className="e-card" >
              <div className="e-card-image e-card-icon" style={{ height: "500px" }}>
                {/* <img src={lxf14} alt="Snow" width="100%" /> */}
                <img src={karachi} alt="Snow" width="" />
                {/* <div><IoLocationOutline size={100} style={{ margin: 2, color: "#d69929" }} /></div> */}
                <div className="e-card-head" style={{ fontSize: "2.6rem" }}>{t('karachi')}</div>
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "left",
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "start",
                        textAlign: "left",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf14")} */}
                  <div style={{ padding: "30px", cursor: "pointer", display: "flex" }}> <div><IoLocationOutline size={17} style={{ margin: '', color: "#d69929" }} /> </div> <a className="ah " style={{ color: "" }}
                    onClick={() => {
                      window.open(
                        "https://www.google.com/maps/search/Miran+Mohammed+Shah+Road,+Muhammad+Ali+Chs+(Machs),+Karachi/@24.8757442,67.0895136,19.67z"
                      );
                    }}
                  >
                    {" "}
                    <span style={{cursor:"pointer"}}>
                      {/* Karachi Office: B-6(A), Miran Mohammad Shah Road, MACHS, Karachi,
                      Pakistan. */}
                      {t("addressKarachi")}
                    </span>{" "}
                  </a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn1" style={{}} >
            <div className="e-card">
              <div className="e-card-image e-card-icon" style={{ height: "500px" }}>
                {/* <img src={lxf14} alt="Snow" width="100%" /> */}
                <img src={islamabad} alt="islamabad" width="" />
                {/* <div><IoLocationOutline size={100} style={{ margin: 2, color: "#d69929" }} /></div> */}
                <div className="e-card-head" style={{ fontSize: "2.6rem" }}>{t('islamabad')}</div>
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "left",
                        padding: "30px",
                        cursor: "pointer"
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "left",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf14")} */}

                  <div style={{ marginTop: "15px", display: "flex" }}> <div><IoLocationOutline size={17} style={{ margin: '', color: "#d69929" }} /> </div>
                    <a style={{ color: "" }} className="ah "
                      onClick={() => {
                        window.open(
                          "https://www.google.com/maps?q=33.7048803,73.0420282&hl=en-PK&gl=pk&entry=gps&coh=166245&lucs=47057720&g_ep=CAISBjYuNTMuMxgAIIgnKgg0NzA1NzcyMEICUEs%3D&g_st=iw"
                        );
                      }}
                    >
                      {" "}
                      <span style={{cursor:"pointer"}}>
                        {/* KGC House #32, F8-1, Nazimuddin Road, Near Centaurus Mall, Islamabad */}
                        {/* KGC House #32, F8-1, Nazimuddin Road, Near Centaurus Mall, Islamabad */}
                        {t("addressIslamabad1")}
                      </span>{" "}
                    </a>
                  </div>

                  <div style={{ display: "flex" }}> <div><IoLocationOutline size={17} style={{ margin: '', color: "#d69929" }} /> </div><a style={{ color: "" }} className="ah "
                    onClick={() => {
                      window.open(
                        "https://www.google.com/maps?q=33.5972542,73.0484893&hl=en-PK&gl=pk&entry=gps&lucs=s2se,a2&shorturl=1"
                      );
                    }}
                  >
                    {" "}
                    <span style={{cursor:"pointer"}}>
                      {/* ISLAMABAD/RAWALPINDI OFFICE: 33 Haider Road, Saddar, Behind AWT Plaza, Rawalpindi, Pakistan. */}
                      {/* 33 Haider Road, Saddar, Behind AWT Plaza, Rawalpindi, Pakistan. */}
                      {/* Rawalpindi Office: House #33 Haider Road, Saddar, Behind AWT Plaza, Rawalpindi, Pakistan. */}
                      {t("addressIslamabad2")}

                    </span>{" "}
                  </a></div>


                </div>
              </div>
            </div>
          </div>
          <div className="luxurycolumn1" style={{ height: "" }}>
            <div className="e-card">
              <div className="e-card-image e-card-icon" style={{ height: "500px" }}>
                {/* <img src={lxf16} alt="Snow" width="100%" /> */}
                <img src={peshawar} alt="peshawar" width="" />
                {/* <div><IoLocationOutline size={100} style={{ margin: 2, color: "#d69929" }} /></div> */}
                <div className="e-card-head" style={{ fontSize: "2.6rem" }}>{t('peshawar')}</div>
                <div
                  // className="e-card-title"
                  className="e-card-heightFix"
                  style={
                    data == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "left",
                        padding: "30px", cursor: "pointer"
                        // backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "left",
                        // backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {/* {t("lxf16")} */}
                  <div style={{ display: "flex" }}> <div><IoLocationOutline size={17} style={{ margin: '', color: "#d69929" }} /> </div>
                    <a style={{ color: "" }} className="ah "
                      onClick={() => {
                        window.open(
                          "https://www.google.com/maps/place/33%C2%B057'48.7%22N+71%C2%B026'30.7%22E/@33.9635248,71.4396698,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.9635248!4d71.4418585?hl=en-PK"
                        );
                      }}
                    >
                      {" "}
                      <span style={{cursor:"pointer"}}>
                        {/* House#22, Street #2, Phase 2 Hayatabad, opposite Tarangzai market, Peshawar */}
                        {/* KGC House Peshawar:House #22, Street #2, Phase 2 Hayatabad, opposite Tarangzai market, Peshawar. */}
                        {t("addressPeshawar3")}
                      </span>{" "}
                    </a>
                  </div>
                  {/* <div style={{ marginTop: "15px", display: "flex" }}> <div><IoLocationOutline size={17} style={{ margin: '', color: "#d69929" }} /> </div>
                    <a style={{ color: "" }}
                      className="ah "
                      onClick={() => {
                        window.open(
                          "https://www.google.com/maps/@33.9991294,71.4949217,17z/data=!3m1!4b1!4m2!11m1!2sh9joHhFEtTxqdYhwBUXufa1UmREkAQ"
                        );
                      }}
                    >
                      {" "}
                      <span style={{cursor:"pointer"}}>
                         {t("addressPeshawar2")}
                      </span>{" "}
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div
        data-aos="fade-up"
        style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
      >
        <div
          className="feedbackform"
          style={{
            display: "flex",
            marginLeft: "5%",
            marginRight: "5%",
            flexDirection: "row",
            justifyContent: "space-between",
            // flexWrap: "wrap",
          }}
        >
          <div className="say">
            {/* <span style={{ color: "#D69929", fontSize: "16px" }}>
              Contact Us
            </span> */}
            <h1 style={{ color: "#524552", fontSize: "26px" }}> {t("contact1")}
              {t("contact2")}</h1>
            <p className="u-text-small">
              {t("socialDrop")}
              {/* <span style={{ color: "white" }}>
                to hear from you at all times.
              </span> */}
            </p>

            <div style={{ marginTop: "2%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  //   flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    padding: "10px",
                    // width: "100%",
                    backgroundColor: "#D69929",
                    borderRadius: "70px",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      margin: "10px",
                      //   padding: "20px",
                      //   justifyContent: "center",
                      //   alignSelf: "center",
                    }}
                  >
                    <AiOutlinePhone color="white" size={25} />
                  </div>
                </div>
                <div style={{ marginLeft: "2%" }}>
                  <h2 style={{ color: "#524552", fontSize: "18px" }}>Phone</h2>
                  <a href="tel:+923041115427" style={{ color: "black" }} > <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "200",
                      lineHeight: 1.4,
                    }}
                  >
                    +92 304 1115427
                  </span></a>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "2%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  //   flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    padding: "10px",
                    // width: "100%",
                    backgroundColor: "#D69929",
                    borderRadius: "70px",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      margin: "10px",
                      //   padding: "20px",
                      //   justifyContent: "center",
                      //   alignSelf: "center",
                    }}
                  >
                    <AiOutlineMail color="white" size={25} />
                  </div>
                </div>
                <div style={{ marginLeft: "2%" }}>
                  <h2 style={{ color: "#524552", fontSize: "18px" }}>Email</h2>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "200",
                      lineHeight: 1.4,
                    }}
                  >
                    info@khybergolfcity.com
                  </span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "2%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  //   flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    padding: "10px",
                    // width: "100%",
                    backgroundColor: "#D69929",
                    borderRadius: "70px",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      margin: "10px",
                      //   padding: "20px",
                      //   justifyContent: "center",
                      //   alignSelf: "center",
                    }}
                  >
                    {/* <IoLocationSharp color="white" size={25} /> */}
                    <IoLogoFacebook color="white" size={25} style={{ margin: 2 }} />
                  </div>
                </div>
                <div style={{ marginLeft: "2%" }}>
                  {/* <h2 style={{ color: "#524552", fontSize: "18px",visibility:"hidden" }}>
                    Facebook
                  </h2> */}
                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.4,
                      fontWeight: "700"
                    }}
                  >
                    {/* B-6(A), Miran Mohammad Shah Road, MACHS, Karachi, Pakistan. */}
                    <h3 style={{ color: "#524552", fontSize: "", marginTop: "20%" }}>
                      Facebook
                    </h3>
                  </span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "2%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  //   flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    padding: "10px",
                    // width: "100%",
                    backgroundColor: "#D69929",
                    borderRadius: "70px",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      margin: "10px",
                      //   padding: "20px",
                      //   justifyContent: "center",
                      //   alignSelf: "center",
                    }}
                  >
                    <AiOutlineInstagram color="white" size={25} style={{ margin: 2 }} />
                  </div>
                </div>
                <div style={{ marginLeft: "2%" }}>
                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.4,
                      fontWeight: "700"
                    }}
                  >
                    {/* B-6(A), Miran Mohammad Shah Road, MACHS, Karachi, Pakistan. */}
                    <h3 style={{ color: "#524552", fontSize: "", marginTop: "20%" }}>
                      Instagram
                    </h3>
                  </span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "2%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  //   flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    padding: "10px",
                    // width: "100%",
                    backgroundColor: "#D69929",
                    borderRadius: "70px",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      margin: "10px",
                      //   padding: "20px",
                      //   justifyContent: "center",
                      //   alignSelf: "center",
                    }}
                  >
                    <AiFillLinkedin color="white" size={25} style={{ margin: 2 }} />
                  </div>
                </div>
                <div style={{ marginLeft: "2%" }}>
                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.4,
                      fontWeight: "700"
                    }}
                  >
                    {/* B-6(A), Miran Mohammad Shah Road, MACHS, Karachi, Pakistan. */}
                    <h3 style={{ color: "#524552", fontSize: "", marginTop: "25%" }}>
                      LinkedIn
                    </h3>
                  </span>
                  {/* <h2 style={{ color: "#524552", fontSize: "18px" }}>
                    Visiting Hours
                  </h2>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "200",
                      lineHeight: 1.4,
                    }}
                  >
                    MON - SAT 09 AM to 05 PM
                  </span> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <span style={{ color: "#D69929", fontSize: "16px" }}>
              Have a Query?
            </span> */}
            <h1 style={{ color: "#524552", fontSize: "26px" }}>
              {t("sendMessage")}
            </h1>
            <p className="u-text-small">
              {t("bussiness")}
            </p>
            <div>
              <div
                // className="feedbackform"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                  justifyContent: "space-between",
                  // border:"2px solid green"
                }}
              >
                <input
                  rows="2"
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  value={name}
                  style={{ resize: "none" }}
                  onChange={(e) => {
                    let val = e.target.value;
                    val = val.replace(/[^A-Za-z ]/gi, "");
                    setName(val);
                  }}
                  autoComplete="off"
                  //   onBlur={handleBlur}
                  className="text-input"
                />
                <input
                  rows="2"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  style={{ marginLeft: "1%", resize: "none" }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  //   onBlur={handleBlur}
                  className="text-input"
                  autoComplete="off"
                />
              </div>
              <input
                rows="2"
                id="subject"
                placeholder="Subject"
                type="text"
                value={subject}
                style={{ marginTop: "2%", resize: "none" }}
                onChange={(e) => {
                  let val = e.target.value;
                  val = val.replace(/[^A-Za-z ]/gi, "");
                  setSubject(val);
                }}
                //   onBlur={handleBlur}
                className="text-input"
              />
              <textarea
                rows="8"
                // cols="70"
                id="message"
                style={{ resize: "none" }}
                placeholder="Your message"
                // type="text"
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
              // className="textArea"
              //   onBlur={handleBlur}
              // className="text-input"
              />
              <button
                // disabled={loading}
                onClick={() => {
                  var mailformat =
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                  if (
                    name?.trim().length === 0 ||
                    email?.trim().length === 0 ||
                    subject?.trim().length === 0 ||
                    msg?.trim().length === 0
                  ) {
                    swal("Sorry!", "All fields are required", "error");
                  } else if (!email.match(mailformat)) {
                    swal("Sorry!", "Invalid email", "error");
                  } else {
                    handleSubmit();
                  }
                }}
                className="submbutton"
              // className={loading ? "disablesubmbutton" : "submbutton"}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        {/* <div
          style={{
            textAlign: "center",
            // flexDirection: "row",
            margin: 2,
            justifyContent: "center",
            marginTop: "1%",
          }}
        >
          <h3 style={{ color: "#524552", fontSize: "26px" }}>Follow us</h3>
        </div>
        <div
          className="footuper"
          style={{
            // color: "red",
            display: "flex",
            textAlign: "center",
            flexDirection: "row",
            margin: 2,
            justifyContent: "center",
            marginTop: "1%",
          }}
        >
          <span
            style={{
              color: "#35363A",
              fontSize: "18px",
              fontWeight: "bold",
              marginTop: "-2px",
              marginLeft: "-10px",
            }}
          >
            Follow us
          </span>
          <a
            onClick={() => {
              window.open("https://www.facebook.com/KhyberGolfCity/");
              window.fbq("track", "Facebook-page-visited");
            }}
          >
            <IoLogoFacebook color="#D69929" size={20} style={{ margin: 2 }} />
          </a>
          <a
            onClick={() => {
              window.open("https://www.instagram.com/khybergolfcity/");
              window.fbq("track", "Instagram-page-visited");
            }}
          >
            <AiOutlineInstagram
              color="#D69929"
              size={20}
              style={{ margin: 2 }}
            />
          </a>
          <a
            onClick={() => {
              window.open(
                "https://www.youtube.com/channel/UC97iUsx8ndbH1WfeWwBZaog"
              );
              window.fbq("track", "Youtube-page-visited");
            }}
          >
            <AiFillYoutube color="#D69929" size={20} style={{ margin: 2 }} />
          </a>
          <a
            onClick={() => {
              window.open("https://www.linkedin.com/company/khyber-golf-city/");
              window.fbq("track", "Linkedin-page-visited");
            }}
          >
            <AiFillLinkedin color="#D69929" size={20} style={{ margin: 2 }} />
          </a>
          <a
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send/?phone=923041115427&text=Tell+us+about+the+khyber+golf+city%3F&app_absent="
              );
              window.fbq("track", "Whatsapp-visited");
            }}
          >
            <AiOutlineWhatsApp
              color="#D69929"
              size={20}
              style={{ margin: 2 }}
            />
          </a>
        </div> */}
      </div>
    </>
  );
};
export default Feedback;
