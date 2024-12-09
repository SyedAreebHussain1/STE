import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import OtherHeader from "../OtherHeader/OtherHeader";
import "aos/dist/aos.css";
import { AiFillInfoCircle } from "react-icons/ai";
import img1 from "../images/kgc1.jpg";
import img2 from "../images/Kgc2.jpg";
import img3 from "../images/Kgc3.png";
import AOS from "aos";
import Button from "../UI/Button/Button";
import CommercialCenter from "./commercialcenter/commercialCenter";
import CommunityCenter from "./communitycenter/communityCenter";
import ModernInfrastructure from "./moderninfra/ModernInfrastructure";
import ProjectSecurity from "./projectsecurity/ProjectSecurity";
import RecreationalCenter from "./recreationalcenter/RecreationalCenter";
import SpecialProject from "./specialprojects/SpecialProject";
import SpecialServices from "./specialservice/SpecialServices";
// import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
const Projectfacilities = () => {
  const { i18n, t } = useTranslation();
  const datas = useSelector((state) => state.language.lang);
  const data = [
    {
      key: 1,
      data: <CommercialCenter />,
    },
    {
      key: 2,
      data: <CommunityCenter />,
    },
    {
      key: 3,
      data: <ModernInfrastructure />,
    },
    {
      key: 4,
      data: <ProjectSecurity />,
    },
    {
      key: 5,
      data: <RecreationalCenter />,
    },
    {
      key: 6,
      data: <SpecialServices />,
    },
    {
      key: 7,
      data: <SpecialProject />,
    },
    {
      key: 8,
      data: (
        <div>
          <h2>DATA 8</h2>
        </div>
      ),
    },
  ];
  const [active, setActive] = useState(0);
  const change = (value) => {
    if (value === 0) {
      setActive(0);
    } else if (value === 1) {
      setActive(1);
    } else if (value === 2) {
      setActive(2);
    } else if (value === 3) {
      setActive(3);
    } else if (value === 4) {
      setActive(4);
    } else if (value === 5) {
      setActive(5);
    } else if (value === 6) {
      setActive(6);
    } else if (value === 7) {
      setActive(7);
    }
  };
  // const options = {
  //   settings: {
  //     disableKeyboardControls: true,
  //     disablePanzoom: true,
  //     disableWheelControls: true,
  //     hideControlsAfter: true,
  //   },
  //   caption: {
  //     showCaption: false,
  //   },
  //   buttons: {
  //     showAutoplayButton: false,
  //     showCloseButton: true,
  //     showDownloadButton: false,
  //     showFullscreenButton: false,
  //     showNextButton: false,
  //     showPrevButton: false,
  //     showThumbnailsButton: false,
  //   },
  //   thumbnails: {},
  //   progressBar: {},
  // };
  useEffect(() => {
    window.fbq("track", "Project-Facilites-Page");
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <header className="header-other-bg">
        <Navbar />
        <OtherHeader name1={t("pf1")} name2={t("pf2")} />
      </header>
      <div
        data-aos="fade-up"
        style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
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

        <hr
          style={{
            maxWidth: "100%",
            // marginLeft: "8%",
            // marginRight: "8%",
            marginTop: "2%",
            color: "white",
            backgroundColor: "white",
            height: 0,
          }}
        />
        <div
          className="flexbuttons"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: "2%",
          }}
        >
          <div
            style={{ marginTop: 10 }}
            onClick={() => change(0)}
            className={
              active === 0 ? "projfacbtnclicked" : "projfacbtnunclicked"
            }
          >
            <span
              style={datas == "ur" || datas == "ps" ? { fontSize: 20 } : {}}
            >
              {t("pf6")}
            </span>
          </div>
          <div
            style={{ marginTop: 10 }}
            onClick={() => change(1)}
            className={
              active === 1 ? "projfacbtnclicked" : "projfacbtnunclicked"
            }
          >
            <span
              style={datas == "ur" || datas == "ps" ? { fontSize: 20 } : {}}
            >
              {t("pf7")}
            </span>
          </div>
          <div
            style={{ marginTop: 10 }}
            onClick={() => change(3)}
            className={
              active === 3 ? "projfacbtnclicked" : "projfacbtnunclicked"
            }
          >
            <span
              style={datas == "ur" || datas == "ps" ? { fontSize: 20 } : {}}
            >
              {t("pf9")}
            </span>
          </div>
          <div
            style={{ marginTop: 10 }}
            onClick={() => change(4)}
            className={
              active === 4 ? "projfacbtnclicked" : "projfacbtnunclicked"
            }
          >
            <span
              style={datas == "ur" || datas == "ps" ? { fontSize: 20 } : {}}
            >
              {t("pf10")}
            </span>
          </div>
          <div
            style={{ marginTop: 10 }}
            onClick={() => change(5)}
            className={
              active === 5 ? "projfacbtnclicked" : "projfacbtnunclicked"
            }
          >
            <span
              style={datas == "ur" || datas == "ps" ? { fontSize: 20 } : {}}
            >
              {t("pf11")}
            </span>
          </div>
          <div
            style={{ marginTop: 10 }}
            onClick={() => change(2)}
            className={
              active === 2 ? "projfacbtnclicked" : "projfacbtnunclicked"
            }
          >
            <span
              style={datas == "ur" || datas == "ps" ? { fontSize: 20 } : {}}
            >
              {t("pf8")}
            </span>
          </div>
          <div
            style={{ marginTop: 10 }}
            onClick={() => change(6)}
            className={
              active === 6 ? "projfacbtnclicked" : "projfacbtnunclicked"
            }
          >
            <span
              style={datas == "ur" || datas == "ps" ? { fontSize: 20 } : {}}
            >
              {t("pf22")}
            </span>
          </div>
        </div>

        <hr
          style={{
            maxWidth: "100%",
            // marginLeft: "2%",
            // marginRight: "2%",
            marginTop: "2.5%",
            color: "white",
            backgroundColor: "white",
            height: 0,
          }}
        />
        {data[active].data}
        {/* <SRLWrapper options={options} >
                      {data[active].data}
                    </SRLWrapper> */}

        {/* <CommercialCenter /> */}

        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
            {t("rc")}{" "}
            {/* <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {datas == "ur" || datas == "ps" ? t("pf3") : t("pf4")}
            </span>{" "} */}
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
          {t("rc1")}
        </p>
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
            {t("sm")}{" "}
            {/* <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {datas == "ur" || datas == "ps" ? t("pf3") : t("pf4")}
            </span>{" "} */}
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
          {t("sm1")}
        </p>
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
            {t("cc")}{" "}
            {/* <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {datas == "ur" || datas == "ps" ? t("pf3") : t("pf4")}
            </span>{" "} */}
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
          {t("cc1")}
        </p>
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
            {t("gf")}{" "}
            {/* <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {datas == "ur" || datas == "ps" ? t("pf3") : t("pf4")}
            </span>{" "} */}
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
          {t("gf1")}
        </p>
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
            {t("hc")}{" "}
            {/* <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {datas == "ur" || datas == "ps" ? t("pf3") : t("pf4")}
            </span>{" "} */}
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
          {t("hc1")}
        </p>
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
            {t("ms")}{" "}
            {/* <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {datas == "ur" || datas == "ps" ? t("pf3") : t("pf4")}
            </span>{" "} */}
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
          {t("ms1")}
        </p>
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
            {t("wd")}{" "}
            {/* <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {datas == "ur" || datas == "ps" ? t("pf3") : t("pf4")}
            </span>{" "} */}
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
          {t("wd1")}
        </p>
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
            {t("sc")}{" "}
            {/* <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {datas == "ur" || datas == "ps" ? t("pf3") : t("pf4")}
            </span>{" "} */}
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
          {t("sc1")}
        </p>
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
            {t("pg")}{" "}
            {/* <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              {datas == "ur" || datas == "ps" ? t("pf3") : t("pf4")}
            </span>{" "} */}
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
          {t("pg1")}
        </p>
      </div>
    </>
  );
};
export default Projectfacilities;
