import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import check from "../../../images/checkli.png";
import threeStar from "../../../images/star-03.png";

const VirtualPricing = ({ loc }) => {
  const [isRadio, setIsRadio] = useState("");
  function percentage(partialValue, totalValue) {
    return `Save ${Math.round((100 * partialValue) / totalValue)}%`;
  }
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="topspace bottomspace">
      <section
        className="wrapper " >
        <div className="container py-14 py-md-16">
          <div className="row gy-6">
            <div className="col-lg-4">
              <h2
                className="display-4 mt-lg-18 mb-3"
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
                Plans for Transparent Pricing Designed for Your Success
              </h2>
              <p
                className="lead fs-lg"
                style={{
                  display: "block",
                  marginBlockStart: "1em",
                  fontSize: "18px",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                Discover our selection of affordable pricing options created to
                support your real estate ambitions. Select the ideal one that
                supports your objectives and begin realizing your full potential
                right away.
              </p>
              {/* <p style={{
                                display: 'block',
                                marginBlockStart: '1em',
                                fontSize: '18px',
                                marginBlockEnd: '1em',
                                marginInlineStart: '0px', marginInlineEnd: '0px'
                            }}>Enjoy a <a href="#" className="hover">free 30-day trial</a> and experience the full service. No credit card required!</p> */}
              <Link to="/pricing" className="btn btn-primary rounded-pill mt-2">
                See All Prices
              </Link>
            </div>
            <div
              className="column-p-p"
            >
              <div className="column-p-c bg-27a3a3">
                <div
                  className="top-two-side-radius "
                  style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    backgroundColor: "#137a76",
                  }}
                >
                  <h2
                    style={{
                      lineHeight: "1.3",
                      marginTop: "0",
                      marginBottom: "0.5rem",
                      fontWeight: "700",
                      color: "#fff",
                      wordSpacing: "0.1rem",
                      letterSpacing: "-.01rem",
                      fontSize: "2rem",
                    }}
                  >
                    Basic
                  </h2>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <div>
                    {" "}
                    <span
                      style={{
                        fontSize: " 1.5rem",
                        fontSize: ".875rem",
                        fontWeight: "700",
                        color: "#fff",
                      }}
                    >
                      {isRadio === "Yearly"
                        ? percentage(2500 * 12 - 16000, 2500 * 12)
                        : isRadio === "3 Months"
                          ? percentage(2500 * 3 - 6000, 2500 * 3)
                          : isRadio === "Half Yearly"
                            ? percentage(2500 * 6 - 10000, 2500 * 6)
                            : ""}
                    </span>
                  </div>
                  <div>
                    {" "}
                    <button
                      style={{ color: "", background: "#27a3a3" }}
                      className=""
                    >
                      {" "}
                    </button>
                  </div>
                </div>
                <div className="" style={{ textAlign: "center" }}>
                  <div
                    className=""
                    style={{
                      lineHeight: "1.3",
                      marginTop: "0",
                      marginBottom: "0.5rem",
                      fontWeight: "700",
                      color: "#fff",
                      wordSpacing: "0.1rem",
                      letterSpacing: "-.01rem",
                      fontSize: "2rem",
                    }}
                  >
                    <span
                      className=""
                      style={{
                        fontSize: "1rem",
                        position: "relative",
                        top: "-15px",
                      }}
                    >
                      PKR
                    </span>
                    <span style={{ fontSize: "2.7rem" }}>2,500</span>
                  </div>
                </div>
              </div>
              <div
                className="column-p-c bg-27a3a3"
                style={{ marginTop: "10px" }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="w-full-mobile" style={{ width: "100%" }}>
                    <ul
                      className=""
                      style={{
                        listStyle: "none",
                        textAlign: "left",
                        color: "#fff",
                      }}
                    >
                      <li
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          fontWeight: "700",
                        }}
                        className=""
                      >
                        <img
                          src={check}
                          style={{ width: "16px", height: "16px" }}
                        />
                        <span>
                          <strong>
                            {" "}
                            {isRadio === "Yearly"
                              ? 3 * 12
                              : isRadio === "3 Months"
                                ? 3 * 3
                                : isRadio === "Half Yearly"
                                  ? 3 * 6
                                  : 3}{" "}
                          </strong>{" "}
                          Listings
                        </span>
                      </li>
                      <li
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          fontWeight: "700",
                        }}
                        className=""
                      >
                        <img
                          src={check}
                          style={{ width: "16px", height: "16px" }}
                        />
                        <span>
                          <strong> 2</strong> User Limit
                        </span>
                      </li>
                      <li
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          fontWeight: "700",
                        }}
                        className=""
                      >
                        <img
                          src={check}
                          style={{ width: "16px", height: "16px" }}
                        />
                        <span>
                          <strong></strong> Cross-Listing
                        </span>
                      </li>
                      <li
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          fontWeight: "700",
                        }}
                        className=""
                      >
                        <img
                          src={check}
                          style={{ width: "16px", height: "16px" }}
                        />
                        <span>
                          <strong></strong> PW Inventory
                        </span>
                      </li>
                      <li
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          fontWeight: "700",
                        }}
                        className=""
                      >
                        <img
                          src={check}
                          style={{ width: "16px", height: "16px" }}
                        />
                        <span>
                          <strong></strong> Post Generator{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="column-p-p"
            >
              <div
                className="column-p-c bg-b5b8be"
                style={{ backgroundColor: "gray" }}
              >
                <div
                  className="top-two-side-radius"
                  style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    backgroundColor: "#9ba2a9",
                  }}
                >
                  <h2
                    style={{
                      lineHeight: "1.3",
                      marginTop: "0",
                      marginBottom: "0.5rem",
                      fontWeight: "700",
                      color: "#343f52",
                      wordSpacing: "0.1rem",
                      letterSpacing: "-.01rem",
                      fontSize: "2rem",
                    }}
                  >
                    Silver
                  </h2>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <div>
                    {" "}
                    <span
                      style={{
                        fontSize: " 1.5rem",
                        fontSize: ".875rem",
                        fontWeight: "700",
                        color: "#343f52",
                      }}
                    >
                      {" "}
                      {isRadio === "Yearly"
                        ? percentage(6500 * 12 - 40000, 6500 * 12)
                        : isRadio === "3 Months"
                          ? percentage(6500 * 3 - 15000, 6500 * 3)
                          : isRadio === "Half Yearly"
                            ? percentage(6500 * 6 - 25000, 6500 * 6)
                            : ""}
                    </span>
                  </div>
                  <div>
                    {" "}
                    <button
                      style={{ color: "#343f52" }}
                      className="most-popular-btn bg-ffa900"
                    >
                      {" "}
                      <img src={threeStar} /> Most popular
                    </button>
                  </div>
                </div>
                <div className="" style={{ textAlign: "center" }}>
                  <div
                    className=""
                    style={{
                      lineHeight: "1.3",
                      marginTop: "0",
                      marginBottom: "0.5rem",
                      fontWeight: "700",
                      color: "#343f52",
                      wordSpacing: "0.1rem",
                      letterSpacing: "-.01rem",
                      fontSize: "2rem",
                    }}
                  >
                    <span
                      className=""
                      style={{
                        fontSize: "1rem",
                        position: "relative",
                        top: "-15px",
                      }}
                    >
                      PKR
                    </span>
                    <span style={{ fontSize: "2.7rem" }}>
                      {isRadio === "Yearly"
                        ? "40,000"
                        : isRadio === "3 Months"
                          ? "15,000"
                          : isRadio === "Half Yearly"
                            ? "25,000"
                            : "6,500"}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="column-p-c bg-b5b8be"
                style={{ backgroundColor: "#aaa", marginTop: "10px" }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "100%" }}>
                    <ul
                      className=""
                      style={{
                        listStyle: "none",
                        textAlign: "left",
                        color: "#343f52",
                      }}
                    >
                      <li
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
                          <strong>
                            {" "}
                            {isRadio === "Yearly"
                              ? 10 * 12
                              : isRadio === "3 Months"
                                ? 10 * 3
                                : isRadio === "Half Yearly"
                                  ? 10 * 6
                                  : 10}{" "}
                          </strong>{" "}
                          Listings{" "}
                        </span>
                      </li>
                      <li
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
                          <strong> 4 </strong> User Limit{" "}
                        </span>
                      </li>
                      <li
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
                          <strong></strong> Cross-Listing
                        </span>
                      </li>
                      <li
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
                          <strong></strong> PW Inventory{" "}
                        </span>
                      </li>
                      <li
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
                          <strong>
                            {" "}
                            {isRadio === "Yearly"
                              ? 12
                              : isRadio === "3 Months"
                                ? 3
                                : isRadio === "Half Yearly"
                                  ? 6
                                  : 1}
                          </strong>{" "}
                          Hot Listings{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="column-p-p"
            >
              <div
                className="column-p-c bg-c99a2c"
                style={{ backgroundColor: "" }}
              >
                <div
                  className="top-two-side-radius"
                  style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    backgroundColor: "#c99a2c",
                  }}
                >
                  <h2
                    style={{
                      lineHeight: "1.3",
                      marginTop: "0",
                      marginBottom: "0.5rem",
                      fontWeight: "700",
                      color: "#fff",
                      wordSpacing: "0.1rem",
                      letterSpacing: "-.01rem",
                      fontSize: "2rem",
                    }}
                  >
                    Gold
                  </h2>
                </div>

                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <div>
                    {" "}
                    <span
                      style={{
                        fontSize: " 1.5rem",
                        fontSize: ".875rem",
                        fontWeight: "700",
                        color: "#fff",
                      }}
                    >
                      {" "}
                      {isRadio === "Yearly"
                        ? percentage(12500 * 12 - 80000, 12500 * 12)
                        : isRadio === "3 Months"
                          ? percentage(12500 * 3 - 30000, 12500 * 3)
                          : isRadio === "Half Yearly"
                            ? percentage(12500 * 6 - 48000, 12500 * 6)
                            : ""}
                    </span>
                  </div>
                  <div>
                    {" "}
                    <button
                      style={{ color: "", background: "#f2de95" }}
                      className="most-popular-btn "
                    ></button>
                  </div>
                </div>
                <div className="" style={{ textAlign: "center" }}>
                  <div
                    className=""
                    style={{
                      lineHeight: "1.3",
                      marginTop: "0",
                      marginBottom: "0.5rem",
                      fontWeight: "700",
                      color: "#fff",
                      wordSpacing: "0.1rem",
                      letterSpacing: "-.01rem",
                      fontSize: "2rem",
                    }}
                  >
                    <span
                      className=""
                      style={{
                        fontSize: "1rem",
                        position: "relative",
                        top: "-15px",
                      }}
                    >
                      PKR
                    </span>
                    <span style={{ fontSize: "2.7rem" }}>
                      {isRadio === "Yearly"
                        ? "80,000"
                        : isRadio === "3 Months"
                          ? "30,000"
                          : isRadio === "Half Yearly"
                            ? "48,000"
                            : "12,500"}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="column-p-c bg-c99a2c"
                style={{ backgroundColor: "", marginTop: "10px" }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "100%" }}>
                    <ul
                      className=""
                      style={{
                        listStyle: "none",
                        textAlign: "left",
                        color: "#fff",
                      }}
                    >
                      <li
                        li
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          fontWeight: "700",
                        }}
                        className=""
                      >
                        <img
                          src={check}
                          style={{ width: "16px", height: "16px" }}
                        />
                        <span>
                          <strong>
                            {" "}
                            {isRadio === "Yearly"
                              ? 20 * 12
                              : isRadio === "3 Months"
                                ? 20 * 3
                                : isRadio === "Half Yearly"
                                  ? 20 * 6
                                  : 20}{" "}
                          </strong>{" "}
                          Listings
                        </span>
                      </li>
                      <li
                        li
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          fontWeight: "700",
                        }}
                        className=""
                      >
                        <img
                          src={check}
                          style={{ width: "16px", height: "16px" }}
                        />
                        <span>
                          <strong> 8 </strong> User Limit
                        </span>
                      </li>
                      <li
                        li
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          fontWeight: "700",
                        }}
                        className=""
                      >
                        <img
                          src={check}
                          style={{ width: "16px", height: "16px" }}
                        />
                        <span>
                          <strong></strong> Cross-Listing
                        </span>
                      </li>
                      <li
                        li
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          fontWeight: "700",
                        }}
                        className=""
                      >
                        <img
                          src={check}
                          style={{ width: "16px", height: "16px" }}
                        />
                        <span>
                          <strong></strong> Leads Center{" "}
                        </span>
                      </li>
                      <li
                        li
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          fontWeight: "700",
                        }}
                        className=""
                      >
                        <img
                          src={check}
                          style={{ width: "16px", height: "16px" }}
                        />
                        <span>
                          <strong>
                            {" "}
                            {isRadio === "Yearly"
                              ? 24
                              : isRadio === "3 Months"
                                ? 6
                                : isRadio === "Half Yearly"
                                  ? 12
                                  : 2}
                          </strong>{" "}
                          Hot Listings{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualPricing;
