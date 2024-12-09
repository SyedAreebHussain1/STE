import React from "react";
import CertificatePrint from "./helpers/CertificatePrint";
import "./helpers/certificateOfSale.css";
const CertificateOfSale = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        borderRadius: "8px",
        paddingTop: "2%",
        paddingLeft: "1%",
        paddingRight: "1%",
        paddingBottom: "2%",
        paddingBottom: "20px",
      }}
    >
      <CertificatePrint />
    </div>
  );
};

export default CertificateOfSale;
