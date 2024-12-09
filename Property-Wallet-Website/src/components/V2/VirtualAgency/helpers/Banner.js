import React from "react";
import propertywalletapp from "../../../images/propertywalletapp.jpg";

const Banner = () => {
  return (
    <>
      {/* <div className='virtual ' style={{ width: "100%" }} >
                <div className='virtual-banner ' style={{ width: "" }}> </div>
            </div> */}
      <div className="system-view" style={{ width: "100%" }}>
        <div className="virtual-banner "> </div>
      </div>
      <div
        className="mobile-view"
        style={{
          width: "100%",
          padding: "10px",
        }}
      >
        <img src={propertywalletapp} style={{ borderRadius: "20px" }} />
      </div>
    </>
  );
};

export default Banner;
