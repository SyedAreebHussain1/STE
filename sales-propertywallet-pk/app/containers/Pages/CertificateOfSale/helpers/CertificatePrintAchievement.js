import React from "react";
import pwCertificateLogo from "../../../../api/images/pwLogoCertificate.jpg";
import stemplogo from "../../../../api/images/stemplogo.png";

const CertificatePrintAchievement = ({ data }) => {
  // Print module start

  return (
    <div style={{ position: "relative" }}>
      <div
        className="firstGrayBackground"
        style={{
          backgroundColor: data.secondaryColor
            ? data.secondaryColor
            : "#a8acac",
        }}
      />
      <div
        className="secondGrayBackground"
        style={{
          backgroundColor: data.secondaryColor
            ? data.secondaryColor
            : "#a8acac",
        }}
      />
      <div
        className="thiredGrayBackground"
        style={{
          backgroundColor: data.secondaryColor
            ? data.secondaryColor
            : "#a8acac",
        }}
      />
      <div
        className="firstGreenBackground"
        style={{
          backgroundColor: data.primaryColor ? data.primaryColor : "#27a3a3",
        }}
      />
      <div
        className="secondGreenBackground"
        style={{
          backgroundColor: data.primaryColor ? data.primaryColor : "#27a3a3",
        }}
      />
      <div className="certificateMainContainer">
        <div className="certificateMainChild">
          <div style={{ marginTop: "90px" }}>
            <img style={{ height: "80px" }} src={pwCertificateLogo} alt="" />{" "}
          </div>
          <div style={{ marginTop: "100px" }}>
            <h1
              style={{
                fontSize: "30px",
                lineHeight: "15px",
              }}
            >
              CERTIFICATE OF SALE ACHIEVEMENT
            </h1>
            <h2 style={{ letterSpacing: "5px", marginTop: "35px" }}>
              <span
                className="bg-gray-light"
                style={{
                  padding: "0px 5px",
                  fontWeight: "600",
                  fontSize: "23px",
                }}
              >
                {" "}
                {data?.certificateTitle}
              </span>
            </h2>
          </div>
          <div style={{ marginTop: "60px" }}>
            <h3
              style={{
                fontWeight: "600",
                fontSize: "21px",
                letterSpacing: "3px",
              }}
            >
              THIS CERTIFICATE PRESENTED TO
            </h3>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h1 style={{ fontSize: "50px", color: "#FFF" }}>
              <span
                style={{
                  background: data.primaryColor ? data.primaryColor : "#27a3a3",
                  padding: "0px 10px",
                }}
              >
                {data?.name}
              </span>
            </h1>
          </div>
          <div style={{ marginTop: "40px" }}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                padding: "0px 15px",
              }}
            >
              <span style={{}}>{data?.certificateDescription}</span>
            </p>
            <div style={{ marginTop: "30px" }}>
              <img style={{ height: "150px" }} src={stemplogo} alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePrintAchievement;
