import { Col, Row, Spin } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { urlLink } from "../../../../constant/contact-us-constants";
import swal from "sweetalert";
import basic from "./icons/Vector(9).png";
import gold from "./icons/Vector(10).png";
import silver from "./icons/Vector(11).png";
import check from "./icons/icons8_star 1.png";
import "./pricingV2.css";
const StaticPackages = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const getForms = async () => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
    };
    await axios
      .get(`${urlLink}/V1/pwpackages/public/getAll`, { headers })
      .then((res) => {
        setData(res?.data?.data);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        swal("Sorry!", `${err?.response?.data?.message}`, "error");
      });
  };
  useEffect(() => {
    getForms();
  }, []);
  return (
    <div style={{ marginLeft: "6%", marginRight: "6%", marginTop: "2%" }}>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          <Spin />
        </div>
      ) : (
        <div>
          <section className="wrapper image-wrapper bg-auto no-overlay  text-center py-14 py-md-16 ">
            <div className="container py-0 py-md-18">
              <div className="row">
                <div className="col-lg-6 col-xl-5 mx-auto">
                  <h2 className="display-4 mb-3 text-center">
                    Choose Your Package
                  </h2>
                  <p
                    className="lead mb-5 px-md-16 px-lg-3"
                    style={{
                      display: "block",
                      marginBlockStart: "1em",
                      marginBlockEnd: "1em",
                      marginInlineStart: "0px",
                      marginInlineEnd: "0px",
                    }}
                  >
                    Our pricing plans are designed with you in mind. With clear
                    and straightforward pricing.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <Row gutter={16}>
            <Col
              style={{ marginTop: "2%" }}
              span={window.innerWidth > 460 ? 8 : 24}
            >
              <div className="pricing-container">
                <Row style={{ marginTop: "3%" }} gutter={16}>
                  <Col span={3}>
                    <img src={basic} />
                  </Col>
                  <Col span={21}>
                    <h5 style={{ fontWeight: "bold" }}>Basic</h5>
                    <p>
                      Experience Luxury Unveiled: Discover the Brilliance of Our
                      Gold Package.
                    </p>
                  </Col>
                </Row>
                <div
                  style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "32px",
                    marginTop: "2%",
                    fontFamily: "Poppins",
                    // lineHeight: "28px",
                  }}
                >
                  PKR 2,000
                </div>
                <div className="btn-wrapper mt-4">
                  <button
                    style={{ width: "100%", borderRadius: "8px" }}
                    className="custom--login-btn-1 btn"
                  >
                    Choose Plan
                  </button>
                </div>
                <div style={{ marginTop: "15%" }}>
                  <h5>Plan includes</h5>
                  <div>
                    <div className="w-full-mobile" style={{ width: "100%" }}>
                      <ul
                        className=""
                        style={{
                          listStyle: "none",
                          margin: "0",
                          padding: "0",
                        }}
                      >
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Payment Plan Calculator
                          </span>
                        </li>
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Sale & Quotation Maker
                          </span>
                        </li>
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Brochure Generator{" "}
                          </span>
                        </li>
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Post Generator
                          </span>
                        </li>
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Business Card Creator{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={window.innerWidth > 460 ? 8 : 24}>
              <div className="pricing-container-gold">
                <Row style={{ marginTop: "3%" }} gutter={16}>
                  <Col span={3}>
                    <img src={gold} />
                  </Col>
                  <Col span={21}>
                    <h5 style={{ fontWeight: "bold", color: "white" }}>Gold</h5>
                    <p style={{ color: "white" }}>
                      Experience Luxury Unveiled: Discover the Brilliance of Our
                      Gold Package.
                    </p>
                  </Col>
                </Row>
                <div
                  style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "32px",
                    marginTop: "2%",
                    fontFamily: "Poppins",
                    color: "white",
                    // lineHeight: "28px",
                  }}
                >
                  PKR 2,000
                </div>
                <div className="btn-wrapper mt-4">
                  <button
                    style={{
                      width: "100%",
                      borderRadius: "8px",

                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                    }}
                    className="custom--login-btn-1 btn"
                  >
                    Choose Plan
                  </button>
                </div>
                <div style={{ marginTop: "15%" }}>
                  <h5 style={{ color: "white" }}>Plan includes</h5>
                  <div>
                    <div className="w-full-mobile" style={{ width: "100%" }}>
                      <ul
                        className=""
                        style={{
                          listStyle: "none",
                          margin: "0",
                          padding: "0",
                        }}
                      >
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "white",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Payment Plan Calculator
                          </span>
                        </li>
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "white",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Sale & Quotation Maker
                          </span>
                        </li>
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "white",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Brochure Generator{" "}
                          </span>
                        </li>
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "white",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Post Generator
                          </span>
                        </li>
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "white",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Business Card Creator{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col
              style={{ marginTop: "2%" }}
              span={window.innerWidth > 460 ? 8 : 24}
            >
              <div className="pricing-container">
                <Row style={{ marginTop: "3%" }} gutter={16}>
                  <Col span={3}>
                    <img src={silver} />
                  </Col>
                  <Col span={21}>
                    <h5 style={{ fontWeight: "bold" }}>Silver</h5>
                    <p>
                      Experience Luxury Unveiled: Discover the Brilliance of Our
                      Gold Package.
                    </p>
                  </Col>
                </Row>
                <div
                  style={{
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "32px",
                    marginTop: "2%",
                    fontFamily: "Poppins",
                    // lineHeight: "28px",
                  }}
                >
                  PKR 2,000
                </div>
                <div className="btn-wrapper mt-4">
                  <button
                    style={{ width: "100%", borderRadius: "8px" }}
                    className="custom--login-btn-1 btn"
                  >
                    Choose Plan
                  </button>
                </div>
                <div style={{ marginTop: "15%" }}>
                  <h5>Plan includes</h5>
                  <div>
                    <div className="w-full-mobile" style={{ width: "100%" }}>
                      <ul
                        className=""
                        style={{
                          listStyle: "none",
                          margin: "0",
                          padding: "0",
                        }}
                      >
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Payment Plan Calculator
                          </span>
                        </li>
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Sale & Quotation Maker
                          </span>
                        </li>
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Brochure Generator{" "}
                          </span>
                        </li>
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Post Generator
                          </span>
                        </li>
                        <li
                          li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Business Card Creator{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};
export default StaticPackages;
