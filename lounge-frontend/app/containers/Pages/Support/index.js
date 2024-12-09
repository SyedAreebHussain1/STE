import { Button, Grid } from "@material-ui/core";
import frame from "../../../api/icons/Frame2.svg";
import "./style.css";
import React from "react";

function Support() {
  const sendEmail = () => {
    window.location.href = "mailto: info@propertywallet.pk";
  };
  const makePhoneCall = () => {
    window.location.href = "tel:+93311110379"; // Replace with the actual phone number
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        borderRadius: "8px",
        // paddingTop: "2%",
        // paddingLeft: "1%",
        // paddingRight: "1%",
        // paddingBottom: "2%",
        paddingBottom: "20px",
      }}
    >
      <div className="discount-container">
        <Grid container spacing={3}>
          <Grid item md={9} sm={6} xs={12}>
            <div style={{ padding: "30px", marginTop: "5%" }}>
              <h5 style={{ fontWeight: "600", fontSize: "22px" }}>
                Get in touch
              </h5>
              <p style={{ color: "grey" }}>
                Chatting with a support team typically involves engaging in a
                conversation with a group of individuals or a dedicated team
                within an organization that is responsible for addressing
                customer or user inquiries, concerns, and issues.
              </p>
            </div>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <img src={frame} style={{ width: "100%" }} alt="Frame Image" />
          </Grid>
        </Grid>
      </div>
      <Grid
        container
        spacing={2}
        style={{ paddingLeft: "1%", paddingTop: "2%", paddingRight: "1%" }}
      >
        <Grid item md={4} sm={6} xs={12}>
          <div className="support-cards-container">
            <img
              src={require("../../../api/icons/Frame 1583.svg")}
              style={{ width: "10%" }}
              alt="Icon"
            />
            <div style={{ marginLeft: "1.8%", marginTop: "2.4%" }}>
              <p style={{ fontWeight: "600", fontSize: "16px", color: "grey" }}>
                Call
              </p>
              <p
                style={{ fontWeight: "600", fontSize: "16px", color: "black" }}
              >
                +9331-111-0379
              </p>
              <Button
                variant="contained"
                component="label"
                color="primary"
                fullWidth
                onClick={makePhoneCall}
                style={{ borderRadius: "5px", marginTop: "2%" }}
              >
                Call us
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <div className="support-cards-container">
            <img
              src={require("../../../api/icons/Frame 1584.svg")}
              style={{ width: "10%" }}
              alt="Icon"
            />
            <div style={{ marginLeft: "1.8%", marginTop: "2.4%" }}>
              <p style={{ fontWeight: "600", fontSize: "16px", color: "grey" }}>
                Email
              </p>
              <p
                style={{ fontWeight: "600", fontSize: "16px", color: "black" }}
              >
                info@propertywallet.pk
              </p>
              <Button
                variant="contained"
                component="label"
                color="primary"
                fullWidth
                onClick={sendEmail}
                style={{ borderRadius: "5px", marginTop: "2%" }}
              >
                Email us
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <div className="support-cards-container">
            <img
              src={require("../../../api/icons/Frame 1584 (2).svg")}
              style={{ width: "10%" }}
              alt="Icon"
            />
            <div style={{ marginLeft: "1.8%", marginTop: "2.4%" }}>
              <p style={{ fontWeight: "600", fontSize: "16px", color: "grey" }}>
                Website
              </p>
              <p
                style={{ fontWeight: "600", fontSize: "16px", color: "black" }}
              >
                https://www.propertywallet.pk/
              </p>
              <Button
                variant="contained"
                component="label"
                color="primary"
                fullWidth
                onClick={() => {
                  window.open("https://www.propertywallet.pk/");
                }}
                style={{ borderRadius: "5px", marginTop: "2%" }}
              >
                Visit website
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Support;
