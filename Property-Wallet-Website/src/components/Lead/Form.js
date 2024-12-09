import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { urlLink } from "../../constant/contact-us-constants";
import { useHistory } from "react-router-dom";
import Loading from "../global-components/Loaders/Loading";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import Carousel from "./CarouselModal";
import CarouselModal from "./CarouselModal";
const Form = ({ data, decoded }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const [state, setState] = useState({
    leadname: "",
    phone: {
      code: "+92",
      short: "PK",
      phone: "",
    },
    email: "",
    whatsapp: "",
    location: "",
    description: "",
  });
  const onChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const toggle = () => {
    setVisible(!visible);
  };
  const handleSubmit = async () => {
    let body = {
      name: state.leadname,
      email: state.email !== "" ? state.email : null,
      phone: state.phone.code.toString().includes("+")
        ? `${state.phone.code}${state.phone.phone}`
        : `+${state.phone.code}${state.phone.phone}`,
      description: state.description,
      location: state.location,
      leadSource: "FromWeb",
      // inventoryId: decoded.inventoryId,
    };
    if (
      decoded.propertyWalletProductPlotId &&
      decoded.propertyWalletProductPlotId?.trim().length > 0
    ) {
      body.propertyWalletProductPlotId = parseInt(
        decoded.propertyWalletProductPlotId
      );
    }
    if (
      decoded.propertyWalletInventoryPlotId &&
      decoded.propertyWalletInventoryPlotId?.trim().length > 0
    ) {
      body.propertyWalletInventoryPlotId = parseInt(
        decoded.propertyWalletInventoryPlotId
      );
    }
    if (decoded.inventoryId && decoded.inventoryId?.trim().length > 0) {
      body.inventoryId = parseInt(decoded.inventoryId);
    }

    await axios
      .post(`${urlLink}/V1/lead/add-public-lead/${decoded.createdBy}`, body)
      .then((res) => {
        swal({
          title: "Congratulations!",
          text: "Your form has been submitted. You will be contacted soon!",
          icon: "success",
        }).then((isOk) => {
          if (isOk) {
            history.replace("/");
          } else {
            history.replace("/");
          }
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        swal("Sorry!", `${err?.response?.data?.message}`, "error");
      });
  };
  // console.log("data", data);
  return (
    <>
      {data?.project?.projectPhotos !== null && visible && (
        <CarouselModal
          visible={visible}
          toggle={toggle}
          photos={data?.projectPhotos}
        />
      )}

      <div
        className="bg-white"
        style={{
          border: "",
          marginLeft: "1%",
          marginRight: "1%",
          marginTop: "",
        }}
      >
        <div
          className="row ltn__custom-gutter--- justify-content-center go-top bg-white"
          style={{
            border: "",
            marginLeft: "1%",
            marginRight: "1%",
          }}
        >
          <div
            //   style={{ backgroundColor: "red" }}
            className=" col-lg-6 col-sm-8 col-12"
          >
            <div className="box-shadow-form">
              <h5 style={{ fontWeight: "580" }}>Inventory</h5>
              <div className="row form-section-one">
                <div className="col-lg-4 col-sm-4 col-12">
                  <img
                    onClick={() => {
                      toggle();
                    }}
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "contain",
                      borderRadius: "12px",
                    }}
                    src={
                      data?.title === "inventory"
                        ? data?.projectPhotos !== null
                          ? data?.projectPhotos[0].photo
                          : require("../../components/images/lead/Rectangle 1051.png")
                        : data?.projectPhotos !== null
                        ? data?.projectPhotos[0].photo
                        : require("../../components/images/lead/Rectangle 1051.png")
                    }
                    // src={require("../../components/images/lead/Rectangle 1051.png")}
                  />
                </div>
                <div className="col-lg-8 col-sm-8 col-12">
                  <h5
                    style={{
                      fontWeight: "500",
                      marginTop: window.innerWidth < 500 && "2%",
                    }}
                  >
                    {data?.title === "inventory"
                      ? data?.projectName !== ""
                        ? data.projectName
                        : "-"
                      : data?.projectName !== ""
                      ? data.projectName
                      : "-"}
                  </h5>
                  {/* <h5
                    style={{
                      fontWeight: "500",
                      fontSize: "14px",
                      marginTop: "-2.8%",
                    }}
                  >
                    Plot Type
                  </h5> */}
                  <div
                    style={{
                      marginTop: "-1%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h5
                        style={{
                          fontWeight: "500",
                          fontSize: "14px",
                          color: "grey",
                        }}
                      >
                        {data?.title === "inventory"
                          ? data?.address !== ""
                            ? data.address
                            : "-"
                          : data?.address !== ""
                          ? data.address
                          : "-"}
                      </h5>
                    </div>
                    <div>
                      <h5
                        style={{
                          fontWeight: "700",
                          fontSize: "16px",
                          color: "grey",
                        }}
                      >
                        Price:{" "}
                        <span style={{ color: "#27A3A3" }}>
                          {data?.title === "inventory"
                            ? data?.price !== ""
                              ? data.price
                              : "-"
                            : data?.price !== ""
                            ? data.price
                            : "-"}
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "-1%",
                      borderWidth: 1,
                      borderColor: "#E8EAED",
                      borderStyle: "solid",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <div>
                      <img
                        src={require("../../components/images/lead/Vector(5).png")}
                      />{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          color: "grey",
                        }}
                      >
                        &nbsp;&nbsp;{" "}
                        {data?.title === "inventory"
                          ? data?.bedroom !== ""
                            ? data.bedroom
                            : "-"
                          : data?.propertyWalletProductRoom?.Bedrooms !== null
                          ? data?.propertyWalletProductRoom?.Bedrooms
                          : "-"}
                      </span>
                    </div>

                    <div>
                      <img
                        src={require("../../components/images/lead/Vector(7).png")}
                      />{" "}
                      <span
                        style={{
                          fontSize: "13px",
                          color: "grey",
                        }}
                      >
                        &nbsp;&nbsp;{" "}
                        {data?.title === "inventory"
                          ? data?.landSize !== ""
                            ? data?.landSize
                            : "-"
                          : data?.landSize !== ""
                          ? data?.landSize
                          : "-"}{" "}
                        {data?.title === "inventory"
                          ? data?.landArea !== ""
                            ? data?.landArea
                            : "-"
                          : data?.landArea !== ""
                          ? data?.landArea
                          : "-"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: window.innerWidth < 500 ? "5%" : "2%" }}>
                <h5 style={{ fontWeight: "580" }}>Details</h5>
                <div className="form-section-two">
                  <div style={{ marginLeft: "2%" }} className="row">
                    <div className="col-lg-6 col-sm-6 col-12">
                      <span style={{ color: "grey", fontWeight: "550" }}>
                        Project Name: &nbsp; &nbsp;&nbsp;
                        <span style={{ color: "black" }}>
                          {data?.title === "inventory"
                            ? data?.projectName !== ""
                              ? data.projectName
                              : "-"
                            : data?.projectName !== ""
                            ? data.projectName
                            : "-"}
                        </span>
                      </span>
                    </div>
                    <div
                      style={{ marginTop: window.innerWidth < 500 && "2%" }}
                      className="col-lg-6 col-sm-6 col-12"
                    >
                      <span style={{ color: "grey", fontWeight: "550" }}>
                        Price: &nbsp; &nbsp;&nbsp;
                        <span style={{ color: "black" }}>
                          {" "}
                          {data?.title === "inventory"
                            ? data?.price !== ""
                              ? data.price
                              : "-"
                            : data?.price !== ""
                            ? data.price
                            : "-"}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div
                    style={{ marginLeft: "2%", marginTop: "2%" }}
                    className="row"
                  >
                    <div className="col-lg-6 col-sm-6 col-12">
                      <span style={{ color: "grey", fontWeight: "550" }}>
                        Area Size: &nbsp; &nbsp;&nbsp;
                        <span style={{ color: "black" }}>
                          {data?.title === "inventory"
                            ? data?.landSize !== ""
                              ? data?.landSize
                              : "-"
                            : data?.landSize !== ""
                            ? data?.landSize
                            : "-"}{" "}
                          {data?.title === "inventory"
                            ? data?.landArea !== ""
                              ? data?.landArea
                              : "-"
                            : data?.landArea !== ""
                            ? data?.landArea
                            : "-"}
                        </span>
                      </span>
                    </div>
                    <div
                      style={{ marginTop: window.innerWidth < 500 && "2%" }}
                      className="col-lg-6 col-sm-6 col-12"
                    >
                      <span style={{ color: "grey", fontWeight: "550" }}>
                        Location: &nbsp; &nbsp;&nbsp;
                        <span style={{ color: "black" }}>
                          {data?.title === "inventory"
                            ? data?.address !== ""
                              ? data.address
                              : "-"
                            : data?.address !== ""
                            ? data.address
                            : "-"}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div
                    style={{ marginLeft: "2%", marginTop: "2%" }}
                    className="row"
                  >
                    <div className="col-lg-12 col-sm-12 col-12">
                      <span style={{ color: "grey", fontWeight: "550" }}>
                        Features: &nbsp; &nbsp;&nbsp;
                        {data?.title === "inventory" ? (
                          "N/A"
                        ) : (
                          <>
                            {data?.propertyWalletProductFeature
                              ?.doubleGazedWindow === true && (
                              <>
                                <img
                                  src={require("../../components/images/lead/Vector(8).png")}
                                />{" "}
                                <span style={{ color: "black" }}>
                                  Double Gazed Window
                                </span>
                                &nbsp;&nbsp; &nbsp;&nbsp;{" "}
                              </>
                            )}
                            {data?.propertyWalletProductFeature
                              ?.centralAirConditioning === true && (
                              <>
                                <img
                                  src={require("../../components/images/lead/Vector(8).png")}
                                />{" "}
                                <span style={{ color: "black" }}>
                                  Central Air Conditioning
                                </span>
                                &nbsp;&nbsp; &nbsp;&nbsp;{" "}
                              </>
                            )}
                            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            {window.innerWidth < 500 && (
                              <div style={{ marginTop: "-10px" }}>
                                <br />
                              </div>
                            )}
                            {data?.propertyWalletProductFeature
                              ?.lobbyInBuilding === true && (
                              <>
                                <img
                                  src={require("../../components/images/lead/Vector(8).png")}
                                />{" "}
                                <span style={{ color: "black" }}>
                                  Lobby in building
                                </span>
                                &nbsp;&nbsp; &nbsp;&nbsp;{" "}
                              </>
                            )}
                            {data?.propertyWalletProductFeature
                              ?.electricityBackup === true && (
                              <>
                                <img
                                  src={require("../../components/images/lead/Vector(8).png")}
                                />{" "}
                                <span style={{ color: "black" }}>
                                  Backup generators
                                </span>
                              </>
                            )}
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ marginTop: window.innerWidth < 500 && "5%" }}
            //   style={{ backgroundColor: "green" }}
            className="col-lg-6 col-sm-8 col-12"
          >
            <h4 style={{ marginTop: "2%" }} className="title-2">
              Interested in this property ?
            </h4>
            <div style={{ marginTop: "-2%" }} className="row">
              <div className="col-lg-6 col-sm-6 col-12">
                <label>
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  style={{
                    borderRadius: "8px",
                  }}
                  type="text"
                  name="leadname"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => onChange(e.target.value, "leadname")}
                />
              </div>
              <div className="col-lg-6 col-sm-6 col-12">
                <label>Preferred Area</label>
                <input
                  style={{
                    borderRadius: "8px",
                  }}
                  type="text"
                  name="location"
                  placeholder="Enter your Preferred Area"
                  onChange={(e) => onChange(e.target.value, "location")}
                  required
                />
              </div>
            </div>
            <div style={{ marginTop: "-2%" }} className="row">
              <div className="col-lg-6 col-sm-6 col-12">
                <label>
                  Phone No <span style={{ color: "red" }}>*</span>
                </label>
                <ConfigProvider locale={en}>
                  <CountryPhoneInput
                    inline
                    disabled={state?.isCheck}
                    onKeyPress={(event) => {
                      if (!/[0-9,.]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    maxLength={20}
                    value={state.phone}
                    onChange={(e) => onChange(e, "phone")}
                    defaultValue={{
                      short: "PK",
                    }}
                  />
                </ConfigProvider>
              </div>
              <div
                style={{ marginTop: window.innerWidth < 500 && "4%" }}
                className="col-lg-6 col-sm-6 col-12"
              >
                <label>Email</label>
                <input
                  style={{
                    borderRadius: "8px",
                  }}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => onChange(e.target.value, "email")}
                  required
                />
              </div>
            </div>
            <div style={{ marginTop: "-2%" }} className="row">
              <div className="col-lg-12 col-sm-12 col-12">
                <label>Notes</label>
                <textarea
                  style={{
                    borderRadius: "8px",
                    resize: "none",
                  }}
                  type="text"
                  name="requirements"
                  onChange={(e) => onChange(e.target.value, "description")}
                  placeholder=""
                  autoComplete="off"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginRight: "5%" }}>
          <div
            style={{ float: window.innerWidth > 500 && "right" }}
            className="btn-wrapper animated"
          >
            <button
              disabled={loading}
              onClick={() => {
                var mailformat =
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (
                  state.leadname.toString().trim().length === 0 ||
                  state.phone.toString().trim().length === 0
                ) {
                  swal("Error!", `Please fill out required fields`, "error");
                } else if (state.email.toString().trim().length > 0) {
                  if (!state.email.match(mailformat)) {
                    swal("Sorry!", "Invalid email", "error");
                  } else {
                    handleSubmit();
                  }
                } else {
                  handleSubmit();
                }
              }}
              className="theme-btn-Home btn btn-effect-1 "
              style={{
                marginTop: window.innerWidth < 500 ? "-3%" : "5%",
                marginBottom: "3%",
                marginLeft: window.innerWidth < 500 && "4%",
                width: window.innerWidth < 500 && "98%",
              }}
            >
              {loading && <Loading />} Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
