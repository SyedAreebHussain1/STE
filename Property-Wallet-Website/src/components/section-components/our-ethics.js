import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import parse from "html-react-parser";
// import qrImg from "../images/qrcode.png";
// import appleImg from "../images/apple.png";
// import googleImg from "../images/google.png";
// import mobileleft from "../images/mobilesidebar.png";
export const OurEthics = () => {
  return (
    <div className=" topspace bottomspace"  data-aos="fade-up">
      <h1
        style={{ textAlign: "center", color: "#27A3A3" }}
        className="page-title"
      >
        Our work
      </h1>

      {/* ETHICS START */}
      <div
        style={{ marginTop: "2%" }}
        className={"ltn__apartments-plan-area pt-115--- pb-70 "}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <div className="section-title-area ltn__section-title-2--- text-center">
            <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
              Apartment Sketch
            </h6>
            <h1 className="section-title">Apartments Plan</h1>
          </div> */}
              <div className="ltn__tab-menu ltn__tab-menu-3-ethics ltn__tab-menu-top-right-- text-uppercase--- text-center">
                <div className="nav">
                  <a
                    className="active show eth"
                    data-bs-toggle="tab"
                    href="#liton_tab_3_2"
                    style={{
                      // backgroundColor: "#27A3A3",
                      padding: "20px",
                      width: "70px",
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    E
                  </a>

                  <a
                    className="eth"
                    style={{
                      // backgroundColor: "#27A3A3",
                      padding: "20px",
                      width: "70px",
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                    data-bs-toggle="tab"
                    href="#liton_tab_3_1"
                  >
                    T
                  </a>
                  <a
                    className="eth"
                    style={{
                      // backgroundColor: "#27A3A3",
                      padding: "20px",
                      width: "70px",
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                    data-bs-toggle="tab"
                    href="#liton_tab_3_3"
                  >
                    H
                  </a>
                  <a
                    className="eth"
                    style={{
                      // backgroundColor: "#27A3A3",
                      padding: "20px",
                      width: "70px",
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                    data-bs-toggle="tab"
                    href="#liton_tab_3_4"
                  >
                    I
                  </a>
                  <a
                    className="eth"
                    style={{
                      // backgroundColor: "#27A3A3",
                      padding: "20px",
                      width: "70px",
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                    data-bs-toggle="tab"
                    href="#liton_tab_3_5"
                  >
                    C
                  </a>
                  <a
                    className="eth"
                    style={{
                      // backgroundColor: "#27A3A3",
                      padding: "20px",
                      width: "70px",
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                    data-bs-toggle="tab"
                    href="#liton_tab_3_6"
                  >
                    S
                  </a>
                  {/* <a data-bs-toggle="tab" href="#liton_tab_3_5">
                Double Height
              </a> */}
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade" id="liton_tab_3_1">
                  <div className="ltn__apartments-tab-content-inner">
                    <div
                      style={{ marginLeft: "10%", marginRight: "10%" }}
                      className="row"
                    >
                      <h4 className="title-2" style={{ color: "#27A3A3" }}>
                        Transparency
                      </h4>
                      <p className="text-gray-ad" style={{color: "", fontSize: "20px" }}>
                        The Property Wallet app is open and straightforward. No
                        information is to be withheld from the users. We are
                        entirely transparent about our processes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade active show" id="liton_tab_3_2">
                  <div className="ltn__product-tab-content-inner">
                    <div
                      style={{ marginLeft: "10%", marginRight: "10%" }}
                      className="row"
                    >
                      <h4 className="title-2" style={{ color: "#27A3A3" }}>
                        Efficiency
                      </h4>
                      <p className="text-gray-ad" style={{color: "", fontSize: "20px" }}>
                        To help you run your business hassle-free, we offer
                        services that enable you to manage your operations in a
                        well-structured and organized manner for greater
                        efficiency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_3">
                  <div className="ltn__product-tab-content-inner">
                    <div
                      style={{ marginLeft: "10%", marginRight: "10%" }}
                      className="row"
                    >
                      <h4 className="title-2" style={{ color: "#27A3A3" }}>
                        Honesty
                      </h4>
                      <p className="text-gray-ad" style={{ color: "", fontSize: "20px" }}>
                        Property Wallets puts loads of effort into fostering
                        user trust and loyalty. We value honesty and ensure
                        there is no room for false claims, cheating and theft in
                        our business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_4">
                  <div className="ltn__product-tab-content-inner">
                    <div
                      style={{ marginLeft: "10%", marginRight: "10%" }}
                      className="row"
                    >
                      <h4 className="title-2" style={{ color: "#27A3A3" }}>
                        Innovation
                      </h4>
                      <p className="text-gray-ad" style={{ color: "", fontSize: "20px" }}>
                        We strive to innovate and provide you with the best
                        service. We believe in continuously innovating by
                        including new app features that would enable users to
                        use this app to its full potential.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_5">
                  <div className="ltn__product-tab-content-inner">
                    <div
                      style={{ marginLeft: "10%", marginRight: "10%" }}
                      className="row"
                    >
                      <h4 className="title-2" style={{ color: "#27A3A3" }}>
                        Collaboration
                      </h4>
                      <p className="text-gray-ad" style={{ color: "", fontSize: "20px" }}>
                        Property Wallet fosters collaboration for which we have
                        developed features that would help us in creating a
                        supportive network among app users.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_6">
                  <div className="ltn__product-tab-content-inner">
                    <div
                      style={{ marginLeft: "10%", marginRight: "10%" }}
                      className="row"
                    >
                      <h4 className="title-2" style={{ color: "#27A3A3" }}>
                        Security
                      </h4>
                      <p className="text-gray-ad" style={{ color: "", fontSize: "20px" }}>
                        For securing your business information, we use the E2EE
                        (End-to-End Encryption) method. All your information on
                        the Property Wallet app is secured and cannot be
                        accessed by anyone.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="tab-pane fade" id="liton_tab_3_5">
              <div className="ltn__product-tab-content-inner">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                      <h2>Double Height</h2>
                      <p>
                        Enimad minim veniam quis nostrud exercitation
                        ullamco laboris. Lorem ipsum dolor sit amet cons
                        aetetur adipisicing elit sedo eiusmod
                        tempor.Incididunt labore et dolore magna aliqua. sed
                        ayd minim veniam.
                      </p>
                      <div className="apartments-info-list apartments-info-list-color mt-40">
                        <ul>
                          <li>
                            <label>Total Area</label>{" "}
                            <span>2800 Sq. Ft</span>
                          </li>
                          <li>
                            <label>Bedroom</label> <span>150 Sq. Ft</span>
                          </li>
                          <li>
                            <label>Bathroom</label> <span>45 Sq. Ft</span>
                          </li>
                          <li>
                            <label>Belcony/Pets</label> <span>Allowed</span>
                          </li>
                          <li>
                            <label>Lounge</label> <span>650 Sq. Ft</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="apartments-plan-img">
                      <img
                        src={publicUrl + "assets/img/others/10.png"}
                        alt="#"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EHTICS END */}
    </div>
  );
};
