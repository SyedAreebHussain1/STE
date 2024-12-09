import { Button, message } from "antd";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import React, { useState } from "react";
import en from "world_countries_lists/data/countries/en/world.json";

const UserInfo = ({ billingUrlByCustomerApi, messagePopUp, billingData }) => {
  const [state, setState] = useState({
    userCode: "",
    phone: {
      code: "+92",
      short: "PK",
      phone: "",
    },
  });
  const onChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  function onSubmit() {
    if (!state.userCode) {
      messagePopUp("User Code is Required", "error");
    } else if (!state.phone.phone) {
      messagePopUp("Phone is Required", "error");
    } else {
      let phone;
      if (state.phone.phone[0] === "0") {
        phone =
          state.phone.code + state.phone.phone.split("").splice(1).join("");
      } else if (state.phone.phone[0] === "3") {
        phone = state.phone.code + state.phone.phone;
      } else {
        messagePopUp("Invalid phone number", "error");
        return;
      }
      //   const phone = state.phone.code.toString().includes("+")
      //     ? `${state.phone.code}${state.phone.phone}`
      //     : `+${state.phone.code}${state.phone.phone}`;
      const userCode = state.userCode;
      billingUrlByCustomerApi(phone, userCode);
    }
  }
  return (
    <div className="billing-main">
      <div className="billing-container">
        <h2>User Info</h2>
        <div className="billing-form-fields">
          <div className="billing-payment-code">
            <label>Payment Code</label>
            <input
              type="text"
              onChange={(e) => onChange(e.target.value, "userCode")}
              value={state.userCode}
            />
          </div>
          <div className="billing-phone">
            <label>Phone</label>
            <ConfigProvider locale={en}>
              <CountryPhoneInput
                inline
                disabled={state?.isCheck}
                onKeyPress={(event) => {
                  if (!/[0-9,.]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                maxLength={20}
                value={state.phone}
                onChange={(e) => onChange(e, "phone")}
                defaultValue={{
                  short: "PK",
                }}
              />
            </ConfigProvider>
          </div>
        </div>
        <div className="payment-proceed">
          <h2>Blinq Payment</h2>
          <Button onClick={onSubmit} loading={billingData.loading}>
            Proceed to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
