import React from "react";

const CustomSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="loading-spinner-black" />
    </div>
  );
};

export default CustomSpinner;
