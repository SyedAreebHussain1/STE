import { Col, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";

const Cards = ({ data }) => {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <div
          style={{
            borderColor: "#F3F3F3",
            borderWidth: 1,
            borderStyle: "solid",
            padding: "15px",
          }}
        >
          <img src={require("../../../../images/req.png")} />
          <p style={{ marginTop: "15px", fontWeight: "600" }}>
            Total Comission
          </p>
          <h5 style={{ fontWeight: "bold" }}>
            PKR {data?.totalCommission?.amount || 0}
          </h5>
        </div>
      </Col>
      <Col span={6}>
        <div
          style={{
            borderColor: "#F3F3F3",
            borderWidth: 1,
            borderStyle: "solid",
            padding: "15px",
          }}
        >
          <img src={require("../../../../images/req.png")} />
          <p style={{ marginTop: "15px", fontWeight: "600" }}>
            Inventory Sales
          </p>
          <h5 style={{ fontWeight: "bold" }}>{data?.inventorySales || 0}</h5>
        </div>
      </Col>
      {/* <Col span={6}>
        <div
          style={{
            borderColor: "#F3F3F3",
            borderWidth: 1,
            borderStyle: "solid",
            padding: "15px",
          }}
        >
          <img src={require("../../../../images/req.png")} />
          <p style={{ marginTop: "15px", fontWeight: "600" }}>
            Withdraw Request
          </p>
          <h5 style={{ fontWeight: "bold" }}>{data?.withDrawReqCounts || 0}</h5>
        </div>
      </Col>
      <Col span={6}>
        <div
          style={{
            borderColor: "#F3F3F3",
            borderWidth: 1,
            borderStyle: "solid",
            padding: "15px",
          }}
        >
          <img src={require("../../../../images/req.png")} />
          <p style={{ marginTop: "15px", fontWeight: "600" }}>
            Cleared Comission
          </p>
          <h5 style={{ fontWeight: "bold" }}>
            PKR {data?.clearedCommission?.sum || 0}
          </h5>
        </div>
      </Col> */}
    </Row>
  );
};
export default Cards;
