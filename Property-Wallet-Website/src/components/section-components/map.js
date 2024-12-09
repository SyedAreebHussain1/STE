import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Map extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div
        style={{ marginTop: "5%", marginLeft: "2%", marginRight: "2%" }} data-aos="fade-up"
        // className="google-map mb-100"
        className="google-map "
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14478.623210085208!2d67.0897558!3d24.8756027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fc488c117ed%3A0x2a28e69612da56a1!2sProperty%20Wallet!5e0!3m2!1sen!2s!4v1680683625244!5m2!1sen!2s"
          width="100%"
          height="80%"
          frameBorder={0}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    );
  }
}

export default Map;
