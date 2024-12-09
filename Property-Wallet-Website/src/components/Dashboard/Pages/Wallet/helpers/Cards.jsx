import {
  faArrowTrendUp,
  faCircleChevronRight,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Modal, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import WithdrawModal from "./WithdrawModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllInvestorDebitAndCreditHistory } from "../../../../../store/action/saleOrderAction";

const Cards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const investorID = JSON.parse(localStorage.getItem("user")).id;

  const { allInvesterTransactionDebitAndCreditHistory } = useSelector(
    (state) => state.saleOrder
  );

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleApiCall = () => {
    dispatch(getAllInvestorDebitAndCreditHistory(investorID));
  };
  useEffect(() => {
    setData(allInvesterTransactionDebitAndCreditHistory);
  }, [allInvesterTransactionDebitAndCreditHistory]);
  useEffect(() => {
    handleApiCall();
  }, []);

  return (
    <Row gutter={16}>
      <Col span={9}>
        <div
          style={{
            borderColor: "#F3F3F3",
            borderWidth: 1,
            borderStyle: "solid",
            padding: "15px",
          }}
        >
          {/* <img src={require("../../../../images/req.png")} /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "31px",
              // gap: "300px",
            }}
          >
            <div style={{ verticalAlign: "middle" }}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  margin: 0,
                }}
              >
                Wallet Balance
              </p>
            </div>
            <div>
              <button
                onClick={showModal}
                style={{
                  padding: "6px 12px",
                  borderRadius: "20px",
                  background: "#27A3A3",
                  color: "white",
                  fontWeight: "500",
                  fontSize: "12px",
                }}
              >
                <span
                  style={{
                    marginRight: "5px",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15.5C12.1355 15.5 15.5 12.1355 15.5 8C15.5 3.86453 12.1355 0.5 8 0.5C3.86452 0.5 0.5 3.86453 0.5 8C0.5 12.1355 3.86452 15.5 8 15.5ZM8 14.375C4.47252 14.375 1.625 11.5275 1.625 8C1.625 4.47252 4.47252 1.625 8 1.625C11.5275 1.625 14.375 4.47252 14.375 8C14.375 11.5275 11.5275 14.375 8 14.375ZM5.94849 10.6301C6.09457 10.6259 6.23326 10.5649 6.33521 10.4602L9.125 7.67041V9.3125C9.12395 9.38704 9.13772 9.46104 9.16551 9.53021C9.19331 9.59938 9.23457 9.66234 9.28691 9.71542C9.33925 9.7685 9.40161 9.81065 9.47038 9.83943C9.53915 9.8682 9.61295 9.88301 9.6875 9.88301C9.76205 9.88301 9.83585 9.8682 9.90462 9.83943C9.97339 9.81065 10.0358 9.7685 10.0881 9.71542C10.1404 9.66234 10.1817 9.59938 10.2095 9.53021C10.2373 9.46104 10.2511 9.38704 10.25 9.3125V6.38354C10.2618 6.29752 10.2535 6.20993 10.2257 6.12765C10.198 6.04537 10.1516 5.97062 10.0902 5.90926C10.0288 5.84789 9.95396 5.80159 9.87164 5.77396C9.78933 5.74633 9.70174 5.73813 9.61572 5.75H6.6875C6.61296 5.74895 6.53896 5.76272 6.46979 5.79051C6.40062 5.81831 6.33766 5.85957 6.28458 5.91191C6.2315 5.96425 6.18935 6.02661 6.16057 6.09538C6.1318 6.16415 6.11699 6.23796 6.11699 6.3125C6.11699 6.38704 6.1318 6.46085 6.16057 6.52962C6.18935 6.59839 6.2315 6.66075 6.28458 6.71309C6.33766 6.76543 6.40062 6.80669 6.46979 6.83449C6.53896 6.86228 6.61296 6.87605 6.6875 6.875H8.32959L5.53979 9.66479C5.45864 9.74383 5.40324 9.84552 5.38084 9.95656C5.35844 10.0676 5.37009 10.1828 5.41425 10.2871C5.45841 10.3914 5.53304 10.48 5.62836 10.5412C5.72368 10.6024 5.83526 10.6334 5.94849 10.6301Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Withdraw Amount
              </button>
            </div>
          </div>

          <h5
            style={{
              fontWeight: "bold",
              marginTop: "20px",
              fontSize: "29.3px",
              marginBottom: "0",
            }}
          >
            PKR{" "}
            {data && data?.InvestorWalletResult?.amount != null
              ? data?.InvestorWalletResult?.amount
              : 0}
          </h5>
          <div
            style={{
              marginTop: "8px",
            }}
          >
            <span
              style={{
                padding: "3px 10px",
                color: "red",
                borderRadius: "10px",
                background: "rgb(247 115 115 / 39%)",
                fontSize: "14px",
              }}
            >
              <FontAwesomeIcon icon={faArrowTrendUp} />
            </span>
            <span
              style={{
                marginLeft: "5px",
                verticalAlign: "middle",
                fontSize: "14px",
                color: "gray",
                fontFamily: "700",
              }}
            >
              PKR 20,000
            </span>
          </div>
        </div>
      </Col>
      <Col span={9}>
        <div
          style={{
            borderColor: "#F3F3F3",
            borderWidth: 1,
            borderStyle: "solid",
            padding: "15px",
          }}
        >
          {/* <img src={require("../../../../images/req.png")} /> */}
          <p
            style={{
              fontWeight: "600",
              fontSize: "15px",
              margin: 0,
              height: "31px",
            }}
          >
            Withdraw Amount
          </p>
          <h5
            style={{
              fontWeight: "bold",
              marginTop: "20px",
              fontSize: "29.3px",
              marginBottom: "0",
            }}
          >
            PKR{" "}
            {data && data?.withDrawAmount?.sum != null
              ? data?.withDrawAmount?.sum
              : 0}
          </h5>
          <div
            style={{
              marginTop: "8px",
            }}
          >
            <span
              style={{
                padding: "3px 10px",
                color: "green",
                borderRadius: "10px",
                fontSize: "14px",
                background: "rgb(221,255,221)",
              }}
            >
              <FontAwesomeIcon icon={faArrowTrendUp} />
            </span>
            <span
              style={{
                marginLeft: "5px",
                verticalAlign: "middle",
                fontSize: "14px",
                color: "gray",
                fontFamily: "700",
              }}
            >
              PKR 20,000
            </span>
          </div>
        </div>
      </Col>
      <WithdrawModal
        visible={isModalOpen}
        handleOk={handleOk}
        handleClose={handleCancel}
      />
    </Row>
  );
};
export default Cards;
