import { Col, Modal, Result, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
const Sucess = () => {
  const [data, setData] = useState({
    amount: null,
    currency: null,
    card: null,
    card_type: null,
  });

  const { search } = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(search);
    // console.log("🚀 ~ file: Sucess.jsx:15 ~ useEffect ~ query:", query);

    const amount = query.get("amount_cents");
    const card = query.get("source_data.card_num");
    const card_type = query.get("source_data.sub_type");
    const currency = query.get("currency");
    const isSuccess = query.get("success");

    setData({
      ...data,
      amount: parseInt(amount / 100),
      currency: currency,
      card: card,
      card_type: card_type,
      isSuccess: isSuccess,
    });
  }, [search]);
  // console.log("🚀 ~ file: Sucess.jsx:12 ~ Sucess ~ data:", data);
  return (
    <div className="Modal-Sucess">
      <Modal
        visible={true}
        width={700}
        centered
        closable={false}
        footer={false}
      >
        <Result
          status={data?.isSuccess === "true" ? "success" : "error"}
          title={
            data?.isSuccess === "true"
              ? "Your subscription voucher has been successfully purchased"
              : "Transaction failed"
          }
          subTitle={
            data?.isSuccess === "true"
              ? "Redeem your voucher/subscription code in the app to enjoy Property Wallet fully"
              : "Please check your details and try again later."
          }
        />
        {data?.isSuccess === "true" && (
          <div gutter={16} style={{ marginLeft: "10%", marginRight: "10%" }}>
            <Row gutter={16}>
              <Col span={12}>
                <span style={{ color: "grey", fontSize: "16px" }}>
                  Amount paid
                </span>
              </Col>
              <Col span={12}>
                <span
                  style={{
                    color: "grey",
                    float: "right",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {data?.amount || "-"}
                </span>
              </Col>
            </Row>
            <Row style={{ marginTop: "2%" }} gutter={16}>
              <Col span={12}>
                <span style={{ color: "grey", fontSize: "16px" }}>
                  Card type
                </span>
              </Col>
              <Col span={12}>
                <span
                  style={{
                    color: "grey",
                    float: "right",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {data?.card_type || "-"}
                </span>
              </Col>
            </Row>
            <Row style={{ marginTop: "2%" }} gutter={16}>
              <Col span={12}>
                <span style={{ color: "grey", fontSize: "16px" }}>Card No</span>
              </Col>
              <Col span={12}>
                <span
                  style={{
                    color: "grey",
                    float: "right",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {data?.card || "-"}
                </span>
              </Col>
            </Row>
          </div>
        )}
      </Modal>
    </div>
  );
};
export default Sucess;
