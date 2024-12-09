import { Button, Grid } from "@material-ui/core";
import frame from "../../../../api/icons/Frame2.svg";
import React, { useEffect, useState } from "react";
import "./certificateOfSale.css";

function CertificatePrintAchievementDownload({
  img,
  setPrintData,
  data,
  disabled = true,
}) {
  const [certificateData, setCertificateData] = useState();
  useEffect(() => {
    setCertificateData({
      name: data?.freeLancerProfile?.name,
      certificateTitle: data?.milestone?.certificate,
      certificateDescription: data?.milestone?.certificateDescription,
      primaryColor: data?.milestone?.primaryColor,
      secondaryColor: data?.milestone?.secondaryColor,
    });
  }, [data]);
  return (
    <div className="certificate-cards-container">
      <div style={{ position: "relative" }}>
        {disabled == true ? (
          <div
            style={{
              position: "absolute",
              left: "50%",
              color: " white",
              top: "50%",
              zIndex: "20",
              fontSize: "57px",
              transform: " translate(-50%,-50%)",
            }}
          >
            <i className="ion-md-lock" />
          </div>
        ) : (
          ""
        )}
        <img
          src={img}
          style={{
            width: "100%",
            filter: disabled ? "brightness(50%)" : "",
          }}
          alt="img"
        />
      </div>
      <div style={{ marginLeft: "1.8%", marginTop: "2.4%" }}>
        <Button
          variant="contained"
          component="label"
          color="primary"
          fullWidth
          onClick={() => setPrintData(certificateData)}
          style={{ borderRadius: "5px", marginTop: "2%" }}
          disabled={disabled}
        >
          {/* <i className="ion-md-print" style={{ fontSize: "23px" }} /> &nbsp; */}
          Print
        </Button>
      </div>
    </div>
  );
}

export default CertificatePrintAchievementDownload;
