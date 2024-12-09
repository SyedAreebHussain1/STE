import React, { useEffect } from "react";
import "../amentities/Amentities.css";

import roads from "../images/roads.png";
import school from "../images/school.png";
import parks from "../images/parks.png";
import { AiFillInfoCircle } from "react-icons/ai";
import restaurant from "../images/pfimg1.jpg";
import shopping from "../images/pfimg2.jpg";
import community from "../images/pfimg3.jpg";
import gym from "../images/pfimg4.jpg";
import hospital from "../images/pfimg5.jpg";
import Amencards from "../amenitiesCards/amenititesCards";
import mosque from "../images/pfimg6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter, NavLink, useHistory } from "react-router-dom";
const ProjectFeatures = () => {
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  const history = useHistory();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      className="faqbot"
      data-aos="fade-up"
      style={
        data == "en"
          ? {
              width: "100%",
              borderTop: "4px",
              borderTopStyle: "solid",
              borderTopColor: "#d69929",
              // marginLeft: "8%",
              // marginRight: "8%",
              // margin: "2%",
            }
          : {
              width: "100%",
              borderTop: "4px",
              borderTopStyle: "solid",
              borderTopColor: "#d69929",
              fontFamily: "JameelNoori",
              // marginLeft: "8%",
              // marginRight: "8%",
              // margin: "2%",
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
        style={{
          marginTop: "1.2%",
          marginBottom: "1.8%",
          marginLeft: "8%",
          marginRight: "8%",
          // textAlign: "center",
        }}
        className="pesharwarow"
      >
        <div className="pfcols">
          <Amencards
            name={t("profea3")}
            desc={t("short-desc-location")}
            click={() => {
              // const dataSource = [
              //   {
              //     key: "1",
              //     name: "Mike",
              //     age: 32,
              //     address: "10 Downing Street",
              //   },
              //   {
              //     key: "2",
              //     name: "John",
              //     age: 42,
              //     address: "10 Downing Street",
              //   },
              // ];

              history.push("/location");
              // history.push({ pathname: "/location", state: dataSource });
            }}
            img={restaurant}
            btn={t("more")}
          />
          {/* <div
            onClick={() => history.push("/location")}
            className="hovpf"
            style={{
              backgroundColor: "#042023",
              fontSize: "12px",
              padding: "60px",
              color: "white",
              borderRadius: 8,
            }}
          >
            <img
              // style={{ padding: 20 }}
              src={restaurant}
              alt="res"
              width="25%"
            />
            <h2 style={{ marginTop: "2%" }}>{t("profea3")}</h2>
          </div> */}
        </div>
        <div className="pfcols">
          <Amencards
            name={t("profea4")}
            desc={t("short-desc-amen")}
            click={() => history.push("/Project-facilities")}
            img={shopping}
            btn={t("more")}
          />
          {/* <div
            onClick={() => history.push("/Project-facilities")}
            className="hovpf"
            style={{
              backgroundColor: "#042023",
              fontSize: "12px",
              padding: "60px",
              color: "white",
              borderRadius: 8,
            }}
          >
            <img
              // style={{ padding: 20 }}
              src={shopping}
              alt="res"
              width="25%"
            />
            <h2 style={{ marginTop: "2%" }}>{t("profea4")}</h2>
          </div> */}
        </div>
        <div className="pfcols">
          <Amencards
            name={t("profea5")}
            desc={t("short-desc-sp")}
            click={() => history.push("/special-projects")}
            img={community}
            btn={t("more")}
          />
          {/* <div
            onClick={() => history.push("/special-projects")}
            className="hovpf"
            style={{
              backgroundColor: "#042023",
              fontSize: "12px",
              padding: "60px",
              color: "white",
              borderRadius: 8,
            }}
          >
            <img
              // style={{ padding: 20 }}
              src={community}
              alt="res"
              width="25%"
            />
            <h2 style={{ marginTop: "2%" }}>{t("profea5")}</h2>
          </div> */}
        </div>
        <div className="pfcols">
          <Amencards
            name={t("profea6")}
            desc={t("short-desc-infrastructure")}
            click={() => history.push("/infrastructure")}
            img={gym}
            btn={t("more")}
          />
          {/* <div
            onClick={() => history.push("/infrastructure")}
            className="hovpf"
            style={{
              backgroundColor: "#042023",
              fontSize: "12px",
              padding: "60px",
              color: "white",
              borderRadius: 8,
            }}
          >
            <img
              // style={{ padding: 20 }}
              src={gym}
              alt="res"
              width="25%"
            />
            <h2 style={{ marginTop: "2%" }}>{t("profea6")}</h2>
          </div> */}
        </div>
        <div className="pfcols">
          <Amencards
            name={t("profea9")}
            desc={t("short-desc-builtup")}
            click={() => history.push("/builtup")}
            img={hospital}
            btn={t("more")}
          />
          {/* <div
            onClick={() => history.push("/builtup")}
            className="hovpf"
            style={{
              backgroundColor: "#042023",
              fontSize: "12px",
              padding: "60px",
              color: "white",
              borderRadius: 8,
            }}
          >
            <img
              // style={{ padding: 20 }}
              src={hospital}
              alt="res"
              width="25%"
            />
            <h2 style={{ marginTop: "2%" }}>{t("profea9")}</h2>
          </div> */}
        </div>
        <div className="pfcols">
          <Amencards
            name={t("profea10")}
            desc={t("short-desc-cp")}
            click={() => history.push("/commercials")}
            img={mosque}
            btn={t("more")}
          />
          {/* <div
            onClick={() => history.push("/commercials")}
            className="hovpf"
            style={{
              backgroundColor: "#042023",
              fontSize: "12px",
              padding: "60px",
              color: "white",
              borderRadius: 8,
            }}
          >
            <img
              // style={{ padding: 20 }}
              src={mosque}
              alt="res"
              width="25%"
            />
            <h2 style={{ marginTop: "2%" }}>{t("profea10")}</h2>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectFeatures;
