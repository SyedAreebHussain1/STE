import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import OtherHeader from "../OtherHeader/OtherHeader";
import "aos/dist/aos.css";
import { AiFillInfoCircle } from "react-icons/ai";
import img1 from "./specialprojects/1.jpg";
import img2 from "./specialprojects/2.jpg";
import img3 from "./specialprojects/3.jpg";
import img4 from "./specialprojects/4.jpg";
import img5 from "./specialprojects/5.jpg";
import img6 from "./specialprojects/6.jpg";
import img7 from "./specialprojects/7.jpg";
import img8 from "./specialprojects/8.jpg";
import img9 from "./specialprojects/9.jpg";
import img10 from "./specialprojects/10.jpg";
import AOS from "aos";
import Button from "../UI/Button/Button";
import CommercialCenter from "./commercialcenter/commercialCenter";
import CommercialCenterimg from "./commercialcenter/3.jpg";
import CommunityCenterimg from "./communitycenter/3.jpg";
import ModernInfrastructureimg from "./moderninfra/2.jpg";
import ProjectSecurity from "./projectsecurity/ProjectSecurity";
import RecreationalCenterimg from "./recreationalcenter/4.jpg";
import RecreationalCenterimg1 from "./recreationalcenter/2.jpg";
import SpecialProject from "./specialprojects/SpecialProject";
import SpecialServicesimg from "./specialservice/5.jpg";
// import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Pfcard from "./pfcard/pfcard";
import Pfflipcard from "./pfcard/pfflipcard";
import NavbarV2 from "../navbar/NavbarV2";
const ProjectfacilitiesV2 = (props) => {
  const [title, setTitle] = useState("Khyber Golf City");
  // console.log(props)
  const { i18n, t } = useTranslation();
  const datas = useSelector((state) => state.language.lang);

  useEffect(() => {
    window.fbq("track", "Project-Facilites-Page");
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    if (props.location.pathname == "/Project-facilities") {
      setTitle("Project Facilities | Khyber Golf City")
    } else {
      setTitle("Khyber Golf City | Modern Lifestyle Housing Project")
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title])

  return (
    <>
      {/* <header className="header-other-bg">
        <Navbar />
        <OtherHeader name1={t("pf1")} name2={t("pf2")} />
      </header> */}
      {/* <Navbar sticky="*" /> */}
      <NavbarV2 />
      <OtherHeader
        name1={t("pf1")}
        name2={t("pf2")}
        breadcumb1="Home"
        breadcumb2=">"
        breadcumb3="Project facilities"
      />
      <div
        // data-aos="fade-up"
        data-aos="flip-up"
        style={
          datas == "en"
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
            {datas == "ur" || datas == "ps" ? t("pf4") : t("pf3")}{" "}
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {datas == "ur" || datas == "ps" ? t("pf3") : t("pf4")}
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
            datas == "en"
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
          {t("pf5")}
        </p>
      </div>

      {/* Second section */}
      <div
        data-aos="fade-up"
        // data-aos="flip-up"
        style={
          datas == "en"
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
            {t("profea1")}{" "}
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {t("profea2")}
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

        <div
          // data-aos="flip-up"
          // data-aos="flip-up"
          style={{ marginTop: "2%", marginLeft: "0%" }}
          className="pesharwarow"
        >
          <div className="moderninfracolumn">
            <div className="e-card">
              <div className="e-card-image">
                <img src={CommercialCenterimg} alt="Snow" width="100%" />
                <div
                  className="e-card-title"
                  style={
                    datas == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {t("pf6")}
                </div>
              </div>
            </div>
          </div>
          <div className="moderninfracolumn">
            <div className="e-card">
              <div className="e-card-image">
                <img src={CommunityCenterimg} alt="Snow" width="100%" />
                <div
                  className="e-card-title"
                  style={
                    datas == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {t("pf7")}
                </div>
              </div>
            </div>
          </div>
          <div className="moderninfracolumn">
            <div className="e-card">
              <div className="e-card-image">
                <img src={RecreationalCenterimg} alt="Snow" width="100%" />
                <div
                  className="e-card-title"
                  style={
                    datas == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {t("pf9")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          // data-aos="flip-up"
          // data-aos="fade-up"
          style={{ marginTop: "2%", marginLeft: "0%" }}
          className="pesharwarow"
        >
          <div className="moderninfracolumn">
            <div className="e-card">
              <div className="e-card-image">
                <img src={RecreationalCenterimg1} alt="Snow" width="100%" />
                <div
                  className="e-card-title"
                  style={
                    datas == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {t("pf10")}
                </div>
              </div>
            </div>
          </div>
          <div className="moderninfracolumn">
            <div className="e-card">
              <div className="e-card-image">
                <img src={SpecialServicesimg} alt="Snow" width="100%" />
                <div
                  className="e-card-title"
                  style={
                    datas == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {t("pf11")}
                </div>
              </div>
            </div>
          </div>
          <div className="moderninfracolumn">
            <div className="e-card">
              <div className="e-card-image">
                <img src={ModernInfrastructureimg} alt="Snow" width="100%" />
                <div
                  className="e-card-title"
                  style={
                    datas == "en"
                      ? {
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "#35363A",
                      }
                      : {
                        fontFamily: "JameelNoori",
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "#35363A",
                        paddingBottom: "5px",
                      }
                  }
                >
                  {t("pf8")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third section */}
      <div
        // data-aos="fade-up"
        // data-aos="flip-up"
        style={
          datas == "en"
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
          <span
            style={
              datas == "ur" || datas == "ps"
                ? {
                  fontSize: "3.5vh",
                  color: "#2D3748",
                  fontFamily: "JameelNoori",
                }
                : { fontSize: "3.5vh", color: "#2D3748" }
            }
          >
            {t("pam")}
            {/* Project */}
            {"  "}
            <span
              style={
                datas == "ur" || datas == "ps"
                  ? {
                    fontSize: "3.5vh",
                    color: "#d69929",
                    fontFamily: "JameelNoori",
                  }
                  : { fontSize: "3.5vh", color: "#d69929" }
              }
            >
              {t("pam1")}
              {/* Amenities */}
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

        <div
          // data-aos="flip-up"
          style={{ marginTop: "2%", marginLeft: "0%", marginRight: "0%" }}
          className="pesharwarow"
        >
          <div className="moderninfracolumn">
            <Pfcard
              heading={"Cinemas"}
              description={
                "Experience the luxury of watching a movie in an air-conditioned theatre equipped with the best sound effects"
              }
              bgcardclass={"pfcard__background--main"}
            />
            {/* <Pfflipcard img={img7} heading={t("rc")} description={t("rc1")} /> */}
          </div>
          <div className="moderninfracolumn">
            <Pfcard
              heading={"Hospitals and Clinics"}
              description={
                "Emergency medical and healthcare services are available 24/7 with highly skilled doctors and healthcare workers"
              }
              bgcardclass={"pfcard__background--main2"}
            />
            {/* <Pfflipcard img={img8} heading={t("sm")} description={t("sm1")} /> */}
          </div>
          <div className="moderninfracolumn">
            <Pfcard
              heading={"Community Centers"}
              description={
                "Our community centres are designed to make it convenient to conduct activities and meetings in a secure environment"
              }
              bgcardclass={"pfcard__background--main3"}
            />
            {/* <Pfflipcard img={img3} heading={t("cc")} description={t("cc1")} /> */}
          </div>
        </div>
        {/* Row 1 end */}

        <div
          // data-aos="flip-up"
          style={{ marginTop: "2%", marginLeft: "0%", marginRight: "0%" }}
          className="pesharwarow"
        >
          <div className="moderninfracolumn">
            <Pfcard
              heading={"Gym Facility"}
              description={
                "Khyber Golf City residents will have access to all gym amenities as well as gym equipment with individual spaces for men and women"
              }
              bgcardclass={"pfcard__background--main4"}
            />
            {/* <Pfflipcard img={img4} heading={t("gf")} description={t("gf1")} /> */}
          </div>
          <div className="moderninfracolumn">
            <Pfcard
              heading={"Mosques"}
              description={
                "Mosques reviving the traditions of the city, with a grand mosque among them will be built in the middle of beautiful gardens"
              }
              bgcardclass={"pfcard__background--main5"}
            />
            {/* <Pfflipcard img={img2} heading={t("hc")} description={t("hc1")} /> */}
          </div>
          <div className="moderninfracolumn">
            <Pfcard
              heading={"Restaurants and Cafes"}
              description={
                "Enjoy the lovely ambiance and delicious Peshawar cuisine with a fantastic business opportunity if you wish to establish a food business"
              }
              bgcardclass={"pfcard__background--main7"}
            />
            {/* <Pfflipcard img={img5} heading={t("ms")} description={t("ms1")} /> */}
          </div>
        </div>

        {/* Row 2 end */}
        <div
          // data-aos="flip-up"
          style={{ marginTop: "2%", marginLeft: "0%", marginRight: "0%" }}
          className="pesharwarow"
        >
          <div className="moderninfracolumn">
            <Pfcard
              heading={"Shopping Malls"}
              description={
                "An advanced shopping centre has been built in accordance with international standards, offering a variety of products"
              }
              bgcardclass={"pfcard__background--main8"}
            />
            {/* <Pfflipcard img={img1} heading={t("wd")} description={t("wd1")} /> */}
          </div>
          <div className="moderninfracolumn">
            <Pfcard
              heading={"Schools and Colleges"}
              description={
                "All educational institutions built at Khyber Golf City will house qualified teachers from all over the country to provide their services"
              }
              bgcardclass={"pfcard__background--main10"}
            />
            {/* <Pfflipcard img={img10} heading={t("sc")} description={t("sc1")} /> */}
          </div>
          <div className="moderninfracolumn">
            <Pfcard
              heading={"Parks and Grounds"}
              description={
                "There will be lovely parks, playgrounds, and jogging trails in Khyber Golf City with 24/7 CCTV surveillance"
              }
              bgcardclass={"pfcard__background--main9"}
            />
            {/* <Pfflipcard img={img9} heading={t("pg")} description={t("pg1")} /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectfacilitiesV2;
