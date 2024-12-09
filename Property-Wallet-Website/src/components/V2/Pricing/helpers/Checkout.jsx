import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BackwardOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import React, { useState, useEffect } from "react";
import NavbarSand from "../../../global-components/NavbarSand";
import Heading from "./Heading";
import { useHistory, useLocation } from "react-router-dom";
import { Checkbox } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Button, Form, Input, Card, message, Row, Col, Upload } from "antd";
import check from "../../../images/checkli.png";
import swal from "sweetalert";
import axios from "axios";
import { urlLink } from "../../../../constant/contact-us-constants";
import Loading from "../../../global-components/Loaders/Loading";
import Footer_v1 from "../../../global-components/footer";

const Checkout = (props) => {
  const history = useHistory();
  const location = useLocation();
  let item = location?.state?.package;
  let selectedPackage = location?.state?.selectedPackage;
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

  const [title, setTitle] = useState("About | Property Wallet");

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
  //   useEffect(() => {
  //     console.log("location", location);
  //   }, [location]);

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
      if (state?.refcode !== "") {
        body.refCode = state?.refcode;
      }
      await axios
        .post(`${urlLink}/V1/voucher-redeem/purchase`, body)
        .then((res) => {
          setPayLoading(false);
          window.open(
            `${res?.data?.data?.ClickToPayUrl}`,
            "",
            "width=700,height=500,left=400,top=120,"
          );
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
      <Heading Heading="Checkout" />
      <div style={{ marginLeft: "2%", marginRight: "2%", marginTop: "2%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5%",
          }}
        >
          <button
            style={{ boxShadow: "0px 0px 1px 1px #e7e2e2" }}
            className="subcrib-button"
            onClick={() => {
              history.goBack();
            }}
          >
            <ArrowLeftOutlined /> Back
          </button>
        </div>
      </div>
      <div
        style={{
          marginLeft: "8%",
          marginRight: "8%",
          marginTop: "2%",
          boxShadow: "0px 0px 1px 1px #e7e2e2",
          borderRadius: "8px",
          padding: "15px",
        }}
      >
        <h5>Payment details</h5>
        <p>Check you details and review before finalizing</p>

        <Row gutter={16}>
          <Col span={16}>
            <br />
            <h4 className="title-2">User information</h4>
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
                  style={{ borderRadius: "8px" }}
                  type="text"
                  name="refcode"
                  placeholder="Enter refcode"
                  value={state?.refNo}
                  onChange={(e) =>
                    setState({
                      ...state,
                      refcode: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>

            <Row style={{ marginTop: "4%" }} gutter={16}>
              <Col span={window.innerWidth > 460 ? 12 : 24}>
                <br />
                <h4 className="title-2">Want some discount?</h4>

                <div className="ltn__search-widget">
                  <form action="#">
                    <input
                      type="text"
                      name="search"
                      placeholder="Enter discount code"
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
                      {loading ? <Loading /> : <i className="fas fa-search" />}
                    </button>
                  </form>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <br />
            <h4 className="title-2">Plan details</h4>
            <div style={{ marginLeft: "6%", marginRight: "6%" }}>
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
                      {selectedPackage?.charges}
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
                          <strong> {selectedPackage?.noOfRefresh}</strong>{" "}
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
                          <strong> {selectedPackage?.noListing}</strong>{" "}
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
                          <strong> {selectedPackage?.noOfUserLimit}</strong>{" "}
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
                          <strong>{selectedPackage?.hotListing}</strong> Hot
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
                          <strong>{selectedPackage?.numberOfMonth}</strong>{" "}
                          Total Months{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div
          style={{
            marginTop: "2%",
            boxShadow: "0px 0px 1px 1px #e7e2e2",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          <Row gutter={16}>
            <Col span={14}>
              <span style={{ color: "grey" }}>Subtotal</span>
            </Col>
            <Col span={10}>
              <span style={{ color: "grey", float: "right" }}>
                {" "}
                {selectedPackage?.charges}
              </span>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }} gutter={16}>
            <Col span={14}>
              <span style={{ color: "grey" }}>Discount</span>
            </Col>
            <Col span={10}>
              <span style={{ color: "grey", float: "right" }}>
                {" "}
                {discount !== null ? discount?.discountAmount : 0}
              </span>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }} gutter={16}>
            <Col span={14}>
              <span style={{ color: "grey" }}>Total amount</span>
            </Col>
            <Col span={10}>
              <span style={{ color: "grey", float: "right" }}>
                {discount !== null
                  ? discount?.afterDiscountAmount
                  : selectedPackage?.charges}
              </span>
            </Col>
          </Row>
        </div>
        <Row style={{ marginTop: "10px" }} gutter={16}>
          <Col span={24}>
            <div style={{ float: "right" }} className="btn-wrapper mt-4">
              <button
                style={{ width: "100%", borderRadius: "8px" }}
                className="custom--login-btn-1 btn"
                disabled={loading || payloading}
                onClick={() => {
                  handlePayment();
                }}
              >
                {payloading ? <Loading /> : "Pay now"}
              </button>
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <Footer_v1 />
    </>
  );
};

export default Checkout;
