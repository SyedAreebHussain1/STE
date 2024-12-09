import React, { useEffect } from "react";
import "./Subscribe.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import border from "../../assets/border.png";
import { Video } from "../Video/Video";
import { useTranslation } from "react-i18next";
const Subscribe = () => {
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div
        style={{
          borderTopStyle: "solid",
          borderTopColor: "#d69929",
          // borderTop: "4px",
        }}
      >
        <section id="subscribe">
          <div
            style={
              data == "en"
                ? { marginTop: "4%" }
                : { marginTop: "4%", fontFamily: "JameelNoori" }
            }
            className="container subscribe"
            data-aos="fade-up"
          >
            <h1>
              <span className="prjtxt">
                {t("pp1")} <span className="promotxt">{t("pp2")}</span>{" "}
              </span>
              {/* <span className="promotxt">PROMO</span> */}
            </h1>
            <p style={{ marginTop: 5 }} className="u-text-small">
              {t("pp4")}
            </p>
            {/* <p style={{ marginTop: 5 }} className="u-text-small">
            {t("pp4")}
          </p> */}
            <div style={{ marginTop: 5 }}>
              {" "}
              <span
                // style={{ fontSize: "3vh" }}
                className="u-text-small"
              >
                {t("pp3")}
              </span>{" "}
            </div>
            <div style={{ marginTop: 15 }}>
              {" "}
              <span
                style={{
                  color: "white",
                  fontWeight: "600",
                }}
                // className="h2text"
                className="u-text-small"
              >
                {t("pp5")}
              </span>{" "}
            </div>

            {/* <form>
          <div className="form-control">
            <input type="text" placeholder="Enter Your Email..." />
            <button>Subscribe</button>
          </div>
        </form> */}
            <Video cName="subscribe" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Subscribe;
