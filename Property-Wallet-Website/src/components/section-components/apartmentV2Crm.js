import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import SelectBox from "../V2/select";
import commissionIcon from "../images/commission.png";
import stafficon from "../images/stafficon.png";
import inventoryIcon from "../images/inventory.png";
import reportIcon from "../images/report.png";
import digitalToolsIcon from "../images/DigitalToolsIcon.png";

import img1 from "../images/listing/1.png";
import img2 from "../images/listing/2.png";
import img3 from "../images/listing/3.png";
import img4 from "../images/listing/4.png";
import img5 from "../images/listing/5.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "../V2/styleareeb.css";

const ApartmentV2Crm = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  let CustomClass = props.customClass ? props.customClass : "";

  var testClassvar = document.getElementsByClassName("testClass02");
  useEffect(() => {
    for (var i = 0; i < testClassvar.length; i++) {
      testClassvar[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("activeTest02");
        current[0].className = current[0].className.replace(
          " activeTest02",
          ""
        );
        this.className += " activeTest02";
      });
    }
  }, [testClassvar]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div
        className="container "
        style={{ textAlign: "", marginTop: "5%" }}
      >
        <span
          style={{
            lineHeight: "1.3",
            marginTop: "0",
            marginBottom: "0.5rem",
            fontWeight: "700",
            color: "#343f52",
            wordSpacing: "0.1rem",
            letterSpacing: "-.01rem",
            fontSize: "2.5rem",
          }}
        >
          Pw Inventory
        </span>
      </div>
      <div
        className={"ltn__apartments-plan-area pt-115--- pb-70 " + CustomClass}
        data-aos="fade-up"
        style={{ marginTop: "5%" }}
      >
        <div
          className="container services-aprt-none"
          style={{ display: "flex" }}
        >
          <div className="ltn__tab-menu">
            <div
              className="nav anchorTagNav"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a
                className="testClass02 activeTest02 show anchorTag"
                data-bs-toggle="tab"
                href="#liton_tab_3_21"
              >
                <div className="flexs imgandp">
                  <img className="iconpng" src={inventoryIcon} alt="logo" />
                  <p className="text-inven">Inventory Management</p>
                </div>
              </a>
              <a
                className="anchorTag testClass02"
                data-bs-toggle="tab"
                href="#liton_tab_3_22"
              >
                <div className="flexs imgandp">
                  <img className="iconpng" src={stafficon} alt="logo" />
                  <p className="text-inven">Staff Management</p>
                </div>
              </a>
              <a
                className="anchorTag testClass02"
                data-bs-toggle="tab"
                href="#liton_tab_3_23"
              >
                <div className="flexs imgandp">
                  <img className="iconpng" src={commissionIcon} alt="logo" />
                  <p className="text-inven">Commission Management</p>
                </div>
              </a>
              <a
                className="anchorTag testClass02"
                data-bs-toggle="tab"
                href="#liton_tab_3_24"
              >
                <div className="flexs imgandp">
                  <img className="iconpng" src={reportIcon} alt="logo" />
                  <p className="text-inven">Report&nbsp;&nbsp; Management</p>
                </div>
              </a>
              <a
                className="anchorTag testClass02"
                data-bs-toggle="tab"
                href="#liton_tab_3_25"
              >
                <div className="flexs imgandp">
                  <img className="iconpng" src={digitalToolsIcon} alt="logo" />
                  <p className="text-inven">Digital Tools</p>
                </div>
              </a>
            </div>
          </div>

          <div className="tab-content">
            <div className="tab-pane fade  active show" id="liton_tab_3_21">
              <div>
                <div
                  className="flext-text"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div className="imgDiv">
                    <img
                      className="imgIphoneScreen marginTop-30px "
                      src={img1}
                      alt="img"
                      style={{ marginTop: "" }}
                    />
                  </div>
                  <div
                    className="marginleft-350px"
                    style={{
                      width: "100%",
                    }}
                  >
                    <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                      <div className="ltn__feature-info">
                        <h3>
                          <div
                            className="freature-link-hover"
                            style={{ color: "black" }}
                          >
                            <h1>Inventory Management</h1>
                          </div>
                        </h3>
                        <p
                          className="text-gray-ad"
                          style={{ fontSize: "1rem" }}
                        >
                          Inventory management is an essential part of any
                          business.Take control of your inventory with our
                          inventory management system. Get real-time insights
                          into your business and make data-driven decisions with
                          our powerful inventory management system. Realtors are
                          now able to manage their inventories more efficiently.
                        </p>
                        <div
                          style={{
                            display: "flex",
                          }}
                          className="btn-wrapper animated go-top"
                        >
                          <Link
                            to="/inventory-management"
                            className="theme-btn-1 btn btnLearnmore btn-effect-1"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="liton_tab_3_22">
              <div className="ltn__product-tab-content-inner">
                <div
                  className="flext-text"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div className=" imgDiv">
                    <img
                      className="imgIphoneScreen  marginTop-30px"
                      src={img2}
                      alt="img"
                    />
                  </div>
                  <div
                    className="marginleft-350px"
                    style={{ width: "100%", marginLeft: "" }}
                  >
                    <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                      <div className="ltn__feature-info">
                        <h3>
                          <div
                            className="freature-link-hover"
                            style={{ color: "black" }}
                          >
                            <h1>Staff Management</h1>
                          </div>
                        </h3>
                        <p
                          className="text-gray-ad"
                          style={{ fontSize: "1rem" }}
                        >
                          With the property wallet staff management system, real
                          estate agencies can effectively manage their staff and
                          ensure that they are working efficiently and
                          productively. It allows them to track staff
                          performance, assign tasks, and schedule meetings. Our
                          Staff management system is simple to use.
                        </p>
                        <div
                          style={{
                            display: "flex",
                            // justifyContent: "center",
                          }}
                          className="btn-wrapper animated go-top"
                        >
                          <Link
                            to="/staff-management"
                            className="theme-btn-1 btn btnLearnmore btn-effect-1"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="liton_tab_3_23">
              <div className="ltn__product-tab-content-inner">
                <div
                  className="flext-text"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div className=" imgDiv">
                    <img
                      className="imgIphoneScreen  marginTop-30px"
                      src={img3}
                      alt="img"
                    />
                  </div>
                  <div
                    className="marginleft-350px"
                    style={{ width: "100%", marginLeft: "" }}
                  >
                    <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                      <div className="ltn__feature-info">
                        <h3>
                          <div
                            className="freature-link-hover"
                            style={{ color: "black" }}
                            // to="/service-details"
                          >
                            <h1>Commission Management</h1>
                          </div>
                        </h3>
                        <p
                          className="text-gray-ad"
                          style={{ fontSize: "1rem" }}
                        >
                          The process of tracking, calculating, and distributing
                          commissions is known as commission management. Our
                          commission management systems provide a full platform
                          for handling commission payments from start to finish,
                          including payment tracking, proper commission
                          calculation, and timely payment distribution.
                        </p>
                        <div
                          style={{
                            display: "flex",
                            // justifyContent: "center",
                          }}
                          className="btn-wrapper animated go-top"
                        >
                          <Link
                            to="/commission-management"
                            className="theme-btn-1 btn btnLearnmore btn-effect-1"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="liton_tab_3_24">
              <div className="ltn__product-tab-content-inner">
                <div
                  className="flext-text"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div className=" imgDiv">
                    <img
                      className="imgIphoneScreen marginTop-30px"
                      src={img4}
                      alt="img"
                    />
                  </div>
                  <div
                    className="marginleft-350px"
                    style={{ width: "100%", marginLeft: "" }}
                  >
                    <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                      <div className="ltn__feature-info">
                        <h3>
                          <div
                            className="freature-link-hover"
                            style={{ color: "black" }}
                          >
                            <h1>Report Management</h1>
                          </div>
                        </h3>
                        <p
                          className="text-gray-ad"
                          style={{ fontSize: "1rem" }}
                        >
                          Say goodbye to tedious report management - make the
                          switch today with property wallet for your hassle-free
                          solution! We understand how important accurate and
                          timely reports are to help you succeed, so our
                          intuitive system will help you create, organize, and
                          distribute reports with ease in no time!
                        </p>
                        <div
                          style={{
                            display: "flex",
                          }}
                          className="btn-wrapper animated go-top"
                        >
                          <Link
                            to="/report-management"
                            className="theme-btn-1 btn btnLearnmore btn-effect-1"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="liton_tab_3_25">
              <div className="ltn__product-tab-content-inner">
                <div
                  className="flext-text"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div className="imgDiv">
                    <img
                      className="imgIphoneScreen marginTop-30px"
                      src={img5}
                      alt="img"
                    />
                  </div>
                  <div
                    className="marginleft-350px"
                    style={{ width: "100%", marginLeft: "" }}
                  >
                    <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                      <div className="ltn__feature-info">
                        <h3>
                          <div
                            className="freature-link-hover"
                            style={{ color: "black" }}
                          >
                            <h1>Digital Tools</h1>
                          </div>
                        </h3>
                        <p
                          className="text-gray-ad"
                          style={{ fontSize: "1rem" }}
                        >
                          Say goodbye to manual processes, streamline operations
                          and achieve greater outcomes faster and easier.
                          Digital tools are the way to take your business on the
                          road to success! ⁣⁣ Technology advances, but it's up
                          to us how we use it. Property wallet equips you with
                          the digital tools you need for success.
                        </p>
                        <div
                          style={{
                            display: "flex",
                          }}
                          className="btn-wrapper animated go-top"
                        >
                          <Link
                            to="/digital-tools"
                            className="theme-btn-1 btn btnLearnmore btn-effect-1"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SelectBox />
      </div>
    </>
  );
};

export default ApartmentV2Crm;
