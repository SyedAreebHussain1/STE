import React, { useState, useEffect } from "react";
import BannerService from "../images/customerVer.mp4";
// import {
//     BrowserRouter as Router, Link
// } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreServiceCustomerVerification = (props) => {
  const headingLarge =
    "Ensuring Authentic Property Ownership and Documentation through Robust Security Measures";
  const pera =
    "Property Wallet goes above and beyond to provide comprehensive security measures that safeguard the authenticity of property ownership and documentation. Our multifaceted approach includes";

  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  let publicUrl = process.env.PUBLIC_URL + "/";

  let customClass = props.customClass ? props.customClass : "";
  let CustomClass = props.customclass ? props.customclass : "";

  return (
    <>
      <div
        className={" bg-white " + CustomClass}
        style={{
          border: "",
          marginLeft: "1%",
          marginRight: "1%",
          marginTop: "",
        }}
      >
        <div
          className="row ltn__custom-gutter--- justify-content-center go-top bg-white"
          style={{ border: "", marginLeft: "1%", marginRight: "1%" }}
          data-aos="fade-up"
        >
          <div className=" col-lg-6 col-sm-8 col-12">
            <div className="ltn__feature-item ">
              <div className="ltn__feature-info">
                <div
                  className=""
                  style={{
                    margin: 0,
                    padding: 0,
                    boxSizing: "border-box",
                    scrollBehavior: "smooth",
                    width: "100%",
                  }}
                >
                  <video
                    style={iOS ? { width: "100%" } : { width: "100%" }}
                    className="videoTag"
                    playsInline
                    autoPlay
                    loop
                    muted
                  >
                    <source src={BannerService} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-8 col-12">
            <div className="ltn__feature-item">
              <div className="ltn__feature-info">
                <h3>
                  <div className="text_Quick" style={{ fontSize: "2rem" }}>
                    {headingLarge}
                    {/* <div className="curve"></div> */}
                  </div>
                </h3>
                <p
                  className="text-gray-ad"
                  style={{ fontSize: "17px", marginTop: "5%" }}
                >
                  {pera}
                </p>
                <div className="block-flex" style={{ display: "" }}>
                  {/* <ul>
                                        <li>Face Recognition: Cutting-edge facial recognition technology verifies the identity of individuals involved in property transactions, adding an extra layer of trust.</li>
                                        <li>Digital Fingerprint Recognition: Precise fingerprint recognition ensures that only authorized individuals have access to critical property-related information.</li>
                                        <li>Digital Signature: Secure digital signatures authenticate documents, making them tamper-proof and legally binding.</li>
                                        <li>CNIC Verification: We cross-reference provided CNIC (Computerized National Identity Card) details for accuracy and verification, minimizing the risk of identity fraud.</li>
                                        <li>Video Recognition: Our video recognition technology confirms the identity of parties involved by matching live images to authorized records.</li>
                                        <li>Digital Image: Secure digital images and documentation are used to maintain the integrity and authenticity of property-related records.</li>
                                    </ul> */}

                  <div>
                    <ul style={{ listStyle: "" }}>
                      <li>
                        CNIC Verification: We cross-reference provided CNIC
                        (Computerized National Identity Card) details for
                        accuracy and verification, minimizing the risk of
                        identity fraud.
                      </li>
                      <li>
                        Video Recognition: Our video recognition technology
                        confirms the identity of parties involved by matching
                        live images to authorized records.
                      </li>
                      <li>
                        Digital Image: Secure digital images and documentation
                        are used to maintain the integrity and authenticity of
                        property-related records.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul style={{ listStyle: "" }}>
                      <li>
                        Face Recognition: Cutting-edge facial recognition
                        technology verifies the identity of individuals involved
                        in property transactions, adding an extra layer of
                        trust.
                      </li>
                      <li>
                        Digital Fingerprint Recognition: Precise fingerprint
                        recognition ensures that only authorized individuals
                        have access to critical property-related information.
                      </li>
                      <li>
                        Digital Signature: Secure digital signatures
                        authenticate documents, making them tamper-proof and
                        legally binding.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="btn-wrapper animated"
                            >
                                <Link
                                    to="/contact"
                                    className="theme-btn-1 btn btn-effect-1 learnMore"
                                >Contact Us
                                </Link>
                                <Link
                                    // to="/how-to-use"
                                    to="#"
                                    className="theme-btn-1 btn btn-effect-1 learnMore"
                                >How to use
                                </Link>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreServiceCustomerVerification;
