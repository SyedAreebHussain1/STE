import React, { useEffect } from "react";

import dasboard from "../../images/dasboard.png";
import aboutusmobile from "../../images/aboutusmobile.png";

// import checkIcon from "../../../../public/assets/img/icons/10.png"

import "./aboutV2.css";

import AOS from "aos";

import "aos/dist/aos.css";

const About_V2_View = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  let customClass = props.customClass ? props.customClass : "";

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="ltn__about-us-area  go-top areeb-show">
        <div
          className="flex justify-content-space-around"
          style={{ marginTop: "-8%", marginBottom: "5%", border: "" }}
        >
          <div id="hideMe" style={{ width: "35%", border: "", zIndex: "" }}>
            {/* <div className="row-card"> */}

            <div style={{ textAlign: "", marginTop: "22%" }}>
              <div className="card-mobilize" data-aos="zoom-out-left">
                <div className="ltn__contact-address-icon">
                  <img
                    style={{ height: "50px" }}
                    src={publicUrl + "assets/img/iconAbout/Reliable.png"}
                    alt="Icon Image"
                  />
                </div>

                <div className="freature-link-hover text-black">
                  <h3>We Are Reliable</h3>
                </div>

                <p className="text-gray-ad">
                  All your personal and business information is secure with us
                  and no one else will be able to access it without your
                  consent.
                </p>
              </div>
            </div>

            <br />

            <div className="" style={{ textAlign: "" }}>
              <div className="card-mobilize" data-aos="zoom-out-left">
                <div className="ltn__contact-address-icon">
                  <img
                    style={{ height: "50px" }}
                    src={publicUrl + "assets/img/iconAbout/Teamwork.png"}
                    alt="Icon Image"
                  />
                </div>

                <div className="freature-link-hover text-black">
                  <h3>We Encourage Teamwork</h3>
                </div>

                <p className="text-gray-ad">
                  We believe big things can be achieved through collaboration
                  and cooperation and aim to facilitate businesses through
                  better communication within teams.
                </p>
              </div>
            </div>

            {/* </div> */}
          </div>

          {/*  */}

          <div
            className="flex justify-content-space-center mobile-size-none"
            style={{ border: "", zIndex: "999" }}
          >
            <div className="flex " style={{ width: "75%", border: "" }}>
              <div>
                <img
                  style={{ marginTop: "-37%" }}
                  className="mobile-animation"
                  src={aboutusmobile}
                />{" "}
              </div>
            </div>
          </div>

          {/*  */}

          <div
            id="hideMe"
            style={{ width: "35%", border: "", textAlign: "", zIndex: "" }}
          >
            <div className="" style={{ textAlign: "", marginTop: "22%" }}>
              <div className="card-mobilize" data-aos="zoom-out-right">
                <div className="ltn__contact-address-icon">
                  <img
                    style={{ height: "50px" }}
                    src={publicUrl + "assets/img/iconAbout/Transparency.png"}
                    alt="Icon Image"
                  />
                </div>

                <div className="freature-link-hover text-black">
                  <h3>We Are Transparent</h3>
                </div>

                <p className="text-gray-ad">
                  We won’t keep you in the dark. We choose to be transparent in
                  our processes and openly communicate any changes that may
                  arise.
                </p>
              </div>
            </div>

            <br />

            <div style={{ textAlign: "" }}>
              <div className="card-mobilize" data-aos="zoom-out-right">
                <div className="ltn__contact-address-icon">
                  <img
                    style={{ height: "50px" }}
                    src={publicUrl + "assets/img/iconAbout/Secure.png"}
                    alt="Icon Image"
                  />
                </div>

                <div className="freature-link-hover text-black">
                  <h3>We Are Safe & Secure</h3>
                </div>

                <p className="text-gray-ad">
                  We priorities user safety and security. Property wallet
                  protects sensitive data and user information with encryption
                  and other security methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE COMPONENT */}

      <div className={customClass}>
        <div
          className="container areeb-block"
          style={{ display: "none", width: "" }}
        >
          <div
            className="row ltn__custom-gutter--- justify-content-center go-top"

            // style={{ width:'100%' }}
          >
            <div className="col-lg-4 col-sm-6 col-12" data-aos="flip-right">
              <div className="ltn__feature-item ltn__feature-item-6 bg-white  box-shadow-1 active features_v1_height">
                <div className="ltn__feature-icon">
                  <img
                    style={{ height: "50px" }}
                    src={publicUrl + "assets/img/iconAbout/Reliable.png"}
                    alt="#"
                  />
                </div>

                <div className="ltn__feature-info">
                  <h3>
                    <div
                      className="freature-link-hover"
                      style={{ color: "black" }}

                      // to="/service-details"
                    >
                      We Are Reliable
                    </div>
                  </h3>

                  <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                    All your personal and business information is secure with us
                    and no one else will be able to access it without your
                    consent.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-12" data-aos="flip-right">
              <div className="ltn__feature-item ltn__feature-item-6 bg-white  box-shadow-1 active features_v1_height">
                <div className="ltn__feature-icon">
                  <img
                    style={{ height: "50px" }}
                    src={publicUrl + "assets/img/iconAbout/Teamwork.png"}
                    alt="#"
                  />
                </div>

                <div className="ltn__feature-info">
                  <h3>
                    <div
                      className="freature-link-hover"
                      style={{ color: "black" }}

                      // to="/service-details"
                    >
                      We Encourage Teamwork
                    </div>
                  </h3>

                  <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                    We believe big things can be achieved through collaboration
                    and cooperation and aim to facilitate businesses through
                    better communication within teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-12" data-aos="flip-right">
              <div className="ltn__feature-item ltn__feature-item-6 bg-white box-shadow-1 features_v1_height">
                <div className="ltn__feature-icon">
                  <img
                    style={{ height: "50px" }}
                    src={publicUrl + "assets/img/iconAbout/Transparency.png"}
                    alt="#"
                  />
                </div>

                <div className="ltn__feature-info">
                  <h3>
                    <div
                      className="freature-link-hover"
                      style={{ color: "black" }}

                      // to="/service-details"
                    >
                      We Are Transparent
                    </div>
                  </h3>

                  <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                    We won’t keep you in the dark. We choose to be transparent
                    in our processes and openly communicate any changes that may
                    arise.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-12" data-aos="flip-right">
              <div className="ltn__feature-item ltn__feature-item-6 bg-white box-shadow-1 features_v1_height">
                <div className="ltn__feature-icon">
                  <img
                    style={{ height: "50px" }}
                    src={publicUrl + "assets/img/iconAbout/Secure.png"}
                    alt="#"
                  />
                </div>

                <div className="ltn__feature-info">
                  <h3>
                    <div
                      className="freature-link-hover"
                      style={{ color: "black" }}

                      // to="/service-details"
                    >
                      We Are Safe & Secure
                    </div>
                  </h3>

                  <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                    We priorities user safety and security. Property wallet
                    protects sensitive data and user information with encryption
                    and other security methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_V2_View;
