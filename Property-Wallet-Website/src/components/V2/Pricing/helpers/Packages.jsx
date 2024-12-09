import { Col, Row, Spin } from "antd";

import axios from "axios";

import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { urlLink } from "../../../../constant/contact-us-constants";

import swal from "sweetalert";

import check from "../../../images/checkli.png";

const Packages = () => {
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
    <div style={{ marginLeft: "2%", marginRight: "2%", marginTop: "2%" }}>
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
        <div className="row-p">
          <>
            <div className="column-p">
              <div
                className="column-p-c "
                style={{ boxShadow: "0px 0px 2px 2px #e7e2e2" }}
              >
                <div
                  className="top-two-side-radius "
                  style={{
                    display: "block",

                    justifyContent: "center",

                    alignItems: "center",

                    padding: "5px",

                    backgroundColor: "",
                  }}
                >
                  <h2
                    style={{
                      lineHeight: "1.3",

                      marginTop: "0",

                      marginBottom: "0.5rem",

                      fontWeight: "700",

                      color: "",

                      wordSpacing: "0.1rem",

                      letterSpacing: "-.01rem",

                      fontSize: "2.7rem",
                    }}
                  >
                    Free
                  </h2>
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

                      fontSize: "3rem",
                    }}
                  >
                    <span
                      className=""
                      style={{
                        fontSize: "1.1rem",

                        position: "relative",

                        top: "-15px",
                      }}
                    >
                      PKR
                    </span>

                    <span style={{ fontSize: "2.7rem" }}>0</span>
                  </div>
                </div>
              </div>

              <div
                className="column-p-c "
                style={{
                  marginTop: "10px",

                  boxShadow: "0px 0px 2px 2px #e7e2e2",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="w-full-mobile" style={{ width: "100%" }}>
                    <ul
                      className=""
                      style={{
                        listStyle: "none",

                        textAlign: "left",

                        color: "",
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

                <div
                  style={{
                    display: "block",

                    justifyContent: "center",

                    textAlign: "center",

                    marginBottom: "3%",
                  }}
                >
                  <button
                    style={{ boxShadow: "0px 0px 1px 1px #e7e2e2" }}
                    className="subcrib-button"
                  >
                    Download Now
                  </button>
                </div>
              </div>
            </div>
          </>

          {data !== null &&
            data.length > 0 &&
            data.map((item, i) => {
              return (
                <div className="column-p">
                  <div
                    className={
                      item?.title?.includes("basic")
                        ? "column-p-c bg-27a3a3"
                        : item?.title?.includes("silver")
                        ? "column-p-c bg-b5b8be"
                        : "column-p-c bg-c99a2c"
                    }
                  >
                    <div
                      className="top-two-side-radius "
                      style={{
                        display: "block",

                        justifyContent: "center",

                        alignItems: "center",

                        padding: "5px",

                        backgroundColor: item?.title?.includes("basic")
                          ? "#137a76"
                          : item?.title?.includes("silver")
                          ? "#9ba2a9"
                          : "#c99a2c",
                      }}
                    >
                      <h2
                        style={{
                          lineHeight: "1.3",

                          marginTop: "0",

                          marginBottom: "0.5rem",

                          fontWeight: "700",

                          color: item?.title?.includes("silver")
                            ? "#343f52"
                            : "#fff",

                          wordSpacing: "0.1rem",

                          letterSpacing: "-.01rem",

                          fontSize: "2.7rem",
                        }}
                      >
                        {item?.title}
                      </h2>
                    </div>

                    <div className="" style={{ textAlign: "center" }}>
                      <div
                        className=""
                        style={{
                          lineHeight: "1.3",

                          marginTop: "0",

                          marginBottom: "0.5rem",

                          fontWeight: "700",

                          color: item?.title?.includes("silver")
                            ? "#343f52"
                            : "#fff",

                          wordSpacing: "0.1rem",

                          letterSpacing: "-.01rem",

                          fontSize: "3rem",
                        }}
                      >
                        <span
                          className=""
                          style={{
                            fontSize: "1.1rem",

                            position: "relative",

                            top: "-15px",
                          }}
                        >
                          PKR
                        </span>

                        <span style={{ fontSize: "2.7rem" }}>
                          {item?.pwSubPackage[0]?.charges}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    // className="column-p-c bg-27a3a3"

                    className={
                      item?.title?.includes("basic")
                        ? "column-p-c bg-27a3a3"
                        : item?.title?.includes("silver")
                        ? "column-p-c bg-b5b8be"
                        : "column-p-c bg-c99a2c"
                    }
                    style={{ marginTop: "10px" }}
                  >
                    <div
                      style={{
                        display: "flex",

                        justifyContent: "center",
                      }}
                    >
                      <div className="w-full-mobile" style={{ width: "100%" }}>
                        <ul
                          className=""
                          style={{
                            listStyle: "none",

                            textAlign: "left",
                          }}
                        >
                          <li
                            li
                            style={{
                              fontSize: "1rem",

                              color:
                                item?.title?.includes("basic") ||
                                item?.title?.includes("gold")
                                  ? "#fff"
                                  : "black",

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
                                {item?.pwSubPackage[0]?.noOfRefresh}
                              </strong>{" "}
                              Refreshes
                            </span>
                          </li>

                          <li
                            li
                            style={{
                              fontSize: "1rem",

                              color:
                                item?.title?.includes("basic") ||
                                item?.title?.includes("gold")
                                  ? "#fff"
                                  : "black",

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
                                {item?.pwSubPackage[0]?.noListing}
                              </strong>{" "}
                              Listings
                            </span>
                          </li>

                          <li
                            li
                            style={{
                              fontSize: "1rem",

                              color:
                                item?.title?.includes("basic") ||
                                item?.title?.includes("gold")
                                  ? "#fff"
                                  : "black",

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
                                {item?.pwSubPackage[0]?.noOfUserLimit}
                              </strong>{" "}
                              User Limits
                            </span>
                          </li>

                          <li
                            li
                            style={{
                              fontSize: "1rem",

                              color:
                                item?.title?.includes("basic") ||
                                item?.title?.includes("gold")
                                  ? "#fff"
                                  : "black",

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
                                {item?.pwSubPackage[0]?.hotListing}
                              </strong>{" "}
                              Hot Listings
                            </span>
                          </li>

                          <li
                            li
                            style={{
                              fontSize: "1rem",

                              color:
                                item?.title?.includes("basic") ||
                                item?.title?.includes("gold")
                                  ? "#fff"
                                  : "black",

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
                                {item?.pwSubPackage[0]?.numberOfMonth}
                              </strong>{" "}
                              Total Months{" "}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Link
                      to={{
                        pathname: `/confirmation/${item?.title}`,

                        state: { packages: item },
                      }}
                    >
                      <div
                        style={{
                          display: "block",

                          justifyContent: "center",

                          textAlign: "center",

                          marginBottom: "3%",
                        }}
                      >
                        <button className="subcrib-button">
                          Subscribe Now
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Packages;
