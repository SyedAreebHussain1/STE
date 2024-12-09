import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class ContactInfo extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div style={{ marginTop: "5%" }} className="ltn__contact-address-area" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/10.png"}
                    alt="Icon Image"
                  />
                </div>
                <h3>Email Address</h3>
                <p>
                  info@propertywallet.pk{" "}
                  <span
                    style={{
                      color: "transparent",
                      cursor: "context-menu",
                      userSelect: "none",
                    }}
                  >
                    hfjdhfjdfhhjfasdfsafsfsdfdsfsdf
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/11.png"}
                    alt="Icon Image"
                  />
                </div>
                <h3>Phone Number</h3>
                <p>
                0331-111-0379{" "}
                  <span
                    style={{
                      color: "transparent",
                      cursor: "context-menu",
                      userSelect: "none",
                    }}
                  >
                    hfjdhfjdfhhjfasdfsafsfsdfdsfsdf
                  </span>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/12.png"}
                    alt="Icon Image"
                  />
                </div>
                <h3>Office Address</h3>
                <p>B-6(C), Miran Mohammad Shah Road, M.A.C.H.S, Karachi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
