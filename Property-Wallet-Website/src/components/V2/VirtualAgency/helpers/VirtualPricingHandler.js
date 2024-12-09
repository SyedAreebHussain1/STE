import axios from "axios";
import { Col, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import AOS from "aos";
import { urlLink } from "../../../../constant/contact-us-constants";
// import check from "../../../images/checkli.png";
// import threeStar from "../../../images/star-03.png";
import basic from "../../Pricing/helpers/icons/Vector(9).png";
import gold from "../../Pricing/helpers/icons/Vector(10).png";
import silver from "../../Pricing/helpers/icons/Vector(11).png";
import check from "../../Pricing/helpers/icons/icons8_star 1.png";
import SeeAllPrices from "./SeeAllPrices";
const VirtualPricingHandler = ({ loc }) => {
  // const [isRadio, setIsRadio] = useState("");
  // function percentage(partialValue, totalValue) {
  //   return `Save ${Math.round((100 * partialValue) / totalValue)}%`;
  // }
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [refCode, setRefCode] = useState(null);
  const { search } = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
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

  useEffect(() => {
    const query = new URLSearchParams(search);
    const ref_code = query.get("refCode");
    setRefCode(ref_code);
  }, [search]);
  return (
    <div className="topspace bottomspace">
      <section className="wrapper ">
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
              <div className="screen-view">
                {/* <Link
                  to="/pricing"
                  className="btn btn-primary rounded-pill mt-2 "
                >
                  See All Prices
                </Link> */}
                <SeeAllPrices />
              </div>
            </div>
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
              <div className="col-lg-8">
                <Row gutter={16}>
                  {data !== null &&
                    data.length > 0 &&
                    data.map((item, i) => {
                      return (
                        <>
                          <Col
                            style={
                              (item?.title?.toLowerCase().includes("basic") ||
                                item?.title?.toLowerCase().includes("silver")) && {
                                marginTop: "2%",
                              }
                            }
                            span={window.innerWidth > 600 ? 8 : 24}
                          >
                            <div
                              className={
                                item?.title?.toLowerCase().includes("basic") ||
                                item?.title?.toLowerCase().includes("silver")
                                  ? "pricing-container"
                                  : "pricing-container-gold"
                              }
                            >
                              <Row style={{ marginTop: "3%" }} gutter={16}>
                                <Col span={3}>
                                  <img
                                    src={
                                      item?.title?.toLowerCase().includes("basic")
                                        ? basic
                                        : item?.title?.toLowerCase().includes("silver")
                                        ? silver
                                        : gold
                                    }
                                  />
                                </Col>
                                <Col span={21}>
                                  <h5
                                    style={{
                                      fontWeight: "bold",
                                      color:
                                        item?.title?.toLowerCase().includes("gold") &&
                                        "white",
                                    }}
                                  >
                                    {item?.title}{" "}
                                  </h5>
                                  <p
                                    style={{
                                      color:
                                        item?.title?.toLowerCase().includes("gold") &&
                                        "white",
                                    }}
                                  >
                                    Experience Luxury Unveiled: Discover the
                                    Brilliance of Our Gold Package.
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
                                  color:
                                    item?.title?.toLowerCase().includes("gold") && "white",
                                }}
                              >
                                PKR {item?.pwSubPackage[0]?.charges}
                              </div>
                              {/* <Link
                                to={{
                                  pathname: `/checkout/${item?.title}`,
                                  state: { packages: item, refCode: refCode },
                                }}
                              >
                                <div className="btn-wrapper mt-4">
                                  <button
                                    style={{
                                      width: "100%",
                                      borderRadius: "8px",
                                      backgroundColor:
                                        item?.title?.includes("gold") &&
                                        "rgba(255, 255, 255, 0.12)",
                                    }}
                                    className="custom--login-btn-1 btn"
                                  >
                                    Choose Plan
                                  </button>
                                </div>
                              </Link> */}

                              <div style={{ marginTop: "15%" }}>
                                <h5
                                  style={{
                                    color:
                                      item?.title?.toLowerCase().includes("gold") && "white",
                                  }}
                                >
                                  Plan includes
                                </h5>
                                <div>
                                  <div
                                    className="w-full-mobile"
                                    style={{ width: "100%" }}
                                  >
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
                                          color:
                                            item?.title?.toLowerCase().includes("gold") &&
                                            "white",
                                          fontWeight: "700",
                                        }}
                                        className=""
                                      >
                                        <img
                                          src={check}
                                          style={{
                                            width: "16px",
                                            height: "16px",
                                          }}
                                        />
                                        <span>
                                          &nbsp;
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
                                            item?.title?.toLowerCase().includes("gold") &&
                                            "white",
                                          fontWeight: "700",
                                        }}
                                        className=""
                                      >
                                        <img
                                          src={check}
                                          style={{
                                            width: "16px",
                                            height: "16px",
                                          }}
                                        />
                                        <span>
                                          &nbsp;
                                          <strong>
                                            {" "}
                                            {
                                              item?.pwSubPackage[0]
                                                ?.noOfUserLimit
                                            }
                                          </strong>{" "}
                                          User Limits
                                        </span>
                                      </li>
                                      <li
                                        li
                                        style={{
                                          fontSize: "1rem",
                                          color:
                                            item?.title?.toLowerCase().includes("gold") &&
                                            "white",
                                          fontWeight: "700",
                                        }}
                                        className=""
                                      >
                                        <img
                                          src={check}
                                          style={{
                                            width: "16px",
                                            height: "16px",
                                          }}
                                        />
                                        <span>
                                          &nbsp;
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
                                            item?.title?.toLowerCase().includes("gold") &&
                                            "white",
                                          fontWeight: "700",
                                        }}
                                        className=""
                                      >
                                        <img
                                          src={check}
                                          style={{
                                            width: "16px",
                                            height: "16px",
                                          }}
                                        />
                                        <span>
                                          &nbsp;
                                          <strong>
                                            {item?.pwSubPackage[0]?.noOfRefresh}
                                          </strong>{" "}
                                          Total Refreshes{" "}
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </>
                      );
                    })}
                </Row>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="mobile-view" style={{ textAlign: "center" }}>
        <SeeAllPrices />
      </div>
    </div>
  );
};

export default VirtualPricingHandler;
