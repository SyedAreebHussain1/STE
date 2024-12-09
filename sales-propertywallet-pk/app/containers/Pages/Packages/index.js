import React from "react";
import PackagesList from "./helper/PackagesListing";

function Packages() {
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
      <PackagesList />
      {/* <h2>Packages</h2> */}
    </div>
  );
}

export default Packages;
