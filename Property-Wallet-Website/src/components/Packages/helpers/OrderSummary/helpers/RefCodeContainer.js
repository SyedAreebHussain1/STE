import React from "react";

const RefCodeContainer = ({ state, setUserData, userData }) => {
  return (
    <div className="packages-main-order-summary-input-ref">
      <h4>Referral Code</h4>
      <input
        type="text"
        onChange={(e) =>
          setUserData({ ...userData, refCode: e?.target?.value })
        }
      />
      <h4>
        Name <span style={{ color: "red" }}>*</span>
      </h4>
      <input
        type="text"
        onChange={(e) => setUserData({ ...userData, name: e?.target?.value })}
      />
      <h4>
        Agent Phone (Code will be sent to this phone)
        <span style={{ color: "red" }}>*</span>
      </h4>
      <input
        type="text"
        placeholder="+923XXXXXXXXX"
        onChange={(e) => setUserData({ ...userData, phone: e?.target?.value })}
      />
      <h4>
        Email (Code will be sent to this email){" "}
        <span style={{ color: "red" }}>*</span>
      </h4>
      <input
        type="text"
        onChange={(e) => setUserData({ ...userData, email: e?.target?.value })}
      />
    </div>
  );
};

export default RefCodeContainer;
