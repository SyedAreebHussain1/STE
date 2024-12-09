import React, { useEffect, useState } from "react";
import NavbarV2 from "../global-components/navbar-v2";
import { Col, Row } from "antd";
import { Radio } from "antd";
import swal from "sweetalert";
import axios from "axios";
import { urlLink } from "../../constant/contact-us-constants";
import Loading from "../global-components/Loaders/Loading";
import numberToText from "number-to-words";
import { useReactToPrint } from "react-to-print";
import Voucher from "./Print/Voucher";
import ApplicationForm from "../ApplicationForm/ApplicationForm";
import BlinqVoucher from "./Print/BlinqVoucher";
import NavbarSand from "../global-components/NavbarSand";
const Invoice = (props) => {
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [value, setValue] = useState("oneBillID");
  const handleApi = async () => {
    setLoading(true);
    await axios
      .get(
        `${urlLink}/V1/blinq-integration/getBlinqInvoicePaymentStatusBy1BillID?${
          `oneBillID=${state}&relation=BLINQ`
          // `receipNO=${state}&relation=CASH`
          // value === "oneBillID"
          //   ? `oneBillID=${state}&relation=BLINQ`
          //   : value === "cashReceipt"
          //   ? `receipNO=${state}&relation=CASH`
          //   : `receipNO=${state}&relation=BANK`
        }`
      )
      .then((response) => {
        if (response.data.data) {
          setData(response.data.data);
        }

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        swal("Sorry!", `${err?.response?.data?.message}`, "error");
      });
  };
  // console.log("data", data);
  // Print module start
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

  useEffect(() => {
    if (printdata !== null) {
      handlePrint();
    }
  }, [printdata]);
  // Print module end
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      {/* <NavbarV2 /> */}
      <NavbarSand />
      {/* <button
        style={{ width: "100%", borderRadius: "8px" }}
        className="custom--login-btn-1 btn"
        onClick={() => {
          setPrintData({ name: "dsfhsdfjsdjkfj" });
        }}
      >
        Generate pdf
      </button> */}
      <div
        style={{ marginLeft: "10%", marginRight: "10%", marginBottom: "4%" }}
      >
        <div className="d-print-block" ref={customPrintRef}>
          {printdata !== null && <Voucher printData={printdata} />}
        </div>
        <div
          style={{
            marginTop: "2%",
            borderRadius: "5px",
            borderStyle: "solid",
            borderColor: "#F5F5F8",
            paddingLeft: "20px",
            paddingTop: "20px",
            paddingRight: window.innerWidth <= 500 && "20px",
            paddingBottom: window.innerWidth <= 500 && "20px",
            backgroundColor: "#FAFBFF",
          }}
        >
          {/* <Radio.Group onChange={onChange} value={value}>
            <Radio value="oneBillID">One Bill ID</Radio>
            <Radio value="cashReceipt">Cash Receipt No</Radio>
          </Radio.Group> */}
          <div>
            <label
              style={{
                marginBottom: "5px",
                // marginTop: "2%",
                fontWeight: "600",
                color: "black",
              }}
            >
              {/* {`Enter ${
                value === "oneBillID"
                  ? "Bill Id"
                  : value === "cashReceipt"
                  ? "Cash Receipt No"
                  : "Bank Receipt No"
              }`} */}
              Enter One Bill ID or Receipt No
            </label>
          </div>

          <Row style={{ marginTop: "5px" }} gutter={16}>
            <Col span={window.innerWidth <= 500 ? 24 : 8}>
              <input
                style={{ borderRadius: "8px", height: "60px" }}
                type="text"
                name="bill Id"
                placeholder={
                  " Enter One Bill ID or  Receipt No"
                  // value === "oneBillID"
                  //   ? "Bill Id"
                  //   : value === "cashReceipt"
                  //   ? "Cash Receipt No"
                  //   : "Bank Receipt No"
                }
                value={state}
                onKeyPress={(event) => {
                  if (!/[0-9,.]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => setState(e.target.value)}
              />
            </Col>
            <Col span={window.innerWidth <= 500 ? 24 : 3}>
              <button
                disabled={loading}
                style={{ width: "100%", borderRadius: "8px" }}
                className="custom--login-btn-1 btn"
                onClick={() => {
                  if (state === "") {
                    swal("Sorry!", `Please enter Bill ID`, "error");
                  } else {
                    handleApi();
                  }
                }}
              >
                {loading ? <Loading /> : "Submit"}
              </button>
            </Col>
          </Row>
        </div>

        {data !== null && (
          <>
            <div
              style={{
                marginTop: "2%",
                borderRadius: "5px",
                borderStyle: "solid",
                borderColor: "#F5F5F8",
                paddingLeft: "20px",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <Row gutter={16}>
                <Col span={window.innerWidth <= 500 ? 24 : 16}>
                  <>
                    <h5 style={{ fontWeight: "580" }}>Invoice Details</h5>
                    <Row style={{ marginTop: "2%" }} gutter={16}>
                      <Col span={window.innerWidth <= 500 ? 24 : 6}>
                        <div>
                          <span style={{ color: "grey", fontWeight: "600" }}>
                            Invoice No
                          </span>
                        </div>
                        <div>
                          <span
                            style={{
                              color: "black",
                              textAlign: "center",
                              fontWeight: "600",
                              wordBreak: "break-word",
                            }}
                          >
                            {data && data?.InvoiceNumber
                              ? data?.InvoiceNumber
                              : "N/A"}
                          </span>
                        </div>
                      </Col>
                      <Col span={window.innerWidth <= 500 ? 24 : 6}>
                        <div>
                          <span style={{ color: "grey", fontWeight: "600" }}>
                            Issue date
                          </span>
                        </div>
                        <div>
                          <span
                            style={{
                              color: "black",
                              textAlign: "center",
                              fontWeight: "600",
                              wordBreak: "break-word",
                            }}
                          >
                            {data && data?.IssueDate ? data?.IssueDate : "N/A"}
                          </span>
                        </div>
                      </Col>
                      <Col span={window.innerWidth <= 500 ? 24 : 6}>
                        <div>
                          <span style={{ color: "grey", fontWeight: "600" }}>
                            Due date
                          </span>
                        </div>
                        <div>
                          <span
                            style={{
                              color: "black",
                              textAlign: "center",
                              fontWeight: "600",
                              wordBreak: "break-word",
                            }}
                          >
                            {data && data?.InvoiceDueDate
                              ? data?.InvoiceDueDate
                              : "N/A"}
                          </span>
                        </div>
                      </Col>
                    </Row>

                    <div
                      style={{
                        marginTop: "5%",
                        borderColor: "#F5F5F8",
                        borderWidth: "1px",
                        borderStyle: "solid",
                      }}
                    />
                    <br />
                  </>

                  <h5 style={{ fontWeight: "580" }}>Client Details</h5>
                  <Row style={{ marginTop: "2%" }} gutter={16}>
                    <Col span={window.innerWidth <= 500 ? 24 : 6}>
                      <div>
                        <span style={{ color: "grey", fontWeight: "600" }}>
                          Name
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "600",
                            wordBreak: "break-word",
                          }}
                        >
                          {data && data?.name ? data?.name : "N/A"}
                        </span>
                      </div>
                    </Col>
                    <Col span={window.innerWidth <= 500 ? 24 : 6}>
                      <div>
                        <span style={{ color: "grey", fontWeight: "600" }}>
                          Phone
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "600",
                            wordBreak: "break-word",
                          }}
                        >
                          {data && data?.phone ? data?.phone : "N/A"}
                        </span>
                      </div>
                    </Col>
                    <Col span={window.innerWidth <= 500 ? 24 : 6}>
                      <div>
                        <span style={{ color: "grey", fontWeight: "600" }}>
                          Email
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "600",
                            wordBreak: "break-word",
                          }}
                        >
                          {data && data?.email
                            ? data?.email
                            : data && data?.voucherData !== null
                            ? data?.voucherData?.email
                            : "N/A"}
                        </span>
                      </div>
                    </Col>
                  </Row>

                  <div
                    style={{
                      marginTop: "5%",
                      borderColor: "#F5F5F8",
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                  />

                  <br />
                  <h5 style={{ fontWeight: "580" }}>Inventory Details</h5>
                  <Row style={{ marginTop: "2%" }} gutter={16}>
                    <Col span={window.innerWidth <= 500 ? 24 : 5}>
                      <div>
                        <span style={{ color: "grey", fontWeight: "600" }}>
                          Project Name
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "600",
                            wordBreak: "break-word",
                          }}
                        >
                          {data && data?.projectName
                            ? data?.projectName
                            : "N/A"}
                        </span>
                      </div>
                    </Col>
                    <Col span={window.innerWidth <= 500 ? 24 : 3}>
                      <div>
                        <span style={{ color: "grey", fontWeight: "600" }}>
                          Plot No
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "600",
                            wordBreak: "break-word",
                          }}
                        >
                          {data && data?.plotNo ? data?.plotNo : "N/A"}
                        </span>
                      </div>
                    </Col>
                    <Col span={window.innerWidth <= 500 ? 24 : 6}>
                      <div>
                        <span style={{ color: "grey", fontWeight: "600" }}>
                          Location
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "600",
                            wordBreak: "break-word",
                          }}
                        >
                          {data && data?.location ? data?.location : "N/A"}
                        </span>
                      </div>
                    </Col>
                    <Col span={window.innerWidth <= 500 ? 24 : 5}>
                      <div>
                        <span style={{ color: "grey", fontWeight: "600" }}>
                          Agency Name
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "600",
                            wordBreak: "break-word",
                          }}
                        >
                          {data && data?.agencyName ? data?.agencyName : "N/A"}
                        </span>
                      </div>
                    </Col>
                    <Col span={window.innerWidth <= 500 ? 24 : 5}>
                      <div>
                        <span style={{ color: "grey", fontWeight: "600" }}>
                          Agency Phone No
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "600",
                            wordBreak: "break-word",
                          }}
                        >
                          {data && data?.agencyPhone
                            ? data?.agencyPhone
                            : "N/A"}
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col span={window.innerWidth <= 500 ? 24 : 8}>
                  <div
                    style={{
                      borderRadius: "5px",
                      borderStyle: "solid",
                      borderColor: "#F5F5F8",
                      paddingLeft: "20px",
                      paddingTop: "20px",
                      paddingRight: "20px",
                      paddingBottom: "20px",
                      marginRight: "3%",
                      marginLeft: window.innerWidth <= 500 && "-3%",
                      marginTop: window.innerWidth <= 500 && "3%",
                    }}
                  >
                    <Row gutter={16}>
                      <Col span={18}>
                        <h6 style={{ fontWeight: "580" }}>Payment Details</h6>
                      </Col>
                      <Col span={6}>
                        <div
                          style={{
                            backgroundColor:
                              data && data?.status === "PAID"
                                ? "#14A800"
                                : "#DC2626",
                            padding: "5px",
                            textAlign: "center",
                            borderRadius: "25px",
                            marginTop: "-8%",
                            color: "white",
                          }}
                        >
                          {data && data?.status
                            ? data?.status.toLowerCase()
                            : "N/A"}
                        </div>
                      </Col>
                    </Row>
                    <div
                      style={{
                        marginTop: "5%",
                        borderColor: "#F5F5F8",
                        borderWidth: "1px",
                        borderStyle: "solid",
                      }}
                    />
                    <div style={{ height: "250px" }}>
                      <Row style={{ marginTop: "4%" }} gutter={16}>
                        <Col span={12}>
                          <span style={{ color: "grey", fontWeight: "600" }}>
                            Paid Date
                          </span>
                        </Col>
                        <Col span={12}>
                          <span
                            style={{
                              color: "black",
                              textAlign: "center",
                              fontWeight: "600",
                            }}
                          >
                            {data && data?.payDate
                              ? data?.payDate
                              : data && data?.voucherData !== null
                              ? data?.voucherData?.propertyWalletInventoryFinalizeSale?.updatedAt.split(
                                  "T"
                                )[0]
                              : "N/A"}
                          </span>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: "4%" }} gutter={16}>
                        <Col span={12}>
                          <span style={{ color: "grey", fontWeight: "600" }}>
                            Deal type
                          </span>
                        </Col>
                        <Col span={12}>
                          <span
                            style={{
                              color: "black",
                              textAlign: "center",
                              fontWeight: "600",
                            }}
                          >
                            {data && data?.dealType
                              ? data?.dealType
                              : data && data?.voucherData !== null
                              ? data?.voucherData?.stageType
                              : "N/A"}
                          </span>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: "4%" }} gutter={16}>
                        <Col span={12}>
                          <span style={{ color: "grey", fontWeight: "600" }}>
                            Stage
                          </span>
                        </Col>
                        <Col span={12}>
                          <span
                            style={{
                              color: "black",
                              textAlign: "center",
                              fontWeight: "600",
                            }}
                          >
                            {data && data?.stageType
                              ? data?.stageType
                              : data && data?.voucherData !== null
                              ? data?.voucherData?.stepNo
                              : "N/A"}
                          </span>
                        </Col>
                      </Row>
                    </div>
                    <Row style={{ marginTop: "4%" }} gutter={16}>
                      <Col span={12}>
                        <span style={{ color: "grey", fontWeight: "600" }}>
                          Amount
                        </span>
                      </Col>
                      <Col span={12}>
                        <span
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "600",
                            wordBreak: "break-word",
                          }}
                        >
                          {data && data?.InvoiceAmount
                            ? data?.InvoiceAmount
                            : data && data?.voucherData !== null
                            ? data?.voucherData
                                ?.propertyWalletInventoryFinalizeSaleStage
                                ?.amount
                            : "N/A"}
                        </span>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "4%" }} gutter={16}>
                      <Col span={12}>
                        <span style={{ color: "grey", fontWeight: "600" }}>
                          Amount in words
                        </span>
                      </Col>
                      <Col span={12}>
                        <span
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "600",
                            wordBreak: "break-word",
                          }}
                        >
                          {data && data?.InvoiceAmount
                            ? numberToText.toWords(
                                parseInt(data?.InvoiceAmount)
                              )
                            : data && data?.voucherData !== null
                            ? numberToText.toWords(
                                parseInt(
                                  data?.voucherData
                                    ?.propertyWalletInventoryFinalizeSaleStage
                                    ?.amount
                                )
                              )
                            : "N/A"}
                        </span>
                      </Col>
                    </Row>
                    {data &&
                      data?.voucherData !== null &&
                      (data?.status === "PAID" ||
                        data?.voucherData
                          ?.propertyWalletInventoryFinalizeSaleStage?.status ===
                          "PAID") && (
                        <Row style={{ marginTop: "4%" }} gutter={16}>
                          <Col span={24}>
                            <button
                              disabled={loading}
                              style={{ width: "100%", borderRadius: "8px" }}
                              className="custom--login-btn-1 btn"
                              onClick={() => {
                                setPrintData(data);
                              }}
                            >
                              Generate pdf
                            </button>
                          </Col>
                        </Row>
                      )}
                  </div>
                </Col>
              </Row>
            </div>
          </>
        )}
      </div>
      <br />
    </div>
  );
};

export default Invoice;
