import React, { useState, useEffect } from "react";

import NavbarSand from "../../../global-components/NavbarSand";

import Footer_v1 from "../../../global-components/footer";

import { Col, Row, Checkbox, Badge } from "antd";

import { useHistory, useLocation, Link } from "react-router-dom";

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BackwardOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import basic from "./icons/Vector(9).png";
import starter from "./icons/Vector(15).png";

import gold from "./icons/Vector(10).png";

import silver from "./icons/Vector(11).png";
import pro from "./icons/freelancerpro.png";
import plus from "./icons/freelancerplus.png";
import check from "./icons/icons8_star 1.png";

import frame from "./icons/Frame.svg";

import swal from "sweetalert";

import axios from "axios";

import { urlLink } from "../../../../constant/contact-us-constants";

import Loading from "../../../global-components/Loaders/Loading";

import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";

import en from "world_countries_lists/data/countries/en/world.json";

import { saveAmount } from "../../../../utils/mask";

const CheckoutV2 = (props) => {
  let paymentMethods = [
    {
      _id: 1,
      description: "Pay through debit/credit-card",
      url: require("./icons/paymob.png"),
    },
    {
      _id: 2,
      description: "Pay through EasyPaisa-JazzCash-DirectAccountDebit",
      url: require("./icons/blinq.png"),
    },
  ];
  const history = useHistory();

  const location = useLocation();

  const [selectedPackage, setSelectedPackage] = useState(
    location?.state?.packages?.pwSubPackage[0]
  );
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0]);
  const refCode = location?.state?.refCode;

  const [discount, setDiscount] = useState(null);

  const [loading, setLoading] = useState(false);

  const [payloading, setPayLoading] = useState(false);

  const [state, setState] = useState({
    discount: "",

    fullName: "",

    email: "",

    refcode: "",

    phone: {
      code: "+92",

      short: "PK",

      phone: "",
    },
  });

  const [title, setTitle] = useState("Checkout | Property Wallet");

  useEffect(() => {
    if (props.location.pathname == "/checkout") {
      setTitle("Checkout | Property Wallet");
    } else {
      setTitle("Checkout | Property Wallet");
    }

    // console.log(props.location.pathname)
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  // useEffect(() => {

  //   console.log("location", location);

  // }, [location]);

  const handlePackageChange = (packageItem) => {
    setDiscount(null);

    setState({
      ...state,

      discount: "",
    });

    setSelectedPackage(packageItem);
  };
  const handlePaymentChange = (payment) => {
    setSelectedPayment(payment);
  };
  //   console.log("selectedPackage", selectedPackage);

  const handleDiscount = async (e) => {
    e.preventDefault();

    if (state?.discount === "") {
      swal("Error!", `Please fill out discount field`, "error");
    } else {
      setLoading(true);

      let body = {
        subPackageId: selectedPackage?.id,

        discountCode: state?.discount,
      };

      await axios

        .post(`${urlLink}/V1/pwpackages/purchase/public/discount`, body)

        .then((res) => {
          swal(
            "Congratulations!",

            `${res?.data?.data?.discountPercentage}% of discount is applied`,

            "success"
          );

          setDiscount(res?.data?.data);

          setLoading(false);
        })

        .catch((err) => {
          setLoading(false);

          swal("Sorry!", `${err?.response?.data?.message}`, "error");
        });
    }
  };

  const handlePayment = async () => {
    if (
      state?.fullName === "" ||
      state?.email === "" ||
      state?.phone?.phone === ""
    ) {
      swal("Error!", `Please * fields are required`, "error");
    } else {
      setPayLoading(true);

      let body = {
        email: state?.email,

        fullName: state?.fullName,

        phone: state.phone.code.toString().includes("+")
          ? `${state.phone.code}${state.phone.phone}`
          : `+${state.phone.code}${state.phone.phone}`,

        PwSubPackageId: selectedPackage?.id,
      };

      if (state?.discount !== "") {
        body.discountCode = state?.discount;
      }

      if (refCode !== null) {
        body.refCode = refCode;
      }

      if (state?.refcode !== "") {
        body.refCode = state?.refcode;
      }

      await axios

        .post(
          selectedPayment?._id === 1
            ? `${urlLink}/V1/voucher-redeem/purchase/by-paymob`
            : `${urlLink}/V1/voucher-redeem/purchase`,
          body
        )

        .then((res) => {
          setPayLoading(false);

          window.open(
            `${
              res?.data?.data?.ClickToPayUrl !== null
                ? res?.data?.data?.ClickToPayUrl
                : `https://pakistan.paymob.com/api/acceptance/iframes/${process.env.REACT_APP_PYAMOB_TOKEN_VALUE}?payment_token=${res?.data?.data?.token}`
            }`,

            "",

            "width=700,height=500,left=400,top=120,"
          );

          history.goBack();
        })

        .catch((err) => {
          setPayLoading(false);

          swal("Sorry!", `${err?.response?.data?.message}`, "error");
        });
    }
  };

  return (
    <>
      <NavbarSand />

      <div style={{ marginLeft: "6%", marginRight: "6%", marginTop: "2%" }}>
        {/* section 1 start */}

        <h2 className="display-4 mb-3 ">Package</h2>

        <div className="checkout-package-container">
          <Row gutter={16}>
            <Col span={window.innerWidth > 460 ? 12 : 24}>
              <Row gutter={16}>
                <Col span={3}>
                  <img
                    src={
                      location?.state?.packages?.title

                        ?.toLowerCase()

                        ?.includes("basic")
                        ? basic
                        : location?.state?.packages?.title

                            ?.toLowerCase()

                            ?.includes("starter")
                        ? starter
                        : location?.state?.packages?.title

                            ?.toLowerCase()

                            ?.includes("silver")
                        ? silver
                        : location.state.packages.title
                            .toLowerCase()
                            .includes("freelancer pro")
                        ? pro
                        : location.state.packages.title
                            .toLowerCase()
                            .includes("freelancer plus")
                        ? plus
                        : gold
                    }
                    style={{ width: "70%" }}
                  />
                </Col>

                <Col span={21}>
                  <h5
                    style={{
                      fontWeight: "600",

                      //   fontSize: "12px",
                    }}
                  >
                    {location?.state?.packages?.title}
                  </h5>

                  <p>
                    Experience Luxury Unveiled: Discover the Brilliance of Our
                    &nbsp;
                    {location?.state?.packages?.title} Package
                  </p>

                  <div
                    style={{
                      fontStyle: "normal",

                      fontWeight: "bold",

                      fontSize: "28px",

                      marginTop: "3.5%",

                      fontFamily: "Poppins",
                    }}
                  >
                    PKR {selectedPackage?.charges}
                  </div>
                </Col>
              </Row>
            </Col>

            <Col span={window.innerWidth > 460 ? 12 : 24}>
              <h5
                style={{
                  fontWeight: "500",

                  //   fontSize: "12px",
                }}
              >
                Plan includes
              </h5>

              <div style={{ marginTop: "2%" }}>
                <Row gutter={16}>
                  <Col span={window.innerWidth > 460 ? 12 : 24}>
                    <li
                      style={{
                        fontSize: "1rem",

                        listStyle: "none",

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
                        <strong> {selectedPackage?.noListing}</strong> Listings
                      </span>
                    </li>
                  </Col>

                  <Col span={window.innerWidth > 460 ? 12 : 24}>
                    <li
                      style={{
                        fontSize: "1rem",

                        listStyle: "none",

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
                        <strong> {selectedPackage?.noOfUserLimit}</strong> User
                        Limits
                      </span>
                    </li>
                  </Col>
                </Row>

                <Row style={{ marginTop: "3%" }} gutter={16}>
                  <Col span={window.innerWidth > 460 ? 12 : 24}>
                    <li
                      style={{
                        fontSize: "1rem",

                        listStyle: "none",

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
                        <strong>{selectedPackage?.hotListing}</strong> Hot
                        Listings
                      </span>
                    </li>
                  </Col>

                  <Col span={window.innerWidth > 460 ? 12 : 24}>
                    <li
                      style={{
                        fontSize: "1rem",

                        listStyle: "none",

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
                        <strong>{selectedPackage?.noOfRefresh}</strong> Total
                        Refreshes{" "}
                      </span>
                    </li>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>

        {/* section 1 end */}

        {/* section 2  start*/}

        <h2 style={{ marginTop: "5%" }} className="display-4 mb-3">
          Choose Pricing
        </h2>

        <Row style={{ marginTop: "2.5%" }} gutter={16}>
          {location?.state !== undefined &&
            location?.state?.packages?.pwSubPackage.length > 0 &&
            location?.state?.packages?.pwSubPackage.map((item, i) => {
              return (
                <Col
                  onClick={() => handlePackageChange(item)}
                  style={{
                    cursor: "pointer",
                    marginTop: window.innerWidth < 460 && "5%",
                  }}
                  span={window.innerWidth > 460 ? 6 : 24}
                >
                  <Badge.Ribbon
                    color="cyan"
                    style={{ display: item?.title === "Monthly" && "none" }}
                    text={
                      item?.title !== "Monthly" && (
                        <span
                          style={{
                            fontWeight: "400",

                            // padding: "10px",

                            // backgroundColor: "#57B7B7",
                          }}
                        >
                          Save upto{" "}
                          <b>
                            {saveAmount(
                              location?.state?.packages?.pwSubPackage[0]
                                .charges,

                              item?.title.includes("Quarterly") ||
                                item?.title.includes("Quaterly")
                                ? 3
                                : item?.title.includes("Semi-Annually") ||
                                  item?.title.includes("Semi Annually") ||
                                  item?.title.includes("Semi Anually") ||
                                  item?.title.includes("Bi-Annually") ||
                                  item?.title.includes("Bi Annually") ||
                                  item?.title.includes("Bi-Anually") ||
                                  item?.title.includes("Bi Anually") ||
                                  item?.title.includes("Half Yearly") ||
                                  item?.title.includes("Half-Yearly") ||
                                  item?.title.includes("Half yearly")
                                ? 6
                                : item?.title.includes("Annually") ||
                                  item?.title.includes("Anually")
                                ? 12
                                : NaN,

                              item?.charges
                            )}{" "}
                          </b>
                          PKR
                        </span>
                      )
                    }
                  >
                    <div
                      className={
                        selectedPackage === item
                          ? "column-confirm-selected"
                          : "column-confirm-grey"
                      }
                    >
                      <div
                        className={
                          selectedPackage === item
                            ? "column-confirm-selected-sub"
                            : "column-confirm-grey-sub"
                        }
                      >
                        {item?.title}
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

                          <span
                            style={{ fontSize: "2.7rem", marginLeft: "1px" }}
                          >
                            {item?.charges}
                          </span>
                        </div>
                      </div>

                      <div
                        style={{
                          color: "grey",

                          marginLeft: "2%",

                          marginRight: "2%",

                          paddingBottom: "2%",

                          fontWeight: "bold",

                          display: "flex",

                          justifyContent: "space-between",
                        }}
                      >
                        <div>{`PKR ${item?.charges}/${
                          item?.title.includes("Monthly")
                            ? "month"
                            : item?.title.includes("Quarterly") ||
                              item?.title.includes("Quaterly")
                            ? "every 3 months"
                            : item?.title.includes("Semi-Annually") ||
                              item?.title.includes("Semi Annually") ||
                              item?.title.includes("Semi Anually") ||
                              item?.title.includes("Bi-Annually") ||
                              item?.title.includes("Bi Annually") ||
                              item?.title.includes("Bi Anually") ||
                              item?.title.includes("Bi-Anually") ||
                              item?.title.includes("Bi Anually") ||
                              item?.title.includes("Half Yearly") ||
                              item?.title.includes("Half-Yearly") ||
                              item?.title.includes("Half yearly")
                            ? "after 6 months"
                            : item?.title.includes("Annually") ||
                              item?.title.includes("Anually")
                            ? "per year"
                            : ""
                        }`}</div>

                        <div>
                          <Checkbox
                            checked={selectedPackage === item}
                            onChange={() => handlePackageChange(item)}
                          />
                        </div>
                      </div>
                    </div>
                  </Badge.Ribbon>
                </Col>
              );
            })}
        </Row>

        {/* choose payment method start */}
        <h2 style={{ marginTop: "5%" }} className="display-4 mb-3">
          Choose a payment method
        </h2>
        <Row style={{ marginTop: "2.5%" }} gutter={16}>
          {paymentMethods.map((item, i) => {
            return (
              <Col
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handlePaymentChange(item);
                }}
                key={item._id}
                span={window.innerWidth > 460 ? 6 : 24}
              >
                <div style={{ textAlign: "center", position: "relative" }}>
                  {item._id === selectedPayment?._id && (
                    <div
                      style={{ position: "absolute", right: "-2%", top: "-5%" }}
                    >
                      <CheckCircleOutlined className="payment-method-icon-selected" />
                    </div>
                  )}

                  <div
                    className={
                      item._id === selectedPayment?._id
                        ? "payment-method-card-selected"
                        : "payment-method-card"
                    }
                  >
                    <img src={item.url} width="50%" />
                  </div>
                  <span style={{ color: "grey" }}>{item?.description}</span>
                </div>
              </Col>
            );
          })}
        </Row>
        {/* choose payment method end */}
        {/* section 2 end */}

        {/* Section 3 start */}

        <h2 style={{ marginTop: "5%" }} className="display-4 mb-3">
          Checkout
        </h2>

        <div className="checkout-checkout-container">
          <Row gutter={16}>
            <Col span={window.innerWidth > 460 ? 16 : 24}>
              <Row gutter={16}>
                <Col span={window.innerWidth > 460 ? 12 : 24}>
                  <label
                    style={{
                      marginBottom: "5px",

                      fontWeight: "600",

                      color: "grey",
                    }}
                  >
                    Subscriber name <span style={{ color: "red" }}> *</span>
                  </label>

                  <input
                    style={{ borderRadius: "8px" }}
                    type="text"
                    name="fullName"
                    placeholder="Enter name"
                    value={state?.refNo}
                    onChange={(e) =>
                      setState({
                        ...state,

                        fullName: e.target.value,
                      })
                    }
                  />
                </Col>

                <Col span={window.innerWidth > 460 ? 12 : 24}>
                  <label
                    style={{
                      marginBottom: "5px",

                      fontWeight: "600",

                      color: "grey",
                    }}
                  >
                    Email <span style={{ color: "red" }}> *</span>
                  </label>

                  <input
                    style={{ borderRadius: "8px" }}
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    value={state?.refNo}
                    onChange={(e) =>
                      setState({
                        ...state,

                        email: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={window.innerWidth > 460 ? 12 : 24}>
                  <label
                    style={{
                      marginBottom: "5px",

                      fontWeight: "600",

                      color: "grey",
                    }}
                  >
                    Phone <span style={{ color: "red" }}> *</span>
                  </label>

                  <ConfigProvider locale={en}>
                    <CountryPhoneInput
                      inline
                      placeholder="Enter your phone No."
                      disabled={state?.isCheck}
                      onKeyPress={(event) => {
                        if (!/[0-9,.]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      maxLength={20}
                      value={state.phone}
                      onChange={(e) =>
                        setState({
                          ...state,

                          phone: e,
                        })
                      }
                      defaultValue={{
                        short: "PK",
                      }}
                    />
                  </ConfigProvider>
                </Col>

                <Col span={window.innerWidth > 460 ? 12 : 24}>
                  <label
                    style={{
                      marginBottom: "5px",

                      fontWeight: "600",

                      color: "grey",
                    }}
                  >
                    Ref Code
                  </label>

                  <input
                    style={{
                      borderRadius: "8px",

                      cursor: refCode != null && "not-allowed",

                      backgroundColor: refCode != null && "#F5F5F8",
                    }}
                    type="text"
                    name="refcode"
                    disabled={refCode !== null}
                    placeholder="Enter refcode"
                    value={refCode != null ? refCode : state?.refNo}
                    onChange={(e) =>
                      setState({
                        ...state,

                        refcode: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>

              <div className="discount-container">
                <Row gutter={16}>
                  <Col span={window.innerWidth > 460 ? 18 : 24}>
                    <div style={{ padding: "30px" }}>
                      <h5
                        style={{
                          fontWeight: "600",

                          fontSize: "22px",
                        }}
                      >
                        Want some discount?
                      </h5>

                      <p
                        style={{
                          fontWeight: "600",

                          fontSize: "16px",

                          color: "grey",
                        }}
                      >
                        Please enter your discount code
                      </p>

                      <div className="ltn__search-widget">
                        <form action="#">
                          <input
                            type="text"
                            name="search"
                            placeholder="Enter discount code"
                            value={state?.discount}
                            onChange={(e) =>
                              setState({
                                ...state,

                                discount: e.target.value,
                              })
                            }
                          />

                          <button
                            disabled={loading || payloading}
                            onClick={(e) => {
                              handleDiscount(e);
                            }}
                          >
                            {loading ? (
                              <Loading />
                            ) : (
                              <>
                                Apply
                                {/* <i className="fas fa-search" /> */}
                              </>
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  </Col>

                  <Col span={window.innerWidth > 460 ? 6 : 24}>
                    <img src={frame} />
                  </Col>
                </Row>
              </div>
            </Col>

            <Col span={window.innerWidth > 460 ? 8 : 24}>
              <div className="summary-container">
                <h5
                  style={{
                    fontWeight: "600",

                    //   fontSize: "12px",
                  }}
                >
                  Summary
                </h5>

                <br />

                <Row>
                  <Col span={3}>
                    <img
                      src={
                        location?.state?.packages?.title

                          ?.toLowerCase()

                          ?.includes("basic")
                          ? basic
                          : location?.state?.packages?.title

                              ?.toLowerCase()

                              ?.includes("starter")
                          ? starter
                          : location?.state?.packages?.title

                              ?.toLowerCase()

                              ?.includes("silver")
                          ? silver
                          : location.state.packages.title
                              .toLowerCase()
                              .includes("freelancer pro")
                          ? pro
                          : location.state.packages.title
                              .toLowerCase()
                              .includes("freelancer plus")
                          ? plus
                          : gold
                      }
                      style={{ width: "70%" }}
                    />
                  </Col>

                  <Col span={21}>
                    <h5
                      style={{
                        fontWeight: "500",

                        //   fontSize: "12px",
                      }}
                    >
                      {location?.state?.packages?.title}
                    </h5>
                  </Col>
                </Row>

                <hr style={{ marginTop: "4%" }} />

                <div style={{ height: "180px" }}>
                  <Row gutter={16}>
                    <Col span={14}>
                      <h5
                        style={{
                          fontWeight: "500",
                        }}
                      >
                        Sub total
                      </h5>
                    </Col>

                    <Col span={10}>
                      <h5
                        style={{
                          fontWeight: "500",

                          color: "grey",

                          float: "right",
                        }}
                      >
                        {`PKR ${selectedPackage?.charges}`}
                      </h5>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col span={14}>
                      <h5
                        style={{
                          fontWeight: "500",
                        }}
                      >
                        Discount
                      </h5>
                    </Col>

                    <Col span={10}>
                      <h5
                        style={{
                          fontWeight: "500",

                          color: "grey",

                          float: "right",
                        }}
                      >
                        {`PKR ${
                          discount !== null ? discount?.discountAmount : 0
                        }`}
                      </h5>
                    </Col>
                  </Row>
                </div>

                <Row gutter={16}>
                  <Col span={14}>
                    <h5
                      style={{
                        fontWeight: "500",
                      }}
                    >
                      Amount to be paid
                    </h5>
                  </Col>

                  <Col span={10}>
                    <h5
                      style={{
                        fontWeight: "500",

                        color: "grey",

                        float: "right",
                      }}
                    >
                      {`PKR ${
                        discount !== null
                          ? discount?.afterDiscountAmount
                          : selectedPackage?.charges
                      }`}
                    </h5>
                  </Col>
                </Row>

                <div className="btn-wrapper mt-4">
                  <button
                    style={{
                      width: "100%",

                      borderRadius: "8px",
                    }}
                    disabled={loading || payloading}
                    onClick={() => {
                      handlePayment();
                    }}
                    className="custom--login-btn-1 btn"
                  >
                    {payloading ? <Loading /> : "Pay now"}
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Section 3 end */}
      </div>

      <Footer_v1 />
    </>
  );
};

export default CheckoutV2;
