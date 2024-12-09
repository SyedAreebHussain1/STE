import React, { useState, useEffect, useRef } from "react";
import basic from "../../../../api/icons/Vector(9).png";
import gold from "../../../../api/icons/Vector(10).png";
import silver from "../../../../api/icons/Vector(11).png";
import check from "../../../../api/icons/icons8_star 1.png";
import check2 from "../../../../api/icons/icons8_star 2.png";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Grid, useTheme } from "@material-ui/core";
import { getAllPackages } from "../../../../redux/modules/Packages/actions";
import "./style.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "dan-components/Loading";
import {
  ArrowBack,
  ArrowForward,
  ArrowLeftOutlined,
  ArrowRightAltOutlined,
  ArrowRightOutlined,
  NavigateNext,
} from "@material-ui/icons";
import { earnedAmount } from "../../../../utils/mask";
import { FileCopy, Share } from "@material-ui/icons";
import { getFromStorage } from "../../../../utils/storage";
import { successMessage } from "../../../../utils/message";
import Slider from "react-slick";

const PackagesList = () => {
  const sliderRef = useRef();
  const reducer = "auth";
  const { userData } = useSelector((state) => state.getIn([reducer]));
  const { data, loading } = useSelector((state) =>
    state.getIn(["allPackages"])
  );
  const theme = useTheme();
  let user = getFromStorage("user");
  // Determine the theme type (dark or light)
  const themeType = theme.palette.type;
  const isDarkTheme = themeType === "dark";

  const dispatch = useDispatch();
  useEffect(() => {
    getAllPackages(dispatch);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth <= 480 ? 1 : 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
  };
  function copyTextToClipboard() {
    const textField = document.createElement("textarea");
    textField.innerText = user.refCode;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    successMessage("Reference number Copied");
  }
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Share Your ${user.refCode} reference code`,
          url: `https://www.propertywallet.pk/pricing?refCode=${user.refCode}`,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert("Web Share API is not supported in your browser.");
    }
  };

  function next() {
    sliderRef.current.slickNext();
  }
  function prev() {
    sliderRef.current.slickPrev();
  }
  return (
    <div style={{ marginLeft: "1%", marginRight: "1%" }}>
      <div
        style={{
          marginTop: "2%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "3%",
        }}
      >
        <span style={{ fontSize: "30px" }}>
          Ref Code :{" "}
          <span style={{ color: "#27A3A3" }}> {userData.refCode}</span> &nbsp;
        </span>
        <FileCopy
          onClick={copyTextToClipboard}
          color="secondary"
          style={{
            marginRight: 5,
            cursor: "pointer",
            fontSize: "25px",
            marginTop: "-10px",
          }}
        />
        <Share
          onClick={handleShare}
          color="secondary"
          style={{
            marginRight: 5,
            cursor: "pointer",
            fontSize: "25px",
            marginTop: "-10px",
          }}
        />
      </div>
      <div>
        <h2>Choose Your Package</h2>
        <p
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <Slider {...settings} ref={sliderRef}>
            {data?.length > 0 &&
              data?.map((item, i) => {
                return (
                  <div key={i}>
                    {/* <Badge
                      color="cyan"
                      text={`Earn PKR ${earnedAmount(
                        item.pwSubPackage[0].fixCommission,
                        item.pwSubPackage[0].charges,
                        item.pwSubPackage[0].regCommission
                      )}`}
                    /> */}

                    <div
                      style={{
                        position: "relative",
                        top: "11px",
                      }}
                      className={
                        item.title.toLowerCase().includes("basic")
                          ? "pricing-container-basic"
                          : item.title.toLowerCase().includes("silver")
                          ? "pricing-container-silver"
                          : item.title.toLowerCase().includes("starter")
                          ? "pricing-container-starter"
                          : item.title.toLowerCase().includes("freelancer pro")
                          ? "pricing-container-pro"
                          : item.title.toLowerCase().includes("freelancer plus")
                          ? "pricing-container-plus"
                          : "pricing-container-gold"
                      }
                    >
                      <div class="ribbon-2">{`Earn PKR ${earnedAmount(
                        item.pwSubPackage[0].fixCommission,
                        item.pwSubPackage[0].charges,
                        item.pwSubPackage[0].regCommission
                      )}`}</div>
                      <Grid style={{ marginTop: "8%" }} spacing={16}>
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
                            top: -25,
                            border: "solid",
                            borderColor: item.title
                              .toLowerCase()
                              .includes("basic")
                              ? "#27A3A3"
                              : item.title.toLowerCase().includes("silver")
                              ? "black"
                              : item.title.toLowerCase().includes("starter")
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
                          <div>
                            <img
                              width={30}
                              src={require(item.title
                                .toLowerCase()
                                .includes("basic")
                                ? "../../../../api/icons/basicDiamond.png"
                                : item.title.toLowerCase().includes("silver")
                                ? "../../../../api/icons/silverDiamond.png"
                                : item.title.toLowerCase().includes("starter")
                                ? "../../../../api/icons/starterDiamond.png"
                                : item.title
                                    .toLowerCase()
                                    .includes("freelancer pro")
                                ? "../../../../api/icons/freelancerpro.png"
                                : item.title
                                    .toLowerCase()
                                    .includes("freelancer plus")
                                ? "../../../../api/icons/freelancerplus.png"
                                : "../../../../api/icons/goldDiamond.png")}
                            />
                          </div>
                        </div>

                        <Grid item sm={6} xs={12} style={{ maxWidth: "100%" }}>
                          <h3
                            style={{
                              fontWeight: "bold",

                              color: item.title
                                .toLowerCase()
                                .includes("starter")
                                ? "black"
                                : "white",
                            }}
                          >
                            {item.title}{" "}
                          </h3>

                          <p
                            style={{
                              color: item.title
                                .toLowerCase()
                                .includes("starter")
                                ? "black"
                                : "white",
                              fontSize: "14px",
                            }}
                          >
                            Experience Luxury Unveiled: Discover the Brilliance
                            of Our {item.title} Package
                          </p>
                        </Grid>
                      </Grid>

                      <div
                        style={{
                          fontStyle: "normal",

                          fontWeight: "bold",

                          fontSize: "32px",

                          marginTop: "2%",

                          // fontFamily: "Poppins",

                          // lineHeight: "28px",

                          color: item.title.toLowerCase().includes("starter")
                            ? "black"
                            : "white",
                        }}
                      >
                        PKR {item.pwSubPackage[0].charges}
                      </div>

                      <Link
                        to={{
                          pathname: `/app/pages/checkout/${item.title}`,
                          state: { packages: item },
                        }}
                      >
                        <Button
                          variant="contained"
                          component="label"
                          block
                          style={{
                            width: "100%",
                            color: "white",
                            borderRadius: "5px",
                            marginTop: "3%",
                            height: "40px",
                            backgroundColor:
                              !item.title.toLowerCase().includes("starter") &&
                              "rgba(255, 255, 255, 0.12)",
                            borderColor:
                              !item.title.toLowerCase().includes("starter") &&
                              "rgba(255, 255, 255, 0.12)",
                          }}
                        >
                          Choose Plan
                        </Button>
                      </Link>

                      <div style={{ marginTop: "15%" }}>
                        <h3
                          style={{
                            color: item.title.toLowerCase().includes("starter")
                              ? "black"
                              : "white",
                          }}
                        >
                          Plan includes
                        </h3>

                        <div>
                          <div style={{ width: "100%" }}>
                            <div
                              className=""
                              style={{
                                listStyle: "none",

                                margin: "0",

                                padding: "0",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "1rem",

                                  color: item.title
                                    .toLowerCase()
                                    .includes("starter")
                                    ? "black"
                                    : "white",

                                  display: "flex",
                                  alignItems: "center",
                                  gap: 6,
                                  marginBottom: 8,
                                }}
                                className=""
                              >
                                <div>
                                  <img
                                    src={
                                      item.title.toLowerCase().includes("basic")
                                        ? check2
                                        : check
                                    }
                                    style={{
                                      border: "none",
                                    }}
                                  />
                                </div>

                                <div>
                                  &nbsp;
                                  <strong>
                                    {item.pwSubPackage[0].noListing}{" "}
                                  </strong>
                                  Listings
                                </div>
                              </div>

                              <div
                                style={{
                                  fontSize: "1rem",

                                  color: item.title
                                    .toLowerCase()
                                    .includes("starter")
                                    ? "black"
                                    : "white",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 6,
                                  marginBottom: 8,
                                  // fontWeight: "700",
                                }}
                                className=""
                              >
                                <div>
                                  <img
                                    src={
                                      item.title.toLowerCase().includes("basic")
                                        ? check2
                                        : check
                                    }
                                    style={{
                                      border: "none",
                                    }}
                                  />
                                </div>

                                <span>
                                  &nbsp;
                                  <strong>
                                    {item.pwSubPackage[0].noOfUserLimit}{" "}
                                  </strong>
                                  User Limits
                                </span>
                              </div>

                              {item.pwSubPackage[0].hotListing > 0 ? (
                                <div
                                  style={{
                                    fontSize: "1rem",
                                    color: item.title
                                      .toLowerCase()
                                      .includes("starter")
                                      ? "black"
                                      : "white",

                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    marginBottom: 8,
                                  }}
                                  className=""
                                >
                                  <div>
                                    <img
                                      src={
                                        item.title
                                          .toLowerCase()
                                          .includes("basic")
                                          ? check2
                                          : check
                                      }
                                      style={{
                                        border: "none",
                                      }}
                                    />
                                  </div>

                                  <span>
                                    &nbsp;
                                    <strong>
                                      {item.pwSubPackage[0].hotListing}{" "}
                                    </strong>
                                    Hot Listings
                                  </span>
                                </div>
                              ) : (
                                ""
                              )}

                              <div
                                style={{
                                  fontSize: "1rem",

                                  color: item.title
                                    .toLowerCase()
                                    .includes("starter")
                                    ? "black"
                                    : "white",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 6,
                                  marginBottom: 8,
                                  // fontWeight: "700",
                                }}
                                className=""
                              >
                                <div>
                                  <img
                                    src={
                                      item.title.toLowerCase().includes("basic")
                                        ? check2
                                        : check
                                    }
                                    style={{
                                      border: "none",
                                    }}
                                  />
                                </div>

                                <span>
                                  &nbsp;
                                  <strong>
                                    {item.pwSubPackage[0].noOfRefresh}{" "}
                                  </strong>
                                  Total Refreshes
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </Badge> */}
                  </div>
                );
              })}
          </Slider>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ArrowLeftOutlined
              style={{ fontSize: 80, cursor: "pointer" }}
              onClick={prev}
            />
            <ArrowRightOutlined
              style={{ fontSize: 80, cursor: "pointer" }}
              onClick={next}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default PackagesList;

function NextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}
