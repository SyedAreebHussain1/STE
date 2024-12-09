import React, { useEffect, useState } from "react";
import NavbarV2 from "../global-components/navbar-v2";
import { Col, Row } from "antd";
import { Radio } from "antd";
import swal from "sweetalert";
import Loading from "../global-components/Loaders/Loading";
import Verify from "../Verify/Verify";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import axios from "axios";
import { urlLink } from "../../constant/contact-us-constants";
import NavbarSand from "../global-components/NavbarSand";
const PwForm = (props) => {
  const [state, setState] = useState({
    refNo: "",
    setData: null,
    phone: {
      code: "+92",
      short: "PK",
      phone: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    if (state.refNo === "" || state.phone.phone === "") {
      swal("Error!", `Please fill out required fields`, "error");
      setLoading(false);
      return;
    }
    let body = {
      phone: state.phone.code.toString().includes("+")
        ? `${state.phone.code}${state.phone.phone}`
        : `+${state.phone.code}${state.phone.phone}`,
      formNo: state?.refNo,
    };
    await axios
      .post(`${urlLink}/V1/lead/get-client-otp`, body)
      .then((res) => {
        if (res) {
          setState({
            ...state,
            setData: "submitted",
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        swal("Sorry!", `${err?.response?.data?.message}`, "error");
      });
  };
  let arr = [
    {
      title: "ABC",
      value: 123,
    },
    {
      title: "XyZ",
      value: 123444,
    },
  ];
  console.log("arr", arr[8]);
  return (
    <div>
      {/* <NavbarV2 /> */}
      <NavbarSand />

      <div
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "4%",
          // backgroundColor: "green",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          {state.setData === null ? (
            <>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title-area text-center">
                      <h1
                        style={{ fontSize: "28px" }}
                        className="section-title"
                      >
                        Conveniently Manage Your Files with
                        <br />
                        Our Real Estate Management System Portal.
                      </h1>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginLeft: "20%",
                    marginRight: "20%",
                    marginTop: "-6%",
                  }}
                  className="row"
                >
                  <div className="col-lg-12">
                    <div className="account-login-inner">
                      <div className="ltn__form-box contact-form-box">
                        <label
                          style={{
                            marginBottom: "5px",
                            fontWeight: "600",
                            color: "grey",
                          }}
                        >
                          Ref No.# <span style={{ color: "red" }}> *</span>
                        </label>
                        <input
                          style={{ borderRadius: "8px" }}
                          type="text"
                          name="ref No"
                          placeholder="Enter your Ref No"
                          value={state?.refNo}
                          onChange={(e) =>
                            setState({
                              ...state,
                              refNo: e.target.value,
                            })
                          }
                        />
                        <label
                          style={{
                            marginBottom: "5px",
                            fontWeight: "600",
                            color: "grey",
                          }}
                        >
                          Phone No. <span style={{ color: "red" }}> *</span>
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

                        <div className="btn-wrapper mt-4">
                          <button
                            style={{ width: "100%", borderRadius: "8px" }}
                            className="custom--login-btn-1 btn"
                            // type="submit"
                            onClick={() => {
                              handleSubmit();
                            }}
                            disabled={loading}
                          >
                            {loading ? <Loading /> : "Submit"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Verify refNo={state?.refNo} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PwForm;
