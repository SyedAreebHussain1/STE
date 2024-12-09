import React, { useState } from "react";
import { useSelector } from "react-redux";

const RefCodeContainer = ({ state }: any) => {
  const {
    data: { profile },
  } = useSelector((state: any) => state?.getProfile);

  return (
    <div className="packages-main-order-summary-input-ref">
      <h4>
        Referral Code <span style={{ color: "red" }}>*</span>
      </h4>
      {profile?.agency?.refCode ? (
        <input type="text" disabled value={profile?.agency?.refCode} />
      ) : (
        <input
          type="text"
          value={state.refCode}
          onChange={(e) =>
            state.setState((prev: any) => ({
              ...prev,
              refCode: e.target.value,
            }))
          }
        />
      )}
      <h4>
        Name <span style={{ color: "red" }}>*</span>
      </h4>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          state.setState((prev: any) => ({ ...prev, name: e.target.value }))
        }
      />
      {/* <h4>
        Phone (Code will be sent to this phone){" "}
        <span style={{ color: "red" }}>*</span>
      </h4>
      <input
        type="text"
        placeholder="+923XXXXXXXXX"
        value={state.phone}
        onChange={(e) =>
          state.setState((prev) => ({ ...prev, phone: e.target.value }))
        }
      /> */}
      <h4>
        Email (Code will be sent to this email){" "}
        <span style={{ color: "red" }}>*</span>
      </h4>
      <input
        type="text"
        value={state.email}
        onChange={(e) =>
          state.setState((prev: any) => ({ ...prev, email: e.target.value }))
        }
      />
      <h4>
        Agent Phone (Code will be sent to this phone)
        <span style={{ color: "red" }}>*</span>
      </h4>
      <input
        type="text"
        value={state.agentPhone}
        placeholder="+923XXXXXXXXX"
        onChange={(e) =>
          state.setState((prev: any) => ({
            ...prev,
            agentPhone: e.target.value,
          }))
        }
      />
    </div>
  );
};

export default RefCodeContainer;
