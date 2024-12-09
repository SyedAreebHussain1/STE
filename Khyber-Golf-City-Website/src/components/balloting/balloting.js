import React, { useEffect } from "react";
import "./balloting.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsFillPlayBtnFill } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";
import border from "../../assets/border.png";
import { Video } from "../Video/Video";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Video_Regis } from "../Video/Video-regis";
const Balloting = () => {
  const { i18n, t } = useTranslation();
  const history = useHistory();
  const data = useSelector((state) => state.language.lang);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div
        style={
          data == "en"
            ? {
                borderBottomStyle: "solid",
                borderBottomColor: "#d69929",
                // borderTop: "4px",
              }
            : {
                borderBottomStyle: "solid",
                borderBottomColor: "#d69929",
                fontFamily: "JameelNoori",
                // borderTop: "4px",
              }
        }
      >
        <section id="balloting-subscribe">
          <div
            style={{ marginTop: "1%" }}
            className="balloting-container balloting-subscribe"
            data-aos="fade-up"
          >
            <h1>
              <span className="balloting-prjtxt">
                {t("balloting1")}{" "}
                <span className="balloting-promotxt">{t("balloting2")}</span>{" "}
              </span>
              {/* <span className="promotxt">PROMO</span> */}
            </h1>
            <p style={{ marginTop: 5 }} className="u-text-small">
              {t("balloting3")}
            </p>
            {/* <p style={{ marginTop: 5 }} className="u-text-small">
            {t("pp4")}
          </p> */}
            <div style={{ marginTop: 5 }}>
              {" "}
              <span
                className="u-text-small"
                //  style={{ fontSize: "3vh" }}
              >
                {t("balloting4")}
              </span>{" "}
            </div>
            <div style={{ marginTop: 15 }}>
              {" "}
              <span
                style={{ color: "white", fontWeight: "600" }}
                // className="balloting-h2text"
                className="u-text-small"
              >
                {t("balloting5")}
              </span>{" "}
            </div>

            <Video_Regis cName="balloting" />
          </div>
          <div
            // onClick={() => {
            //   history.push("/balloting");
            // }}
            style={{ marginTop: 20, marginLeft: 10 }}
          >
            <a className="balloting-btn">{t("balloting6")}</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Balloting;
