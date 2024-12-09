import React, { useState, useEffect } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import { Link, withRouter, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import loog from "../../assets/khyber logo.png";
import loog1 from "../../assets/flb.png";
import loog2 from "../../assets/khyber logo(1).png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { languageSuccess } from "../../redux/userSlice";
import { detect } from "detect-browser";
const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [defaultlang, setDefaultLang] = useState(true);
  const [stickyClass, setStickyClass] = useState("");
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.language.lang);
  const brow = detect();
  const { pathname } = useLocation();
  const changeLang = (val) => {
    dispatch(languageSuccess({ lang: val }));
    i18n.changeLanguage(val);
    // console.log(val)
    // if(val=='ur'){
    //   dispatch(languageSuccess({ lang:val }));

    //   setDefaultLang(false)
    //   i18n.changeLanguage(val);
    //   // localStorage.setItem("lan", "فارم جلد ہی دستیاب ہوں گے");
    // }
    // else{
    //   setDefaultLang(true)
    //   dispatch(languageSuccess({ lang:val }));
    //   // localStorage.setItem("lan", "Forms will be available soon");

    //   i18n.changeLanguage(val);
    // }
  };
  useEffect(() => {
    if (props.sticky === "*") {
      setStickyClass("sticky-nav");
    }
    console.log("path name", pathname);
    console.log("BORDSWES", brow.name);
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 100 || props.sticky === "*"
        ? setStickyClass("sticky-nav")
        : setStickyClass("");
    }
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

  return (
    <div>
      <nav
        // className="navbar"
        className={
          // `navbar1  ${stickyClass}`
          pathname === "/"
            ? `navbar1  ${stickyClass}`
            : `navbar  ${stickyClass}`
        }
      >
        <div
          className={stickyClass ? "" : "breakpointforLogo"}
          style={
            stickyClass && iOS
              ? { marginTop: "0" }
              : stickyClass
              ? { marginTop: "1.5%" }
              : {
                  marginTop: "10%",
                  // backgroundColor: "red",
                  maxWidth: "300px",
                }
          }
        >
          <Link to="/">
            {iOS ? (
              <>
                <img
                  src={stickyClass ? loog2 : loog}
                  alt="phone"
                  width={stickyClass ? "50%" : "50%"}
                  style={
                    stickyClass
                      ? {
                          objectFit: "contain",
                          marginTop: "4.5%",
                          marginLeft: "-13%",
                        }
                      : {
                          objectFit: "contain",
                          marginTop: "-8%",
                          marginLeft: "-12%",
                        }
                  }
                  height={stickyClass ? 80 : 80}
                />
              </>
            ) : isAndroid ? (
              <>
                <img
                  src={stickyClass ? loog2 : loog}
                  alt="phone"
                  width={stickyClass ? "50%" : "50%"}
                  style={
                    stickyClass
                      ? {
                          objectFit: "contain",
                          // marginTop: "4.5%",
                          // marginLeft: "-13%",
                        }
                      : {
                          objectFit: "contain",
                          marginTop: "-14%",
                          // marginLeft: "-12%",
                        }
                  }
                  height={stickyClass ? 150 : 150}
                />
              </>
            ) : (
              <>
                <img
                  // className={isSafari && iOS ? "safarimobile" : "androidmobile"}
                  className={
                    isSafari && iOS
                      ? "safarimobile"
                      : stickyClass
                      ? "androidmobile"
                      : "androidmobile breakpointforlogoimg"
                  }
                  src={stickyClass ? loog1 : loog}
                  alt="phone"
                  width={brow.name == "safari" ? "27%" : "100%"}
                  style={
                    brow.name == "safari"
                      ? {
                          objectFit: "contain",
                          marginTop: "6%",
                          display: "none",
                        }
                      : {
                          marginTop: "6%",
                          objectFit: "contain",
                          display: "none",
                        }
                  }
                  height={stickyClass ? 100 : 180}
                />
                <img
                  className={
                    isSafari && iOS
                      ? "safarimobile"
                      : stickyClass
                      ? "androidmobile1"
                      : "androidmobile1 breakpointforlogoimg"
                  }
                  src={stickyClass ? loog1 : loog}
                  alt="phone"
                  // width={brow.name == "safari" ? "27%" : "100%"}
                  style={
                    brow.name == "safari"
                      ? {
                          // objectFit: "cover",
                          marginTop: stickyClass ? "0%" : "0%",
                          display: "block",
                          width: stickyClass ? "" : "50%",
                          height: stickyClass ? 100 : "50%",
                        }
                      : {
                          // marginTop: stickyClass ? "0%" : "0%",
                          // objectFit: "cover",
                          display: "block",
                          width: stickyClass ? "" : "50%",
                          height: stickyClass ? 100 : "50%",
                          // backgroundColor: "red",
                        }
                  }
                  // height={stickyClass ? 100 : "auto"}
                />
              </>
            )}
          </Link>
        </div>
        <menu>
          <ul
            style={
              data == "ur" || data == "ps" ? { fontFamily: "JameelNoori" } : {}
            }
            className="nav-links"
            id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
          >
            <li>
              <Link className={stickyClass ? "navlinkfontsize" : ""} to="/">
                {t("home")}
              </Link>
              {/* <a href="#">Home</a> */}
            </li>
            <li>
              <Link
                className={stickyClass ? "navlinkfontsize" : ""}
                to="/about"
              >
                {t("au")}
              </Link>
              {/* <a href="#">About Us</a> */}
            </li>
            <li>
              <Link
                className={stickyClass ? "navlinkfontsize" : ""}
                to="/Project-facilities"
              >
                {t("pf")}
              </Link>
              {/* <a href="/project">Project Facilities</a> */}
            </li>
            <li>
              <Link
                className={stickyClass ? "navlinkfontsize" : ""}
                to="/special-projects"
              >
                {t("sp")}
              </Link>
              {/* <a href="#">Special Projects</a> */}
            </li>
            <li>
              <Link
                className={stickyClass ? "navlinkfontsize" : ""}
                to="/location"
              >
                {t("pr")}
              </Link>
              {/* <a href="#">Project Location</a> */}
            </li>
            <li>
              <Link
                className={stickyClass ? "navlinkfontsize pos-nav" : "pos-nav"}
                to="/76elites"
              >
                {/* Luxury Resorts{" "} lux2 */}
                {t("lux2")}
                <span
                  // style={{ marginBottom: -5 }}
                  // className="blink-btn"
                  className="new-btn-blink"
                >
                  New
                </span>
              </Link>

              {/* <a href="#">Project Location</a> */}
            </li>

            <li>
              <Link
                className={stickyClass ? "navlinkfontsize" : ""}
                to="/contact"
              >
                {t("con")}
              </Link>
              {/* <Link to="/location">Contact</Link> */}
              {/* <a className="navlinkfontsize" href="#contact">
              {t("con")}
            </a> */}
            </li>

            <li>
              {/* <a href="#">Zaman</a> */}
              {data == "en" ? (
                <>
                  <a
                    className={stickyClass ? "navlinkfontsize" : ""}
                    style={
                      brow.name == "safari"
                        ? {
                            fontSize: "12px",
                            cursor: "pointer",
                            // fontFamily: "JameelNoori",
                          }
                        : {
                            cursor: "pointer",
                            // fontFamily: "JameelNoori"
                          }
                    }
                    onClick={() => {
                      changeLang("ur");
                    }}
                  >
                    اردو
                  </a>
                  {/* <a
                    className={stickyClass ? "navlinkfontsize" : ""}
                    style={
                      brow.name == "safari"
                        ? {
                            fontSize: "12px",
                            cursor: "pointer",
                            // fontFamily: "JameelNoori",
                          }
                        : {
                            cursor: "pointer",
                            //  fontFamily: "JameelNoori"
                          }
                    }
                    onClick={() => {
                      changeLang("ps");
                    }}
                  >
                    پشتو
                  </a>
                </>
              ) : data == "ur" ? (
                <>
                  <a
                    className={stickyClass ? "navlinkfontsize" : ""}
                    style={{
                      cursor: "pointer",
                      //  fontFamily: "JameelNoori"
                    }}
                    onClick={() => {
                      changeLang("ps");
                    }}
                  >
                    پشتو
                  </a> */}
                  <a
                    className={stickyClass ? "navlinkfontsize" : ""}
                    style={{
                      cursor: "pointer",
                      //  fontFamily: "Poppins"
                    }}
                    onClick={() => {
                      changeLang("en");
                    }}
                  >
                    English
                  </a>
                </>
              ) : (
                <>
                  <a
                    className={stickyClass ? "navlinkfontsize" : ""}
                    style={{
                      cursor: "pointer",
                      //  fontFamily: "JameelNoori"
                    }}
                    onClick={() => {
                      changeLang("ur");
                    }}
                  >
                    اردو
                  </a>
                  <a
                    className={stickyClass ? "navlinkfontsize" : ""}
                    style={{
                      cursor: "pointer",
                      // fontFamily: "Poppins"
                    }}
                    onClick={() => {
                      changeLang("en");
                    }}
                  >
                    English
                  </a>
                </>
              )}
            </li>

            {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
            {/* <li className="nav-btn">
            <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"} />
          </li> */}
          </ul>
        </menu>
        <div className="menu-icons" onClick={toggleMenu}>
          {showMenu ? (
            <RiCloseLine
              className="men-uicon"
              color={stickyClass ? "black" : "#fff"}
              size={30}
            />
          ) : (
            <AiOutlineBars
              className="men-uicon"
              color={stickyClass ? "black" : "#fff"}
              size={27}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
