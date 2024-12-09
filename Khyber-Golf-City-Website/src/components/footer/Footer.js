import React from "react";
import "./Footer.css";
import logo from "../../assets/whiteee.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              Address: MIRAN MUHAMMAD SHAH ROAD, M.A.C.H.S, KARACHI.
            </p>
            <p>
              Phone: +1230 123 1231.
            </p>
            <p>
              Fax: +12342762178
            </p>
            <p>
            Email: info@squarespace.com
            </p>
            <p>
               Website: www.test.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          <img src={logo} alt="logo" width="100%" height={85} />
          <p style={{marginLeft:30}} className="u-text-small">copyright 2022. Khybergolfcity.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
