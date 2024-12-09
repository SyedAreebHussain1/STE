import { Badge, Col, Row, Spin } from "antd";

import axios from "axios";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { urlLink } from "../../../../constant/contact-us-constants";

import swal from "sweetalert";

import basic from "./icons/Vector(9).png";

import gold from "./icons/Vector(10).png";

import silver from "./icons/Vector(11).png";

import check from "./icons/icons8_star 1.png";
import check2 from "./icons/icons8_star 2.png";

import "./pricingV2.css";

import { useLocation } from "react-router-dom";

import { earnedAmount } from "../../../../utils/mask";
import AliceCarousel from "react-alice-carousel";

const PackagesV2 = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState(null);

  const [refCode, setRefCode] = useState(null);

  const { search } = useLocation();

  const getForms = async () => {
    setLoading(true);

    const headers = {
      "Content-Type": "application/json",
    };

    await axios

      .get(`${urlLink}/V1/pwpackages/public/getAll`, { headers })

      .then((res) => {
        const goldPackageIndex = res?.data?.data?.findIndex((pckg) =>
          pckg.title
            ?.toLowerCase()

            ?.includes("gold")
        );

        if (goldPackageIndex !== -1) {
          // Create a copy of the original data array

          const modifiedPackages = [...res?.data?.data];

          // Remove the "Gold" package from its original position

          const [goldPackage] = modifiedPackages.splice(goldPackageIndex, 1);

          // Calculate the middle index

          const middleIndex = Math.floor(modifiedPackages.length / 2);

          // Insert the "Gold" package at the middle index

          modifiedPackages.splice(middleIndex, 0, goldPackage);

          // Update the state with the modified array

          setData(modifiedPackages);
        }

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

    // console.log("ref_code", ref_code);
  }, [search]);
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <div style={{ marginLeft: "6%", marginRight: "6%", marginTop: "2%" }}>
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
                Our pricing plans are designed with you in mind. With clear and
                straightforward pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

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
          {data !== null && data.length > 0 && (
            <AliceCarousel
              animationDuration={2000}
              items={
                data !== null &&
                data.length > 0 &&
                data.map((item, i) => {
                  return (
                    <>
                      <div
                        style={{ position: "relative", marginTop: "8%" }}
                        className={
                          item?.title?.toLowerCase()?.includes("basic")
                            ? "pricing-container-basic"
                            : item?.title?.toLowerCase()?.includes("silver")
                            ? "pricing-container-silver"
                            : item?.title?.toLowerCase()?.includes("starter")
                            ? "pricing-container-starter"
                            : item.title
                                .toLowerCase()
                                .includes("freelancer pro")
                            ? "pricing-container-pro"
                            : item.title
                                .toLowerCase()
                                .includes("freelancer plus")
                            ? "pricing-container-plus"
                            : "pricing-container-gold"
                        }
                      >
                        <Row style={{ marginTop: "3%" }} gutter={16}>
                          <div
                            style={{
                              position: "absolute",
                              backgroundColor: "white",
                              paddingTop: "15px",
                              paddingBottom: "12px",
                              paddingLeft: "12px",
                              paddingRight: "12px",
                              width: "60px",
                              height: "60px",
                              top:
                                // item.title
                                //   .toLowerCase()
                                //   .includes("freelancer pro") ||
                                // item.title
                                //   .toLowerCase()
                                //   .includes("freelancer plus")
                                //   ? -20
                                //   :
                                -25,
                              border: "solid",
                              borderColor: item?.title
                                ?.toLowerCase()
                                ?.includes("basic")
                                ? "#27A3A3"
                                : item?.title?.toLowerCase()?.includes("silver")
                                ? "black"
                                : item?.title
                                    ?.toLowerCase()
                                    ?.includes("starter")
                                ? "#146A9F"
                                : item.title
                                    .toLowerCase()
                                    .includes("freelancer pro")
                                ? "#73E6FF"
                                : item.title
                                    .toLowerCase()
                                    .includes("freelancer plus")
                                ? "#E29C6D"
                                : "#DEAC27",
                              borderWidth: "2px",
                              textAlign: "center",
                              alignItems: "center",
                              borderRadius: "80px",
                              left: "45%",
                            }}
                          >
                            <div
                            // style={{
                            //   backgroundColor: "red",
                            //   marginTop: "5%",
                            // }}
                            >
                              <img
                                // style={{ marginTop: "2%" }}
                                // width={100}
                                src={require(item?.title
                                  ?.toLowerCase()
                                  ?.includes("basic")
                                  ? "./icons/basicDiamond.png"
                                  : item?.title
                                      ?.toLowerCase()
                                      ?.includes("silver")
                                  ? "./icons/silverDiamond.png"
                                  : item?.title
                                      ?.toLowerCase()
                                      ?.includes("starter")
                                  ? "./icons/starterDiamond.png"
                                  : item.title
                                      .toLowerCase()
                                      .includes("freelancer pro")
                                  ? "./icons/freelancerpro.png"
                                  : item.title
                                      .toLowerCase()
                                      .includes("freelancer plus")
                                  ? "./icons/freelancerplus.png"
                                  : "./icons/goldDiamond.png")}
                                //   src={ item?.title?.toLowerCase()?.includes("basic") ||item?.title?.toLowerCase()?.includes("starter")
                                // ? "basicimage"
                                // : item?.title?.toLowerCase()?.includes("silver")
                                // ? "silverimage"

                                // : "goldimage"}
                              />
                            </div>
                          </div>
                          {/* <Col span={3}>
                            <img
                            
                              src={ item?.title?.toLowerCase()?.includes("basic") ||item?.title?.toLowerCase()?.includes("starter")
                            ? "basicimage"
                            : item?.title?.toLowerCase()?.includes("silver")
                            ? "silverimage"
                            
                            : "goldimage"}
                            />
                          </Col> */}

                          <Col span={21}>
                            <h5
                              style={{
                                fontWeight: "bold",

                                color: item?.title
                                  ?.toLowerCase()
                                  ?.includes("starter")
                                  ? "black"
                                  : "white",
                              }}
                            >
                              {item?.title}{" "}
                            </h5>

                            <p
                              style={{
                                color: item?.title
                                  ?.toLowerCase()
                                  ?.includes("starter")
                                  ? "black"
                                  : "white",
                              }}
                            >
                              Experience Luxury Unveiled: Discover the
                              Brilliance of Our {item?.title} Package
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

                            color: item?.title
                              ?.toLowerCase()
                              ?.includes("starter")
                              ? "black"
                              : "white",
                          }}
                        >
                          PKR {item?.pwSubPackage[0]?.charges}
                        </div>

                        <Link
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
                                  !item?.title
                                    ?.toLowerCase()
                                    ?.includes("starter") &&
                                  "rgba(255, 255, 255, 0.12)",
                              }}
                              className="custom--login-btn-1 btn"
                            >
                              Choose Plan
                            </button>
                          </div>
                        </Link>

                        <div style={{ marginTop: "15%" }}>
                          <h5
                            style={{
                              color: item?.title
                                ?.toLowerCase()
                                ?.includes("starter")
                                ? "black"
                                : "white",
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

                                    color: item?.title
                                      ?.toLowerCase()
                                      ?.includes("starter")
                                      ? "black"
                                      : "white",

                                    fontWeight: "700",
                                  }}
                                  className=""
                                >
                                  <img
                                    src={
                                      item?.title
                                        ?.toLowerCase()
                                        ?.includes("basic")
                                        ? check2
                                        : check
                                    }
                                    style={{ width: "16px", height: "16px" }}
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

                                    color: item?.title
                                      ?.toLowerCase()
                                      ?.includes("starter")
                                      ? "black"
                                      : "white",

                                    fontWeight: "700",
                                  }}
                                  className=""
                                >
                                  <img
                                    src={
                                      item?.title
                                        ?.toLowerCase()
                                        ?.includes("basic")
                                        ? check2
                                        : check
                                    }
                                    style={{ width: "16px", height: "16px" }}
                                  />

                                  <span>
                                    &nbsp;
                                    <strong>
                                      {" "}
                                      {item?.pwSubPackage[0]?.noOfUserLimit}
                                    </strong>{" "}
                                    User Limits
                                  </span>
                                </li>

                                {item?.pwSubPackage[0]?.hotListing > 0 ? (
                                  <li
                                    style={{
                                      fontSize: "1rem",

                                      color: item?.title
                                        ?.toLowerCase()
                                        ?.includes("starter")
                                        ? "black"
                                        : "white",

                                      fontWeight: "700",
                                    }}
                                    className=""
                                  >
                                    <img
                                      src={
                                        item?.title
                                          ?.toLowerCase()
                                          ?.includes("basic")
                                          ? check2
                                          : check
                                      }
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
                                ) : (
                                  ""
                                )}

                                <li
                                  li
                                  style={{
                                    fontSize: "1rem",

                                    color: item?.title
                                      ?.toLowerCase()
                                      ?.includes("starter")
                                      ? "black"
                                      : "white",

                                    fontWeight: "700",
                                  }}
                                  className=""
                                >
                                  <img
                                    src={
                                      item?.title
                                        ?.toLowerCase()
                                        ?.includes("basic")
                                        ? check2
                                        : check
                                    }
                                    style={{ width: "16px", height: "16px" }}
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
                    </>
                  );
                })
              }
              responsive={responsive}
              autoPlay={false}
              keyboardNavigation={true}
              renderPrevButton={() => {
                return (
                  <div
                    className="carsoul-btn"
                    style={{
                      padding: "10px",
                      cursor: "pointer",
                      borderRadius: "100%",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 22px",
                    }}
                  >
                    {" "}
                    <ArrowLeftOutlined
                      style={{ paddingRight: "9px", paddingLeft: "4px" }}
                    />{" "}
                  </div>
                );
              }}
              renderNextButton={() => {
                return (
                  <div
                    className="carsoul-btn"
                    style={{
                      padding: "10px",
                      cursor: "pointer",
                      borderRadius: "100%",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                  >
                    {" "}
                    <ArrowRightOutlined style={{ marginLeft: "20%" }} />{" "}
                  </div>
                );
              }}
              infinite
            />
          )}

          {/* <Row gutter={16}>
            {data !== null &&
              data.length > 0 &&
              data.map((item, i) => {
                return (
                  <>
                    <Col
                      style={{
                        marginTop:
                          item?.title?.toLowerCase()?.includes("basic") ||
                          item?.title?.toLowerCase()?.includes("silver") ||
                          item?.title?.toLowerCase()?.includes("starter")
                            ? "2%"
                            : "1%",
                      }}
                      span={window.innerWidth > 460 ? 8 : 24}
                    >
                      

                      <div
                        className={
                          item?.title?.toLowerCase()?.includes("basic") ||
                          item?.title?.toLowerCase()?.includes("silver") ||
                          item?.title?.toLowerCase()?.includes("starter")
                            ? "pricing-container"
                            : "pricing-container-gold"
                        }
                      >
                        <Row style={{ marginTop: "3%" }} gutter={16}>
                          <Col span={3}>
                            <img
                              src={
                                item?.title?.toLowerCase()?.includes("basic") ||
                                item?.title?.toLowerCase()?.includes("starter")
                                  ? basic
                                  : item?.title

                                      ?.toLowerCase()

                                      ?.includes("silver")
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
                                  item?.title

                                    ?.toLowerCase()

                                    ?.includes("gold") && "white",
                              }}
                            >
                              {item?.title}{" "}
                            </h5>

                            <p
                              style={{
                                color:
                                  item?.title

                                    ?.toLowerCase()

                                    ?.includes("gold") && "white",
                              }}
                            >
                              Experience Luxury Unveiled: Discover the
                              Brilliance of Our {item?.title} Package
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
                              item?.title?.toLowerCase()?.includes("gold") &&
                              "white",
                          }}
                        >
                          PKR {item?.pwSubPackage[0]?.charges}
                        </div>

                        <Link
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
                                  item?.title

                                    ?.toLowerCase()

                                    ?.includes("gold") &&
                                  "rgba(255, 255, 255, 0.12)",
                              }}
                              className="custom--login-btn-1 btn"
                            >
                              Choose Plan
                            </button>
                          </div>
                        </Link>

                        <div style={{ marginTop: "15%" }}>
                          <h5
                            style={{
                              color:
                                item?.title?.toLowerCase()?.includes("gold") &&
                                "white",
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
                                      item?.title

                                        ?.toLowerCase()

                                        ?.includes("gold") && "white",

                                    fontWeight: "700",
                                  }}
                                  className=""
                                >
                                  <img
                                    src={check}
                                    style={{ width: "16px", height: "16px" }}
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
                                      item?.title

                                        ?.toLowerCase()

                                        ?.includes("gold") && "white",

                                    fontWeight: "700",
                                  }}
                                  className=""
                                >
                                  <img
                                    src={check}
                                    style={{ width: "16px", height: "16px" }}
                                  />

                                  <span>
                                    &nbsp;
                                    <strong>
                                      {" "}
                                      {item?.pwSubPackage[0]?.noOfUserLimit}
                                    </strong>{" "}
                                    User Limits
                                  </span>
                                </li>

                                {item?.pwSubPackage[0]?.hotListing > 0 ? (
                                  <li
                                    style={{
                                      fontSize: "1rem",

                                      color:
                                        item?.title

                                          ?.toLowerCase()

                                          ?.includes("gold") && "white",

                                      fontWeight: "700",
                                    }}
                                    className=""
                                  >
                                    <img
                                      src={check}
                                      style={{ width: "16px", height: "16px" }}
                                    />

                                    <span>
                                      &nbsp;
                                      <strong>
                                        {item?.pwSubPackage[0]?.hotListing}
                                      </strong>{" "}
                                      Hot Listings
                                    </span>
                                  </li>
                                ) : (
                                  ""
                                )}

                                <li
                                  li
                                  style={{
                                    fontSize: "1rem",

                                    color:
                                      item?.title

                                        ?.toLowerCase()

                                        ?.includes("gold") && "white",

                                    fontWeight: "700",
                                  }}
                                  className=""
                                >
                                  <img
                                    src={check}
                                    style={{ width: "16px", height: "16px" }}
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
          </Row> */}
        </div>
      )}
    </div>
  );
};

export default PackagesV2;
