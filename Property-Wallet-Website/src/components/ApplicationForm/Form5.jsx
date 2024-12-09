import moment from "moment";
import React, { useEffect, useState } from "react";

import { Col, Row } from "antd";

const Form5 = ({ data_prop, colorCodes }) => {
  const colors = [
    data_prop?.section1?.colorCode1 !== null
      ? data_prop?.section1?.colorCode1
      : colorCodes.color1,
    data_prop?.section1?.colorCode2 !== null
      ? data_prop?.section1?.colorCode2
      : colorCodes.color2,
  ];
  const commaNumber = (item) => {
    if (item) {
      let val = item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return val;
    }
  };
  const isImage = (url) => {
    const imageExtensions = [".png", ".jpeg", ".jpg"];
    const extension = url.slice(url.lastIndexOf(".")).toLowerCase();
    return imageExtensions.includes(extension);
  };

  return (
    <div style={{ padding: 0, width: "94%", margin: "3%" }}>
      <div style={{ borderBottom: "2px solid gray" }}>
        <div
          style={{
            backgroundColor: colors[0],
            height: "30px",
            // border: "0.5px solid black",
          }}
        ></div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "0.5%",
            // justifyContent: "space-around",
            justifyContent: "center",
            width: "100%",
            // backgroundColor: colors[1],
          }}
        >
          <div
            style={{
              width: "33.3%",
              display: "flex",
              marginTop: "10px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <br />
              {/* <h1
                style={{
                  fontSize: "18px",
                  fontWeight: "700",

                  color: colors[0],
                }}
              >
                Form-5
              </h1> */}
            </div>
            <div
              style={{ width: "80%", textAlign: "center", fontWeight: "bold" }}
            >
              <p
                style={{
                  border: `2px solid ${colors[0]}`,
                  borderRadius: "5px",
                }}
              >
                {data_prop?.section4?.dateOfBooking
                  ? moment(
                      data_prop?.section4?.dateOfBooking?.split("T")[0]
                    ).format("DD-MM-YYYY")
                  : "-"}
              </p>
              <p
                style={{
                  border: `2px solid ${colors[0]}`,
                  borderRadius: "5px",
                }}
              >
                Ref. No:{" "}
                {data_prop?.section1 && data_prop?.section1?.formNo !== null
                  ? data_prop?.section1?.formNo
                  : "-"}
              </p>
              <p
                style={{
                  border: `2px solid ${colors[0]}`,
                  borderRadius: "5px",
                }}
              >
                Booking Confirmation No :{" "}
                {data_prop?.section1 && data_prop?.section1?.soType !== null
                  ? data_prop?.section1?.soType
                  : "-"}
              </p>
            </div>
          </div>
          <div
            style={{
              width: "33.3%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              fontWeight: "bold",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "100px",
                width: "180px",
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <img
                src={
                  data_prop?.section1 &&
                  data_prop?.section1?.url !== null &&
                  data_prop?.section1?.url
                }
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                alt=""
              />
            </div>
            <h1
              style={{
                color: colors[0],
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              Application Registeration Form
            </h1>
          </div>
          <div
            style={{
              width: "33.3%",
              display: "flex",
              justifyContent: "right",
            }}
          >
            <div>
              <div
                style={{
                  // border: `1px solid ${colors[0]}`,
                  margin: "10px",
                  height: "45mm",
                  width: "35mm",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                  src={
                    data_prop?.section1 &&
                    data_prop?.section1?.filePhoto !== null &&
                    data_prop?.section1?.filePhoto?.url
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "10px",
          borderBottom: "2px solid gray",
        }}
      >
        <div>
          <h2
            style={{
              backgroundColor: colors[0],
              color: "white",
              fontSize: "18px",
              fontWeight: "700",
              padding: "2px 10px",
              borderRadius: "10px",
              //   border: "0.5px solid black",
            }}
          >
            1-Personal Information of Applicant:
          </h2>
        </div>
        {/* line 1 */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            margin: "15px 0px",
          }}
        >
          <div style={{ width: "50%", display: "flex" }}>
            <div>
              <h3
                style={{ padding: "0 5px", margin: "0", width: "max-content" }}
              >
                Name:
              </h3>
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "inline-block",
                borderRadius: "10px",
                width: "100%",
                backgroundColor: colors[1],
                border: `1px solid ${colors[0]} `,
                textAlign: "center",
                padding: "0",
              }}
            >
              <span>
                {data_prop?.section1 && data_prop?.section1?.name !== null
                  ? data_prop?.section1?.name
                  : "-"}
              </span>
            </div>
          </div>
          <div style={{ width: "50%", display: "flex" }}>
            <div>
              <h3
                style={{ padding: "0 5px", margin: "0", width: "max-content" }}
              >
                Guardian
              </h3>
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "inline-block",
                borderRadius: "10px",
                width: "100%",
                backgroundColor: colors[1],
                border: `1px solid ${colors[0]} `,
                textAlign: "center",
                padding: "0",
              }}
            >
              <span>
                {" "}
                {data_prop?.section1 && data_prop?.section1?.husband !== null
                  ? data_prop?.section1?.husband
                  : "-"}
              </span>
            </div>
          </div>
        </div>
        {/* line 2 */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            margin: "15px 0px",
          }}
        >
          <div style={{ width: "auto", display: "flex" }}>
            <div>
              <h3
                style={{ padding: "0 5px", margin: "0", width: "max-content" }}
              >
                C.N.I.C
              </h3>
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "inline-block",
                borderRadius: "10px",
                width: "100%",
                backgroundColor: colors[1],
                border: `1px solid ${colors[0]} `,
                textAlign: "center",
                padding: "0",
              }}
            >
              <span>
                &nbsp;&nbsp;&nbsp;
                {data_prop?.section1 && data_prop?.section1?.cnic !== null
                  ? data_prop?.section1?.cnic
                  : "-"}
                &nbsp;&nbsp;&nbsp;
              </span>
            </div>
          </div>
          <div style={{ width: "auto", display: "flex" }}>
            <div>
              <h3
                style={{ padding: "0 5px", margin: "0", width: "max-content" }}
              >
                Mobile No:
              </h3>
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "inline-block",
                borderRadius: "10px",
                width: "100%",
                backgroundColor: colors[1],
                border: `1px solid ${colors[0]} `,
                textAlign: "center",
                padding: "0",
              }}
            >
              <span>
                &nbsp;&nbsp;&nbsp;
                {data_prop?.section1 && data_prop?.section1?.phoneNo !== null
                  ? data_prop?.section1?.phoneNo
                  : "-"}
                &nbsp;&nbsp;&nbsp;
              </span>
            </div>
          </div>
          <div style={{ width: "auto", display: "flex" }}>
            <div>
              <h3
                style={{ padding: "0 5px", margin: "0", width: "max-content" }}
              >
                Whatsapp No:
              </h3>
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "inline-block",
                borderRadius: "10px",
                width: "100%",
                backgroundColor: colors[1],
                border: `1px solid ${colors[0]} `,
                textAlign: "center",
                padding: "0",
              }}
            >
              <span>
                &nbsp;&nbsp;&nbsp;
                {data_prop?.section1 && data_prop?.section1?.whatsAppNo !== null
                  ? data_prop?.section1?.whatsAppNo
                  : "-"}
                &nbsp;&nbsp;&nbsp;
              </span>
            </div>
          </div>
        </div>
        {/* line3 */}

        {/* line 4 */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            margin: "15px 0px",
          }}
        >
          <div>
            <h3 style={{ padding: "0 5px", margin: "0", width: "max-content" }}>
              Address (Residence):
            </h3>
          </div>
          <div
            style={{
              fontWeight: "bold",
              display: "inline-block",
              borderRadius: "10px",
              width: "100%",
              backgroundColor: colors[1],
              border: `1px solid ${colors[0]} `,
              textAlign: "center",
              padding: "0",
            }}
          >
            <span>
              {data_prop?.section1 && data_prop?.section1?.address !== null
                ? data_prop?.section1?.address
                : "-"}
            </span>
          </div>
        </div>
        {/* line 5 */}
      </div>

      {/*  */}
      <div
        style={{
          marginTop: "10px",
          borderBottom: "2px solid gray",
        }}
      >
        <div>
          <h2
            style={{
              backgroundColor: colors[0],
              color: "white",
              fontSize: "18px",
              fontWeight: "700",
              padding: "2px 10px",
              borderRadius: "10px",
              //   border: "0.5px solid black",
            }}
          >
            2-Nominee Information
          </h2>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            margin: "15px 0px",
          }}
        >
          <div style={{ width: "50%", display: "flex" }}>
            <div>
              <h3
                style={{ padding: "0 5px", margin: "0", width: "max-content" }}
              >
                Name:
              </h3>
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "inline-block",
                borderRadius: "10px",
                width: "100%",
                backgroundColor: colors[1],
                border: `1px solid ${colors[0]} `,
                textAlign: "center",
                padding: "0",
              }}
            >
              <span>
                {data_prop?.section2 && data_prop?.section2?.name !== null
                  ? data_prop?.section2?.name
                  : "-"}
              </span>
            </div>
          </div>
          <div style={{ width: "50%", display: "flex" }}>
            <div>
              <h3
                style={{ padding: "0 5px", margin: "0", width: "max-content" }}
              >
                Relation with Applicant
              </h3>
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "inline-block",
                borderRadius: "10px",
                width: "100%",
                backgroundColor: colors[1],
                border: `1px solid ${colors[0]} `,
                textAlign: "center",
                padding: "0",
              }}
            >
              <span>
                {data_prop?.section2 &&
                data_prop?.section2?.relationWithApplicant !== null
                  ? data_prop?.section2?.relationWithApplicant
                  : "-"}
              </span>
            </div>
          </div>
        </div>
        {/* line 2 */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            margin: "15px 0px",
            marginTop: "2%",
          }}
        >
          <div style={{ width: "auto", display: "flex" }}>
            <div>
              <h3
                style={{ padding: "0 5px", margin: "0", width: "max-content" }}
              >
                C.N.I.C
              </h3>
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "inline-block",
                borderRadius: "10px",
                width: "100%",
                backgroundColor: colors[1],
                border: `1px solid ${colors[0]} `,
                textAlign: "center",
                padding: "0",
              }}
            >
              <span>
                &nbsp;&nbsp;&nbsp;
                {data_prop?.section2 && data_prop?.section2?.cnic !== null
                  ? data_prop?.section2?.cnic
                  : "-"}
                &nbsp;&nbsp;&nbsp;
              </span>
            </div>
          </div>
          <div style={{ width: "auto", display: "flex" }}>
            <div>
              <h3
                style={{ padding: "0 5px", margin: "0", width: "max-content" }}
              >
                Mobile No:
              </h3>
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "inline-block",
                borderRadius: "10px",
                width: "100%",
                backgroundColor: colors[1],
                border: `1px solid ${colors[0]} `,
                textAlign: "center",
                padding: "0",
              }}
            >
              <span>
                &nbsp;&nbsp;&nbsp;
                {data_prop?.section2 && data_prop?.section2?.phoneNo !== null
                  ? data_prop?.section2?.phoneNo
                  : "-"}
                &nbsp;&nbsp;&nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "10px",
          borderBottom: "2px solid gray",
        }}
      >
        <div>
          <h2
            style={{
              backgroundColor: colors[0],
              color: "white",
              fontSize: "18px",
              fontWeight: "700",
              padding: "2px 10px",
              borderRadius: "10px",
              //   border: "0.5px solid black",
            }}
          >
            3-Preference Plot / Unit
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* table 1 */}
          <table
            style={{
              marginTop: "10px",
              fontSize: "14px",
              width: "49%",
              textAlign: "left",
            }}
            className="colorgray Form5tablecustom"
          >
            <tbody>
              <tr>
                <td
                  className="custom-td"
                  style={{
                    padding: "0 10px",
                  }}
                >
                  Category
                </td>
                <td
                  style={{
                    paddingLeft: "20px ",
                    width: "50%",
                  }}
                >
                  {data_prop?.section3 && data_prop?.section3?.category !== null
                    ? data_prop?.section3?.category
                    : "-"}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    paddingLeft: "10px ",
                  }}
                >
                  {data_prop?.section3 &&
                  data_prop?.section3?.extraDetails?.length &&
                  data_prop?.section3?.extraDetails[0] !== undefined
                    ? data_prop?.section3?.extraDetails[0]?.title
                    : "-"}
                </td>
                <td style={{ paddingLeft: "20px " }}>
                  {data_prop?.section3 &&
                  data_prop?.section3?.extraDetails?.length &&
                  data_prop?.section3?.extraDetails[0] !== undefined
                    ? data_prop?.section3?.extraDetails[0]?.value === "true"
                      ? "Yes"
                      : data_prop?.section3?.extraDetails[0]?.value
                    : "-"}
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    paddingLeft: "10px ",
                  }}
                >
                  {data_prop?.section3 &&
                  data_prop?.section3?.extraDetails?.length &&
                  data_prop?.section3?.extraDetails[1] !== undefined
                    ? data_prop?.section3?.extraDetails[1]?.title
                    : "-"}
                </td>
                <td
                  style={{
                    paddingLeft: "20px ",
                  }}
                >
                  {data_prop?.section3 &&
                  data_prop?.section3?.extraDetails?.length &&
                  data_prop?.section3?.extraDetails[1] !== undefined
                    ? data_prop?.section3?.extraDetails[1]?.value === "true"
                      ? "Yes"
                      : data_prop?.section3?.extraDetails[1]?.value
                    : "-"}
                </td>
              </tr>
              {/* {data?.saleOrder?.saleQuotation?.plot?.assignPlotField
                ?.slice(0, 4)
                .map((item) => {
                  return (
                    <tr>
                      <td
                        style={{
                          paddingLeft: "10px ",
                        }}
                      >
                        {item.title}
                      </td>
                      <td
                        style={{
                          paddingLeft: "20px ",
                        }}
                      >
                        {item.value}
                      </td>
                    </tr>
                  );
                })} */}
              <tr>
                <td
                  style={{
                    paddingLeft: "10px ",
                  }}
                >
                  {data_prop?.section3 &&
                  data_prop?.section3?.extraDetails?.length &&
                  data_prop?.section3?.extraDetails[2] !== undefined
                    ? data_prop?.section3?.extraDetails[2]?.title
                    : "-"}
                </td>
                <td style={{ paddingLeft: "20px " }}>
                  {" "}
                  {data_prop?.section3 &&
                  data_prop?.section3?.extraDetails?.length &&
                  data_prop?.section3?.extraDetails[2] !== undefined
                    ? data_prop?.section3?.extraDetails[2]?.value === "true"
                      ? "Yes"
                      : data_prop?.section3?.extraDetails[2]?.value
                    : "-"}
                </td>
              </tr>
            </tbody>
          </table>
          {/* table 2 */}
          <table
            style={{
              marginTop: "10px",
              fontSize: "14px",
              width: "48%",
              textAlign: "left",
            }}
            className="colorgray Form5tablecustom"
          >
            <tbody>
              <tr>
                <td
                  style={{
                    paddingLeft: "10px ",
                  }}
                >
                  {data_prop?.section3?.landArea || "-"}
                </td>
                <td style={{ paddingLeft: "20px " }}>
                  {data_prop?.section3?.landSize || "-"}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    paddingLeft: "10px ",
                  }}
                >
                  Unit No
                </td>
                <td style={{ paddingLeft: "20px " }}>
                  {" "}
                  {data_prop?.section3?.plotNo || "TBA"}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    paddingLeft: "10px ",
                  }}
                >
                  Premium charges
                </td>
                <td style={{ paddingLeft: "20px " }}>-</td>
              </tr>
              <tr>
                <td
                  style={{
                    paddingLeft: "10px ",
                  }}
                >
                  -
                </td>
                <td
                  style={{
                    paddingLeft: "20px ",
                  }}
                >
                  -{/* {commaNumber(data?.premiumCharges)} */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        {/* <div
          style={{
            maxHeight: "300px",
            height: "60px",
            width: "100%",
            padding: "0 10px",
            border: `1px solid gray`,
            display: "flex",
            flexDirection: "row",
            margin: "10px 0",
            color: "gray",
            borderRadius: "5px",
          }}
        >
          <span>
            <b>Remarks : </b>
          </span>
          <p style={{ paddingLeft: "5px" }}>
            {data?.saleOrder?.saleQuotation?.remarks || "-"}
          </p>
        </div> */}
      </div>

      <div
        style={{
          marginTop: "10px",
          borderBottom: "2px solid gray",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: colors[0],
            color: "white",
            fontWeight: "700",
            borderRadius: "10px",
            alignItems: "baseline",
            // border: "0.5px solid black",
          }}
        >
          <h2
            style={{
              fontSize: "17px",
              color: "white",
              padding: "2px 10px",
              margin: "0",
            }}
          >
            4-Payment Detail
          </h2>
          <span
            style={{
              fontSize: "14px",
              flexShrink: "0",
            }}
          >
            (All payments are to be made in favor of designation company bank
            account)
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* table 1 */}
          <table
            style={{
              marginTop: "10px",
              fontSize: "14px",
              width: "49%",
              textAlign: "left",
            }}
            className="colorgray Form5tablecustom"
          >
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "0 10px",
                  }}
                >
                  Selling price
                </td>
                <td
                  style={{
                    paddingLeft: "20px ",
                    width: "50%",
                  }}
                >
                  {commaNumber(data_prop?.section4?.sellingPrice)}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    paddingLeft: "10px ",
                  }}
                >
                  Booking Amount
                </td>
                <td style={{ paddingLeft: "20px " }}>
                  {data_prop?.section4?.bookingAmount}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    paddingLeft: "10px ",
                  }}
                >
                  Paid Amount
                </td>
                <td style={{ paddingLeft: "20px " }}>
                  {data_prop?.section4?.paidAmount}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    paddingLeft: "10px ",
                  }}
                >
                  Remaining Amount
                </td>
                <td style={{ paddingLeft: "20px " }}>
                  {data_prop?.section4?.remainingAmount}
                </td>
              </tr>
            </tbody>
          </table>
          {/* table 2 */}
          <table
            style={{
              marginTop: "10px",
              fontSize: "14px",
              width: "48%",

              textAlign: "left",
            }}
            className="colorgray Form5tablecustom"
          >
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "0 10px",
                  }}
                >
                  Total Installments
                </td>
                <td
                  style={{
                    paddingLeft: "20px ",
                    width: "50%",
                  }}
                >
                  {data_prop?.section4?.totalInstallments}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    paddingLeft: "10px ",
                  }}
                >
                  Date of booking
                </td>
                <td style={{ paddingLeft: "20px " }}>
                  {" "}
                  {data_prop?.section4?.dateOfBooking
                    ? data_prop?.section4?.dateOfBooking?.split("T")[0]
                    : "-"}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    paddingLeft: "10px ",
                  }}
                >
                  First Installment Due on
                </td>
                <td style={{ paddingLeft: "20px " }}>
                  {" "}
                  {data_prop?.section4?.firstInstallmentDueOn !== 0
                    ? data_prop?.section4?.firstInstallmentDueOn?.split("T")[0]
                    : data_prop?.section4?.firstInstallmentDueOn}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    paddingLeft: "10px ",
                  }}
                >
                  Last Installment Due on
                </td>
                <td
                  style={{
                    paddingLeft: "20px ",
                  }}
                >
                  {data_prop?.section4?.lastInstallmentDueOn !== 0
                    ? data_prop?.section4?.lastInstallmentDueOn?.split("T")[0]
                    : data_prop?.section4?.lastInstallmentDueOn}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Row style={{ marginTop: "2%" }} gutter={16}>
          <Col span={18}>
            <div
              style={{
                maxHeight: "300px",
                height: "90px",
                width: "100%",
                padding: "0 10px",
                border: `1px solid gray`,
                display: "flex",
                flexDirection: "row",
                margin: "10px 0",
                color: "gray",
                borderRadius: "5px",
              }}
            >
              <span>
                <b>Remarks :</b>
              </span>
              <p style={{ paddingLeft: "5px" }}>
                {" "}
                {data_prop?.section4?.remarks || "-"}
              </p>
            </div>
          </Col>
          <Col span={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <img src={require("./png.png")} style={{ width: "50%" }} />
            </div>
          </Col>
          <Col span={24}>
            <p style={{ fontSize: "11px" }}>
              Note: Client Data Verification, acceptance of Payment Schedule and
              Terms & Conditions. Client Signature for this form is Mandatory on
              every Page.
            </p>
          </Col>
        </Row>
      </div>

      {/* FOOTER 1 start */}

      <div
        style={{
          fontSize: "15px",
          textAlign: "end",
          // backgroundColor: "red",
          marginTop: "4%",
        }}
      >
        <span>
          Client/Property Ref No.:{" "}
          {data_prop?.section1 && data_prop?.section1?.formNo !== null
            ? data_prop?.section1?.formNo
            : "-"}
        </span>

        <span>&nbsp;&nbsp;{new Date().toLocaleString()}</span>
        <span>
          &nbsp;&nbsp;{" "}
          {data_prop?.section4?.planUrl !== null &&
          isImage(data_prop?.section4?.planUrl)
            ? "Page 1/4"
            : "Page 1/3"}
        </span>
      </div>

      {/* FOOTER  1 end */}

      <div className="page-form-5">
        <div
          style={{
            width: "100%",
            height: "96vh",
            // backgroundColor: "blue",
            borderRadius: "10px",
          }}
        >
          <div>
            <h2
              style={{
                backgroundColor: colors[0],
                color: "white",
                fontSize: "18px",
                fontWeight: "700",
                padding: "2px 10px",
                borderRadius: "10px",
                // border: "0.5px solid black",
              }}
            >
              5-Verification of Information, Declaration and acceptance:
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: "12px",
                marginTop: "10px",
                lineHeight: "14px",
              }}
            >
              I hereby declare that the information provided by me in this form
              is accurate to the best of my knowledger and that i have read and
              understood the terms and conditions of allotment and the schedules
              of price and payment, unit/plot information accept and abide by
              the same unconditionally as well as future rules & regulations
              from the company,which are intimated to me by the management from
              time to time.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                textAlign: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  height: "130px",
                  width: "24%",
                  border: "1px solid black",
                  color: colors[0],
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      padding: "0",
                      margin: "0",
                      padding: "0 10px",
                      lineHeight: "15px",
                      marginTop: "2px",
                    }}
                  >
                    Applicant Signature
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "110px",
                    display: "flex",
                    justifyContent: "center",
                    border: "0px solid black",
                  }}
                ></div>
              </div>
              {/*  */}
              <div
                style={{
                  height: "130px",
                  width: "24%",
                  border: "1px solid black",
                  color: colors[0],
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      padding: "0",
                      margin: "0",
                      padding: "0 10px",
                      lineHeight: "15px",
                      marginTop: "2px",
                    }}
                  >
                    E-Signature
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "110px",
                    display: "flex",
                    justifyContent: "center",
                    border: "0px solid black",
                  }}
                >
                  {data_prop?.section5?.ApplicationSignature && (
                    <img
                      style={{
                        maxWidth: "100%",
                        height: "90%",
                        border: "none",
                      }}
                      src={data_prop?.section5?.ApplicationSignature?.url}
                    />
                  )}
                </div>
              </div>
              {/*  */}
              <div
                style={{
                  height: "130px",
                  width: "24%",
                  border: "1px solid black",
                  color: colors[0],
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      padding: "0",
                      margin: "0",
                      padding: "0 10px",
                      lineHeight: "15px",
                      marginTop: "2px",
                    }}
                  >
                    Applicant's Finger Impression (Left)
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    border: "0px solid black",
                  }}
                >
                  {data_prop?.section5?.fingerPrints.length > 0 && (
                    <img
                      style={{
                        maxWidth: "100%",
                        height: "90%",
                        border: "none",
                      }}
                      src={data_prop?.section5?.fingerPrints[0]?.url}
                    />
                  )}
                </div>
              </div>
              {/*  */}
              <div
                style={{
                  height: "130px",
                  width: "24%",
                  border: "1px solid black",
                  color: colors[0],
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      padding: "0",
                      margin: "0",
                      padding: "0 10px",
                      lineHeight: "16px",
                    }}
                  >
                    Applicant's Finger Impression (Right)
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    border: "0px solid black",
                  }}
                >
                  {data_prop?.section5?.fingerPrints?.length > 1 && (
                    <img
                      style={{
                        maxWidth: "100%",
                        height: "90%",
                        border: "none",
                      }}
                      src={data_prop?.section5?.fingerPrints[1]?.url}
                    />
                  )}
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: "12px",
                marginTop: "10px",
                lineHeight: "14px",
              }}
            >
              <span style={{ color: colors[0] }}>IMPORTANT NOTE:</span>all the
              previous temporary correspondence, documentetion,recipts will be
              treated as cancelled/ null & void. (all the required particulars
              with corrections/changes that are incorporated in this Allotte
              Application Form & a Permanent Reference no. of the plot/unit will
              be allocated). Further correspondence & documentation in regards
              to payments, installments, transfers etc. will be communicated to
              the client through the offical Portal /App and on the client's
              official mobile no. WhatsApp or e-mail for access or if required
              the client can personally visit our designated office for the
              same.
            </p>
          </div>
        </div>
        {/* FOOTER 2 start */}

        <div
          style={{
            fontSize: "15px",
            textAlign: "end",
            // backgroundColor: "red",
            marginTop: "-4%",
          }}
        >
          <span>
            Client/Property Ref No.:{" "}
            {data_prop?.section1 && data_prop?.section1?.formNo !== null
              ? data_prop?.section1?.formNo
              : "-"}
          </span>

          <span>&nbsp;&nbsp;{new Date().toLocaleString()}</span>
          <span>
            &nbsp;&nbsp;{" "}
            {data_prop?.section4?.planUrl !== null &&
            isImage(data_prop?.section4?.planUrl)
              ? "Page 2/4"
              : "Page 2/3"}
          </span>
        </div>

        {/* FOOTER 2 end */}
      </div>
      {/* PAYMENT PLAN */}

      {data_prop?.section4?.planUrl !== null &&
        isImage(data_prop?.section4?.planUrl) && (
          <div className="page-form-5-pp">
            <div>
              <h2
                style={{
                  backgroundColor: colors[0],
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "700",
                  padding: "2px 10px",
                  borderRadius: "10px",
                  // border: "0.5px solid black",
                }}
              >
                6-Payment Schedule (4 Years Plan) (Annexure-A)
              </h2>
            </div>
            <img src={data_prop?.section4?.planUrl} />
            {/* FOOTER 3 start */}

            <div
              style={{
                fontSize: "15px",
                textAlign: "end",
                // backgroundColor: "red",
                // marginTop: "-4%",
              }}
            >
              <span>
                Client/Property Ref No.:{" "}
                {data_prop?.section1 && data_prop?.section1?.formNo !== null
                  ? data_prop?.section1?.formNo
                  : "-"}
              </span>

              <span>&nbsp;&nbsp;{new Date().toLocaleString()}</span>
              <span>&nbsp;&nbsp; Page 3/4</span>
            </div>

            {/* FOOTER 3 end */}
          </div>
        )}

      {/* verficaion */}

      <div className="page-form-5-verification">
        <div
          style={{
            height: "90vh",
            overflow: "hidden",
          }}
        >
          <div>
            <h2
              style={{
                backgroundColor: colors[0],
                color: "white",
                fontSize: "18px",
                fontWeight: "700",
                padding: "2px 10px",
                borderRadius: "10px",
                // marginTop: "5%",
                // border: "0.5px solid black",
              }}
            >
              7-Terms & Conditions: (Annexure-B)
            </h2>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: data_prop?.projectTermsAndConditions?.termAndConditions,
            }}
          />
          <div
            style={{
              width: "96%",

              height: "8px",
              background: "lightgray",
              margin: "0 2%",
              padding: "0",
            }}
          />
        </div>

        {/* FOOTER 4 start */}

        <div
          style={{
            fontSize: "15px",
            textAlign: "end",
            // backgroundColor: "red",
            // marginTop: "2%",
          }}
        >
          <span>
            Client/Property Ref No.:{" "}
            {data_prop?.section1 && data_prop?.section1?.formNo !== null
              ? data_prop?.section1?.formNo
              : "-"}
          </span>

          <span>&nbsp;&nbsp;{new Date().toLocaleString()}</span>
          <span>
            &nbsp;&nbsp;{" "}
            {data_prop?.section4?.planUrl !== null &&
            isImage(data_prop?.section4?.planUrl)
              ? "Page 4/4"
              : "Page 3/3"}
          </span>
        </div>

        {/* FOOTER 4 end */}
      </div>
    </div>
  );
};

export default Form5;
