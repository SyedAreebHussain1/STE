import React, { Component } from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";
import Copyright from "./copyright";
import footerLogo from "../images/logofooter.png";
import appleImg from "../images/apple-footer.png";
import googleImg from "../images/google-footer.png";
import SocialLarge from "../section-components/social-large";
import CopyRightV2 from "./copyrightv2";
// import AOS from "aos";
// import "aos/dist/aos.css";
class Footer_v1 extends Component {
  componentDidMount() {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

    $(document).on("click", ".theme-btn-1 ", function () {
      $("div").removeClass("modal-backdrop");
      $("div").removeClass("show");
      $("div").removeClass("fade");
      $("body").attr("style", "");
    });
  }
  // componentDidMount() {

  //   AOS.init({
  //     duration: 1000,
  //   });

  // }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "Footer logo";

    return (
      <footer className="ltn__footer-area  ">
        <div
          className="footer-top-area  section-bg-2 plr--5"
        // data-aos="fade-up"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-6 col-12" style={{}}>
                <div className="footer-widget footer-about-widget">
                  <div
                    // style={{ backgroundColor: "black" }}
                    className="footer-logo go-top"
                  >
                    <div
                      // style={{ backgroundColor: "red" }}
                      className="site-logo go-top"
                    >
                      <Link to="/">
                        <img
                          style={{ width: "50%", marginLeft: "-9%" }}
                          src={footerLogo}
                          alt="Logo"
                        />
                      </Link>
                    </div>
                  </div>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the and typesetting
                    industry. Lorem Ipsum is dummy text of the printing.
                  </p> */}
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-placeholder" />
                        </div>
                        <div
                          className="footer-address-info"
                          style={{ cursor: "pointer" }}
                        >
                          <p
                          // onClick={() => {
                          //   window.open(
                          //     "https://www.google.com/maps/place/Miran+Mohammed+Shah+Rd,+Muhammad+Ali+Chs+(Machs),+Karachi,+Karachi+City,+Sindh/@24.8756046,67.0897168,21z/data=!4m6!3m5!1s0x3eb33eb38ab84d6f:0x23ff5d5fb3c0d7dd!8m2!3d24.8785713!4d67.0883437!16s%2Fg%2F12hs52yyg"
                          //   );
                          // }}
                          >
                            <a
                              target="_blank"
                              href="https://www.google.com/maps/place/Miran+Mohammed+Shah+Rd,+Muhammad+Ali+Chs+(Machs),+Karachi,+Karachi+City,+Sindh/@24.8756046,67.0897168,21z/data=!4m6!3m5!1s0x3eb33eb38ab84d6f:0x23ff5d5fb3c0d7dd!8m2!3d24.8785713!4d67.0883437!16s%2Fg%2F12hs52yyg"
                            >
                              {" "}
                              B-6 (C), Miran Mohammad Shah Road, M.A.C.H.S,
                              Karachi
                            </a>

                            {/* B-6 (C), Miran Mohammad Shah Road, M.A.C.H.S, Karachi */}
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-call" />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="tel:03311110379">0331-111-0379</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-mail" />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="mailto:example@example.com">
                              info@propertywallet.pk
                            </a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    style={{
                      marginTop: "3%",
                      display: "flex",
                      flexDirection: "row",
                      // justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <a href="http://bit.ly/400UobD" target="_blank">
                        <img
                          src={appleImg}
                          alt=""
                          style={{ width: "180px", height: "65px" }}
                        />
                      </a>
                    </div>
                    <div>
                      <a href="http://bit.ly/40cIpYz" target="_blank">
                        <img
                          src={googleImg}
                          alt=""
                          style={{
                            width: "180px",
                            marginLeft: "10%",
                            height: "65px",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  {/* <div className="ltn__social-media mt-20">
                    <Social />
                  </div> */}
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12" style={{}}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Services</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link className="link-color" to="/inventory-management">
                          Inventory Management
                        </Link>
                      </li>
                      <li>
                        <Link className="link-color" to="/staff-management">
                          Staff Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link-color"
                          to="/commission-management"
                        >
                          Commission Management
                        </Link>
                      </li>
                      <li>
                        <Link className="link-color" to="/report-management">
                          Report Management
                        </Link>
                      </li>
                      <li>
                        <Link className="link-color" to="/digital-tools">
                          Digital Tools
                        </Link>
                      </li>
                      <li>
                        <Link className="link-color" to="/sales-target">
                          Target Sales Management
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12" style={{}}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">About</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link className="link-color" to="/about">
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link className="link-color" to="/faq">
                          FAQS
                        </Link>
                      </li>
                      <li>
                        <Link className="link-color" to="/privacy">
                          Privacy policy
                        </Link>
                      </li>
                      <li>
                        <Link className="link-color" to="/terms">
                          Term of services
                        </Link>
                      </li>
                      <li>
                        <Link className="link-color" to="/how-to-use">
                          How to use
                        </Link>
                      </li>
                      <li>
                        <Link className="link-color" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12" style={{}}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Useful links</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link className="link-color" to="/pwform">
                          Pw Form
                        </Link>
                      </li>
                      <li>
                        <Link className="link-color" to="/invoice">
                          Invoice Checker
                        </Link>
                      </li>
                      <li>
                        <Link className="link-color" to="/login">
                          Partner Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Customer Care</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/my-account">My account</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">Wish List</Link>
                      </li>
                      <li>
                        <Link to="/add-listing">Add listing</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </p>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email*" />
                      <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit">
                          <i className="fas fa-location-arrow" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <h5 className="mt-30">We Accept</h5>
                  <img
                    src={publicUrl + "assets/img/icons/payment-4.png"}
                    alt="Payment Image"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <Copyright /> */}
        {/* <SocialLarge /> */}
        <CopyRightV2 />
      </footer>
    );
  }
}

export default Footer_v1;
