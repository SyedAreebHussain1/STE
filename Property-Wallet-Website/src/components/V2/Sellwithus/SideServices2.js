import React from "react";
import checkbox from "../../images/checkbox.png";
const OurServices = ({ gallery }) => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <div>
        <div
          className="block-flex"
          style={{ justifyContent: "center", padding: "5px" }}
        >
          <div
            style={{ alignItems: "center", display: "flex", padding: "5px" }}
          >
            <div style={{ alignItems: "center" }}>
              <div style={{ display: "flex", marginTop: "8%" }}>
                <div>
                  <img width="50%" src={checkbox} />{" "}
                </div>{" "}
                <div>
                  <span className="bold">Payment Plan Creation</span>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "8%" }}>
                <div>
                  <img width="50%" src={checkbox} />{" "}
                </div>{" "}
                <div>
                  <span className="bold">Social Media Campaigns</span>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "8%" }}>
                <div>
                  <img width="50%" src={checkbox} />{" "}
                </div>{" "}
                <div>
                  <span className="bold"> Lead Management</span>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "8%" }}>
                <div>
                  <img width="50%" src={checkbox} />{" "}
                </div>{" "}
                <div>
                  <span className="bold">Inventory Management</span>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "8%" }}>
                <div>
                  <img width="50%" src={checkbox} />{" "}
                </div>{" "}
                <div>
                  <span className="bold">File Management</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full"
            style={{ textAlign: "center", alignItems: "center", width: "60%" }}
          >
            <div>
              <img src={gallery} />
            </div>
          </div>
          <div
            style={{ alignItems: "center", display: "flex", padding: "5px" }}
          >
            <div>
              <div style={{ display: "flex", marginTop: "8%" }}>
                <div>
                  <img width="50%" src={checkbox} />{" "}
                </div>{" "}
                <div>
                  <span className="bold">Biometric Solution</span>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "8%" }}>
                <div>
                  <img width="50%" src={checkbox} />{" "}
                </div>{" "}
                <div>
                  <span className="bold">Recovery Management</span>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "8%" }}>
                <div>
                  <img width="50%" src={checkbox} />{" "}
                </div>{" "}
                <div>
                  <span className="bold">Report & Analytics</span>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "8%" }}>
                <div>
                  <img width="50%" src={checkbox} />{" "}
                </div>{" "}
                <div>
                  <span className="bold">Customer Sales Services</span>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "8%" }}>
                <div>
                  <img width="50%" src={checkbox} />{" "}
                </div>{" "}
                <div>
                  <span className="bold">Transfer Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
