import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/22.png";
import mobilebanner from "../../assets/mobilebanner.png";
import phoneHeaderur from "../../assets/22ur.png";
import mobilebannerur from "../../assets/mobilebannerur.png";
import phoneHeaderps from "../../assets/22ps.png";
import mobilebannerps from "../../assets/mobilebannerps.png";
import { BsMouse } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const handleClick = () => {
    window.open("https://portal.khybergolfcity.com/auth/login");
    window.fbq("track", "Portal-visit");
  };
  return (
    // <section id="header">
    //   <div className="container header">
    //     <Button text={"How It Works"} btnClass={"btn-light"} href={"#"} />
    //   </div>
    //   <div className="floating-icon">
    //     <a href="#features">
    //       <BsMouse color="#fff" size={25} className="mouse" />
    //     </a>
    //   </div>
    // </section>
    <section id="header">
      <div
        // style={{ backgroundColor: "green", height: "10vh" }}
        data-aos="fade-down"
        className="img-button-main-continer"
      >
        {data == "en" ? (
          <>
            <img
              className="mobileview"
              style={{ marginTop: "-50px", display: "none" }}
              src={mobilebanner}
              alt="phone"
              width="100%"
            />
            <img
              className="desktopview"
              style={{ marginTop: "-25px" }}
              src={phoneHeader}
              alt="phone"
              width="100%"
            />

            <button
              onClick={() => {
                handleClick();
              }}
              className="btnn"
            >
              {t("form")}
            </button>
          </>
        ) : data == "ps" ? (
          <>
            <img
              className="mobileview"
              style={{ marginTop: "-50px", display: "none" }}
              src={mobilebannerps}
              alt="phone"
              width="100%"
            />
            <img
              className="desktopview"
              style={{ marginTop: "-25px" }}
              src={phoneHeaderps}
              alt="phone"
              width="100%"
            />

            <button
              onClick={() => {
                handleClick();
              }}
              style={{ marginLeft: "3%" }}
              className="btnn"
            >
              {t("form")}
            </button>
          </>
        ) : (
          <>
            <img
              className="mobileview"
              style={{ marginTop: "-50px", display: "none" }}
              src={mobilebannerur}
              alt="phone"
              width="100%"
            />
            <img
              className="desktopview"
              style={{ marginTop: "-25px" }}
              src={phoneHeaderur}
              alt="phone"
              width="100%"
            />

            <button
              onClick={() => {
                handleClick();
              }}
              style={{ marginLeft: "3%" }}
              className="btnn"
            >
              {t("form")}
            </button>
          </>
        )}
      </div>

      <div
        className="extradiv"
        style={{ marginTop: "-200px", display: "block" }}
      ></div>
      {/* <div style={{ marginTop: "-100px" }}></div> */}
    </section>
  );
};

export default Header;
