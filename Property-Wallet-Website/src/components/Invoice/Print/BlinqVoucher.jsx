import React from "react";
import "./Voucher.css";
import logo from "./KGC.png";
import bank from "./png.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import check from "./check-solid.svg";
import numberToText from "number-to-words";
const BlinqVoucher = ({ data }) => {
  let projectName = data?.projectName || "-";
  let cnic = data?.voucherData?.propertyWalletProductFinalizeSale?.cnic
    ? data?.voucherData?.propertyWalletProductFinalizeSale?.cnic?.split("")
    : [];
  cnic.splice(5, 0, "-");
  cnic.splice(13, 0, "-");
  let d = data?.payDate?.split("T")[0];
  let dateParts = d?.split("-");
  let year = dateParts[0];
  let month = dateParts[1];
  let day = dateParts[2];

  let formattedDate = day + "-" + month + "-" + year;

  var date = formattedDate?.split("");
  let dateArr = [];
  for (let i = 0; i < date.length; i++) {
    dateArr.push(date[i]);
  }
  console.log("data", data);
  return (
    <div className="rotate ">
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          fontSize: "18px",
          borderColor: "black",
          fontFamily: "Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif",
          color: "rgb(33, 33, 33)",
          backgroundColor: "white",
          fontWeight: "500",
          // marginTop: "-18px",
        }}
      >
        {/* part1 */}
        <div
          style={{
            width: "115mm",
            border: "1px solid black",
            overflow: "hidden",
          }}
        >
          <div id="watermark">
            <div id="watermarkDiv">
              <h1
                id="watermarkH1"
                style={{
                  fontSize: `${
                    projectName.length > 11
                      ? 1120 / projectName.length + "px"
                      : "90px"
                  }`,
                }}
              >
                {projectName}
              </h1>
            </div>
          </div>

          <div className="regForm-header" style={{ margin: 0, width: "100%" }}>
            <div className=" img_text1" style={{ width: "25%" }}>
              <div
                style={{
                  height: "100px",
                  width: "120px",
                  position: "relative",
                  left: "-10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  objectFit: "cover",
                }}
              >
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                  src={
                    data?.propertyWalletInventoryFinalizeSaleStage
                      ?.propertyWalletInventoryFinalizeSale
                      ?.propertyWalletInventorySaleQuotation
                      ?.propertyWalletInventoryPlot?.propertyWalletInventory
                      ?.propertyWalletProject?.BuilderLogo
                  }
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",

                justifyContent: "center",
                fontSize: "14px",
                height: "90px",
                width: "50%",
                textAlign: "center",
                paddingLeft: "5px",
              }}
            >
              {/* <h2
                style={{
                  textTransform: "uppercase",
                  fontSize: "18px",
                  fontWeight: "600",
                  margin: "0 0 10px 0",
                }}
              >
                {
                  data?.propertyWalletInventoryFinalizeSaleStage
                    ?.propertyWalletInventoryFinalizeSale
                    ?.propertyWalletInventorySaleQuotation
                    ?.propertyWalletInventoryPlot?.propertyWalletInventory
                    ?.propertyWalletProject?.projectName
                }{" "}
              </h2> */}
              <h5
                style={{
                  border: "1px solid black",
                  padding: " 8px 10px ",
                  borderRadius: "18px",
                  color: "black",
                  lineHeight: "normal",
                  display: "flex",
                  alignItems: "center",
                  textTransform: "uppercase",
                  width: "max-content",
                  margin: "auto",
                }}
              >
                CUSTOMER COPY
              </h5>
            </div>
            <div className=" img_text" style={{ width: "25%" }}>
              <div
                style={{
                  height: "100px",
                  width: "120px",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "start",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <img
                  src={bank}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            style={{
              color: "#a98332",
              fontSize: "14px",
              borderColor: "#a98332",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <span style={{ textAlign: "center" }}>
                {data?.voucherData?.blinqInvoice !== null
                  ? "Invoice No."
                  : "Receipt No."}
              </span>
              <span
                style={{
                  borderBottom: "1px solid ",
                  margin: "0 5px",
                  width: "80px",
                  display: "inline-block",
                }}
              >
                {data?.voucherData?.blinqInvoice != null
                  ? data?.voucherData?.blinqInvoice?.InvoiceNumber
                  : "-"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                height: "25px",
              }}
            >
              <span>Payment Code</span>
              <span
                style={{
                  borderBottom: "1px solid ",
                  margin: "0 5px",
                  width: "80px",
                }}
              >
                {" "}
                {data?.voucherData?.blinqInvoice != null
                  ? data?.voucherData?.blinqInvoice?.PaymentCode
                  : "-"}
              </span>
              <span>Invoice Type</span>
              <span
                style={{
                  borderBottom: "1px solid ",
                  margin: "0 5px",
                  width: "80px",
                }}
              >
                {data?.voucherData?.blinqInvoice != null
                  ? data?.voucherData?.blinqInvoice?.InvoiceType
                  : "-"}
              </span>
            </div>
          </div>

          {/*  */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0px 20px",
              marginBottom: "5px",
              marginTop: "10px",
            }}
          >
            <div style={{ marginTop: "0px", width: "50%" }}>
              <div
                className="sub_header"
                style={{ color: "#3e43e7", fontWeight: "500" }}
              >
                <small>Applicant Information.</small>
              </div>
            </div>
            <div>
              {dateArr &&
                dateArr.length > 0 &&
                dateArr.map((item, index) => {
                  if (index !== 2 && index !== 5) {
                    return (
                      <span
                        className="cnic_col1"
                        style={{ color: "black" }}
                        key={index}
                      >
                        {item}
                      </span>
                    );
                  } else if (index === 2) {
                    return (
                      <span
                        className="cnic_col1 bgcolor-gray"
                        key={index}
                        style={{ color: "black" }}
                      >
                        -
                      </span>
                    );
                  } else if (index === 5) {
                    return (
                      <span
                        className="cnic_col1 bgcolor-gray"
                        key={index}
                        style={{ color: "black" }}
                      >
                        -
                      </span>
                    );
                  }
                })}
            </div>
          </div>
          <div className="regForm-body">
            <div
              className="section_one"
              style={{
                border: "0",
                padding: "5px 20px 0px ",
                marginTop: "0",
                marginBottom: 0,
              }}
            >
              <div>
                <div className="flex_margin AgentVouchermb10">
                  <small className="flex1">
                    <span className="dflex">
                      <div className="flex2" style={{ fontSize: "14px" }}>
                        Name:
                      </div>
                      <div className="flex11">
                        <input
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",

                            borderBottom: "2px solid rgb(118, 118, 118)",

                            background: "transparent",
                            width: "100%",
                            // height: "22px",
                            fontSize: "16px",
                            paddingBottom: "5px",
                          }}
                          type="text"
                          value={data?.name ? data?.name : "-"}
                        />
                      </div>
                    </span>
                  </small>
                </div>

                <div className="dflex" style={{ marginBottom: "5px" }}>
                  <small className="flex1">
                    <span>
                      <div style={{ fontSize: "14px", color: "black" }}>
                        CNIC No.:&nbsp;&nbsp;&nbsp;
                        {cnic &&
                          cnic.length > 0 &&
                          cnic.map((item, index) => {
                            if (index !== 5 && index !== 13) {
                              return (
                                <span
                                  className="cnic_col1"
                                  style={{ color: "black" }}
                                  key={index}
                                >
                                  {item}
                                </span>
                              );
                            } else if (index === 5) {
                              return (
                                <span
                                  className="cnic_col1 bgcolor-gray"
                                  key={index}
                                  style={{ color: "black" }}
                                >
                                  -
                                </span>
                              );
                            } else if (index === 13) {
                              return (
                                <span
                                  className="cnic_col1 bgcolor-gray"
                                  key={index}
                                  style={{ color: "black" }}
                                >
                                  -
                                </span>
                              );
                            }
                          })}
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex" style={{ marginBottom: "5px" }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div className="flex5" style={{ fontSize: "14px" }}>
                        Cell/WhatsApp No:
                      </div>
                      <div className="flex8">
                        <input
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",

                            borderBottom: "2px solid rgb(118, 118, 118)",

                            background: "transparent",
                            width: "100%",
                            // height: "22px",
                            fontSize: "16px",
                          }}
                          type="text"
                          value={data?.whatsappNo ? data?.whatsappNo : "-"}
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex AgentVouchermb10">
                  <small className="flex1">
                    <span className="dflex">
                      <div className="flex3" style={{ fontSize: "14px" }}>
                        {" "}
                        Email (If available):
                      </div>
                      <div className="flex5">
                        <input
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",

                            borderBottom: "2px solid rgb(118, 118, 118)",

                            background: "transparent",
                            width: "100%",
                            // height: "22px",
                            fontSize: "16px",
                            paddingBottom: "5px",
                          }}
                          type="text"
                          value={data?.email ? data?.email : "N/A"}
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex AgentVouchermb10">
                  <small className="flex1">
                    <span className="dflex">
                      <div className="flex4" style={{ fontSize: "14px" }}>
                        {" "}
                        Amount PKR:{" "}
                      </div>
                      <div className="flex12">
                        <input
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",

                            borderBottom: "2px solid rgb(118, 118, 118)",

                            background: "transparent",
                            width: "100%",
                            // height: "22px",
                            fontSize: "16px",
                            paddingBottom: "5px",
                          }}
                          type="text"
                          value={
                            data?.InvoiceAmount ? data?.InvoiceAmount : "-"
                          }
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex AgentVouchermb10">
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        style={{
                          background: "transparent",
                          width: "100%",
                          lineHeight: "35px",
                          fontSize: "16px",
                          height: "80px",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-block",
                            borderBottom: "2px solid rgb(118, 118, 118)",
                            height: "70px",
                            width: "100%",
                            position: "relative",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "14px",
                              background: "white",
                              zIndex: "1",
                              height: "36px",
                              paddingRight: "10px",
                              position: "absolute",
                            }}
                          >
                            Amount in Words:
                          </span>
                          {/* this span only for border bottom in line one */}
                          <span
                            style={{
                              width: "100%",
                              borderBottom: "2px solid rgb(118, 118, 118)",
                              position: "absolute",
                              height: "30px",
                            }}
                          ></span>
                          {/* this span only for spacing */}
                          <span
                            style={{
                              width: "135px",
                              color: "white",
                              display: "inline-block",
                            }}
                          ></span>

                          <span
                            style={{
                              lineHeight: "40px",
                              position: "relative",
                              top: "-5px",
                              textTransform: "capitalize",
                            }}
                          >
                            &nbsp;
                            {data && data?.InvoiceAmount
                              ? numberToText.toWords(
                                  parseInt(data?.InvoiceAmount)
                                )
                              : "N/A"}
                          </span>
                        </div>
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex AgentVouchermb10">
                  <small className="flex1">
                    <span className="dflex">
                      <div className="flex4" style={{ fontSize: "14px" }}>
                        {" "}
                        Project Name:{" "}
                      </div>
                      <div className="flex12">
                        <input
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",

                            borderBottom: "2px solid rgb(118, 118, 118)",

                            background: "transparent",
                            width: "100%",
                            // height: "22px",
                            fontSize: "16px",
                            paddingBottom: "5px",
                          }}
                          type="text"
                          value={projectName}
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex AgentVouchermb10">
                  <small className="flex1">
                    <span className="dflex">
                      <div className="flex4" style={{ fontSize: "14px" }}>
                        {" "}
                        Property No.
                      </div>
                      <div className="flex12">
                        <input
                          style={{
                            borderTop: "none",
                            borderRight: "none",
                            borderLeft: "none",

                            borderBottom: "2px solid rgb(118, 118, 118)",

                            background: "transparent",
                            width: "100%",
                            // height: "22px",
                            fontSize: "16px",
                            paddingBottom: "5px",
                          }}
                          type="text"
                          value={"-"}
                        />
                      </div>
                    </span>
                  </small>
                </div>
              </div>

              <div className="dflex AgentVouchermb10">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {data?.tokenLockInventoryId !== null ? (
                    <div>
                      <small className="flex1">
                        <span className="dflex">
                          <span
                            className="cnic_col"
                            style={{ marginTop: "8px", borderRadius: "5px" }}
                          >
                            <img
                              alt="..."
                              src={check}
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                              }}
                            />
                          </span>
                          <div style={{ marginLeft: "7px", fontSize: "14px" }}>
                            {" "}
                            Booking (
                            {data?.voucherData
                              ?.propertyWalletInventoryFinalizeSaleStage
                              ?.stepNo !== null
                              ? data?.voucherData
                                  ?.propertyWalletInventoryFinalizeSaleStage
                                  ?.stepNo
                              : ""}{" "}
                            )
                          </div>
                        </span>
                      </small>
                    </div>
                  ) : data?.voucherData
                      ?.propertyWalletInventoryFinalizeSaleStageId !== null ||
                    data?.voucherData
                      ?.propertyWalletProductFinalizeSaleStageId !== null ? (
                    <div style={{ marginLeft: "10px" }}>
                      <small className="flex1">
                        <span className="dflex">
                          <span
                            className="cnic_col"
                            style={{ marginTop: "8px", borderRadius: "5px" }}
                          >
                            <img
                              alt="..."
                              src={check}
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                              }}
                            />
                          </span>
                          <div style={{ marginLeft: "7px", fontSize: "14px" }}>
                            {" "}
                            Token (
                            {data?.voucherData
                              ?.propertyWalletInventoryFinalizeSaleStage
                              ?.stepNo !== null
                              ? data?.voucherData
                                  ?.propertyWalletInventoryFinalizeSaleStage
                                  ?.stepNo
                              : ""}{" "}
                            )
                          </div>
                        </span>
                      </small>
                    </div>
                  ) : null}

                  <div
                    style={{
                      backgroundColor: "lightgray",
                      borderRadius: "5px",
                      width: "max-content",
                      marginRight: "12px",
                      marginLeft: "10px",
                      padding: "0 10px",
                    }}
                  >
                    <small className="flex1">
                      <span
                        className="dflex"
                        style={{ justifyContent: "center" }}
                      >
                        <span
                          className="cnic_col"
                          style={{ marginTop: "8px", borderRadius: "5px" }}
                        >
                          <img
                            alt="..."
                            src={check}
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                            }}
                          />
                        </span>
                        <div style={{ marginLeft: "7px", fontSize: "14px" }}>
                          {
                            data?.voucherData
                              ?.propertyWalletInventoryFinalizeSaleStage
                              ?.propertyWalletInventoryFinalizeSale
                              ?.propertyWalletInventorySaleQuotation
                              ?.propertyWalletInventoryPlot
                              ?.propertyWalletInventory?.landSize
                          }{" "}
                          &nbsp;
                          {
                            data?.voucherData
                              ?.propertyWalletInventoryFinalizeSaleStage
                              ?.propertyWalletInventoryFinalizeSale
                              ?.propertyWalletInventorySaleQuotation
                              ?.propertyWalletInventoryPlot
                              ?.propertyWalletInventory?.landArea?.title
                          }
                        </div>
                      </span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "lightgray",
                padding: "10px 10px",
                borderRadius: "5px",
                width: "max-content",
                margin: "0 20px",
                marginBottom: "3px",
                marginTop: "3px",
              }}
            >
              <h2
                style={{
                  fontSize: "14px",
                  margin: "0",
                  lineHeight: "initial",
                }}
              >
                DEPOSITED BY:
              </h2>
            </div>
            <div style={{ margin: "10px 20px", position: "relative" }}>
              <span
                class="stamp is-paid  "
                style={{ position: "absolute", right: "30px" }}
              >
                {data?.status}
              </span>
              <div className="dflex " style={{ marginBottom: "5px" }}>
                <small className="flex1">
                  <span className="dflex">
                    <div className="flex2" style={{ fontSize: "14px" }}>
                      {" "}
                      Name:
                    </div>
                    <div className="flex13">
                      <input
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "2px solid rgb(118, 118, 118)",

                          background: "transparent",
                          width: "100%",
                          // height: "22px",
                          fontSize: "16px",
                          paddingBottom: "5px",
                        }}
                        type="text"
                        value={""}
                      />
                    </div>
                  </span>
                </small>
              </div>
              <div className="dflex " style={{ marginBottom: "5px" }}>
                <small className="flex1">
                  <span className="dflex">
                    <div className="flex4" style={{ fontSize: "14px" }}>
                      {" "}
                      Cell Number:
                    </div>
                    <div className="flex12">
                      <input
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderBottom: "2px solid rgb(118, 118, 118)",

                          background: "transparent",
                          width: "100%",
                          // height: "22px",
                          fontSize: "16px",
                          paddingBottom: "5px",
                        }}
                        type="text"
                        value=""
                      />
                    </div>
                  </span>
                </small>
              </div>
            </div>

            <div
              className="flex_margin text_al_center"
              style={{
                fontSize: "16px",
                padding: "0px 20px",
                justifyContent: "space-between",
              }}
            >
              <div className=" text_al_center" style={{ width: "45%" }}>
                <div
                  style={{
                    height: "60px",
                    border: "1px solid black",
                    color: "lightgray",
                    lineHeight: "20px",
                    textAlign: "left",
                  }}
                >
                  <small style={{ marginLeft: "5px" }}>Signature</small>
                </div>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <small>DEPOSITOR SIGN</small>
                </div>
              </div>
              <div style={{ width: "45%" }}>
                <div
                  style={{
                    height: "60px",
                    width: "100%",
                    borderBottom: "1px solid black",
                  }}
                ></div>
                <div style={{ textAlign: "center" }}>
                  <small>BANK STAMP & SIGN</small>
                </div>
              </div>
            </div>
            <div
              className="flex_margin"
              style={{
                margin: "0 15px",
                fontSize: "16px",
                marginTop: "8px",
                border: "1px solid black",
                color: "red",
                padding: "4px 4px",
              }}
            >
              <small
                className="flex1"
                style={{ fontSize: "9.5px", lineHeight: "14px" }}
              >
                <div>
                  {/* <strong> */}* THIS RECEIPT HAS TO BE PRESENTED AS PROOF OF
                  PAYMENT
                  {/* </strong> */}
                </div>
                <div>
                  {/* <strong> */}* FOR MORE DETAILS VISIT OUR WEBSITE OR
                  CONTACT OUR HELPLINE
                  {/* </strong> */}
                </div>
              </small>
            </div>
            <div
              className="dflex"
              style={{
                marginLeft: "10px",
                fontSize: "16px",
                marginTop: "0px",
                marginBottom: "5px",
                width: "95%",
                justifyContent: "space-around",
                color: "blue",
              }}
            >
              <div>
                <span>
                  <FontAwesomeIcon icon={faGlobe} />
                </span>
                <span>
                  <small style={{ paddingLeft: "5px" }}>
                    {
                      data?.voucherData
                        ?.propertyWalletInventoryFinalizeSaleStage
                        ?.propertyWalletInventoryFinalizeSale
                        ?.propertyWalletInventorySaleQuotation
                        ?.propertyWalletInventoryPlot?.propertyWalletInventory
                        ?.propertyWalletProject?.websiteLink
                    }
                  </small>
                </span>
              </div>
              <div style={{ display: "flex" }}>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>
                  <small>
                    {" "}
                    {
                      data?.voucherData
                        ?.propertyWalletInventoryFinalizeSaleStage
                        ?.propertyWalletInventoryFinalizeSale
                        ?.propertyWalletInventorySaleQuotation
                        ?.propertyWalletInventoryPlot?.propertyWalletInventory
                        ?.propertyWalletProject?.phoneNo
                    }
                  </small>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* part 2 */}

        {/* part3 */}
      </div>
    </div>
  );
};

export default BlinqVoucher;
