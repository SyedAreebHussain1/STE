import React, { useEffect, useState } from "react";
import { Button, Form, Input, Card, message, Result } from "antd";
import { Link } from "react-router-dom";
import { useForm } from "antd/lib/form/Form";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import OtpInput from "react-otp-input";
import Loading from "../global-components/Loaders/Loading";
import { useReactToPrint } from "react-to-print";
import ApplicationForm from "../ApplicationForm/ApplicationForm";
import * as htmlToImage from "html-to-image";
import Sticker from "../Sticker/Sticker";
import Form5 from "../ApplicationForm/Form5";
import axios from "axios";
import { urlLink } from "../../constant/contact-us-constants";
import swal from "sweetalert";
import ColorPicker from "../ColorPicker/ColorPicker";
const Verify = ({ refNo }) => {
  const [loading, setLoading] = useState(false);
  const [OTP, setOTP] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [cnic, setCnic] = useState("");
  const [token, setToken] = useState(null);
  const [isDownPaymentValidation, setIsDownPaymentValidation] = useState(false);
  const [fromsData, setFormsData] = useState({
    bookingForm: null,
    applicationForm: null,
    sticker: null,
  });
  const [pickedColor, setPickedColor] = useState({
    color: "#844387",
    id: null,
  });
  const [form] = useForm();
  const dispatch = useDispatch();
  const handleChange = (values) => {
    // console.log("VALUES", values);
    setOTP(values);
  };

  const submitOtp = async () => {
    setLoading(true);
    let body = {
      otpCode: OTP,
      formNo: refNo,
    };
    await axios
      .post(`${urlLink}/V1/lead/verify-client-otp`, body)
      .then((res) => {
        if (res?.data) {
          getForms(res?.data?.data);
        }
      })
      .catch((err) => {
        setLoading(false);
        swal("Sorry!", `${err?.response?.data?.message}`, "error");
      });
  };
  const getForms = async (token) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    await axios
      .get(`${urlLink}/V1/lead/client-file`, { headers })
      .then((res) => {
        if (Object.entries(res?.data?.data).length === 0) {
          setIsVerified(true);
          setToken(token);
          setIsDownPaymentValidation(true);
          setLoading(false);
        } else {
          setFormsData({
            ...FormData,
            bookingForm: res?.data?.data?.bookingForm,
            applicationForm: res?.data?.data?.bookingForm,
            sticker: res?.data?.data?.sticker?.stickerSection,
          });
          setIsVerified(true);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        swal("Sorry!", `${err?.response?.data?.message}`, "error");
      });
  };

  //sticker module start
  const componentRefSticker = React.useRef(null);
  const domEl = React.useRef(null);
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    // download image
    const link = document.createElement("a");
    link.download = "sticker.png";
    link.href = dataUrl;
    link.click();
  };

  //sticker module end

  // 1 Print module start
  const [printdata, setPrintData] = useState(null);
  const customPrintRef = React.useRef(null);

  const handlePrint = useReactToPrint({
    content: () => customPrintRef.current,
    onAfterPrint: () => setPrintData(null),
    copyStyles: true,
    pageStyle: `
    @page
      {
  size: a4 !important;
  margin: 0px;
  
      }`,
  });
  //margin 1cm for header and footer
  useEffect(() => {
    if (printdata !== null) {
      handlePrint();
    }
  }, [printdata]);
  //1 Print module end

  // 2 Print module start
  const [form5, setForm5] = useState(null);
  const customForm5Ref = React.useRef(null);

  const handlePrintForm5 = useReactToPrint({
    content: () => customForm5Ref.current,
    onAfterPrint: () => setForm5(null),
    copyStyles: true,
    pageStyle: `
    @page
      {
  size: a4 !important;
  margin: 0px;
  
      }`,
  });

  useEffect(() => {
    if (form5 !== null) {
      handlePrintForm5();
    }
  }, [form5]);
  //2 Print module end

  const getFormDataByCNIC = async () => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    await axios
      .get(`${urlLink}/V1/lead/client-fromone/${cnic}`, { headers })
      .then((res) => {
        if (Object.entries(res?.data?.data).length === 0) {
          swal("Sorry!", `Data not found for this CNIC NO. ${cnic}`, "error");
          setLoading(false);
        } else {
          setForm5(res?.data?.data?.bookingForm);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        swal("Sorry!", `${err?.response?.data?.message}`, "error");
      });
  };
  return (
    <div style={{ marginTop: "-15%" }} className="container">
      <div className="d-print-block" ref={customPrintRef}>
        {printdata !== null && (
          <ApplicationForm
            colorCodes={{
              color1: pickedColor.color,
              color2: `${pickedColor.color}14`,
            }}
            data_prop={printdata}
          />
        )}
      </div>
      <div className="d-print-block" ref={customForm5Ref}>
        {form5 !== null && (
          <Form5
            colorCodes={{
              color1: pickedColor.color,
              color2: `${pickedColor.color}14`,
            }}
            data_prop={form5}
          />
        )}
      </div>
      {fromsData?.sticker !== null && (
        <Sticker
          componentRefSticker={componentRefSticker}
          domEl={domEl}
          sellingPoint={fromsData?.sticker}
          soN={fromsData?.bookingForm?.section1?.soType}
        />
      )}

      {isVerified ? (
        <>
          {/* <ColorPicker
            pickedColor={pickedColor}
            setPickedColor={setPickedColor}
            projectLogo={
              (fromsData?.applicationForm?.section1 &&
                fromsData?.applicationForm?.section1?.url !== null &&
                fromsData?.applicationForm?.section1?.url) ||
              (fromsData?.bookingForm?.section1 &&
                fromsData?.bookingForm?.section1?.url !== null &&
                fromsData?.bookingForm?.section1?.url)
            }
          /> */}
          <Result
            status="success"
            title="Account Successfully Verified"
            subTitle={`Ref No.#: ${refNo} please use below buttons to download booking form and sticker !.`}
            extra={[
              isVerified && isDownPaymentValidation ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "0%",
                    marginRight: "0%",
                  }}
                >
                  <input
                    onKeyPress={(event) => {
                      if (!/[0-9,.]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    style={{ borderRadius: "8px" }}
                    type="text"
                    name="CNIC No"
                    placeholder="Enter your CNIC No"
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                  />

                  <button
                    disabled={loading}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginLeft: "2%",
                      height: "65px",
                      // marginTop: "3%",
                    }}
                    className="custom--login-btn-1 btn"
                    type="submit"
                    onClick={() => {
                      if (cnic === "") {
                        swal("Error!", `Please enter your CNIC`, "error");
                      } else {
                        getFormDataByCNIC();
                      }
                      // setForm5(fromsData?.bookingForm);
                    }}
                  >
                    {loading ? <Loading /> : "Booking confirmation form"}
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "0%",
                    marginRight: "0%",
                  }}
                >
                  <button
                    disabled={fromsData?.sticker === null}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginTop: "3%",
                    }}
                    className="custom--login-btn-1 btn"
                    type="submit"
                    onClick={downloadImage}
                  >
                    Download Sticker
                  </button>

                  <button
                    disabled={fromsData?.applicationForm === null}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginTop: "3%",
                    }}
                    className="custom--login-btn-1 btn"
                    type="submit"
                    onClick={() => {
                      setPrintData(fromsData?.applicationForm);
                    }}
                  >
                    Application form
                  </button>
                  <button
                    disabled={fromsData?.bookingForm === null}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginTop: "3%",
                    }}
                    className="custom--login-btn-1 btn"
                    type="submit"
                    onClick={() => {
                      setForm5(fromsData?.bookingForm);
                    }}
                  >
                    Booking confirmation form
                  </button>
                </div>
              ),
            ]}
          />
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 style={{ fontSize: "28px" }} className="section-title">
                  We'have send you the verification code
                  <br />
                  Please enter your code to proceed.
                </h1>
              </div>
            </div>
          </div>

          <div
            style={{ marginLeft: "20%", marginRight: "20%" }}
            className="row"
          >
            <div className="col-lg-12">
              <div className="account-login-inner">
                <Form
                  name="normal_login"
                  form={form}
                  className="login-form"
                  initialValues={{ remember: true }}
                  style={{ marginTop: 0 }}
                  onFinish={submitOtp}
                >
                  <Form.Item
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    name="email"
                    rules={[
                      {
                        required: true,
                        len: 4,
                        message: (
                          <span style={{ marginTop: "1%", marginLeft: "4%" }}>
                            Code is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <OtpInput
                      value={OTP}
                      onChange={handleChange}
                      numInputs={4}
                      separator={<span>-</span>}
                      inputStyle="inputOtpStyle"
                      isInputNum={true}
                    />
                  </Form.Item>

                  <Form.Item>
                    <button
                      style={{
                        width: "100%",
                        borderRadius: "8px",
                        marginTop: "3%",
                      }}
                      className="custom--login-btn-1 btn"
                      type="submit"
                      onClick={() => {
                        //callapi
                      }}
                      disabled={loading}
                    >
                      {loading ? <Loading /> : "Submit"}
                    </button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Verify;
