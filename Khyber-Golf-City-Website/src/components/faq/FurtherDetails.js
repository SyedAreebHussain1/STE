import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import OtherHeader from "../OtherHeader/OtherHeader";
import { AiFillInfoCircle } from "react-icons/ai";
import img1 from "../images/kgc1.jpg";
import img2 from "../images/Kgc2.jpg";
import img3 from "../images/Kgc3.png";
import AOS from "aos";
import img7 from "../images/kgclayout.jpg";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

const FurtherDetails = () => {
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  const Online = () => {
    return (
      <>
        <div data-aos="fade-up" style={{ marginLeft: "2%", marginRight: "2%" }}>
          <h1
            style={{
              fontSize: "3.5vh",
              textAlign: data == "en" ? "left" : "right",
            }}
          >
            STEP 1:{" "}
          </h1>
          <h1 style={{ textAlign: data == "en" ? "left" : "right" }}>
            <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
              {t("port4444")} {/* {t('about3')}{" "} */}
              <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
                {/* {" "} {t('about4')} */} {t("port5555")}
              </span>{" "}
            </span>
          </h1>
          {/* hr */}
          <hr
            style={{
              maxWidth: "100%",
              // marginLeft: "8%",
              // marginRight: "8%",
              marginTop: "0%",
              color: "white",
              backgroundColor: "white",
              height: 0,
            }}
          />
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
            {t("port42")} <br />
            {t("port43")} <br />
            {t("port44")} <br />
            {t("port45")} <br />
            {t("port46")} <br />
            {t("port47")}
          </p>
        </div>
        <div
          data-aos="fade-up"
          style={{
            marginLeft: "2%",
            marginRight: "2%",
            margin: "3%",
            marginTop: "1%",
          }}
        >
          <h1
            style={{
              fontSize: "3.5vh",
              textAlign: data == "en" ? "left" : "right",
            }}
          >
            STEP 2:{" "}
          </h1>
          <h1 style={{ textAlign: data == "en" ? "left" : "right" }}>
            <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
              {t("port555")} {/* {t('about3')}{" "} */}
              <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
                {/* {" "} {t('about4')} */} {t("port666")}
              </span>{" "}
            </span>
          </h1>
          {/* hr */}
          <hr
            style={{
              maxWidth: "100%",
              // marginLeft: "8%",
              // marginRight: "8%",
              marginTop: "0%",
              color: "white",
              backgroundColor: "white",
              height: 0,
            }}
          />
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
            {t("port51")} <br />
            {t("port52")} <br />
            {t("port53")} <br />
            {t("port54")} <br />
            {t("port55")} <br />
            {t("port56")}
          </p>
        </div>
      </>
    );
  };
  const Inperson = () => {
    return (
      <>
        <div data-aos="fade-up" style={{ marginLeft: "2%", marginRight: "2%" }}>
          <h1
            style={{
              fontSize: "3.5vh",
              textAlign: data == "en" ? "left" : "right",
            }}
          >
            STEP 1:{" "}
          </h1>
          <h1 style={{ textAlign: data == "en" ? "left" : "right" }}>
            <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
              {t("port4444")} {/* {t('about3')}{" "} */}
              <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
                {/* {" "} {t('about4')} */} {t("port5555")}
              </span>{" "}
            </span>
          </h1>
          {/* hr */}
          <hr
            style={{
              maxWidth: "100%",
              // marginLeft: "8%",
              // marginRight: "8%",
              marginTop: "0%",
              color: "white",
              backgroundColor: "white",
              height: 0,
            }}
          />
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
            {t("availd1")} <br />
            {t("availd2")} <br />
            {t("availd3")} <br />
            {t("availd4")}
          </p>
        </div>
        <div
          data-aos="fade-up"
          style={{
            marginLeft: "2%",
            marginRight: "2%",
            margin: "3%",
            marginTop: "1%",
          }}
        >
          <h1
            style={{
              fontSize: "3.5vh",
              textAlign: data == "en" ? "left" : "right",
            }}
          >
            STEP 2:{" "}
          </h1>
          <h1 style={{ textAlign: data == "en" ? "left" : "right" }}>
            <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
              {t("port555")} {/* {t('about3')}{" "} */}
              <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
                {/* {" "} {t('about4')} */} {t("port666")}
              </span>{" "}
            </span>
          </h1>
          {/* hr */}
          <hr
            style={{
              maxWidth: "100%",
              // marginLeft: "8%",
              // marginRight: "8%",
              marginTop: "0%",
              color: "white",
              backgroundColor: "white",
              height: 0,
            }}
          />
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
            {t("availd5")} <br />
            {t("availd6")} <br />
            {t("availd7")} <br />
            {t("availd8")}
          </p>
        </div>
      </>
    );
  };
  const datas = [
    {
      key: 1,
      data: <Online />,
    },
    {
      key: 2,
      data: <Inperson />,
    },
  ];
  const [active, setActive] = useState(0);
  const change = (value) => {
    if (value === 0) {
      setActive(0);
    } else if (value === 1) {
      setActive(1);
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <header className="header-other-bg">
        <Navbar />
        <OtherHeader
          // name1="FORM"
          // name2="DETAILS"
          name1={data == "ur" || data == "ps" ? t("port111") : t("port000")}
          name2={data == "ur" || data == "ps" ? t("port000") : t("port111")}
        />
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // justifyContent: data == "en" ? "" : "right",
          flexDirection: "row",
          marginLeft: data == "en" ? "2%" : "",
          marginRight: data == "en" ? "0%" : "2%",
          // padding: "5%",
          // justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "2%",
        }}
      >
        <div
          style={{ marginTop: 10 }}
          onClick={() => change(0)}
          className={active === 0 ? "projfacbtnclicked" : "projfacbtnunclicked"}
        >
          <span style={data == "ur" || data == "ps" ? { fontSize: 20 } : {}}>
            {t("avail7")}
          </span>
        </div>
        <div
          style={{ marginTop: 10, marginLeft: "2%" }}
          onClick={() => change(1)}
          className={active === 1 ? "projfacbtnclicked" : "projfacbtnunclicked"}
        >
          <span style={data == "ur" || data == "ps" ? { fontSize: 20 } : {}}>
            {t("avail8")}
          </span>
        </div>
      </div>
      <div
        style={{ marginLeft: "10%", marginRight: "10%", marginTop: "1%" }}
        className="hr-theme-slash-2"
      >
        <div className="hr-line"></div>
        <div className="hr-icon">
          <AiFillInfoCircle color="#d69929" size={20} />
        </div>
        <div className="hr-line"></div>
      </div>
      {datas[active].data}
    </>
  );
};
export default FurtherDetails;
