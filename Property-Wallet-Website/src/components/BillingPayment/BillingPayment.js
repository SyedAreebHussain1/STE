import React, { useState } from "react";
import UserInfo from "./helpers/UserInfo";
import "./helpers/BillingPayment.css";
import PaymentSuccess from "./helpers/PaymentSuccess";
import axios from "axios";
import { urlLink } from "../../constant/contact-us-constants";
import { billingUrlByCustomer } from "../../constant/BillingConstant";
import { message } from "antd";

const BillingPayment = () => {
  const [billingData, setBillingData] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const messagePopUp = (messagetoShow, type) => {
    if (type === "error") {
      message.error(messagetoShow);
    } else if (type === "success") {
      message.success(messagetoShow);
    }
  };
  async function billingUrlByCustomerApi(phone, code) {
    try {
      setBillingData((prev) => ({
        ...prev,
        loading: true,
      }));
      let res = await axios.get(
        `${urlLink}/${billingUrlByCustomer}?phoneNo=${phone}&code=${code}`
      );
      setBillingData((prev) => ({
        ...prev,
        data: res?.data,
        loading: false,
      }));
      // messagePopUp(res?.data?.message, "success");
      window.location.href = res.data?.data;
    } catch (error) {
      messagePopUp(error?.response?.data?.message, "error");
      setBillingData((prev) => ({
        error: error,
        loading: false,
        data: null,
      }));
    }
  }
  return (
    <>
      <UserInfo
        billingUrlByCustomerApi={billingUrlByCustomerApi}
        messagePopUp={messagePopUp}
        billingData={billingData}
      />
      {/* <PaymentSuccess /> */}
    </>
  );
};

export default BillingPayment;
