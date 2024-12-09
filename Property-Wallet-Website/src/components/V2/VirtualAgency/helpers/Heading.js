import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className=" text-center">
      <div className="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative">
        <h3
          className="display-3 mb-12 text-center"
          style={{
            lineHeight: "1.3",
            marginTop: "0",
            marginBottom: "0.5rem",
            fontWeight: "700",
            color: "#343f52",
            wordSpacing: "0.1rem",
            letterSpacing: "-.01rem",
            fontSize: "2.5rem",
          }}
        >
          {heading}
          {/* Unlock the Future of Property Marketing with Our
          <span className="" style={{ color: "#27a3a3" }}>
            Property Wallet App
          </span>{" "} */}
        </h3>
      </div>
    </div>
  );
};

export default Heading;
