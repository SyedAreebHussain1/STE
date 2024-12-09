import React from "react";
import { Link } from "react-router-dom";
import { CheckCircleFilled } from "@ant-design/icons";
import ViewAllFeature from "./ViewAllFeature";
const PwSide = ({
  content,
  heading,
  listItem,
  contentBelow,
  btn,
  handleNavigate,
  name,
}) => {
  return (
    <section className="wrapper topspace bottomspace">
      <div className="container py-14 py-md-16">
        <div className="card01 shadow-lg ">
          <div className="row gx-0">
            <div
              className={`col-lg-6  bg-cover rounded-top rounded-lg-start   ${
                listItem ? "class1" : "class2"
              }  `}
              style={{ backgroundRepeat: "no-repeat" }}
            ></div>
            <div className="col-lg-6">
              <div className="p-10 p-md-11 p-lg-13 " style={{ padding: "3px" }}>
                <h3
                  className="display-5 mb-5"
                  style={{
                    lineHeight: "1.3",
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    padding: "3px",
                    fontWeight: "700",
                    color: "#343f52",
                    wordSpacing: "0.1rem",
                    letterSpacing: "-.01rem",
                    fontSize: "2.5rem",
                  }}
                >
                  {heading}
                </h3>
                <p
                  className="mb-7"
                  style={{
                    display: "block",
                    padding: "3px",
                    fontSize: "18px",
                    marginBlockEnd: "1em",
                    marginInlineStart: "0px",
                    marginInlineEnd: "0px",
                  }}
                >
                  {content}
                </p>

                {listItem?.arrFirst && (
                  <div className="" style={{ display: "flex" }}>
                    <ul className=" bullet-bg " style={{ listStyle: "none" }}>
                      {listItem?.arrFirst?.map((val, i) => {
                        return (
                          <>
                            <li key={i}>
                              {" "}
                              <span>
                                {" "}
                                <CheckCircleFilled
                                  style={{ fontSize: "1rem", color: "#27a3a3" }}
                                />
                                &nbsp; {val}
                              </span>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                    <ul className=" bullet-bg " style={{ listStyle: "none" }}>
                      {listItem?.arrSecond?.map((val, i) => {
                        return (
                          <>
                            <li key={i}>
                              {" "}
                              <span>
                                {" "}
                                <CheckCircleFilled
                                  style={{ fontSize: "1rem", color: "#27a3a3" }}
                                />
                                &nbsp; {val}
                              </span>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {contentBelow && (
                  <div>
                    <p
                      className="mb-7"
                      style={{
                        display: "block",
                        marginBlockStart: "1em",
                        fontSize: "18px",
                        marginBlockEnd: "1em",
                        padding: "10px",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      {contentBelow}
                    </p>
                  </div>
                )}
                {/* <li className="special-link " onClick={handleNavigate}>
                  <Link to="/pricing" className="theme-btn-1 btn btn-effect-1">
                    <span>    
                  {btn}
                    </span>
                  </Link>
                </li> */}
                {/* <button
                  style={{
                    marginTop: "3px",
                    marginBottom: "3px",
                    marginLeft: "3px",
                  }}
                  className="button-25"
                  role="button"
                  onClick={handleNavigate}
                >
                  {btn}
                </button> */}
                <ViewAllFeature name={btn} handleNavigate={handleNavigate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PwSide;
