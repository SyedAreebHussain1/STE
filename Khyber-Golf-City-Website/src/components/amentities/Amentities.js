import React, { useEffect } from "react";
import "./Amentities.css";
import restaurant from "../images/restaurant.png";
import shopping from "../images/shoping.png";
import community from "../images/community.png";
import gym from "../images/gym.png";
import hospital from "../images/hospital.png";
import mosque from "../images/mosque.png";
import roads from "../images/roads.png";
import school from "../images/school.png";
import parks from "../images/parks.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter, NavLink, useHistory } from "react-router-dom";
const Amentities = () => {
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
      data-aos="fade-up"
      // style={{ backgroundColor: "red" }}
      className="service component__space amentities"
      id="Services"
    >
      <h1 style={{ textAlign: "center", marginTop: "-4.5%" }}>
        <span className="prjtxt">
          {t("amen1")}{" "}
          <span style={{ color: "#2D3748" }} className="promotxt">
            {t("amen11")}
          </span>{" "}
        </span>
        {/* <span className="promotxt">PROMO</span> */}
      </h1>

      <div
        //  style={{ backgroundColor: "blue" }}
        style={{ marginBottom: -35 }}
        className="amencontainer"
      >
        <div className="row">
          <div onClick={() => history.push("/restaurants")} className="col__3">
            <div className="service__box pointer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",

                  alignItems: "center",
                }}
              >
                <img
                  className="amenimg"
                  // style={{ padding: 20 }}
                  src={restaurant}
                  alt="res"
                  width="75%"
                />
              </div>
              <h1
                style={
                  data == "ur" || data == "ps"
                    ? {
                        color: "white",
                        textAlign: "center",
                        marginTop: "8%",
                        fontSize: 24,
                      }
                    : { color: "white", textAlign: "center", marginTop: "8%" }
                }
                // className="service__text"
              >
                {t("amen2")}
              </h1>
            </div>
          </div>
          <div onClick={() => history.push("/shoppings")} className="col__3">
            <div className="service__box pointer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",
                  alignItems: "center",
                }}
              >
                <img
                  className="amenimg"
                  src={shopping}
                  alt="res"
                  width={data == "ur" || data == "ps" ? "74%" : "80%"}
                />
              </div>
              <h1
                // style={{ color: "white", textAlign: "center", marginTop: "8%" }}
                style={
                  data == "ur" || data == "ps"
                    ? {
                        color: "white",
                        textAlign: "center",
                        marginTop: "8%",
                        fontSize: 24,
                      }
                    : { color: "white", textAlign: "center", marginTop: "8%" }
                }
                // className="service__text"
              >
                {t("amen3")}
              </h1>
            </div>
          </div>
          <div
            onClick={() => history.push("/comunitycenter")}
            className="col__3"
          >
            <div className="service__box pointer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",
                  alignItems: "center",
                }}
              >
                <img
                  src={community}
                  alt="res"
                  width={data == "ur" || data == "ps" ? "74%" : "70%"}
                />
              </div>
              <h1
                // style={{ color: "white", textAlign: "center", marginTop: "8%" }}
                style={
                  data == "ur" || data == "ps"
                    ? {
                        color: "white",
                        textAlign: "center",
                        marginTop: "8%",
                        fontSize: 24,
                      }
                    : { color: "white", textAlign: "center", marginTop: "8%" }
                }
                // className="service__text"
              >
                {t("amen4")}
              </h1>
            </div>
          </div>
          <div onClick={() => history.push("/gym")} className="col__3">
            <div className="service__box pointer">
              <div
                style={{
                  display: "flex",

                  // paddingRight: 10,
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",
                  alignItems: "center",
                }}
              >
                <img className="amenimg" src={gym} alt="res" width="85%" />
              </div>
              <h1
                // style={{
                //   // fontSize: 25,
                //   color: "white",
                //   textAlign: "center",
                //   marginTop: "8%",
                // }}
                style={
                  data == "ur" || data == "ps"
                    ? {
                        color: "white",
                        textAlign: "center",
                        marginTop: "8%",
                        fontSize: 24,
                      }
                    : { color: "white", textAlign: "center", marginTop: "8%" }
                }
                // className="service__text"
              >
                {t("amen5")}
              </h1>
            </div>
          </div>
          <div onClick={() => history.push("/hospitals")} className="col__3">
            <div className="service__box pointer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",
                  alignItems: "center",
                }}
              >
                <img
                  className="amenimg"
                  src={hospital}
                  alt="res"
                  width={data == "ur" || data == "ps" ? "84%" : "75%"}
                />
              </div>
              <h1
                // style={{ color: "white", textAlign: "center", marginTop: "8%" }}
                style={
                  data == "ur" || data == "ps"
                    ? {
                        color: "white",
                        textAlign: "center",
                        marginTop: "8%",
                        fontSize: 24,
                      }
                    : { color: "white", textAlign: "center", marginTop: "8%" }
                }
                // className="service__text"
              >
                {t("amen6")}
              </h1>
            </div>
          </div>
          <div onClick={() => history.push("/mosques")} className="col__3">
            <div className="service__box pointer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",
                  alignItems: "center",
                }}
              >
                <img className="amenimg" src={mosque} alt="res" width="85%" />
              </div>
              <h1
                // style={{ color: "white", textAlign: "center", marginTop: "8%" }}
                style={
                  data == "ur" || data == "ps"
                    ? {
                        color: "white",
                        textAlign: "center",
                        marginTop: "8%",
                        fontSize: 24,
                      }
                    : { color: "white", textAlign: "center", marginTop: "8%" }
                }
                // className="service__text"
              >
                {t("amen7")}
              </h1>
            </div>
          </div>
          <div onClick={() => history.push("/roads")} className="col__3">
            <div className="service__box pointer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",
                  alignItems: "center",
                }}
              >
                <img className="amenimg" src={roads} alt="res" width="85%" />
              </div>
              <h1
                // style={{ color: "white", textAlign: "center", marginTop: "8%" }}
                style={
                  data == "ur" || data == "ps"
                    ? {
                        color: "white",
                        textAlign: "center",
                        marginTop: "8%",
                        fontSize: 24,
                      }
                    : { color: "white", textAlign: "center", marginTop: "8%" }
                }
                // className="service__text"
              >
                {t("amen8")}
              </h1>
            </div>
          </div>
          <div onClick={() => history.push("/schools")} className="col__3">
            <div className="service__box pointer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",
                  alignItems: "center",
                }}
              >
                <img
                  className="amenimg"
                  src={school}
                  alt="res"
                  width={data == "ur" || data == "ps" ? "85%" : "75%"}
                />
              </div>
              <h1
                // style={{ color: "white", textAlign: "center", marginTop: "8%" }}
                style={
                  data == "ur" || data == "ps"
                    ? {
                        color: "white",
                        textAlign: "center",
                        marginTop: "8%",
                        fontSize: 24,
                      }
                    : { color: "white", textAlign: "center", marginTop: "8%" }
                }
                // className="service__text"
              >
                {t("amen9")}
              </h1>
            </div>
          </div>
          <div onClick={() => history.push("/parks")} className="col__3">
            <div className="service__box pointer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",
                  alignItems: "center",
                }}
              >
                <img className="amenimg" src={parks} alt="res" width="85%" />
              </div>
              <h1
                // style={{ color: "white", textAlign: "center", marginTop: "8%" }}
                style={
                  data == "ur" || data == "ps"
                    ? {
                        color: "white",
                        textAlign: "center",
                        marginTop: "8%",
                        fontSize: 24,
                      }
                    : { color: "white", textAlign: "center", marginTop: "8%" }
                }
                // className="service__text"
              >
                {t("amen10")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amentities;
