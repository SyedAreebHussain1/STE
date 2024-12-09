import React, { useState, useEffect } from "react";
import basic from "../../../../api/icons/Vector(9).png";
import gold from "../../../../api/icons/Vector(10).png";
import silver from "../../../../api/icons/Vector(11).png";
import check from "../../../../api/icons/icons8_star 1.png";
import check2 from "../../../../api/icons/icons8_star 2.png";
import { useDispatch, useSelector } from "react-redux";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Badge, Button, Grid } from "@material-ui/core";
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
} from "@material-ui/icons";
import { earnedAmount } from "../../../../utils/mask";

const PackagesList = () => {
  const { data, loading } = useSelector((state) =>
    state.getIn(["allPackages"])
  );

  const dispatch = useDispatch();
  useEffect(() => {
    getAllPackages(dispatch);
  }, []);
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <div style={{ marginLeft: "1%", marginRight: "1%" }}>
      <section>
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
      </section>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div style={{ marginTop: "2%" }}>
            {data !== null && data.length > 0 && (
              <AliceCarousel
                // disableDotsControl={true}
                // disableSlideInfo={true}
                autoPlayControls={false}
                animationDuration={2000}
                items={
                  data !== null &&
                  data.length > 0 &&
                  data.map((item, i) => {
                    return (
                      <>
                        {/* <Badge
                      color="cyan"
                      text={`Earn PKR ${earnedAmount(
                        item.pwSubPackage[0].fixCommission,
                        item.pwSubPackage[0].charges,
                        item.pwSubPackage[0].regCommission
                      )}`}
                    /> */}
                        <div class="ribbon-2">{`Earn PKR ${earnedAmount(
                          item.pwSubPackage[0].fixCommission,
                          item.pwSubPackage[0].charges,
                          item.pwSubPackage[0].regCommission
                        )}`}</div>
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
                              : "pricing-container-gold"
                          }
                        >
                          <Grid style={{ marginTop: "3%" }} spacing={16}>
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
                                    : item.title
                                        .toLowerCase()
                                        .includes("silver")
                                    ? "../../../../api/icons/silverDiamond.png"
                                    : item.title
                                        .toLowerCase()
                                        .includes("starter")
                                    ? "../../../../api/icons/starterDiamond.png"
                                    : "../../../../api/icons/goldDiamond.png")}
                                />
                              </div>
                            </div>

                            <Grid
                              item
                              sm={6}
                              xs={12}
                              style={{ maxWidth: "100%" }}
                            >
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
                                Experience Luxury Unveiled: Discover the
                                Brilliance of Our {item.title} Package
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

                              color: item.title
                                .toLowerCase()
                                .includes("starter")
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
                                  !item.title
                                    .toLowerCase()
                                    .includes("starter") &&
                                  "rgba(255, 255, 255, 0.12)",
                                borderColor:
                                  !item.title
                                    .toLowerCase()
                                    .includes("starter") &&
                                  "rgba(255, 255, 255, 0.12)",
                              }}
                            >
                              Choose Plan
                            </Button>
                          </Link>

                          <div style={{ marginTop: "15%" }}>
                            <h3
                              style={{
                                color: item.title
                                  .toLowerCase()
                                  .includes("starter")
                                  ? "black"
                                  : "white",
                              }}
                            >
                              Plan includes
                            </h3>

                            <div>
                              <div style={{ width: "100%" }}>
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

                                      color: item.title
                                        .toLowerCase()
                                        .includes("starter")
                                        ? "black"
                                        : "white",

                                      // fontWeight: "700",
                                    }}
                                    className=""
                                  >
                                    <img
                                      src={
                                        item.title
                                          .toLowerCase()
                                          .includes("basic")
                                          ? check2
                                          : check
                                      }
                                      style={{
                                        width: "16px",
                                        height: "16px",
                                        marginTop: "-5px",
                                      }}
                                    />

                                    <span>
                                      &nbsp;
                                      <strong>
                                        {" "}
                                        {item.pwSubPackage[0].noListing}
                                      </strong>{" "}
                                      Listings
                                    </span>
                                  </li>

                                  <li
                                    li
                                    style={{
                                      fontSize: "1rem",

                                      color: item.title
                                        .toLowerCase()
                                        .includes("starter")
                                        ? "black"
                                        : "white",

                                      // fontWeight: "700",
                                    }}
                                    className=""
                                  >
                                    <img
                                      src={
                                        item.title
                                          .toLowerCase()
                                          .includes("basic")
                                          ? check2
                                          : check
                                      }
                                      style={{
                                        width: "16px",
                                        height: "16px",
                                        marginTop: "-5px",
                                      }}
                                    />

                                    <span>
                                      &nbsp;
                                      <strong>
                                        {" "}
                                        {item.pwSubPackage[0].noOfUserLimit}
                                      </strong>{" "}
                                      User Limits
                                    </span>
                                  </li>

                                  {item.pwSubPackage[0].hotListing > 0 ? (
                                    <li
                                      style={{
                                        fontSize: "1rem",

                                        color: item.title
                                          .toLowerCase()
                                          .includes("starter")
                                          ? "black"
                                          : "white",

                                        // fontWeight: "700",
                                      }}
                                      className=""
                                    >
                                      <img
                                        src={
                                          item.title
                                            .toLowerCase()
                                            .includes("basic")
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
                                          {item.pwSubPackage[0].hotListing}
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

                                      color: item.title
                                        .toLowerCase()
                                        .includes("starter")
                                        ? "black"
                                        : "white",

                                      // fontWeight: "700",
                                    }}
                                    className=""
                                  >
                                    <img
                                      src={
                                        item.title
                                          .toLowerCase()
                                          .includes("basic")
                                          ? check2
                                          : check
                                      }
                                      style={{
                                        width: "16px",
                                        height: "16px",
                                        marginTop: "-5px",
                                      }}
                                    />

                                    <span>
                                      &nbsp;
                                      <strong>
                                        {item.pwSubPackage[0].noOfRefresh}
                                      </strong>{" "}
                                      Total Refreshes{" "}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* </Badge> */}
                      </>
                    );
                  })
                }
                responsive={responsive}
                autoPlay={false}
                infinite
                renderPrevButton={() => {
                  return (
                    <h2>
                      <ArrowBack style={{ fontSize: 30, cursor: "pointer" }} />
                    </h2>
                  );
                }}
                renderNextButton={() => {
                  return (
                    <h2>
                      <ArrowForward
                        style={{ fontSize: 30, cursor: "pointer" }}
                      />
                    </h2>
                  );
                }}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default PackagesList;
