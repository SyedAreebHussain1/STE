import React, { useState } from "react";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import check from "../../../images/checkli.png";
import threeStar from "../../../images/star-03.png";
import { useEffect } from "react";

const PricingHandlePer = () => {
  const basic = [
    "Payment Plan Calcalaor",
    "Sale & Quotation",
    "Brochure Generator",
    "Post Generator",
    "Bussiness Card Creator",
    "Inventory Managments",
    "Commission Managment",
    "Staff Managment",
    "Finalize Sale",
    "Sales Order Request",
    "Sales Target",
    "Pw Inventory",
    "Cross-lisiting",
    "Leads Center",
    "Lisiting",
    "Hot Listings",
    "Hot Listings",
    "Commission",
    "User Limit",
  ];
  const [isRadio, setIsRadio] = useState("");
  const [dropDown, setDropDown] = useState();
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeMenuGold, setActiveMenuGold] = useState(true);
  const [activeMenuSilver, setActiveMenuSilver] = useState(true);

  const handleRadio = (e) => {
    setIsRadio(e.target.value);
  };
  function percentage(partialValue, totalValue) {
    return `Save ${Math.round((100 * partialValue) / totalValue)}%`;
  }
  function handleDropDown(pera) {
    // setDropDown(true)
  }
  // console.log('basic', isRadio === 'Yearly' ? percentage(2500 * 12 - 16000, 2500 * 12) : isRadio === '3 Months' ? percentage(2500 * 3 - 6000, 2500 * 3) : isRadio === 'Half Yearly' ? percentage(2500 * 6 - 10000, 2500 * 6) : 2500)
  // console.log('silver', isRadio === 'Yearly' ? percentage(6500 * 12 - 40000, 6500 * 12) : isRadio === '3 Months' ? percentage(6500 * 3 - 15000, 6500 * 3) : isRadio === 'Half Yearly' ? percentage(6500 * 6 - 25000, 6500 * 6) : 6500)
  // console.log('gold', isRadio === 'Yearly' ? percentage(12500 * 12 - 80000, 12500 * 12) : isRadio === '3 Months' ? percentage(12500 * 3 - 30000, 12500 * 3) : isRadio === 'Half Yearly' ? percentage(12500 * 6 - 48000, 12500 * 6) : 12500)
  return (
    <>
      <div className="pricing-wrapper position-relative">
        <div
          className="shape bg-dot primary rellax w-16 h-18"
          data-rellax-speed="1"
          style={{ top: "2rem", right: "-2.4rem" }}
        ></div>
        <div
          className="shape rounded-circle bg-line red rellax w-18 h-18 d-none d-lg-block"
          data-rellax-speed="1"
          style={{ bottom: "0.5rem", left: "-2.5rem" }}
        ></div>
        <div>
          <form
            action=""
            style={{
              width: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <div className="cursor-pointer">
                <div>
                  <label
                    className="cursor-pointer"
                    htmlFor="monthly"
                    style={{
                      fontSize: ".9rem",
                      fontWeight: "500",
                      color: "#60697b",
                    }}
                  >
                    Monthly
                  </label>
                </div>
              </div>
              <div className="cursor-pointer">
                <div>
                  <label
                    className="cursor-pointer"
                    htmlFor="threeMonths"
                    style={{
                      fontSize: ".9rem",
                      fontWeight: "500",
                      color: "#60697b",
                      // marginTop: 'auto',
                      // marginBottom: '0.25rem',
                    }}
                  >
                    3 Months
                  </label>
                </div>
              </div>
              <div className="cursor-pointer">
                <div>
                  <label
                    className="cursor-pointer"
                    htmlFor="halfYearly"
                    style={{
                      fontSize: ".9rem",
                      fontWeight: "500",
                      color: "#60697b",
                      // marginTop: 'auto',
                      // marginBottom: '0.25rem',
                    }}
                  >
                    Half Yearly
                  </label>
                </div>
              </div>
              <div className="cursor-pointer">
                <div>
                  <label
                    className="cursor-pointer"
                    htmlFor="yearly"
                    style={{
                      fontSize: ".9rem",
                      fontWeight: "500",
                      color: "#60697b",
                      // marginTop: 'auto',
                      // marginBottom: '0.25rem',
                    }}
                  >
                    Yearly
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                border: "",
                padding: "5px",
                borderRadius: "25px",
              }}
              className="four-sides-with-same-color"
            >
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <input
                    className="cursor-pointer"
                    type="radio"
                    id="monthly"
                    defaultChecked
                    onChange={handleRadio}
                    name="fav_language"
                    value="Monthly"
                  />
                </div>
                <div>
                  <input
                    className="cursor-pointer"
                    type="radio"
                    id="threeMonths"
                    onChange={handleRadio}
                    name="fav_language"
                    value="3 Months"
                  />
                </div>
                <div>
                  <input
                    className="cursor-pointer"
                    type="radio"
                    id="halfYearly"
                    onChange={handleRadio}
                    name="fav_language"
                    value="Half Yearly"
                  />
                </div>
                <div>
                  <input
                    className="cursor-pointer"
                    type="radio"
                    id="yearly"
                    onChange={handleRadio}
                    name="fav_language"
                    value="Yearly"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=" p-0-mobile" style={{ padding: "50px" }}>
        <div className="row-p">
          <div className="column-p">
            <div
              className="column-p-c "
              style={{ boxShadow: "0px 0px 2px 2px #e7e2e2" }}
            >
              <div
                className="top-two-side-radius "
                style={{
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  backgroundColor: "",
                }}
              >
                <h2
                  style={{
                    lineHeight: "1.3",
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    fontWeight: "700",
                    color: "",
                    wordSpacing: "0.1rem",
                    letterSpacing: "-.01rem",
                    fontSize: "2.7rem",
                  }}
                >
                  Free
                </h2>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <div>
                  {" "}
                  <span
                    style={{
                      fontSize: " 1.5rem",
                      fontSize: ".875rem",
                      fontWeight: "700",
                      color: "#fff",
                      userSelect: "none",
                    }}
                  >
                    Save{" "}
                    {isRadio === "Yearly"
                      ? percentage(2500 * 12 - 16000, 2500 * 12)
                      : isRadio === "3 Months"
                      ? percentage(2500 * 3 - 6000, 2500 * 3)
                      : isRadio === "Half Yearly"
                      ? percentage(2500 * 6 - 10000, 2500 * 6)
                      : ""}
                  </span>
                </div>
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
                  <span style={{ fontSize: "2.7rem" }}>0</span>
                </div>
              </div>
            </div>
            <div
              className="column-p-c "
              style={{
                marginTop: "10px",
                boxShadow: "0px 0px 2px 2px #e7e2e2",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="w-full-mobile" style={{ width: "100%" }}>
                  <ul
                    className=""
                    style={{ listStyle: "none", textAlign: "left", color: "" }}
                  >
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#343f52",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong></strong> Payment Plan Calculator
                      </span>
                    </li>
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#343f52",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong></strong> Sale & Quotation Maker
                      </span>
                    </li>
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#343f52",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong></strong> Brochure Generator{" "}
                      </span>
                    </li>
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#343f52",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong></strong> Post Generator
                      </span>
                    </li>
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#343f52",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong></strong> Business Card Creator{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  display: "block",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <button className="subcrib-button">Download Now</button>
              </div>
            </div>
          </div>
          <div className="column-p">
            <div className="column-p-c bg-27a3a3">
              <div
                className="top-two-side-radius "
                style={{
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  backgroundColor: "#137a76",
                }}
              >
                <h2
                  style={{
                    lineHeight: "1.3",
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    fontWeight: "700",
                    color: "#fff",
                    wordSpacing: "0.1rem",
                    letterSpacing: "-.01rem",
                    fontSize: "2.7rem",
                  }}
                >
                  Basic
                </h2>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <div>
                  {" "}
                  <span
                    style={{
                      fontSize: " 1.5rem",
                      fontSize: ".875rem",
                      fontWeight: "700",
                      color: "#fff",
                    }}
                  >
                    {" "}
                    {isRadio === "Yearly"
                      ? percentage(2500 * 12 - 16000, 2500 * 12)
                      : isRadio === "3 Months"
                      ? percentage(2500 * 3 - 6000, 2500 * 3)
                      : isRadio === "Half Yearly"
                      ? percentage(2500 * 6 - 10000, 2500 * 6)
                      : ""}
                  </span>
                </div>
                <div>
                  {" "}
                  <button
                    style={{ color: "", background: "#27a3a3" }}
                    className=""
                  >
                    {" "}
                  </button>
                </div>
              </div>
              <div className="" style={{ textAlign: "center" }}>
                <div
                  className=""
                  style={{
                    lineHeight: "1.3",
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    fontWeight: "700",
                    color: "#fff",
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
                    {isRadio === "Yearly"
                      ? "16,000"
                      : isRadio === "3 Months"
                      ? "6,000"
                      : isRadio === "Half Yearly"
                      ? "10,000"
                      : "2,500"}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="column-p-c bg-27a3a3"
              style={{ backgroundColor: "#aaa", marginTop: "10px" }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="w-full-mobile" style={{ width: "100%" }}>
                  <ul
                    className=""
                    style={{
                      listStyle: "none",
                      textAlign: "left",
                      color: "#fff",
                    }}
                  >
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong>
                          {" "}
                          {isRadio === "Yearly"
                            ? 3 * 12
                            : isRadio === "3 Months"
                            ? 3 * 3
                            : isRadio === "Half Yearly"
                            ? 3 * 6
                            : 3}{" "}
                        </strong>{" "}
                        Listings
                      </span>
                    </li>
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong> 2</strong> User Limit
                      </span>
                    </li>
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong></strong> Cross-Listing
                      </span>
                    </li>
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong></strong> PW Inventory
                      </span>
                    </li>
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong></strong> Post Generator{" "}
                      </span>
                    </li>
                    {!activeMenu ? (
                      <>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Sale & Quotation{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> ment Plan Calculator{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Brochure Generator{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Bussiness Card Creator{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Inventry Managements{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Commsission Management{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Staff Management{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Finalize Sale{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Sales Order Request{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Sales Target{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Leads Center{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Commission{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Hot Listings{" "}
                          </span>
                        </li>{" "}
                      </>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              </div>
              <div
                style={{
                  display: "block",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <button className="subcrib-button">Subscribe Now</button>
              </div>
              <div
                className="bottom-two-side-radius "
                style={{
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  backgroundColor: "#137a76",
                  marginTop: "10px",
                }}
              >
                <span
                  style={{
                    lineHeight: "1.3",
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    fontWeight: "700",
                    color: "#fff",
                    wordSpacing: "0.1rem",
                    letterSpacing: "-.01rem",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveMenu(!activeMenu)}
                >
                  {" "}
                  {!activeMenu ? (
                    <>
                      View Less <ArrowUpOutlined />{" "}
                    </>
                  ) : (
                    <>
                      View More Detail <ArrowDownOutlined />{" "}
                    </>
                  )}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="column-p" style={{ backgroundColor: "" }}>
            <div
              className="column-p-c bg-b5b8be"
              style={{ backgroundColor: "gray" }}
            >
              <div
                className="top-two-side-radius"
                style={{
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  backgroundColor: "#9ba2a9",
                }}
              >
                <h2
                  style={{
                    lineHeight: "1.3",
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    fontWeight: "700",
                    color: "#343f52",
                    wordSpacing: "0.1rem",
                    letterSpacing: "-.01rem",
                    fontSize: "2.7rem",
                  }}
                >
                  Silver
                </h2>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <div>
                  {" "}
                  <span
                    style={{
                      fontSize: " 1.5rem",
                      fontSize: ".875rem",
                      fontWeight: "700",
                      color: "#343f52",
                    }}
                  >
                    {" "}
                    {isRadio === "Yearly"
                      ? percentage(6500 * 12 - 40000, 6500 * 12)
                      : isRadio === "3 Months"
                      ? percentage(6500 * 3 - 15000, 6500 * 3)
                      : isRadio === "Half Yearly"
                      ? percentage(6500 * 6 - 25000, 6500 * 6)
                      : ""}
                  </span>
                </div>
                <div>
                  {" "}
                  <button
                    style={{ color: "#343f52" }}
                    className="most-popular-btn bg-ffa900"
                  >
                    {" "}
                    <img src={threeStar} /> Most popular
                  </button>
                </div>
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
                  <span style={{ fontSize: "2.7rem" }}>
                    {isRadio === "Yearly"
                      ? "40,000"
                      : isRadio === "3 Months"
                      ? "15,000"
                      : isRadio === "Half Yearly"
                      ? "25,000"
                      : "6,500"}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="column-p-c bg-b5b8be"
              style={{ backgroundColor: "#aaa", marginTop: "10px" }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%" }}>
                  <ul
                    className=""
                    style={{
                      listStyle: "none",
                      textAlign: "left",
                      color: "#343f52",
                    }}
                  >
                    <li
                      style={{
                        fontSize: "1rem",
                        color: "#343f52",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong>
                          {" "}
                          {isRadio === "Yearly"
                            ? 10 * 12
                            : isRadio === "3 Months"
                            ? 10 * 3
                            : isRadio === "Half Yearly"
                            ? 10 * 6
                            : 10}{" "}
                        </strong>{" "}
                        Listings{" "}
                      </span>
                    </li>
                    <li
                      style={{
                        fontSize: "1rem",
                        color: "#343f52",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong> 4 </strong> User Limit{" "}
                      </span>
                    </li>
                    <li
                      style={{
                        fontSize: "1rem",
                        color: "#343f52",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong></strong> Cross-Listing
                      </span>
                    </li>
                    <li
                      style={{
                        fontSize: "1rem",
                        color: "#343f52",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong></strong> PW Inventory{" "}
                      </span>
                    </li>
                    <li
                      style={{
                        fontSize: "1rem",
                        color: "#343f52",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong>
                          {" "}
                          {isRadio === "Yearly"
                            ? 12
                            : isRadio === "3 Months"
                            ? 3
                            : isRadio === "Half Yearly"
                            ? 6
                            : 1}
                        </strong>{" "}
                        Hot Listings{" "}
                      </span>
                    </li>
                    {!activeMenuSilver ? (
                      <>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Payment Plan Calculator{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Sale & Quotation{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Brochure Generator{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Post Generator{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Bussiness Card Creator{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Inventory Managements{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Commission Managements{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Staff Managements{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Finalize Sale{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Sale Order Request{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Sales target{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Leads Center{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#343f52",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Commission{" "}
                          </span>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              </div>
              <div
                style={{
                  display: "block",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <button className="subcrib-button">Subscribe Now</button>
              </div>
              <div
                className="bottom-two-side-radius "
                style={{
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  backgroundColor: "#757e85",
                  marginTop: "10px",
                }}
              >
                <span
                  style={{
                    lineHeight: "1.3",
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    fontWeight: "700",
                    color: "#fff",
                    wordSpacing: "0.1rem",
                    letterSpacing: "-.01rem",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveMenuSilver(!activeMenuSilver)}
                >
                  {" "}
                  {!activeMenuSilver ? (
                    <>
                      View Less <ArrowUpOutlined />{" "}
                    </>
                  ) : (
                    <>
                      View More Detail <ArrowDownOutlined />{" "}
                    </>
                  )}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="column-p" style={{ backgroundColor: "" }}>
            <div
              className="column-p-c bg-c99a2c"
              style={{ backgroundColor: "" }}
            >
              <div
                className="top-two-side-radius"
                style={{
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  backgroundColor: "#c99a2c",
                }}
              >
                <h2
                  style={{
                    lineHeight: "1.3",
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    fontWeight: "700",
                    color: "#fff",
                    wordSpacing: "0.1rem",
                    letterSpacing: "-.01rem",
                    fontSize: "2.7rem",
                  }}
                >
                  Gold
                </h2>
              </div>

              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <div>
                  {" "}
                  <span
                    style={{
                      fontSize: " 1.5rem",
                      fontSize: ".875rem",
                      fontWeight: "700",
                      color: "#fff",
                    }}
                  >
                    {" "}
                    {isRadio === "Yearly"
                      ? percentage(12500 * 12 - 80000, 12500 * 12)
                      : isRadio === "3 Months"
                      ? percentage(12500 * 3 - 30000, 12500 * 3)
                      : isRadio === "Half Yearly"
                      ? percentage(12500 * 6 - 48000, 12500 * 6)
                      : ""}
                  </span>
                </div>
                <div>
                  {" "}
                  <button
                    style={{ color: "", background: "#f2de95" }}
                    className="most-popular-btn "
                  ></button>
                </div>
              </div>
              <div className="" style={{ textAlign: "center" }}>
                <div
                  className=""
                  style={{
                    lineHeight: "1.3",
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    fontWeight: "700",
                    color: "#fff",
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
                    {isRadio === "Yearly"
                      ? "80,000"
                      : isRadio === "3 Months"
                      ? "30,000"
                      : isRadio === "Half Yearly"
                      ? "48,000"
                      : "12,500"}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="column-p-c bg-c99a2c"
              style={{ backgroundColor: "", marginTop: "10px" }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%" }}>
                  <ul
                    className=""
                    style={{
                      listStyle: "none",
                      textAlign: "left",
                      color: "#fff",
                    }}
                  >
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong>
                          {" "}
                          {isRadio === "Yearly"
                            ? 20 * 12
                            : isRadio === "3 Months"
                            ? 20 * 3
                            : isRadio === "Half Yearly"
                            ? 20 * 6
                            : 20}{" "}
                        </strong>{" "}
                        Listings
                      </span>
                    </li>
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong> 8</strong> User Limit
                      </span>
                    </li>
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong></strong> Cross-Listing
                      </span>
                    </li>
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong></strong> Leads Center{" "}
                      </span>
                    </li>
                    <li
                      li
                      style={{
                        fontSize: "1rem",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      <img
                        src={check}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <span>
                        <strong>
                          {isRadio === "Yearly"
                            ? 24
                            : isRadio === "3 Months"
                            ? 6
                            : isRadio === "Half Yearly"
                            ? 12
                            : 2}
                        </strong>{" "}
                        Hot Listings{" "}
                      </span>
                    </li>
                    {!activeMenuGold ? (
                      <>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Sale & Quotation{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> PW Inventory
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Payment Plan Calculator{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Brochure Generator{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Post Generator{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Bussiness Card Creator{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Inventry Managements{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Commsission Management{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Staff Management{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Finalize Sale{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Sales Order Request{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Sales Target{" "}
                          </span>
                        </li>
                        <li
                          style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                          className=""
                        >
                          <img
                            src={check}
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>
                            <strong></strong> Commission{" "}
                          </span>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              </div>
              <div
                style={{
                  display: "block",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <button className="subcrib-button">Subscribe Now</button>
              </div>
              <div
                className="bottom-two-side-radius "
                style={{
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  backgroundColor: "#c99a2c",
                  marginTop: "10px",
                }}
              >
                <span
                  style={{
                    lineHeight: "1.3",
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    fontWeight: "700",
                    color: "#fff",
                    wordSpacing: "0.1rem",
                    letterSpacing: "-.01rem",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveMenuGold(!activeMenuGold)}
                >
                  {" "}
                  {!activeMenuGold ? (
                    <>
                      View Less <ArrowUpOutlined />{" "}
                    </>
                  ) : (
                    <>
                      View More Detail <ArrowDownOutlined />{" "}
                    </>
                  )}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingHandlePer;
