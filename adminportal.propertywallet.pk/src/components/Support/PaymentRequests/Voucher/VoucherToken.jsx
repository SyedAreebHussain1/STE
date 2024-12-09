import React from 'react'
// import moment from "moment/moment";

import './Voucher.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import logo from './KGC.png'
import MainLogo from './png.png'
import Check from './check-solid.svg'
import ProjectLogo from './project.png'
import bank from './bank.png'
import slip3 from './new.jpg'
import blinq from './Blinq.jpg'
import urduimage2 from './urduimage2.png'
import urduimage from './urduimage.png'
import scissor from './scissors3.png'
import { internationSystem } from '../../../../utils/utils'
const Voucher = ({ voucherData, token }) => {
  let cnic = [2, 3, 4, 5, 6, 7, 8, 7, 6, 6, 4, 3, 3]

  cnic.splice(5, 0, '-')
  cnic.splice(13, 0, '-')
  let d = new Date().toISOString().split('T')[0]
  //   var date = moment(d).format("DD-MM-YYYY");
  //   let dateArr = [];
  //   for (let i = 0; i < date.length; i++) {
  //     dateArr.push(date[i]);
  //   }
  let dateArr = [19, 2, 2022]
  const cnicOne =
    voucherData?.propertyWalletInventoryFinalizeSaleStage
      ?.propertyWalletInventoryFinalizeSale?.cnic ||
    voucherData?.propertyWalletProductFinalizeSaleStage
      ?.propertyWalletProductFinalizeSale?.cnic
  return (
    <div className="rotate main-voucher-container-project">
      <div
        style={{
          display: 'flex',
          border: '1px solid black',
          fontSize: '18px',
          fontFamily: 'Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif',
          color: 'rgb(33, 33, 33)',
          backgroundColor: 'white',
          fontWeight: '500',
        }}
      >
        <div
          style={{
            width: '116mm',
            border: '1px solid black',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                height: '80px',
                width: '100px',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                objectFit: 'cover',
              }}
            >
              <img
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
                alt="..."
                src={MainLogo}
              />
            </div>
          </div>
          <div className="regForm-header" style={{ marginBottom: '5px' }}>
            {/* //second l;ine */}

            <div
              className="img_text1"
              style={{
                width: '31%',
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              <div
                style={{
                  height: '70px',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                }}
              >
                <img
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                  src={
                    voucherData?.propertyWalletInventorySaleQuotation
                      ?.propertyWalletInventoryPlot?.propertyWalletInventory
                      ?.propertyWalletProject?.BuilderLogo
                  }
                  alt=""
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',

                justifyContent: 'center',
                fontSize: '14px',
                alignContent: 'center',
                width: '38%',
              }}
            >
              <h5
                style={{
                  border: '1px solid black',
                  padding: ' 10px 14px ',
                  borderRadius: '18px',
                  color: 'black',
                  lineHeight: 'initial',
                  textTransform: 'uppercase',
                  width: 'max-content',
                }}
              >
                BANK COPY
              </h5>
            </div>
            <div
              className=" img_text"
              style={{
                width: '31%',
                display: 'flex',
                justifyContent: 'right',
              }}
            >
              <div
                style={{
                  height: '70px',
                  width: '90%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignContent: 'center',
                  justifyContent: 'right',
                }}
              >
                <img
                  src={blinq}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 20px',
            }}
          >
            <div style={{ width: '30%' }}>
              <h2
                style={{
                  border: '1px solid black',
                  padding: '1px 10px',
                  fontSize: '10px',
                  margin: '0',
                  width: 'max-content',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                }}
              >
                bank challan
              </h2>
            </div>
            <div
              style={{
                textAlign: 'left',
                width: '70%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: '12px',
                  fontWeight: '500',
                }}
              >
                <span style={{ width: '180px', fontWeight: 'bold' }}>
                  1 Bill Invoice ID:{' '}
                </span>

                <div
                  style={{
                    borderBottom: '1px solid black',
                    borderTop: '0px',
                    height: '21px',
                    lineHeight: '20px',
                    width: '100%',
                    color: '#28A4A3',
                  }}
                >
                  {voucherData?.blinqInvoice?.oneBillID}
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div style={{ paddingLeft: '15px' }}>
            {' '}
            <div
              style={{
                marginTop: '0px',
                width: '50%',
                fontWeight: 'bold',
                color: '#28A4A3',
              }}
            >
              <h1 style={{ fontSize: '15px', margin: '0px 0px 5px 0px' }}>
                Applicant Information.
              </h1>
            </div>
          </div>
          {/* {/} */}
          <div className="regForm-body">
            <div
              className="section_one"
              style={{ border: '0', padding: '15px 20px 5px 20px', margin: 0 }}
            >
              <div style={{ marginTop: '-15px' }}>
                <div className="flex_margin " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex4"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        Project Name:
                      </div>
                      <div className="flex11">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          value={
                            voucherData?.propertyWalletInventorySaleQuotation
                              ?.propertyWalletInventoryPlot
                              ?.propertyWalletInventory?.propertyWalletProject
                              ?.projectName ||
                            voucherData?.propertyWalletProductSaleQuotation
                              ?.propertyWalletProduct?.title
                          }
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="flex_margin " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex2"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        Name:
                      </div>
                      <div className="flex13">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          value={
                            voucherData?.propertyWalletInventorySaleQuotation
                              ?.clientName ||
                            voucherData?.propertyWalletProductSaleQuotation
                              ?.clientName
                          }
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex" style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span>
                      <div style={{ fontSize: '16px', color: 'black' }}>
                        <label style={{ fontWeight: 'bold' }}>Cnic:</label>
                        &nbsp;&nbsp;
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
                          (item, index) => {
                            if (index !== 5 && index !== 12) {
                              return (
                                <span
                                  className="cnic_col1"
                                  key={index}
                                  style={{ color: 'black' }}
                                ></span>
                              )
                            } else if (index === 5 || index === 12) {
                              return (
                                <>
                                  <span
                                    className="cnic_col1 bgcolor-gray"
                                    key={index}
                                    style={{ color: 'black' }}
                                  >
                                    -
                                  </span>
                                  <span
                                    className="cnic_col1"
                                    key={index}
                                    style={{ color: 'black' }}
                                  ></span>
                                </>
                              )
                            }
                          }
                        )}
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex" style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex7"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        Cell/WhatsApp No:
                      </div>
                      <div className="flex13">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          value={
                            voucherData?.propertyWalletInventorySaleQuotation
                              ?.phone ||
                            voucherData?.propertyWalletProductSaleQuotation
                              ?.phone
                          }
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex7"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        {' '}
                        Email (If available):
                      </div>
                      <div className="flex13">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          value={
                            voucherData?.propertyWalletInventorySaleQuotation
                              ?.lead?.client?.email ||
                            voucherData?.propertyWalletProductSaleQuotation
                              ?.lead?.client?.email
                          }
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex4"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        Amount PKR:{'  '}
                      </div>
                      <div className="flex11">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          value={voucherData?.amount}
                        />
                      </div>
                    </span>
                  </small>
                </div>
              </div>
              <div className="dflex " style={{ marginBottom: '0px' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div>
                    <small className="flex1">
                      <span className="dflex">
                        <span
                          className="cnic_col"
                          style={{ marginTop: '8px', borderRadius: '5px' }}
                        >
                          {/* <img
                            alt="..."
                            src={Check}
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                            }}
                          /> */}
                        </span>
                        <div
                          style={{
                            marginLeft: '3px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                          }}
                        >
                          {' '}
                          Cash
                        </div>
                      </span>
                    </small>
                  </div>
                  <div style={{ marginLeft: '10px' }}>
                    <small className="flex2">
                      <span className="dflex" style={{ width: 'max-content' }}>
                        <span
                          className="cnic_col"
                          style={{ marginTop: '8px', borderRadius: '5px' }}
                        >
                          {/* <img
                            alt="..."
                            src={Check}
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                            }}
                          /> */}
                        </span>
                        <div
                          style={{
                            marginLeft: '3px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                          }}
                        >
                          {' '}
                          Pay Order/Cheque{' '}
                        </div>
                      </span>
                    </small>
                  </div>
                  <div
                    className="flex_margin"
                    style={{
                      marginLeft: '10px',
                      marginBottom: '0px ',
                    }}
                  >
                    <small className="flex1">
                      <span className="dflex">
                        <div
                          className="flex3"
                          style={{ fontSize: '14px', fontWeight: 'bold' }}
                        >
                          Instrument No:
                        </div>
                        <div className="flex2">
                          <input
                            style={{
                              borderTop: 'none',
                              borderRight: 'none',
                              borderLeft: 'none',

                              outline: 'none',
                              background: 'transparent',
                              width: '100%',
                              lineHeight: 'initial',
                              fontSize: '14px',
                              borderColor: 'black',
                              borderBottom: '1px solid',
                            }}
                            type="text"
                            value=""
                          />
                        </div>
                      </span>
                    </small>
                  </div>
                </div>
              </div>

              <div className="dflex " style={{ marginBottom: '0px' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div>
                    <small className="flex1">
                      <span className="dflex">
                        <span
                          className="cnic_col"
                          style={{ marginTop: '8px', borderRadius: '5px' }}
                        >
                          {token && (
                            <img
                              alt="..."
                              src={Check}
                              style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                              }}
                            />
                          )}
                        </span>
                        <div
                          style={{
                            marginLeft: '3px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                          }}
                        >
                          {' '}
                          Token
                        </div>
                      </span>
                    </small>
                  </div>
                  <div style={{ marginLeft: '10px' }}>
                    <small className="flex1">
                      <span className="dflex">
                        <span
                          className="cnic_col"
                          style={{ marginTop: '8px', borderRadius: '5px' }}
                        >
                          {!token && (
                            <img
                              alt="..."
                              src={Check}
                              style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                              }}
                            />
                          )}
                        </span>
                        <div
                          style={{
                            marginLeft: '3px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                          }}
                        >
                          {' '}
                          Down Payment
                        </div>
                      </span>
                    </small>
                  </div>
                </div>
              </div>
              <div className="flex_margin " style={{ marginBottom: '0px' }}>
                <small className="flex1">
                  <span className="dflex">
                    <div
                      className="flex2"
                      style={{ fontSize: '14px', fontWeight: 'bold' }}
                    >
                      Plot Size:
                    </div>
                    <div className="flex9">
                      <input
                        style={{
                          borderTop: 'none',
                          borderRight: 'none',
                          borderLeft: 'none',

                          outline: 'none',
                          background: 'transparent',
                          width: '100%',
                          lineHeight: 'initial',
                          fontSize: '14px',
                          borderColor: 'black',
                          borderBottom: '1px solid',
                        }}
                        type="text"
                        value={`${
                          voucherData?.propertyWalletInventorySaleQuotation
                            ?.propertyWalletInventoryPlot
                            ?.propertyWalletInventory?.landSize ||
                          voucherData?.propertyWalletProductSaleQuotation
                            ?.propertyWalletProduct?.landSize
                        } ${
                          voucherData?.propertyWalletInventorySaleQuotation
                            ?.propertyWalletInventoryPlot
                            ?.propertyWalletInventory?.landArea?.title ||
                          voucherData?.propertyWalletProductSaleQuotation
                            ?.propertyWalletProduct?.landArea?.title
                        }`}
                      />
                    </div>
                  </span>
                </small>
              </div>
              <div
                style={{
                  backgroundColor: 'lightgray',
                  padding: '10px 10px',
                  borderRadius: '5px',
                  width: 'max-content',
                  marginBottom: '3px',
                  marginTop: '3px',
                }}
              >
                <h2
                  style={{
                    fontSize: '14px',
                    margin: '0',
                    lineHeight: 'initial',
                  }}
                >
                  DEPOSITED BY:
                </h2>
              </div>
              <div style={{ width: '100%' }}>
                <div className="dflex " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex2"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        {' '}
                        Name:
                      </div>
                      <div className="flex13">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          // value="Umair Khan"
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex4"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        {' '}
                        Cell Number:
                      </div>
                      <div className="flex12">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          // value="03333335590"
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex1"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        {' '}
                        Cnic:
                      </div>
                      <div className="flex8">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          value=""
                        />
                      </div>
                    </span>
                  </small>
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '16px',
                padding: '0px 20px',
                justifyContent: 'space-between',
                marginTop: '5px',
              }}
            >
              <div className=" text_al_center" style={{ width: '40%' }}>
                <div
                  style={{
                    height: '60px',
                    border: '1px solid black',
                    width: '100%',
                    color: 'lightgray',
                    lineHeight: '20px',
                    textAlign: 'left',
                  }}
                >
                  <small style={{ marginLeft: '5px' }}>Signature</small>
                </div>
                <div
                  style={{
                    width: '100%',
                  }}
                >
                  <small>DEPOSITOR SIGN</small>
                </div>
              </div>

              <div style={{ width: '40%' }}>
                <div
                  style={{
                    height: '60px',
                    width: '100%',
                    borderBottom: '1px solid black',
                  }}
                ></div>
                <div
                  style={{
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <small>BANK STAMP & SIGN</small>
                </div>
              </div>
            </div>
            <div
              className="flex_margin"
              style={{
                margin: '8px 20px 0px',
                fontSize: '16px',
                border: '1px solid black',
                color: 'red',
                padding: '4px 4px',
              }}
            >
              <small
                className="flex1"
                style={{
                  fontSize: '9.5px',
                  lineHeight: '14px',
                  padding: '5px',
                }}
              >
                <div>
                  * THIS RECEIPT HAS TO BE PRESENTED AS PROOF OF PAYMENT
                </div>
                <div>
                  FOR MORE DETAILS VISIT OUR WEBSITE OR CONTACT OUR HELPLINE
                </div>
              </small>
            </div>
            <div
              className="dflex"
              style={{
                marginLeft: '10px',
                fontSize: '16px',
                marginTop: '0px',
                marginBottom: '0px',
                width: '95%',
                justifyContent: 'space-around',
                color: '#28A4A3',
              }}
            >
              <div>
                <span>
                  <FontAwesomeIcon icon={faGlobe} />
                </span>
                <span>
                  <small style={{ paddingLeft: '5px' }}>
                    www.propertywallet.pk
                  </small>
                </span>
              </div>
              <div style={{ display: 'flex' }}>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>
                  <small>+92 331-111-0379</small>
                </span>
              </div>
            </div>
            <div style={{ padding: '0px 10px', marginTop: '-5px' }}>
              <img alt="..." src={urduimage} style={{ width: '100%' }} />
            </div>

            {/* <div
              className="flex_margin"
              style={{
                margin: "15px 20px 10px",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
                height: "55px",
                backgroundColor: "lightgray",
                fontWeight: "500",
                lineHeight: "22px",
                padding: "0px 5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  unicodeBidi: "plaintext",
                  width: "max-content",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    color: "black",
                    unicodeBidi: "plaintext",
                  }}
                >
                  <span>یہ سلپ اِس </span>
                  <span style={{ color: "#28A4A3" }}>
                    {" "}
                    WhatsApp No. +92-335-374-3666{" "}
                  </span>
                  <span
                    className="whatsapplogo"
                    style={{ position: "relative" }}
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      style={{
                        color: "white",
                        fontSize: "20px",
                        marginTop: "3px",
                        background:
                          "radial-gradient(circle at center,  rgb(119, 232, 44) 60%, lightgray 20%)",
                      }}
                    />{" "}
                  </span>
                  <span>پر اپنے موبائل نمبر سے</span>
                  <span style={{ color: "#28A4A3", fontSize: "15px" }}>
                    {" "}
                    Send{" "}
                  </span>
                  <span>کریں تاکہ آپ کی اپلیکیشن کو پروسس کیا جا سکے</span>
                </div>
                <div
                  style={{
                    width: "160px",
                    padding: "0 5px",
                    display: "flex",
                    alignContent: "center",
                    flexWrap: "wrap",
                    position: "relative",
                    left: "5px",
                    color: "red",
                  }}
                >
                  :ضروری ہدایت
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* part2 */}
        <div
          style={{
            position: 'relative',
            margin: '0 5px ',
            width: '.1px',
            height: 'auto',
            display: 'block',

            borderLeft: '2px dashed black',
          }}
        >
          <div
            style={{
              position: 'absolute',
              height: '20px',
              width: '20px',
              left: '-11px',
            }}
          >
            <img
              alt="..."
              src={scissor}
              style={{ width: '20px', height: '20px' }}
            />
          </div>
        </div>
        <div
          style={{
            width: '116mm',
            border: '1px solid black',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                height: '80px',
                width: '100px',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                objectFit: 'cover',
              }}
            >
              <img
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
                alt="..."
                src={MainLogo}
              />
            </div>
          </div>
          <div className="regForm-header" style={{ marginBottom: '5px' }}>
            {/* //second l;ine */}

            <div
              className="img_text1"
              style={{
                width: '31%',
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              <div
                style={{
                  height: '70px',
                  width: '90%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                }}
              >
                <img
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                  src={
                    voucherData?.propertyWalletInventorySaleQuotation
                      ?.propertyWalletInventoryPlot?.propertyWalletInventory
                      ?.propertyWalletProject?.BuilderLogo
                  }
                  alt=""
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',

                justifyContent: 'center',
                fontSize: '14px',
                alignContent: 'center',
                width: '38%',
              }}
            >
              <h5
                style={{
                  border: '1px solid black',
                  padding: ' 10px 14px ',
                  borderRadius: '18px',
                  color: 'black',
                  lineHeight: 'initial',
                  textTransform: 'uppercase',
                  width: 'max-content',
                }}
              >
                CUSTOMER COPY
              </h5>
            </div>
            <div
              className=" img_text"
              style={{
                width: '31%',
                display: 'flex',
                justifyContent: 'right',
              }}
            >
              <div
                style={{
                  height: '70px',
                  width: '90%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignContent: 'center',
                  justifyContent: 'right',
                }}
              >
                <img
                  src={blinq}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>

          {/*  */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '0px 20px',
            }}
          >
            <div style={{ width: '30%' }}>
              <h2
                style={{
                  border: '1px solid black',
                  padding: '1px 10px',
                  fontSize: '10px',
                  margin: '0',
                  width: 'max-content',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                }}
              >
                bank challan
              </h2>
            </div>
            <div
              style={{
                textAlign: 'left',
                width: '70%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: '12px',
                  fontWeight: '500',
                }}
              >
                <span style={{ width: '180px', fontWeight: 'bold' }}>
                  1 Bill Invoice ID:{' '}
                </span>

                <div
                  style={{
                    borderBottom: '1px solid black',
                    borderTop: '0px',
                    height: '21px',
                    lineHeight: '20px',
                    width: '100%',
                    color: '#28A4A3',
                  }}
                >
                  {voucherData?.blinqInvoice?.oneBillID}
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div style={{ paddingLeft: '15px' }}>
            {' '}
            <div
              style={{
                marginTop: '0px',
                width: '50%',
                fontWeight: 'bold',
                color: '#28A4A3',
              }}
            >
              <h1 style={{ fontSize: '15px', margin: '0px 0px 5px 0px' }}>
                Applicant Information.
              </h1>
            </div>
          </div>
          {/* {/} */}
          <div className="regForm-body">
            <div
              className="section_one"
              style={{ border: '0', padding: '15px 20px 5px 20px', margin: 0 }}
            >
              <div style={{ marginTop: '-15px' }}>
                <div className="flex_margin " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex4"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        Project Name:
                      </div>
                      <div className="flex11">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          value={
                            voucherData?.propertyWalletInventorySaleQuotation
                              ?.propertyWalletInventoryPlot
                              ?.propertyWalletInventory?.propertyWalletProject
                              ?.projectName ||
                            voucherData?.propertyWalletProductSaleQuotation
                              ?.propertyWalletProduct?.title
                          }
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="flex_margin " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex2"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        Name:
                      </div>
                      <div className="flex13">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          value={
                            voucherData?.propertyWalletInventorySaleQuotation
                              ?.clientName ||
                            voucherData?.propertyWalletProductSaleQuotation
                              ?.clientName
                          }
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex" style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span>
                      <div style={{ fontSize: '16px', color: 'black' }}>
                        <label style={{ fontWeight: 'bold' }}>Cnic:</label>
                        &nbsp;&nbsp;
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
                          (item, index) => {
                            if (index !== 5 && index !== 12) {
                              return (
                                <span
                                  className="cnic_col1"
                                  key={index}
                                  style={{ color: 'black' }}
                                ></span>
                              )
                            } else if (index === 5 || index === 12) {
                              return (
                                <>
                                  <span
                                    className="cnic_col1 bgcolor-gray"
                                    key={index}
                                    style={{ color: 'black' }}
                                  >
                                    -
                                  </span>
                                  <span
                                    className="cnic_col1"
                                    key={index}
                                    style={{ color: 'black' }}
                                  ></span>
                                </>
                              )
                            }
                          }
                        )}
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex" style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex7"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        Cell/WhatsApp No:
                      </div>
                      <div className="flex13">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          value={
                            voucherData?.propertyWalletInventorySaleQuotation
                              ?.phone || voucherData?.phoneNo
                          }
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex7"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        {' '}
                        Email (If available):
                      </div>
                      <div className="flex13">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          value={
                            voucherData?.propertyWalletInventorySaleQuotation
                              ?.lead?.client?.email ||
                            voucherData?.propertyWalletProductSaleQuotation
                              ?.lead?.client?.email
                          }
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex4"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        Amount PKR:{'  '}
                      </div>
                      <div className="flex11">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          value={voucherData?.amount}
                        />
                      </div>
                    </span>
                  </small>
                </div>
              </div>
              <div className="dflex " style={{ marginBottom: '0px' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div>
                    <small className="flex1">
                      <span className="dflex">
                        <span
                          className="cnic_col"
                          style={{ marginTop: '8px', borderRadius: '5px' }}
                        >
                          {/* <img
                            alt="..."
                            src={Check}
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                            }}
                          /> */}
                        </span>
                        <div
                          style={{
                            marginLeft: '3px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                          }}
                        >
                          {' '}
                          Cash
                        </div>
                      </span>
                    </small>
                  </div>
                  <div style={{ marginLeft: '10px' }}>
                    <small className="flex2">
                      <span className="dflex" style={{ width: 'max-content' }}>
                        <span
                          className="cnic_col"
                          style={{ marginTop: '8px', borderRadius: '5px' }}
                        >
                          {/* <img
                            alt="..."
                            src={Check}
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                            }}
                          /> */}
                        </span>
                        <div
                          style={{
                            marginLeft: '3px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                          }}
                        >
                          {' '}
                          Pay Order/Cheque{' '}
                        </div>
                      </span>
                    </small>
                  </div>
                  <div
                    className="flex_margin"
                    style={{
                      marginLeft: '10px',
                      marginBottom: '0px ',
                    }}
                  >
                    <small className="flex1">
                      <span className="dflex">
                        <div
                          className="flex3"
                          style={{ fontSize: '14px', fontWeight: 'bold' }}
                        >
                          Instrument No:
                        </div>
                        <div className="flex2">
                          <input
                            style={{
                              borderTop: 'none',
                              borderRight: 'none',
                              borderLeft: 'none',

                              outline: 'none',
                              background: 'transparent',
                              width: '100%',
                              lineHeight: 'initial',
                              fontSize: '14px',
                              borderColor: 'black',
                              borderBottom: '1px solid',
                            }}
                            type="text"
                            value=""
                          />
                        </div>
                      </span>
                    </small>
                  </div>
                </div>
              </div>

              <div className="dflex " style={{ marginBottom: '0px' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div>
                    <small className="flex1">
                      <span className="dflex">
                        <span
                          className="cnic_col"
                          style={{ marginTop: '8px', borderRadius: '5px' }}
                        >
                          {token && (
                            <img
                              alt="..."
                              src={Check}
                              style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                              }}
                            />
                          )}
                        </span>
                        <div
                          style={{
                            marginLeft: '3px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                          }}
                        >
                          {' '}
                          Token
                        </div>
                      </span>
                    </small>
                  </div>
                  <div style={{ marginLeft: '10px' }}>
                    <small className="flex1">
                      <span className="dflex">
                        <span
                          className="cnic_col"
                          style={{ marginTop: '8px', borderRadius: '5px' }}
                        >
                          {!token && (
                            <img
                              alt="..."
                              src={Check}
                              style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                              }}
                            />
                          )}
                        </span>
                        <div
                          style={{
                            marginLeft: '3px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                          }}
                        >
                          {' '}
                          Down Payment
                        </div>
                      </span>
                    </small>
                  </div>
                </div>
              </div>
              <div className="flex_margin " style={{ marginBottom: '0px' }}>
                <small className="flex1">
                  <span className="dflex">
                    <div
                      className="flex2"
                      style={{ fontSize: '14px', fontWeight: 'bold' }}
                    >
                      Plot Size:
                    </div>
                    <div className="flex9">
                      <input
                        style={{
                          borderTop: 'none',
                          borderRight: 'none',
                          borderLeft: 'none',

                          outline: 'none',
                          background: 'transparent',
                          width: '100%',
                          lineHeight: 'initial',
                          fontSize: '14px',
                          borderColor: 'black',
                          borderBottom: '1px solid',
                        }}
                        type="text"
                        value={`${
                          voucherData?.propertyWalletInventorySaleQuotation
                            ?.propertyWalletInventoryPlot
                            ?.propertyWalletInventory?.landSize ||
                          voucherData?.propertyWalletProductSaleQuotation
                            ?.propertyWalletProduct?.landSize
                        } ${
                          voucherData?.propertyWalletInventorySaleQuotation
                            ?.propertyWalletInventoryPlot
                            ?.propertyWalletInventory?.landArea?.title ||
                          voucherData?.propertyWalletProductSaleQuotation
                            ?.propertyWalletProduct?.landArea?.title
                        }`}
                      />
                    </div>
                  </span>
                </small>
              </div>
              <div
                style={{
                  backgroundColor: 'lightgray',
                  padding: '10px 10px',
                  borderRadius: '5px',
                  width: 'max-content',
                  marginBottom: '3px',
                  marginTop: '3px',
                }}
              >
                <h2
                  style={{
                    fontSize: '14px',
                    margin: '0',
                    lineHeight: 'initial',
                  }}
                >
                  DEPOSITED BY:
                </h2>
              </div>
              <div style={{ width: '100%' }}>
                <div className="dflex " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex2"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        {' '}
                        Name:
                      </div>
                      <div className="flex13">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          // value="Umair Khan"
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex4"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        {' '}
                        Cell Number:
                      </div>
                      <div className="flex12">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          // value="03333335590"
                        />
                      </div>
                    </span>
                  </small>
                </div>
                <div className="dflex " style={{ marginBottom: '0px' }}>
                  <small className="flex1">
                    <span className="dflex">
                      <div
                        className="flex1"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                      >
                        {' '}
                        Cnic:
                      </div>
                      <div className="flex8">
                        <input
                          style={{
                            borderTop: 'none',
                            borderRight: 'none',
                            borderLeft: 'none',
                            outline: 'none',
                            background: 'transparent',
                            width: '100%',
                            lineHeight: 'initial',
                            fontSize: '14px',
                            borderColor: 'black',
                            borderBottom: '1px solid',
                          }}
                          type="text"
                          value=""
                        />
                      </div>
                    </span>
                  </small>
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '16px',
                padding: '0px 20px',
                justifyContent: 'space-between',
                marginTop: '5px',
              }}
            >
              <div className=" text_al_center" style={{ width: '40%' }}>
                <div
                  style={{
                    height: '60px',
                    border: '1px solid black',
                    width: '100%',
                    color: 'lightgray',
                    lineHeight: '20px',
                    textAlign: 'left',
                  }}
                >
                  <small style={{ marginLeft: '5px' }}>Signature</small>
                </div>
                <div
                  style={{
                    width: '100%',
                  }}
                >
                  <small>DEPOSITOR SIGN</small>
                </div>
              </div>

              <div style={{ width: '40%' }}>
                <div
                  style={{
                    height: '60px',
                    width: '100%',
                    borderBottom: '1px solid black',
                  }}
                ></div>
                <div
                  style={{
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <small>BANK STAMP & SIGN</small>
                </div>
              </div>
            </div>
            <div
              className="flex_margin"
              style={{
                margin: '8px 20px 0px',
                fontSize: '16px',
                border: '1px solid black',
                color: 'red',
                padding: '4px 4px',
              }}
            >
              <small
                className="flex1"
                style={{
                  fontSize: '9.5px',
                  lineHeight: '14px',
                  padding: '5px',
                }}
              >
                <div>
                  * THIS RECEIPT HAS TO BE PRESENTED AS PROOF OF PAYMENT
                </div>
                <div>
                  FOR MORE DETAILS VISIT OUR WEBSITE OR CONTACT OUR HELPLINE
                </div>
              </small>
            </div>
            <div
              className="dflex"
              style={{
                marginLeft: '10px',
                fontSize: '16px',
                marginTop: '0px',
                marginBottom: '0px',
                width: '95%',
                justifyContent: 'space-around',
                color: '#28A4A3',
              }}
            >
              <div>
                <span>
                  <FontAwesomeIcon icon={faGlobe} />
                </span>
                <span>
                  <small style={{ paddingLeft: '5px' }}>
                    www.propertywallet.pk
                  </small>
                </span>
              </div>
              <div style={{ display: 'flex' }}>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>
                  <small>+92 331-111-0379</small>
                </span>
              </div>
            </div>
            <div style={{ padding: '0px 10px' }}>
              <img alt="..." src={urduimage2} style={{ width: '100%' }} />
            </div>
            {/* <div
              className="flex_margin"
              style={{
                margin: "15px 20px 10px",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
                height: "55px",
                backgroundColor: "lightgray",
                fontWeight: "500",
                lineHeight: "22px",
                padding: "0px 5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  unicodeBidi: "plaintext",
                  width: "max-content",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    color: "black",
                    unicodeBidi: "plaintext",
                  }}
                >
                  <span>یہ سلپ اِس </span>
                  <span style={{ color: "#28A4A3" }}>
                    {" "}
                    WhatsApp No. +92-335-374-3666{" "}
                  </span>
                  <span
                    className="whatsapplogo"
                    style={{ position: "relative" }}
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      style={{
                        color: "white",
                        fontSize: "20px",
                        marginTop: "3px",
                        background:
                          "radial-gradient(circle at center,  rgb(119, 232, 44) 60%, lightgray 20%)",
                      }}
                    />{" "}
                  </span>
                  <span>پر اپنے موبائل نمبر سے</span>
                  <span style={{ color: "#28A4A3", fontSize: "15px" }}>
                    {" "}
                    Send{" "}
                  </span>
                  <span>کریں تاکہ آپ کی اپلیکیشن کو پروسس کیا جا سکے</span>
                </div>
                <div
                  style={{
                    width: "160px",
                    padding: "0 5px",
                    display: "flex",
                    alignContent: "center",
                    flexWrap: "wrap",
                    position: "relative",
                    left: "5px",
                    color: "red",
                  }}
                >
                  :ضروری ہدایت
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div style={{ width: '116mm', border: '1px solid black' }}>
          <img
            alt="..."
            src={slip3}
            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default Voucher
