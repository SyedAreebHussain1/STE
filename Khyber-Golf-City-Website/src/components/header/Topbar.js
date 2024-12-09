import React, { useEffect, useState } from "react";
import "./Topbar.css";
const Topbar = () => {
  return (
    <div className="top-bar">
      <h2
        style={{
          color: "white",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Powered by kgc
      </h2>
    </div>
  );
};
export default Topbar;
