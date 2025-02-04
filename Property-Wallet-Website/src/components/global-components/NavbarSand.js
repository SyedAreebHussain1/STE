import React, { useState } from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";
import AOS from "aos";
import { useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
const NavbarSand = ({ CustomClass, location }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let customClass = CustomClass ? CustomClass : "";
  const [istrue, setistrue] = useState(false);

  const [icon, setIcon] = useState(false);
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    if (location?.pathname === "/crm") {
      setIcon(true);
    } else {
      setIcon(false);
    }
  }, []);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [localStorage]);

  return (
    <>
      <div>
        <header
          className={
            "ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4--- " +
            customClass
          }
          style={{
            paddingLeft: "",
            paddingRight: "",
          }}
        >
          {/* ltn__header-top-area start */}

          <div className="ltn__header-top-area d-none">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                          <i className="icon-mail" /> info@webmail.com
                        </a>
                      </li>
                      <li>
                        <a href="locations.html">
                          <i className="icon-placeholder" /> 15/A, Nest Tower,
                          NYC
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="top-bar-right text-end">
                    <div className="ltn__top-bar-menu">
                      <ul>
                        <li>
                          {/* ltn__language-menu */}
                          <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                            <ul>
                              <li>
                                <a href="#" className="dropdown-toggle">
                                  <span className="active-currency">
                                    English
                                  </span>
                                </a>
                                <ul>
                                  <li>
                                    <Link to="#">Arabic</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Bengali</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Chinese</Link>
                                  </li>
                                  <li>
                                    <Link to="#">English</Link>
                                  </li>
                                  <li>
                                    <Link to="#">French</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Hindi</Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <Social />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__header-top-area end */}
          {/* ltn__header-middle-area start */}
          <div
            className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white"
            style={{}}
          >
            <div
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <div className="row">
                <div className="col">
                  <div className="site-logo-wrap">
                    <div className="site-logo go-top">
                      <Link to="/">
                        {icon ? (
                          <img
                            className="logo-mobile"
                            src={publicUrl + "assets/img/mianlogocrm3.png"}
                            alt="Logo"
                          />
                        ) : (
                          <img
                            className="logo-mobile"
                            src={publicUrl + "assets/img/mainlogoov3.png"}
                            alt="Logo"
                          />
                        )}
                      </Link>
                    </div>
                    <div className="get-support clearfix d-none">
                      <div className="get-support-icon">
                        <i className="icon-call" />
                      </div>
                      <div className="get-support-info">
                        <h6>Get Support</h6>
                        <h4>
                          <a href="tel:+123456789">123-456-789-10</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col header-menu-column">
                  <div className="header-menu d-none d-xl-block go-top">
                    <nav>
                      <div className="ltn__main-menu">
                        <ul>
                          <li
                            style={{ fontSize: "18px" }}
                            className="menu-icon"
                          >
                            <Link to="/">Home</Link>
                          </li>
                          <li
                            style={{ fontSize: "18px" }}
                            className="menu-icon"
                          >
                            <Link to="/about">About</Link>
                          </li>
                          <li
                            style={{ fontSize: "18px" }}
                            className="menu-icon"
                          >
                            <Link to="/property-wallet-app">
                              {" "}
                              Property Wallet App{" "}
                            </Link>
                          </li>
                          <li
                            style={{ fontSize: "18px" }}
                            className="menu-icon"
                          >
                            <Link to="/smart-point">Smart Point</Link>
                          </li>
                          <li
                            style={{ fontSize: "18px" }}
                            className="menu-icon"
                          >
                            <Link to="/pricing">Pricing</Link>
                          </li>
                          <li className="menu-icon">
                            <Link to="">
                              Other Products{" "}
                              <span
                                style={{
                                  fontSize: "0.9rem",
                                  display: "inline-block",
                                  marginBottom: "6px",
                                  marginLeft: "-2px",
                                  width: "14px",
                                  height: "16px",
                                  fontWeight: "bold",
                                }}
                              >
                                {" "}
                                <DownOutlined />
                              </span>
                            </Link>
                            <ul
                              style={{
                                display: "flex",
                                height: "55px",
                                marginLeft: "-180px",
                              }}
                            >
                              <li style={{ marginTop: "-9px" }}>
                                <Link
                                  to="/verification-app"
                                  className="canvas-btn flex"
                                  style={{ padding: "5px" }}
                                >
                                  <div
                                    className="canvas-upper-link"
                                    style={{ fontSize: "18px" }}
                                  >
                                    <button
                                      className="canvas-link-btn"
                                      style={{ fontWeight: "400" }}
                                    >
                                      Customer Verification App
                                    </button>
                                  </div>
                                </Link>
                              </li>
                              <li style={{ marginTop: "-9px" }}>
                                <Link
                                  to="/crm"
                                  className="canvas-btn flex"
                                  style={{ padding: "5px" }}
                                >
                                  <div
                                    className="canvas-upper-link"
                                    style={{ fontSize: "18px" }}
                                  >
                                    <button
                                      className="canvas-link-btn"
                                      style={{ fontWeight: "400" }}
                                    >
                                      Property Wallet CRM
                                    </button>
                                  </div>
                                </Link>
                              </li>
                              {/* <li style={{ marginTop: "-9px" }}>
                                <Link
                                  to="/service"
                                  className="canvas-btn flex"
                                  style={{ padding: "5px" }}
                                >
                                  <div
                                    className="canvas-upper-link"
                                    style={{ fontSize: "18px" }}
                                  >
                                    <button
                                      className="canvas-link-btn"
                                      style={{ fontWeight: "400" }}
                                    >
                                      Property Wallet App
                                    </button>
                                  </div>
                                </Link>
                              </li> */}
                            </ul>
                          </li>
                          {/* <li
                                                        className="special-link menu-icon" style={{ marginLeft: "" }}
                                                    >
                                                        <Link to="/service" className="theme-btn-1 btn btn-effect-1"><span>

                                                            Property Wallet App </span> </Link>
                                                        <ul>
                                                            <li className="cursor-pointer" style={{ fontWeight: '600', color: "#071c1f", fontSize: "18px", whiteSpace: 'nowrap' }}>

                                                                <span onClick={() => handleNavigate('/about')}>Silver Agency</span>

                                                            </li>
                                                            <li className="cursor-pointer" style={{ fontWeight: '600', color: "#071c1f", fontSize: "18px", whiteSpace: 'nowrap' }}>
                                                                <span onClick={() => handleNavigate('/about')}>Gold Agency</span>

                                                            </li>
                                                            <li className="cursor-pointer" style={{ fontWeight: '600', color: "#071c1f", fontSize: "18px", whiteSpace: 'nowrap' }}>
                                                                <span onClick={() => handleNavigate('/about')}>Platinum Agency</span>

                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li
                                                        className="special-link  menu-icon"
                                                    >
                                                        <Link
                                                            to="/smart-point"
                                                            className="theme-btn-1 btn btn-effect-1"
                                                        >
                                                            <span style={{ marginLeft: "" }}>
                                                                Smart Point</span>
                                                        </Link>
                                                        <ul>
                                                            <li className="cursor-pointer" style={{ fontWeight: '600', color: "#071c1f", fontSize: "18px", whiteSpace: 'nowrap' }}>

                                                                <span onClick={() => handleNavigate('/about')}>Smart Point Plus</span>

                                                            </li>
                                                            <li className="cursor-pointer" style={{ fontWeight: '600', color: "#071c1f", fontSize: "18px", whiteSpace: 'nowrap' }}>
                                                                <span onClick={() => handleNavigate('/about')}>Smart Point Lounge</span>
                                                            </li>
                                                        </ul>
                                                    </li> */}

                          <li className="special-link ">
                            <Link
                              to="/pricing"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              <span>Become a Property Wallet Partner</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col--- ltn__header-options ltn__header-options-2 ">
                  {/* Mobile Menu Button */}
                  <div
                    className={`mobile-menu-toggle d-xl-none ${
                      istrue && "d-none"
                    }`}
                  >
                    <a
                      href="#ltn__utilize-mobile-menu"
                      className="ltn__utilize-toggle"
                      onClick={() => setistrue(true)}
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        />
                        <path d="M300,320 L540,320" id="middle" />
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        />
                      </svg>
                    </a>
                  </div>
                  <button
                    className={`ltn__utilize-close ${!istrue && "d-none"}`}
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "white",
                      boxShadow: "0px 16px 32px 0px rgba(7, 28, 31, 0.1)",
                      fontSize: "30px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                    onClick={() => setistrue(false)}
                  >
                    x
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__header-middle-area end */}
        </header>
        <div
          id="ltn__utilize-mobile-menu"
          className="ltn__utilize ltn__utilize-mobile-menu"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <div className="site-logo">
                <Link to="/">
                  {icon ? (
                    <img src={publicUrl + "assets/img/1a.png"} alt="Logo" />
                  ) : (
                    <img src={publicUrl + "assets/img/1b.png"} alt="Logo" />
                  )}
                </Link>
              </div>
              <button className="ltn__utilize-close"></button>
            </div>

            <div className="ltn__utilize-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/property-wallet-app">Property Wallet App</Link>
                </li>
                <li>
                  <Link to="/smart-point">Smart Point</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/about">Other Product</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/verification-app">
                        Customer Verification App
                      </Link>
                    </li>
                    <li>
                      <Link to="/crm">Property Wallet CRM</Link>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <Link to="/smart-point">Document</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/pwform">Pw Form</Link>
                    </li>
                    <li>
                      <Link to="/invoice">Invoice Checker</Link>
                    </li>
                    <li>
                      <Link to="/login">Partner Login</Link>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <Link to="/pricing">Become a PW Partner</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarSand;
