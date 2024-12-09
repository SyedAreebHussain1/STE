import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import qrImg from "../images/qrcode.png";
import appleImg from "../images/apple.png";
import googleImg from "../images/google.png";
import mobileleft from "../images/bykea.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const DownloadApp = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  let CustomClass = props.customClass ? props.customClass : "";
  return (
    <div className={"ltn__apartments-plan-area pt-115--- pb-70 " + CustomClass}>
      <div className="container">
        <div style={{ marginLeft: "5%", marginRight: "5%" }} className="row">
          <div
            data-aos="fade-right"
            style={{ marginTop: "11%" }}
            className="col-lg-6"
          >
            <h5 style={{ color: "grey" }}>Why Choose Property Wallet?</h5>
            <h3 style={{ color: "black" }}>We Are Reliable</h3>
            <p>
              All your personal and business information is secure with us and
              no one else will be able to access it without your consent.
            </p>
            {/* <br /> */}
            <h3 style={{ color: "black" }}>We Encourage Teamwork</h3>
            <p>
              We believe big things can be achieved through collaboration and
              cooperation and aim to facilitate businesses through better
              communication within teams.
            </p>
            <h3 style={{ color: "black" }}>We Are Transparent</h3>
            <p>
              We won’t keep you in the dark. We choose to be transparent in our
              processes and openly communicate any changes that may arise.
            </p>
            <div
              style={{
                marginTop: "3%",
                display: "flex",
                flexDirection: "row",
                // justifyContent: "space-between",
              }}
            >
              <div>
                <a
                  // href="https://play.google.com/store/apps/details?id=org.zam.automark"
                  target="_blank"
                >
                  <img
                    src={appleImg}
                    alt=""
                    style={{ width: "180px", height: "50px" }}
                  />
                </a>
              </div>
              <div>
                <a
                  // href="https://play.google.com/store/apps/details?id=org.zam.automark"
                  target="_blank"
                >
                  <img
                    src={googleImg}
                    alt=""
                    style={{
                      width: "180px",
                      marginLeft: "10%",
                      height: "50px",
                    }}
                  />
                </a>
              </div>
            </div>
            {/* <div className="apartments-plan-info ltn__secondary-bg---  text-color-white---">
              <h2
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                DOWNLOAD APP
              </h2>
              <div style={{ marginTop: "3%" }} className="row">
                <div style={{ marginTop: "8%" }} className="col-lg-6">
                  <a
                    href="https://play.google.com/store/apps/details?id=org.zam.automark"
                    target="_blank"
                  >
                    <img
                      src={appleImg}
                      alt=""
                      // style={{ width: "205px", margin: 20, height: "60px" }}
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=org.zam.automark"
                    target="_blank"
                  >
                    <img
                      src={googleImg}
                      alt=""
                      style={{ marginTop: "4%" }}
                      // style={{ width: "205px", margin: 20, height: "60px" }}
                    />
                  </a>
                </div>
                <div style={{}} className="col-lg-6">
                  <img
                    src={qrImg}
                    alt=""
                    // style={{ width: "205px", margin: 20, height: "60px" }}
                  />
                </div>
              </div>
              <div style={{ marginTop: "5%" }}>
                <Link to="/about" className="theme-btn-1 btn btn-effect-1">
                  Watch tutorial
                </Link>
                <a
                  className="ltn__video-play-btn-down bg-white"
                  href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0"
                  data-rel="lightcase"
                >
                  <i className="icon-play" style={{ color: "#27A3A3" }} />
                </a>
              </div>
            </div> */}
          </div>
          <div className="col-lg-6">
            <div
              data-aos="fade-left"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10%",
              }}
              className="apartments-plan-img"
            >
              <img
                style={{ width: "90%", height: "90%" }}
                src={mobileleft}
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
