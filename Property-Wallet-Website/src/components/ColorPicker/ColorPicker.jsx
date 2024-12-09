import React, { useState, useEffect } from "react";

import { Button, Col, Form, Input, Row } from "antd";
import RGB_IMAGE from "../images/icons8-color-wheel-48.png";
const colors = [
  { color: "#844387" },
  { color: "#AF425C" },
  { color: "#FF3B3B" },
  { color: "#0E5B8A" },
  { color: "#0A4E77" },
  { color: "#22255A" },
  { color: "#844387" },
  { color: "#1E1AEE" },
  { color: "#FF8B28" },
  { color: "#9747FF" },
  { color: "#AF425C" },
  { color: "#FF3B3B" },
  { color: "#0E5B8A" },
  { color: "#0A4E77" },
  { color: "#22255A" },
  { color: "#844387" },
  { color: "#1E1AEE" },
  { color: "#FF8B28" },
  { color: "#9747FF" },
  { color: "#AF425C" },
  { color: "#FF3B3B" },
  { color: "#0E5B8A" },
  { color: "#0A4E77" },
  { color: "#22255A" },
  { color: "#844387" },
  { color: "#1E1AEE" },
  { color: "#FF8B28" },
  { color: "#9747FF" },
];
const ColorPicker = ({ projectLogo, pickedColor, setPickedColor }) => {
  return (
    <div style={{ marginTop: "-2%" }}>
      <Row gutter={16}>
        <Col lg={8} md={24} sm={24} xs={24}>
          <h3>Form Theme</h3>
          <small className="project-add-modal-col1-subtitle">
            Select your form theme
          </small>
        </Col>
        <Col lg={8} md={24} sm={24} xs={24}>
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h4>1. Choose From Color Pallets</h4>
            </Col>
          </Row>
          <Row>
            {colors.map((item, index) => {
              if (pickedColor.id === index) {
                return (
                  <Col lg={3} md={4} sm={6} xs={6}>
                    <div
                      style={{
                        width: "31px",
                        height: "31px",
                        borderRadius: "50px",
                        backgroundColor: `${item.color}`,
                        cursor: "pointer",
                        marginBottom: "7px",
                        boxShadow: " rgba(0, 0, 0, 0.55) 0px 5px 15px",
                      }}
                      onClick={() =>
                        setPickedColor({ color: item.color, id: index })
                      }
                    ></div>
                  </Col>
                );
              } else {
                return (
                  <Col lg={3} md={3} sm={3} xs={3}>
                    <div
                      style={{
                        width: "31px",
                        height: "31px",
                        borderRadius: "50px",
                        backgroundColor: `${item.color}`,
                        cursor: "pointer",
                        marginBottom: "7px",
                      }}
                      onClick={() =>
                        setPickedColor({ color: item.color, id: index })
                      }
                    ></div>
                  </Col>
                );
              }
            })}
          </Row>
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "100%",
                  height: "50px",
                  marginTop: "20px",
                }}
              >
                <Button
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    padding: "0%",
                    justifyContent: "center",
                    alignItems: "center",
                    border: `1px solid #053B5C`,
                  }}
                >
                  <img
                    src={RGB_IMAGE}
                    width={24}
                    style={{ marginRight: "5px", marginTop: "-5px" }}
                    alt="rgb_img"
                  />
                  <h4>Browse From Color Picker</h4>
                </Button>
                <input
                  type="color"
                  value={pickedColor.color}
                  style={{
                    opacity: "0",
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                  onChange={(e) =>
                    setPickedColor({ color: e.target.value, id: null })
                  }
                />
              </div>
            </Col>
          </Row>
        </Col>
        {/* dummy form start */}
        <Col lg={8} md={24} sm={24} xs={24}>
          <Row style={{ marginLeft: "24%" }}>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h4>Preview</h4>
            </Col>
          </Row>
          <Row style={{ marginLeft: "24%" }}>
            <Col lg={3} md={4} sm={6} xs={6}>
              <div
                style={{
                  width: "295px",
                  height: "225px",
                  border: `1px solid ${pickedColor.color}`,
                  borderRadius: "5px",
                  padding: "7px 10px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "50px",
                    border: `1px solid ${pickedColor.color}`,
                    borderRadius: "5px",
                    textAlign: "center",
                    marginBottom: "20px",
                    backgroundColor: `${pickedColor.color}14`,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={projectLogo}
                    alt=" logo"
                    style={{ width: "20%", marginTop: "2%" }}
                  />
                </div>
                {/*  */}
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    border: `1px solid ${pickedColor.color}`,
                    borderRadius: "5px",
                    marginBottom: "5px",
                    backgroundColor: `${pickedColor.color}`,
                  }}
                ></div>
                {/*  */}
                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "5px",
                      borderRadius: "5px",
                      backgroundColor: "#EDEDED",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "77px",
                      height: "10px",
                      border: `1px solid ${pickedColor.color}`,
                      borderRadius: "5px",
                      backgroundColor: `${pickedColor.color}14`,
                    }}
                  ></div>
                  <div
                    style={{
                      width: "77px",
                      height: "10px",
                      border: `1px solid ${pickedColor.color}`,
                      borderRadius: "5px",
                      backgroundColor: `${pickedColor.color}14`,
                    }}
                  ></div>
                </div>
                {/*  */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "5px",
                      borderRadius: "5px",
                      backgroundColor: "#CACACA",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "87px",
                      height: "10px",
                      border: `1px solid ${pickedColor.color}`,
                      borderRadius: "5px",
                      backgroundColor: `${pickedColor.color}14`,
                    }}
                  ></div>
                  <div
                    style={{
                      width: "67px",
                      height: "10px",
                      border: `1px solid ${pickedColor.color}`,
                      borderRadius: "5px",
                      backgroundColor: `${pickedColor.color}14`,
                    }}
                  ></div>
                </div>
                {/*  */}
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    border: `1px solid ${pickedColor.color}`,
                    borderRadius: "5px",
                    marginBottom: "5px",
                    backgroundColor: `${pickedColor.color}`,
                  }}
                ></div>
                {/*  */}
                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "5px",
                      borderRadius: "5px",
                      backgroundColor: "#EDEDED",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "77px",
                      height: "10px",
                      border: `1px solid ${pickedColor.color}`,
                      borderRadius: "5px",
                      backgroundColor: `${pickedColor.color}14`,
                    }}
                  ></div>
                  <div
                    style={{
                      width: "77px",
                      height: "10px",
                      border: `1px solid ${pickedColor.color}`,
                      borderRadius: "5px",
                      backgroundColor: `${pickedColor.color}14`,
                    }}
                  ></div>
                </div>
                {/*  */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "5px",
                      borderRadius: "5px",
                      backgroundColor: "#CACACA",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "87px",
                      height: "10px",
                      border: `1px solid ${pickedColor.color}`,
                      borderRadius: "5px",
                      backgroundColor: `${pickedColor.color}14`,
                    }}
                  ></div>
                  <div
                    style={{
                      width: "67px",
                      height: "10px",
                      border: `1px solid ${pickedColor.color}`,
                      borderRadius: "5px",
                      backgroundColor: `${pickedColor.color}14`,
                    }}
                  ></div>
                </div>
                {/*  */}
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "70%",
                      height: "15px",
                      border: `1px solid ${pickedColor.color}`,
                      borderRadius: "5px",
                      marginBottom: "5px",
                      float: "right",
                      backgroundColor: `${pickedColor.color}`,
                    }}
                  ></div>
                  <div
                    style={{
                      width: "70%",
                      height: "20px",
                      border: `1px solid ${pickedColor.color}`,
                      borderRadius: "5px",
                      marginBottom: "5px",
                      float: "right",
                      backgroundColor: `${pickedColor.color}14`,
                    }}
                  ></div>
                </div>
                {/*  */}
              </div>
            </Col>
          </Row>
        </Col>
        {/* dummy form end */}
      </Row>
    </div>
  );
};
export default ColorPicker;
